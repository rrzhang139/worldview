# Worldview

A synthesis system for building mental models of macro, geopolitics, AI/tech, and capital markets — not a news aggregator.

## How to use

**Weekly:** ask Claude to "run the weekly brief." It will pull from curated sources, append dated log entries to the relevant theme files, write a synthesis brief in `briefs/`, and update `metrics/data.json`.

**Conversationally:** mention a development, Claude appends it to the relevant theme.

**Reading:** run `python3 server.py` from this directory, then open `http://localhost:8000/`. Highlight any word/phrase to surface an "Add" button — clicking it logs the term + its surrounding context to `learning-queue.md`. Explanations happen later in chat with Claude, who reads the queue for context priming.

## Pillars

This is the **world events** pillar in a three-pillar information system:

1. **Technical** — `~/personal/interviews/`, `~/personal/mathacademy-sync/`
2. **World events** — this repo
3. **Long-form reading** — not yet a repo

## Discipline

The point of this repo is *not* to be plugged in. Daily news scraping is a firehose. This repo is built around a small number of structural questions tracked over years. See `CLAUDE.md` for the operating principles.

## Updating the web view

After editing themes or briefs, run:

```bash
python3 build.py
```

This regenerates `manifest.json` which the web view reads.
