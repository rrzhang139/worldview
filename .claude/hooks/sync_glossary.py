#!/usr/bin/env python3
"""UserPromptSubmit hook: surface highlighted terms not yet in glossary.

Reads learning-queue.md, finds entries from the highlight Add button whose
terms aren't yet keys in glossary.json, and prints a system-reminder asking
Claude to define them as part of the response. Silent when nothing's new.

The output goes to stdout and gets injected into Claude's prompt context
(via the UserPromptSubmit hook's stdout-as-additional-context mechanism).
"""

import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
QUEUE = ROOT / "learning-queue.md"
GLOSSARY = ROOT / "glossary.json"

# Skip if Claude is operating in a different project.
project_dir = os.environ.get("CLAUDE_PROJECT_DIR")
if project_dir and Path(project_dir).resolve() != ROOT:
    sys.exit(0)

if not QUEUE.exists() or not GLOSSARY.exists():
    sys.exit(0)

try:
    glossary = json.loads(GLOSSARY.read_text())
except (json.JSONDecodeError, OSError):
    sys.exit(0)
known = {k.lower() for k in glossary.get("entries", {}).keys()}

queue_text = QUEUE.read_text()

# Split into sections at each ## heading.
sections = re.split(r"\n(?=## )", queue_text)

HIGHLIGHT_TAG_RE = re.compile(r"^\*\[[\d\-: ]+\] via highlight\*$")
CONTEXT_RE = re.compile(r"^\*\*Context:\*\*\s*(.*)$")

unsynced = []
seen = set()

for section in sections:
    if not section.startswith("## "):
        continue
    lines = section.split("\n")
    term = lines[0][3:].strip()
    if not term:
        continue
    # Verify this is a "via highlight" entry by scanning nearby tag lines.
    is_highlight = any(
        HIGHLIGHT_TAG_RE.match(line.strip())
        for line in lines[1:6]
        if line.strip()
    )
    if not is_highlight:
        continue
    key = term.lower()
    if key in known or key in seen:
        continue
    # Pull context: everything between **Context:** and the blank line before ---.
    context_lines = []
    in_context = False
    for line in lines[1:]:
        if line.startswith("---"):
            break
        m = CONTEXT_RE.match(line)
        if m:
            in_context = True
            head = m.group(1).strip()
            if head:
                context_lines.append(head)
            continue
        if in_context:
            stripped = line.strip()
            if not stripped:
                # Allow a single blank line, but stop if the next non-blank is **bold** (new section)
                break
            if stripped.startswith("**") and stripped.endswith("**"):
                break
            context_lines.append(stripped)
    context = " ".join(context_lines).strip()
    if len(context) > 400:
        context = context[:400].rstrip() + "…"
    seen.add(key)
    unsynced.append((term, context or "(no context recorded)"))

if not unsynced:
    sys.exit(0)

# Cap at 8 to keep injected context small.
unsynced = unsynced[:8]

lines = [
    "<system-reminder>",
    f"The user has highlighted {len(unsynced)} term(s) in the worldview dashboard "
    f"that don't yet have entries in `glossary.json`. **As part of answering the "
    f"user's current message, append a glossary entry for each one** to "
    f"`{GLOSSARY}`, following the format and style rules in this repo's `CLAUDE.md` "
    f"(1–3 sentences, anchored to the macro/finance context, plain English, optional "
    f"`theme` and `see_also`). Then continue with the user's actual question.",
    "",
    "Terms and the original context where they were highlighted:",
    "",
]
for term, context in unsynced:
    lines.append(f"- **{term}**")
    lines.append(f"  > {context}")
    lines.append("")
lines.append("</system-reminder>")

print("\n".join(lines))
