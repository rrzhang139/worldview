---
pillar: AI & Tech
title: AI Compute & Capex
---

# AI Compute & Capex

## Question
Is the current trajectory of AI capex (data centers, GPUs, power buildout) economically sustainable — or are we building a capacity bubble that will blow back through hyperscaler balance sheets and the real economy?

## Why it matters
Combined hyperscaler capex (MSFT, GOOG, META, AMZN, ORCL) is approaching ~$300-400B/yr and rising. That's a meaningful share of S&P 500 capex and a non-trivial share of US GDP. If AI revenue keeps up, this is the productivity story of the decade. If it doesn't, the capex unwind hits NVDA, AMD, hyperscaler valuations, the broader US equity market, and real-economy spending tied to construction, energy, and electrical equipment.

## Mental model

**Arms race economics — capex outruns monetization in early phases.**

Like railroads (1840s), telegraphs (1860s), the electric grid (1900s), fiber (1990s). Investment surges *ahead* of demonstrated demand because if it works, first-mover advantage is enormous. **The question is never whether some of the buildout is wasted — it always is.** The question is whether *enough* of it pays off in aggregate to justify the spend. Historical pattern: roughly 30% of capex ends up productive long-term; the rest gets written down, bankrupted, or cannibalized as supply catches demand. **Companies that survive the shakeout dominate the next era.** Read AI capex through this lens: *who survives*, not *whether the cycle was rational*.

## Connections
- ↔ `semiconductors.md` — NVDA / TSMC / HBM demand side.
- ↔ `energy-systems.md` — power is the binding constraint.
- ↔ `ai-models-economics.md` — capex pays off only if model economics work.
- ↔ `capital-markets.md` — bond issuance from hyperscalers is now meaningful.

## Log

- ⚠️ 2026-05-20: **NVDA Q1 FY27 print.** Revenue $81.6B (vs. $78B guide, +20% QoQ / +85% YoY); GM 74.9% (held Goldman's bar). **Q2 guide $91B**, with *zero China data-center revenue assumed* — any H200 sales to China are upside. Dividend +25×, $80B buyback. Huang: "Demand has gone parabolic," "Agentic AI has arrived." Kress: Vera Rubin "opens a brand new $200B tab." Huang: NVDA "will be constrained throughout the entire life of Vera Rubin." Stock slid post-print (sell-the-news on a print already priced for perfection). — This is *strong* confirmation that the binding constraint on AI capex is supply, not demand, well into 2027. The Q2 $91B guide alone is +$13B QoQ growth — a quarterly increment larger than the entire FY2024 ($60.9B) trajectory used to imply. Mind-changer trigger reaffirmed: the bull-case "compute supply found a path" thesis is now an explicit NVDA forecast.
- 2026-05-22: Moody's raises hyperscaler 2027 capex forecast by ~$85B; trajectory now approaching **$1T by 2027** (combined Big Four + Oracle). — The capex curve's slope just got steeper. Reads cleanly alongside NVDA's $200B Rubin "tab" — capex projections and silicon vendor's revenue projections are now consistent at the trillion-dollar scale, which removes one of the bear case's strongest arguments ("forecasts are incoherent").
- 2026-05-15: Nvidia Vera Rubin design issues (cooling architecture change) resolved per supply-chain reporting; Q3 2026 mass-production ramp on track, July delivery to "North American tech giants." SK Hynix tagged as HBM4 supplier. — De-risks the W19 "75% fewer GPUs / ~90% cheaper inference" claim ahead of NVDA May 20 earnings. If H2 delivery holds, the *unit-economics* lever (capability-per-dollar of capex) starts compounding the brute-force capex lever.
- 2026-05-14: Cerebras IPO prices at $185, closes Day 1 at $331 (+79%), drops 10% on Day 2 (May 15). $5.55B raised on 30M shares — largest US tech IPO since Uber (2019). — Public-markets *re-opening* for AI-infrastructure equity, and the first time the market has had to mark a non-NVDA AI silicon company on its own. The Day-2 fade is the more interesting signal than the Day-1 pop: even with frothy demand, holders couldn't sit on the price. Reads as: capital is willing to fund alternatives to NVDA, but skeptical that any single alt-silicon player owns the moat.
- 2026-05-13: Omdia / Tom's Hardware: ~half of planned US data center builds delayed or canceled; power infrastructure shortages and China-sourced components are the binding constraints. — Independent confirmation of the W19 PJM/FERC read. The capex *guide* numbers ($725B 2026) overstate deliverable capex — execution slippage is now a quantifiable wedge between announcement and actual GPU-hour delivery.
- 2026-05-13: Gallup poll: ~7 in 10 Americans oppose data centers being built near them. Local resistance movements are emerging in multiple states. — Political-economy backlash starts to bite. Watch for state-level permitting friction and utility-rate disputes as the next throttle layer above PJM/FERC.
- ⚠️ 2026-05-06: Anthropic signs deal to lease all of SpaceX/xAI's Colossus 1 (Memphis) — 220K+ NVIDIA GPUs (H100/H200/GB200), 300+ MW, online within the month. xAI moved its own training to Colossus 2. Anthropic also signaled intent to develop multi-gigawatt orbital compute with SpaceX. — A frontier lab is now sourcing growth compute from a *rival lab's* spare data center instead of a hyperscaler. The lab/cloud/specialty-cloud lines are collapsing into a tradable compute layer; partial trigger on the bull-case "compute supply found a path" thesis, but also a sign that frontier labs hit cloud-allocation ceilings faster than expected.
- 2026-05-05: Hyperscaler concentration in Bloomberg US Corp IG Index reached 4.1% (April 1, 2026) — nearly 2× from 2.2% a year ago. UBS estimates $230–240B hyperscaler bond issuance in 2026 (Oracle $18B, Alphabet $20B incl. 100yr GBP). — The capex bill is now a credit-market concentration risk, not just an equity-market one. Test of the "elevated debt issuance is fine" view is whether IG spreads widen on any AI-revenue stumble.
- 2026-05-07: NVDA reaffirmed Q1 FY2027 guide at $78B (May 20 earnings), Blackwell sold out through mid-year, Vera Rubin commercial shipments in H2 2026. — Demand-side capex is real through year-end; the constraint stays on the supply side (TSMC packaging, HBM, power) not the order book.
