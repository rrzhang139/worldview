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

- 2026-05-15: Vera Rubin cooling-architecture design issues "largely resolved" per supply-chain sources; Q3 2026 mass-production ramp confirmed, July delivery to North American tech giants. SK Hynix HBM4 tagged in the design. — Removes the late-2026 capability gap risk that had been pricing into NVDA pre-earnings. Bottleneck moves back to HBM4 yield + CoWoS-L allocation; *time-to-Rubin* is no longer the binding question.
- 2026-05-14: Cerebras IPO ($5.55B raised, $185→$331→-10% Day 2). Wafer-scale AI silicon enters public markets. — A second non-GPU architecture is now investible at scale (after Groq's private rounds). The bottleneck-always-moves model would predict: if Rubin solves training-FLOPs efficiency, the next contested layer is *inference latency × cost-per-token*, and that's exactly where wafer-scale and custom-silicon plays compete.
- 2026-05-13: Omdia: ~50% of planned US data center builds delayed/canceled — power and China-sourced parts are the binding constraints. — Reframes the silicon demand picture: NVDA can ship Blackwell/Rubin, but *operable* GPU-hours grow slower than fab output because the data centers to plug them into aren't ready.
- 2026-05-07: NVDA confirms Vera Rubin commercial shipments H2 2026; Blackwell GB300 sold out through mid-year per Huang. — Bottleneck stays on TSMC CoWoS-L packaging + HBM4 ramp at SK Hynix/Samsung/Micron, not on wafers. Read W19 as: the demand window for advanced packaging keeps extending.
- 2026-05-06: Anthropic Colossus 1 lease pulls 220K H100/H200/GB200-class GPUs into Anthropic's training/inference fleet. — On the demand side, it tightens already-constrained HBM allocation — these chips were *already deployed*, but their inference utilization just stepped up sharply.
