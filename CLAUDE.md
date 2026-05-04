# Worldview — Mental Models from World Events

This repo is a **synthesis system**, not a news aggregator. Goal: build durable mental models of macro, geopolitics, AI/tech, and capital markets over years by tracking a small set of structural questions instead of chasing headlines.

## Operating principles (read every time)

1. **Signal over recency.** A weekly brief that updates 14 themes beats a daily firehose. Do not write daily briefs unless explicitly asked.
2. **Source discipline.** Pull only from sources in `sources.md`. If a development is only on Twitter/HN/Reddit and not yet in a primary source, ignore it. The point is to *not* be first.
3. **Themes are persistent, not episodic.** Every development is logged into one of the existing theme files in `themes/`. Do not create a new theme file unless a structural question is missing — propose it to the user first.
4. **What would change my mind.** Each theme has a "What would change my mind" section. When logging a development, explicitly check whether it triggers that section. If yes, flag it loudly in the weekly brief.
5. **Cross-link to learning.** When a development touches something the user is studying (rates ↔ bond math, AI scaling ↔ ML internals, supply chains ↔ optimization), add a `↔` link in the log entry referencing the relevant topic.

## Workflow

### Weekly brief (the main loop)
When the user says "run the weekly brief" or similar:

1. Read `sources.md` to know what to pull from.
2. For each theme in `themes/`, scan its question + "what would change my mind" section so you know what to look for.
3. Pull material from primary sources for the past 7 days. Skip noise; filter for items that update a theme's structural question.
4. For each relevant item:
   - Append a dated log entry to the appropriate theme file: `- YYYY-MM-DD: [development] — [why it matters for the theme's question]`
   - If it's a "would-change-my-mind" trigger, mark it with `⚠️` at the start of the line.
5. Write a brief to `briefs/YYYY-Www-brief.md` using `briefs/TEMPLATE.md`. The brief is short (≤2 pages): top 3–5 developments, what each one updates, open questions for next week.
6. Update `metrics/data.json` with this week's snapshot of the tracked numbers.
7. Run `python3 build.py` to refresh `manifest.json` so the web view picks up the changes.

### Adding to a theme outside the brief
If the user mentions a development conversationally, append a log entry to the relevant theme file immediately. Don't wait for the weekly brief.

### Metrics
`metrics/data.json` tracks a small set of numbers that *actually matter* (yield curves, DXY, oil, copper, semis index, etc.). Time series, one snapshot per week. Don't add metrics speculatively — only ones that map to a theme's structural question.

## What NOT to do

- Don't summarize headlines. Headlines are not signal; they're shaped by what gets clicks.
- Don't write daily briefs.
- Don't add a theme without asking.
- Don't include a development just because it happened. Ask: "does this update one of my theme questions?" If no, skip it.
- Don't write multi-paragraph entries in the log. One line per development. The brief is where you synthesize.
- Don't editorialize. Stick to what is observed and what it updates. The user forms the mental model.

## Cross-references

- `~/personal/interviews/` — robotics interview prep (technical pillar).
- `~/personal/mathacademy-sync/` — math learning sync (technical pillar).
- This repo is the **world events pillar**. The third pillar (long-form reading) is not yet a repo.

## Learning queue — the user's confusion + curiosity index

`learning-queue.md` is the persistent record of what the user has been confused about, curious about, or asking about. It has **two sources**, both of which feed the same file:

1. **Web dashboard "Add" button** — when the user highlights a term in a theme or brief and clicks Add, the server appends `{term, context, timestamp}` to the queue. No explanation is generated; this is just "remember I hit this."
2. **In-chat questions** — when the user asks Claude a question in chat that touches this domain (macro, geopolitics, AI/tech, capital markets, energy, anything a theme covers), Claude appends an entry to the queue as part of answering. The entry should capture the user's question, just-enough context, and a 1–2 sentence summary of the answer Claude gave. This happens automatically — don't ask permission.

### Logging chat questions — exact rules

When the user asks a domain question in chat:

1. Answer them in chat as normal.
2. **Then** append to `learning-queue.md` an entry of the form:

```markdown
## [user's question, lightly normalized]

*[YYYY-MM-DD HH:MM] via chat*

**Context:** [what theme/development/idea triggered the question, in one sentence]

**Notes:** [1–2 sentence summary of the answer you gave, including the key term(s) introduced]

---
```

Keep entries terse. The point is later context priming, not transcript replay. Skip logging if the question is purely about the repo itself (e.g., "how do I run the server"), pure tooling, or already-answered chitchat.

### Pedagogical briefs

When generating the weekly brief, **read `learning-queue.md` first**. Use it to:

1. **Identify weak spots and revisit them.** If the user has been asking about, say, "term premium" and "duration," and a 30Y auction tailed this week, *foreground* that development in the brief and connect it back to the concept — show how this week's news illustrates what they were asking about.
2. **Weight theme selection by curiosity.** If half of recent queue entries point at AI compute economics, weight the brief's top developments toward that pillar (without ignoring meaningful moves elsewhere).
3. **Synthesize across queue + this week.** When a current development illustrates a previously-confused concept from a *new angle*, call it out explicitly. Phrasing like "remember when you asked about X — this week's Y is the same pattern, but in a different regime."
4. **Avoid re-explaining what's already explained.** If the queue shows the user was given an explanation last week, don't repeat it — build on it.

The brief is not a news summary. It is the user's pedagogical anchor. Context priming over comprehensiveness.

### Glossary maintenance — write to it as you teach

`glossary.json` is the **permanent term lookup table** read by the dashboard. When the user highlights a term in the web UI:

- If the term is in `glossary.json` → instant tooltip, no LLM call
- If not → the existing `+ Add` button → entry goes to `learning-queue.md`

**Your job:** when answering a domain question in chat that introduces or substantially explains a term, also append/update `glossary.json` with a 1–3 sentence canonical entry for that term, so the next highlight is an instant hit.

Format per entry (keys lowercased):

```json
"term name": {
  "definition": "1–3 sentences. Anchored, plain English, not textbook style. Mention the macro/finance context.",
  "theme": "monetary-policy"  // optional, the theme id this term belongs to
  "see_also": ["related-term-1", "related-term-2"]  // optional, lowercase keys
}
```

**Rules of the road:**

- Only add terms that are *jargon* — proper nouns, acronyms, terms of art. Don't add ordinary words.
- Keep definitions tight (1–3 sentences). The glossary is for unblocking reading flow; deeper explanations stay in chat / queue / briefs.
- Prefer canonical lowercased keys. For acronyms, use the lowercase acronym (`hbm`, `tips`, `lpr`).
- Update existing entries rather than creating duplicates. If the user's question reveals a clearer angle, edit the definition.
- After modifying `glossary.json`, no rebuild step is needed — the frontend reads it on page load. The user just needs to refresh the dashboard.

### Promoting entries to a deeper glossary file

When asked to "promote queue entries," "build glossary entries from the queue," or similar, optionally create longer-form narrative explanations under a `glossary/` directory (in the same narrative storytelling style as `~/personal/interviews/CLAUDE.md`). The `glossary.json` lookup table is the *short-form quick reference*; the `glossary/` directory (if created) holds the *long-form narrative explanations*. They serve different purposes and shouldn't be conflated.

## Repo layout

```
worldview/
├── CLAUDE.md            # this file
├── README.md            # human-readable overview
├── sources.md           # curated source allowlist (the discipline)
├── manifest.json        # generated by build.py — feeds the web view
├── build.py             # regenerates manifest.json from filesystem
├── server.py            # local server: static + POST /api/add (logs to learning-queue.md, no LLM)
├── learning-queue.md    # confusion-driven term log, populated by /api/add
├── glossary.json        # permanent term lookup; instant tooltip on highlight
├── mental-models.md     # one load-bearing mental model per theme
├── themes/              # one MD per theme, persistent log inside each
├── briefs/              # weekly synthesis briefs, dated YYYY-Www
│   └── TEMPLATE.md
├── metrics/             # time-series JSON for tracked numbers
├── index.html           # dashboard entry point
└── web/                 # dashboard assets (run via python3 server.py)
```
