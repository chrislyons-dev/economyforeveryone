---
title: 'AI and the IT Ladder Collapse'
bucket: 'stress-test'
corePattern: "AI task substitution is narrowing entry into IT careers faster than new job categories are opening, compressing the apprenticeship pipeline that produces tomorrow's senior workers."
studyDate: 2026-03-10
eventWindowStart: 2022-01-01
eventWindowEnd: 2026-03-10
status: 'published'
summary: 'The most important early labor-market risk from AI may be ladder collapse rather than immediate mass unemployment. If entry-level work disappears before new training paths exist, institutions lose both future talent and the human capacity needed for real oversight.'
claim: 'When AI automates learning work faster than institutions replace the apprenticeship path, it weakens both career entry and the future stock of human expertise.'
evidenceLevel: 'medium'
policyDomain:
  - 'labor-market'
  - 'technology-governance'
  - 'workforce-development'
tags:
  - 'ai'
  - 'labor'
  - 'it'
  - 'training'
  - 'entry-level'
  - 'apprenticeship'
  - 'workforce'
receiptTags:
  - 'official-data'
  - 'independent-analysis'
  - 'primary-documents'
sources: []
---

- [1. One scene](#1-one-scene)
- [2. What's happening](#2-whats-happening)
- [3. Why it's happening -- the mechanisms](#3-why-its-happening----the-mechanisms)
- [4. Control stack: is there a human in command?](#4-control-stack-is-there-a-human-in-command)
- [5. Shared Gains Test](#5-shared-gains-test)
- [6. Governance lag and what enforceable looks like](#6-governance-lag-and-what-enforceable-looks-like)
- [7. Safety and reliability overreach check](#7-safety-and-reliability-overreach-check)
- [8. What good looks like](#8-what-good-looks-like)
- [9. What to do](#9-what-to-do)
- [10. How to talk about it](#10-how-to-talk-about-it)
- [Loop Effect](#loop-effect)
- [North Star verdict](#north-star-verdict)
- [Research gaps](#research-gaps)
- [Bridge language](#bridge-language)

## 1. One scene

A hiring manager at a mid-sized software firm has fifteen open positions. Three are labeled "junior engineer." In practice, she fills all three with engineers who have five or six years of experience. She's seen the AI coding tools. She knows the greenfield work, the boilerplate, the documentation -- the stuff she used to hand to new grads -- now gets done by the seniors with AI assist, in half the time. The open junior requisitions stay posted for compliance reasons. When a fresh grad applies, the resume screener deprioritizes them before she ever sees it. She doesn't think of this as a policy decision. She thinks of it as being practical. This is happening in offices across the country. No single person decided the ladder should stop working. It's just stopping.

---

### Why this matters

If AI removes the work people used to learn on, you do not just lose some junior openings. You lose the future humans who would have learned to review, debug, and overrule the system later. That is why this is not only a hiring problem. It is a long-term competence and oversight problem. A team can look more productive now while quietly destroying the bench it will need later.

---

## 2. What's happening

AI is taking over the tasks that early-career IT workers used to learn through: boilerplate code, documentation, routine bug fixing, and test creation. Senior workers keep the authority to review, approve, and make judgment calls. That means the first rung is shrinking while the top of the ladder stays intact. If nothing replaces that lost learning path, institutions do not just lose junior jobs. They lose the future stock of human expertise needed for real oversight.

Two things we don't know yet -- and they'll determine how serious this gets:

1. **Are new AI-adjacent roles absorbing displaced junior workers at comparable scale, stability, and pay?** No study measures this yet. If yes, the ladder is shifting rather than collapsing. If no, a cohort of workers is being permanently priced out of the IT career path.
2. **Does mid-level compression follow junior compression with a lag?** Current data shows junior declining, mid-level stable or slightly rising. The hourglass prediction needs a second phase. Check IESE, Stanford, and Indeed data in 12-24 months.

The honest answer is that the evidence is early. The mechanism is documented. The scale and permanence are not.

---

### The fork in the road

Used badly, AI narrows entry, weakens wage growth, concentrates gains upward, and turns human review into theater. That reinforces the bad loop: more insecurity, less mobility, weaker trust, and more concentrated power.

Used well, AI can remove drudge work while protecting learning, preserving review capacity, and sharing gains through better jobs, better training, and better outcomes. That reinforces the good loop: more security, more real choice, stronger institutions, and broader gains.

---

### What the helpful version looks like

AI coding tools can cut the drudge-work tax on developers -- boilerplate, repetitive scaffolding, routine documentation -- and free up time for harder problems. In an organization that actively protects the learning pipeline, that freed time goes to mentorship, design review, and the judgment-building work that makes senior developers valuable. The research doesn't document this outcome as typical; it documents it as possible when learning-work is explicitly protected. The Stack Overflow data showing a trust-use gap (46% distrust AI output accuracy, 84% use the tools anyway) [IT-012] suggests that developers who maintain independent competence are better positioned to capture the productivity gain without the atrophy risk.

**Why it usually doesn't happen:** Efficiency pressure converts freed time to more output, not more learning. When throughput KPIs reward volume and speed, the time that AI frees up doesn't go to mentorship or independent review -- it goes back into the sprint. The learning pipeline doesn't benefit unless it is explicitly protected from the same pressure that makes the efficiency gain attractive in the first place.

**What makes the helpful version more likely:** Learning-work quotas: a defined portion of junior work explicitly protected for skill formation, not sprint output. Manual flight checks: periodic unassisted task completion to verify that independent judgment is still there. Pair-review rotations with protected time. These practices cost nothing in policy terms -- they only require that protected time be treated as production work rather than overhead.

---

## 3. Why it's happening -- the mechanisms

This case study uses the **E4E AI impact taxonomy**: **Mechanisms** are the reusable failure patterns, and **Mechanism Modules** are the numbered inserts you can reuse across industries.

A simpler way to say it:

- AI takes the reps first.
- Humans keep the authority first.
- If you do not protect learning on purpose, the people with authority age upward and the people below them never get enough reps to replace them.
- That is how a fast productivity story becomes a slow competence crisis.

---

### Mechanism 1: Contestability collapse

When systems become too fast, cheap, or opaque to overrule, "human review" becomes a rubber stamp. In IT, this shows up in **code review** and (invisibly) in **resume screening**.

- The trust/use gap is a warning light: Stack Overflow 2025 reports **46%** of developers do not trust AI output accuracy while **84%** are using or planning to use the tools [IT-012].
- DORA 2024 finds delivery stability falling (and throughput not improving) despite AI adoption [IT-006]. That's consistent with review capacity not scaling with AI-generated volume, but DORA doesn't directly measure rubber-stamping.

**Module 1.1: Human Command (minimum floor)**
If AI affects a life outcome, you get: notice, reason, appeal, records, and a human override.
(Used in Section 4 "Control stack" via the governance boxes.)

**Module 1.2: Rubber-stamp proxies (how to measure it)**
Practical signals of "checkbox review" (mostly not measured in the literature yet):

- time-per-review relative to PR size
- override rate on AI-generated suggestions
- rework / bug regression rates tied to AI-authored code
- appeal/overturn rates in AI-screened hiring funnels

**Automation shifts error cost.** When AI generates code and a reviewer "approves," the rubber-stamp risk has a specific asymmetry: the reviewer gets blamed if the code fails, but the AI system got credit for the productivity. When AI screens resumes and an HR professional "confirms," the HR professional owns the legal liability if the screen was discriminatory -- but the model made the decision. This error cost shift is invisible in productivity metrics; it shows up only in incident rates, rework rates, and legal exposure. Agentic automation in code deployment -- where AI can trigger merges, deployments, or rollbacks autonomously -- extends the same asymmetry to production systems. The guardrail is consistent: rate limits on automated actions, documented kill-switch authority, and incident review that names the human accountable at each step. This is the same pattern documented in claims processing, where auto-denial shifts error cost to claimants and reviewers simultaneously.

---

### Mechanism 2: Exit / captivity

Exit is the safety valve. If entry-level applicants are filtered invisibly across many employers, or if workers can't switch without losing standing, exit weakens.

**Module 2.1: Exit test**
Can a junior realistically move to a different employer if AI screening (or norms) blocks them here?

**Module 2.2: Switching cost checklist**
What do you lose when you switch?

- access (repos, prod, systems)
- trust (who believes you can ship)
- credentials (signals that survive vendor filters)
- visibility (who sees your work)

---

### Mechanism 3: Gate shift (trust + distribution)

As AI handles task execution, the gate shifts from "can you do the work?" to "do you have standing to be trusted with the decision?"

Observed signals:

- Experience requirements rising in postings [IT-003]
- "Junior" requisitions filled by experienced engineers (SignalFire "experience paradox") [IT-009]

**Module 3.2: Personhood and credentials (people)**
AI makes it cheap to fabricate work samples and identities; employers tighten gates. If tightening is not **contestable**, it blocks legitimate applicants too.
(See hiring fraud / verification dynamics; this case references _Mobley v. Workday_ [IT-011] as the "opacity + contestability" exemplar.)

---

### Mechanism 4: Asymmetric logs

If employers and vendors have the logs and workers and applicants don't, contestability becomes a mirage.

Hiring is the clearest example: applicants usually can't see whether AI screened them, why, or how to contest it at scale (U.S. practice) [IT-011].

**Module 4.1: Audit/log checklist**
What's logged, who can see it, how long it's retained, and how a person can request it.

**Module 4.2: Records access and retention**
Minimum standard: employer-held logs retained long enough to audit patterns, with regulator access and a worker-facing record request path.

---

### Mechanism 5: Scale without adjudication

When AI scales decisions faster than the system can adjudicate errors, mistakes become policy.

In IT:

- AI hiring filters can reject at scale with little contestability (U.S.).
- AI-assisted code can ship at scale while review capacity stays flat.

**Module 5.1: Enforcement-without-adjudication metrics**
What % of decisions are reviewed, audited, appealed, and overturned?

**Module 5.2: Corroboration rule**
What evidence is required before an adverse outcome (reject, demote, terminate, block promotion) is allowed?

---

### Mechanism 6: Skill atrophy

This is the center of the case: when AI does the work people used to learn from, the organization may save time now by destroying the human bench it will need later.

This is the home mechanism for the IT ladder case: the ladder is not only "jobs lost"; it is **judgment capacity lost**.

Evidence base:

- Early-career employment declines for the 22-25 cohort in AI-exposed roles [IT-001]
- Junior posting share down / experience requirements rising [IT-003]
- Mixed or negative org-level delivery outcomes despite tool adoption [IT-006]
- Task-level productivity gains do not automatically become system-level gains [IT-005, IT-007]

**Module 6.1: Manual flight checks**
Periodic unassisted tasks to verify independent competence still exists.

**Module 6.2: Learning-work quotas**
Explicitly protect apprenticeship work (reps) as production capacity, not overhead.

---

### Mechanism 7: Bottlenecks / market power

Where productivity gains go depends on where power sits: tooling vendors, platforms, and senior labor chokepoints can capture the gains by default.

Signals in this case:

- junior wages down; senior stable/rising [IT-004]
- new-grad share of hires down at Big Tech [IT-009]

**Module 7.1: "Where does power sit?" map**
Map the choke points: hiring screens, code hosting, CI/CD, review gates, and who controls them.

**Module 7.2: Shared gains test**
Did gains show up as lower prices, higher wages, open ladders, real contestability, real exit?

**Upstream capture: public code as training input.** The tools that substitute for junior IT labor were trained largely on public code repositories -- GitHub, Stack Overflow, public open-source projects. The developers who contributed that code received no compensation for supplying the training input. Returns from the productivity gains accrue to the tooling vendors, not to the contributor community. This is a direct "capture at the top" mechanism: value created by an open collaborative technical community was extracted upstream, concentrated in a few vendor products, and is now being used to reduce demand for the labor that supplied the training data in the first place. This is the same upstream extraction documented in the content flood case, where creator work becomes training input without compensation.

---

### Mechanism 8: Control loops

If you can't slow it down, inspect it, or shut it off, you are not in command.

**Module 8.1: Safe-fail + kill switch**
Named owner, defined triggers, tested rollback.

**Module 8.2: Incident review and rate limits**
If AI increases PR volume or change frequency, you need rate limits and post-incident learning loops that treat review capacity as a first-class constraint.

---

## 4. Control stack: is there a human in command?

### The three levels

**Human-in-the-loop:** A human sees the AI output and can accept or reject it before the decision is final. The human is present at the point of decision.

**Human-on-the-loop:** A human monitors the system and can intervene if something is flagged. The human is downstream of many decisions; they intervene only on exceptions.

**Human-in-command:** A human has the authority, time, information, and records needed to act meaningfully. Review is not just permitted -- it is resourced and documented.

The distinction matters because nominal human involvement satisfies most existing legal standards in the U.S. even when that involvement is operationally hollow [Green 2022, R-011]: "Although policies agree that a human operator rubber stamping algorithmic decisions does not constitute meaningful oversight, they do not provide a standard for determining whether any particular form of human oversight is meaningful."

---

### Applied to IT: hiring, performance, and code review

**IT hiring (AI screening tools):**

- Current position: human-on-the-loop at best; likely human-in-the-loop theater in practice. Applicants are filtered by AI before any human sees the resume in many enterprise systems. The human who eventually reviews the shortlist never sees who was filtered. No audit log is available to the applicant. No appeal path exists in most U.S. deployments.
- Rubber-stamp risk: High. The human reviewer sees only the AI-curated shortlist, not the full applicant pool. What looks like human judgment is judgment on a pre-filtered set.
- What "human in command" would require: Notice to applicants that AI screening is in use. Plain-language explanation of criteria. Accessible appeal path. Employer documentation of screening decisions. Override frequency tracked and auditable.

**Performance review (AI-assisted evaluation):**

- Current position: varies by employer. Where AI summarizes performance signals (tickets closed, commit frequency, code quality scores) and humans apply ratings, the human is technically in the loop but reviewing AI outputs, not original evidence.
- Rubber-stamp risk: Moderate to high. Time pressure on review cycles is real. Managers reviewing AI summaries rather than original evidence are susceptible to automation bias -- deferring to the AI signal, especially for workers they know less well (junior workers, remote workers, recent hires).
- Rubber-stamp detector test: Does the reviewer have the time to examine original evidence? Do they have access to the audit log? Do they have authority to override without going through a second approval layer? If no to any of these, the review is theater.

**Code review (AI-generated code):**

- Current position: human-in-the-loop by policy in most engineering organizations. Pull request approval is still a human act.
- Rubber-stamp risk: Highest of the three. PRs are larger and more numerous with AI assist [DORA 2024]. Review time has increased 91% in high-AI-adoption teams (Faros, vendor-produced - treat as illustrative, not load-bearing). Trust in AI output accuracy is falling while use is rising [IT-012]. The conditions for automation bias are present: volume pressure, trust-use gap, social norms around throughput.
- What the DORA finding shows: Delivery stability fell 7.2% despite AI adoption and nominal code review processes remaining in place [IT-006]. The most plausible explanation consistent with the evidence is that review quality is degrading -- but DORA does not establish this directly.

---

---

### 4.A Governance boxes: four required checks

These four boxes apply the coverage-map mechanisms (A1 contestability, A2 exit, A4 logs, A8 shared gains) to this specific domain. They are standardized across the AI impact case study series.

---

> **Box 1: Human Command check**
>
> Applied to: AI-assisted hiring screening, performance evaluation, and code review in IT.
>
> **Notice:** Does a junior engineer know when their work is being filtered or deprioritized by an AI tool? In hiring: applicants are typically not informed that AI screening is in use, which criteria it applies, or when it has filtered them. In code review: developers are not typically informed when an AI tool has flagged or deprioritized their PR.
>
> Current state: **No** in U.S. hiring (no binding notice requirement). Variable in code review (depends on employer practice; not standardized). EU AI Act will require notice for high-risk employment AI from August 2, 2026 [IT-014].
>
> **Reason:** Is the basis for automated hiring or screening decisions disclosed in plain language? Current state: **No** in the U.S. for most commercial AI screening tools. EEOC guidance requires specific adverse action reasons but is non-binding [Green 2022, R-011]. EU AI Act Article 86 will require explanation rights for affected persons from August 2026.
>
> **Appeal:** Is there a real path to contest an automated screening or performance assessment? Current state: **No** at scale in the U.S. The primary remedy is post-hoc litigation (slow, expensive, requiring identification of a cross-employer pattern -- the _Mobley_ situation [IT-011]). No standard appeal path exists in most enterprise AI hiring deployments.
>
> **Records:** Can the worker or applicant see what data drove the decision? Current state: **No** in U.S. practice. Employers hold the screening logs; applicants do not have access. The proposed contract clause language in Section 6 would require 36-month employer-held audit logs accessible to regulators on request.
>
> **Human override:** Who can review and reverse an automated hiring or performance decision, and is it logged? Current state: **Nominally yes, operationally unclear.** Legal standards in the U.S. generally require only that a decision not be "solely automated" -- any nominal human involvement satisfies the standard even if the human reviews only the AI-filtered shortlist, not the full applicant pool [Green 2022, R-011]. Override rates are not tracked or reported by most employers.
>
> **Verdict:** Human Command is absent at the hiring stage in the U.S. for most AI-assisted screening deployments. It is nominal but unverified at the performance review and code review stages.

---

> **Box 2: Exit check**
>
> Applied to: junior engineers facing AI-assisted screening and workers in AI-tooling-dependent environments.
>
> **Can a junior engineer realistically find a role elsewhere if AI-assisted screening filters them out industry-wide?**
>
> The _Mobley_ case pattern -- one plaintiff, 80+ applications, all rejections via the same vendor's screening tool -- is consistent with correlated exclusion: if many employers use the same screening vendor with the same systematic biases, a single applicant can be rejected across dozens of employers through a single invisible filter [IT-011, Open question 2]. If correlated exclusion is operating at scale, exit -- the market discipline mechanism that ordinarily checks employer power -- is severed. The worker cannot switch to a better employer because the same filter applies everywhere.
>
> Current state: **Unknown.** No study has measured cross-employer correlation in AI screening outcomes. The correlated exclusion risk is plausible and structurally concerning; it is not confirmed at scale.
>
> **Can a worker switch employers without losing all tooling context and history?**
>
> Codebase is portable. Workflow integrations, tool preferences, review history, and institutional context built on top of a specific vendor's tooling are not. Switching employers typically means rebuilding this layer. For senior workers, this is a friction cost. For junior workers who have built their skills within a single tooling environment and never developed the underlying competence the tool abstracts, the cost may be higher.
>
> **Governance implication:** If exit is not realistic -- because correlated exclusion operates or because tooling lock-in makes switching costly -- the governance burden on hiring AI systems rises. When market discipline cannot check the AI tool, regulatory and procurement standards must.

---

> **Box 3: Audit and logs check**
>
> Applied to: AI tools that filter applicants, assess code quality, or flag performance in IT.
>
> **What is logged when AI tools filter applicants, assess code quality, or flag performance?**
>
> Hiring screening: Vendors typically log screening decisions internally. Employers may or may not receive detailed logs. Applicants receive no log.
>
> Code review: AI-assisted code review tools log flagged code, suggestions, and accepted/rejected recommendations -- to the vendor's instrumentation. Employer-side visibility into these logs varies by tool and contract. Developers typically see only the output, not the decision inputs.
>
> Performance evaluation: AI-summarized performance signals (commit frequency, ticket velocity, code quality scores) may be generated by tools that retain their own logs. Whether employers receive or retain those logs is not standardized.
>
> **Who can see it?**
>
> In all three contexts: the employer and the tool vendor have the most complete view. The affected worker or applicant has the least. This is the "asymmetric logs" pattern (A4) applied to IT employment.
>
> **Can the affected person contest it using the log?**
>
> **No** in U.S. practice for hiring screening: applicants have no access to the screening log. **Nominally** for code review: developers can see what was flagged and respond in the PR process, but the AI-assisted flags may carry implicit authority that makes contestation socially or organizationally costly. **Unknown** for performance evaluation: depends entirely on employer practice.
>
> **Minimum requirement:** Employer-held audit logs for all AI-assisted employment decisions (screening, review, evaluation) retained for a minimum of 36 months. Affected persons can request the basis of an adverse decision. Regulators can access logs on request. This is the standard proposed in Section 6's contract clause language. It is not currently required by U.S. law.

---

> **Box 4: Shared gains check**
>
> Applied to: productivity gains from AI coding tools and AI-assisted hiring in IT.
>
> **Did productivity gains from AI coding tools reduce prices for software products or services?**
>
> No direct evidence. Corporate margins in tech improved in 2023-2025, partly attributed to headcount reduction and AI-driven efficiency. No study measures per-unit cost of IT services to enterprise customers before and after AI adoption. Efficiency appears captured as margin improvement, not passed to customers. Confidence: **Unknown.**
>
> **Did junior and mid-level wages rise alongside productivity gains?**
>
> No. Junior starting wages fell 6.3% post-ChatGPT in AI-exposed firms. Mid-level starting wages fell 5.9%. Senior wages were stable or increased [IT-004]. Confidence: **Plausible** (IESE pre-print, large dataset, not yet peer-reviewed).
>
> **Did career ladders stay open?**
>
> No. Junior tech postings down 34% from pre-pandemic. Employment for the 22-25 cohort in AI-exposed roles down 13-20% from 2022 peak. New grad hire share down 30-50% vs. 2019. Every independent measure points to narrowing entry. Confidence: **Confirmed** (direction); **Plausible** (specific magnitudes).
>
> **Were learning opportunities preserved or did they disappear with the work?**
>
> They disappeared with the work. The tasks that define entry-level IT -- boilerplate, documentation, routine bug fixing, test creation -- are the tasks AI handles first. Learning by doing requires doing. When the doing moves to AI, the learning does not automatically transfer to a different form. No study documents organizations that preserved learning opportunities while adopting AI tools at scale. Confidence: **Plausible** for mechanism; **Unknown** for scale.
>
> **Who captured the gains?**
>
> The available evidence -- improving tech-sector margins, stable or rising senior wages, falling junior wages -- is consistent with gains captured as margin and senior stability. This conclusion is plausible, not confirmed: no study directly measures whether efficiency savings are passed to customers or workers vs. retained as profit [Shared Gains Test Q1 is unknown]. Four of six shared gains questions in Section 5 point against broad sharing. The other two are unknown -- not neutral.

---

## 5. Shared Gains Test

Applying six questions to assess whether the productivity gains from AI in IT are being shared broadly.

---

**Q1: Did prices fall (for employers or consumers of IT services)?**

What the evidence shows: No direct evidence that IT services became meaningfully cheaper for end-consumers. Corporate margins in tech improved in 2023-2025, partly attributed to headcount reduction and AI-driven efficiency. No study measures per-unit cost of IT services to enterprise customers before and after AI adoption.

Confidence: **unknown**

What's missing: The efficiency gains appear to be captured as margin improvement, not passed to customers or workers. No source directly measures this.

---

**Q2: Did wages rise (especially for mid/junior)?**

What the evidence shows: No. Junior starting wages fell 6.3% post-ChatGPT in AI-exposed firms. Mid-level starting wages fell 5.9%. Senior wages were stable or increased [IT-004, IESE pre-print]. The BLS median software developer wage ($133,080, May 2024) is slightly above 2023, but this figure doesn't control for selection effects: if only higher-skill workers are getting hired, the median can rise even as conditions worsen for new entrants.

Confidence: **plausible** (IESE pre-print; large dataset; not yet peer-reviewed; BLS figure confirmed but does not isolate AI effects)

What's missing: No study measures wages for workers already employed -- only new hire starting wages. No measurement of total compensation including equity and benefits. Selection effect: fewer but higher-skilled hires can inflate the median while excluding the workers who would have been hired at lower skill thresholds.

---

**Q3: Did time-cost and admin drag fall?**

What the evidence shows: Individual task completion is faster for some task types (21-55% faster for greenfield/boilerplate work in controlled settings [IT-007]). But DORA 2024 found delivery stability fell 7.2% and throughput fell 1.5% despite AI adoption [IT-006]. DORA 2025 found AI amplifies team capability but does not reliably reduce organizational admin drag. Individual savings are real. System-level drag is mixed to negative.

Confidence: **plausible for individual gains (confirmed in controlled settings); mixed-to-negative for organizational gains (DORA, confirmed for direction)**

What's missing: No measurement of admin drag for junior developers specifically. No study on whether faster AI-assisted task completion reduces burnout or simply increases throughput expectations.

---

**Q4: Did ladders stay open (junior paths into the field)?**

What the evidence shows: No. Junior tech postings down 34% from pre-pandemic [IT-003]. Employment for 22-25 cohort in AI-exposed roles down 13-20% from 2022 peak [IT-001]. New grad hire share down 30-50% vs. 2019 [IT-009]. Internship postings down over 11 percentage points year-over-year as of April 2025 [Indeed Hiring Lab]. Every independent measure points to narrowing entry paths.

Confidence: **confirmed for direction; plausible for specific magnitudes** (figures vary by source and methodology)

What's missing: Whether new job categories (AI trainer, prompt engineer, model evaluator) are absorbing displaced junior candidates at comparable scale, stability, and compensation. No current evidence shows they are. This is the most important unresolved question.

**On the NACE conflict:** NACE survey data (October 2024 - January 2025) shows 70%+ of organizations expect to increase or maintain intern hiring -- but the same survey reports overall intern hiring expected to fall 3.1%. Indeed internship posting data shows an 11-point year-over-year decline. This is resolvable: most organizations by count plan to hold steady, but a small number of large companies dominate total intern hiring volume. Aggregate headcount can fall even when most organizations express intent to maintain. Small and mid-size organizations may be holding the pipeline open while large firms drive the decline. Both are true simultaneously.

---

**Q5: Can people contest decisions?**

What the evidence shows: Limited, and jurisdiction-dependent. In the U.S.: EEOC guidance exists but is non-binding. Litigation is available but slow and expensive; the _Mobley_ case is in discovery after class certification for age discrimination. Workers typically do not know when AI screening has filtered them. Nominal human involvement satisfies most U.S. legal standards even when it is not operationally meaningful [Green 2022]. In the EU: the AI Act mandates notice, human oversight, and explanation rights for high-risk employment AI from August 2, 2026 [IT-014].

Confidence: **confirmed for EU (binding law); confirmed for U.S. gap (no comparable binding private-sector rule)**

What's missing: Whether EU Article 86's right to explanation will be operationally meaningful for rejected applicants who never had a relationship with the employer. Whether EEOC guidance will be converted to binding rulemaking under current conditions.

---

**Q6: Can people exit and switch employers without losing standing?**

What the evidence shows: No evidence that AI adoption has restricted labor mobility directly for workers who do get hired. However, if AI screening tools produce correlated rejections across employers using the same vendor, applicants could face simultaneous exclusion across multiple employers through a single invisible filter. The _Mobley_ case -- one plaintiff, 80+ applications, all rejections -- is consistent with this pattern but does not establish scale [IT-011, Open question 2].

Confidence: **unknown**

What's missing: No study has measured whether workers rejected by one AI screening tool are systematically rejected by others using the same vendor. This is a critical gap for the E4E loop: exit and switching are the market discipline mechanism, and correlated exclusion would sever it.

---

### Shared Gains Test summary

| Question                | Result                                     | Confidence            |
| ----------------------- | ------------------------------------------ | --------------------- |
| Prices fell             | No evidence                                | Unknown               |
| Wages rose (junior/mid) | No -- fell for new hires                   | Plausible             |
| Admin drag fell         | Mixed -- individual yes, organizational no | Plausible             |
| Ladders stayed open     | No                                         | Confirmed (direction) |
| Can contest decisions   | Not in the U.S. at scale                   | Confirmed (gap)       |
| Can exit / switch       | Unknown; correlated exclusion risk         | Unknown               |

Four of six shared-gains questions point the wrong way. The remaining two are unknown, not reassuring. So far, the pattern looks like this: productivity gains are real, but the benefits are not clearly flowing to junior workers, open ladders, or stronger oversight capacity.

---

## 6. Governance lag and what enforceable looks like

This matters beyond hiring fairness. If organizations cannot preserve the path by which junior workers become competent reviewers, then "human oversight" in later high-stakes AI systems will become less and less meaningful over time.

### Where things stand

**EU:** The AI Act classifies AI systems used in recruitment, selection, task assignment, promotion, dismissal monitoring, and performance evaluation as "high-risk" under Annex III [IT-014]. Requirements effective August 2, 2026: human oversight design (Article 14), deployer obligations including monitoring and logging (Article 26), right to explanation for affected persons (Article 86). Penalties up to 35 million EUR or 7% of worldwide annual revenue for serious violations.

**U.S.:** No comparable binding private-sector rule. EEOC guidance is non-binding. The primary enforcement pathway is litigation, which is post-hoc, expensive, and requires plaintiffs who can identify a cross-employer pattern. The _Mobley_ case is the leading edge; it has established the legal theory is viable but has not produced a merits ruling.

The gap is large. U.S. employers can deploy AI screening tools today with no obligation to notify applicants, explain decisions, or document override rates.

---

### What contract and procurement language would make the minimum floor enforceable

The **minimum floor** is the baseline below which "human in command" becomes operationally hollow. It comes from the three-level control stack in Section 4: a human reviewer must have access to original evidence (not only the AI-filtered output), authority to override without additional approval, and a documented record of the decision. Notice, audit logs, an accessible appeal path, named kill-switch authority, and override-rate tracking are the specific mechanisms that make this real. Below the floor, nominal human involvement satisfies legal standards while providing no real check on the AI system.

Here's what a real clause looks like in plain language -- what this would look like in an enterprise software procurement agreement or collective bargaining agreement:

> **AI Employment Decision Systems -- Human Command Requirements**
>
> Any AI system used to screen, rank, evaluate, or score job applicants or current employees must:
> (a) Notify the affected person in plain language that AI screening was used and which criteria it applied.
> (b) Maintain an audit log of all screening decisions for a minimum of 36 months, accessible to the employer and available to regulators on request.
> (c) Provide an accessible appeal path: the affected person may request human review of any AI-assisted adverse employment decision within 30 days. Human review means a qualified reviewer who has access to the full applicant pool (not only the AI-filtered shortlist), reviews original evidence, and has unilateral authority to override the AI decision without additional approval.
> (d) Track and report override frequency quarterly. If the override rate falls below 2%, the employer must conduct an audit of whether review is operationally meaningful.
> (e) Identify a named individual with authority and obligation to stop operation of the AI system if systematic errors or disparate impact are identified (kill switch authority).
> (f) Prohibited use: AI systems may not be the sole or determinative factor in a hire, promotion, demotion, or termination decision.

This is a proposed template, not an existing standard. The EU AI Act establishes similar principles at a higher level of abstraction. The specifics above are a translation into procurement language.

---

### Why the "solely automated" framing fails

Current U.S. law generally requires a decision to be "solely automated" to trigger contestability protections. Any nominal human involvement -- even a manager clicking "approve" on an AI-ranked shortlist -- typically satisfies the standard [Green 2022]. This is the legal gap that makes the above clause language load-bearing: it requires that the human reviewer have access, authority, time, and records, not just nominal presence.

---

## 7. Safety and reliability overreach check

### Is AI being deployed in IT hiring and review beyond validated operating conditions?

The evidence suggests yes, in several respects.

**Hiring screening tools:** The _Mobley_ case (in discovery) raises the question of whether commercial AI screening tools produce disparate impact by protected class without adequate employer monitoring. No study has validated AI screening tools across the full range of employer deployment conditions. Vendor claims about bias audits are not independently verified at scale. The EEOC guidance confirms that existing anti-discrimination law applies -- but enforcement is post-hoc and individual.

**Code review:** AI coding tools have been adopted at high velocity (84% of developers using or planning to use [IT-012]) well ahead of organizational processes for managing review quality. DORA 2024 documents delivery stability declining 7.2% as adoption rose [IT-006]. The tools are being used at organizational scale with review processes that have not adapted to the volume and size increase they produce. This is the definition of deployment beyond validated operating conditions: the tool is working; the system it is embedded in is not.

**Performance evaluation:** AI-summarized performance signals (commit frequency, ticket velocity, code quality scores) are being incorporated into evaluation processes designed for direct human observation. The risk is automation bias: evaluators reviewing AI summaries are susceptible to deferring to the signal, especially for workers they have less direct knowledge of. No study currently documents the rate at which AI-derived performance signals are adopted without independent verification.

---

### Vendor claims vs. evidence

GitHub Copilot's controlled study found a 55.8% speedup on a specific greenfield task [IT-007, 2023-vintage study; AI capabilities have shifted materially since -- this finding establishes the direction, not current magnitude]. METR's RCT found experienced developers were 19% slower on complex repository maintenance tasks [IT-005]. These are not contradictory -- they study different task types. But vendors typically cite the Copilot finding and not the METR finding. A purchasing employer cannot know from vendor materials which finding applies to their actual work conditions.

---

### Drift monitors, fallback modes, and kill switch mechanisms

For hiring screening: None documented in U.S. employer practice outside of voluntary bias audits (which are not standardized). The EU AI Act requires ongoing monitoring and logging from August 2026; U.S. practice is voluntary.

For code review: No systematic organizational mechanism for detecting whether review quality is degrading as PR volume increases. DORA measures organizational delivery outcomes; it does not provide a real-time signal that review is becoming nominal.

Kill switch authority: Exists in the EU AI Act framework (Article 14 requires users to be able to stop operation). Not required in the U.S. Not typically specified in enterprise procurement contracts. The "named kill-switch owner" in the proposed contract language above is designed to fill this gap.

---

## 8. What good looks like

The goal is not to preserve busywork for its own sake. The goal is to preserve the path by which people become capable enough to question, verify, and overrule AI later.

**Important caveat up front:** The positive case is under-documented. What follows is a proposed guardrail set based on the mechanisms identified in the research. It is not established practice at scale. No controlled study documents adoption of these measures in the AI era [Section 5 of research file].

The business case for this rulebook is not altruism -- it is risk management. Ide's model estimates that eliminating apprenticeship-based learning could reduce long-run U.S. per-capita output growth by 0.05-0.35 percentage points [IT-008]. The range is wide; the direction is consistent with the mechanism. Organizations that hollow the learning pipeline are trading long-term judgment capacity for short-term throughput gains. The downstream risk is a future leadership cohort without the underlying competence the senior titles require.

---

### Minimum viable "Learning Work" rulebook

None of these has been documented at scale in the AI era - they're what good looks like, not a description of current practice.

**1. Funded mentorship time treated as production capacity, not overhead**
Mentorship hours are budgeted alongside delivery sprint capacity. They are not optional slack to be reclaimed under schedule pressure. Metrics track junior skill development alongside team throughput.

**2. Scoped junior access with deliberate task allocation**
Juniors are assigned tasks in layers: first do the underlying work without AI assist; then do it with AI assist; then review AI-generated output. The sequence preserves exposure to the work before tool abstraction. Access to AI tools expands with demonstrated competence in the underlying task.

**3. Review capacity explicitly resourced, not assumed to absorb AI-generated volume**
When AI tools increase PR volume or size, review time is not assumed to compress proportionately. Reviewer capacity is a production input that must scale with AI-generated volume. Teams track time-per-review relative to PR size as a health metric.

**4. Periodic manual baselines ("flight checks")**
At defined intervals, developers complete representative tasks without AI assistance. This is not punitive -- it is calibration. The goal is to ensure human judgment remains operative and to identify where over-reliance has degraded independent capability. [Note: comparisons to medical or aviation training (supervised clinical work, simulation, recurrent proficiency checks) are illustrative analogies, not documented parallels -- no source in the research file establishes that IT field practice has adopted equivalent structures.]

**5. Postmortems structured as teach-not-blame**
Production incidents involving AI-generated or AI-reviewed code are analyzed for what the team did not catch and why. The goal is to surface where review processes are inadequate, not to assign fault. This is the organizational learning mechanism that replaces "learning by doing" when task volume moves to AI.

**6. Human Command for hiring, promotion, performance, and discipline**
AI assists; humans decide. The decision-maker has access to original evidence (not only AI summaries), authority to override without additional approval, and is named in the audit log. See Section 6 for operationalization.

**7. Junior representation tracked explicitly**
The share of workforce at junior level is tracked as a leading indicator of pipeline health -- not subsumed into overall headcount. If the junior share falls below a threshold, it triggers a structured review of whether the pipeline is being maintained.

---

### The McKinsey counter-signal

McKinsey North America publicly committed to hiring 12% more staff in 2026 than 2025, with potential 15-20% growth over five years, explicitly framing the strategy around "grooming" people to be both consultants and technologists [IT-015, R-014]. This is worth watching because McKinsey's business model depends on the pyramid structure of junior hours -- they have a direct economic incentive to maintain the pipeline. Treat this as a counter-signal, not proof that the guardrail set above is being implemented at scale. It is a hiring commitment, not a documented guardrail program.

Exceptions exist. They do not change the pattern.

---

## 9. What to do

### For someone in the field (specific, repeatable, testable)

**Build a manual baseline habit.** Once a quarter, complete a representative task in your primary work area without AI assistance. Write a short note on what was harder than expected and what you noticed. Share it with one colleague. This is not a grand gesture -- it is calibration. It maintains the judgment that lets you catch AI errors and it demonstrates competence that is not legible from throughput metrics alone.

If you have any mentorship responsibility -- formal or informal -- treat your mentees' reps as production work, not overhead. When a junior person is working on something AI could do faster, ask whether they have done it once without the tool. If not, that's the first step.

---

### For procurement and policy (specific, actionable, grounded in the governance gap)

**Make "human in command" a procurement requirement.** Any organization -- employer, government agency, university -- that purchases AI-assisted hiring, performance evaluation, or promotion tools should require, as a contract condition:

- Applicant notice that AI screening is in use
- Employer-held audit logs for a minimum of 36 months
- An accessible appeal path with a human reviewer who has access to original evidence, not only the AI-filtered shortlist
- Named kill-switch authority
- Quarterly reporting of override rates

This does not require new legislation in the short term. It can be implemented today in procurement contracts, collective bargaining agreements, and HR vendor selection criteria. The EU AI Act establishes comparable requirements for EU-market deployments from August 2026. U.S. employers can voluntarily adopt equivalent language now; government agencies can require it in contracts.

The policy lever for the medium term would be EEOC binding rulemaking converting existing AI hiring guidance into enforceable standards, with civil penalty authority. The legal theory is established (_Mobley_). The gap is that EEOC guidance is currently non-binding. Whether EEOC binding rulemaking is achievable under current political and administrative conditions is an open question -- this is the gap that would need to close for this lever to become active, not a lever already in motion.

---

## 10. How to talk about it

The concern is not that AI should be slowed down or that productivity gains are bad. The concern is narrower: the gains are real, but they are not reaching the people who need them most, and the pipeline that produces tomorrow's senior workers is thinning in ways that are visible now and harder to reverse later.

If someone pushes back with "but the BLS says software developer employment will grow 15% by 2034," the honest response is: that projection starts from a post-layoff trough and reflects future demand for AI-adjacent skills. It does not tell us whether the first-rung workers who would have entered this decade are going to get there. Those are different questions.

The ask is not to stop using AI. The ask is to be explicit about who reviews what, who has authority to override, and whether the junior pipeline is being measured at all. These are management decisions that can be made without waiting for regulation.

The villain in this story is not any individual manager or company. It is the combination of understandable short-term incentives and weak guardrails. Fix the guardrails, and the short-term incentives can coexist with a functional pipeline.

---

## Loop Effect

### Effect on the bad loop

- **Monthly squeeze:** Junior wages fell 6.3% in AI-exposed firms post-ChatGPT. Entry tech postings are down 34% from pre-pandemic. The generation entering the field faces narrowed access, lower starting wages, and opaque screening they cannot contest. Downstream: when review capacity atrophies, error rates rise across the systems (benefits, finance, healthcare) that depend on those workers.
- **Insecurity:** Workers filtered by AI screening tools cannot identify when it happened, what criteria were used, or how to challenge the outcome. The apprenticeship path that turns today's junior into tomorrow's senior is narrowing without announcement.
- **Manipulation / scapegoats:** Productivity tool marketing implies workers who cannot keep up with AI are the problem. The structural narrowing of the ladder -- driven by tool adoption incentives and efficiency pressure, not individual failure -- is invisible in that framing.
- **No fixes / more squeeze:** No institution is currently required to maintain learning-work capacity. The incentive runs toward extraction: capture the efficiency gain now, absorb the competency loss later (or externalize it). The atrophy is slow enough that no single actor is responsible for it.

### Effect on the good loop

- **Security:** Learning-work quotas (protected apprenticeship time treated as production, not overhead), manual flight checks, and pair-review rotations would protect the pipeline that produces tomorrow's senior developers and reviewers.
- **Choice:** Portable credentials that survive vendor filter systems, contestable AI screening with specific rejection reasons, and cross-employer corroboration checks on screening outcomes would give juniors a realistic path to contest and route around opaque blocks.
- **Competition:** Procurement rules requiring junior hiring ratios and measurable human review capacity, plus published override rates on AI-assisted screening and code review, would make rubber-stamp practices visible and addressable.
- **Shared gains:** Individual productivity gains from AI tools are real (21-55% in controlled settings). Organizational delivery stability is mixed to negative (DORA 2024). Junior wages are down while senior wages are stable or rising and corporate tech margins improved. The gains are distributing upward by default.

### Case verdict

- **Net effect right now:** Bad loop -- but recoverable.
- **Why:** AI tools are doing exactly what they were designed to do: reduce the cost of routine task execution. The bad loop emerges from what is not designed: no protection for the apprenticeship pipeline, no requirement to share the efficiency gain downward, no contestability for workers screened out by opaque tools. The mechanism is not the technology; it is the absence of guardrails that would redistribute the gain.
- **What would change the verdict:** Procurement rules requiring human review capacity and junior hiring ratios, contestable AI screening with specific reasons, published override rates, and learning-work quotas treated as a production requirement rather than overhead.

### One steady action

- If you manage engineers or reviewers, protect at least one unassisted review task per sprint as a named line item -- not overhead, not optional. That one protected rep is the difference between a team that can verify AI output and one that can only approve it.

---

## North Star verdict

This case points toward the bad loop unless institutions intervene on purpose.

The short-term win is obvious: fewer junior tasks, faster output, lower labor cost.

The long-term loss is easier to miss: weaker entry, weaker learning, weaker review, and weaker human capacity to govern AI-heavy systems later.

Entry is already narrowing: the 22-25 cohort is down 13-20% in the fields where AI adoption is highest, junior wages fell 6.3%, and posting data shows fewer than 2% of tech roles advertised for junior candidates. Contestability is also weak: workers filtered by AI screening tools typically cannot identify when it happened, what criteria were used, or how to challenge the outcome.

The productivity gains are real. The available evidence -- improving tech-sector margins, stable or rising senior wages, falling junior wages -- is consistent with gains being captured as margin and senior stability rather than distributed downward, but this conclusion remains plausible rather than confirmed: no study directly measures whether efficiency savings are passed to customers or workers versus retained as profit.

The good version is possible, but only if organizations treat learning and review capacity as real production assets worth protecting. The mechanism is not the technology itself. The mechanism is the absence of guardrails that would keep AI from quietly dismantling the apprenticeship path while short-term efficiency gains are being captured.

**System lesson in one sentence:** AI's productivity gains distribute upward by default; only deliberate guardrails -- in procurement contracts, HR practice, and eventually binding regulation -- will push them down.

**Resource externalities.** The infrastructure enabling AI coding tools at scale -- data centers, compute, cooling, power grid upgrades -- externalizes energy and infrastructure costs onto local communities unless procurement and policy require "load pays" commitments. When compute costs are socialized through utility rate increases and gains are captured as tooling vendor margin or corporate efficiency, the monthly squeeze rises twice: once for workers who receive none of the productivity gain, and once for communities absorbing the infrastructure cost. This does not change the shared gains test result here -- it extends it: the efficiency gains from AI tools and the energy and water costs of running them belong on the same ledger. Enforceable community benefit agreements and infrastructure cost disclosure are the mechanism for ensuring the externality does not land on the people who received none of the gain.

---

## Research gaps

- **AI role absorption.** No study measures whether new AI-adjacent roles (trainer, prompt engineer, model evaluator) are absorbing displaced junior IT workers at comparable scale, stability, and pay. This is the most important open question for whether the ladder is really collapsing or just being rebuilt elsewhere.
- **Cross-employer screening correlation.** Whether workers rejected by one AI screening vendor end up rejected across all employers using the same vendor hasn't been measured. This matters a lot for the "exit and switch" question.
- **Mid-level compression lag.** The current evidence shows junior roles compressed, mid-level roles stable or slightly rising. The hourglass prediction requires a second phase. Worth revisiting in 12-24 months against IESE, Stanford, and Indeed hiring data.
- **Learning work guardrails in practice.** No controlled study documents adoption of funded mentorship, scoped AI access, manual baselines, or review capacity budgeting at any firm in the AI era. The positive case is currently theoretical and anecdotal.

## Bridge language

How to talk about this when the audience isn't already convinced:

- "The problem isn't that AI does the boilerplate. The problem is that the boilerplate was also where junior developers learned the mechanics. When the reps disappear, the judgment doesn't develop."
- "If a team's only developers who can review AI-generated code are the ones who learned to code before the tools existed, the organization has a time bomb in its technical competence."
- "Manual flight checks aren't anti-AI -- they're what pilots do when their autopilot works well. You stay current so you can take over when the system doesn't."
- "When junior wages fall 6% while corporate margins improve and the tools promise 55% productivity gains, someone captured the efficiency. It wasn't the workers."
- "Verification tools that screen out North Korean IT fraud at scale also screen out legitimate applicants with non-standard credentials or unconventional career paths. The test is whether the system lets you contest and correct -- not just whether it's accurate on average."

- **Code review rubber-stamp proxies.** No study measures override rates, time-per-review relative to PR size, or reversal rates on appeal for AI-assisted code review. These are the operationally testable proxies for rubber-stamp risk that the literature hasn't yet measured.
