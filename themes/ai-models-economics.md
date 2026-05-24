---
pillar: AI & Tech
title: AI Models & Economics
---

# AI Models & Economics

## Question
Are frontier model capabilities still scaling smoothly with compute (and post-training tricks), or is the scaling-law era ending — and what does the unit economics of training and inference look like at each new generation?

## Why it matters
The implicit assumption underwriting the entire AI capex cycle is "more compute → better models → more revenue." If that breaks at any point — capability plateau, training cost out of proportion to gain, inference cost not falling fast enough — the investment thesis cracks. Understanding *exactly* what's improving (raw scaling vs. RL post-training vs. inference-time compute vs. tool use vs. agentic loops) is the difference between informed and lost.

## Mental model

**Scaling laws are religion until they break.**

The empirical observation that more compute → better models has held for 7+ years across multiple labs. The entire AI capex thesis depends on it continuing. **The question every quarter is: are we still on the curve?** When (not if) the curve breaks somewhere, capex stops being rational and starts being overcapacity. Watch flagship next-gen releases (GPT-N+1, Claude N+1, Gemini N+1) as the test. Capability gains *proportional* to compute spend → curve holds. *Sublinear* gains → curve cracking. The market will price this asymmetrically: bullish on continuation, panicky on breakage. **Treat scaling-law continuation as a probability, not a certainty** — and watch for emerging substitutes (RL post-training, inference-time compute, tool use) absorbing the gains when raw scaling stalls.

## Connections
- ↔ `ai-compute-capex.md` — model economics is what justifies (or doesn't justify) capex.
- ↔ `semiconductors.md` — model architecture choices drive HBM/interconnect demand.
- ↔ `china-tech.md` — China models' position relative to frontier.

## Log

- 2026-05-19: **Google I/O — Gemini 3.5 Flash GA**, beats Google's own *prior-generation flagship* (Gemini 3.1 Pro) on Terminal-Bench 2.1 (76.2% vs 70.3%), MCP Atlas (83.6% vs 78.2%), GDPval-AA (1656 vs 1314 Elo). 4× faster output tokens than other frontier models. Notably **NOT a Gemini 4 release.** — The capability-per-dollar lever firing in production: same/better intelligence at *Flash* tier price/speed. This is exactly the test the W20 brief named — "do labs compress per-token prices 5–10× in late 2026?" — happening months earlier than expected. **What's not happening is also a signal:** Google chose to skip the Gemini 4 flagship release window and instead drop a much-cheaper Flash that beats their own old flagship. Reads as Google de-prioritizing brute-force scaling in favor of efficiency + agents.
- 2026-05-20: NVDA's $91B Q2 guide implies a step-change in deployable compute through 2027. Huang's "constrained throughout the entire life of Vera Rubin" frames the next 2 years as supply-bound. — The compute substrate for the next training cycle is now visible: labs that don't pre-commit Rubin capacity (the way Anthropic did at Colossus) are at risk of being unable to train next-gen flagships at competitive scale. Capability cadence remains capex-gated, not idea-gated.
- 2026-05-15: Vera Rubin design issues resolved; mass production ramp confirmed for Q3 2026, July delivery to top US customers. — Vera Rubin's claim of "10× lower inference cost / 75% fewer GPUs to train" is no longer a hypothetical; the H2 2026 / Q1 2027 model releases will be the first generation that can actually be trained on Rubin. **What to watch:** does Anthropic/OpenAI/Google compress per-token API prices 5–10× in late 2026? If yes, Rubin substitutes for raw scaling; if not, the curve is being held up by Rubin's efficiency gains rather than capability lift, which would be a *different* regime change to flag.
- 2026-05-06: NVDA management reiterates Vera Rubin claim — 75% fewer GPUs to train an equivalent model vs Blackwell, ~90% lower inference token cost. — If true at scale, this is a step-change in capability-per-dollar that *partially substitutes for* raw scaling. Watch whether the next Anthropic/OpenAI/Google flagship trains on Rubin and whether per-token API prices reflect a 5–10× compression.
- 2026-05-06: Anthropic added 300+ MW / 220K+ GPUs of compute via Colossus 1 lease — usable within the month. — Capacity, not algorithms, was the binding constraint on Anthropic's Claude Pro/Max user growth. Confirms compute is still the active gating variable on lab output, not a saturated input.
- 2026-05-06: 78-day window (Feb–May 2026) saw 7 frontier model releases (Claude Opus 4.7, GPT-5.5, Gemini 3.1 Pro, etc.) — one new SOTA every ~11 days. — Cadence itself is the signal: scaling-laws curve still funds enough capability gain per generation to justify back-to-back releases. Curve-break trigger has not fired this quarter.
