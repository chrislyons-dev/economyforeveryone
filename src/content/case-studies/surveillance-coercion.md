---
title: 'AI and Surveillance + Coercion (Government + Workplace)'
bucket: 'stress-test'
corePattern: 'When surveillance becomes too cheap to limit and too opaque to contest, formal punishment becomes unnecessary because friction, chilling effects, and selective pressure do the work.'
studyDate: 2026-03-10
eventWindowStart: 2015-01-01
eventWindowEnd: 2026-03-10
status: 'published'
summary: 'Cheap sensing, scoring, and enforcement can reshape behavior without any visible trial or explicit command. The key failure is not only accuracy; it is the loss of contestability, auditability, and realistic exit when surveillance is embedded into ordinary systems.'
claim: 'AI-driven surveillance becomes coercive when it lowers the cost of monitoring and punishment faster than institutions build rights, audit trails, and meaningful recourse.'
evidenceLevel: 'medium'
policyDomain:
  - 'civil-liberties'
  - 'labor-market'
  - 'technology-governance'
  - 'consumer-protection'
tags:
  - 'ai'
  - 'surveillance'
  - 'workplace'
  - 'government'
  - 'rights'
  - 'coercion'
  - 'contestability'
receiptTags:
  - 'primary-documents'
  - 'official-data'
  - 'independent-analysis'
sources: []
---

- [AI and Surveillance + Coercion (Government + Workplace)](#ai-and-surveillance--coercion-government--workplace)
  - [1. One scene](#1-one-scene)
  - [2. What's happening](#2-whats-happening)
  - [3. The mechanism](#3-the-mechanism)
  - [4. Why it's happening](#4-why-its-happening)
  - [5. Control stack](#5-control-stack)
  - [6. Evidence](#6-evidence)
  - [7. Governance + procurement](#7-governance--procurement)
  - [7a. Vendor concentration and procurement lock-in (Module 7)](#7a-vendor-concentration-and-procurement-lock-in-module-7)
  - [7b. Four governance checks](#7b-four-governance-checks)
  - [8. Safety/reliability overreach check](#8-safetyreliability-overreach-check)
  - [9. Shared gains test](#9-shared-gains-test)
  - [10. What to do](#10-what-to-do)
  - [11. What good looks like](#11-what-good-looks-like)
  - [Research gaps](#research-gaps)
  - [North Star Verdict](#north-star-verdict)
  - [Bridge language](#bridge-language)

---

## 1. One scene

A rideshare driver gets a notification: account deactivated. No explanation. No appeals phone number with a person who will pick up. He calls anyway. Then emails. Then submits in-app messages. Over several weeks, he makes dozens of contacts. In two-thirds of cases like his, no helpful response comes (ACRE, March 2025 -- 727 surveyed deactivated drivers). The platform's internal appeal system reverses about 10% of deactivations. Seattle's independent arbitration system reverses 80%.

The algorithm fired. The human channel absorbed the complaint. The process produced no review.

Three miles away, a ShotSpotter alert fires at 1:38 AM. Officers are dispatched to a block in a majority-Black neighborhood -- 1 minute and 38 seconds faster than a 911 call. No gun, no crime, no shell casing. One of 87 similar alerts this month that will turn up nothing (NYPD Comptroller audit, June 2024). The people on that block were not charged. They were also not told they were flagged. There is no mechanism for them to find out, let alone contest it.

Two systems. Two industries. Same structure: automated flag, nominal human review, no functional appeal, friction cost absorbed by the person at the bottom.

---

## 2. What's happening

AI and data-aggregation systems have made surveillance cheap enough to run continuously, at scales where formal adjudication -- charges, hearings, appeals -- would be economically or politically impossible. The result is coercion without punishment: selective pressure, chilling effects, and friction costs that fall entirely on the people being watched, while enforcement agencies and employers pocket the efficiency gains.

This is not inevitable. Where specific governance rules exist -- Detroit's facial recognition settlement, Seattle's gig-worker arbitration, Illinois BIPA's private right of action -- outcomes improve. The problem is not the technology. It is the absence of minimum floors, and the pace at which deployment has outrun the rules.

**What the helpful version looks like:** Surveillance systems that improve public safety without coercion share three features: (1) defined, named use cases with prohibited expansions written into contracts; (2) independent corroboration before any enforcement action; (3) audit logs that the contracting agency -- not only the vendor -- can inspect. Seattle's gig-worker arbitration system is the documented positive example in this file: an independent appeal path that reverses 80% of algorithmic deactivations, vs. 10% on the platform's own internal path. [already cited]

**Why it usually doesn't happen:** Surveillance expands to its lowest-governance context. When a system is deployed for one purpose (gunshot detection), the data and infrastructure are already present for other purposes (immigration enforcement, workplace monitoring). The expansion does not require a new procurement decision -- it requires only the absence of a prohibition. And prohibitions are rarely written in at the time of initial deployment.

**What makes the helpful version more likely:** Procurement contracts that name prohibited uses, require independent audit rights, and attach data-portability and termination rights. The absence of these terms is not a technical gap -- it is a political and procurement choice that can be changed at the next contract cycle.

---

## 3. The mechanism

### Which power shifts, and how

The research file (Section 0a) frames this as a cost asymmetry. Surveillance tools reduce the marginal cost of flagging, scoring, or tracking individuals to near zero. Institutions use that capacity to monitor at scales where case-by-case adjudication is impossible. Enforcement then operates through selective pressure -- audits, stops, deactivations, border detentions -- rather than through formal process.

The category matters. What produces coercive effects is not the compute method (ML vs. rules-based vs. data aggregation). It is the combination of scale, opacity, and low contestability. Three categories appear in the evidence:

- **AI-assisted:** system generates flag or score; human nominally reviews before action. Review quality varies.
- **Automated enforcement:** system triggers action directly or near-directly; human review is nominal or post-hoc.
- **Data aggregation:** no ML inference; bulk collection and cross-agency query creates coercive capacity through volume and coverage.

### Thesis boundary conditions

The mechanism described in this case study holds most strongly when four conditions are present:

1. The surveilled population has limited political voice or legal resources.
2. The enforcement action is not subject to prior judicial review.
3. The appeal mechanism is administrative rather than judicial.
4. The optimization target is volume or cost rather than accuracy.

Where any of these conditions is relaxed, the mechanism weakens. Detroit's corroboration requirement relaxes condition 4; Illinois BIPA's private right of action relaxes conditions 2 and 3; the EU AI Act's prohibition structure relaxes conditions 2 through 4; Seattle's independent arbitration relaxes condition 3. These are not exceptions that undermine the argument -- they are the evidence for what governance interventions actually work.

### Accuracy failures vs. rights failures

These are distinct. Both matter. Neither substitutes for the other.

**Accuracy failures** (wrong output):

- ShotSpotter: 87% of NYPD alerts unconfirmed (2024 audit); Chicago system missed 40%+ of confirmed shootings in its coverage area (Type Investigations, October 2024).
- PredPol: prediction accuracy below 0.6% for robbery and assault in Plainfield, NJ (The Markup, October 2023).
- Facial recognition: NIST found Black and Asian faces misidentified 10-100x more than white faces; 7+ confirmed wrongful arrests in the US, nearly all Black individuals.
- ImmigrationOS targeting accuracy: not independently auditable — still in prototype phase.

**Rights failures** (defective process, regardless of accuracy):

- Flock Safety ALPR: 3.96 million queries of one city's database in 13 months; no crime predicate required before query executes; individuals have no mechanism to know they were queried, let alone contest it.
- Platform deactivation: income termination without formal adjudication; Prop 22 removes NLRA grievance rights in California; appeal channel absorbs volume without functioning as review.
- ImmigrationOS: targeting decision precedes any legal proceeding; individual cannot contest before enforcement action, even if the underlying data contains errors.
- Amazon Time Off Task (TOT): discipline triggered without documented human review of individual context; no worker access to the TOT record before action. Amazon disputes the characterization.

An accuracy fix does not resolve a rights failure. A system can misidentify at low rates and still operate with no meaningful contest right. Accuracy arguments and rights arguments are separate -- one cannot carry the other.

**Surveillance data enables precision persuasion.** The location, behavioral, and social network data collected for enforcement purposes is the same data used for targeted political ad delivery, influence operations, and algorithmic narrative control. Commercial data brokers sell the same location databases to ICE and to political campaigns. Workplace monitoring data that predicts deactivation risk can also predict union-organizing likelihood. The coercion pathways and the epistemic influence pathways share a substrate -- they are not separate problems with separate data. This matters for the E4E loop: when surveillance-scale data collection feeds precision persuasion, the chilling effect on organizing and political participation operates even without a formal enforcement action. The same contractual prohibited-use categories that limit enforcement misuse also limit secondary persuasion use -- they are the same lever, applied at the procurement stage. The scale of crossover use for political persuasion from this specific data hasn't been independently measured, but the mechanism is real. This is the same precision persuasion mechanism documented in the content flood trust-collapse section, accelerated by a surveillance-scale data substrate.

### The three coercion pathways

**Pathway 1: Public safety (ShotSpotter / predictive policing)**

A ShotSpotter acoustic sensor classifies a sound as a gunshot and transmits an alert to dispatch. Officers are deployed in approximately 1 minute and 38 seconds faster than 911 calls. That speed means the officer arrives with no mechanism to reject the alert or access the system's confidence score before responding -- a consequence that is plausible given dispatch design, though not independently confirmed through documented officer review protocols. In 87% of NYPD dispatches in 2024, no confirmed shooting was found. Officers spent 20-32 minutes investigating each unfounded alert (NYPD Comptroller audit, June 2024). The individuals encountered in those locations were not charged, but they were also not entitled to notice, explanation, or appeal. No feedback loop corrects the algorithm's performance based on non-confirmation. ShotSpotter is deployed in majority-Black and Latino neighborhoods in reviewed cities; false-alert encounters concentrate in those communities.

Philadelphia's AI-assisted targeted policing, which used human-reviewed offender-focused lists rather than area-wide automated alerts, was associated with a 42% violent crime reduction in the study area (DOJ, December 2024). This is a single jurisdiction and the methodology has not been independently replicated. It did not exhibit the volume-without-accuracy pattern documented in ShotSpotter and PredPol deployments.

**Pathway 2: Immigration / benefits enforcement (ImmigrationOS, Flock, commercial data)**

ICE purchases commercial location data from data brokers without obtaining warrants -- a mechanism confirmed by a September 2023 DHS Inspector General audit. Flock Safety's network of approximately 90,000 license plate reader cameras performs 20 billion monthly vehicle scans across 7,000 law enforcement networks; local agency data has been accessed by ICE for immigration enforcement at scale, including 4,000+ documented lookups. The $30 million Palantir ImmigrationOS contract (awarded April 2025) aggregates passport records, SSA and IRS data, and ALPR records to prioritize deportation. The targeting decision precedes any judicial review; if the underlying data contains an error -- a misidentified license plate, a wrong SSN association -- the individual may not be able to discover or contest it before detention. How accurately the ImmigrationOS system prioritizes targets hasn't been independently verified.

Downstream: peer-reviewed research documents that Hispanic adults reduced preventive healthcare-seeking following increased ICE activity in their state (Health Affairs). A 2025 study found a 16.9% decline in health provider visits for likely authorized Hispanic immigrants following Secure Communities (ScienceDirect). The chilling effect operates without a single formal charge. These studies measure the behavioral response to enforcement visibility broadly, not to algorithmic tracking specifically. The causal contribution of AI surveillance tools to this effect requires inference at the margin.

**Pathway 3: Workplace / gig (Uber/Lyft deactivation; Amazon TOT)**

Uber and Lyft monitor driver behavior continuously -- acceptance rate, cancellations, ratings, route adherence. An algorithm generates a deactivation flag. The driver may or may not receive an explanation; HRW found nearly half of surveyed deactivated workers said no adequate explanation was provided (May 2025). Deactivation is immediate income termination. Prop 22 in California eliminates NLRA grievance rights. The internal appeal channel -- 1,735+ calls, 1,458+ emails, 1,580+ in-app messages -- produced no helpful response in two-thirds of cases (ACRE, March 2025). Seattle's independent arbitration reversed 80% of deactivations. The platform's internal NYC review reversed approximately 10%. The governance structure, not the facts of each case, determines the outcome.

At Amazon warehouses, the TOT system tracks time between scans, transit time between zones, bathroom breaks, and medical episodes. Warnings accumulate toward discipline or termination algorithmically. The Senate HELP Committee (December 2024) found Amazon knew its productivity standards caused injuries and did not change them. Amazon warehouse workers were injured at a rate 30% above the industry average in 2023; in each of the past seven years, Amazon workers were nearly twice as likely to be injured as workers at non-Amazon warehouses. Amazon disputes these findings and claims fewer than 1% of workers are terminated for TOT; it does not disclose the override rate or review process.

---

**Accountability laundering.** Across all three pathways -- public safety, immigration enforcement, and workplace -- no single entity is named as accountable for the harm when a system produces a wrongful outcome. The officer points to the alert. The agency points to the vendor contract. The vendor points to the data broker. The data broker points to the phone user who "voluntarily" shared location with a weather app. The individual at the end of the chain -- wrongfully stopped, detained, or deactivated -- has no accountable party to contest with and no legal path that does not require litigation. The fix requires assigned decision ownership at the institutional level: the agency or employer that acts on an AI output owns the accountability for the action, regardless of vendor architecture. See Levers (Section 7). This is the same laundering pattern documented in claims eligibility, where the complexity of the UM vendor chain shields the denial from any single accountable owner.

### Mechanisms and Mechanism Modules

Below, **mechanisms are the reusable failure patterns**. Each mechanism has **Mechanism Modules**: short inserts you can drop into any case study, blog post, or policy note.

#### Mechanism 1: Contestability collapse

When actions happen fast, cheaply, and at scale, "human review" becomes a routing step, not a decision.

- **Module 1.1: Human Command (minimum floor)**
  - _If AI affects a life outcome, you get:_ **notice, reason, appeal, records, and a human override.**
  - Where this case study hits: gig deactivation, workplace discipline, watchlists, immigration targeting.

- **Module 1.2: Rubber-stamp proxies (how to measure it)**
  - Use proxies when override-rate data is withheld: time-to-action, independent corroboration, appeal reversal rate, audit-log review, KPI incentives, kill-switch authority.
  - Where this case study hits: ShotSpotter dispatch speed; platform deactivation reversal rates (internal vs. independent); "human-on-the-loop" systems where review is operationally impossible.

#### Mechanism 2: Exit / captivity

If you can't leave without losing your job, your phone, your status, or your safety, you don't have a market relationship -- you have captivity.

- **Module 2.1: Exit test**
  - "Can a normal person walk away in under 30 days without catastrophic loss?"
- **Module 2.2: Switching cost checklist**
  - Income dependence, credential lock-in, geographic constraint, legal exposure, retaliation risk, identity/documentation friction.

Where this case study hits: gig workers (income), immigrants (status), protest surveillance (retaliation/chilling effects).

#### Mechanism 3: Gate shift (trust + distribution)

As fraud and synthetic media rise, institutions tighten gates. The gate becomes the product. False positives land on the people with the least paperwork power.

- **Module 3.1: Provenance (content)**
  - When a claim matters, require provenance: source, time, chain-of-custody, and tamper-evident logs.
- **Module 3.2: Personhood and credentials (people)**
  - _When the flag defines you, identity becomes coercion._

  Key anchors already in this case study:
  - Biometric misidentification and demographic error gaps (NIST findings; wrongful arrests).
  - Detroit's corroboration-before-arrest settlement as a concrete governance counterexample.
  - **FinCEN FIN-2023-A003** on deepfakes used to defeat identity verification -- leading to tighter gates that can exclude legitimate people.

Minimum floor insert for this mechanism:

- Log every identity query (who, when, predicate, outcome).
- Require **independent corroboration** before any high-stakes action based on an automated match.
- Make identity actions contestable: notice + reason + appeal + record access + human override.

#### Mechanism 4: Asymmetric logs

Institutions can see you. You can't see the system. That asymmetry is where abuse hides.

- **Module 4.1: Audit/log checklist**
  - Query logs with actor ID + timestamp + predicate + outcome; independent review; retention schedule; public reporting.
- **Module 4.2: Records access and retention**
  - Individuals can request records about themselves; retention is long enough to support appeals; deletion rules don't become a cover-up.

Where this case study hits: ALPR networks, commercial location data purchases, internal workplace monitoring, "black box" platform appeals.

#### Mechanism 5: Scale without adjudication

When the system can flag a million times, you cannot adjudicate a million times. The result is coercion without formal punishment.

- **Module 5.1: Enforcement-without-adjudication metrics**
  - Alert volume, false-positive rate, time cost imposed on the public, and reversal/appeal outcomes.
- **Module 5.2: Corroboration rule**
  - No single signal triggers a high-stakes action alone. Require a second independent signal or a named human reviewer _before_ action.

Where this case study hits: ShotSpotter non-confirmation rates; mass query systems; "flag-first, explain-later" immigration and workplace pipelines.

#### Mechanism 6: Skill atrophy

If humans stop practicing judgment, they lose it. Then the system becomes the only "expert" left.

- **Module 6.1: Manual flight checks**
  - Regular "no automation" drills; second-look reviews; random audits where humans must justify decisions without the tool.
- **Module 6.2: Learning-work quotas**
  - Explicit time allocation for training, review, and independent verification -- protected from throughput metrics.

Where this case study hits: dispatch/officer reliance on automated alerts; HR and operations teams trained to process flags, not evaluate them.

#### Mechanism 7: Bottlenecks / market power

Surveillance scales because a few vendors/data brokers become the pipe. Once the pipe exists, it gets repurposed.

- **Module 7.1: "Where does power sit?" map**
  - Map the vendor, the buyer, the downstream users, and who can veto use.
- **Module 7.2: Shared gains test**
  - "Who gets the savings? Who eats the risk?" If savings concentrate and risk externalizes, you're building extraction.

Where this case study hits: data brokers, ALPR networks, and platform governance that keeps reversal/override rates private.


#### Mechanism 8: Control loops

_When automation becomes the environment, mistakes become life outcomes and appeals become post-hoc._

- **Module 8.1: Safe-fail + kill switch**
  - Clear authority to suspend outputs; automatic suspension triggers on error spikes; rollback procedures.
- **Module 8.2: Incident review and rate limits**
  - Unfounded actions generate a structured record; rate caps trigger review when volume makes real review impossible.

Key anchors already in this case study:

- ShotSpotter as "sensor -> dispatch" with minimal pre-action review window.
- Cross-domain parallels: 737 MAX MCAS and Uber AV (automation-as-default-operator; override defeated by design/speed).
- Concrete minimum floors: single-signal prohibition, kill switch, incident review, audit logs, rate limits, Human Command.

**Agentic action and the rights-accuracy distinction.** Mechanism 8 addresses control loops; this makes explicit why speed makes the rights failure irreversible. When ShotSpotter dispatches in 1m38s, ImmigrationOS targeting precedes judicial review, and Amazon TOT discipline accumulates before any human review triggers, the system is not recommending -- it is acting. Post-hoc appeals are the only remedy, and they arrive after the life outcome (encounter, detention, income termination) has already occurred. An accuracy improvement does not resolve this: a system can be accurate on average and still strip pre-action contest rights from every individual it acts on. Where pre-action review is operationally impossible due to speed, the alternatives are rate limits, mandatory sampling with post-hoc audit, and delayed enforcement pending review. The corroboration rule and Human Command floor in Section 5 are the direct countermeasures for the cases where pre-action review is possible. This is the same "action without adjudication" pattern documented in claims eligibility, applied to government enforcement and employment.

---

### Legacy numbering note (deprecated)

Earlier drafts referenced "M1--M4" (and, in places, labels like "Module 8" or "Module 3.2"). This case study now treats those as **Mechanism Modules** under the mechanism they belong to (e.g., control-loop content under **Mechanism 8**, personhood/credentials under **Mechanism 3**).

## 4. Why it's happening

Three incentives drive the current pattern.

**Cost asymmetry.** Surveillance automation drives the institution's per-unit enforcement cost toward zero. The cost of contesting a flag -- time, legal access, documentation -- stays on the individual. Institutions have no built-in financial incentive to reduce false-positive rates or improve contestability. The incentive runs the other direction.

**Governance lag.** Legal frameworks exist in isolated jurisdictions. NYC Local Law 144 requires bias audits of automated hiring tools; a December 2025 NY State Comptroller audit found one violation identified across two years and 32 surveyed companies. The EEOC withdrew AI hiring guidance on January 27, 2025, and a Trump executive order directed the EEOC to deprioritize disparate-impact enforcement. Illinois BIPA's private right of action produced $206 million in 2024 settlements; a 2024 amendment capped damages per person rather than per scan, and lawsuit volume fell 34% in 2025. The EU AI Act's prohibitions on real-time biometric identification and social scoring became binding February 2, 2025; no US federal equivalent exists.

**Optimization for throughput, not accuracy or rights.** PredPol was optimized for patrol deployment -- accuracy below 1%. Flock Safety was optimized for data sharing at scale -- 80+ agencies used discriminatory search terms including ethnic slurs without crime predicate review (EFF, 2025). Amazon TOT is optimized for productivity measurement -- the system cannot distinguish a bathroom break from a deliberate work stoppage. Detroit's post-settlement policy -- requiring independent corroborating evidence before any facial recognition arrest -- has produced no documented wrongful arrests since the 2024 settlement. The optimization target determines the outcome.

The villain is not law enforcement or employers as such. It is an incentive structure that makes surveillance cheap to deploy and expensive to contest, combined with governance that has not kept pace with deployment.

---

## 5. Control stack

### Human-in-the-loop vs. human-on-the-loop vs. human-in-command

| System                                  | Formal role                   | Functional role                                                                                                                      | Assessment                                                                 |
| --------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| ShotSpotter / predictive policing       | Human-on-the-loop             | Officer dispatched with no pre-dispatch alert review; no confidence score access                                                     | Human-on-the-loop at best                                                  |
| Facial recognition (most jurisdictions) | Human-in-the-loop             | Reviewer sees algorithmic match and photo; no access to model confidence, training data, or historical error rate for this algorithm | Rubber-stamp conditions present outside Detroit                            |
| Flock Safety ALPR                       | Human-on-the-loop / absent    | Queries run without documented crime predicate review; discriminatory search terms entered without filtering                         | Human absent at query layer                                                |
| ImmigrationOS / Palantir                | Human-in-command (formally)   | Data aggregation and prioritization precede and shape enforcement decision; no pre-action due process                                | Human-in-command in name; targeting criteria not contestable before action |
| Gig platform deactivation               | Human-in-the-loop (nominally) | Appeal channel absorbs contact volume; 1,735+ calls with no helpful response in 2/3 of cases                                         | Rubber-stamp confirmed by ACRE data                                        |
| Amazon TOT                              | Automated enforcement         | Flag-to-discipline pipeline; no documented human contextual review between flag and action                                           | Human absent from decision                                                 |

### Module 1.2: Rubber-stamp proxies (how to measure it)

_(If you can't get override-rate data, use proxies that reveal whether review is real or theater.)_

Where override-rate data is unavailable (all reviewed US systems), these proxies signal whether human review is substantive:

- **Time-to-action:** Is the window between flag and enforcement action consistent with substantive review? ShotSpotter: 1 min 38 sec to dispatch -- no mechanism to reject pre-dispatch. Platform deactivation: can be immediate.
- **Independent corroboration requirement:** Does policy require evidence beyond the algorithmic flag before action? Detroit: yes (settlement-mandated). All other reviewed systems: no documented requirement.
- **Appeal channel throughput:** What fraction of appeals result in reversal? Internal platform review (NYC): ~10%. Independent arbitration (Seattle): 80%. The channel structure determines the outcome.
- **Audit log existence:** Are all queries logged with actor ID, timestamp, stated predicate, and outcome? Flock: partial (log exists; not reviewed pre-execution). ImmigrationOS: not publicly documented. Amazon TOT: not disclosed. Commercial data (DHS OIG): supervisors did not review audit logs.
- **KPI structure:** Are reviewers evaluated on throughput or accuracy? Unknown for all reviewed systems. Plausible that volume incentives dominate.
- **Kill switch authority:** Is there a documented process for suspending system output pending review? Chicago ended ShotSpotter by political decision -- no automatic trigger. Amazon TOT: none documented for workers.

No reviewed US government surveillance contract passes this checklist. The EU AI Act is the only framework in force with prohibition-level minimums for the highest-risk categories. Detroit's 2024 litigation-produced settlement is the closest US example of a binding accuracy-plus-corroboration standard.

---

## 6. Evidence

### Confirmed

- ShotSpotter: 87% of NYPD alerts unconfirmed (NYPD Comptroller audit, June 2024); Chicago missed 40%+ of confirmed shootings in coverage area (Type Investigations, October 2024); Chicago ended contract September 2024.
- PredPol: below 0.6% prediction accuracy for robbery/assault in Plainfield, NJ (The Markup, October 2023); LAPD dropped without measurable effectiveness; Geolitica filed for bankruptcy 2023.
- Facial recognition wrongful arrests: 7+ confirmed US cases, nearly all Black individuals; NIST: 10-100x higher misidentification rate for Black and Asian faces; NYPD Trevis Williams wrongful arrest and $200K settlement, August 2025; Detroit 2024 settlement requires independent corroborating evidence before arrest.
- Flock Safety: ~90,000 cameras, 7,000 networks, 20 billion monthly scans (company disclosure); 80+ agencies used discriminatory search terms including ethnic slurs without crime predicate (EFF, June 2024 - October 2025); Illinois state law violated; AG audit launched; 30+ localities canceled Flock contracts in early 2026.
- Palantir ImmigrationOS: $30 million contract, April 2025; scope includes passport, SSA, IRS, and ALPR data (USASpending.gov); Trump administration expanded ICE access to IRS/SSA databases; Supreme Court lifted lower court block on DOGE/SSA access. [See plausible block: former employee guardrail claims.]
- DHS OIG audit (September 2023): CBP, ICE, and Secret Service violated federal privacy law purchasing commercial location data without privacy impact assessments; employee password sharing; no audit log review; one confirmed data misuse; ICE resumed purchases via 2025 PenLink/Webloc contract; FTC ordered Venntel to stop illegal location data sales (January 2025).
- Platform deactivation: ACRE (727 drivers, March 2025) -- 68% never reactivated; 1,735+ calls and 1,458+ emails, no helpful response in 2/3+ of cases; HRW (413 gig workers, May 2025) -- one-third deactivated at least once; AALDEF found practices "unfair" (October 2025); Seattle independent arbitration: 80% overturn; platform internal NYC review: ~10% overturn. [See also plausible block: HRW finding on error rate.]
- Amazon warehouses: injury rate 30% above industry average in 2023; nearly 2x non-Amazon warehouses each of past 7 years (Senate HELP, December 2024); Amazon knew productivity standards caused injuries and did not change them; Amazon manipulated injury benchmarks; 54% of workers report production rate makes bathroom use difficult (Oxfam, 2024).
- NYC LL144 enforcement: one compliance violation identified across two-year enforcement period; 32 companies surveyed (NY State Comptroller, December 2, 2025); EEOC AI hiring guidance withdrawn January 27, 2025; Trump EO directed EEOC to deprioritize disparate-impact enforcement; Illinois BIPA amended to cap damages per person (August 2024); BIPA lawsuit volume fell 34% in 2025.
- EU AI Act biometric identification and social scoring prohibitions: effective February 2, 2025; no US federal equivalent.
- Chilling effects on healthcare: Hispanic adults reduced preventive care-seeking following ICE enforcement activity (Health Affairs, peer-reviewed); 16.9% decline in health provider visits for likely authorized Hispanic immigrants following Secure Communities (ScienceDirect, 2025, peer-reviewed).
- Fusion centers used for pro-Palestine student surveillance in 2024; multiple universities received HSI briefings on student protest activity (The Intercept, November 2025; Clemson institutional document confirmed). (Specific documented cases -- Clemson, multiple universities; national scope plausible but no comprehensive audit of all fusion centers.)

### Plausible (single source, advocacy-adjacent sample, or inferential)

- Nearly half of deactivated gig workers described their deactivation as a mistake (HRW, May 2025 -- worker self-report; not platform-verified).
- 13 former Palantir employees stated in a public open letter that internal guardrails were violated (public open letter; not independently verified).
- PredPol racial bias feedback loop: targeting communities with prior arrest concentration amplifies over-policing rather than detecting crime where it occurs. Mechanism documented inferentially; mechanism applies to any tool trained on arrest rather than crime incidence data.
- Gig deactivation disproportionately affects Black, Latinx, and immigrant workers (ACRE 2025; directional; platform-disclosed demographic breakdown does not exist).
- Flock Safety data used at national scale for immigration enforcement (confirmed in Virginia and Illinois; Washington state investigation found Border Patrol access to 18+ state agency networks; national-scale use plausible given contract structure).
- Amazon TOT algorithmic termination without human contextual review (documented in worker accounts and Senate testimony; Amazon has not disclosed override rate or review process).
- Behavioral change in surveilled populations at population scale in US protest context (documented qualitatively; no peer-reviewed population-level quantification as of research date).
- Philadelphia AI-assisted targeted policing: 42% violent crime reduction in study area (DOJ December 2024 report). Single jurisdiction, methodology not independently replicated, disparate impact not assessed. Does not falsify the thesis; shows that better-targeted tools with human-reviewed lists can avoid the volume-without-accuracy pattern.

### Unknown

- Override rates: what percentage of algorithmic enforcement flags are reversed by human reviewers before action. Not disclosed by any platform or agency reviewed.
- ImmigrationOS prioritization accuracy: what percentage of flagged individuals are in categories actually subject to lawful removal. Not independently auditable (prototype phase).
- False arrest rate from facial recognition broadly: seven confirmed wrongful arrests is a lower bound; actual misidentification-caused enforcement that did not produce public documentation or settlement is unknown.
- Time-per-flag: how long human reviewers spend on algorithmic enforcement flags before approving action. No documented data across any reviewed system.

### Disconfirming evidence (preserve, do not soften)

- **Detroit 2024 settlement:** The post-settlement corroboration requirement has produced no documented wrongful arrests in approximately one year. This is the strongest available evidence that a specific, enforceable governance rule can change outcomes. Boundary: one department, one year, litigation-produced -- not a generalizable procurement standard.
- **Philadelphia targeted policing (plausible):** AI-assisted offender-focused policing associated with 42% violent crime reduction in one study area (DOJ December 2024). Single jurisdiction, methodology not independently replicated, disparate impact not assessed. Weak disconfirming evidence -- does not falsify the thesis but shows better-targeted systems can reduce crime without the volume-without-accuracy pattern.
- **Illinois BIPA private right of action:** Produced $206 million in 2024 settlements before the damage cap amendment. Demonstrates that financial deterrence works when properly structured -- and that weakening deterrence (the August 2024 cap) directly reduces compliance behavior (34% lawsuit volume drop in 2025).
- **Seattle just-cause arbitration:** 80% deactivation overturn rate, vs. ~10% in internal platform review. The governance structure determines the outcome, not the underlying facts of the cases.

---

## 7. Governance + procurement

### What's missing

No reviewed US government surveillance contract contains all six minimum floor elements. The matrix (research file, Section 9):

| System                    | Audit logs                                        | Override rights                                  | Prohibited-use limits                                                        | Accuracy benchmarks                                    | Kill switch                   | Data portability              |
| ------------------------- | ------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------- | ----------------------------- |
| ShotSpotter (NYPD)        | None binding                                      | None pre-dispatch                                | None documented                                                              | None in contract                                       | None automatic                | Agency can cancel             |
| Flock Safety              | Partial (not reviewed pre-execution)              | None before query                                | None enforced; Illinois violated                                             | None                                                   | Individual cancellation only  | Not public                    |
| ImmigrationOS / Palantir  | Not documented                                    | ICE agent decides; no independent override       | None (non-criminal categories in scope)                                      | None public                                            | None                          | None (individual captive)     |
| Commercial data (DHS OIG) | Not present; supervisors didn't review            | None; warrantless purchase                       | None enforced; violations confirmed                                          | None                                                   | None                          | None for individuals          |
| Gig platform deactivation | Internal; not disclosed                           | Internal: ~10% reversal. Independent: 80%.       | None external                                                                | None external                                          | None for workers              | Theoretical exit; constrained |
| Amazon TOT                | Internal; not disclosed                           | Dispute, no documented process                   | None                                                                         | None public                                            | None for workers              | Workers can quit              |
| NYC LL144 AI hiring tools | Bias audit required by law; enforcement deficient | Candidate cannot challenge AEDT before decision  | NYC only                                                                     | Impact ratio required; enforcement confirmed deficient | None; EEOC guidance withdrawn | N/A                           |
| Detroit (settlement)      | Implied                                           | Independent corroboration required before arrest | Face recognition not sole basis                                              | Corroboration substitutes                              | Settlement-enforced           | N/A                           |
| EU AI Act                 | Required (August 2026 deadline)                   | Mandatory human oversight for high-risk AI       | Real-time biometric ID prohibited (narrow exceptions); social scoring banned | Required risk management and validation                | Implied                       | Data portability required     |

### What enforceable contract language looks like

Any government surveillance procurement should include:

1. **Audit log:** All enforcement queries logged with officer ID, timestamp, stated crime predicate, and outcome -- reviewed by an independent party, not only the deploying agency.
2. **Override right:** Designated human authority can suspend system output pending independent review; authority documented and delegated before deployment, not after an incident.
3. **Prohibited-use categories:** Contract names datasets and query types that require additional review (e.g., queries on protected characteristics without documented crime predicate; federal immigration enforcement using local data contracts for local crime detection).
4. **Accuracy benchmark:** System must maintain false-positive rate below a stated threshold; failure triggers mandatory review or automatic suspension -- not a political decision.
5. **Kill switch authority:** Agency head or designated official can suspend system access pending accuracy or rights review; suspension is automatic if audit log shows prohibited use.
6. **Data portability:** Agency owns its data and can migrate to an alternate system; vendor cannot withhold historical data on contract end.

No US government surveillance contract reviewed contains all six. Detroit's 2024 litigation-produced settlement is the closest existing example of a binding accuracy-and-corroboration standard.

The absence of these clauses is not technical. It is a procurement and political choice.

---

## 7a. Vendor concentration and procurement lock-in (Module 7)

_When bottlenecks are concentrated, efficiency gains don't become shared gains -- they become bargaining power._

### Where market power lives in this case

The surveillance infrastructure described in this case study is not primarily built from government-built systems. It runs on a concentrated vendor substrate. Three vendors -- Palantir (data aggregation and targeting), Axon (body cameras, evidence management, Tasers), and ShotSpotter/Versaterm (acoustic detection) -- account for the majority of documented large-scale surveillance procurement in US law enforcement. Flock Safety has achieved a near-monopoly position in license plate reader (ALPR) networks, with approximately 90,000 cameras across 7,000 law enforcement networks as of 2025.

A fourth layer sits underneath all of them: commercial data brokers who aggregate location data, financial records, and behavioral signals and sell them to government agencies. The DHS OIG audit (September 2023) confirmed that CBP, ICE, and Secret Service purchased commercial location data from brokers without proper privacy impact assessments or legal authority review -- and that supervisors did not review audit logs of those purchases. ICE resumed similar purchases through a 2025 PenLink/Webloc contract.

The data broker substrate is the structural lock-in that no individual vendor cancellation can address. Chicago ended its ShotSpotter contract in September 2024 -- but ICE can still access Flock Safety ALPR data across the same geographic area through a network contract. A jurisdiction that cancels one vendor does not exit the surveillance infrastructure; it exits one node.

### How lock-in operates

**Palantir / ImmigrationOS:** The $30 million ImmigrationOS contract (April 2025) aggregates passport records, SSA and IRS data, and ALPR records into a single targeting system. Once that aggregation is built, the government's ability to enforce immigration law at current scale depends on maintaining the Palantir contract and the data broker relationships that feed it. The individual agency cannot replicate this capability internally; portability to an alternate vendor would require rebuilding data pipelines across federal and commercial sources. The switching cost is not financial -- it is operational. That switching cost is leverage Palantir holds in every future contract negotiation.

**Flock Safety:** Local agencies that adopt Flock's ALPR network are joining a shared network. The network's value -- including cross-jurisdictional lookup and the data accumulated from 20 billion monthly scans -- is held by Flock, not by any individual jurisdiction. If a jurisdiction cancels, it loses access to the network's historical data and cross-agency query capability. That accumulated data is not portable. (Data retention and portability terms vary by jurisdiction and haven't been uniformly confirmed in public contract language.)

**DHS commercial location data purchases:** Purchasing location data from brokers is legally framed as a market transaction -- no warrant required because the data was "voluntarily" shared by phone users with apps (confirmed by the DHS OIG audit, September 2023, and subsequent court findings). This framing means there is no procurement contract to audit or cancel in the normal sense. The government is a retail customer. The levers that apply to government contracts (audit rights, termination clauses, prohibited uses) do not automatically apply to commercial data purchases. The FTC ordered Venntel to stop illegal location data sales (January 2025) -- but ICE's 2025 contract with PenLink/Webloc shows the purchase mechanism continues through alternate brokers.

### What these levers actually produce

The same dynamics that produce vendor lock-in also constrain reform. When audit log requirements are missing from a contract, the vendor is not obligated to produce them. When termination rights are absent, a jurisdiction that discovers misuse cannot exit without losing accumulated data. When prohibited-use categories are not named, the vendor can expand use without triggering a violation. Every governance gap in the procurement contract is also a governance gap for accountability.

The EFF documented that 80+ Flock Safety agency users entered discriminatory search terms, including ethnic slurs, without crime predicate review (EFF, June 2024 to October 2025). This was discovered through external investigation, not through any internal vendor monitor or agency audit log review. The system produced no alert. The vendor contract contained no prohibition that would have made the practice a contract violation. 30+ localities canceled Flock contracts in early 2026 -- but the network continues to operate.

### Levers

- **Public reporting requirements:** Vendors with government contracts covering more than a defined number of residents must publish quarterly reports: number of queries by agency, query types, outcomes, and data retention periods. No reviewed contract contains this requirement.
- **Audit rights:** Government agencies must have the contractual right to commission independent audits of vendor systems, logs, and data practices. Audit findings must be available to designated oversight bodies, not only the contracting agency.
- **Retention limits:** Contracts must specify maximum data retention periods, with automatic deletion after the period expires. Flock Safety's retention terms vary by jurisdiction and aren't consistently disclosed in public contract language.
- **Prohibited uses:** Contracts must name datasets and query types that require additional authorization (immigration enforcement using local crime-detection contracts; queries on protected characteristics without documented crime predicate). Violation is a contract breach triggering automatic suspension of access.
- **Termination rights with data return:** Agencies must be able to terminate contracts and receive their data -- queries, outcomes, flags -- in a portable format. Vendors cannot withhold historical records as a condition of termination.
- **Commercial data purchase restrictions:** Congress or agency rulemaking should require that commercial data purchases for law enforcement purposes meet the same Fourth Amendment predicate standards as warrant-based requests. The FTC action against Venntel points toward the mechanism; it is not yet a binding rule for government purchasers.

**One thing to do:** If your city or county is renewing or signing a surveillance vendor contract, ask procurement staff whether the contract includes (a) the agency's right to commission an independent audit at its own discretion, (b) data portability on termination -- meaning the agency gets its query logs and outcome records back in a usable format -- and (c) a named prohibited-use category requiring additional authorization. These are standard contract terms in other technology procurement. If staff say the vendor will not accept them, that refusal is the finding -- document it and raise it at the next public hearing.

---

## 7b. Four governance checks

These four boxes apply to every system covered in this case study. They are a quick test of whether a deployment meets the minimum floor on contestability, exit, auditability, and shared gains.

---

> **Box 1: Human Command check**
>
> The minimum floor: if AI or automated surveillance affects a life outcome, the person it affects gets five things.
>
> | Check                                                             | Status in reviewed US systems                                                                                                                                                                                                                                                                                                                                                                                         |
> | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | **Notice** -- does the surveilled person receive it?              | No. In no reviewed system does a person receive notice that they were flagged by a predictive policing, ALPR, or gunshot detection system. Platform deactivation: notice exists (deactivation message), but reason is often absent or unintelligible.                                                                                                                                                                 |
> | **Reason** -- plain language, actionable?                         | No for government surveillance (no notice means no reason). Platform deactivation: reason is sometimes provided; HRW found approximately half of surveyed workers described no adequate reason. Amazon TOT: reason is a productivity metric; contextual explanation is not documented.                                                                                                                                |
> | **Appeal** -- is there a real path to contest?                    | Formally, sometimes. Functionally, rarely. Detroit post-settlement: arrest based on facial recognition requires corroborating evidence -- indirect protection, not a direct appeal mechanism for the flagged individual. Platform deactivation: internal channel reverses ~10% (NYC); independent arbitration reverses 80% (Seattle). Government surveillance: no pre-action appeal exists in any reviewed US system. |
> | **Records** -- does the person have access to what was collected? | No documented US system gives the surveilled person access to their flag record, query log, or the data used to produce a predictive score. BIPA in Illinois gives individuals a right to request disclosure of biometric data held by private companies; it does not apply to government systems.                                                                                                                    |
> | **Human override** -- who can do it, how fast, is it logged?      | Inconsistent. Detroit: a human reviewer must document corroborating evidence before arrest. All other reviewed government systems: no documented pre-action human override requirement. Platform deactivation: a human reviewer nominally exists; override rate and process are undisclosed. Amazon TOT: no documented override process between flag and discipline.                                                  |
>
> **Assessment:** No reviewed US government surveillance system passes all five criteria. Detroit post-settlement meets one (corroboration as a proxy for override before arrest). The EU AI Act Article 14 requires human oversight, monitoring, and a stop function for high-risk AI systems -- effective August 2026, with no US federal equivalent.

---

> **Box 2: Exit check**
>
> The question: can a normal person opt out of being surveilled? If exit is not realistic, governance burden rises -- institutions must provide the protections that exit would otherwise enable.
>
> | Context                                                                             | Exit available?                                                                                                                                                                                                                                                                                           |
> | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | Public surveillance (ALPR, facial recognition, gunshot detection)                   | No. A person who walks, drives, or lives in a covered area is surveilled. There is no opt-out. Flock Safety cameras cover 7,000 law enforcement networks across the US. A person cannot know which streets are covered or request removal from the database.                                              |
> | Immigration enforcement (ImmigrationOS, commercial location data)                   | No. An immigrant whose phone location data was sold to a broker and purchased by ICE has no notice of the purchase and no mechanism to correct errors in the aggregated record before enforcement action.                                                                                                 |
> | Workplace surveillance (Amazon TOT, gig deactivation)                               | Theoretical. Workers can quit. Re-employment at comparable wages and conditions is not documented at scale. Platform deactivation is immediate income termination; platform concentration limits effective alternatives in many markets.                                                                  |
> | Pro-democracy / political activity (fusion center surveillance, protest monitoring) | No. Fusion centers used for pro-Palestine student surveillance in 2024; multiple universities received HSI briefings on protest activity. Students and activists cannot opt out of fusion center monitoring without abandoning protected activity. |
>
> **Assessment:** Exit is unavailable for public surveillance and immigration enforcement. Exit is theoretically available but structurally constrained for workplace surveillance and political monitoring. Where exit is not realistic, the governance burden on institutions is higher -- notice, reason, appeal, records, and override are not optional supplements. They are the substitutes for the exit right the person cannot exercise.

You cannot opt out of public surveillance. You cannot decline to have your license plate read as you drive. You cannot choose not to appear in a city's camera network. You cannot opt out of an employer's productivity monitoring as a condition of keeping your job. This is total captivity -- and total captivity changes what governance has to do. In competitive markets, a bad actor loses customers. In captive surveillance markets, there is no market discipline. The governance burden must be higher precisely because the exit option does not exist. This is the E4E loop applied directly: no exit -> no market correction -> higher capture risk -> governance must substitute for competition.

---

> **Box 3: Audit and logs check**
>
> The question: what is logged, who can see it, and can the affected person use it to contest a decision?
>
> | System                    | What is logged                                            | Who can see it                                                     | Can the person contest using the log                                                                        |
> | ------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
> | ShotSpotter (NYPD)        | Alert events; dispatch times                              | Agency internal                                                    | No -- no individual notification; no access mechanism                                                       |
> | Flock Safety ALPR         | Query events (partial); outcome not consistently recorded | Agency internal; not reviewed pre-execution per NYPD audit pattern | No -- no individual notification or access mechanism                                                        |
> | ImmigrationOS / Palantir  | Not publicly documented                                   | ICE agent / agency internal                                        | No -- targeting decision precedes any formal proceeding                                                     |
> | Commercial data (DHS OIG) | Not present; supervisors did not review                   | Not present                                                        | No -- individual has no knowledge of purchase                                                               |
> | Gig platform deactivation | Internal; not disclosed to workers                        | Platform internal                                                  | Limited -- BIPA gives biometric disclosure rights in IL; no equivalent for behavioral monitoring logs       |
> | Amazon TOT                | Internal; not disclosed                                   | Amazon internal                                                    | No -- workers have no access to TOT record before discipline                                                |
> | Detroit (post-settlement) | Implied by corroboration requirement                      | Independent review implied                                         | Indirect -- corroboration requirement constrains arrest; does not give individual access to the flag record |
>
> **Assessment:** Asymmetric logs are the structural constant across every reviewed system. Institutions collect and retain; individuals cannot access or contest. The closest US example of meaningful log access is BIPA's biometric disclosure right for private companies in Illinois -- not replicated in government surveillance systems. The EU AI Act requires logging and traceability for high-risk systems (Article 12) and gives affected individuals the right to request human review of AI decisions affecting them. No US federal equivalent exists.

---

> **Box 4: Shared gains check**
>
> The question: did the deployment reduce harm measurably? Did costs to the surveilled population fall? Did ladders stay open? Who captured the gains?
>
> | Question                                                                                             | Result                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Supporting evidence                                                                                            |
> | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
> | Did the deployment reduce harm (crime, fraud, workplace injury) measurably?                          | Mixed. Philadelphia AI-assisted targeted policing: 42% violent crime reduction in one study area (DOJ, December 2024) -- single jurisdiction, methodology not independently replicated. ShotSpotter Chicago: missed 40%+ of confirmed shootings in coverage area; Chicago ended contract. PredPol: below 0.6% prediction accuracy in Plainfield, NJ; LAPD dropped. Amazon TOT: injury rate 30% above industry average; Senate HELP found Amazon knew productivity standards caused injuries and did not change them. | Philadelphia result is a single jurisdiction, not independently replicated. ShotSpotter and PredPol accuracy failures are documented. Amazon injury rate is documented by Senate HELP and industry comparison data. |
> | Did costs to the surveilled population fall (fewer false stops, faster appeals, lower injury rates)? | No documented instance in reviewed systems. False-alert encounters concentrate in majority-Black and Latino neighborhoods. Platform deactivation: 68% of drivers were never reactivated; no documented reduction in erroneous deactivations. Amazon injury rate: above industry average for seven consecutive documented years.                                                                                                                                                                                      | No documented improvement across reviewed systems.                                                                                                                    |
> | Did ladders stay open (junior investigative roles preserved)?                                        | No trend data. Plausible that algorithmic tool operation has reduced demand for entry-level investigative and patrol analysis roles; not independently documented in this case study's evidence base. Gig deactivation: eliminates an income rung without warning or alternative.                                                                                                                                                                                                                                    | Not independently documented for investigative roles. Gig deactivation effect is documented.                                                                                   |
> | If gains exist, who captured them?                                                                   | Institutions. Surveillance automation reduces per-unit enforcement cost for agencies and employers. Contest and appeal burden remains entirely on the individual target. No documented mechanism by which surveillance efficiency has produced measurable benefit for workers, gig workers, or surveilled communities.                                                                                                                                                                                               | Cost asymmetry documented. No shared-gain mechanism documented.                                                    |
>
> **Assessment:** The shared gains test fails across all four measures for the surveilled population. Efficiency gains from surveillance automation accrue to institutions. The Philadelphia targeted policing result is a genuine disconfirming data point -- it shows that better-targeted, human-reviewed AI-assisted tools can reduce crime without the volume-without-accuracy pattern. It is a single jurisdiction, not yet replicated, and it does not address the rights questions (notice, appeal, records) that a shared gains standard requires. A deployment that reduces crime while maintaining zero individual contestability still fails this test.

---

## 8. Safety/reliability overreach check

- **Deployment beyond validated conditions:** PredPol was deployed in cities with no published validation of accuracy in those environments. ShotSpotter was deployed in Chicago while its data showed it missed over 40% of confirmed shootings within its coverage area -- beyond any reasonable safety standard for a system used to direct armed response. Facial recognition was deployed without operational accuracy benchmarking in field conditions; NIST testing is controlled-environment only. Seven confirmed wrongful arrests are consistent with operational error rates exceeding validated laboratory conditions.
- **Drift monitors:** No documented drift monitoring for any predictive policing tool reviewed. Flock Safety: no internal alert on discriminatory query patterns -- the EFF identified discriminatory search terms through external investigation, not a vendor or agency monitor.
- **Fallback mode:** ShotSpotter and PredPol had no documented fallback mode. Cities operated without a documented pre-AI baseline patrol allocation for comparison. If the system goes down or produces obviously wrong output, there is no documented protocol for reverting to prior practice.
- **Kill switch:** Chicago ended ShotSpotter by political decision -- no automatic trigger. Flock Safety: individual jurisdictions can cancel, but the shared national network continues. Amazon TOT: no documented kill switch on the automated discipline pipeline.

The pattern across systems: deployment expanded faster than validation; no agency reviewed had a documented process for detecting drift or triggering suspension based on accuracy data.

---

## 9. Shared gains test

| Question                         | Result                                       | Evidence                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Did prices fall?                 | No                                           | Surveillance cost falls for institutions; friction and contest cost rises for surveilled individuals. No documented price reduction in any major consumer cost category attributable to surveillance adoption.                                                                                                                                                                                                         |
| Did wages rise?                  | No                                           | No documented mechanism by which platform adoption has produced wage increases for gig workers; Prop 22 removes the formal wage floor and grievance path. Amazon warehouse wages have not increased relative to documented injury risk.                                                                                                                                                                                |
| Did time-cost / admin drag fall? | For institutions: yes. For individuals: no.  | Surveillance automation reduces per-unit enforcement cost for agencies and employers. Contest and appeal burden remains entirely on the individual target.                                                                                                                                                                                                                                                             |
| Did ladders stay open?           | No                                           | Algorithmic gig deactivation without recourse eliminates an income rung without warning or formal process. Amazon productivity quota escalation and injury rates reduce tenure and eliminate advancement opportunity over time.                                                                                                                                                                                        |
| Can people contest decisions?    | Formally: sometimes. Functionally: rarely.   | BIPA litigation right preserved (but weakened); face recognition post-Detroit settlement; EEOC right-to-sue letter available. Platform deactivation: functional contestability near zero (ACRE evidence). Predictive policing: no individual notification of being flagged. ImmigrationOS: targeting decision precedes any formal proceeding.                                                                          |
| Can people exit / switch?        | Theoretical for some; impossible for others. | Gig workers: platform concentration and contractor status constrain exit. Surveilled populations (immigrants, activists, journalists): cannot opt out of public surveillance infrastructure. Amazon warehouse workers: can quit; re-employment at comparable wages not documented at scale.                                                                                                                              |

**Result:** Fails on all six measures for the surveilled population. Efficiency gains from surveillance automation accrue entirely to the surveying institution. No documented mechanism by which surveillance efficiency has been shared with workers, gig workers, or surveilled communities.

---

## 10. What to do

### One personal action

Ask your local city council or county board whether any surveillance contracts (license plate readers, facial recognition, gunshot detection, predictive policing tools) contain: (a) an audit log reviewed by an independent party, (b) a stated false-positive limit, and (c) an automatic kill switch if the limit is breached. If the answer is no to any of these, request that procurement staff add them at contract renewal. This is a routine procurement ask, not a political one. Naming specific contract clauses is more likely to get a real response than a general objection -- it gives staff something actionable to bring back to the vendor.

### One procurement / policy lever

Require an independent corroboration standard before enforcement action on any AI-generated flag -- modeled on Detroit's 2024 settlement. This means: no arrest, detention, or account deactivation based on an algorithmic output alone. A named human reviewer must document independent evidence before action is taken. Note: this lever applies to government surveillance procurement. It does not directly govern private platform deactivation, which requires separate tools -- labor law reform granting NLRA-equivalent grievance rights, or independent arbitration mandates modeled on Seattle's structure.

**Failure mode:** The corroboration requirement becomes paper compliance -- signed off by a supervisor who sees only the system's output and a form to approve. The Detroit model works because the settlement created litigation exposure for non-compliance. A policy without a private right of action or automatic penalty for violation is a speed bump, not a floor. The enforcement mechanism matters as much as the rule itself.

---

## 11. What good looks like

The goal is not surveillance-free institutions. Law enforcement can use pattern analysis. Employers can track output. Platforms can monitor quality signals. The question is who bears the cost of errors, who can contest a flag, and who has the power to suspend a system that is demonstrably not working.

Good looks like this:

- **Government contracts include all six minimum floor elements** -- audit logs reviewed by an independent party, override rights documented before deployment, prohibited-use categories enforced automatically, accuracy benchmarks with automatic suspension triggers, kill switch authority in writing, and data portability for the agency.
- **No enforcement action based on an algorithmic flag alone.** An independent human reviewer documents corroborating evidence. This is the Detroit standard. It is achievable. Detroit adopted this standard following a settlement. No documented wrongful facial recognition arrest has occurred there since. No other US department has adopted the equivalent standard.
- **Independent appeal channels for consequential decisions.** Seattle's 80% overturn rate, compared to approximately 10% in platform-internal NYC review, is most consistent with the conclusion that governance structure -- not the underlying facts of individual cases -- determined outcomes in the internal channel. When the appeal channel is genuinely independent, it functions.
- **Private right of action with meaningful deterrence.** Illinois BIPA produced $206 million in settlements when the per-scan damages structure applied. When the damage cap was reduced, compliance dropped. The deterrence structure has to match the deployment scale.
- **Procurement, not legislation alone, as the enforcement point.** San Francisco's facial recognition ban was circumvented by officers requesting scans from other jurisdictions. A prohibition without audit-log requirements and cross-jurisdictional coordination does not prevent use. Enforceable contract language closes the gap that legislation leaves open.

The benchmark: a deployment that passes the six-element checklist, maintains documented accuracy above a stated threshold, and allows the surveilled individual to know they were flagged, see the basis for the flag, and contest it through a channel that has meaningful reversal authority.

---

## Research gaps

- **Override rates.** No agency or platform reviewed discloses what percentage of algorithmic enforcement flags are reversed by human reviewers before action is taken. The absence of this data is itself a governance finding.
- **Time-per-flag.** How long human reviewers spend on algorithmic enforcement flags before approving action hasn't been documented publicly for law enforcement or platform deactivation systems. The equivalent data for insurance claims review (1.2 seconds per Cigna claim) has no parallel in this domain.
- **ImmigrationOS accuracy.** As of the research date the system was in prototype phase. False-positive rate for non-criminal targeting categories is unknown and not independently auditable.
- **AI surveillance and protest participation.** The chilling effect of surveillance on political activity has been documented qualitatively; no peer-reviewed population-level study exists attributing the effect specifically to AI surveillance tools.
- **Cross-platform deactivation sharing.** Whether gig platforms share deactivation records with each other -- and its effect on functional exit -- hasn't been confirmed publicly.
- **Flock Safety retention terms.** Data retention periods vary by jurisdiction. Whether historical location data is accessible to ICE/DHS beyond the documented cases in Virginia, Illinois, and Washington state isn't publicly confirmed.

---

## Loop Effect

### Effect on the bad loop

- **Monthly squeeze:** Wrongful enforcement triggers legal costs, lost wages, and healthcare disruption that land entirely on the individual. Chilling effects reduce preventive healthcare-seeking (16.9% decline in provider visits for likely-authorized Hispanic immigrants following Secure Communities -- confirmed). Gig deactivation is immediate income termination with no notice period.
- **Insecurity:** Total captivity -- no exit from public surveillance, no notice of being flagged, no mechanism to contest before action -- is the operational definition of insecurity. The 87% NYPD non-confirmation rate and 68% permanent deactivation rate document what that insecurity produces at scale.
- **Manipulation / scapegoats:** Surveillance tools are disproportionately deployed in communities of color. The resulting "crime data" can be used to justify further deployment and to redirect blame from structural causes to surveilled communities. The algorithm's visibility gap -- what it surfaces vs. what it misses -- shapes the narrative.
- **No fixes / more squeeze:** Accountability laundering (officer -> agency -> vendor -> data broker) ensures no party owns wrongful outcomes. Governance lag means each new deployment cycle outpaces the accountability structures still catching up to the last one.

### Effect on the good loop

- **Security:** Independent corroboration rules before high-stakes action, audit logs accessible to oversight bodies, public false-positive reporting, and independent arbitration (Seattle model reversed 80% of deactivations) would reduce arbitrary enforcement.
- **Choice:** Exit from public surveillance is not available. Regulatory substitutes -- notice, reason, appeal, records, human override -- are the only available mechanism where exit is structurally impossible.
- **Competition:** Anti-monopoly rules for surveillance vendor markets, portability and data-return requirements in contracts, and open competitive bidding would reduce the lock-in that converts vendor relationships into governance relationships.
- **Shared gains:** No documented instance where surveillance efficiency savings were shared with surveilled communities. Philadelphia targeted policing (42% violent crime reduction -- plausible, single jurisdiction) is the one genuine counterexample showing human-reviewed AI-assisted tools can produce shared safety gains.

### Case verdict

- **Net effect right now:** Bad loop.
- **Why:** Surveillance automation drives the institution's per-unit enforcement cost to near zero while the cost of contesting a flag -- time, legal access, documentation -- stays on the individual. The optimization target is volume and throughput, not accuracy or rights. Detroit's corroboration requirement and Seattle's independent arbitration show that governance interventions work; they are not yet the norm.
- **What would change the verdict:** Mandatory corroboration before any high-stakes action, prohibited-use categories in every procurement contract, public quarterly reporting on query volume and false-positive rates, independent audit rights, and data portability on contract termination.

### One steady action

- At the next city council meeting where a surveillance vendor contract comes up for renewal, ask whether the contract includes: (a) independent audit rights at the agency's discretion, (b) published false-positive reporting, and (c) named prohibited-use categories. If staff say the vendor will not accept these terms, document that refusal and raise it at the next public hearing.

---

## North Star Verdict

Unchecked surveillance + automated coercion is a **direct hit** to the E4E North Star because it reduces **security** (people can be punished without warning), reduces **choice** (fear becomes the "incentive"), and concentrates **power** in institutions that control the sensors, the models, and the logs.

This can only be compatible with the North Star if it is treated as a **high-stakes system** with a hard minimum floor:

- **Human Command**: if an automated system affects a life outcome, you get **notice, reason, appeal, records, and a human override**.
- **Exit where feasible**: if you can't exit, you're captured -- so the burden shifts to stronger due process and independent oversight.
- **Symmetric visibility**: the person affected can see enough of the decision record to contest it, and independent auditors can reconstruct what happened.
- **Safe-fail controls**: rate limits, kill switches, incident reviews, and penalties for "enforcement without adjudication."

If those conditions aren't met, the "efficiency" gains are mostly **extraction and compliance at scale**, not shared gains.

## Bridge language

How to talk about this when the audience isn't already convinced:

- "The harm usually isn't that someone is watching you. It's that you were flagged, and you can't find out, and there's no one to call."
- "When a system generates 87% false alerts and there's no feedback loop that corrects it, the people on those blocks are absorbing the cost of a system that isn't working."
- "Detroit's settlement required a second independent signal before any arrest from a facial recognition match. That's not a burden -- that's the standard of evidence that's supposed to apply anyway."
- "When a city ends its ShotSpotter contract but ICE still accesses the license plate reader network, canceling one vendor doesn't exit the infrastructure. The levers have to be in the contracts, not just the headlines."
- "Gig deactivation and government surveillance look different, but the structure is the same: an algorithm fires, the human channel absorbs the complaint, and the process produces no review."