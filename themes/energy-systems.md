---
pillar: AI & Tech
title: Energy Systems
---

# Energy Systems

## Question
Where will the marginal gigawatt of US (and global) power come from in the late 2020s — and which constraint binds first: generation capacity, transmission, gas turbines, nuclear restarts, or interconnection queue?

## Why it matters
Power has gone from "boring utility problem" to "binding constraint on AI buildout, electrification, and reshoring" in 24 months. Hyperscalers are signing nuclear PPAs and behind-the-meter gas deals because the grid cannot accommodate the load on the timeline they need. The energy mix decisions made in the next 5 years (reopening Three Mile Island; new gas plants getting permitted; SMR commercialization) will determine power costs for a generation. This is where Dwarkesh-style energy + AI thinking lives.

## Mental model

**Power is the new bandwidth.**

What bandwidth was to the internet (1995–2010), power is to AI (2024–?). When something is the binding constraint of an industry, three things follow: (a) cost rises sharply at the margin, (b) creative substitutions emerge (behind-the-meter gas turbines, nuclear restarts, geothermal in Wyoming, ammonia-to-power), (c) winners are determined by who can secure the constraint, not who has the best product. **Watch the substitutions to gauge how tight the constraint really is** — a hyperscaler signing a 20-year nuclear PPA tells you more about power scarcity than any macroeconomic statistic. When the substitutions get exotic and expensive, you know the constraint is genuinely binding, not rhetorical.

## Connections
- ↔ `ai-compute-capex.md` — power is the binding constraint on AI buildout.
- ↔ `commodities.md` — uranium, nat gas, copper.
- ↔ `industrial-policy-defense.md` — IRA tax credits, NRC reform, transmission siting.

## Log

- 2026-05-13: Omdia / Tom's Hardware: ~half of planned US data center builds delayed or canceled; root causes are (a) power infrastructure shortages (transformers, switchgear, gas turbines) and (b) China-sourced components. — First independent quantification of the wedge between *announced* and *deliverable* AI capex. PJM/FERC unlock from W19 was necessary but not sufficient: the constraint has now stacked onto upstream manufacturing of grid hardware.
- 2026-05-13: Gallup poll: ~7 in 10 Americans oppose data centers near them; organized local resistance movements covered nationally (Democracy Now, Newsweek). — Political-economy layer on the power constraint. Substitutions (behind-the-meter, nuclear restart) reduce grid contention but don't eliminate community pushback on land use, water, and utility-rate cost-shifting. Watch state PUC decisions on whether data-center load is cross-subsidized by residential ratepayers — that's where the backlash gets teeth.
- 2026-05-06: Anthropic–Colossus deal expressed interest in *multi-gigawatt orbital AI compute* with SpaceX. — The "exotic substitution" frontier on the power constraint just moved a notch further. Watch as a leading-indicator on terrestrial grid scarcity: when labs start writing orbital-compute LOIs, the binding-constraint story is no longer rhetorical.
- 2026-05-05: PJM Dec-2025 capacity auction shortfall (6,623 MW under reliability target; ~5,100 MW of demand surge from data centers) and FERC's Dec-18-2025 order on data-center colocation are now propagating into 2026 PPA negotiations. PJM interconnection queues stretched past 8 years. — The grid-side bottleneck is hardening: behind-the-meter and direct-power-plant deals (Talen–AWS Susquehanna 17yr/$18B/1.92 GW; TMI–MSFT) are no longer optional, they're the *only* delivery path on AI buildout timelines.
