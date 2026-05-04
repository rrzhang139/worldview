# Learning Queue

The user's confusion + curiosity index. Two sources feed this file:

1. **Web dashboard "Add" button** — highlighting a term in a theme/brief and clicking Add appends it here with its surrounding context. No explanation is generated; the entry is a marker.
2. **In-chat questions** — when the user asks Claude a domain question, Claude appends the question + context + a brief summary of the answer here as part of replying.

This file is read by Claude before generating weekly briefs, so the brief can revisit weak spots, weight theme selection by what the user is curious about, and synthesize current developments through the lens of concepts the user has been working on.

Entries that mature into stable understanding can be promoted to a permanent `glossary/` file (in the narrative storytelling style of the user's tech tutorials).

---
## yield curve inversion

*[2026-04-26 21:48] via highlight*

**Context:** the 2y/10y spread re-inverted in late April as the Fed pushed back on cuts

---

## Why learn capital markets, rates, and economics at all?

*[2026-04-26 21:50] via chat*

**Context:** User is highly motivated by technical work (ML/robotics/AI) and feels out of tune with macro/finance. Asked what the motivation is and what this knowledge informs about the future.

**Notes:** Three durable reasons emphasized: (1) tech career + RSU value + AI capex cycle are all implicit macro bets the user is already making without a model; (2) tech strategy is downstream of capital markets — Llama open-source, NVDA concentration, hyperscaler bond issuance only make sense with the macro chassis; (3) macro literacy is a rare moat for technical people and the mental discipline ("what would change my mind", "what's priced in") transfers everywhere. The single biggest concrete forecast it informs: whether the AI capex cycle ends in productivity miracle, consolidation, or bubble pop — the answer lives in capital markets dynamics. Threshold is lower than feared: 0→1 chassis, then returns flatten.

---

## post-ZIRP

*[2026-04-26 21:55] via highlight*

**Context:** Where is capital actually flowing in the post-ZIRP regime — and what does the rotation between public/private, debt/equity, and asset classes tell us about how risk is being priced and intermediated?

---

## What does all this capital-markets terminology mean — and how should I ease in?

*[2026-04-26 22:05] via chat*

**Context:** After reading the W17 brief, user felt lost on terms like bear-flattening, inflation compensation, real yield, breakevens, FCF, credit spread, discount rate. Asked for a quick recap with underlying motivation, plus a strategy for absorbing this terminology over time.

**Notes:** Walked the user through the 6-step capital-markets spine: (1) bond = lending money for time, paying for wait + credit risk + inflation risk; (2) different durations stacked = yield curve, normally upward-sloping; (3) curve flattening has opposite meanings by which leg moves — bear-flattening (2Y up on inflation/Fed-hawk) vs. bull-flattening (10Y down on growth fears); (4) nominal yield minus TIPS = inflation breakevens = market's inflation expectation; (5) real yield is the discount rate on every long-duration asset, which is why 2022's rate shock hurt tech; (6) hyperscaler bond cost = base rate + credit spread, so FCF compression mechanically raises cost of capital for next AI capex round. Strategy: build the spine once, don't ask every term in real-time — let them accumulate in the queue and do one focused narrative deep-dive per week. Recommended Dalio "How the Economic Machine Works" (30 min) and Howard Marks "You Can't Predict, You Can Prepare" as the two foundational reads. The weekly brief acts as spaced repetition — same concepts return wearing different clothes.

---

## How do people bootstrap complex domains like economics/politics from scratch — is it just lock-in-and-memorize?

*[2026-04-26 22:25] via chat*

**Context:** User feeling overwhelmed by macro/finance terminology in W17 brief. Asked whether catching up requires sitting down and grinding through every term, or if there's a smarter strategy. Wanted research-backed answers.

**Notes:** Synthesized 8 strategies from Dalio/Munger/Damodaran/journalist-beat guides/cognitive science: (1) anchor to a question, not a curriculum — terms stick when load-bearing; (2) one spine reading then accretion (Dalio's *How the Economic Machine Works* = the canonical 30-min foundation); (3) 5-source diet for years beats 50 sources for weeks (consistency compounds pattern recognition); (4) bias toward articulating not consuming — articulation IS the learning, the queue + chat + brief is exactly this loop; (5) confusion is the signal — let it accumulate, deepen one chunk per week (chunking > memorization); (6) the macro cycle does spaced repetition for you — same concept returns wearing different clothes 4-5x per year; (7) latticework not linear (Munger) — build mesh across disciplines, technical analogies are head starts (duration ≈ pendulum sensitivity, credit spreads ≈ implied default probabilities); (8) the "good enough" threshold collapses fast — 30 hours = 80% of value, next 100 hours only adds 10%. Specific recommendation for user: spine reading is the only missing piece — Dalio video + Marks memo (1 hour total), then keep doing the existing weekly cycle. Avoid textbooks/MOOCs/AP-style paths — they optimize for credentialing not working chassis.

---

## What is capital markets — basic intuitions, ground up

*[2026-04-27 09:30] via chat*

**Context:** Start of a sustained learning session. User wants narrative-style explanations from the very basics. This was the first question — kicks off a series.

**Notes:** Built capital markets from a single concrete scene (you lending $10K to a neighbor's bakery). Established the foundational binary: every capital-markets act reduces to either lending (= debt = bond) or owning (= equity = stock). Scaled up: when borrowers are large (Apple, US Treasury) and savers are dispersed, you need a market to do three jobs — matching savers to borrowers, pricing risk, providing liquidity. Distinguished primary market (borrower raises cash from issuance) vs. secondary market (investors trading among themselves; CNBC stock prices are secondary). Mental model offered for the technical user: capital markets is a giant matching engine + price-discovery layer for time and risk; prices are the routing decisions, Fed cutting rates = adjusting a global routing parameter. Set up the next questions: bonds in detail, how interest rates are set, why prices move daily, the Fed's role, hyperscaler bonds.

---

## 30 year, CapEx, rates as risk pricing, credit vs debit, credit spreads

*[2026-04-27 09:50] via chat*

**Context:** User firing rapid foundational questions in the same chat session as the capital-markets primer. Wanted intuitions for several connected terms.

**Notes:** **30 year** = duration/maturity of a bond (Treasury issues across 1mo-30Y); longer duration = more risk = normally higher rate. **CapEx** = capital expenditure = money spent on long-lived physical assets (factories, GPUs, data centers); distinct from OpEx (day-to-day operating costs). AI capex cycle is hyperscalers funding GPU/data-center buildouts often via bond issuance. **Refined "rates = risk pricing":** rates price three things stacked — time value + inflation expectations + credit risk. Treasury rates have no #3 (govt can print). Corporate rates stack all three. Cleaner phrasing: every rate = price of money for some duration with some risk profile. **Credit vs debit:** two meanings — (a) accounting double-entry ledger (skip for now), (b) finance/everyday: "credit" = borrowed money / debt / lending. Mental shortcut: substitute "debt" when you hear "credit" in macro context — almost always correct. **Credit spreads:** the extra rate above the risk-free Treasury baseline that a corporate borrower pays due to default risk; measured in basis points. Stronger borrower = narrower spread; stress = widening; calm = tightening. The mechanism connecting hyperscaler FCF compression to AI capex constraints: negative FCF → lenders nervous → next bond issuance has wider spread → higher cost of capital → AI capex harder to fund.

---

## What are commodities and how do they connect to everything?

*[2026-04-27 10:10] via chat*

**Context:** Continuing the foundational learning session, after capital-markets and rates basics. User wanted commodities explained intuitively + how they connect to capital markets, AI, geopolitics, and rates.

**Notes:** Commodities = the raw physical inputs at the bottom of every supply chain — energy (oil, nat gas, coal, uranium), metals (copper, iron ore, lithium, rare earths, gold), agricultural (wheat, corn, soy). They're fungible (a barrel of WTI = a barrel of WTI) which is what makes them tradable on global markets (NYMEX, LME, CBOT). **Defining feature: fast/slow asymmetry** — demand moves in weeks, supply takes years (new copper mine = 10-15y; oil field = 3-5y). That asymmetry creates lumpy cycles and spikes; explains the "supercycle" concept. **5 connections to everything else:** (1) commodities → inflation → rates → all asset prices (canonical example: Hormuz crisis → oil → 2Y inflation comp → Fed reaction → bear-flattening curve in W17 brief); (2) commodities → reserve currency (petrodollar — producer countries recycle USD into Treasuries, finances US deficit; if oil priced in CNY this breaks); (3) commodities → geopolitics (geographic concentration creates choke points: oil/Mid-East, rare earths/China processing, uranium/Kazakhstan); (4) commodities → AI buildout (copper for electrification, nat gas for behind-the-meter data center power, uranium for nuclear PPAs with hyperscalers, critical minerals for semis/batteries — "AI cycle is the commodity cycle in disguise"); (5) commodities → equity markets directly (BHP, FCX = leveraged commodity bets). **Supercycle thesis:** mining capex -50% from 2012 peak collapsed during oversupply; now demand surging from electrification + AI + reshoring + defense, but supply lag means structurally higher prices for years; bond market hasn't fully priced this. Goehring & Rozencwajg are the strongest voices. **Mental model:** commodities are the upstream layer. A price move there is a shock at the bottom of the stack that ripples up through inflation → rates → discount rates → equity multiples → currencies → geopolitics → tech cycles.

---

## What is a nuclear restart?

*[2026-04-27 10:25] via chat*

**Context:** Came up in the commodities discussion (uranium / AI energy buildout connection). User wanted the basics.

**Notes:** Nuclear restart = bringing a previously-decommissioned US nuclear plant back online. Backstory: cheap shale gas (post-2010) made nuclear uncompetitive on $/MWh; several physically-fine plants got economically shut (TMI Unit 1 in 2019, Palisades in 2022, Duane Arnold in 2020). Reactors, fuel handling, licensing all intact — just mothballed. AI demand changed the math: hyperscaler 1GW data center loads can't be served by saturated grid + intermittent renewables + slow new-build options (gas: 3-5y permit; new nuclear: 12-15y). Old nuclear plant restart: 4-6 years. Defining moment: Sep 2024 MSFT 20-year PPA with Constellation to restart TMI Unit 1 ("Crane Clean Energy Center"), online target ~2028 — first-ever restart of fully-decommissioned US reactor. Palisades on similar path (Holtec, 2025-2026). 5-8 plausible restart candidates total. Connections: energy-systems (binding constraint, near-term unlock), commodities (uranium demand surge), ai-compute-capex (hyperscaler 20Y PPAs are capital-markets-dressed-as-energy-deals — long-dated fixed-price contracted cash flows), industrial-policy (IRA $15/MWh PTC + state aid is what makes restart economics work), tech-investments (Constellation tripled on the MSFT deal — market re-priced nuclear fleet from stranded assets to scarce baseload). Mental model: a nuclear restart is re-deployment of stranded capital that AI demand made valuable again. Restarts are the most concrete signal that "AI is power-constrained" is a real binding constraint, not just rhetoric.

---

## Dollar & reserves intuition + mental models for all 14 themes

*[2026-04-27 10:50] via chat*

**Context:** Continuing the foundational learning session. User asked for high-level intuition on dollar/reserve dynamics, plus requested deep mental models for each theme on the website.

**Notes:** Walked through dollar dominance: it's infrastructure (trade invoicing, reserve holdings, bond denomination) that the world uses by default — Bretton Woods origin, Nixon shock didn't change it because deep capital markets + Treasury market + rule of law + network effects locked it in. "Exorbitant privilege" = US can run persistent deficits because foreigners want Treasuries. Triffin's dilemma = supplying world dollars requires US deficits, but persistent deficits eventually erode the anchor. Erosion at the margin: 2022 Russia sanctions triggered EM gold buying surge (>1,000 tonnes/yr), BRICS-pay/CIPS/mBridge alternative rails, USD reserve share 70% (2000) → 58% now. No collapse: EUR no fiscal authority, CNY not convertible, gold not a payment system. **Mental model: dollar = network protocol (TCP/IP, QWERTY) — erodes at margin, doesn't get replaced because no superior contender exists; decline = decades of drift, not collapse.** Then added "## Mental model" sections to all 14 theme files with deep, actionable framings: thermostat-with-lag (monetary-policy), network protocol (dollar-reserves), routing system for time-and-risk (capital-markets), fast-demand-slow-supply (commodities), balance-sheet-recession (china-economy), parallel-stacks-under-constraints (china-tech), unipolar-moment-ending (geopolitics-conflicts), what-was-inefficient-becomes-strategic (industrial-policy), slow-physics-exponential-by-30 (demographics), arms-race-economics (ai-compute-capex), scaling-laws-religion-until-they-break (ai-models), bottleneck-always-moves (semiconductors), power-is-new-bandwidth (energy-systems), value-migrates-to-distribution (tech-investments). Created `mental-models.md` index for browsing and added a "Mental models" nav item to the dashboard.

---

## bear-flattening

*[2026-04-27 19:21] via highlight*

**Context:** ⚠️ Middle East energy shock is rewriting the macro path. The Strait of Hormuz / US-Iran standoff drove a bear-flattening of the curve over the intermeeting period — but importantly, the 2Y rose primarily on inflation compensation, not real-rate expectations. Market-implied path now sees only ~1 cut in 2026 (down from earlier). FOMC meets Apr 28-29 and is expected to hold at 3.50–3.75%. The transmission chain is the cleanest live example of cross-pillar dynamics: geopolitics → oil → inflation breakevens → 2Y yield → Fed reaction function → equity multiples. Updates themes/geopolitics-conflicts.md, themes/monetary-policy.md, themes/commodities.md.

---

## inflation compensation

*[2026-04-27 19:21] via highlight*

**Context:** ⚠️ Middle East energy shock is rewriting the macro path. The Strait of Hormuz / US-Iran standoff drove a bear-flattening of the curve over the intermeeting period — but importantly, the 2Y rose primarily on inflation compensation, not real-rate expectations. Market-implied path now sees only ~1 cut in 2026 (down from earlier). FOMC meets Apr 28-29 and is expected to hold at 3.50–3.75%. The transmission chain is the cleanest live example of cross-pillar dynamics: geopolitics → oil → inflation breakevens → 2Y yield → Fed reaction function → equity multiples. Updates themes/geopolitics-conflicts.md, themes/monetary-policy.md, themes/commodities.md.

---

## FOMC

*[2026-04-27 19:21] via highlight*

**Context:** ⚠️ Middle East energy shock is rewriting the macro path. The Strait of Hormuz / US-Iran standoff drove a bear-flattening of the curve over the intermeeting period — but importantly, the 2Y rose primarily on inflation compensation, not real-rate expectations. Market-implied path now sees only ~1 cut in 2026 (down from earlier). FOMC meets Apr 28-29 and is expected to hold at 3.50–3.75%. The transmission chain is the cleanest live example of cross-pillar dynamics: geopolitics → oil → inflation breakevens → 2Y yield → Fed reaction function → equity multiples. Updates themes/geopolitics-conflicts.md, themes/monetary-policy.md, themes/commodities.md.

---

## Build a permanent lookup table for highlighted terms — strategy for handling density

*[2026-04-27 11:15] via chat*

**Context:** User struggling with terminology density when reading the W17 brief. Asked for a permanent lookup table that instantly defines terms on highlight, with the glossary growing over time. Also asked meta-question about whether this is the right approach to handling density.

**Notes:** Validated the approach as right shape for jargon density (but not conceptual density — that still requires spine reading + chat dialogues). Built the system: (1) `glossary.json` seeded with 53 entries covering all dense terms from W17 brief and chat sessions (bonds/yields/curves/spreads, hyperscaler/CapEx/AI economics, commodities/energy/nuclear restart, dollar/reserves/petrodollar/Triffin, China balance-sheet-recession, semis HBM/CoWoS, energy PPA/baseload/behind-the-meter, etc.). (2) Frontend changed: highlight → check glossary first → if hit, instant tooltip (no LLM call); if miss, existing "+ Add" button → learning-queue. (3) CLAUDE.md updated with rule: when explaining a term in chat, also append/update glossary.json with 1-3 sentence canonical entry — flywheel where every confusion the user records eventually becomes an instant lookup. (4) Added "Mental models" nav button in dashboard linking to mental-models.md (created earlier). Mental model for the user on how the pieces fit: glossary = accumulating fluency layer; learning-queue = active confusion log; chat = synthesis surface; brief = spaced repetition. Each plays a different role.

---

## Auto-underline known glossary terms inline + click to open modal

*[2026-04-27 11:30] via chat*

**Context:** User wanted to upgrade the highlight UX: instead of needing to drag-select a term, automatically underline all known glossary terms in the rendered text in a different color. Click a highlighted term → opens the definition modal.

**Notes:** Implemented inline auto-annotation. After every content render, a TreeWalker walks text nodes (skipping code/pre/headers/already-annotated) and wraps glossary-key matches with `<span class="gloss-term" data-term="...">` using a single regex built from glossary keys (sorted longest-first, alternation, word boundaries, case-insensitive, flexible whitespace for multi-word terms). CSS gives them a dashed accent-color underline + hover background. Click handler on `.gloss-term` opens the existing def-tip near the span (no LLM call). Drag-select + "+ Add" preserved as fallback for *unknown* terms — the flywheel still works for vocab not yet in the glossary. Added `setContent()` wrapper that does innerHTML + annotation in one step; replaced 6 callsites. Glossary regex built on glossary load and reused.

---

## UserPromptSubmit hook to auto-sync highlighted terms into glossary

*[2026-04-27 11:50] via chat*

**Context:** User asked for a pre-hook in the repo (.claude config) that fires on every user message, looks at recently added (highlighted) terms in the queue, and adds glossary entries for them. Also requested that the highlight Add captures the surrounding paragraph as context (already implemented earlier — confirmed and surfaced via hook).

**Notes:** Built `.claude/hooks/sync_glossary.py` — a UserPromptSubmit hook script that reads learning-queue.md, parses out entries tagged "via highlight" whose terms aren't yet keys in glossary.json, and prints a `<system-reminder>` block listing the new terms WITH their highlighted-context paragraphs. Silent when nothing new. Registered in `.claude/settings.json` with proper three-level nesting (`hooks.UserPromptSubmit[].hooks[].{type,command,timeout}`). Confirmed schema against official Claude Code docs (the claude-code-guide subagent gave incorrect "flat" schema; verified the wrapped form is correct via WebFetch on code.claude.com/docs/en/hooks). Hook output is plain stdout which Claude Code injects as additional prompt context. The flywheel: user highlights → "+ Add" → queue entry with context → next message fires hook → Claude defines + appends to glossary.json → next dashboard refresh shows the term auto-underlined and clickable. Cleaned up test artifacts ("some unknown term") and defined the one legitimate stale term ("post-ZIRP" + "zirp" added).

---

## EM

*[2026-05-01 23:19] via highlight*

**Context:** China is the second-largest economy and the swing factor for global commodities, manufacturing supply, and EM debt. Whether it hits stall speed (Japan-1990) or finds a new growth model determines a lot about the next decade — global rates, commodity demand, EM equity, US-China tension, and the "is the dollar system threatened" question.

---

## monetary stimulus

*[2026-05-01 23:20] via highlight*

**Context:** Richard Koo's framework from Japan post-1990. When the private sector is repairing balance sheets after a debt bubble bursts, monetary stimulus doesn't work — nobody wants to borrow at any rate; they want to pay down debt. The economy can have positive GDP growth and still feel like depression because incomes flow to debt service, not consumption. China's property unwind is this exact framework. Implication: it's a multi-decade workout, not a cyclical fix. Stimulus that goes to producers (supply-side) just accumulates more debt; stimulus that goes to households (demand-side cash transfers, pension reform) is what breaks the cycle. Watch which type of stimulus Beijing chooses — that tells you whether they understand their own diagnosis.

---


## W18 brief terms: manufacturing yield, multi-model routing, case-by-case licensing

*[2026-05-03 11:00] via chat*

**Context:** Weekly brief generation — user's first week with narrowed tech-only themes. Three new concepts introduced in the brief.

**Notes:** (1) Manufacturing yield vs. bond yield — same word, different domain. Chip yield = % of chips on a wafer that pass quality testing. SMIC Ascend 910C yield 20-40% vs TSMC 90%+; the gap explains why Chinese AI chips cost far more per usable unit. Effective output = yield × wafer capacity, so "5x capacity goal" overstates actual usable chip gain. (2) Multi-model routing = deploying an orchestration layer that picks different AI models for different tasks rather than committing to a single provider. Signals commoditization of individual models and value migration toward the routing/enterprise layer. (3) Case-by-case licensing (BIS) = switch from blanket denial to individual evaluation for H200-class chip exports to China; requires US supply sufficiency cert, no capacity diversion, recipient security audit, independent third-party performance test. Still practically very restrictive.

---
