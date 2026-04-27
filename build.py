#!/usr/bin/env python3
"""Regenerate manifest.json by scanning themes/, briefs/, metrics/."""

import json
import re
from pathlib import Path

ROOT = Path(__file__).parent


def parse_frontmatter(text: str) -> tuple[dict, str]:
    if not text.startswith("---\n"):
        return {}, text
    end = text.find("\n---\n", 4)
    assert end != -1, "frontmatter not closed"
    fm_block = text[4:end]
    body = text[end + 5 :]
    fm = {}
    for line in fm_block.splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            fm[k.strip()] = v.strip()
    return fm, body


def collect_themes() -> list[dict]:
    themes = []
    for path in sorted((ROOT / "themes").glob("*.md")):
        text = path.read_text()
        fm, _ = parse_frontmatter(text)
        themes.append(
            {
                "id": path.stem,
                "file": f"themes/{path.name}",
                "title": fm.get("title", path.stem),
                "pillar": fm.get("pillar", "Uncategorized"),
            }
        )
    return themes


def collect_briefs() -> list[dict]:
    briefs = []
    for path in sorted((ROOT / "briefs").glob("*-brief.md"), reverse=True):
        text = path.read_text()
        fm, _ = parse_frontmatter(text)
        briefs.append(
            {
                "id": path.stem,
                "file": f"briefs/{path.name}",
                "week": fm.get("week", path.stem),
                "date_range": fm.get("date_range", ""),
            }
        )
    return briefs


def main() -> None:
    manifest = {
        "themes": collect_themes(),
        "briefs": collect_briefs(),
        "metrics_file": "metrics/data.json",
    }
    out = ROOT / "manifest.json"
    out.write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"wrote {out} — {len(manifest['themes'])} themes, {len(manifest['briefs'])} briefs")


if __name__ == "__main__":
    main()
