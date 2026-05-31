---
title: 'AI and Claims & Eligibility Systems'
bucket: 'stress-test'
corePattern: 'When AI is optimized for cost reduction rather than access, it scales the gap between formal contestability and functional contestability, automating denial throughput faster than claimants can absorb it.'
studyDate: 2026-03-10
eventWindowStart: 2019-01-01
eventWindowEnd: 2026-03-10
status: 'published'
summary: "AI and automation can reduce administrative burden, but in claims and eligibility systems they often lower the institution's cost of denial without lowering the claimant's cost of contesting the decision. The result is a widening gap between nominal rights on paper and functional access in practice."
claim: 'In claims and eligibility systems, AI becomes harmful when it accelerates denial throughput faster than people can receive notice, understand the reason, and mount a real appeal.'
evidenceLevel: 'medium'
policyDomain:
  - 'healthcare'
  - 'benefits'
  - 'consumer-protection'
  - 'technology-governance'
tags:
  - 'ai'
  - 'claims'
  - 'eligibility'
  - 'appeals'
  - 'automation'
  - 'contestability'
receiptTags:
  - 'primary-documents'
  - 'official-data'
  - 'independent-analysis'
sources: []
---

## 1. One scene

A physician opens a queue. Fifty prior authorization denials. The screen shows a name, a procedure code, a recommended decision. There is no clinical record attached. The system is designed for batch throughput -- click, confirm, next. The physician completes the queue in under two minutes.

Down the road, a Medicaid enrollee gets a renewal notice at an old address. The letter sits unread. The automated redetermination marks the case as non-responsive. Coverage ends. She learns about it when she goes to fill a prescription.

One is documented by ProPublica from primary documents. The other illustrates a pattern confirmed at population scale -- 25 million disenrollments, 69% for procedural reasons, though automation's specific role varied by state and staffing capacity was the documented primary driver. Neither required malice. Both required the wrong optimization target.

This is what the minimum floor is for: notice (she knew the denial was coming), reason (specific enough to contest), appeal (a real path with a deadline and a human reviewer), records (the model output that drove the decision), and a human override (someone with authority, time, and the clinical file). In this domain, each element exists somewhere in law or regulation. None exist together, consistently, for the same person.

---

### Key numbers

- **1.2 seconds per case** -- average physician review time in Cigna's PxDx batch denial system [confirmed -- ProPublica, CE-001]
- **11.5% of denials appealed; 80.7% of those overturned** -- Medicare Advantage prior authorization [confirmed -- KFF 2025, CE-003]
- **57% of all MA claims denials ultimately reversed** -- including those appealed and reconsidered [confirmed -- Health Affairs 2025, CE-004]
- **69% of Medicaid disenrollments during unwinding were procedural** -- meaning eligibility was never assessed [confirmed -- KFF Unwinding Tracker, CE-005]
- **88.5% of people whose denials could have been appealed did not appeal** -- the gap between what the rules allow and what people do [confirmed -- KFF 2025, CE-003]

These five numbers are the case study in miniature. The algorithm is fast. The denial rate is high. The overturn rate is high. The appeal rate is low. The procedural harm is large. The last line is the governance problem: a floor that exists on paper but not in practice.

---

## 2. What's happening

AI and automation are being deployed at scale across insurance claims, government benefits, and consumer credit decisions. In most of the documented cases, the systems reduce the institution's cost of processing and denying while leaving the claimant's cost of contesting unchanged or higher.

This isn't the only possible outcome. When the same tools are optimized for coverage retention rather than cost reduction, they help claimants. The optimization target -- not the technology -- determines direction.

---

### 2a. If the thesis is true, we should observe...

Five testable predictions. For each: what confirms it, what falsifies it, current evidence state.

**Prediction 1: Denial-by-friction signature**
Low appeal rates coexist with high overturn rates where appeals do occur. That gap represents denials that were wrong but never corrected.

- _Confirmed by:_ Low appeal rate + high overturn rate across multiple programs and payers.
- _Falsified by:_ Evidence that non-appealing claimants found equivalent care, or that low appeal rates reflect accurate initial decisions.
- _Current state:_ Confirmed. MA prior auth: 11.5% appeal rate, 80.7% overturn (KFF 2025). HHS OIG 2022: 9.9% appeal rate; earlier OIG period found 75% of MA prior auth appeals overturned. This is the strongest empirical pattern in the research. [confirmed -- multiple independent sources]

**Prediction 2: Rubber-stamp conditions**
Where human review is required by law, the reviewer spends insufficient time per case, lacks model inputs, has throughput incentives, and exhibits automation bias.

- _Confirmed by:_ Time-per-case below any plausible threshold for substantive review; documented throughput incentives; empirical evidence of automation bias.
- _Falsified by:_ Override rates showing reviewers reverse AI recommendations at meaningful rates; training programs that demonstrably reduce automation bias.
- _Current state:_ Confirmed for time-per-case (Cigna PxDx: 1.2 sec/claim). Confirmed for throughput incentives (Cigna scorecards; CVS projection revision). Confirmed for automation bias (Stanford/Health Affairs 2025). Override rates: [unknown -- proprietary everywhere].

**Prediction 3: Asymmetric information**
Institutions keep decision logs. Claimants get generic notices that do not enable contest. The informational gap grows as AI adoption accelerates.

- _Confirmed by:_ Generic notice practices documented; no claimant-accessible model output records; regulatory attempts to require disclosure being suspended or unenforced.
- _Falsified by:_ Evidence that claimants routinely receive model-specific denial reasons; accessible audit logs; enforcement of explainability requirements at scale.
- _Current state:_ Confirmed. CFPB circulars exist because generic notices were the documented practice (2022, 2023). CMS suspended health equity analysis requirements that would have created partial transparency (2025). Arkansas Ledgerwood: algorithm logic not disclosed to beneficiaries (court record). [confirmed -- multiple sources]

**Prediction 4: Automation scale effect**
AI adoption correlates with higher adverse-decision volume per unit of institutional labor, lower marginal cost per denial, and no corresponding reduction in claimant-side burden.

- _Confirmed by:_ Increased denial volume following AI adoption; rising auto-adjudication rates; claimant-side burden flat or increasing.
- _Falsified by:_ Evidence that AI adoption reduced both institutional and claimant-side burden; denial rates stable or declining post-adoption.
- _Current state:_ Partially confirmed. Auto-adjudication benchmark: 80-85% of claims processed without human touch (industry standard); costs cents vs. ~$20 for human-reviewed. nH Predict adoption correlated with ninefold SNF denial rate increase at UnitedHealthcare (CE-002) [note: the correlation is confirmed; nH Predict as the primary cause of the volume increase is plausible, not established -- the Senate PSI majority report supports the inference, but UnitedHealth disputes the characterization and the causal mechanism has not been independently adjudicated]. AMA 2024: 39 PA requests/physician/week; 12 hours staff time consumed weekly. [plausible -- confirmed for institutional side; claimant direct-burden data weaker]

**Prediction 5: Optimization target determines direction**
The harm is not from AI per se but from what it is optimized to do. Automation optimized for access helps claimants; optimized for cost reduction, it harms them.

- _Confirmed by:_ Cases where automation optimized for access improved outcomes; cases where cost optimization led to higher denials.
- _Falsified by:_ Evidence that all automation produces similar patterns regardless of optimization goal.
- _Current state:_ Confirmed by comparison. Ex parte Medicaid renewal (optimized for coverage retention) produced lower procedural disenrollment. nH Predict / PxDx / CVS Post-Acute Analytics (optimized for cost reduction) produced higher denial rates. [confirmed -- the counterexample is real and must not be erased]

---

## 3. The optimization target problem

AI is an amplifier. It makes whatever an institution is optimizing for happen faster and at lower per-unit cost. It doesn't set the direction. The direction is set by what the institution is trying to maximize.

**When optimized for coverage retention:**
In the 2023-2024 Medicaid unwinding, 61% of renewals were processed through automated ex parte renewals -- systems that checked eligibility against existing databases without requiring the enrollee to take any action. ASPE estimates the ex parte accuracy rate at 92.1% among eligible beneficiaries (estimated erroneous retention rate: 1.2%). [plausible -- ASPE administrative data; methodology not independently peer-reviewed] States with higher ex parte usage rates had lower procedural disenrollment rates. [confirmed -- KFF Unwinding Tracker, CE-013; plausible that the causal link is ex parte rate specifically, not just state capacity differences]

This is the counterexample that the rest of the document must not erase. Automation optimized for access works differently than automation optimized for cost.

**What the helpful version looks like:** AI that routes clear, documentation-complete cases to fast approval, flags cases needing escalation (not just denial), and reduces admin burden for providers and claimants alike. Medicaid ex parte renewals are the documented example: automated cross-agency data checks reduced procedural disenrollments without reducing access. [already cited]

**Why it usually doesn't happen:** The optimization target is cost reduction, not access. When AI is deployed inside a system where denials generate savings and approvals generate costs, the model learns the incentive -- not the claimant's need. There is no market signal that corrects for this in captive insurance contexts.

**What makes the helpful version more likely:** Procurement and regulatory requirements that measure outcome metrics -- approval accuracy rates, appeal overturn rates, claimant-side processing time -- not just unit cost. When auditors can see the denominator (denials that should have been approvals), the optimization target changes.

**When optimized for cost reduction / denial throughput:**

- Cigna's PxDx algorithm: physicians averaged 1.2 seconds per case in batch denial review, approving groups of 50 denials at a time without reviewing individual clinical records. Internal scorecards tracked monthly batch throughput. [confirmed -- ProPublica, March 2023, CE-001]
- UnitedHealthcare's nH Predict (NaviHealth): skilled nursing facility denial rates at UnitedHealthcare rose from 1.4% in 2019 to 12.6% in 2022 -- the first full year after NaviHealth acquisition. CVS Post-Acute Analytics initially projected $10-15 million in savings; revised that projection to $77.3 million within months of rollout. [confirmed correlation; plausible that algorithm adoption was the primary driver -- Senate PSI majority staff report, October 2024, CE-002]

The load-bearing variable: the same class of technology, pointed in opposite directions, produces opposite outcomes. Saying "AI is causing harm" or "AI is helping" is both correct and misleading unless you specify the optimization target.

---

## 4. Why it's happening -- mechanisms and mechanism modules

This section is the reusable map. Each **Mechanism** shows up across insurance, government benefits, and consumer finance. Each **Module** is a drop-in insert you can reuse in other case studies.

### Mechanism 1: Contestability collapse

When decisions become **too fast / cheap / opaque to overrule**, â€œhuman reviewâ€ becomes a rubber stamp. Contestability still exists on paper, but not in practice.

- **Module 1.1: Human Command (minimum floor)**
  If AI affects a life outcome, you get: **notice, reason, appeal, records, and a human override**.
- **Module 1.2: Rubber-stamp proxies (how to measure it)**
  How to detect â€œhuman review theaterâ€ when override rates are proprietary.

**In this case study (whatâ€™s confirmed):**

- **Cigna PxDx:** physicians averaged **~1.2 seconds per claim** in batch denial review and did not have individual clinical records in front of them. Throughput was tracked on scorecards.
- Across domains, **override rates** (how often humans actually reverse the AI recommendation) are generally **not public**. Thatâ€™s why the proxies matter.

**What to look for (proxies):**

- time-per-determination
- batch review workflows (approve 50 at a time)
- throughput KPIs and scorecards
- lack of model-input visibility for reviewers
- absence of independent audit sampling

**G1. Dependency risk.** When an insurer, agency, or lender routes all determinations through a single UM vendor or AI model, a policy update, model drift, or outage becomes a system-wide shock -- and the system typically fails closed: denials continue while the escalation path goes dark. The dependency also concentrates bargaining power: a vendor that is operationally indispensable sets contract terms the buyer cannot refuse. [ANCHOR NEEDED: documented vendor outage or model-change event producing claim-processing disruption at scale.] This is the same single-vendor dependency pattern documented in surveillance infrastructure, where Palantir and Flock lock-in converts tooling choice into governance.

**G4. Auto-adverse action.** When AI moves from recommending denials to executing them -- auto-adjudication is already estimated at 80-85% of volume in health insurance [industry benchmark, plausible] -- the error cost shifts entirely to the claimant before any adjudication. The 88.5% of Medicare Advantage prior auth denials that are never appealed may include a significant share where an automated denial was simply absorbed. The minimum floor: no auto-adverse action on a life-outcome decision without documented corroboration, a human override path, and notice of the basis for the action. This is the same "action without adjudication" pattern documented in surveillance deployments, at healthcare stakes.

---

### Mechanism 2: Exit / captivity

If you canâ€™t realistically exit a system, governance has to do the work markets canâ€™t.

- **Module 2.1: Exit test**
  â€œCan a person leave this system fast enough to matter?â€
- **Module 2.2: Switching cost checklist**
  The practical friction: timing windows, portability, documentation burdens, and lock-in.

**In this case study:**

- **Government benefits**: no exit.
- **Medicare Advantage / employer insurance**: exit is time-boxed (open enrollment / limited special enrollment).
- **Consumer credit**: exit is possible, but denial history and bureau data can follow you.

---

### Mechanism 3: Gate shift (trust + distribution)

AI moves power to whoever controls **trust gates**: what counts as valid content, valid identity, valid documentation, and valid submission channels.

- **Module 3.1: Provenance (content)**
  What counts as â€œrealâ€ documentation, and who can produce it.
- **Module 3.2: Personhood and credentials (people)**
  Identity checks, credentialing, and â€œfraudâ€ posture as a choke point.

**In this case study:**

- Portal-only / format-specific submission rules can become silent denial tools (â€œyour appeal didnâ€™t countâ€).
- â€œFraudâ€ or â€œriskâ€ flags can trigger closures or denials that are difficult to contest without the decision record.
- **Anchor needed (if you want this mechanism to carry more weight here):** one or two specific, well-sourced examples where identity/provenance requirements functionally blocked appeals or renewals.

---

### Mechanism 4: Asymmetric logs

Institutions keep the logs. People get a denial letter.

- **Module 4.1: Audit/log checklist**
  What must be logged (inputs, outputs, overrides, confidence, timing) and retained.
- **Module 4.2: Records access and retention**
  What the affected person (and regulators) can obtain, and when.

**In this case study (confirmed pattern):**

- Generic denial notices often donâ€™t reflect the actual model-driven reasons (this is why **CFPB adverse action** guidance exists in credit).
- In benefits contexts (e.g., Arkansas Ledgerwood), beneficiaries lacked access to algorithm logic without litigation.
- Many oversight and transparency requirements remain fragmented, suspended, unevenly enforced, or prospective.

---

### Mechanism 5: Scale without adjudication

AI scales adverse decisions faster than human adjudication capacity (appeals, hearings, corrections) can keep up. The systemâ€™s â€œerror correctionâ€ becomes attrition.

- **Module 5.1: Enforcement-without-adjudication metrics**
  The quick read: volume of adverse decisions, appeal rate, overturn rate, time-to-resolution.
- **Module 5.2: Corroboration rule**
  A single automated signal should not be enough for a high-stakes adverse action without independent corroboration.

**In this case study (strongest confirmed signature):**

- **Low appeal rates + high overturn rates** (where appeals occur) indicate denials that were wrong but never corrected.
- Medicare Advantage prior authorization: **~11.5% appealed; ~80.7% overturned** (KFF).
- Medicaid unwinding: **large procedural disenrollment** (paperwork/renewal friction) shows the same â€œscale beats adjudicationâ€ structure, even when AI isnâ€™t the primary driver.

**G2. Accountability laundering.** When a denial crosses vendor/insurer/agency lines -- â€œthe model flagged it,â€ â€œUM vendor policy,â€ â€œalgorithm-based determinationâ€ -- no single party owns the harm. The insurer cites the vendor; the vendor cites the model; the model is proprietary. Each handoff increases the claimantâ€™s burden to understand, much less contest, the decision. The fix requires assigned decision ownership: one named accountable party at the institution that acted on the output, traceability (reason code, model version, data inputs), and an appeal path that does not require the claimant to first reconstruct the vendor architecture. This is the same diffusion pattern documented in surveillance coercion, where no party owns a wrongful enforcement action triggered by an algorithmic flag.

---

### Mechanism 6: Skill atrophy

When â€œlearning workâ€ disappears, oversight becomes fake â€” and power moves upward because fewer people can challenge decisions.

- **Module 6.1: Manual flight checks**
  Protected, periodic human-led reviews to preserve independent judgment.
- **Module 6.2: Learning-work quotas**
  Contract and governance requirements that keep genuine review capacity alive.

**In this case study:**

- Automation bias and tool overconfidence among reviewers is an early warning sign.
- Throughput-as-KPI turns review into validation, and validation into atrophy.

---

### Mechanism 7: Bottlenecks / market power

When bottlenecks are concentrated, efficiency gains donâ€™t become shared gains â€” they become bargaining power.

- **Module 7.1: â€œWhere does power sit?â€ map**
  Map the stack: payer, UM vendor, PBM, agency, portal, data broker.
- **Module 7.2: Shared gains test**
  Did benefits flow to the public (prices down, burden down, access up) â€” or get captured?

**In this case study:**

- Utilization management layers (insurer + UM vendor + PBM) create multiple chokepoints.
- Documented â€œsavingsâ€ can exist without any evidence that claimantsâ€™ burden fell.

---

### Mechanism 8: Control loops

When delay is the decision, â€œprocessâ€ becomes a control system that shapes life outcomes â€” especially in healthcare.

- **Module 8.1: Safe-fail + kill switch**
  What happens when the model is uncertain or anomalous? Can the system degrade to human command?
- **Module 8.2: Incident review and rate limits**
  Post-hoc review of harms; rate limits that prevent runaway denial throughput.

**In this case study:**

- In post-acute care and prior authorization, the control action is the authorization decision itself.
- A high-stakes denial triggered by a single model output is a â€œsingle-sensorâ€ failure pattern in governance terms, even when the technology differs.

---

## 5. Three-domain comparison

### Domain A: Insurance (health prior auth, disability claims, post-acute care)

|                                  |                                                                                                                                                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Best confirmed evidence**      | Cigna PxDx batch denials (ProPublica, primary documents); Senate PSI on UnitedHealthcare/CVS/Humana (October 2024, subpoena documents); KFF and Health Affairs data on MA denial and appeal rates (CE-003, CE-004) |
| **Biggest evidence gap**         | Override rates. How often do human reviewers actually reverse AI recommendations? This is proprietary. The rubber-stamp mechanism is supported by behavioral evidence; we do not have a direct rate.               |
| **Most generalizable mechanism** | Denial-by-friction: high appeal success rate + low appeal rate = systemic under-contestation. Holds across multiple insurers and is confirmed by independent sources.                                              |
| **Evidence strength**            | Strongest of the three domains. Multiple primary sources, peer-reviewed data, court record, congressional investigation.                                                                                           |

---

### Domain B: Government benefits (Medicaid, SNAP, SSI/SSDI)

|                                  |                                                                                                                                                                                                                                                                                                      |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Best confirmed evidence**      | Medicaid unwinding: 25 million disenrolled, 69% procedural (KFF); Arkansas Ledgerwood: court-confirmed due process violation from algorithmic benefits cut; ex parte renewal: automation optimized for retention works (CE-013)                                                                      |
| **Biggest evidence gap**         | AI-specific screening in SSDI/SSI is weakly documented. The procedural burden structure is confirmed; the AI amplification of that structure in federal disability programs is not supported by strong primary sources. Do not assert SSA uses AI to deny claims at scale without a specific source. |
| **Most generalizable mechanism** | Procedural burden + asymmetric logs. The state holds the algorithm; the beneficiary holds the burden of proof. This predates AI but AI scales it.                                                                                                                                                    |
| **Evidence strength**            | Strong for procedural-burden pattern; weak for AI-specific causation in federal disability programs.                                                                                                                                                                                                 |

---

### Domain C: Consumer finance (credit decisions, lending, debt collection)

|                                  |                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Best confirmed evidence**      | CFPB regulatory framework: adverse action notice requirements apply to AI (confirmed legal obligation, CE-009); proxy discrimination mechanism: confirmed as technical and legal concern, with enforcement activity (CE-010); DOJ Combatting Redlining Initiative referrals hit record 33 in 2023; Chime CFPB enforcement: $3.25M fine for 90+ day delays returning funds after algorithmic account closures (CE-019) |
| **Biggest evidence gap**         | Scale of harm. The mechanism is well-documented. Systematic quantified data on AI-driven discriminatory credit denials at scale is not yet available in peer-reviewed sources. Enforcement cases lag adoption by years.                                                                                                                                                                                               |
| **Most generalizable mechanism** | Asymmetric logs + proxy discrimination. The most technically embedded of the mechanisms -- contesting requires model access the claimant does not have.                                                                                                                                                                                                                                                               |
| **Evidence strength**            | Mechanistically solid; thinner on quantified scale of harm than the insurance domain. The Chime enforcement action is the strongest confirmed consumer finance case for automation-driven harm in this research -- but it is an account-closure case, not a credit underwriting case. Do not assert consumer finance AI harm at the same quantitative confidence level as insurance.                                  |

---

### 5a. Cross-domain mechanism map

How each mechanism appears across domains. Navigation tool -- not narrative. Each cell is labeled [confirmed], [plausible], or [gap].

| Mechanism                              | Insurance (prior auth / claims)                                                                                                                                                                                                                                                    | Government benefits (Medicaid / UI / disability)                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Consumer finance (fraud flags / underwriting)                                                                                                                                                                                                    | What the person experiences                                                                                                  | What a regulator/auditor needs to inspect                                                                                                         |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Rubber-stamp review**                | **[confirmed]** Cigna PxDx: 1.2 sec/claim; physicians sign batch denials without clinical records. STAT/Senate: UnitedHealth staff expected to align with nH Predict. Stanford: reviewers exhibit automation bias.                                                                 | **[confirmed]** Arkansas: algorithm eliminated nursing discretion. Michigan MiDAS: fraud flags issued with no documented individual human review before issuance.                                                                                                                                                                                                                                                                                                                                                       | **[plausible]** Chime account closures: no evidence of individual human review before closure. Credit auto-decisioning is standard practice. Override rate: unknown.                                                                             | Denial arrives. The reason is generic. No way to know whether a person actually reviewed the file.                           | Override rate; time-per-determination; reviewer training records; throughput KPIs.                                                                |
| **Denial-by-friction**                 | **[confirmed]** MA: 11.5% appeal rate, 80.7% overturn (KFF 2025). HHS OIG 2022: 9.9% appeal rate; 75% overturn rate in prior period. Health Affairs: 57% of MA denials reversed but 7% revenue reduction persists. AMA: 80% of patients abandoned treatment.                       | **[confirmed]** Medicaid: 69% procedurally disenrolled. SSDI: 62% initial denial; ALJ hearings 1-2+ years; most people give up before reaching ALJ. Michigan MiDAS: $20M settlement after 7 years.                                                                                                                                                                                                                                                                                                                      | **[plausible]** Chime: 90+ day refund delays after account closure. Credit denials: adverse action notice is generic; no documented mechanism for challenging model-specific inputs.                                                             | You were told no. The path to reversal is real but costs more than most people have -- in time, money, health, or knowledge. | Appeal rate vs. overturn rate by program; time from denial to resolution.                                                                         |
| **Procedural burden**                  | **[confirmed]** AMA 2024: 39 PA requests/physician/week; 12 hrs staff time; $68K/physician/year on plan interactions. 94% of physicians report PA still delays necessary care.                                                                                                     | **[confirmed]** Medicaid: 69% procedural disenrollment. SSDI: multi-stage years-long process. Arkansas: algorithm cut hours with no explanation; claimants lacked information to challenge. Michigan: 10-day contestation window after fraud flag.                                                                                                                                                                                                                                                                      | **[plausible]** Adverse action notices are generic (CFPB circulars document this). No claimant-accessible model records. Financial consequences of denial compound quickly.                                                                      | You have to do more paperwork than they do. Miss one window and you lose.                                                    | Claimant time-to-resolution; documentation requirements; navigator program availability; language access.                                         |
| **Asymmetric logs**                    | **[confirmed]** No MA claimant has documented access to model output-to-decision records. CMS suspended health equity analysis that would have created partial population-level audit capability (CE-012). CFPB circulars: generic denial notices documented as standard practice. | **[confirmed]** Arkansas: algorithm design not disclosed to beneficiaries. Michigan MiDAS: fraud-determination logic was proprietary. Medicaid ex parte configuration error was identified by CMS audit, not by claimants.                                                                                                                                                                                                                                                                                              | **[confirmed]** CFPB circulars: generic adverse action notices are standard in AI credit denials. No US law requires disclosure of model weights or training data. EU AI Act requires audit logs (compliance 2026); no US equivalent.            | You got a letter. It does not tell you which data point was wrong, which variable mattered, or how to fix it.                | Audit trail from model input to decision output; whether accessible outside litigation; whether denial notices are model-specific or generic.     |
| **Optimization hidden behind process** | **[confirmed]** CVS Post-Acute Analytics: savings projected $10-15M, revised to $77.3M (Senate majority report). nH Predict: ninefold SNF denial rate increase. Cigna scorecards: throughput is the metric, not accuracy.                                                          | **[confirmed -- Michigan MiDAS]** Michigan MiDAS: stated goal was fraud reduction; 93% false positive rate; savings from incorrect collections were the immediate incentive. **[plausible -- Medicaid unwinding]** Medicaid procedural disenrollment: staffing and capacity failure was the documented primary driver; a structural incentive to auto-disenroll existed, but intent to optimize for disenrollment cannot be confirmed from available evidence. Do not treat as a confirmed case of covert optimization. | **[plausible]** Chime: fraud closure rate reduced 50%+ after CFPB complaints peaked -- consistent with initial algorithm over-calibrated for closures. Credit scoring: discriminatory outcomes can be a product of using correlation as a proxy. | You don't know what they were optimizing for. You only see the outcome.                                                      | Internal model objective function; performance KPIs used by implementation teams; whether accuracy or throughput appears in governance documents. |

---

## 6. Control stack: Is there a human in command?

Three levels of human involvement, and they are not equal:

- **Human-in-the-loop:** A person sees the output and can reject it. Procedural presence, not substantive authority.
- **Human-on-the-loop:** A person monitors the process and can intervene if something is flagged. Oversight is reactive, not proactive.
- **Human-in-command:** A person has the authority, time, information, and audit records needed to act. Substantive accountability.

The rubber-stamp detector: if humans lack any of those four elements -- authority, time, information, or logs -- then "human review" is theater. The signature provides legal cover without functional accountability.

**Applied:**

| System                               | Level                     | Assessment                                                                                                                                                                                                                                                        |
| ------------------------------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cigna PxDx batch review              | Human-in-the-loop         | [confirmed theater] Physicians approved 50 denials per batch without clinical records. 1.2 seconds per case. Scorecards rewarded throughput. Authority nominally present; time and information structurally absent.                                               |
| UnitedHealth nH Predict / post-acute | Human-in-the-loop         | [confirmed pattern; plausible that override was rare] Staff accounts describe pressure to align with algorithm outputs. Algorithm set length-of-stay targets; staff expected to follow.                                                                           |
| Medicaid automated redeterminations  | Human-on-the-loop at best | [plausible] State eligibility workers oversee renewal queues; case volumes during unwinding exceeded capacity to review individual cases. Outcome data (69% procedural disenrollment) is consistent with inadequate human review.                                 |
| AI-assisted credit decisions         | Human-in-the-loop         | [confirmed -- legal obligation exists; enforcement gap confirmed] CFPB adverse action notice requirements are legally binding but compliance was demonstrably deficient (CE-009). Adverse action notices using generic checklists do not satisfy the requirement. |

The Green (2022) finding applies across all four: human oversight policies are systematically flawed because people cannot perform the function the policy assigns them (CE-007). The presence of a human in the process is not evidence that human command is functioning.

---

### 6b. Measuring what we can't directly observe

Direct observation of rubber-stamping is unavailable in all three domains. Eight proxies are the best available. For each: current evidence state, confidence label, data source.

| Proxy                           | What it measures                                                                                                            | Current evidence                                                                                                                                                                                                                                                                                                       | Confidence                                                                                             | Best data source                                                                      |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| **Override rate**               | How often human reviewers reverse AI-generated recommendations before a final decision                                      | No public data in any domain. Stanford/Health Affairs study implies low rate but does not quantify.                                                                                                                                                                                                                    | [unknown -- proprietary everywhere]                                                                    | Not currently available. Would require legislative or regulatory disclosure mandate.  |
| **Auto-adjudication rate**      | Share of claims processed with no human involvement                                                                         | Industry benchmark: 80-85% target; vendor case studies: up to 94%. CMS MA data does not disaggregate auto-adjudicated from human-reviewed.                                                                                                                                                                             | [plausible as benchmark; unknown for firm-level rates]                                                 | OpsDog industry benchmarks; CMS administrative data (does not currently disaggregate) |
| **Time-per-determination**      | Average time a human reviewer spends per case before signing off                                                            | Cigna PxDx: 1.2 seconds per claim (ProPublica primary documents, CE-001). No equivalent documented figure for other insurers, government programs, or consumer finance.                                                                                                                                                | [confirmed -- Cigna only; unknown elsewhere]                                                           | ProPublica / primary documents (CE-001)                                               |
| **Appeal rate + overturn rate** | Share of denials contested; of those, share reversed. Gap between the two is the operational measure of denial-by-friction. | MA prior auth: 11.5% appeal / 80.7% overturn (KFF 2025, CE-003). HHS OIG 2022: 9.9% appeal rate, 75% overturn in prior period (CE-018). MA claims: 57% of all denials ultimately reversed (Health Affairs 2025, CE-004). Michigan MiDAS: no appeal rate available; seven-year litigation timeline documents attrition. | [confirmed -- MA; plausible -- SSDI; unknown -- consumer finance]                                      | KFF (MA); HHS OIG audit; Health Affairs                                               |
| **Reason-code specificity**     | Whether denial notices provide enough information to contest effectively                                                    | CFPB Circular 2022-03 and 2023-03 issued because lenders used generic checklists not reflecting actual AI denial reasons. CMS MA notices require specific criteria citation but compliance is not systematically tracked.                                                                                              | [confirmed that non-specific notices were common; unknown -- compliance rate post-circulars]           | CFPB circulars (CE-009); CMS MA notice requirements (CE-012)                          |
| **Log availability**            | Whether model-output-to-decision records are maintained and accessible to claimants                                         | EU AI Act requires audit logs (compliance 2026 -- prospective). No US federal equivalent. Arkansas Ledgerwood: algorithm logic not disclosed without court order. No confirmed case of voluntary claimant-accessible model logs in US practice.                                                                        | [confirmed that logs are not routinely accessible to claimants; unknown what is maintained internally] | EU AI Act (CE-011); Arkansas case record (CE-006); CFPB circulars (CE-009)            |
| **Staffing ratios**             | Reviewers per decisions; ratios that make per-case review infeasible are circumstantial evidence of rubber-stamping         | Cigna: one physician denied 121,000 claims in two months (CE-001). No systematic staffing ratio data across insurers or agencies.                                                                                                                                                                                      | [confirmed -- Cigna only; unknown elsewhere]                                                           | ProPublica primary documents (CE-001)                                                 |
| **Institutional incentives**    | Whether performance metrics reward throughput/speed or accuracy and appeal-reversal prevention                              | Cigna: scorecards tracked PxDx batch denial throughput per physician per month (CE-001, confirmed). CVS: savings projections revised from $10-15M to $77.3M (CE-002, plausible). UnitedHealth: staff described pressure to align with algorithm outputs (CE-002, plausible).                                           | [confirmed -- Cigna scorecards; plausible -- CVS, UnitedHealth]                                        | ProPublica primary documents (CE-001); Senate PSI majority report (CE-002)            |

---

## 7. Shared Gains Test

Six questions. What does the evidence show?

**Q1: Did prices fall (premiums, interest rates, admin costs passed to consumers)?**
No evidence that AI-driven efficiency gains were passed to consumers as lower premiums. CVS's revised $77.3M savings projection and Cigna's batch denial system document insurer-side gains retained internally. [unknown -- absence of evidence is not a confirmed answer; premium trend data was not specifically analyzed]

**Q2: Did processing speed improve for claimants (not just institutions)?**
Several major insurers reduced PA requirements in 2023-2024. Electronic prior authorization processing times have reportedly declined, but the specific figures in the research file (CE-015) cover auto-adjudication rate benchmarks, not confirmed processing time reduction data. Whether institutional speed gains translated to faster care access for patients is not established. [plausible that institutional processing speed improved; unknown whether the benefit reached patients; specific processing time claim removed -- source mismatch identified]

**Q3: Did admin drag fall on the claimant side?**
No evidence of reduction. Medicaid unwinding procedural disenrollments and SSDI multi-stage appeals (CE-014) suggest claimant-side burden remained or increased. AMA 2024: physicians spend approximately $68,000 per physician per year on plan interactions, including prior authorization -- a provider-side proxy for claimant-side burden. [confirmed -- AMA 2024 survey, CE-017; Tier 2 -- physician self-reported] The Stanford study found AI in insurance utilization review did not come with claimant-side navigation tools. [plausible that burden did not fall; not quantified]

**Q4: Did access improve?**
For Medicaid: access declined for eligible enrollees during unwinding (CE-005). For Medicare Advantage prior authorization: denial rates increased as AI was adopted (CE-002). For credit: proxy discrimination literature suggests access declined for protected classes (CE-010). Exception: ex parte renewal automation improved Medicaid retention where deployed (CE-013). [Medicaid procedural disenrollment access decline -- confirmed; AI as cause of Medicare Advantage denial rate increase -- plausible (confirmed correlation; cause not established); ex parte is a genuine counterexample, not a norm]

**Q5: Can people contest decisions?**
Formal appeal paths exist in all three domains. Medicare Advantage PA appeals: 30 days standard, 72 hours expedited. SSDI appeals: often one to two years. Medicaid: large state variation. Human override is formally required in all three; functionally impaired by automation bias (CE-008) and rubber-stamp dynamics (CE-001). [confirmed paths exist; confirmed paths are systematically underused relative to overturn rate; plausible that human override is functionally impaired]

**Q6: Can people exit / switch?**
Medicare Advantage: annual enrollment period; mid-year switching is restricted. Employer-sponsored insurance: open enrollment or qualifying life events only. Government benefits (Medicaid, SSDI): single-payer with no alternative. Consumer credit: switching lenders is possible but denial history may follow applicants. [confirmed that exit is structurally limited in government benefits; plausible that MA mid-year portability is insufficient to function as a market check]

**Summary:** The Shared Gains Test fails across most dimensions. Processing speed may have improved for institutions. No confirmed evidence the gains were shared with claimants. Access declined where AI was optimized for cost reduction. Contest rights exist formally and are undermined functionally.

---

## 8. Appeal effectiveness -- the reversal rate problem

This is one of the strongest confirmed findings in the research.

In Medicare Advantage (2024): 53 million prior authorization requests; 4.1 million denied; 11.5% of denials appealed; 80.7% of those appeals fully or partially overturned. [confirmed -- KFF 2025, CE-003]

An independent government audit -- not a majority staff report, not advocacy -- reinforces this. The HHS OIG 2022 report (OEI-09-18-00260) found that 13% of MA prior authorization denials in its sample met Medicare coverage rules and should have been approved. An earlier OIG finding: 75% of MA prior auth denials that were appealed between 2014-2016 were overturned. The OIG also found a 9.9% appeal rate in 2022. [confirmed -- independent government audit, CE-018; sample from 15 largest MA organizations; does not separate AI-assisted from manual denials]

What this means: when someone appeals a denial, they win most of the time. But 88.5% of people do not appeal.

The rational choice to not appeal is not passivity -- it is a response to real costs. A standard Medicare Advantage appeal requires: written request within 60 days, coordination with the treating physician for supporting documentation, submission through a plan-specific portal that varies by insurer, and a wait of up to 30 days for a standard determination or 72 hours for expedited. If the denial is upheld, the next step is an Independent Review Organization review, then an ALJ hearing, then a Medicare Appeals Council review, then federal district court -- each level adding weeks and specialized knowledge most patients do not have. The appeal path exists. It was designed for the patient who has a healthcare administrator, a doctor willing to write repeated letters, and months of time. Most patients have none of those things.

The Health Affairs (June 2025) study reinforces this from the claims side: 57% of all initial MA claim denials were ultimately reversed. But a net 7% provider revenue reduction persisted -- from the denials that were never reversed, plus the friction cost of processing reversals (CE-004).

**The reversal rate is not a reassuring number. It is an indictment of the initial decision quality.**

If 80% of appealed denials are overturned, two things are true simultaneously:

1. The initial denial was wrong at a high rate.
2. Most people absorb a wrong denial rather than navigate the appeal process.

The institution benefits from both. It issues low-quality initial decisions cheaply. Most claimants do not contest. Those who do are mostly right -- but the cost of contestation falls on them, not the institution.

**Arkansas Ledgerwood confirms this at the government benefits level.** The RUGs algorithm cut attendant-care hours by 43% on average. Beneficiaries were not told how the algorithm worked. The due process violation was in the absence of adequate notice and a meaningful path to contest -- not in the denial rate per se. The court confirmed the right to contest a decision whose mechanism is not disclosed. [confirmed -- court record, CE-006]

**Attrition through the appeal process:** The data does not fully disaggregate why 88.5% do not appeal. Cost, complexity, health deterioration during delay, and not knowing that appeal is possible are all plausible explanations. The research file identifies this as an open question -- not a confirmed finding.

---

## 9. Governance lag and what enforceable looks like

### What exists now

**EU AI Act [confirmed -- statutory text, CE-011]:** AI systems used for creditworthiness evaluation, credit scoring, and health/life insurance risk assessment are classified as high-risk. Requirements: conformity assessment, data governance documentation, logging, post-market monitoring, human oversight design. Full compliance deadline: August 2, 2026. This deadline is prospective as of March 2026. The Act does not apply to US companies operating exclusively in the US. Compliance and enforcement track records are not yet established.

**CFPB adverse action notice requirements [confirmed -- regulatory, CE-009]:** ECOA and Regulation B require that AI-driven credit decisions come with specific, actionable denial reasons. Generic checklists do not satisfy this. "A creditor cannot justify noncompliance based on the mere fact that the technology is too complicated or opaque to understand." Gap: compliance rates are not publicly tracked. Enforcement posture under the current administration (2025+) is uncertain.

**CMS Medicare Advantage rules [confirmed, CE-012]:** Plans must publish prior authorization lists and report aggregate metrics. In June 2025, CMS suspended health equity analysis requirements and plan-level (vs. contract-level) PA reporting. The trajectory: AI adoption accelerating, transparency requirements contracting. This is not a permanent outcome -- it is the current regulatory direction.

**No Surprises Act:** Addresses surprise billing, not AI-assisted denial specifically. Does not require disclosure of AI use in utilization review decisions.

**US gap:** No federal law currently requires audit logs, model transparency, or prohibition on AI-only final decisions in insurance claims, Medicaid benefits, or credit. The CFPB and CMS rules establish floors for notice and appeal rights -- they do not reach the model architecture itself.

### What enforceable looks like

_[Note: This subsection is a synthesis extrapolated from existing fragmented requirements -- CFPB adverse action circulars, CMS Medicare Advantage rules, and the due process standard from the Arkansas Ledgerwood court record. It is not a tested or implemented standard. No single jurisdiction has assembled these elements into a coherent minimum floor as described below.]_

These are the minimum elements that existing regulation requires or points toward. They are not drafted from scratch.

A procurement clause or regulatory requirement with teeth would include:

1. **Audit logs:** Model output to decision to any override must be logged and retained. The log must be accessible to regulators and, upon request, to claimants in a meaningful form.
2. **Appeal timelines with enforcement:** Statutory timelines must be met and reported publicly. MA already requires 30-day standard / 72-hour expedited review; this requirement needs reporting and consequences for non-compliance.
3. **Plain-language reason requirement:** Denial reasons must reflect actual model output -- not generic checklists. This is already required by CFPB for credit; the same principle should apply to health insurance and government benefits.
4. **Human override authority with documentation:** The human reviewer must have the clinical record, the model output, and the authority to override without institutional penalty. The review must be documented -- not just signed.
5. **Prohibited-use boundaries:** Certain decisions cannot be AI-final. Post-acute care duration, disability benefit level changes, and credit decisions exceeding materiality thresholds are candidates. A human with substantive authority must make the final call.
6. **Anti-retaliation:** Appealing a denial cannot trigger adverse treatment (e.g., future coverage restrictions, crediting red-flags, benefit reductions during appeal period).
7. **Measurable timeline reporting:** Institutions must report whether statutory windows are being met, by decision type and population.

**What a real clause looks like (grounded in CFPB precedent):**

The CFPB's Circular 2022-03 establishes the model: a denial notice must identify the specific principal reason(s) for the denial -- the actual factors the model weighted -- not a menu of possibilities. Procurement language for a state Medicaid system or an insurer contract could incorporate the same logic: _"Automated adverse decisions must be accompanied by a written statement identifying the specific data inputs that materially contributed to the determination, in plain language understandable to a person without legal training, prior to the decision taking effect."_

_[Proposed extrapolation -- not a confirmed accountability template. Verify against applicable jurisdiction before use.]_

This isn't a new legal invention. It applies the logic of existing adverse action notice requirements to the benefits and insurance context.

---

## 10. Safety and reliability overreach

**Is AI being deployed in claims and eligibility beyond validated operating conditions?**

The Senate PSI report describes nH Predict as generating length-of-stay predictions based on aggregate population data. It does not document whether UnitedHealthcare validated the model's accuracy for the specific population of Medicare Advantage enrollees seeking post-acute care, or whether the model was validated against outcomes rather than cost targets. The denial rate correlation (ninefold increase) is consistent with a model miscalibrated for coverage rather than validated for clinical appropriateness. [plausible -- the Senate report implies this; it is majority staff, not adjudicated]

**Do not assert:** The "90% error rate" figure that appeared in some press coverage of nH Predict. Its sourcing is unclear; it does not appear in the Senate PSI report or in peer-reviewed literature. Asserting a specific error rate for nH Predict without a verifiable source is not supported by the research file.

**What the Stanford study found [confirmed, CE-008]:** Insurance claims reviewers using AI tools could not explain how the tools worked, did not know AI could be biased, and could not identify failure modes. Separately, the study found most large insurers (84%) lack governance processes to monitor AI accuracy or bias. This means:

- Models may drift after deployment with no detection mechanism.
- Fallback modes (what happens when the model fails or produces anomalous outputs) are not documented in available sources.
- Kill-switch mechanisms -- the ability to suspend an AI system pending investigation -- are not documented in the insurance context from the sources reviewed.

**The gap between vendor claims and evidence is sharpest in post-acute care AI.** nH Predict was marketed as a tool to improve care coordination and appropriate utilization. The observable output -- a ninefold increase in SNF denial rates -- is inconsistent with the "coordination" framing without an explanation of why appropriate utilization happened to fall in exactly that direction.

---

## 11. What good looks like -- the Human Command minimum floor

The positive case exists. It is narrow. The ex parte Medicaid renewal counterexample is real. Automation optimized for coverage retention reduced procedural disenrollment where it was deployed. This is not the norm -- it is a proof-of-concept that the technology can be oriented in either direction.

What separates ex parte renewal from PxDx and nH Predict is not the sophistication of the AI. It is what the AI was pointed at. Ex parte checked whether existing data showed continued eligibility and, finding it, continued coverage. The insurers' AI checked whether existing data showed a path to deny, and, finding it, denied.

**Minimum viable rulebook for Human Command:**

| Element                  | What it requires                                                                                                                       |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Notice**               | Plain language, before the decision takes effect, explaining what happened and what can be done                                        |
| **Reason**               | Specific -- the actual factors that drove the decision, not "does not meet criteria"                                                   |
| **Appeal**               | Defined timelines; a human reviewer with actual authority, not nominal review; access to the original model output and decision record |
| **Records**              | Claimant can obtain the model output-to-decision chain on request                                                                      |
| **Human override**       | Someone with documented authority, not just a signature on a batch                                                                     |
| **Anti-retaliation**     | Appealing cannot trigger worse treatment in any subsequent decision                                                                    |
| **Measurable timelines** | Statutory windows reported publicly, by decision type                                                                                  |

This is not aspirational. Every element has a legal or regulatory precedent in at least one of the three domains covered here. The problem is that the elements exist in fragmented form -- in CFPB guidance for credit, in CMS rules for Medicare Advantage appeals, in the due process standard the Arkansas court enforced. They have not been assembled into a coherent minimum floor and applied consistently.

---

### 11b. Four accountability checks

These four checks apply directly to AI-assisted claims and eligibility decisions. They are minimum tests, not aspirational standards. Each maps to a documented failure in this case study.

---

### Box 1: Human Command check

The Human Command minimum floor -- from section 11 -- applied as a rapid test for any specific denial or determination:

| Element            | Test question                                                                                                                            | Status in this domain                                                                                                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Notice**         | Did the claimant receive plain-language notice before the decision took effect?                                                          | [confirmed gap -- Arkansas: no notice of algorithm's role (CE-006); Medicaid unwinding: some notices at outdated addresses (CE-005)]                                                                    |
| **Reason**         | Does the denial notice give a specific reason -- the actual factors that drove the decision -- not a generic checklist?                  | [confirmed gap -- CFPB circulars exist because generic notices were the documented practice (CE-009); no equivalent requirement enforced for health insurance or government benefits at national scale] |
| **Appeal**         | Is the appeal path realistic and accessible: defined timeline, a reviewer with actual authority, access to the original decision record? | [confirmed path exists; confirmed path is underused -- 88.5% do not appeal (CE-003); confirmed that functional human command is impaired by automation bias (CE-008)]                                   |
| **Records**        | Can the claimant obtain the model-output-to-decision chain on request?                                                                   | [confirmed gap -- no confirmed case of voluntary claimant-accessible model logs in US practice; EU AI Act requires this for EU-market systems; no US equivalent]                                        |
| **Human override** | Who can override the decision, how quickly, and is that action logged?                                                                   | [confirmed gap -- Cigna PxDx: override authority is nominally present; time and information are structurally absent (CE-001); override rates proprietary across all domains]                            |

---

### Box 2: Exit check

If a person cannot realistically switch insurer, change benefit system, or opt out, governance requirements must be higher. Captivity without accountability is extraction.

**Applied:**

- **Medicare Advantage:** Mid-year switching is restricted to qualified life events. Open enrollment is annual. For a claimant facing a systematic denial pattern, the practical option is to appeal -- not to exit. [confirmed -- CE-003; section 7 Q6]
- **Government benefits (Medicaid, SSDI, SNAP):** Single-payer programs with no alternative. There is no market exit option. The regulatory floor must be higher precisely because exit is unavailable.
- **Employer-sponsored insurance:** Switching is limited to open enrollment or qualifying life events. Most employees face a choice among 2-3 plan options selected by their employer.
- **Consumer credit:** Exit is formally available -- you can apply to a different lender. But denial history may follow the applicant through credit bureau data. In some markets (specific mortgage products, FHA programs), the insurer pool is narrow.

In practice: if you cannot switch health plans until open enrollment -- typically once a year -- you cannot realistically exit a bad system mid-cycle, even after a wrongful denial.

**Finding:** In the two highest-stakes domains -- government benefits and Medicare Advantage -- exit is not a realistic check on institutional behavior. This means governance must substitute for market accountability. Higher audit requirements, appeal SLAs with enforcement, and reason-code specificity are not regulatory overhead in captive markets -- they are the only accountability mechanism available.

---

### Box 3: Audit and logs check

| Question                                                    | Current status                                                                                                                                                                                                                   |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What is logged by the insurer or agency system?             | [unknown -- proprietary; internal logging standards are not disclosed; EU AI Act requires post-market monitoring logs for high-risk systems as of August 2026 (CE-011)]                                                          |
| Who can see it?                                             | [confirmed that claimants cannot -- no confirmed case of voluntary claimant-accessible model logs in US practice (CE-009, CE-006)]                                                                                               |
| Can the affected person contest the decision using the log? | [confirmed that current notices do not enable log-based contest -- notices are generic, not model-output-specific (CE-009); Arkansas court required disclosure only after litigation (CE-006)]                                   |
| What happens to the log after a decision is overturned?     | [unknown -- no documented retention requirement for overridden AI-assisted denials in US health insurance practice]                                                                                                              |
| Does a regulator or auditor have access?                    | [partial -- HHS OIG audits MA plans on a sample basis (CE-018); no systematic real-time access to model output records; CMS suspended health equity analysis that would have created population-level audit capability (CE-012)] |

**Implication:** The audit infrastructure required to detect systematic over-denial or demographic disparate impact does not currently exist in US health insurance in a form accessible to regulators, claimants, or researchers in real time. Post-hoc audits (OIG samples, Senate investigations) are the current substitute. They lag adoption by years.

---

### Box 4: Shared gains check

AI adoption generated documented institutional efficiency gains in this domain. The gains check asks whether those gains were shared with claimants.

| Question                                     | Finding                                                                                                                                                                                                                        |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Did prices / premiums fall?**              | No evidence in this research. CVS savings revised to $77.3M [CE-002]; no corresponding premium reduction documented. [unknown -- premium trend not analyzed in this file]                                                      |
| **Did denial rates fall?**                   | No. MA prior auth denial rates did not fall as AI was adopted. nH Predict adoption was correlated with a ninefold SNF denial rate increase at UnitedHealthcare [CE-002].                                                       |
| **Did admin drag on claimants decrease?**    | No evidence of decrease. AMA 2024 reports 39 PA requests per physician per week and $68,000 per physician per year in plan interaction costs [CE-017]. Claimant-side burden was not reduced.                                   |
| **Did appeal paths become more accessible?** | No. CMS suspended transparency requirements in June 2025 [CE-012]. CFPB enforcement posture on adverse action notices is uncertain under the current administration [CE-009]. The trajectory is narrowing, not expanding.      |
| **Who captured the efficiency gains?**       | Institutional insurer / UM vendor margin. The documented savings (CVS, nH Predict correlation) flowed to insurer and vendor economics. No confirmed mechanism for sharing gains with claimants was identified in the research. |

**Summary:** The Shared Gains Test fails in this domain. The efficiency gains are real. They were captured upstream. The claim is not that insurers intentionally withheld gains -- it is that no mechanism existed to require sharing, and no evidence shows sharing occurred.

---

## 12. What to do

### One personal ask (for someone navigating a denial)

Request the specific reason in writing before accepting a denial. In all three domains, you have a legal right to a written explanation. For credit: ECOA requires it. For Medicare Advantage: the denial notice must include the specific criteria used. For Medicaid: the fair hearing process requires the agency to explain the basis for the action.

When you receive the reason, ask whether it reflects what actually happened in your case or whether it is a generic form. If it is generic -- a checklist that does not match your circumstances -- that is the basis for your appeal.

File the appeal. If your denial seems wrong and you appeal, the odds are in your favor -- 80.7% of Medicare Advantage prior authorization appeals that reach review are overturned. That figure is among the 11.5% of people who actually appealed; it does not mean every denial is wrong. It means that when people do contest, they win at a high rate.

### One procurement and policy lever

State Medicaid agencies, employers purchasing insurance, and federal agencies procuring AI systems for benefits determination have contract and procurement authority right now. That authority can require:

- Audit logs (model output to decision chain, retained and accessible)
- Specific denial reasons (not generic checklists)
- Human override documentation (the reviewer's identity, the basis for their decision, and whether they modified the AI recommendation)
- Public reporting of appeal rates, overturn rates, and timeline compliance

This does not require new federal legislation. It requires procurement standards to reflect what the CFPB already requires for credit -- and applying the same logic to health insurance and government benefits contracts. State insurance commissioners in California, New York, and Illinois have already moved toward algorithmic transparency requirements in lending (CE-010). The same regulatory authority applies to insurance in those states.

Ground this in what the EU AI Act mandates by August 2026 for any company with EU operations -- audit logs, post-market monitoring, human oversight design, data governance documentation. Use that compliance requirement as leverage in US procurement negotiations with the same vendors.

### Sequencing the response

This case needs the same two-track discipline as the rest of the model: fast relief that people can actually feel, and a longer build that makes wrong denials harder to scale in the first place. If you only do the fast track, denial-by-friction keeps reproducing itself. If you only do the long build, people keep absorbing wrong denials while they wait.

#### Short term (0-12 months): make denial and appeal usable now

Focus on changes that can reduce procedural harm without waiting for Congress:

- require specific denial reasons instead of generic checklists
- require visible appeal timelines and named human reviewers
- retain and expose enough records for a claimant or advocate to challenge the call
- publish appeal rates, overturn rates, and timeline compliance
- use procurement contracts and state oversight to impose the minimum floor now

What counts as progress in this window:

- people can tell why they were denied
- appeals are usable without reconstructing the whole system
- administrators can no longer hide behind vague notices and proprietary black boxes
- overturn patterns become visible instead of anecdotal

#### Medium term (1-3 years): turn procedural rights into operating standards

Use the first wave of visible guardrails to shift how institutions run claims and eligibility systems:

- make audit-log retention and review-path documentation standard contract language
- make appeal and reversal metrics part of vendor performance review
- require independent audit sampling where auto-adverse action risk is high
- align state insurance, Medicaid, and benefits oversight around the same minimum floor
- narrow the gap between formal contestability and functional contestability

What counts as progress in this window:

- appeal rights are measured as part of system performance, not treated as a side file
- vendors and agencies can be compared on reversal rates and response times
- denial throughput can no longer scale without corresponding adjudication capacity

#### Long term (3-10 years): rebuild the system so error correction is not attrition

The deeper problem is not one bad denial letter. It is a system design where the institution's cost of saying no is tiny and the claimant's cost of contesting is high.

That longer build includes:

- binding legal floors for notice, reason, appeal, records, and human override across domains
- stronger penalties for repeat procedural failure and rubber-stamp review
- administrative simplification that reduces claimant-side burden, not just institutional cost
- durable oversight capacity in insurance, benefits, and credit systems
- incentive structures that reward approval accuracy and claimant-side fairness, not just unit cost reduction

What counts as success here:

- wrong denials are corrected early instead of after attrition
- contesting a bad call no longer requires unusual stamina, expertise, or luck
- efficiency gains show up as lower burden and better access for households, not just lower processing cost for institutions

---

## 13. How to talk about it

_[Playbook companion -- bridge language for the writer lane. Not part of the evidence record.]_

The goal isn't to make AI sound villainous. The goal is to make the accountability gap legible. Try this framing: "The system that denied you has a process. The question is whether that process included a person who actually looked at your case -- or whether it included a person who clicked approve on fifty denials in a row without reading any of them. Both count as 'human review.' They are not the same thing."

For skeptics who trust markets and efficiency: "The efficiency gain is real. Cigna's physicians can process fifty denials in ten seconds. The question is whether that gain goes to lower premiums or to insurer profit, and whether the people on the other end of those denials have a realistic path to contest them. If the appeal win rate is 80% but only 11% of people appeal, the efficiency gain came from somewhere."

For administrators and policymakers: "You already require written reasons for credit denials. You already require appeal rights for Medicare Advantage. You already have the court record from Arkansas. The gap is that these requirements exist in pieces and are not enforced as a minimum floor. The technology is not the problem. The accountability architecture is."

---

## 14. Where this analysis has limits

- **AI's role in Medicaid unwinding is not confirmed.** KFF data shows 25 million disenrolled, 69% for procedural reasons. Staffing and capacity failure was the documented primary driver. AI was a tool in some states' renewal processes, not the confirmed primary cause.
- **SSA/SSDI AI screening at scale: evidence is thin.** The procedural burden structure in federal disability programs is confirmed. AI-specific amplification of that burden is not supported by strong primary evidence. Do not assert SSA uses AI to deny claims at scale.
- **Consumer finance: mechanism solid; scale of harm not quantified.** Proxy discrimination through AI credit models is a confirmed technical and legal concern. Systematic quantified data on AI-driven discriminatory denials at scale is not yet available in peer-reviewed sources. The Chime enforcement action (CE-019) is the strongest confirmed case for automation-driven consumer finance harm -- but it is an account-closure case, not a credit underwriting case.
- **Michigan MiDAS and Arkansas Ledgerwood are rule-based, not ML.** Both predate modern AI. They are the strongest government-domain evidence for the mechanisms, but the algorithms involved are not current AI systems. They establish the legal and structural pattern; they do not establish that modern ML systems exhibit identical failure modes.
- **Override rates: not measured.** We do not have public data on how often human reviewers actually reverse AI recommendations in insurance prior auth or claims review. The rubber-stamp mechanism is supported by behavioral evidence; a direct rate would bound the claim more precisely.
- **The ex parte counterexample is narrow, not the norm.** States with higher ex parte usage had directionally lower procedural disenrollment rates -- a plausible inference, not a causal finding. It establishes that automation can be oriented toward access; it does not establish how often that orientation is chosen or sustained.
- **AMA survey data is Tier 2.** The 24% serious adverse event figure is physician-reported, not independently adjudicated. The AMA has a known advocacy position against excessive prior authorization. Use as directional evidence with source attribution, triangulated against OIG and KFF data.

---

### 14a. Key numbers at a glance

Confirmed and labeled data points across all three domains. Confidence tier in brackets.

- **1.2 seconds** per claim -- Cigna PxDx physician batch denial review time. [confirmed -- ProPublica primary documents, Tier 1]
- **80.7%** of Medicare Advantage prior authorization appeals fully or partially overturned (2024). [confirmed -- KFF 2025, Tier 1]
- **11.5%** of MA prior auth denials actually appealed -- meaning 88.5% were absorbed unappealed. [confirmed -- KFF 2025, Tier 1]
- **13%** of MA prior authorization denials in the OIG sample met Medicare coverage rules and should have been approved. [confirmed -- HHS OIG independent audit, April 2022, Tier 1]
- **93% false positive rate** -- Michigan MiDAS unemployment fraud detection, 2013-2015. 40,195 wrongful fraud determinations; $20M settlement; 7 years to resolve. [confirmed -- Michigan Auditor General + court record, Tier 1; note: rule-based algorithm, not ML]
- **57%** of all initial Medicare Advantage claim denials were ultimately reversed -- but a net 7% provider revenue reduction persisted from denials never reversed. [confirmed -- Health Affairs peer-reviewed, June 2025, Tier 1]
- **69%** of 25 million Medicaid disenrollments during the 2023-2024 unwinding were for procedural or paperwork reasons, not substantive ineligibility findings. [confirmed -- KFF, Tier 1; staffing/capacity was primary driver, not AI]
- **92.1%** accuracy rate for automated ex parte Medicaid renewals among eligible beneficiaries. [plausible -- ASPE administrative data; methodology not independently peer-reviewed]
- **24%** of physicians reported a serious adverse event attributable to prior authorization delays (hospitalization, permanent impairment, or death). [confirmed as survey finding -- AMA 2024, Tier 2: industry/professional association, physician self-reported; triangulate with OIG and KFF]
- **$3.25 million** CFPB fine against Chime for 90+ day delays returning funds after algorithmic account closures. [confirmed -- regulatory enforcement action, Tier 1]
- **39 PA requests** per physician per week; approximately **$68,000** per physician per year spent on plan interactions. [confirmed as survey finding -- AMA 2024, Tier 2: physician self-reported]
- **80-85%** industry benchmark for auto-adjudication rate -- claims processed with no human involvement. Cost: cents per claim vs. ~$20 for human-reviewed. [plausible as industry benchmark -- OpsDog, vendor data; not independently verified at the firm level]

---

## 15. Receipts stubs

| Receipt ID | Source Type                               | Title                                                                                                                                              | Publisher                                                                 | Date                                              | Confidence Tier                                                                         | Link / Claim IDs  |
| ---------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------- |
| R-001      | Journalism (investigative)                | "How Cigna Saves Millions by Having Its Doctors Reject Claims Without Reading Them"                                                                | ProPublica                                                                | March 2023                                        | Tier 1                                                                                  | CE-001            |
| R-002      | Government (Senate majority staff report) | "Refusal of Recovery: How Medicare Advantage Insurers Have Denied Patients Access to Post-Acute Care"                                              | U.S. Senate Permanent Subcommittee on Investigations                      | October 17, 2024                                  | Tier 1 (with label: majority staff, not bipartisan, not adjudicated)                    | CE-002            |
| R-003      | Journalism (investigative)                | "UnitedHealth used algorithms to deny care, staff say"                                                                                             | STAT News                                                                 | November 2023                                     | Tier 2                                                                                  | CE-002            |
| R-004      | Government data                           | KFF Medicaid Enrollment and Unwinding Tracker; "As Medicaid Unwinding Concludes in Most States, KFF Finds 25 Million Lost Medicaid Coverage"       | KFF                                                                       | 2024                                              | Tier 1                                                                                  | CE-005, CE-013    |
| R-005      | Legal record + advocacy analysis          | Arkansas Dept. of Human Services v. Ledgerwood (2017, 2019); CDT analysis "What Happens When Computer Programs Automatically Cut Benefits"         | Arkansas Supreme Court; Center for Democracy and Technology               | 2017-2020                                         | Tier 1 (court record); Tier 2 (CDT analysis)                                            | CE-006            |
| R-006      | Peer-reviewed                             | "The Flaws of Policies Requiring Human Oversight of Government Algorithms"                                                                         | Computer Law & Security Review                                            | 2022                                              | Tier 1                                                                                  | CE-007            |
| R-007      | Peer-reviewed                             | "The AI Arms Race In Health Insurance Utilization Review: Promises Of Efficiency And Risks Of Supercharged Flaws"                                  | Health Affairs                                                            | 2025                                              | Tier 1                                                                                  | CE-008            |
| R-008      | Government (regulatory)                   | CFPB Circular 2022-03; CFPB Circular 2023-03                                                                                                       | Consumer Financial Protection Bureau                                      | May 2022; September 2023                          | Tier 1                                                                                  | CE-009, CE-010    |
| R-009      | Government data                           | "Medicare Advantage Insurers Made Nearly 53 Million Prior Authorization Determinations in 2024"                                                    | KFF                                                                       | 2025                                              | Tier 1                                                                                  | CE-003            |
| R-010      | Peer-reviewed                             | "Medicare Advantage Denies 17 Percent Of Initial Claims; Most Denials Are Reversed, But Provider Payouts Dip 7 Percent"                            | Health Affairs                                                            | June 2025                                         | Tier 1                                                                                  | CE-004            |
| R-011      | Government (regulatory)                   | EU AI Act, Annex III (High-Risk AI Systems)                                                                                                        | European Parliament and Council                                           | 2024 (enacted); August 2026 (compliance deadline) | Tier 1 (statutory text)                                                                 | CE-011            |
| R-012      | Government / policy research              | "CMS Suspends New Medicare Advantage Prior Authorization Transparency Rules"                                                                       | Georgetown Center on Health Insurance Reforms                             | 2025                                              | Tier 1                                                                                  | CE-012            |
| R-013      | Industry / professional association       | "2024 AMA Prior Authorization Physician Survey"                                                                                                    | American Medical Association                                              | December 2024 (n=1,000 practicing physicians)     | Tier 2 (industry/association, physician self-reported; not independently peer-reviewed) | CE-017            |
| R-014      | Legal record + journalism                 | Bauserman v. Unemployment Insurance Agency (Michigan); "The Seven-Year Struggle to Hold an Out-of-Control Algorithm to Account"                    | Michigan Supreme Court (2019); Michigan AG (settlement, 2022); The Markup | 2013-2022                                         | Tier 1 (court record + Auditor General finding); Tier 2 (journalism)                    | CE-016            |
| R-015      | Government (OIG audit)                    | "Some Medicare Advantage Organization Denials of Prior Authorization Requests Raise Concerns About Beneficiary Access to Medically Necessary Care" | HHS Office of Inspector General                                           | April 2022 (OEI-09-18-00260)                      | Tier 1 (independent government audit)                                                   | CE-018            |
| R-016      | Regulatory enforcement action             | CFPB enforcement action against Chime Financial                                                                                                    | Consumer Financial Protection Bureau                                      | 2021                                              | Tier 1 (regulatory enforcement action)                                                  | CE-019            |
| R-017      | Government data / academic                | ASPE data point on ex parte renewal accuracy; MACPAC issue brief "Increasing the Rate of Ex Parte Renewals"                                        | ASPE (HHS); MACPAC                                                        | 2023                                              | Tier 2 (ASPE administrative data; methodology not independently peer-reviewed)          | CE-013 (expanded) |

**Additional sources in research file (supporting claims but not separately receipted above):**

- Ben Green, Stanford / Health Affairs report, January 2026 (CE-008 Stanford component)
- CFPB Fair Lending Report FY2023, June 2024 (CE-010)
- DOJ Combatting Redlining Initiative, 2023 (CE-010)
- Springer Nature / AI & Society, "Algorithmic discrimination in the credit domain," 2023 (CE-010)
- USAFacts / Atticus, SSDI approval rate data, 2022-2024 (CE-014)
- MACPAC, State-Reported Medicaid Unwinding Data Brief, November 2024 (CE-005)
- GAO, "Medicaid and Children's Health Insurance: Disenrollments After COVID-19," 2025 (CE-005)
- NAIC, Model Bulletin: Use of Artificial Intelligence Systems by Insurers, December 2023 (CE-008 background)
- NIHCR, prior authorization review, 2019 (CE-015)

---

## Loop Effect

### Effect on the bad loop

- **Monthly squeeze:** Denied and delayed claims raise direct out-of-pocket cost. Procedural disenrollment (69% of Medicaid unwinding losses) cuts coverage without any eligibility change. Physician time lost to prior authorization ($68,000/year per physician) raises the cost of care delivery.
- **Insecurity:** Opaque denial letters, unanswered appeals, and proprietary vendor logic leave people unable to understand or contest decisions about their own care and benefits. The 88.5% who never appeal are not all satisfied; most have simply absorbed harm.
- **Manipulation / scapegoats:** When the denial mechanism is invisible, it is easy to attribute lost coverage to individual failure -- not navigating the system -- rather than to systemic extraction. The system's complexity is the cover story.
- **No fixes / more squeeze:** Accountability laundering (no single party owns the denial chain) and low appeal rates mean systemic errors persist uncorrected. Auto-adjudication at 80-85% of volume scales the error rate faster than any adjudication capacity can fix it.

### Effect on the good loop

- **Security:** Specific written denial reasons + real appeal paths + published overturn rates would let people contest decisions that are wrong. The ex parte Medicaid counterexample shows automation pointed at coverage retention can close the gap rather than widen it.
- **Choice:** Real exit is absent in most domains (government benefits have no exit; Medicare Advantage has time-boxed enrollment). Portable records and open enrollment windows are proxies where full exit is not possible.
- **Competition:** Independent oversight, procurement standards requiring contestability, and public reporting of appeal and overturn rates would make vendor capture harder to sustain invisibly.
- **Shared gains:** Auto-adjudication savings are confirmed and large. Distribution of those savings to lower premiums, better access, or reduced admin drag for claimants is not documented in any reviewed source.

### Case verdict

- **Net effect right now:** Bad loop.
- **Why:** Automation is scaled to maximize denial throughput while the claimant's cost of contesting stays constant or rises. The savings are captured; the errors are externalized. The accountability chain is broken by design: no single party is required to own the outcome from model to action.
- **What would change the verdict:** Mandatory specific denial reasons (not generic checklists), published appeal and overturn rates by insurer and vendor, independent audit of AI-generated denial patterns, corroboration rules before auto-adverse action on life-outcome decisions, and assigned decision ownership in procurement contracts.

### One steady action

- Request the specific written reason for any denial before accepting it. In all three domains, you have a legal right to a written explanation. If the reason is generic, that is your appeal basis -- and when people do appeal, the win rate is 80.7%.

---

## North Star verdict

Does this case reinforce or complicate the loop?

> security â†’ choice â†’ competition â†’ shared gains â†’ more security

It reinforces the loop mechanism at a specific point: when institutions can automate denial throughput while the claimant's cost of contesting stays constant or rises, security declines without any change in eligibility criteria. You can qualify for coverage, qualify for benefits, qualify for credit -- and still not receive them, because the friction between the right and the reality is now managed by a system that the institution controls and the claimant cannot access.

The ex parte Medicaid counterexample does not break the loop. It shows the loop can be interrupted -- but only when the optimization target is changed, not just the technology. Changing the technology while keeping the optimization target pointed at cost reduction produces the same outcome faster and at higher scale.

**System lesson in one sentence:**
Automation pointed at cost reduction scales the gap between formal rights and functional access; automation pointed at coverage retention can close it -- the critical variable is what the institution is rewarded for maximizing.

**G2 note.** Accountability laundering compounds this: when the denial chain crosses vendor/insurer/agency lines, the formal rights that exist on paper become functionally inaccessible because no single party is obligated to explain the full decision. The right exists; the accountable party does not. Assigned decision ownership -- the institution that acts on the output owns accountability for the output -- is the structural fix, not a faster appeal path through the same maze.

---

_[RESEARCH GAP: Override rates -- how often human reviewers actually reverse AI recommendations in insurance prior auth and claims review. This is proprietary data not obtained in sources reviewed. The rubber-stamp mechanism is strongly supported by behavioral evidence; a direct rate would strengthen or bound the claim.]_

_[RESEARCH GAP: AI-specific screening mechanisms in SSDI/SSI initial denials. The procedural burden pattern is confirmed. AI amplification in federal disability programs is not supported by strong primary evidence as of the research date.]_

_[RESEARCH GAP: Claimant-side navigation tools and their effectiveness. Some states deployed Medicaid navigator programs during the unwinding; systematic evidence on their reach and impact is not in the sources reviewed.]_

_[RESEARCH GAP: Whether PA processing time reductions (CE-015) translated to faster care access for patients. Institutional-side speed improvement is documented; patient-side benefit is unknown.]_

_[RESEARCH GAP: Compliance rate for CFPB adverse action notice requirements in AI-driven credit decisions. The requirement is confirmed; enforcement activity under the current administration (2025+) is uncertain.]_

_[RESEARCH GAP: False-positive rate for Chime algorithmic account closures. The CFPB fine is confirmed; the rate at which legitimate accounts were incorrectly closed was not adjudicated and is not available in sources reviewed.]_

_[RESEARCH GAP: Independent verification of AMA 2024 24% serious adverse event figure. This is physician self-reported data. A clinical outcome study capturing PA-attributable serious adverse events at scale would bound or confirm the claim.]_

---

## Bridge language

How to talk about this when the audience isn't already convinced:

- "The algorithm isn't neutral -- it was optimized for something. In insurance, that something is cost. The question is whether the rules force it to also be accurate."
- "When a physician approves 50 denials in two minutes without reading a single chart, the human review is a formality. The question is whether the law requires something more."
- "If you can't switch plans until open enrollment, you're stuck with whatever system your insurer uses. That captivity is why the governance bar has to be higher."
- "An 80% overturn rate on appeals that people actually pursue means the denials were mostly wrong. The problem is that 88% of people never appeal."
- "Audit rights, reason codes, and appeal SLAs are not regulatory theory -- they're contract terms. A large employer or state agency can require them in the next renewal."
