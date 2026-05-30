---
pillar: AI & Tech
title: AI Policy & Regulation
---

# AI Policy & Regulation

## Question
Is AI governance globally fragmenting into incompatible regimes — US national-security-based, EU rules-based, China state-directed — and how does each regime's moves shape where AI development happens, what can be deployed, and which hardware/model types survive the next regulatory cycle?

## Why it matters
Regulation is where national strategies become technical constraints overnight. A single BIS rule update can close off a GPU supply chain; an EU AI Act GPAI obligation can require capability evaluations before deployment; a US executive order on compute can redefine who is allowed to train a frontier model. Unlike most macro signals, regulatory moves are discrete, fast, and often irreversible — an entity list addition doesn't get walked back. This is one of the fastest-moving signals in the AI landscape.

## Mental model

**Regulation is industrial policy written in the language of compliance.**

A BIS export control rule is just a national security strategy expressed as a license requirement. An EU AI Act GPAI mandate is just risk management expressed as a transparency and evaluation obligation. A compute threshold (6×10²⁵ FLOPs, 10²⁶ FLOPs) is a government's estimate of where "frontier" starts — and defines who is regulated. **Track the regulatory front as a leading indicator of what capabilities nations are afraid of** — regulators are typically 12–18 months behind the technical frontier, but their moves reveal what the intelligence community and national security establishments think is coming. When a country writes a specific capability into law, they believe it's real.

## Connections
- ↔ `china-tech.md` — export controls are the primary mechanism of US-China chip tech decoupling.
- ↔ `semiconductors.md` — BIS rules directly determine which nodes TSMC can sell to Chinese customers, and which GPU architectures can be shipped.
- ↔ `ai-compute-capex.md` — compute governance (reporting requirements, licensing thresholds) adds cost and friction to large training runs.
- ↔ `ai-models-economics.md` — EU AI Act obligations on GPAI models add evaluation/red-teaming cost to deployment.
- ↔ `industrial-policy-defense.md` — CHIPS Act, IRA, export controls are all the same policy toolkit applied to different bottlenecks.

## Log

- 2026-05-29: **OpenAI publishes a "Frontier Governance Framework" (May 29), days after filing its S-1**, following Microsoft/Google/xAI agreeing (May 5) to let the US government test their models pre-launch. — Governance-as-IPO-derisking: labs are codifying voluntary safety/eval commitments precisely as they approach public markets, where regulatory and liability tail-risk become disclosed risk factors. Reads through the regime model: in the US, frontier governance is consolidating as *industry self-regulation negotiated with the national-security state*, not statute — the inverse of the EU's rules-based path.
- 2026-05-14: Trump–Xi bilateral in Beijing produced no announced movement on chip export controls. Xi told visiting US CEOs (incl. Huang, Cook, Musk) China will "open wider." ~10 Chinese companies have BIS H200 licenses (up to 75K chips each) since Jan 2026 — **zero deliveries to date.** — The H200 case-by-case licensing regime is *de jure* open but *de facto* deadlocked. Bottleneck has migrated from US rules to Chinese counter-measures (security review of US chips, data-localization, indigenous-preference policies). Reads through the regime model: export controls now have a *symmetric* enforcement layer on the other side.
- 2026-05-13: Nvidia's Jensen Huang added last-minute to Trump's Beijing delegation after initial omission. — The chip CEO is now a tier-1 trade-delegation seat; AI chip policy is being negotiated at heads-of-state level rather than via BIS rule-making, which compresses the timeline for rule changes but makes outcomes more volatile.
- 2026-05-20: NVDA Q2 FY27 guide ($91B) explicitly assumes **zero China data-center revenue.** Management treats any H200 sales to China as upside, not base case. — This is the cleanest single-issuer admission that the H200 case-by-case licensing regime is non-functional in practice. The W20 read (US licensing open, Chinese counter-measures closed) is now embedded in the largest AI company's forward guide.
- 2026-05-19: **Code with Claude London — Claude Agent sandboxes + MCP tunnels.** Anthropic explicitly markets agent deployment that *does not traverse the public internet* and runs on customer infrastructure. — The data-sovereignty angle on AI deployment is now a vendor-side product, not just a regulatory ask. Watch whether this pattern accelerates EU adoption (EU AI Act + GDPR + data-residency requirements) where US-cloud-hosted agents have been a friction point.
