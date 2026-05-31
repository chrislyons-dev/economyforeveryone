---
title: 'Automated Denials and the Accountability Gap'
bucket: 'failure'
corePattern: 'Opaque automated decision systems making consequential determinations on healthcare and benefits can move the decision record out of reach, leaving people with formal appeal rights but no usable way to contest the result.'
studyDate: 2026-05-19
eventWindowStart: 2013-10-01
eventWindowEnd: 2026-05-17
status: 'published'
summary: 'Automated denial systems in health insurance and public benefits show how institutional speed, opaque decision records, and thin appeal paths can turn formal rights into practical dead ends.'
claim: 'A consequential automated decision system that cannot produce a person-accessible record of the inputs, criteria, and rules behind a determination cannot support meaningful appeal or human review.'
evidenceLevel: 'medium'
policyDomain:
  - 'healthcare'
  - 'benefits'
  - 'technology-governance'
  - 'consumer-protection'
tags:
  - 'ai'
  - 'automated-denials'
  - 'claims'
  - 'benefits'
  - 'accountability'
  - 'context-architecture'
receiptTags:
  - 'primary-documents'
  - 'official-data'
  - 'court-records'
  - 'independent-analysis'
sources: []
---

## What they did

Starting around 2020, major health insurers and government agencies deployed automated decision systems to process prior authorization requests, claims, and benefits eligibility determinations at scale. The systems differed technically. Cigna's PxDx (prior authorization by diagnosis) cross-referenced procedure codes against an internal criteria database. UnitedHealth Group's nH Predict (developed by its Optum subsidiary naviHealth) ran a predictive model trained on six million patient records to project post-acute care needs for Medicare Advantage enrollees. Michigan's MiDAS (Michigan Integrated Data Automated System) ran rule-based logic to flag unemployment insurance fraud. What the insurance cases shared: automated determination at speed, minimal individual-patient context, and no person-accessible record of what the system considered when it acted. MiDAS is a related failure with a different mechanism: the Michigan Auditor General did audit its logic and found the 93% false positive rate. What MiDAS lacked was individual review before flags issued, not a paper trail afterward.

---

## Why it didn't work

The systems were optimized to reduce processing cost. Denial throughput increased. The cost of contesting a denial, for the person affected, stayed the same or went up.

When an algorithm denies a claim in 1.2 seconds and the appeal process requires the affected person to request records, submit documentation, wait for internal review, and then escalate to an administrative law judge if that fails - the asymmetry is a foreseeable consequence of how the systems were optimized. Speed on the institution's side, friction on the claimant's side, produces a predictable result: most people don't appeal, and many wrong decisions go uncorrected.

These systems move the record of the decision out of reach. The institution controls the inputs, criteria, rankings, and logs. The affected person sees only the result. That turns appeal from a right into a scavenger hunt.

For Cigna and UnitedHealth, decisions came from inputs and criteria the affected person had no way to access. For MiDAS, the rule logic was auditable - the Michigan Auditor General found it - but claimants weren't given a usable record within the 10-day contestation window. In all three cases, the appeal process can't function when the information needed to mount a challenge isn't in the hands of the person who needs it in time to act.

---

## Mechanism evidence

### Cigna PxDx

**Source:** ProPublica investigation; class action lawsuit (E.D. Cal.); class certified March 2025.

Cigna's PxDx system denied approximately 300,000 claims over a two-month period in 2022. The average physician review time was 1.2 seconds per claim (confirmed - ProPublica investigation using Cigna-provided data). The review process worked by batch: physicians confirmed algorithmic flags against diagnosis-procedure mismatch criteria without reviewing individual patient records.

Cigna's position: "PxDx is a simple tool to accelerate physician payments that has been grossly mischaracterized in the press."

The class action alleges an 80% reversal rate on appeals (lawsuit allegation; not a court finding; Cigna disputes). Class certified to proceed in March 2025.

**Evidence label:** Confirmed - algorithm existed and denied claims at scale; 1.2 seconds average review time (Cigna-provided data, ProPublica); lawsuit certified and proceeding. The 80% reversal rate is an allegation, not a court finding.

---

### UnitedHealth nH Predict

**Source:** Lokken v. UnitedHealth Group class action; STAT News "Denied by AI" series (March 2023); court order March 2026.

UnitedHealth Group's naviHealth subsidiary deployed nH Predict to evaluate Medicare Advantage post-acute care claims. The system was trained on six million patient records. The lawsuit alleges it was used to override physicians' treatment recommendations and that case managers were instructed to follow algorithm projections rather than clinical judgment. The lawsuit also alleges the database lacked sufficient contextual information for individual patient assessments.

The lawsuit alleges patients won more than 90% of appeals through internal appeal or federal administrative law judge rulings (lawsuit allegation; not a court finding; cited in AIAAIC database). In February 2025, the court allowed breach of contract claims to proceed, specifically on whether the algorithm overrode policy language stating coverage decisions would be made by clinical staff or physicians. In March 2026, the court ordered UnitedHealth to disclose algorithm documents and internal communications.

The discovery fight is itself instructive. The court had to compel production of the algorithm's decision records because they weren't voluntarily available. That's the audit trail problem made procedurally concrete.

**Evidence label:** Confirmed - lawsuit exists and is proceeding; court ordered discovery; breach of contract claims allowed to proceed. The 90% appeal win rate is a lawsuit allegation, not a court finding.

---

### Michigan MiDAS

**Source:** Bauserman v. Unemployment Insurance Agency (Michigan Supreme Court, 2019; settlement October 2022); Michigan Auditor General report; The Markup.

MiDAS made 40,195 automated fraud determinations from October 2013 to September 2015. The Michigan Auditor General found 93% of those determinations did not involve fraud (confirmed - Michigan Auditor General finding). Workers faced wage garnishments; some filed for bankruptcy. The system required claimants to respond within 10 days to contest a determination. Settlement: $20 million in October 2022 - seven years after the determinations were issued.

MiDAS used rule-based logic, not machine learning. The specific technology doesn't change what the case demonstrates: automated determination at scale, a 93% false positive rate, no meaningful human review before flags were issued, a 10-day window for people who'd just lost income to mount a challenge, and seven years before institutional accountability arrived. The 10-day window for people who'd just lost income suggests most couldn't sustain a challenge, though individual appeal attrition data for MiDAS isn't in the public record.

**Evidence label:** Confirmed - 93% false positive rate (Michigan Auditor General); $20 million settlement (October 2022); timeline confirmed.

---

### The denial-by-friction signature

The pattern across all three cases shows up most clearly in Medicare Advantage (MA) prior authorization data.

In a single KFF analysis of 53 million MA prior authorization determinations in 2024, 11.5% of denied prior authorization requests were appealed, and 80.7% of those appeals were overturned (confirmed - KFF 2024 analysis). An earlier HHS Office of Inspector General (OIG) finding showed 75% of MA prior authorization denials appealed between 2014 and 2016 were overturned.

The two numbers are separate claims, not factors in a single equation. An 80.7% overturn rate inside the pool of contested denials indicates that the error rate among challenged denials is high. An 11.5% overall appeal rate means most denials go unchallenged. The total uncorrected error count is therefore large - but it can't be calculated by subtracting the appeal rate from 100%, because most denials may have been correct and the denominator of wrong denials is not independently established.

---

## Guardrails - and how each one failed

| Guardrail                 | What should have happened                                                    | What actually happened                                                                                                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Individual review**     | Each claim assessed against individual patient record                        | Batch processing at 1.2 seconds per case; no individual record review (confirmed - Cigna)                                                                                                   |
| **Audit trail**           | System produces a decision-specific record accessible to the affected person | No person-accessible record of which inputs, criteria, or rules drove the specific decision; UnitedHealth had to be compelled by court order to disclose algorithm documents (March 2026)   |
| **Human override**        | Reviewer with clinical file, time, and authority evaluates flagged decisions | Reviewers worked from algorithm output without access to model inputs; throughput incentives penalized slowing down                                                                         |
| **Appeal access**         | Claimants can contest with sufficient time and information                   | 10-day windows and no individual decision record provided to the claimant (MiDAS); no accessible record of which inputs drove the decision (Cigna, UnitedHealth); most people didn't appeal |
| **Regulatory disclosure** | Insurer discloses algorithmic criteria governing coverage decisions          | Criteria databases are proprietary; patients and physicians couldn't access the standards the system applied                                                                                |

---

## Where it broke

**Cigna:** 300,000 claims denied over two months. The class action is proceeding; financial harm to specific claimants is in discovery.

**UnitedHealth:** The scope of the nH Predict deployment is being established in litigation. The patient population is Medicare Advantage enrollees - older adults in post-acute care settings. The allegation is that the algorithm systematically cut off care before physicians believed it was clinically safe to do so.

**Michigan MiDAS:** 40,195 fraud flags. 37,381 of them wrong, by the Auditor General's count. Wage garnishments. Bankruptcies. Seven years to a $20 million settlement that arrived long after the financial damage was done.

The cross-case pattern: harm at scale, no correction mechanism fast enough to reach most people affected, and accountability arriving years after the damage.

**Scale check:** These aren't edge cases from early-stage systems. Cigna is one of the largest health insurers in the United States. UnitedHealth Group is the largest. Michigan MiDAS was a state government system. The architecture failure was production, not experimental.

---

## The approval theater problem

Each of these systems had a human nominally in the review chain. Cigna had physicians confirming denials. UnitedHealth had case managers. MiDAS had a 10-day contestation window.

None of those human steps functioned as a check because the reviewer had no access to what the system saw.

Ben Green's 2022 survey of 41 government algorithm oversight policies (Computer Law & Security Review; Privacy Papers for Policymakers Award) found two consistent failures: reviewers often can't perform the oversight function they're assigned, and oversight layers legitimize faulty systems rather than fix them. Green's survey covered government algorithms - criminal justice, benefits, welfare - not health insurance directly. The structural finding transfers; the specific insurance evidence comes from the study below. A 2025 peer-reviewed study by Stanford and Health Affairs researchers found that claims reviewers at major insurers often couldn't explain how AI tools worked, didn't know the tools could be biased, and couldn't identify failure modes - while expressing high confidence in their ability to use them correctly. The finding is confirmed; how broadly it generalizes across the full industry is plausible but not fully documented.

The structural reason: when there's no audit trail showing which documents the system retrieved, which sources it ranked, and what it used to reach its conclusion, the reviewer can't evaluate the decision. They're looking at an output with no visible derivation. The review is nominally present and functionally absent.

This isn't a personnel problem. Reviewers working faster won't fix it. More reviewers won't fix it. The constraint is upstream: a system that doesn't produce an auditable record of its reasoning can't be reviewed by a human who arrives after the fact.

---

## What the architecture needs to produce

Every automated decision system has a decision architecture: the inputs it considers, the criteria it applies, the rules that rank conflicting information, what it must ignore, and the log of what it actually did. The institution controls all of that. The person affected sees only the output. Whoever controls that architecture controls what counts as relevant, what gets ignored, what can be appealed, and what record exists afterward.

A Michigan resident who received a MiDAS fraud flag had 10 days to respond. To mount a challenge, they needed to know which wages were flagged, which employer records the system cross-referenced, and which rule triggered the determination. None of that was in the notice. The 10-day window existed on paper. Without the record behind the decision, it couldn't function. The four requirements below describe what would have had to be true for that window to be usable.

For systems that use LLMs, Anthropic names the distinction precisely: prompt engineering covers "methods for writing and organizing LLM instructions for optimal outcomes," while context engineering covers "strategies for curating and maintaining the optimal set of tokens during LLM inference" - the retrieved documents, source rankings, policies, memory, and exclusions the institution built in. The prompt is the visible surface the user touches. The context architecture is the institutional machinery underneath. For decisions to be contestable, that machinery has to be inspectable. The principle applies to any automated decision system, LLM-based or not.

**The right context and the right amount.** More context doesn't solve the accountability problem and can worsen the accuracy problem. A 2025 peer-reviewed study in the EMNLP Findings found that model performance degrades 13.9% to 85% as input length increases, even when the system already has the right information; the degradation comes from context length alone, independent of retrieval quality. Chroma tested 18 frontier models in July 2025, including Claude Opus 4 and GPT-4.1, and found the same pattern across all of them. The discipline is selecting and curating the right information before it enters the context window, not maximizing volume.

**What the affected person and reviewer need to see.** For a decision to be contestable, four things need to be available:

- What context the system used: which documents were retrieved, which sources ranked highest, which criteria applied
- Why that context was selected: the retrieval rules and source rankings governing what the system was and wasn't allowed to consider
- Decision rationale: which rules applied, which inputs were material, how conflicts were resolved, and which sources can be traced - not just the output
- A full audit log: a timestamped, source-linked record of what the system saw and did, with enough detail to reconstruct the decision at audit or in an appeal

A VentureBeat report on Pinecone's Nexus launch named why standard architectures can't meet these requirements: "Run the same task twice against the same data, and an agent may return different answers with no record of which sources drove either result. For enterprises where auditability is a compliance requirement, that is a structural disqualifier, not a tuning problem." Non-determinism means no audit trail exists to produce. The problem is architectural, upstream of any prompt refinement or model upgrade.

The positive model is a compiled, traceable context architecture. Andrej Karpathy, co-founder of OpenAI, documented one version in early 2026: raw source documents (immutable), a wiki the LLM maintains in human-readable markdown with explicit cross-references, and an append-only log of every ingest operation. Every claim traces to a specific source file a human can read, edit, or challenge. His system is documented at roughly 100 articles and 400,000 words, not enterprise document volume; it illustrates the principle, not a production prescription. The accountability argument is concrete: context can be traced, sources named, contradictions flagged before the query arrives, and a reviewer can inspect the full derivation. (Evidence label: plausible - practitioner writeup, high-credibility source, not benchmarked at enterprise scale.)

**Connection to the three cases.** The UnitedHealth court order in March 2026, compelling production of algorithm documents and internal communications, is a judge demanding what should have existed by design. Cigna's criteria database, used to determine medical necessity, wasn't accessible to patients or physicians contesting a denial. MiDAS claimants were given 10 days to challenge a fraud determination without access to the criteria the system applied.

_[SCOPE NOTE: The connection between context architecture failure and specific harm in these cases is structural, not causally documented. The research record does not establish that Cigna's denials resulted from context length degradation or that UnitedHealth's errors came from poor source ranking. The argument is that these systems produced opaque outputs, and the architectural standard they failed is traceable, auditable context. See Gap 1 in the research file.]_

---

## Policy environment

**California SB1120** (effective January 1, 2025): Requires insurers to have a qualified human review AI-generated medical necessity decisions. Arizona, Maryland, Nebraska, and Texas have separately banned AI as the sole decisionmaker in prior authorization or medical necessity denials. (Confirmed - enacted legislation.)

**Colorado SB 26-189** (signed May 14, 2026; effective January 1, 2027): Repealed and replaced SB 24-205, which never took effect. Covers consequential decisions including insurance (underwriting, pricing, coverage, claims adjudication), healthcare, housing, employment, lending, and government benefits. Requires a plain-language explanation of any AI system's role within 30 days of an adverse consequential decision, a right to correct factually incorrect data, and a right to meaningful human review - defined as a reviewer with authority to override, trained, who does not default to the system's output. Minimum 3-year recordkeeping. Note for insurance cases: state-regulated insurers have a safe harbor if they comply with existing sector-specific notice and disclosure requirements; whether those existing requirements satisfy the audit-record standard SB 26-189 describes is not confirmed. (Confirmed - Colorado General Assembly; multiple law firm analyses, May 2026.)

**Connecticut SB 2** (introduced 2025; not enacted): Would have imposed a duty of reasonable care on developers and deployers of high-risk AI with notice, explanation, and appeal rights for adverse decisions. Passed the Senate 50-0 in May 2025; the House did not vote. Died at the end of the 2025 legislative session.

**Connecticut SB 5 / Public Act 26-15** (signed May 11, 2026; primary provisions effective October 1, 2026): The enacted Connecticut AI law. Covers automated employment-related decision technology (AEDT) - systems that are a "substantial factor" in hiring, promotion, discipline, or discharge. Requires disclosure of AEDT use and purpose, a written explanation of adverse employment decisions, and the right to examine and correct data used. Establishes that AI is not a liability shield: an employer cannot attribute discriminatory outcomes to the system. Scope note: SB 5 is employment-scoped. Coverage of insurance denials, healthcare benefits, or consequential decisions outside employment is not confirmed in sources reviewed. (Confirmed - Connecticut General Assembly; multiple law firm analyses, May 2026.)

**NAIC Model Bulletin on AI Systems** (adopted December 2023; over half of states adopted as of December 2025): Requires insurers to maintain a written AI governance program with senior management accountability and vendor oversight, scaled to degree of potential harm to consumers. (Confirmed - official NAIC adoption.)

The NAIC launched an AI Systems Evaluation Tool in a 12-state pilot on March 2, 2026. Participating states: California, Colorado, Connecticut, Florida, Iowa, Louisiana, Maryland, Pennsylvania, Rhode Island, Vermont, Virginia, and Wisconsin. Regulators have opened the first known examination of an insurer's AI behind total-loss decisions and claims payouts under the pilot framework (auto insurance context; health insurer examinations not yet reported under the pilot). An NAIC survey found 88% of auto insurers currently use or plan to use AI to evaluate claims. Pilot results are not yet public; the pilot runs through September 2026. Formal adoption is expected at the NAIC Fall National Meeting in November 2026. (Confirmed - Autobody News, April 2026; Fenwick, April 2026.)

A new NAIC Third-Party Data and Models (TPDM) Working Group is developing a vendor registry that would extend accountability directly to vendors who build AI pipelines for insurers - closing a gap the current bulletin leaves open, since the bulletin holds insurers accountable for vendor AI but doesn't let regulators examine vendors directly. Current scope is narrowed to pricing and underwriting; claims adjudication is not in the initial scope. A model law is anticipated for 2026, with first state implementations expected in late 2026 or early 2027. (Confirmed for scope and registry approach - Mondaq, March 2026; timeline is plausible, not confirmed.)

**NIST AI Risk Management Framework (AI RMF 1.0)** (voluntary, January 2023; companion publications through 2026): Not law. The primary U.S. governance baseline for responsible AI, referenced by federal agencies, state regulators, and insurance examiners.

Two sub-practices are the strongest framework-level statements of the accountability argument here. MEASURE 2.6 requires that AI systems produce consistent, reproducible outputs; a non-deterministic pipeline that returns different answers for the same inputs with no decision record fails this standard. MANAGE 3 requires that appeal and override mechanisms exist for AI decisions affecting individuals, with a reviewer who has the authority and context to override - not merely a reviewer who is nominally present.

The framework explicitly distinguishes human-in-the-loop (procedural presence) from what Ben Green's policy analysis calls "human-in-command" (substantive oversight) - a reading grounded in NIST AI 100-1's GOVERN 1.1 and MANAGE 3 sub-practices. Those two sub-practices together require the latter. A reviewer who lacks access to the system's input context cannot exercise MANAGE 3 oversight regardless of their formal role in the process. That's the framework-level statement of the approval theater problem.

Companion: NIST AI 600-1 (Generative AI Profile, July 2024) is the most relevant companion document for AI systems using LLMs in consequential decision pipelines - 13 risk categories, more than 400 suggested actions. Note: Colorado SB 26-189 dropped the explicit NIST AI RMF mandate that existed in SB 24-205; NIST alignment is no longer a statutory safe harbor under Colorado law. (Confirmed - official NIST publications.)

**Treasury Financial Services AI Risk Management Framework** (released February 19, 2026; voluntary): A non-binding, sector-specific translation of NIST AI RMF principles into financial-services operational controls. 230 mapped control objectives, structured as a control matrix applicable to insurers. An insurer building a GOVERN 1.1-compliant program for claims adjudication would use these controls as the implementation layer - it's the nearest existing NIST-aligned framework designed for the financial sector, including insurance. (Confirmed - Treasury press release February 19, 2026.)

**EU AI Act** (in force August 2024; key provisions for high-risk systems now targeted for December 2027, following a provisional May 2026 agreement): Requires high-risk AI systems to automatically log events over their lifetime and include mechanisms for human intervention. Traceability and conformity assessment required before deployment. (Confirmed - enacted EU regulation; December 2027 deadline reflects provisional Omnibus agreement, May 2026.)

**The architectural implication:** These laws and frameworks require explanation, appeal, and audit records. A system that produces no record of which inputs drove a specific decision can't comply with what Colorado SB 26-189 and the EU AI Act will require, and fails NIST AI RMF's MANAGE 3 and MEASURE 2.6 standards - regardless of how many humans are nominally in the loop. Note: state-regulated insurers have a safe harbor under SB 26-189 if they comply with existing sector-specific disclosure requirements; whether those requirements satisfy this audit-record floor is not confirmed.

---

## Market verdict

Verdict is still forming on the two active litigation cases.

**Cigna PxDx:** Class certified, March 2025. Discovery ongoing. No financial settlement or court finding on the 80% reversal rate allegation as of May 2026.

**UnitedHealth nH Predict:** Discovery compelled, March 2026. Breach of contract claims proceeding. No court finding on the 90% appeal win rate allegation as of May 2026.

**Michigan MiDAS:** Settled October 2022 for $20 million. Seven years from determination to settlement. The Auditor General's 93% false positive finding is the established factual record.

On the regulatory side: Colorado SB 24-205 was repealed and replaced by SB 26-189, signed May 14, 2026 and effective January 1, 2027. Connecticut SB 2 did not pass; Connecticut enacted SB 5 / PA 26-15 on May 11, 2026, but that law is employment-scoped and does not appear to cover insurance or benefits decisions. The NAIC Model Bulletin enforcement pilot (January - September 2026, twelve participating states) is the first structured examination of whether insurer AI governance programs are operating as written. Results from that pilot will be the first data point on whether the policy environment is producing compliance or a new layer of compliance theater.

---

## What good looks like

### At the architecture level

A decision system that can support human oversight produces four things by design, not as a bolt-on:

- which specific inputs, criteria, and sources drove the decision (not just which the system had access to)
- why those inputs were selected: the retrieval rules, ranking logic, and policies governing what the system was and wasn't allowed to consider
- decision rationale: which rules applied, which inputs were material, how conflicts were resolved, and which sources can be traced
- a timestamped, source-linked log that can reconstruct the decision at audit or in an appeal

The three systems in this case study produced none of those things for the people they affected. Cigna's criteria database wasn't accessible to patients or physicians. UnitedHealth's algorithm documents required a court order to produce. MiDAS claimants had a 10-day window to contest a fraud flag with no access to the rules that generated it.

### For the affected person

At the time of a consequential decision, the person should receive:

- the specific grounds for the determination - not "denied: does not meet criteria" but which criteria, applied to which facts the system considered
- the inputs the system used: which documents, records, or data points were part of the decision
- a contestation path that comes with enough information to use it, in the same notice as the decision
- a contestation window long enough to gather documentation and respond

That last point is load-bearing. MiDAS issued fraud flags with a 10-day response window. A person who just lost income can't realistically build a challenge in 10 days without knowing what triggered the flag. The window and the record are both conditions for a functional appeal, not just the window.

### At the institutional level

- reviewers with access to the derivation, not just the output
- criteria and ranking logic disclosed to the affected person at the time of the decision, with a contestation window long enough to act on it

### At the policy level

- audit-record production as a condition of deployment, not a reporting requirement triggered only by complaint
- explanation and appeal rights that cover the decision record, not just notice that a decision was made
- enforcement of what Colorado SB 26-189 and the EU AI Act require; NIST AI RMF's MANAGE 3 and MEASURE 2.6 as the operational standard for what "meaningful review" and "consistent outputs" mean in practice
- third-party audit rights for AI governance programs - the NAIC TPDM vendor registry is the nearest structural proposal for reaching the vendors who build the pipelines, not only the insurers who deploy them; current scope is limited to pricing and underwriting
- insurer self-reporting paired with independent examination, not self-reporting alone; the NAIC 12-state pilot is the first test of whether written AI governance programs reflect what systems actually do

The NAIC pilot results (expected fall 2026) and EU AI Act enforcement (key high-risk provisions targeted for December 2027) are the two nearest tests of whether the compliance floor is functional or paper-based.

---

## What to do

**For institutions that deploy automated decision systems:**

- Before deploying any system where a wrong answer causes financial or medical harm, document: what the system considers and where those inputs come from, what source wins when criteria conflict, what's logged, and how an affected person can challenge the result with enough information to mount a challenge. If those answers aren't documented, the system isn't ready.
- Treat audit-record production as a design requirement. A system that can't produce source-linked decision records at the time of determination can't comply with Colorado SB 26-189 or the EU AI Act regardless of the review process above it.
- Unlogged non-determinism is a disqualifier for consequential decisions. A pipeline that returns different results for the same inputs with no record of what drove either answer can't support an appeal process.

**For people affected by these systems:**

- Ask for the written explanation of any consequential decision, and note the contestation window in the same notice. Colorado SB 26-189 requires written explanation within 30 days of an adverse consequential decision, starting January 1, 2027. Those windows close faster than the documentation needed to mount a challenge usually arrives.
- Appeal. KFF data shows 80.7% of Medicare Advantage prior authorization appeals are overturned. Most people don't appeal. The wrong denials stand.

**For policymakers:**

- Make audit-record production a condition of deployment for consequential automated decision systems.
- The NAIC Model Bulletin enforcement pilot (January-September 2026, twelve participating states) is the first structured examination of whether insurer AI governance programs are operating as written. That data will be the first signal on whether compliance is functional or a new layer of compliance theater.
- Require that denial notices include the inputs and criteria the affected person needs to mount a challenge, not just notice that the denial was issued.

---

## How to talk about it

**What it is:**

Automated denial systems that move the record of the decision out of reach. The institution controls the inputs, criteria, rankings, and logs. The affected person sees only the result. Formal appeal exists; practical appeal requires access to the record that drove the decision.

**What it is not:**

Better models won't fix it. More humans in the review chain won't fix it. The structural failure is upstream of both. A system that doesn't produce an auditable record of its reasoning can't be reviewed by anyone who arrives after the fact, regardless of how capable the model is or how many reviewers are nominally in the loop.

**Bridge language:**

- "The right to appeal only works if you can see what the system saw."
- "Adding a human reviewer to an opaque system doesn't create accountability. It creates the appearance of accountability."
- "80.7% of Medicare Advantage prior authorization appeals are overturned. Most people don't appeal. That's the gap between a right that exists and one that works."
- "The operative question: did the system keep a record the affected person can use to challenge the result?"

---

## Loop Effect

### Effect on the bad loop

- **Monthly squeeze:** Healthcare coverage denials, benefits fraud flags, and coverage cutoffs arrive fast and compound. A Medicare Advantage enrollee denied post-acute care faces both the care gap and the cost of mounting a challenge - documentation, wait times, administrative law judge queues. MiDAS fraud flags resulted in wage garnishments within weeks of the automated determination. For people without financial cushion, the squeeze arrives before any correction mechanism can reach them.

- **Insecurity:** The affected person doesn't know what the system considered, which criteria it applied, or what record exists. The information asymmetry is structural: the institution sees the full decision trail; the person cannot. You can't contest what you can't access.

- **Manipulation / scapegoats:** Automated denials at scale framed as fraud prevention or clinical necessity review. The 93% false positive rate in MiDAS, the 80.7% appeal overturn rate in Medicare Advantage - those numbers aren't visible to the person receiving the denial. What is visible is the denial and the friction of contesting it.

- **No fixes / more squeeze:** Most people don't appeal. The denials stand. The error rate doesn't self-correct because the feedback loop requires the affected person to bear the full cost of contestation to produce any signal that the system got it wrong. The cost of the wrong decision flows to the person, not the institution.

### Effect on the good loop

- **Security:** Audit records produced at the time of decision, accessible to the affected person without a court order, would let the appeal process do the work it's supposed to do. The error rate is high when people contest - 80.7% for Medicare Advantage. The bottleneck isn't the appeal outcome. It's getting to the appeal with the information needed to mount one.

- **Choice:** A person who can see what the system saw can challenge what the system got wrong. Colorado SB 26-189 is building the floor, with implementation starting January 1, 2027. Whether enforcement holds will depend on the NAIC pilot results and the first compliance actions under that law.

- **Competition:** Institutions that can't produce audit records face compliance exposure under Colorado SB 26-189 (January 1, 2027) and the EU AI Act (key high-risk provisions targeted for December 2027). That creates a market incentive for architecture that produces the required records as a structural feature, not a retrofit.

- **Shared gains:** The efficiency gains from automated processing flow to institutions. The costs fall on the people who can't contest them. Audit architecture that gives the affected person access to the same record the institution holds shifts those terms.

### Case verdict

- **Net effect right now:** Bad loop - approval theater active, accountability arriving years late and at high cost.
- **Why:** The efficiency gains are confirmed and the correction mechanism is functionally blocked for most people. 80.7% of challenged denials overturn; 11.5% get challenged. No institution is currently required to produce the decision record the appeal process needs to function.
- **What would change the verdict:** Colorado SB 26-189 enforcement (starting January 1, 2027) that makes audit-record production a binding condition of deployment; NAIC 12-state pilot results (expected fall 2026) showing that written AI governance programs are functioning as written, not as compliance theater (note: the first examination under the pilot covers P&C auto insurance total-loss decisions, not health insurance - health insurer examinations have not yet been reported, so the pilot's compliance signal is partial for the domain this case study documents); NAIC TPDM vendor registry extending accountability to pipeline vendors - if the registry scope expands from pricing and underwriting to claims adjudication, it would reach the naviHealth-type vendors that built the systems in this case; UnitedHealth discovery producing algorithm documents that establish what nH Predict's decision records contained; contestation windows extended and paired with a requirement that denial notices include the information needed to contest.

### One steady action

If you manage or procure AI systems for decisions that affect people's coverage, benefits, or income: add one question to your next vendor review. Can this system produce, at the time of decision, a source-linked record of which inputs and criteria drove the result, in a form the affected person can read? If the answer is no, the system can't meet the accountability standard the law is moving toward. That question is a more useful early-warning signal than any compliance checklist.

---

## North Star verdict

The North Star document names one condition that breaks the security loop before it starts: "if the institution can see the full decision trail and the person affected cannot, the system is tilted before the argument even starts."

These cases show that condition at scale. Cigna could see what PxDx flagged. Patients couldn't. UnitedHealth could see nH Predict's projections. Physicians and patients couldn't access the criteria. Michigan could see MiDAS's fraud flags. Claimants got a 10-day window and no individual record explaining what triggered their specific determination.

When 80.7% of challenged denials are overturned but only 11.5% of denials get challenged, the uncorrected error volume is large even if the precise share of wrong denials can't be stated. That pattern reflects asymmetric information access, compressed timelines, and friction distributed in one direction - as a foreseeable consequence of how the systems were optimized.

**Three honest complications.** First: the three cases prove adjacent but distinct things. Cigna and UnitedHealth demonstrate the opacity-to-no-audit-trail-to-no-contestability chain: decisions made from inputs no one could inspect, producing outcomes no one could challenge without the information needed to do so. MiDAS demonstrates something different: bad rules enforced at speed with no pre-enforcement individual review produce mass harm regardless of whether an audit trail exists. Better audit logging wouldn't have prevented MiDAS's 93% false positive rate - it would have produced 40,195 auditable records of the same wrong answer. What the cases share is the absence of a correction mechanism fast enough to reach most people affected. Second: the technology varies. MiDAS was rule-based logic. PxDx was a database lookup. nH Predict was a predictive model. The failure isn't technology-specific. Third: litigation is proceeding in two of the three cases. The 80% Cigna reversal rate and the 90% UnitedHealth appeal win rate are lawsuit allegations, not court findings. The structural argument doesn't rest on them. It rests on the confirmed 80.7% MA appeal overturn rate (KFF), the confirmed 93% MiDAS false positive rate (Michigan Auditor General), and the confirmed 1.2 seconds per case (Cigna-provided data, ProPublica).

The counter-case is that accountability is arriving through litigation and regulation - but the pattern this case establishes is that accountability arrives years late and at high cost, after most people affected have already absorbed the harm with no correction.

**System lesson in one sentence:** A decision system that doesn't produce an auditable record of its reasoning can't be reviewed - by a court, a regulator, or the person the decision was about.

---

_[RESEARCH GAP: The specific financial harm to individual Cigna claimants is not yet in the public record; discovery is ongoing. The full scope of the nH Predict deployment - total patients affected, total denials attributed to the algorithm - is also in discovery and not publicly established. The mechanism by which nH Predict incorporated or failed to incorporate individual patient context is alleged but not yet adjudicated.]_

---

## Receipts appendix

Evidence is labeled inline throughout this case study. This table is a reference index.

[Full Research Document](../../07-notes/research/ai-impact/_research-prompting-ui-context-architecture.md)

| ID     | Claim                                                                                                                                                                                                                  | Strength                                                                   | Source                                                                       |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| AD-001 | Cigna PxDx denied ~300,000 claims over two months in 2022; 1.2 seconds average review time                                                                                                                             | Confirmed                                                                  | ProPublica investigation; Cigna-provided data                                |
| AD-002 | Cigna PxDx class action certified March 2025                                                                                                                                                                           | Confirmed                                                                  | Court records, E.D. Cal.                                                     |
| AD-003 | 80% reversal rate on Cigna PxDx appeals                                                                                                                                                                                | Lawsuit allegation - not a court finding                                   | Cigna PxDx class action complaint                                            |
| AD-004 | UnitedHealth nH Predict trained on 6 million patient records; used for Medicare Advantage post-acute care decisions                                                                                                    | Confirmed                                                                  | Lokken v. UnitedHealth Group; STAT News "Denied by AI" series                |
| AD-005 | Patients won 90%+ of nH Predict appeals                                                                                                                                                                                | Lawsuit allegation - not a court finding                                   | Lokken v. UnitedHealth Group                                                 |
| AD-006 | Court ordered UnitedHealth to disclose algorithm documents and internal communications                                                                                                                                 | Confirmed                                                                  | Court order, Lokken v. UnitedHealth Group, March 2026                        |
| AD-007 | Michigan MiDAS issued 40,195 automated fraud determinations, October 2013 - September 2015                                                                                                                             | Confirmed                                                                  | Michigan Auditor General report                                              |
| AD-008 | 93% of MiDAS fraud determinations did not involve fraud                                                                                                                                                                | Confirmed                                                                  | Michigan Auditor General                                                     |
| AD-009 | Michigan MiDAS settlement: $20 million, October 2022                                                                                                                                                                   | Confirmed                                                                  | Bauserman v. Unemployment Insurance Agency                                   |
| AD-010 | 11.5% appeal rate for Medicare Advantage prior authorization; 80.7% of those appeals overturned                                                                                                                        | Confirmed                                                                  | KFF analysis of 53 million MA prior authorization determinations, 2024       |
| AD-011 | 75% of MA prior authorization denials appealed 2014-2016 were overturned                                                                                                                                               | Confirmed                                                                  | HHS Office of Inspector General                                              |
| AD-012 | Claims reviewers at major insurers couldn't explain AI tools, didn't know AI could be biased, expressed high confidence                                                                                                | Confirmed                                                                  | Stanford and Health Affairs study, 2025                                      |
| AD-013 | Model performance degrades 13.9-85% as input length increases even when the system has the correct information                                                                                                         | Confirmed - peer reviewed                                                  | EMNLP Findings, 2025                                                         |
| AD-014 | 18 frontier models (including Claude Opus 4 and GPT-4.1) show consistent degradation; open methodology                                                                                                                 | Confirmed - open methodology, not peer reviewed                            | Chroma engineering study, July 2025                                          |
| AD-015 | 41 government algorithm oversight policies: reviewers often can't perform the assigned function; oversight layers legitimize faulty systems                                                                            | Confirmed - peer reviewed                                                  | Ben Green, Computer Law & Security Review, 2022                              |
| AD-016 | Non-deterministic pipelines return different answers for the same inputs with no record of which sources drove either result                                                                                           | Confirmed                                                                  | VentureBeat report on Pinecone Nexus launch                                  |
| AD-017 | NAIC 12-state pilot launched March 2, 2026; participating states named; first AI claims examination opened under pilot                                                                                                 | Confirmed                                                                  | Autobody News, April 2026; Fenwick & West, April 2026                        |
| AD-018 | 88% of auto insurers currently use or plan to use AI to evaluate claims                                                                                                                                                | Confirmed                                                                  | NAIC survey, cited Autobody News, April 2026                                 |
| AD-019 | NAIC pilot results not yet public; pilot runs through September 2026; formal adoption expected NAIC Fall Meeting November 2026                                                                                         | Confirmed                                                                  | Fenwick & West, Alston & Bird, April 2026                                    |
| AD-020 | NAIC TPDM Working Group developing vendor registry; initial scope limited to pricing and underwriting, not claims adjudication                                                                                         | Confirmed for scope and registry approach                                  | Mondaq, March 2026 (NAIC Spring 2026 meeting report)                         |
| AD-021 | NIST AI RMF MANAGE 3 requires appeal/override mechanisms; MEASURE 2.6 requires consistency/reproducibility; GOVERN 1.1 + MANAGE 3 together require what Ben Green calls "human-in-command," not just human-in-the-loop | Confirmed (sub-practices); Green (2022) for "human-in-command" terminology | NIST AI 100-1, January 2023; Ben Green, Computer Law & Security Review, 2022 |
| AD-022 | NIST AI 600-1 (Generative AI Profile, July 2024): 13 risk categories, 400+ suggested actions for GenAI systems                                                                                                         | Confirmed                                                                  | NIST AI 600-1 official publication                                           |
| AD-023 | Treasury Financial Services AI RMF: 230 mapped control objectives translating NIST AI RMF into financial-services operational controls; released February 19, 2026; voluntary                                          | Confirmed                                                                  | Treasury press release, February 19, 2026; Lowenstein Sandler analysis       |
| AD-024 | Colorado SB 26-189 dropped the explicit NIST AI RMF mandate that existed in SB 24-205; NIST alignment is no longer a statutory safe harbor under Colorado law                                                          | Confirmed                                                                  | Carpe Datum Law, May 2026; Colorado General Assembly, SB 26-189              |

**Strength rubric:** Confirmed = primary source, court record, or peer-reviewed finding | Lawsuit allegation - not a court finding = alleged in complaint; no court determination | Confirmed - peer reviewed = published in peer-reviewed venue | Confirmed - open methodology, not peer reviewed = methodology disclosed and replicable, not peer reviewed
