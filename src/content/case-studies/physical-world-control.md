---
title: 'Physical World Control: When AI Steers the Infrastructure You Cannot Avoid'
bucket: 'stress-test'
corePattern: 'AI moves from advising to actuating in physical systems. The system sets the route, pace, access, or load first, while the affected person has little practical ability to contest or override it.'
studyDate: 2026-03-28
eventWindowStart: 2023-01-01
eventWindowEnd: 2026-03-28
status: 'published'
summary: 'As AI moves from recommendation to actuation in logistics, utilities, buildings, and transport, the power shift is not just technical. Operators hold the logs and the override path while workers, residents, riders, and pedestrians absorb the failure costs.'
claim: 'AI control of physical infrastructure becomes dangerous when systems can act first, operators control the records, and affected people lack real notice, appeal, and override rights.'
evidenceLevel: 'medium'
policyDomain:
  - 'technology-governance'
  - 'consumer-protection'
  - 'labor-market'
  - 'infrastructure'
tags:
  - 'ai'
  - 'infrastructure'
  - 'automation'
  - 'accountability'
  - 'transport'
  - 'logistics'
  - 'contestability'
receiptTags:
  - 'primary-documents'
  - 'official-data'
  - 'independent-analysis'
sources: []
---

- [The System Decided](#the-system-decided)
  - [At a glance](#at-a-glance)
  - [1. Four scenes](#1-four-scenes)
  - [2. What's happening](#2-whats-happening)
  - [3. Why it's happening - the mechanisms](#3-why-its-happening---the-mechanisms)
  - [4. Where it broke - evidence against the good story](#4-where-it-broke---evidence-against-the-good-story)
  - [5. Where it held - evidence that guardrails can work](#5-where-it-held---evidence-that-guardrails-can-work)
  - [6. Human Command test and Exit test](#6-human-command-test-and-exit-test)
  - [7. Shared Gains test](#7-shared-gains-test)
  - [8. Minimum floor](#8-minimum-floor)
  - [9. What to do](#9-what-to-do)
  - [Loop Effect](#loop-effect)
  - [North Star verdict](#north-star-verdict)
  - [Research gaps](#research-gaps)

---

## At a glance

- **What changed:** AI in physical infrastructure moved from analysis and recommendation to direct actuation - setting routes, pacing workers, managing grid loads, controlling building access, scheduling transit, dispatching autonomous vehicles.
- **Where power moved:** To the operator who controls the system and holds its logs. Away from the worker, resident, rider, or pedestrian on the receiving end of its decisions.
- **The hinge question:** Who eats the failure? In every sector covered here, the answer is the same: the person with the least exit and the least leverage. Then ask: can they contest it while it's happening? And can anyone prove what happened after? Those are three separate gaps - and all three are currently open in US federal regulation.
- **The oversight illusion:** Human supervisors exist at every layer. In practice, the rate is set by algorithm; the route runs through the fire zone; the vehicle passes the school bus again. The human's authority is nominal.
- **Who bears the failure costs:** Workers (injury, deactivation), residents (discriminatory screening, inaccessible appeal), pedestrians (AV incidents), riders (equity gaps in AI transit). Efficiency gains flow to operators.
- **What the minimum floor asks for:** Mandatory logs accessible to the affected party and to regulators. Meaningful override capacity with documented authority. Real appeal rights - not a link to an automated system.

---

## 1. Four scenes

**Scene 1: Utilities**

A family in a Texas suburb enrolled in their retail provider's demand response program two years ago in exchange for a $10 monthly credit. On a August afternoon, the temperature hits 104 degrees. The program's AI automatically reduces their smart thermostat's cooling capacity during a peak demand window. The notification arrives by text fifteen minutes before the event starts.

Their elderly father is visiting. They want to opt out. The opt-out process requires logging into the provider's app, navigating to the demand response settings, and submitting a request - during the same fifteen minutes they are trying to get the app to load on a spotty cell signal.

The system steered. There was a nominal opt-out. There was no practical one.

**Scene 2: Logistics**

An Amazon delivery driver in Big Bear Lake, California gets his algorithmically generated route for the day. The route runs through a wildfire evacuation zone. He calls dispatch. Dispatch tells him to continue delivering.

His pace is set by algorithm. His route is set by algorithm. Escalation was not provided. He drives into the smoke. [confirmed: Futurism / The Next Web]

Meanwhile, at a fulfillment center in the same company's network, workers are meeting algorithmically set productivity quotas that their supervisors cannot override without triggering a performance flag on the supervisor. The Senate HELP Committee's December 2024 investigation found Amazon had internally documented the link between its quota requirements and elevated injury rates. Amazon's warehouse injury rate was 80% higher than its own target for 2025. [confirmed: Senate HELP Committee December 2024; OSHA December 2024]

The system steered. The supervisor was present. The supervisor had no practical authority.

**Scene 3: Buildings**

_This scene is an illustrative composite built from documented patterns in the SafeRent litigation and confirmed AI tenant screening discrimination cases. It is not a sourced event._

A woman in a large apartment complex applies to renew her lease. The property management company uses an AI tenant-screening tool. The tool flags her application based on a prior eviction filing from six years ago - a case she won, but which remains in the dataset. The system generates a denial.

She asks the property manager to review it. The property manager explains that the platform makes the recommendation and the company follows it. She asks for the criteria used. She is told the system is proprietary.

A similar pattern has been documented in litigation: SafeRent Solutions' tool was found to systematically deny Black and Hispanic applicants by relying on credit data that reflected historic racial disparities, without accounting for housing vouchers. Fair housing lawsuits eventually produced settlements, but no affected applicant had a real-time path to contest the specific decision that excluded them. [confirmed: Georgetown Law Poverty Journal; California Law Review]

The system steered. The property manager was present. The property manager had no practical authority.

**Scene 4: Transport**

In Austin, Texas, Waymo robotaxis passed stopped school buses with flashing red lights at least 19 times during the 2025 school year. Five of those violations occurred after Waymo represented to Austin ISD in a November 2025 letter that a software fix had resolved the problem. Video documented another violation two weeks after Waymo confirmed the fix was complete. [confirmed: KXAN Austin; CBS News; NPR]

Austin ISD asked Waymo to halt operations during school drop-off and pick-up times. Waymo refused, citing disagreement with the district's risk assessment. [confirmed: KXAN Austin]

A school district - the institution with the most direct legal responsibility for the safety of its students - asked an AV operator to stop. The operator declined.

The system steered. The institution with oversight authority asked it to stop. The operator decided whether it would.

---

## 2. What's happening

AI has moved from assisting physical system operators to directly controlling what those systems do. This is not a future scenario. It is the current deployment state across utilities, logistics, buildings, and transport.

The shift from recommendation to actuation is a power shift. A recommendation can be ignored. An actuation shapes the default. In captive or low-exit systems - your employer's warehouse, your apartment building, your city's transit network, the road your child crosses - the affected person rarely has the time, the information, or the access to override what the system has already done.

Three gaps make the power shift durable — and they are distinct, not the same problem:

1. **Cost shifted down:** The AI's decision is the system's behavior. Efficiency gains flow to the operator. Injury, denial, delay, and risk land on the worker, resident, or rider. The person at the bottom with the least leverage absorbs the failure.

2. **No real-time recourse:** A human supervisor, property manager, or dispatch agent is present. Their practical authority to override the system without consequence - triggering a performance flag, escalating a service-level violation, contradicting an automated compliance record - is often absent or absent in time. You cannot contest what the system is doing while it is doing it.

3. **No after-the-fact accountability:** The operator holds the footage, the algorithm parameters, the injury data, the route history. The affected party receives a notification, a denial code, or nothing. When something goes wrong, the operator decides what to disclose. Without the logs, there is no basis for appeal, audit, or correction.

These three gaps travel together. But fixing one does not fix the others. Log access does not create override capacity. Override capacity does not prevent gains from flowing upward. All three are required.

---

## 3. Why it's happening - the mechanisms

### Mechanism: Control shift from recommendation to actuation

**What it is:** AI transitions from surfacing options for human decision to directly executing the decision. The human is nominally in the loop but has no practical override.

**What is confirmed:**

- Amazon's ADAPT system automatically generates warnings and terminations based on productivity metrics without requiring supervisor input. [confirmed: Senate HELP Committee July 2024]
- Amazon Flex routing software generates driver routes algorithmically. Driver override requires human escalation that was not provided in the documented wildfire case. [confirmed: Futurism; The Next Web]
- AI-enabled building access systems provide remote grant or revocation of access as a standard product feature. Property managers can actuate changes without tenant notice requirements specified in federal regulation. [confirmed: RentBottomLine 2025; CM3 Building Solutions 2024]
- AI traffic signal management is deployed in US cities with documented impact on traffic flow. [confirmed: Route Fifty, September 2025]
- ERCOT is standing up a formal AI organization for grid operations. Smart meter demand response programs create algorithmic control of residential energy use during peak periods. [confirmed: ERCOT December 2025; PUC Texas 2024]

**What this means in practice:** When the AI steers, the default is already set. Contesting it requires time, system access, and often an escalation process longer than the consequence window.

### Mechanism: Nominal oversight without practical override

**What it is:** Human supervisors, operators, and managers are present at every layer but lack the practical authority, training, or time to override AI decisions without personal cost.

**The Amazon case:**

The Senate HELP Committee investigation found Amazon had internally documented the link between algorithmically set quotas and elevated injury rates. Workers bypassed safety measures to meet those quotas. Supervisors who flagged safety concerns faced pressure. Amazon's injury rate was nearly twice the non-Amazon warehouse average. OSHA and Amazon settled for $145,000 in ergonomic violation penalties in December 2024. A separate federal criminal investigation into manipulation of injury records was not resolved by the settlement. [confirmed: Senate HELP Committee December 2024; OSHA December 2024; NPR December 16, 2024]

**The automation bias problem:**

Nominal oversight fails in part because of a well-documented human behavior pattern: automation bias. When an AI system provides a recommendation, people with authority to override it systematically defer to it even when they have the authority and time to act differently.

- Boeing 737 MAX: MCAS was redesigned in a way that complicated pilots' physical ability to override it and was not adequately explained in training. Two fatal crashes followed. [confirmed: Human Factors journal, 2024]
- NHTSA data on Tesla Autopilot crashes: in 82% of incidents, drivers did not steer or steered less than one second before impact despite a visible hazard. [confirmed: NHTSA]
- A 2004 peer-reviewed study on automated aids in breast cancer diagnosis: cancers identified in 46% of cases without automated aids but only 21% of cases when the automated aid failed to flag the cancer. [confirmed: CSET Georgetown November 2024]
- A 2001 study of pilots using engine-alerting systems found pilots detected fewer malfunctions with the automated system than without it. [confirmed: CSET Georgetown November 2024]

The CSET Georgetown November 2024 brief synthesizes these findings across aviation, healthcare, and military contexts. The Harvard Journal of Law and Technology identifies five conditions required for meaningful human oversight - qualified evaluators, ability to recognize AI failure, practical intervention capacity, willingness to act despite automation bias, and organizations that respond to findings - and notes that most systems satisfy fewer than all five. [confirmed: Harvard JOLT]

This is not a story about careless humans. It is a story about how system design and organizational incentives make nominal oversight the rational choice for the person in the loop.

[confirmed in aviation and healthcare; plausible inference to logistics, buildings, and utilities - no named sector-specific case found in research]

### Mechanism: Log asymmetry

**What it is:** The operator holds the records that would establish what the system did and why. The affected party cannot access those records without legal process, and sometimes not even then.

**The Cruise case:**

In October 2023, a Cruise robotaxi struck a pedestrian in San Francisco. After the initial collision (caused by a human driver), Cruise's pullover detection subsystem dragged the pedestrian 20 feet. Cruise had dashcam footage of the dragging. Cruise submitted a report to NHTSA that omitted it. [confirmed: DOJ USAO-NDCA November 2024]

In November 2024, Cruise admitted to providing a false record to NHTSA with intent to impede, obstruct, or influence a federal investigation. Criminal fine: $500,000 (deferred prosecution agreement). NHTSA civil penalty: $1.5 million. California PUC settlement: $112,500. All California permits revoked. Cruise CEO and multiple executives resigned or were fired. [confirmed: DOJ; NHTSA; CBS San Francisco]

The Cruise case is the clearest single example in this series of why log access is not a procedural nicety. The operator held the footage. The regulator did not. The operator chose what to disclose. Without the footage, the characterization of the incident would have been the one Cruise submitted. Criminal liability was the mechanism that eventually surfaced the truth - not routine audit access.

**The Amazon injury data case:**

Amazon held seven years of internal workplace injury data. The Senate HELP Committee's investigation, which reviewed those internal documents, established that Amazon had documented the link between quota requirements and injury rates - and had continued the quotas anyway. Workers and regulators had to investigate to surface what Amazon's own internal data showed. [confirmed: Senate HELP Committee December 2024; NPR]

**The structural condition:**

No uniform US federal requirement for AI system log retention and accessibility in logistics, buildings, or consumer-facing transport was located. EU AI Act Article 12 requires high-risk AI systems to automatically generate logs and retain them for at least six months. No comparable US requirement exists. [confirmed: EU AI Act; research file]

Gig worker deactivation offers a clear example of the access gap. Amazon Flex drivers deactivated by algorithm receive a deactivation email with a link to appeal. Drivers report appeals go to automated systems, not humans. No documented rate of successful appeals was located. Drivers do not know the metrics used to evaluate their rating, how it is calculated, or why it changes. [confirmed: DAIR investigation; OnLabor; Bloomberg June 2021]

### Mechanism: Externalized failure costs

**What it is:** When AI-controlled systems produce bad outcomes, the cost lands on workers, residents, riders, or the public - not on the operator whose system steered.

- Amazon's injury settlement: $145,000 in fines. Workers experienced injury rates 80% above the company's own targets. [confirmed]
- Cruise incident: the pedestrian was dragged 20 feet. Criminal accountability followed - unusually, for AV incidents. [confirmed]
- AI tenant screening: class action settlements reached. No affected applicant had real-time relief or access to the specific decision logic used against them. [confirmed: Georgetown Law; California Law Review]
- Waymo school bus violations: recall issued; violations continued after fix was confirmed; the school district's request to halt was refused. Students were the ones exposed to the continuing risk. [confirmed: KXAN Austin]

Liability for AV crashes remains unresolved in US law. Academic review identifies four liability regime types. 46 states have proposed AV-specific liability laws as of 2024. The UK Automated Vehicles Act (2024) resolves this by designating the Authorized Self-Driving Entity as the legally responsible party. The US has no comparable national framework. [confirmed: MDPI Vehicles journal; NHTSA July 2025 Congress report]

### Mechanism: The efficiency illusion

**What it is:** AI deployment is framed as improving the system for everyone - faster routes, more reliable service, lower maintenance costs. The gains in efficiency flow to the operator. The friction, risk, and delay are pushed to workers, residents, and the public. The framing obscures who benefits and who absorbs the failure.

This is the efficiency illusion: the system is optimized, but optimized for operator metrics. The affected party gets the press release. The operator gets the margin.

- Amazon: algorithmic throughput optimization reduces cost per unit delivered. Workers bear injury risk. [confirmed]
- AI tenant screening: reduces time-to-decision for property managers. Applicants bear discriminatory denial without real-time contestability. [confirmed]
- Demand response programs: reduce grid stress and operator cost. Residents bear the load curtailment during the event window. [confirmed: PUC Texas 2024]
- RealPage: algorithmic rent recommendations reduced vacancy rates and increased rent revenue for participating landlords. Tenants paid higher rents. DOJ consent decree proposed November 2025; pending court approval. [confirmed: DOJ; ProPublica]

No documented case was located showing AI-driven efficiency gains in utilities, logistics, or buildings being demonstrably shared with workers, residents, or customers as lower prices, better service, or safer conditions. [unknown: research file gap 3]

---

## 4. Where it broke - evidence against the good story

### The cases are clean, but they required criminal liability or multi-year investigation to surface

- The Cruise case produced accountability because it involved a criminal charge and federal investigation. The mechanism that surfaced the withheld footage was prosecutorial pressure, not routine audit access. If that mechanism had not existed - or had not been applied - the incident record would reflect the version Cruise submitted.
- Amazon's injury data gap required a Senate investigation using Amazon's own internal documents. OSHA's settlement followed a multi-year investigation initiated in 2022. The accountability mechanism was legislative investigation, not real-time log access.
- RealPage accountability followed years of investigative journalism, private litigation, and ultimately a DOJ antitrust action. The affected tenants who paid higher rents during the algorithm's operation have no direct remedy under the proposed consent decree.

### The oversight gap is structural, not a product of bad actors alone

The nominal oversight problem is not primarily a story about managers who chose not to act. It is a story about system design: when override has a cost (performance flag, escalation time, contradicting an automated record), the rational choice for the human in the loop is to defer. That is what automation bias research documents. The same pattern appears across aviation, healthcare, and military contexts where people are specifically trained and motivated to be vigilant.

### The equity gap appears across sectors

The equity gap does not appear only within a sector. It appears across them.

Workers in high-surveillance logistics have the least union density, the least legal protection, and the least practical ability to escalate when the algorithm steers wrong. Tenants in affordable housing markets - the ones most dependent on every available unit - are in the buildings most likely to use low-cost AI screening tools with the fewest oversight requirements. Riders in low-income transit corridors are most dependent on the systems where AI deployment is least governed.

Workers and residents who enter these physical systems with the least leverage absorb the failure costs first, most, and with the fewest paths out. The tool amplifies the gap that already exists. It does not create it.

### Confirmed gaps in the record

The research found no named US case of an AI utility grid decision removing practical human override and causing documented consumer harm. The structural risk is analytically documented; specific utility incidents are not in the record.

The research found no named US case of a resident successfully contesting an AI building management decision (distinct from discriminatory screening) in a court or regulatory forum.

Transit equity harm is documented as a design risk and structural concern. Named US operational cases with confirmed inequitable outcomes from AI transit systems were not located.

---

## 5. Where it held - evidence that guardrails can work

**Denmark's N1 grid AI:** Deployed to analyze 180,000+ cable cabinets and reduce unnecessary physical inspections, saving thousands of technician hours. No documented accountability failure. The key distinction: the AI produces a recommendation; human technicians remain responsible for physical inspection and repair. The actuation boundary is preserved. [confirmed: Microgrid Media; SAP Denmark]

**Seattle App-Based Worker Deactivation Rights Ordinance (effective January 1, 2025):** Requires written notice, stated reason, information used in the decision, and an internal challenge process before deactivation. Enforcement of the permissible-reason standard begins June 2027. Operational effectiveness is not yet reported; the structural floor is confirmed. [confirmed: Seattle OLS; Seyfarth Shaw]

**Australia Digital Labour Platform Deactivation Code (effective February 26, 2025):** Provides appeal rights and potential reactivation orders through the Fair Work Commission. [confirmed: HFW]

**UK Automated Vehicles Act (2024):** Designates the Authorized Self-Driving Entity as the direct legally responsible party for AV safety. This is a clear liability assignment in law. Whether it produces better operational outcomes in practice is not yet evidenced. [confirmed: MDPI Vehicles journal]

**EU AI Act (effective August 2024; high-risk systems from August 2026):** Classifies AI in critical infrastructure as high-risk. Requires human oversight mechanisms, audit logging, conformity assessment, and transparency. Provides the clearest current minimum floor across all sectors covered by this case study. No comparable US federal framework exists. [confirmed: EU AI Act Annex III, Articles 12 and 14]

**The pattern in what held:** The cases that avoided documented harm share a structural feature - either the AI operates at the recommendation layer (not actuation), or a minimum floor of contestability rights was established before deployment scaled. The Denmark case and the legislative cases (Seattle, Australia, UK) show the same thing: the mechanism that prevents harm is a prior constraint, not a post-hoc investigation.

---

## 6. Human Command test and Exit test

### Human Command test

For AI decisions in physical systems to meet the minimum floor, affected parties need:

- **Notice:** Advance warning, in accessible form, that an AI decision is about to affect them.
- **Reason:** A specific, actionable explanation of the basis for the decision - not "algorithm" or "proprietary system."
- **Appeal:** A real human review, with timelines, that can produce a different outcome.
- **Records:** Access to the logs and inputs used to make the decision.
- **Override:** A practical path for a qualified human to stop the system's action before the consequence window closes.

**Current state:**

| Sector                              | Notice                                                     | Reason                                              | Appeal                                              | Records                                                                      | Override                                                              |
| ----------------------------------- | ---------------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Utilities / demand response         | Partial (program terms at enrollment; event notice varies) | Not required in US federal regulation               | Not required                                        | Not accessible to consumer                                                   | Nominal (opt-out at enrollment; real-time override program-dependent) |
| Logistics / worker pace and routing | Minimal (policy disclosed at hire)                         | Not required; specific metric weights not disclosed | Appeal process exists; goes to automated system     | Not accessible to worker in US federal regulation                            | None confirmed; override triggers performance flag                    |
| Buildings / AI screening and access | Minimal (algorithmic use not always disclosed)             | Not required; proprietary claim accepted            | No federal requirement for real-time contestability | Not accessible; proprietary                                                  | Property manager present; no practical authority confirmed            |
| Transport / AV                      | Post-incident report via NHTSA                             | Post-incident investigation                         | No real-time appeal path                            | Operator holds logs; access requires legal process or criminal investigation | None for affected person; ASD in UK; no US equivalent                 |

No sector currently passes the full Human Command test in US federal regulation.

### Exit test

Exit from these systems is structurally limited:

- **Utilities:** In most US states, residential consumers have one utility provider. Smart meter programs are opt-in, but grid infrastructure AI decisions (load balancing, dispatch) are not consumer-facing. There is no exit from grid management AI.
- **Logistics workers:** Workers at Amazon and other high-surveillance employers cannot exit the algorithmic management system while employed there. Gig workers face deactivation risk if they do not meet algorithmic benchmarks. The gig economy alternative (another platform) typically uses the same pattern.
- **Buildings:** Tenants in housing markets where AI screening is standard cannot exit algorithmic screening by choosing a different property manager if the tools are industry-wide. Residents of a managed building cannot exit building management AI for climate control or access without moving.
- **Transport:** Pedestrians and cyclists cannot opt out of AV operations in their neighborhood. Riders in cities deploying AI traffic management or AI transit have no meaningful opt-out path.

When exit is not realistic, governance requirements must be stronger, not weaker. That is where this case sits across all four sectors.

---

## 7. Shared Gains test

AI-driven physical systems generate measurable efficiency gains for operators: throughput, throughput per worker, reduced maintenance cost, grid stability, reduced vacancy rates. These are real.

The Shared Gains test asks: who receives those gains?

- **Workers:** No documented case was located showing AI efficiency gains in logistics being shared with workers as higher wages, safer conditions, or reduced pace requirements. Amazon's injury rate was 80% above its own target in 2025. [unknown: no confirming evidence found]
- **Residents:** No documented case was located showing AI efficiency gains in building management being passed to residents as lower rent, better maintenance response, or improved conditions. Vendor-reported HVAC cost reductions (17.6% operational, 13.2% maintenance) are self-reported and unverified. [unknown: no confirming evidence found]
- **Utility customers:** Texas residential demand response programs offer voluntary credits for participation. This is the clearest case of a partial gain-sharing mechanism. It is opt-in, market-dependent, and program-specific - not a systemic distribution of efficiency gains. [confirmed: PUC Texas 2024]
- **Riders:** Demand-responsive transit is marketed as improving service for underserved areas. No named US deployment was found showing measurable improvement in service quality for low-income riders as a result. [plausible as design possibility; unknown as operational outcome]

The shared gains picture is consistent across sectors: efficiency gains appear as operator margin. No systemic mechanism for sharing gains with workers, residents, or the public was documented.

---

## 8. Minimum floor

_The following section extends beyond the case evidence into prescriptive territory. It is included as a practical guide derived from the patterns documented above._

For AI-controlled physical systems to be contestable, a minimum floor requires:

1. **Pre-deployment disclosure:** Affected parties must be informed, in plain language, that an AI system controls or influences decisions that will affect them, what categories of decision those are, and what their rights are.

2. **Mandatory log retention with access rights:** Operators must retain AI decision logs for a minimum period. Affected parties must have a legal right to access logs relevant to a decision that affected them. Regulators must have audit access without prior notice in high-risk systems. This is the condition the Cruise case most directly illustrates: without log access, there is no accountability baseline.

3. **Real human review:** Appeals must reach a qualified human with authority to reverse the decision. Automated re-processing of the same inputs is not an appeal. This applies to worker deactivation, tenant screening, and AV incident response.

4. **Override capacity with authority:** Human operators in physical systems must have the practical authority, training, and organizational support to override AI decisions. Nominal authority that triggers a performance penalty when exercised is not authority.

5. **Liability assignment:** When an AI physical system produces harm, someone must be legally responsible. "The system decided" is not a defense. UK's ADSE model is the most direct current template. US liability frameworks remain unresolved.

6. **Sector-level enforcement:** Minimum floor requirements must be enforceable, not advisory. EU AI Act's high-risk classification with conformity assessment and post-market monitoring is the current high-water mark. The US has no comparable federal framework for any of the four sectors covered here.

---

## 9. What to do

_The following section extends beyond the case evidence into prescriptive territory. It is included as a practical guide derived from the patterns documented above._

### Personal / interpersonal

**Before enrolling in a demand response or smart home program:** Read the terms for the specific conditions under which you can override a demand event in real time. If the override process is not clearly described and achievable without a stable app connection, that is your answer about what "opt-out" means in practice.

**If you are an Amazon warehouse worker, gig worker, or delivery driver facing deactivation or a productivity warning:** In Seattle, you have legal rights to written notice, stated reason, and information used in the decision (effective January 1, 2025, full enforcement June 2027). Know what rights your jurisdiction provides. The Seattle ordinance is a model that other cities have not yet adopted; if you are outside Seattle, the protection may not exist at the federal level.

**If you rent in a property using AI screening:** Ask the property manager in writing what automated systems were used in evaluating your application and what information was used. A denial based on an error in the underlying data - a won eviction case, a misattributed record - may be contestable under fair housing law even if the algorithmic decision itself is not.

### Community / policy

**Demand log access as a public procurement condition:** Cities, counties, and public agencies that contract with AV operators, ride-hail platforms, or logistics companies for services should require, as a contract condition, that incident and decision logs are available to the public agency within 48 hours of a request. This is a procurement lever available to local governments now, without federal legislation.

**Push for worker deactivation rights ordinances modeled on Seattle's:** The Seattle App-Based Worker Deactivation Rights Ordinance provides a replicable template. City councils in major gig-economy markets (Chicago, New York, Los Angeles, Houston) can adopt comparable protections. The Australia Digital Labour Platform Deactivation Code provides a national-scale model. US federal legislation remains stalled; city-level action does not require it.

**Oppose AI liability diffusion in AV legislation:** 46 states have proposed AV-specific liability laws. The critical provision is liability assignment: legislation that spreads responsibility across manufacturer, software developer, operator, and driver creates conditions where no one is accountable for any specific incident. The UK Automated Vehicles Act (2024), which designates a single Authorized Self-Driving Entity, is the cleaner model. State AV legislation should be evaluated on whether it assigns clear liability or diffuses it.

---

## Loop Effect

### Effect on the bad loop

The bad loop runs when the system steers, the operator keeps the logs, and the person affected has no practical way to push back. Each pass tightens it:

> AI steers in captive system → gains flow to operator → failure costs land on worker/resident → no recourse in the consequence window → harm goes undocumented → no correction signal reaches the operator → accountability gap widens → more AI deployed in captive systems → AI steers in captive system →

Specific effects on the squeeze:

- **Monthly squeeze:** AI-controlled logistics increases worker injury rates and reduces take-home pay through algorithmic deactivation. AI building screening denies housing access to applicants who may have legitimate claims. AI rent-setting (RealPage) contributed to elevated rents in markets where it was deployed. All of these increase household financial stress directly.
- **Insecurity:** When the system that controls your route, your pace, your building access, or your rent is opaque and uncontestable, the experience is not neutral. Workers describe it as being managed by a system that cannot hear them. That is not incidental to the squeeze - it amplifies it.
- **Manipulation / scapegoats:** When harm from AI physical systems is attributed to "the algorithm" or "the system," the real mechanism - a deliberate design choice to externalize failure costs - is hidden. Cruise's initial report to NHTSA is the sharpest example: the withheld footage was not an algorithm's choice; it was a company's choice. Obscuring that is how the wrong targets get blamed.
- **No fixes / more squeeze:** Without log access, real appeal rights, and enforceable liability, the feedback loops that produce corrections do not function. Amazon paid $145,000 in ergonomic penalties while documenting internally that its quotas caused the injuries. The settlement did not change the quotas. The mechanism that should produce fixes is not currently working.

### Effect on the good loop

The good loop requires a prior constraint - a minimum floor established before deployment scales, not a post-hoc investigation after harm accumulates:

> minimum floor established before deployment → affected party can contest a decision → error surfaces in real time → operator incentivized to build systems that can be overridden → enforcement capacity grows → gains distribute → trust builds → minimum floor expands →

The Denmark grid AI, the Seattle worker ordinance, the UK AV liability law, and the Australia deactivation code all show the same pattern: what prevented harm was a structural floor, not more vigilant humans. The floor made the good loop the path of least resistance.

Specific effects:

- **Security:** Mandatory log access, real appeal rights, and enforced liability would reduce the arbitrary and uncontestable nature of AI physical system decisions. Workers, residents, and riders who have a real path to contest a harmful decision are less trapped.
- **Choice:** Where exit is not possible - grid management, building AI in a captive rental market, AV operations in a neighborhood - governance requirements must substitute for market competition. Minimum floor requirements are the only available mechanism.
- **Competition:** Liability clarity would favor operators who invest in safety and contestability over operators who externalize failure costs. If "the system decided" becomes an unavailable defense, the incentive to build systems that can be overridden and audited improves.
- **Shared gains:** In contestable markets, competition distributes gains - customers choose better alternatives, workers move to better employers. Physical infrastructure is different: exit is not realistic. You cannot choose your grid operator, leave your building's AI management system, or opt out of AV operations on public streets. Where competition cannot do the distributional work, governance must substitute for it. That is why regulated rate structures, log access, and procurement requirements belong here - not as a replacement for competition as a general philosophy, but as what the E4E framework requires when competition itself is not possible. Without them, efficiency gains default to operator margin. [no confirming evidence of gain-sharing found in research]

### Case verdict

- **Net effect right now:** Bad loop.
- **Why:** Across all four sectors, AI-controlled physical systems produce measurable efficiency gains for operators and measurable cost or risk increases for workers, residents, riders, and the public. The accountability mechanisms that should correct this - log access, real appeal rights, enforceable liability - are absent or inadequate at the federal level in the US. The cases where accountability produced outcomes (Cruise, Amazon Senate investigation) required criminal prosecution or multi-year legislative investigation, not routine audit. That is not a functional accountability system.
- **What would change the verdict:** Federal log access requirements for high-risk physical AI systems; mandatory real human review for deactivation and access decisions; national AV liability assignment on the UK model; OSHA enforcement authority over algorithmic pace-setting with injury consequences; and a mechanism - regulatory or contractual - that requires documented evidence of shared efficiency gains before AI deployment in captive-market physical systems can proceed.

### One steady action

If you live in a city operating AV services, using AI in transit dispatch, or contracting with a gig platform: attend one city council meeting, write one email to your council member, or sign one comment to your state PUC in the next 30 days asking specifically what log access rights exist for affected residents and workers, and what the appeal process is for AI-driven decisions in those systems. The question itself is the action. Most jurisdictions have not been asked it.

---

## North Star verdict

The North Star asks whether this system makes ordinary working people more secure or less secure, more able to navigate their lives or less, more able to contest the decisions that affect them or less.

On current evidence, AI control of physical infrastructure is working against the North Star.

The mechanism is clear: AI actuation replaces human discretion, operators retain the logs, affected parties have no federal right to contest the decision or access the records, and efficiency gains flow upward. This is extraction inside low-choice systems - the combination the North Star identifies as the hardest to break.

The evidence is not uniform across sectors. The actuation shift is well-documented in logistics and transport: Amazon's ADAPT system terminates workers without supervisor input, Waymo and Cruise robotaxis act on physical streets with documented harm, and the accountability failures are on record. In buildings, most deployed AI currently advises or adjusts within set bounds - the harm cases are concentrated in discriminatory screening, not operational control actuation. In utilities, the structural risk is analytically documented and the regulatory capacity is being built, but no named US case of grid AI removing practical human override and causing consumer harm was found in this research. The directional concern is the same across all four sectors; the harm record is thinner in buildings and utilities than in logistics and transport.

The counter-evidence is real and should be taken seriously. The Denmark grid AI, the Seattle worker ordinance, the UK AV liability law, and the Australia deactivation code all show that minimum floors can be built before harms scale. The pattern in what has worked is consistent: prior constraint, not post-hoc investigation.

The question for the next five years is whether the US builds any comparable floor before AI physical control becomes sufficiently embedded that the political economy of accountability shifts decisively toward operators. The current trajectory points against it: the EU AI Act's high-risk infrastructure requirements take effect in August 2026 with no comparable US federal framework in place; NHTSA's July 2025 report to Congress on ADS research and rulemaking identified regulatory gaps but did not produce binding national standards for AV liability or log access; no US federal requirement mandating AI override capacity in grid management, logistics, or buildings was located in this research; and the December 2025 executive order directing federal agencies to challenge state AI regulations signals federal intent to limit, not expand, the accountability floor for physical AI systems. [confirmed: EU AI Act; NHTSA July 2025 Congress report; research file; TechPolicy.Press]

**The System Lesson:** When the system could steer without explaining itself, accountability needed a new answer. We didn't build one in time. The people with no exit paid for that gap.

---

## Research gaps

1. **No named US case of a utility AI grid decision removing practical human override and causing documented consumer harm.** The structural risk is analytically documented. Specific utility incidents are not in the record found.

2. **No named US case of a resident successfully contesting an AI building management decision (distinct from discriminatory screening) in a court or regulatory forum.**

3. **No documented evidence of AI efficiency gains in these sectors being shared with workers, residents, or customers.** The hypothesis that gains flow to operator margin is structurally supported and analytically consistent with the north star model. Confirming data specific to utilities, logistics, or buildings was not located.

4. **Log access rights for US logistics workers are not established in federal regulation.** Seattle's ordinance is the closest current protection; its operational effectiveness has not yet been reported.

5. **Transit equity harm from AI systems is documented as a structural risk, not a named operational failure.** Specific US cities with confirmed AI-driven inequitable transit outcomes were not identified in the research.

6. **US AI liability framework for AV incidents remains unresolved.** 46 states have proposed legislation; no uniform federal standard exists.
