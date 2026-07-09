---
pillar: AI & Tech
title: Semiconductors & Supply Chain
---

# Semiconductors & Supply Chain

## Question
How is the global semiconductor supply chain restructuring under the dual pressures of AI compute demand and US-China decoupling — and where are the binding bottlenecks (HBM, advanced packaging, EUV, leading-edge fabs, power)?

## Why it matters
Semis are simultaneously the most capital-intensive industry on earth, the strategic chokepoint in US-China rivalry, and the substrate of every AI dollar spent. The current cycle is unusual: AI demand is enormous and concentrated, while consumer/industrial semis are weak. Understanding where the real shortages are (HBM3e, CoWoS, leading-edge wafers, mature-node power semis) tells you about pricing power across the value chain — and where the next supply unlock matters most.

## Mental model

**The bottleneck always moves.**

2020: leading-edge wafer capacity. 2022: HBM memory. 2024: CoWoS advanced packaging. 2025: power and grid interconnect. Whatever the *current* bottleneck is, expect capex to flood in and ease it — and the *next* bottleneck to emerge somewhere upstream or downstream. **Read every TSMC earnings call asking: "what bottleneck are they calling out now?"** That's a leading indicator of where pricing power will accrue in the next 18 months. Companies sitting on the new bottleneck see margin expansion; companies sitting on the *old* bottleneck see margin compression as supply catches up. The semis cycle is a chain of musical-chairs episodes — and missing the chair-change is the most common analyst mistake.

## Connections
- ↔ `ai-compute-capex.md` — semis are the demand side of capex.
- ↔ `china-tech.md` — export controls effectiveness.
- ↔ `industrial-policy-defense.md` — fab reshoring (CHIPS Act, EU Chips Act, Japan Rapidus).
- ↔ `energy-systems.md` — fab + data center power demand.

## Log

- 2026-06 (window): **HBM4 market: SK Hynix holds ~62% share and confirms 2026 supply is fully sold out; Micron overtook Samsung (21% vs 17% share) and also confirms 2025-26 capacity fully booked**, though Micron's 1α-node yield maturity still lags SK Hynix by an estimated 12-18 months. Vera Rubin test production began in June with first shipments to major North American cloud customers (Microsoft, Google) in July; TrendForce estimates the Rubin buildout pushes TSMC's Nvidia-linked revenue share above 20%. TSMC's June revenue report is delayed behind its July 6-15 quiet period, with Q2 earnings due July 16. — HBM remains the binding constraint on both NVDA's Rubin ramp and how much of China's Ascend line can be turned into finished packages (cross-ref `china-tech.md`). The W23/W24 "de-risked" read on Rubin held through the actual production start; no June TSMC print yet to confirm demand continuation — the clean open question for next cycle.
- 2026-05-25: Huawei announces "Tau Scaling Law" / "LogicFolding" architecture — performance via faster on-chip data movement rather than transistor shrink; targets 1.4nm-equivalent density in 5y. SMIC +7.6%. Huawei still guiding ~600K Ascend 910C units in 2026 (~2× 2025). — Reads through "the bottleneck always moves": if you can't win the lithography bottleneck, redefine the bottleneck as data movement (interconnect, memory hierarchy, packaging) — exactly where the leading edge is also heading (NVL576, HBM4, CoWoS-L). A narrative play for now; watch for a tapeout that backs it.
- 2026-06-01: **Computex 2026 (Taipei): Intel + SambaNova + Foxconn rackscale AI announced.** Intel Xeon + SambaNova SN-50 RDU + Foxconn integration; also a CPU-dense variant for cost-optimized inference. Vector Core Compute (Vista Equity + Cambium Capital) launches a disaggregated inference cloud combining Intel Xeon + SambaNova RDU + NVIDIA Blackwell. — Disaggregated inference serving (the prefill/decode architecture from W20) is now a venture-funded product category. The bottleneck-always-moves model in action: with HBM4 + Rubin solving the *training* compute lever, the contested layer migrates to *inference cost per token at scale*, where rackscale design + custom silicon + serving stack co-design is the new playing field.
- 2026-05-31: BIS closes Nvidia foreign-subsidiary loophole: license requirements now follow ultimate purchaser HQ, not shipping address. Affects Blackwell, Rubin, AMD MI350x. — NVDA management already excluded China DC from the Q2 $91B guide; this BIS rule formalizes the exclusion at policy level. The compliance friction now sits with enterprise customers (must trace beneficial ownership) and with TSMC indirectly (sales pipeline now must be HQ-screened, not destination-screened).
- 2026-05-20: NVDA Q1 print: $81.6B revenue (+85% YoY), GM 74.9%, Q2 guide $91B with zero China DC revenue assumed. Vera Rubin "opens $200B tab"; Huang says NVDA "constrained throughout the entire life of Vera Rubin." Stock fell post-print (priced for perfection). — Demand-side is no longer the analytic question. The whole story is now upstream of NVDA: HBM4 ramp (SK Hynix / Samsung / Micron), CoWoS-L allocation at TSMC, transformer/switchgear supply for data centers. Watch SK Hynix HBM4 quarterly volumes as the cleanest leading indicator.
- 2026-05-22: Cerebras (CBRS) closed -8.6% on broad sell-the-news session; the post-IPO trade is now flat-to-down vs Day-1 close. After the +68% Day-1 pop, the secondary-market trade is testing whether non-NVDA AI silicon holds. — Early signal: the market is willing to *price* wafer-scale AI silicon, but not at the implied valuation Day-1 buyers paid. The moat test (anchor hyperscaler customer) remains unresolved.
- 2026-05-15: Vera Rubin cooling-architecture design issues "largely resolved" per supply-chain sources; Q3 2026 mass-production ramp confirmed, July delivery to North American tech giants. SK Hynix HBM4 tagged in the design. — Removes the late-2026 capability gap risk that had been pricing into NVDA pre-earnings. Bottleneck moves back to HBM4 yield + CoWoS-L allocation; *time-to-Rubin* is no longer the binding question.
- 2026-05-14: Cerebras IPO ($5.55B raised, $185→$331→-10% Day 2). Wafer-scale AI silicon enters public markets. — A second non-GPU architecture is now investible at scale (after Groq's private rounds). The bottleneck-always-moves model would predict: if Rubin solves training-FLOPs efficiency, the next contested layer is *inference latency × cost-per-token*, and that's exactly where wafer-scale and custom-silicon plays compete.
- 2026-05-13: Omdia: ~50% of planned US data center builds delayed/canceled — power and China-sourced parts are the binding constraints. — Reframes the silicon demand picture: NVDA can ship Blackwell/Rubin, but *operable* GPU-hours grow slower than fab output because the data centers to plug them into aren't ready.
- 2026-05-07: NVDA confirms Vera Rubin commercial shipments H2 2026; Blackwell GB300 sold out through mid-year per Huang. — Bottleneck stays on TSMC CoWoS-L packaging + HBM4 ramp at SK Hynix/Samsung/Micron, not on wafers. Read W19 as: the demand window for advanced packaging keeps extending.
- 2026-05-06: Anthropic Colossus 1 lease pulls 220K H100/H200/GB200-class GPUs into Anthropic's training/inference fleet. — On the demand side, it tightens already-constrained HBM allocation — these chips were *already deployed*, but their inference utilization just stepped up sharply.
