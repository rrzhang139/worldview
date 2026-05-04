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
