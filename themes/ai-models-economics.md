---
pillar: AI & Tech
title: AI Models & Economics
---

# AI Models & Economics

## Question
Are frontier model capabilities still scaling smoothly with compute (and post-training tricks), or is the scaling-law era ending — and what does the unit economics of training and inference look like at each new generation?

## Why it matters
The implicit assumption underwriting the entire AI capex cycle is "more compute → better models → more revenue." If that breaks at any point — capability plateau, training cost out of proportion to gain, inference cost not falling fast enough — the investment thesis cracks. Understanding *exactly* what's improving (raw scaling vs. RL post-training vs. inference-time compute vs. tool use vs. agentic loops) is the difference between informed and lost.

## What would change my mind
- **Scaling-still-works triggers:** next-gen model from a major lab demonstrates step-function on hard benchmarks proportional to compute spend; inference cost per token continuing exponential decline; agent tasks (long-horizon, multi-step) showing reliability gains tied to scale.
- **Plateau triggers:** flagship next-gen models showing diminishing returns; training cost rising faster than capability; reliance shifting to post-training and tool use rather than base-model scaling; revenue growth at top labs decelerating despite product launches.

## Connections
- ↔ `ai-compute-capex.md` — model economics is what justifies (or doesn't justify) capex.
- ↔ `semiconductors.md` — model architecture choices drive HBM/interconnect demand.
- ↔ `china-tech.md` — China models' position relative to frontier.

## Log
<!-- One line per development. Format: `- YYYY-MM-DD: [what happened] — [what it updates]` -->

## Open questions
- What's the true ratio of training compute to inference compute at GPT-class labs?
- How much capability is coming from scaling vs. RL post-training vs. tool use?
- What's the quality and fidelity of synthetic data, and is data still a bottleneck?

## Key sources for this theme
- Dwarkesh Patel podcast (interviews with lab principals)
- Lab tech reports / system cards (Anthropic, OpenAI, GDM, Meta)
- Epoch AI quantitative tracking
- Semianalysis on training cluster economics
- arXiv preprints (selectively — only when from major labs and the methodology is novel)
