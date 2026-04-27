# Metrics

A small set of structural numbers tracked weekly. The point is not to have a Bloomberg replacement — it's to have a small dashboard of *meaningful* numbers that map to theme questions, so drift over months and years is visible.

## What's tracked

Each metric in `data.json` has:

- `id`: short identifier
- `name`: human-readable name
- `unit`: % / bp / $ / index level / tonnes / etc.
- `theme`: which theme file this metric serves
- `source`: where the number is pulled from
- `description`: why this number matters
- `series`: array of `{date: "YYYY-MM-DD", value: <number>}` snapshots

## How to update

When running the weekly brief, append a new `{date, value}` entry to each metric's `series`. Don't backfill data you don't have; just start the series from when you started tracking.

For numbers that update less frequently (quarterly, e.g., COFER), only append when the underlying release happens — leave gaps otherwise rather than carrying values forward.

## Adding a metric

Only add a metric if it directly serves a theme question and the user explicitly asks. Resist the urge to track everything.
