---
title: 'AI and Personalized Pricing & Steering in Essentials'
bucket: 'stress-test'
corePattern: 'When pricing algorithms become too fast and opaque to contest, and consumers cannot exit the market, consumer choice becomes a rubber stamp on extraction optimized at scale.'
studyDate: 2026-03-10
eventWindowStart: 2016-01-01
eventWindowEnd: 2026-03-10
status: 'published'
summary: 'Algorithmic pricing can help in genuinely competitive markets, but in essential markets with high switching costs it more often turns precision into extraction. The key question is not whether pricing is personalized, but whether people can see, contest, or escape the logic shaping the offer.'
claim: 'Personalized pricing and steering become extractive when opaque algorithms operate in captive markets where normal people cannot realistically exit or compare alternatives.'
evidenceLevel: 'medium'
policyDomain:
  - 'competition'
  - 'consumer-protection'
  - 'housing'
  - 'insurance'
  - 'technology-governance'
tags:
  - 'ai'
  - 'pricing'
  - 'steering'
  - 'market-power'
  - 'housing'
  - 'insurance'
  - 'captivity'
receiptTags:
  - 'primary-documents'
  - 'official-data'
  - 'independent-analysis'
sources: []
---

- [1. One scene](#1-one-scene)
- [2. What's happening](#2-whats-happening)
- [3. Why it's happening -- the mechanisms](#3-why-its-happening----the-mechanisms)
- [4. Examples and walkthroughs](#4-examples-and-walkthroughs)
- [5. The captivity condition](#5-the-captivity-condition)
- [6. Evidence](#6-evidence)
- [7. Disconfirming evidence](#7-disconfirming-evidence)
- [8. Control stack](#8-control-stack)
- [9. Governance and procurement](#9-governance-and-procurement)
- [10. Safety and reliability overreach check](#10-safety-and-reliability-overreach-check)
- [11. Shared gains test](#11-shared-gains-test)
- [12. What to do](#12-what-to-do)
- [13. What good looks like](#13-what-good-looks-like)
- [Research gaps](#research-gaps)
- [Loop Effect](#loop-effect)
- [North Star Verdict](#north-star-verdict)
- [Bridge language](#bridge-language)

---

## 1. One scene

A renter in Charlotte is deciding between two apartment complexes. Both are managed by large regional landlords. Both list similar rents. She picks the one closer to work. What she can't see is that both landlords use the same software -- RealPage's YieldStar -- and that software has been pooling non-public occupancy and lease-rate data from competing landlords across her submarket to set daily price recommendations. The rent she's comparing isn't the product of two landlords competing for her business. It's the product of a single algorithm coordinating across them. She has no way to know this. No disclosure is required. By one academic estimate, her rent is about $70/month higher than it would be under competitive pricing -- but the mechanism is what the evidence firmly supports: coordination, invisibility, and no way to contest. She signs the lease.

---

### Why this matters

This is not just a story about smarter pricing. It is a story about power in markets where normal people cannot easily walk away. When AI helps firms see exactly how trapped, urgent, or uninformed a customer is, personalization stops being a convenience and starts becoming a better way to extract.

---

## 2. What's happening

In essential markets like rent, insurance, credit, and healthcare, pricing algorithms are often not making choice more real. They are helping firms charge more precisely against people who cannot easily leave. The result is not just higher prices. It is more unpredictable bills, weaker comparison-shopping, and less leverage for households already under pressure.

### What the helpful version looks like

Algorithmic pricing can genuinely help consumers when competition is real: insurance telematics programs that lower premiums for safe drivers, personalized loan offers that surface better terms for people with thin credit files, dynamic pricing that signals excess supply. The difference between "pricing that helps" and "pricing that extracts" isn't the algorithm -- it's the market structure. In competitive markets with low switching costs and good information, algorithmic precision can produce consumer surplus. In captive markets -- rent, mandatory insurance, employer health plans -- that same precision becomes extraction at scale. The welfare-improving case for personalized pricing falls apart exactly where captivity is present. [supports the captivity condition analysis in Section 5]

**Why it usually doesn't happen:** Because the markets where AI pricing is most aggressive are precisely the captive ones. The competitive pressure that should pass efficiency gains to consumers doesn't exist in a housing market where two coordinated landlords are your only options, or in a health plan market where open enrollment is once a year. The algorithm isn't the problem. The missing competitive floor is.

**What makes the helpful version more likely:** Portability and interoperability requirements that lower switching costs; a ban on using non-public competitor data in mandatory-market pricing models (the RealPage settlement principle, extended broadly); audit rights so regulators can verify whether efficiency gains flow to consumers or to margin.

---

### The fork in the road

Used badly, AI turns essential markets into precision extraction systems. Firms learn who is least able to leave, what signals urgency, and how much friction a normal person will tolerate before giving up. Prices rise, choices get murkier, and the burden falls on households.

Used well, AI can reduce search time, surface better-fit offers, and lower costs for people who shop carefully or have been poorly served by blunt pricing systems. But that only happens when markets are actually competitive, switching is realistic, and people can inspect and challenge the logic shaping the offer.

The difference is not whether pricing is personalized. The difference is whether the person has real options.

---

## 3. Why it's happening -- the mechanisms

This case runs on two rails. Lumping them together muddies the analysis.

A simpler way to say it: when people cannot really leave, smarter pricing becomes smarter extraction.

- **Rail A: coordination at scale.** Competing firms share non-public pricing data through a common algorithm. The harm is market-level: the competitive price signal gets replaced by a coordinated one. (Primary example: RealPage rent-setting.)
- **Rail B: individual targeting and steering.** A consumer is assigned to a price tier or routing path based on signals that act as proxies for characteristics the firm can't (or shouldn't) use directly. The harm is individual-level: unequal prices, unequal access, opaque recourse.

The mechanisms below are the reusable patterns that make both rails possible. Each mechanism includes **Mechanism Modules** (numbered sub-items) that you can reuse across case studies.

**Accountability laundering (Rail B).** When a consumer is overpriced, steered, or denied on an essential market decision, the accountability chain runs backward through data broker, model vendor, and institution -- with each layer pointing at the next. The broker sold a ZIP code; the model weighted it; the insurer acted on the score. No entity is legally required to explain the full chain to the person affected. The fix requires assigned decision ownership: the institution that acts on the output owns accountability for that output, regardless of where the data came from. This is the same accountability diffusion you see in claims eligibility, where the complexity of the UM vendor stack shields the harm from any single accountable owner.

### Mechanism 1: Contestability collapse

When systems become too fast, cheap, or opaque to overrule, "human review" becomes a rubber stamp. Power quietly shifts from people to institutions.

#### Module 1.1: Human Command (minimum floor)

> Applied to personalized pricing and routing decisions in essential markets.

| Element            | Status                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Notice**         | **Partial and jurisdiction-dependent.** New York Algorithmic Pricing Disclosure Act (effective November 10, 2025) requires disclosure when a price is set by algorithm using personal data. No federal analog. Healthcare PA decisions: no federal requirement to disclose AI involvement.                                                                                                                     |
| **Reason**         | **Incomplete.** CFPB Circular 2023-03 requires specific adverse action reasons for AI credit denials; enforcement uncertain as of March 2026. No equivalent standard for insurance pricing or healthcare PA routing under federal law. Where reasons are provided, they often reference criteria categories rather than specific model inputs.                                                                 |
| **Appeal**         | **Nominally present; structurally deterred.** Healthcare PA: appeal pathway exists; overturn rates are significant when pursued; most patients do not pursue. Credit: adverse action notice required; appeal path through creditor, not through a neutral party. Rent: no appeal mechanism for a coordinated price.                                                                                            |
| **Records**        | **Not accessible to consumers in any system reviewed.** Pricing inputs, model version, output price, and benchmark comparison are not available to the consumer on demand. Regulator access is jurisdiction-dependent and generally not operationalized.                                                                                                                                                       |
| **Human override** | **Present for some decisions; structurally marginal for others.** Healthcare PA: physician-to-physician review available on appeal; not required before initial AI denial. Rent: landlords could technically reject RealPage recommendations; DOJ complaint documents acceptance as the structural default. Credit: human review available at creditor discretion; not required for AI-driven adverse actions. |

**Finding:** Human Command is not present in any essential market reviewed at a level that meets the minimum floor. The closest thing is CFPB Circular 2023-03 (credit reason codes) and New York's disclosure law. Both are partial, and one has uncertain enforcement status.

---

#### Module 1.2: Rubber-stamp proxies (how to measure it)

**Rubber-stamp conditions:**

- Confirmed for RealPage (DOJ complaint describes acceptance as the default structure, not the exception).
- Confirmed for ride-hail (opaque algorithm; no driver visibility into pricing formula).
- Plausible for grocery ESL (technology deployed; individualized pricing use not confirmed).

The rubber stamp here isn't a reviewer clicking through denials too fast. It's a landlord or insurer accepting an algorithmic output because the system is designed to make acceptance the path of least resistance, and rejection would mean overriding a recommendation they can't independently verify.

**Proxies to track (add anchors where possible):**

- % of decisions accepted "as-is" vs overridden (by operator class)
- median time-to-review and time-to-appeal-resolution
- reversal rate on appeal / dispute
- complaint volume per 10k users, and % resolved with meaningful change
- "no explanation available" rate (decisions without a usable reason)

### Mechanism 2: Exit / captivity

If you can't exit, you're captured. When switching is unrealistic, price steering becomes extraction.

#### Module 2.1: Exit test

> Can a normal person comparison-shop or switch in this market?

Captivity operational definition (from Section 5): a consumer is operationally captive when two or more of the following conditions apply simultaneously -- switching costs (money and time), network lock-in, regulatory or coverage requirement, information asymmetry. The more conditions present, the higher the extraction ceiling.

| Market           | Realistic exit?                                                                                                                                                                                                            | Captivity conditions present                                                                                                        |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Rent             | No for most lower-income renters in affected submarkets. Geographic mobility requires 2-4 months of rent in direct switching costs; coordinated pricing covers large shares of available units in concentrated submarkets. | Switching costs (high) + information asymmetry (coordination invisible) = 2 conditions.                                             |
| Auto insurance   | Partial. Comparison-shopping is possible; shopping friction is real; switching requires coordinating new and old policies; model similarity across insurers may limit the benefit of switching.                            | Regulatory requirement (49 states) + information asymmetry (model invisible) = 2 conditions.                                        |
| Health insurance | No mid-year. Plan-year lock-in is confirmed. Annual enrollment permits switching; network differences may constrain effective choice even then.                                                                            | Switching costs (plan-year lock-in) + network lock-in (provider network) + information asymmetry (AI not disclosed) = 3 conditions. |
| Credit           | Partial. Multiple lenders available; inquiry penalty for shopping; model similarity across lenders uncertain.                                                                                                              | Information asymmetry (model invisible) + moderate switching cost (inquiry penalty) = 2 conditions.                                 |
| Gig labor        | No for platform-dependent workers. No rating portability across platforms; leaving a platform means losing accumulated review history.                                                                                     | Network lock-in (ratings not portable) + information asymmetry (formula invisible) = 2 conditions.                                  |

The switching costs aren't abstract. Switching health insurers mid-year typically requires a qualifying life event -- job change, marriage, birth. Switching landlords means losing your deposit, paying moving costs, and risking a worse market. Switching auto insurers may trigger a lapse-in-coverage penalty on your next quote. In each case, the "choice" to stay isn't a preference -- it's a barrier that the algorithm's owner faces no pressure to lower.

That is why "choice" in these markets is often a performance, not a protection.

**Finding:** Exit is not realistic in any essential market reviewed under the captivity definition. This raises the governance bar: where exit fails, disclosure, audit rights, and contestability aren't optional improvements -- they're the only available mechanism to prevent extraction from becoming the structural norm.

---

#### Module 2.2: Switching cost checklist

Use this as a quick scorecard when evaluating an "AI pricing/steering" system:

- Can a normal person comparison-shop in minutes, not days?
- Can they switch without losing essentials (care, housing, income access)?
- Are penalties, fees, lock-ins, or "soft" retaliation common?
- Are the terms legible enough to detect manipulation?

### Mechanism 3: Gate shift (trust + distribution)

When trust gets expensive, verification becomes a gate -- and gates get monetized. In this case, "identity" often means segmentation.

#### Module 3.1: Provenance (content)

In pricing/steering, provenance is about **offer provenance**: can a person trace a quote back to inputs, rules, and disclosures that can be contested?

Checklist:

- all-in price disclosure (fees, add-ons, commissions) at decision time
- the factors that moved the price (in plain language)
- which data sources were used (first-party, broker, derived proxies)
- how to challenge incorrect inputs
- a record of the quote/route shown to the consumer

Without this, a person cannot tell whether the offer reflects real cost, real risk, or the model's guess about how much extra they will tolerate.

#### Module 3.2: Personhood and credentials (people)

_When trust gets expensive, verification becomes a gate -- and gates get monetized._

##### Identity scoring and proxy discrimination

In pricing and steering contexts, "identity" doesn't mean authentication -- it means segmentation. The algorithm assigns a consumer to a risk bucket, a price tier, or a routing path based on signals that serve as proxies for characteristics the firm can't or legally shouldn't use directly.

The mechanism is documented in Section 4, Walkthrough B: credit scores, ZIP codes, and external behavioral data enter the model. These signals correlate with race and income -- not as intentional design choices, but as statistical artifacts of historical segregation and wealth inequality. The model optimizes for predictive accuracy using the available signals. The outcome is disparate: ZIP codes with predominantly Black residents face 60% higher home insurance premiums than predominantly white ZIP codes after controlling for population density.

This is proxy discrimination. The consumer wasn't segmented by race. They were segmented by ZIP code, which functions as a racial proxy in the model's optimization. The distributional effect is indistinguishable from direct discrimination.

##### Confirmed enforcement anchor

The Massachusetts AG settlement (July 2025) is the confirmed enforcement anchor for this mechanism in an AI underwriting context. A student loan company's AI underwriting models produced unlawful disparate impact based on race and immigration status. The AG settled.

CFPB Circular 2023-03 (September 2023) provides the structural context: AI credit denials must give specific, accurate reasons. Generic black-box notices that don't specify which factors triggered a denial violate ECOA. Before the circular, industry practice was to issue generic notices consumers couldn't use to contest a decision.

##### Identity integrity: synthetic identities and verification failure

One underappreciated interaction: the same pricing and eligibility models that use identity signals to segment consumers are also vulnerable to synthetic identity fraud -- where the identity signals are fabricated. FinCEN Advisory FIN-2023-A003 (November 2023) documented that AI-generated deepfake images, audio, and documents are being used to defeat remote identity verification at financial institutions. Standard liveness detection may be insufficient.

The implication for this case: a pricing model that relies on identity signals for segmentation is exposed at both ends. The signals can be proxies for protected characteristics (disparate impact problem), and the identity the signals are attached to can be fabricated (verification integrity problem). Both failure modes undermine the claimed precision of algorithmic segmentation.

##### Minimum floors for segmentation systems

**Rights floor**

- **Human Command floor:** If AI affects a life outcome, you get: notice, reason, appeal, records, and a human override.
- **Contestable segmentation decisions:** A consumer assigned to a price tier or routing path must be able to contest the assignment with specific, actionable information about the basis.
- **Actionable notices:** The denial or pricing notice must identify which factors triggered the decision, in language the consumer can use to respond. CFPB Circular 2023-03 is the model; it does not currently extend to pricing personalization.
- **Records:** Segmentation decisions must be logged with sufficient retention for the consumer to access during the relevant dispute or appeal window.

**Operations floor**

- **Audit for disparate impact:** Regulators must be able to audit whether the aggregate distribution of pricing and routing outcomes produces unlawful disparate impact by protected class. The Massachusetts AG settlement and NY DFS Circular 2024-7 require pre-deployment audit and attestation; they do not require public distributional disclosure post-deployment.

**One thing to do:** If you receive a credit or insurance decision you didn't expect, request the specific reason codes and ask in writing whether your rate was individually set or based on aggregated market data. Under CFPB Circular 2023-03, AI-driven credit denials must provide specific, accurate reasons -- not generic references to creditworthiness. For insurance, ask whether your ZIP code or external data broker scores were used as pricing inputs; in New York, you have additional disclosure rights under the 2024 DFS circular.

---

### Mechanism 4: Asymmetric logs

If the institution can see everything and the person can see nothing, appeals become theater.

#### Module 4.1: Audit/log checklist

> What is logged, who can see it, and can the affected consumer contest it?

| Question                                                                  | Status                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **What is logged when a personalized price or routing decision is made?** | Unknown for most systems. No mandatory logging standard for algorithmic pricing decisions in the US as of March 2026. EU AI Act requires high-risk AI systems to maintain logs enabling auditability; pricing algorithms are not currently classified as high-risk AI under EU AI Act Annex III in most configurations. RealPage post-settlement compliance monitor: a compliance instrument, not a pre-deployment logging standard.                                                                  |
| **Who can see it?**                                                       | The firm only, in all systems reviewed. No consumer right to pricing decision logs exists in any US jurisdiction as of March 2026. New York's Algorithmic Pricing Disclosure Act requires disclosure that personalized pricing was used; it does not require disclosure of inputs, model version, or benchmark comparison. Regulator access is available through examination authority in some sectors (insurance, banking); not operationalized as a right to algorithmic pricing logs specifically. |
| **Can the affected consumer contest it using the log?**                   | No. A consumer cannot contest a pricing decision using information they can't access. The most proximate right is CFPB Circular 2023-03's requirement for specific credit denial reasons -- which provides a basis for contesting a denial but does not require disclosure of model inputs, weights, or the benchmark rate the consumer would have received without personalization.                                                                                                                  |

**Finding:** Asymmetric logs are the structural norm. Institutions have the pricing decision records; consumers don't. This is the precise A4 gap identified in the coverage map. Without log access, the audit and contestability minimums in Boxes 1 and 2 can't be operationalized even where they formally exist. The Section 9 governance framework (audit log retention as a minimum-floor requirement) addresses this gap; it is not currently required anywhere in the US for pricing algorithms.

---

#### Module 4.2: Records access and retention

Minimum operational requirements (adapt as needed by domain):

- **Logging:** inputs, model/version, outputs, and human overrides are logged with retention sufficient for audit and appeal.
- **Records access:** consumers can obtain the specific reason and the relevant records (inputs + decision trace) during the dispute window.
- **Retention:** logs are retained long enough to support oversight (not deleted on a 30-60 day clock that outlasts the person).

### Mechanism 5: Scale without adjudication

At scale, "enforcement" happens via routing, pricing, and denial -- without case-by-case adjudication.

#### Module 5.1: Enforcement-without-adjudication metrics

Track whether the system is effectively acting as a regulator or judge:

- % of outcomes that materially change a life (price/access) without a contestable reason
- distribution shifts (who pays more / gets routed away / gets denied)
- appeal rates, resolution SLAs, reversal rates
- evidence of systematic errors (class actions, regulator findings, audits)

#### Module 5.2: Corroboration rule

No adverse outcome based on a single unverified signal.

- require at least two independent sources for high-impact decisions, or
- provide a human review path that can override the signal quickly.

### Mechanism 6: Skill atrophy

When automation eats the "learning work," institutions lose competence and people lose ladders.

#### Module 6.1: Manual flight checks

#### Module 6.2: Learning-work quotas

### Mechanism 7: Bottlenecks / market power

When bottlenecks are concentrated, efficiency gains don't become shared gains -- they become bargaining power.

#### Module 7.1: "Where does power sit?" map

_When bottlenecks are concentrated, efficiency gains don't become shared gains -- they become bargaining power._

##### Where market power lives in this case

Pricing and steering algorithms don't operate in a vacuum. They operate through gates. In the essential markets documented here, the relevant gates are:

- **Platform gate (RealPage):** A single software vendor aggregated non-public pricing data from competing landlords across a submarket. Landlords who wanted the coordination advantage had to supply their own competitive data to get it. That's not a pricing tool -- it's cartel-coordination infrastructure. The power lives with whoever controls the data pool.
- **Insurer gate:** In health, auto, and home insurance, the insurer controls the eligibility model, the rate-setting model, and the claims-routing model. No public interface exists for comparing algorithmic inputs across insurers. A consumer denied or overpriced by one insurer's model has no mechanism to verify whether an alternative insurer runs a materially different model.
- **Data broker gate:** Credit scores, ZIP codes, and behavioral data enter insurance and lending models from external data brokers. The broker is invisible to the consumer but is the upstream source of the proxy discrimination harm. A consumer can't dispute their ZIP code's correlation with race in a pricing model because they don't know the model uses it, can't see the weight assigned, and can't access the broker's dataset.

##### How dependence blocks shared gains

The efficiency-improvement argument for algorithmic pricing assumes competitive pressure will pass gains to consumers. In captive essential markets, that condition doesn't hold.

A renter facing two RealPage-coordinated landlords has no non-coordinated alternative in her submarket. The software's efficiency improvement -- faster, more granular price-setting -- is captured entirely as higher rent because there's no competitive floor to push prices down. The captivity definition in Section 5 is the load-bearing variable: when two or more captivity conditions are simultaneously present (switching costs, network lock-in, coverage requirements, information asymmetry), the firm's optimization objective shifts from output maximization to reservation-price extraction. The welfare-improving price discrimination case fails in exactly this condition.

For the insurer and data broker gates, dependence is compounded by invisibility. The consumer can't identify the bottleneck, which means they can't price-shop around it, advocate against it, or detect when the efficiency gain has been captured as margin.

**Upstream capture via data brokers.** The data broker -> model vendor -> institution that prices you. Opt-out mechanisms exist in theory (CCPA, CPRA in California); in practice, the broker ecosystem isn't auditable by individual consumers. This is the same upstream capture mechanism documented in the content flood case, where creator work becomes training input without consent or compensation.

##### Levers

- **Interoperability:** Require pricing models in mandatory markets (insurance, credit) to use standardized input data categories that can be audited across providers. Reduces the information asymmetry that makes the data-broker gate invisible.
- **Portability:** Require that pricing history and model inputs be portable to regulators on demand. Prevents firms from arguing they can't reconstruct pricing decisions after the fact.
- **Audit rights:** Third-party auditing of pricing model inputs, outputs, and benchmark comparisons. The EU AI Act model for high-risk systems; not present in US for pricing algorithms as of March 2026. EU AI Act compliance deadline August 2026 does not apply domestically.
- **Bans on covert steering in captive contexts:** Prohibition on using non-public competitor pricing data as a model input (the core RealPage settlement requirement, extended as a general principle). In a market where exit is not realistic, covert coordination through a shared model is functionally equivalent to cartel behavior regardless of explicit agreement.
- **Non-discrimination rules:** Prohibited inputs for mandatory markets -- protected class proxies including ZIP codes and credit scores in non-actuarial applications. NAIC guidance framework; binding in New York; not enforceable federally as of March 2026.

**Resource externalities.** The compute infrastructure enabling AI-assisted pricing -- real-time price updates, behavioral model inference, data broker API calls at scale -- externalizes energy and infrastructure costs onto local communities unless procurement contracts require "load pays" commitments. When infrastructure costs are socialized and pricing gains are captured as margin, the monthly squeeze rises at both ends of the transaction. Enforceable community benefit agreements and infrastructure cost disclosure requirements are the mechanism for ensuring this cost doesn't land on the same consumers already subject to algorithmic price extraction.

**One thing to do (Mechanism 7):** If you are negotiating a contract with an algorithm-based pricing vendor -- as a property manager, employer benefit plan sponsor, or public housing authority -- require in writing that the vendor disclose whether individualized pricing is applied to your residents or members, whether competitor data is pooled in the model, and what audit rights you retain. These are contract terms, not regulatory asks, and they are available today.

---

#### Module 7.2: Shared gains test

This case study includes the Shared Gains Test as its own section. Treat it as the reusable insert for this mechanism:

- see **Section 11. Shared gains test**

### Mechanism 8: Control loops

When automation becomes the environment, mistakes become life outcomes and appeals become post-hoc.

#### Module 8.1: Safe-fail + kill switch

Pull from the control-stack and procurement layers:

- clear ownership of "stop the system" authority
- safe fallback that does not strand people
- ability to roll back models and pricing rules

#### Module 8.2: Incident review and rate limits

- incident reporting that includes user harm (not just uptime)
- post-incident review with a publishable summary (even if redacted)
- rate limits on automated changes (pricing pushes, routing changes) until monitored

## 4. Examples and walkthroughs

### 4.A Housing -- algorithmic coordination (Rail A)

**Step 1 -- Data capture:** RealPage's YieldStar required participating landlords to upload current lease rates, occupancy rates, and renewal offers. This data was non-public and competitively sensitive. Landlords shared it as a condition of using the software. (DOJ complaint, August 2024)

**Step 2 -- Model generates price recommendation:** YieldStar aggregated the data across competing landlords in the same submarket and generated daily rent recommendations. Because the model incorporated non-public competitor data, it could recommend rates above what any individual landlord would set based on their own occupancy alone. This is the DOJ's theory of harm; it has not been independently modeled here.

**Step 3 -- Why the renter cannot detect it:** The listed rent is visible. The coordination behind it is not. No disclosure was required before New York's November 2025 law -- and that law covers a different mechanism (individual behavioral pricing), not algorithmic market coordination.

**Step 4 -- Why the renter cannot exit:** DOJ complaint documents over 4 million units using the software. Some estimates suggest 1 in 4 rentals used some form of algorithmic pricing system. Exiting to a non-coordinated landlord required geographic mobility most renters don't have. Switching costs run 2-4 months of rent in direct expenses.

**Step 5 -- How the margin is captured:** Higher coordinated rents translate directly to higher revenue per unit. Academic research cited in the Washington Post (2025) estimates algorithmic pricing added approximately $70/month or 4% per affected unit, totaling roughly $3.8 billion in added renter cost in 2023. The primary academic paper was not independently read for this research file. Do not treat this figure as confirmed. The mechanism is confirmed by DOJ complaint and settlement.

---

### 4.B Insurance and credit -- proxy discrimination and opacity (Rail B)

**Step 1 -- Data capture:** Insurers and lenders ingest applicant data including credit score, ZIP code, employment history, and -- in some systems -- external behavioral data. These signals feed a proprietary model that generates a risk score or premium. (NY DFS Circular 2024-7; NAIC Model Bulletin 2023; FTC surveillance pricing study, January 2025)

**Step 2 -- Model changes the price or offer:** Credit scores and ZIP codes correlate with race and income -- not as intentional design choices, but as statistical artifacts of historical segregation and wealth inequality. The model optimizes for predictive accuracy using these signals, generating disparate outcomes for protected classes even without discriminatory intent. Missouri and Texas state insurance department studies found that a consumer's race was the most predictive factor in insurance scoring. ZIP codes with predominantly Black residents face 60% higher home insurance premiums than predominantly white ZIP codes after controlling for population density (Consumer Federation of America).

**Step 3 -- Why the person cannot detect it:** Before CFPB Circular 2023-03 (September 2023), AI credit denials were routinely issued with generic notices that didn't specify which factors triggered the denial. Even with specific reasons, the applicant can't see model weights or input data. A consumer in a ZIP code that generates a higher insurance premium can't see that their ZIP code is the primary driver, or that it functions as a racial proxy in the model.

**Step 4 -- Why the person cannot exit:** Auto insurance is legally required in 49 states. Health insurance is functionally required for access to non-emergency care at non-catastrophic cost. A consumer who receives an unfavorable algorithmic assessment can't exit the need for the product. Alternative providers may run similar models with similar biases.

**Step 5 -- How the margin is captured:** Higher premiums for lower-income and minority consumers in flagged ZIP codes generate additional revenue not explained by actuarial risk differential. The residual after legitimate risk factors are controlled for is the proxy discrimination harm. Direct margin capture attributable to algorithmic adoption -- as distinct from other pricing factors -- is not independently quantified in available peer-reviewed literature. This is the strongest methodological weakness in the insurance pricing claim. See PP-U02.

---

### 4.C Healthcare -- prior authorization as a route to cheaper (Rail B)

**Step 1 -- Data capture:** When a provider submits a prior authorization request, the insurer's AI system ingests clinical codes, diagnosis history, patient demographics, and plan type. Medicare Advantage plans run AI-driven PA review systems. (Senate PSI "Refusal of Recovery" report, October 2024; AMA 2024 survey)

**Step 2 -- Model changes the route:** The AI system flags the request for denial or modification -- recommending a lower-cost care setting or denying the requested treatment and requiring appeal. The Senate PSI documented that some denials were issued in less time than a physician would need to read the file. The claim that the model optimizes for cost rather than clinical appropriateness is the theory of harm; clinical appropriateness validation of AI PA decisions has not been independently established.

**Step 3 -- Why the patient cannot detect it:** The patient receives a denial citing medical necessity criteria. No federal requirement exists to disclose whether AI was used in the PA decision. Patients often don't know they have appeal rights, or that appeal success rates are significant when pursued.

**Step 4 -- Why the patient cannot exit:** Health insurance is plan-year locked. The patient can't switch to a plan without AI-driven PA mid-year. Out-of-network care for a denied treatment incurs materially higher cost-sharing.

**Step 5 -- How the margin is captured:** When a denial results in the patient accepting a lower-cost care setting, the insurer avoids paying the higher-cost claim. AHA (2024) attributes $19.7 billion per year in costs to hospitals from prior authorization delays -- this is a hospital cost figure, not a direct measure of patient harm. The mechanism connecting it to patient impact: AHA reports that average Medicare Advantage patient length of stay before post-acute discharge doubled vs. Traditional Medicare from 2019 to 2024, consistent with PA delays forcing longer hospital stays and care setting mismatches than medically appropriate. The patient harm is the downstream consequence of that misrouting, not what the $19.7B figure itself measures. The AHA is an industry advocacy organization; treat the figure as directionally credible, pending independent replication.

**Auto-steering is action, not suggestion.** In healthcare prior authorization (Rail B), the routing decision doesn't require the patient to know a recommendation occurred. The denial is the action; the patient's contest burden starts from zero information. In ride-hail and gig work, the deactivation is immediate income termination, not a recommendation pending review. These aren't suggestions that a human can override before they take effect -- they're automated enforcement at scale. The pre-action floor right (corroboration, notice, human override) isn't a due-process formality; it's the only point in the workflow where the error cost can be returned to the institution instead of being borne entirely by the person the action affects. This is the same "action without adjudication" pattern documented in surveillance coercion and claims eligibility, applied to consumer markets.

---

## 5. The captivity condition

This is the center of the case. The algorithm matters, but captivity is what gives it teeth. If a normal person cannot switch without losing time, money, coverage, housing stability, or income, then the market is no longer disciplining the seller.

A consumer is operationally captive when two or more of the following apply simultaneously. The more conditions present, the higher the extraction ceiling.

| Condition                         | Rent                                            | Auto insurance              | Health insurance                 | Credit                     | Gig labor                    |
| --------------------------------- | ----------------------------------------------- | --------------------------- | -------------------------------- | -------------------------- | ---------------------------- |
| Switching costs (money + time)    | High                                            | Moderate                    | High (annual lock-in)            | Moderate (inquiry penalty) | Rating loss                  |
| Network lock-in                   | Partial                                         | Partial                     | High (provider network)          | Moderate                   | High (no rating portability) |
| Regulatory / coverage requirement | Economic non-option for lower-income households | Legally required, 49 states | Functionally required            | N/A                        | N/A                          |
| Information asymmetry             | High (coordination invisible)                   | High (model invisible)      | High (no AI disclosure required) | High (weights invisible)   | High (formula invisible)     |

The welfare-improving price discrimination argument (see Section 6, disconfirming evidence) depends on competitive pressure that doesn't exist in captive essential markets. This distinction -- not whether algorithms are used -- is the load-bearing variable for whether personalized pricing helps or harms consumers in a given market.

---

## 6. Evidence

### Confirmed

| ID     | Claim                                                                                                                                                                                                                                                                                           | Source                                             |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| PP-001 | RealPage's YieldStar aggregated non-public competitor pricing data and generated coordinated rent recommendations. DOJ filed August 2024; settled November 2025.                                                                                                                                | DOJ complaint; DOJ-RealPage settlement             |
| PP-002 | FTC surveillance pricing study (January 2025): firms use location, demographics, browser history, mouse movements, and abandoned-cart data to set individualized prices without clear consumer notice or opt-out. Covers Mastercard, Accenture, PROS, Bloomreach, Revionics, McKinsey.          | FTC 6(b) study, January 17, 2025                   |
| PP-003 | CFPB Circular 2023-03: AI credit denials must give specific, accurate reasons. Generic "black-box" denials violate ECOA. Pre-circular practice was to issue generic notices consumers could not use to contest.                                                                                 | CFPB Circular 2023-03; Federal Register 2024-08003 |
| PP-004 | New York Algorithmic Pricing Disclosure Act (effective November 10, 2025): first enacted US statute requiring disclosure when a price is set by algorithm using personal data. Survived First Amendment challenge. No federal analog.                                                           | NY AG; Skadden analysis, January 2026              |
| PP-005 | Oxford FAccT 2025: 1.5 million Uber trips, 258 UK drivers, 2016-2024. After 2023 algorithmic pricing change: passengers paid more per trip, drivers' real earnings fell (~GBP 22/hour to ~GBP 19/hour before operating costs), Uber's commission rose from ~25% to ~29% (some cases above 50%). | Binns et al., ACM FAccT 2025                       |
| PP-006 | HRW "The Gig Trap" (May 2025): platform workers in Texas earned approximately $5.12/hour after expenses -- roughly 70% below MIT living wage estimate. Algorithm opacity prevents understanding or contesting pay. Confirmed as findings; representativeness is plausible.                      | HRW, May 12, 2025                                  |
| PP-007 | NY DFS Circular 2024-7 requires insurers to demonstrate AI and external data systems do not proxy for protected classes. NAIC Model Bulletin (2023) provides guidance.                                                                                                                          | NY DFS; NAIC                                       |
| PP-008 | Huskey v. State Farm: disparate impact claim based on algorithmic claims processing survived motion to dismiss. Massachusetts AG settled AI underwriting disparate impact action (July 2025).                                                                                                   | Court record; Massachusetts AG                     |

### Directionally supported, not independently confirmed

| ID     | Claim                                                                                                                                                                                                                           | Source                                                                                           |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| PP-012 | Algorithmic pricing added approximately $70/month or 4% of rent per affected unit; total added renter cost approximately $3.8 billion in 2023.                                                                                  | Academic study cited secondarily in Washington Post (2025); primary paper not independently read |
| PP-011 | Healthcare prior authorization AI steers patients toward lower-cost care settings through denial and appeal friction. Mechanism documented; AI-specific dollar harm to patients not separately quantified from all PA activity. | Senate PSI "Refusal of Recovery," October 2024; AMA 2024 survey                                  |

### Single-source or prospective

| ID     | Claim                                                                                                                                                                                                                | Source                                                               |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| PP-009 | Kroger EDGE shelf cameras have facial recognition capability for potential real-time individualized pricing. Kroger denies current surge pricing use. Camera capability is documented; pricing use is not confirmed. | Warren-Casey letter to Kroger CEO, August 5, 2024; CNBC October 2025 |

### Open questions

- Net welfare effect of personalized pricing for lower-income consumers in rent, insurance, and healthcare specifically
- What percentage of insurance premium disparity reflects proxy discrimination vs. legitimate actuarial factors in current algorithmic systems
- Whether the RealPage settlement produces measurable rent reductions
- FTC and CFPB enforcement posture on surveillance pricing and AI credit guidance under the current administration
- Whether the Huskey disparate impact theory survives appellate review

---

## 7. Disconfirming evidence

These are the industry's strongest arguments. They're not dismissed; they apply to specific conditions that differ from the captive essential market context.

**PP-D01 -- The welfare-improving price discrimination argument:** Standard price discrimination theory holds that personalized pricing can expand output and lower effective prices for price-sensitive consumers in competitive markets. A firm that can charge different prices to different consumers can serve lower-income consumers at prices they can afford, while charging higher prices to consumers with higher willingness to pay. (Mercatus Center, 2025; CCIA, "Personalized Discounts, Public Gains")

Assessment: This argument is strongest in optional markets with genuine competition and no captivity. It's weakest in essentials (rent, insurance, healthcare) because: (a) there is no outside option at a lower uniform price; (b) captivity allows extraction up to the full reservation price; (c) the "lower price for the poor" story requires the firm to actually offer those lower prices -- and in captive markets there's no competitive pressure to do so. The welfare-improvement case assumes the firm's optimization objective is output maximization. In captive markets the objective is profit maximization at reservation price. The mechanism by which lower-income consumers benefit doesn't exist when they can't leave.

**PP-D02 -- Airline dynamic pricing shows mixed welfare effects:** Williams (Econometrica, 2022) found that in single-carrier markets, dynamic pricing improves aggregate welfare vs. uniform pricing. Competing research found that in multi-carrier competitive markets, dynamic pricing reduces total welfare by 2.2% vs. uniform pricing. Airline welfare effects depend critically on market structure. Airline is also not an essentials market in the E4E sense; these findings don't generalize to rent, insurance, or healthcare.

**PP-D03 -- Surge pricing increases supply:** Uber's own research documents that surge pricing increases driver availability during high-demand periods, reducing wait times. The counterfactual (no surge) produces rationing through wait rather than price. Assessment: Valid for the supply-response mechanism. The Oxford 2025 study documents that Uber's 2023 shift to "upfront pricing" -- which decouples the consumer fare from driver pay -- captured the efficiency gain for Uber rather than distributing it to either side. Supply-response supports surge in competitive ride-hail; it doesn't support opaque decoupling of consumer price from driver pay.

**PP-D04 -- Telematics may reduce proxy discrimination vs. the credit scoring baseline:** Usage-based insurance pricing uses actual driving behavior rather than credit scores and ZIP codes, which are known racial proxies. In theory, telematics reduces proxy discrimination. Assessment: Plausible as a directional improvement over the credit-score baseline. Countervailing concerns: driving patterns can correlate with race, income, and neighborhood; data collection is extensive and consent is effectively coerced for access to lower rates; the improvement is relative to a badly discriminatory baseline, not absolute.

**PP-D05 -- Grocery loyalty discounts are pro-consumer personalization:** Grocery loyalty programs offer below-shelf prices to members. This is a long-standing form of personalization that benefits price-sensitive members who join. Assessment: Valid as historical practice. The distinction is that AI-enabled grocery pricing moves from opt-in loyalty pricing to behavioral surveillance pricing without clear opt-out. The loyalty card baseline doesn't make the next step acceptable.

---

## 8. Control stack

| Layer             | Status in this domain                                                                                                                                                                                                                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Human-in-the-loop | Not present in algorithmic rent recommendations (landlords could accept or reject YieldStar recommendations; DOJ complaint describes near-uniform acceptance as the default). Not present in algorithmic insurance pricing (rates set by model). Not present in ride-hail upfront pricing (fare set before driver is assigned). |
| Human-on-the-loop | Nominal. Landlords technically reviewed RealPage recommendations but the structure made rejection the exception. Gig workers can reject individual jobs but can't see the algorithm or modify pay.                                                                                                                              |
| Human-in-command  | Present only where: the consumer can exit to a real alternative; the regulator has audit rights with actual enforcement capacity; and disclosure exists so consumers can compare. None of these conditions fully applies in the essential markets documented here.                                                              |

**Rubber-stamp conditions:**

- Confirmed for RealPage (DOJ complaint describes acceptance as the default structure, not the exception).
- Confirmed for ride-hail (opaque algorithm; no driver visibility into pricing formula).
- Plausible for grocery ESL (technology deployed; individualized pricing use not confirmed).

The rubber stamp here isn't a reviewer clicking through denials too fast. It's a landlord or insurer accepting an algorithmic output because the system is designed to make acceptance the path of least resistance, and rejection would mean overriding a recommendation they can't independently verify.

---

## 9. Governance and procurement

**Current US regulatory state (as of March 2026):**

- No federal disclosure requirement for personalized pricing. New York Algorithmic Pricing Disclosure Act (effective November 10, 2025) is the first enacted US statute; $1,000 penalty per violation; no federal analog.
- CFPB adverse action guidance (2023) covers credit denial reasons; does not cover pricing personalization. FTC surveillance pricing guidance (January 2025) documents the practice. As of March 2026, federal enforcement of both the CFPB adverse action guidance and FTC surveillance pricing guidance is non-operational at the agency level; neither agency is actively enforcing these standards. New York's Algorithmic Pricing Disclosure Act is the only currently operative statutory protection in the US.
- EU AI Act classifies credit scoring and life/health insurance pricing AI as high-risk; full compliance deadline August 2026 -- the most advanced enforceable global standard; does not apply domestically.
- Algorithmic Accountability Act (S.2892 / H.R.5628, introduced September 2023) remains in committee.

**What a minimum-floor contract or regulatory clause would require:**

1. **Disclosure at point of price presentation** -- required notice when a price is individually set using personal data. New York 2025 is the current model; the label does not require input disclosure.
2. **Prohibition on non-public competitor data as input** -- the core RealPage settlement requirement; prevents Rail A coordination through the algorithm.
3. **Audit log retention** -- pricing decision inputs, model version, output price, and a comparable non-personalized benchmark price. Minimum 6-month retention; accessible to regulators. EU AI Act model; not present in US.
4. **Consumer right to a non-personalized price comparison** -- proposed, not enacted anywhere as of March 2026.
5. **Prohibited inputs** -- protected class proxies including credit scores, ZIP codes, and behavioral signals correlated with race, income, or disability status. NAIC guidance framework; not binding outside New York.
6. **Kill switch authority** -- regulator right to suspend a pricing algorithm pending investigation. Not present in current US regulatory framework.

---

## 10. Safety and reliability overreach check

| Factor                               | Status                                                                                                                                                                                                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Deployed beyond validated conditions | Yes for RealPage. DOJ complaint describes operation in residential markets where landlord coordination is per se suspect under antitrust law. No validation that algorithmic recommendations comply with antitrust law was required before deployment. |
| Drift monitors                       | Unknown for most systems. RealPage settlement requires a compliance monitor -- a post-settlement instrument, not pre-deployment validation.                                                                                                            |
| Fallback mode                        | Not documented for any system reviewed. No requirement to maintain a non-algorithmic pricing fallback.                                                                                                                                                 |
| Kill switch                          | Exists post-settlement for RealPage (DOJ cooperative + three-year monitor). Not present for deployed pricing or steering systems generally in the US.                                                                                                  |

The safety gap here is upstream: these systems were deployed in legally and socially sensitive domains without pre-deployment validation that the mechanism they operate on is lawful. The RealPage case isn't a story of a validated system that drifted. It's a story of a system whose core operating mechanism -- pooling non-public competitor pricing data -- was never tested against antitrust law before deployment at scale.

---

## 11. Shared gains test

Applied to essential markets (rent, insurance, ride-hail, healthcare, gig labor).

| Question                                               | Evidence state                                                                                                                                                                                                                                                                                  | Notes                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Did prices fall, especially big costs?              | No for rent, insurance (directional), ride-hail. Unknown for credit.                                                                                                                                                                                                                            | Rent: algorithmic coordination added ~$70/month in affected units (directionally supported, PP-012). Ride-hail: passengers paid more after 2023 algorithm change PP-005. Insurance: premiums rose for lower-income and minority consumers directionally confirmed; margin capture not isolated to AI adoption specifically. |
| 2. Did access increase?                                | No for rent (coordination suppressed competitive supply-demand signaling). Unknown for insurance/credit.                                                                                                                                                                                        | Access in E4E terms: can a person get the thing at a price they can sustain.                                                                                                                                                                                                                                                |
| 3. Did service quality improve?                        | No for ride-hail (drivers' real earnings fell, confirmed PP-005). Plausible harm for healthcare (PA delays associated with longer hospital stays and care setting mismatches, directionally supported, PP-011). Unknown for rent and insurance.                                                 | For gig labor, driver income is a service quality dimension for workers.                                                                                                                                                                                                                                                    |
| 4. Can people contest decisions?                       | No meaningful contest mechanism in any system reviewed. No right to a non-personalized price. CFPB adverse action guidance requires specific denial reasons for credit; enforcement uncertain.                                                                                                  | The absence of an appeal mechanism for personalized pricing is itself a finding.                                                                                                                                                                                                                                            |
| 5. Did margins stay stable (not expand)?               | No for ride-hail (Uber commission rose from ~25% to ~29%, confirmed PP-005, UK data; US margin expansion not independently measured). Plausible harm for insurance (efficiency gains not passed to consumers; not quantified). Unknown for rent (settlement does not require margin reporting). | Margin expansion concurrent with price increases is the extraction signal.                                                                                                                                                                                                                                                  |
| 6. Were distributional impacts measured and disclosed? | No for any system reviewed. No mandatory distributional reporting exists in the US for algorithmic pricing as of March 2026.                                                                                                                                                                    | Massachusetts AG settlement and NY DFS Circular 2024-7 require pre-deployment audit and attestation -- not post-deployment public disclosure. This is the most systemic gap: shared gains cannot be verified even if they occurred.                                                                                         |

**Test result:** Fails for all essential markets reviewed. The failure isn't uniform. Ride-hail has direct confirmed bilateral extraction. Rent has confirmed mechanism with directionally supported magnitude. Insurance has confirmed proxy discrimination harm with unquantified margin capture attributable to algorithmic adoption specifically. Healthcare routing has a documented mechanism; AI-specific dollar harm is not separated from all prior auth activity. Do not overstate the healthcare finding.

---

## 12. What to do

### One personal action

If you're comparison-shopping rent, insurance, or a loan: ask, in writing, whether the price you received is individualized using personal data, and what data was used. In New York, businesses using algorithmic pricing must disclose it. In other states, there's no obligation to tell you -- but asking creates a record and may prompt disclosure. For healthcare prior authorization denials, always ask for the specific clinical criteria used and whether AI was involved; you have the right to appeal and overturn rates are significant when appeals are pursued.

### One procurement or policy lever

Public institutions that contract with insurers, landlords, or financial service providers (employer benefit plans, housing authorities, municipal pension funds) can require, as a contract condition, that any pricing or eligibility algorithm (a) not use protected class proxies as inputs; (b) retain pricing decision logs accessible to auditors; and (c) provide a non-personalized benchmark price on request. These are enforceable contract terms today, without waiting for federal legislation. Note that this lever is most effective for large public employers and anchor institutions with real vendor negotiating power; smaller housing authorities and municipal plans may lack the leverage to enforce these terms against dominant vendors. New York's disclosure law is the current legislative model for jurisdictions pursuing statutory requirements.

### Sequencing the response

This case needs visible near-term progress and a slower structural build. If you only do the fast track, sellers keep finding new ways to personalize extraction. If you only do the long build, households stay stuck inside prices they cannot inspect, compare, or contest.

#### Short term (0-12 months): make pricing more legible and less one-sided

Focus on actions institutions can require now:

- disclose when a price or offer is individualized
- require a non-personalized benchmark price on request
- retain pricing and steering logs for audit
- ban obvious proxy inputs in mandatory or captive markets
- require plain-language reason codes when pricing, routing, or eligibility differs materially

What counts as progress in this window:

- people can tell whether they are seeing a personalized offer
- auditors can compare individualized prices against a benchmark
- institutions lose the ability to say "the model set it" without a record

#### Medium term (1-3 years): turn disclosure into contestability

Use the first round of legibility rules to build a system people can actually challenge:

- standardize benchmark-price access and explanation rights
- make audit rights and retention requirements part of procurement and regulation
- publish distributional outcome data in essential markets where feasible
- align housing, insurance, lending, and healthcare routing oversight around anti-proxy and anti-captivity rules
- make exploitative personalization in low-exit markets easier to detect and punish

What counts as progress in this window:

- benchmark comparisons become normal instead of exceptional
- enforcement can distinguish efficiency claims from extraction claims
- regulators and buyers can spot whether personalization is widening or narrowing household burden

#### Long term (3-10 years): rebuild the market so personalization cannot default to extraction

The deeper problem is not personalization by itself. It is personalization inside markets where comparison shopping is weak, exit is costly, and the logic is hidden.

That longer build includes:

- binding statutory standards for transparency and prohibited proxy use in essential markets
- stronger competition policy where shared tools become cartel substitutes
- structural reductions in captivity so households can actually route around bad offers
- durable audit capacity that can inspect vendor models and market-wide outcomes
- shared-gains standards that require measurable consumer benefit rather than margin capture dressed up as optimization

What counts as success here:

- personalized systems are judged by whether they lower burden or widen access, not just by whether they raise revenue
- households can compare, contest, and exit often enough for market discipline to work
- efficiency gains are visible in lower costs or better access, not just in more precise extraction

---

## 13. What good looks like

The goal is not to ban all personalization. The goal is to make sure AI helps normal people find fairer terms instead of helping firms discover exactly how much more they can take.

In plain language, good looks like this:

- people can compare real prices, not fake choices
- switching is possible without losing the essentials tied to the service
- the factors shaping an offer are visible enough to challenge
- "discounts" are not just hidden penalties for the wrong ZIP code, device, or urgency signal
- when AI lowers cost, households see part of the benefit

A pricing algorithm in an essential market earns its place by showing that it improves access and reduces costs -- not by asserting that it does. The minimum conditions:

- **Disclosure:** consumers know when a price is individually set using their data.
- **No cartel substitution:** competitors don't share non-public pricing data through a common model. If "competition" is really one shared pricing brain, it's not competition -- it's coordination with extra steps.
- **Audit rights:** regulators can examine pricing inputs, model outputs, and benchmark comparisons; logs are retained.
- **Prohibited proxies:** protected class characteristics and their known statistical surrogates (ZIP codes, credit scores in non-actuarial applications) are not pricing inputs in mandatory markets.
- **Contestability:** consumers can request a non-personalized price and receive a plain-language explanation of why their price differs from it.
- **Distributional transparency:** aggregate outcome data -- premium and rate variation by income decile and race -- is published at regular intervals so third parties can verify that efficiency gains are shared, not captured.

What this looks like in practice today: there's no mechanism for a renter to ask "what would this unit cost if the landlord weren't using RealPage?" There's no mechanism for an insurance applicant to ask "what rate would I receive if my ZIP code wasn't in the model?" The benchmark doesn't exist. The audit doesn't happen. The lever proposed here would create both -- which is why it's absent from current standard contracts and why it has to be required, not requested.

The alternative isn't no pricing algorithms. It's pricing algorithms that operate in the open, whose inputs are defensible, and whose distributional effects are visible. Right now, for the essential markets in this case, none of those conditions are met.

---

## Research gaps

- **Net welfare direction for lower-income consumers.** Whether algorithmic pricing in specific captive markets has been better or worse for lower-income consumers than uniform pricing has not been empirically settled. The case that it's worse is the more plausible read of the evidence, but a disconfirming study is theoretically possible and hasn't been ruled out.
- **Proxy discrimination vs. actuarial factors.** Separating proxy discrimination from legitimate risk-based pricing in current algorithmic insurance models hasn't been done at national scale. This is the biggest methodological gap in the insurance pricing claim here.
- **The RealPage $70/month figure.** The primary academic paper behind this estimate was cited secondarily through the Washington Post (2025) and was not independently reviewed. The mechanism is confirmed by DOJ complaint; the dollar magnitude should be treated as directionally credible, not precisely calibrated.
- **Whether the RealPage settlement produces real rent reductions.** The settlement is compliance-focused, not outcome-focused. Whether it translates into lower rents is unknown.
- **Federal enforcement posture post-January 2025.** The enforcement architecture in this case depends heavily on CFPB and FTC willingness to act. That posture has shifted.
- **Huskey v. State Farm.** The disparate impact theory survived a motion to dismiss. Whether it survives on the merits is unknown.

---

_Case study drafted: 2026-03-07. Agent: economy-writer. Research file: `docs/07-notes/research/_research-ai-personalized-pricing-steering.md`._
_Cross-cutting module insert pass: 2026-03-08. Agent: economy-writer. Inserts added: Mechanism 7 (Bottlenecks/market power), Mechanism 8 (Control loops / routing as access control), Mechanism 3 (Gate shift / identity and segmentation). These now live under Section 4.D._

---

## Loop Effect

In E4E terms, this is how the monthly squeeze gets smarter: not just through higher prices, but through prices targeted to the places where people are least able to say no.

### Effect on the bad loop

- **Monthly squeeze:** Algorithmic rent coordination adds an estimated $70/month per affected unit (plausible -- not independently confirmed). Proxy discrimination in insurance and credit inflates premiums and limits access for lower-income and minority households. In captive markets, the efficiency gain is captured as margin, not passed as lower prices.
- **Insecurity:** When you can't see the price logic, can't tell if you're being treated fairly, and can't exit without loss, you can't plan. Invisible pricing in essential markets (housing, insurance, credit, healthcare) turns routine transactions into sources of instability.
- **Manipulation / scapegoats:** Opaque pricing makes the extraction mechanism invisible. Consumers assume they are priced on risk or market rate, not on inferred vulnerability. The mechanism that concentrates the gain is undetectable without legal discovery.
- **No fixes / more squeeze:** Accountability laundering (data broker -> model vendor -> institution) means no party owns the pricing harm. No US disclosure requirement exists for algorithmic pricing in most reviewed markets as of March 2026.

### Effect on the good loop

- **Security:** All-in price disclosure at point of decision, specific adverse action reasons, and non-discrimination audits with proxy tests would reduce the information asymmetry that makes extraction possible.
- **Choice:** Portability tools, comparison-shopping infrastructure, and switching cost reductions are proxies for exit in markets where full exit isn't realistic. No current mechanism gives consumers comparable pricing logic across providers.
- **Competition:** Independent model audits, anti-tying rules (distribution + monetization), bans on covert coordination tools in rental markets, and non-discrimination rules for mandatory markets would make rigging harder.
- **Shared gains:** No documented evidence in the reviewed captive markets shows algorithmic pricing lowering household costs, improving access, or making switching easier. The efficiency is real. The sharing is not. The gains are being captured as margin.

### Case verdict

- **Net effect right now:** Bad loop in captive essential markets. Neutral to positive in genuinely competitive markets where comparison shopping is easy -- the welfare-improving price discrimination case holds there.
- **Why:** Captivity is the load-bearing variable. In markets where two or more captivity conditions are simultaneously present (switching costs, network lock-in, coverage requirement, information asymmetry), the firm's optimization objective shifts from output maximization to reservation-price extraction. The algorithm is the mechanism; captivity is the condition that makes it extractive.
- **What would change the verdict:** Non-discrimination rules and model audits in mandatory markets, prohibition on covert coordination tools (RealPage-style), all-in pricing disclosure, specific reason codes for AI-driven adverse actions, and portability requirements for pricing history and model inputs.

### One steady action

- When shopping for insurance or credit, request in writing the specific factors used in your quote or decision. If you receive a generic category rather than a specific factor, that's the basis for a dispute or complaint to your state insurance commissioner or the CFPB.

---

## North Star Verdict

Personalized pricing is not the problem by itself. The problem is using hidden pricing and steering in markets where people cannot realistically leave. In that setting, AI does not improve choice. It helps firms turn household constraints into margin.

**Pass (good loop):**

- A reasonable person can see the benchmark price and the factors that changed it.
- Steering is disclosed, contestable, and does not penalize people who cannot realistically exit.
- Audit logs exist, independent audits are allowed, and adverse decisions are appealable with records.
- Measurable gains show up as lower prices, better service, or more access -- not just margin capture.

**Fail (bad loop):**

- Prices or offers are individualized but the reasons are uninspectable ("the model says so").
- "Discounts" function as discrimination by proxy (zip code, device, income signals, urgency signals).
- Switching is costly or time-bound (captivity), so people can't discipline the market by leaving.
- Appeals are a maze, and the system optimizes denial, delay, or churn.

**Simple test:** if this changes a life outcome (coverage, rent, access, financing), you should get **notice, reason, appeal, records, and a human override**. If you can't exit, the governance bar must be higher.

## Bridge language

How to talk about this when the audience isn't already convinced:

- "The issue isn't that prices are personalized. The issue is that in your insurance or your rent, you can't leave -- and that captivity turns personalization into extraction."
- "RealPage didn't tell landlords to collude. It just gave them a shared model that happened to recommend everyone raise rents at the same time. The outcome is the same."
- "Your ZIP code isn't a protected class. But if it's correlated with race, and the model uses it, the pricing outcome is indistinguishable from discrimination. That's why the audit has to look at outputs, not just inputs."
- "The CFPB already requires specific denial reasons for AI credit decisions. The same standard for insurance and housing would let people actually contest bad decisions instead of getting a checkbox."
- "Portability means your data moves when you do. Without it, switching providers means starting over -- which makes the first bad decision durable."
