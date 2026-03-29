---
title: 'The Moving Breadbox: AI and the Collapsing Build-vs-Buy Threshold'
bucket: 'stress-test'
corePattern: 'AI is moving the cost threshold at which it becomes cheaper to build software internally than to buy it from a vendor. The vendors below that line are not losing to competitors. They are losing to their own customers.'
studyDate: 2026-03-28
eventWindowStart: 2022-01-01
eventWindowEnd: 2026-03-28
status: 'published'
summary: 'AI coding tools and low-code platforms appear to be moving the build-vs-buy threshold upward for internal software, exposing point-solution vendors to demand destruction from their own customers rather than substitution by rival vendors.'
claim: 'The build-vs-buy threshold for some internal software categories is plausibly moving as AI lowers build costs, but the mechanism is documented more clearly than the realized cancellation rate.'
evidenceLevel: 'medium'
policyDomain:
  - 'competition'
  - 'technology-governance'
  - 'labor-market'
tags:
  - 'ai'
  - 'saas'
  - 'build-vs-buy'
  - 'internal-tools'
  - 'low-code'
  - 'citizen-development'
receiptTags:
  - 'primary-documents'
  - 'official-data'
  - 'independent-analysis'
sources: []
---

---

- [At a glance](#at-a-glance)
- [1. Two scenes](#1-two-scenes)
- [2. What's happening](#2-whats-happening)
- [3. Why it's happening -- the mechanisms](#3-why-its-happening----the-mechanisms)
- [4. Scene comparison](#4-scene-comparison)
- [5. Where it broke -- evidence against the good story](#5-where-it-broke----evidence-against-the-good-story)
- [6. Where it held -- evidence the window is real](#6-where-it-held----evidence-the-window-is-real)
- [7. Internal governance and Exit test](#7-internal-governance-and-exit-test)
- [8. Shared Gains test](#8-shared-gains-test)
- [9. Minimum floor](#9-minimum-floor)
- [10. What to do](#10-what-to-do)
- [Loop Effect](#loop-effect)
- [North Star verdict](#north-star-verdict)
- [Research gaps](#research-gaps)

---

## At a glance

- **What changed:** AI coding tools have made it materially cheaper and faster for software development teams to build custom internal tools. Non-developers can now use AI-assisted platforms to build simple applications without writing code. Together, these shifts appear to be moving the cost threshold at which "build" becomes cheaper than "buy" for some categories of internal software. The structural logic is strong and the market signals are real, but primary churn data showing how much of the exposed SaaS segment is actually being canceled because internal AI-enabled build costs fell below vendor prices has not been found.
- **Who is exposed:** Software vendors in the $10,000 to $200,000 per year annual contract value range -- reporting and analytics tools, workflow automation, internal portals, integration connectors, and vertical-niche point solutions -- are the most exposed. Core enterprise systems, heavily regulated software, and data-moat tools are substantially less exposed. (Analyst consensus; no primary churn data by category confirmed.)
- **The compression works from both ends:** AI tools let development teams build what was previously too expensive given competing priorities. Non-developers can build what previously consumed developer time. Dev capacity freed from simple requests moves upward to more complex work. (Plausible mechanism; consistent with hiring and adoption data.)
- **In the exposed segment, the risk is not just competitor substitution. It is demand destruction.** A vendor in the exposed range may not be losing customers to a better competitor. Customers may exit the vendor category entirely.
- **The dominant enterprise AI direction in 2025 is buy, not build -- for AI use cases.** The 76% buy figure from Menlo Ventures applies specifically to AI application procurement, not to the general enterprise software build-vs-buy threshold. These are different questions. (Confirmed distinction; often conflated in reporting.)
- **The productivity evidence is contested.** The best controlled study (METR RCT, July 2025) found experienced developers took 19% longer on tasks with AI tools, not faster. Observational enterprise studies find large efficiency gains. The empirical picture is unresolved.
- **What to watch:** whether the exposed vendor segment shows actual cancellation rates, not just analyst predictions and stock repricing.

---

## 1. Two scenes

The following scenarios are illustrative composites built from documented patterns in the research. They are not sourced events.

**Scene 1: The tool that no longer makes sense to buy**

A mid-size logistics company pays $48,000 per year for a reporting and analytics platform. The platform connects to their operational database and produces scheduled executive dashboards, ad hoc filtering views, and role-based access controls for senior leadership -- the 90% of what the tool does that the vendor's roadmap will never prioritize. Their four-person dev team spends roughly one day per quarter on minor customizations.

In 2025, a senior developer on the team spends two weeks building a direct replacement using an internal AI coding assistant and the company's existing cloud data stack. The replacement covers 90% of the use cases. The remaining 10% -- a set of specialized export formats the operations team uses twice a year -- are rebuilt over the following month.

At renewal, the CTO kills the contract. The vendor does not lose to a competitor. No competitive bid is submitted. The question of "which vendor?" never comes up.

**Scene 2: The tool that a non-developer now builds**

A small HR team at a professional services firm needs an internal tool: an employee onboarding checklist tracker with automated reminders and a status dashboard for managers. Previously, this request would go into the dev backlog and emerge three to six months later, if at all.

In 2025, an HR operations coordinator builds the tool herself using a low-code AI platform in two days. The dev team reviews the output for security and approves deployment. The request never entered the dev queue.

From the dev team's perspective, capacity freed from routine internal requests is now available for more complex infrastructure work. From the vendor perspective -- if there was a vendor -- there is no vendor. The need was met before procurement was triggered.

---

## 2. What's happening

The software industry has a natural threshold between "buy" and "build." Below a certain complexity and above a certain build cost, buying from a vendor is rational. The vendor aggregates the R&D cost across many customers, prices it as subscription revenue, and provides ongoing maintenance. The buyer pays a fraction of what it would cost to build and maintain equivalently.

That threshold appears to be moving -- for some categories, in some organizations. The structural logic is strong and the market signals are real, but primary churn data showing how much of the exposed SaaS segment is actually being canceled because internal AI-enabled build costs fell below vendor prices has not been found.

AI coding tools are reducing the effective build cost for software development teams. AI-assisted platforms are enabling non-developers to build simple tools without touching a developer queue. Both changes reduce the cost of the "build" option, and together they appear to be moving the threshold upward for some categories -- meaning more of the vendor market falls below the line where buying is the rational choice.

The vendors most exposed are point solutions that solved a specific, bounded problem in the era when building was expensive. Their value proposition was not extraordinary product differentiation. It was that building the equivalent internally cost more than the subscription. That calculus is changing.

What is not changing, or changing more slowly: core enterprise systems (ERP, HCM, CRM at scale) with deep integration costs and institutional data, regulated software with compliance moats, and data-infrastructure tools whose value is the data, not the application layer.

The aggregate SaaS market is not contracting. Global SaaS revenue was projected at $390.50 billion in 2025 with continued growth expected through 2029. Average enterprise application counts held roughly flat: 305 apps per organization with a 0.07% year-over-year decline (Zylo 2026). The shift is happening within the market, not to it -- away from the point-solution segment and toward AI-native applications and core systems.

---

## 3. Why it's happening -- the mechanisms

### Mechanism 1: AI coding tool adoption (real but contested in productivity claims)

Enterprise AI coding tool adoption is large and documented. GitHub Copilot crossed 20 million all-time users by July 2025, with Microsoft reporting usage by 90% of the Fortune 100. Cursor reported usage by more than half of the Fortune 500 by June 2025, with $500 million ARR and a $9.9 billion valuation. AI is writing approximately 46% of all code accepted in GitHub repositories as of mid-2025.

**The productivity evidence must be stated carefully.**

The best controlled study -- a METR randomized controlled trial (July 2025) -- found experienced open-source developers using AI tools took 19% longer on tasks than those working without AI. Developers in the same study estimated they were 20% faster. The perception-reality gap is large.

A separate 12-month observational study of 300 engineers found a 33.8% cycle time reduction and 31.8% efficiency gain. That study was non-randomized; the METR result had stronger methodology but narrower scope. The science is genuinely unresolved.

**What this means for the build-vs-buy thesis:** the thesis does not require AI tools to make developers universally faster. It requires AI tools to reduce the cost of specific categories of internal tool-building to below the vendor price. That threshold shift may be real even if average productivity is mixed. The tasks best suited to AI-assisted building -- greenfield internal tools, bounded scope, familiar data schemas -- are precisely the tasks most likely to differ from the mature, complex codebases where the METR result applied.

### Mechanism 2: Low-code and citizen developer platforms (real adoption, governance risk not measured)

The low-code/no-code market reached $28.75 billion in 2024. Available surveys suggest 84% of enterprises have adopted low-code or no-code platforms to reduce IT backlog, and 41% report active citizen development programs -- though these figures have not been independently verified against primary sources. Non-developers building simple applications is documented and growing.

**The governance problem:** Shadow AI appeared in 20% of all data breaches in 2025, with 97% of those incidents in organizations with no AI access controls. Only 37% of organizations have policies to manage or detect shadow AI, and 60% of IT leaders report lacking visibility into all generative AI tools in use. Whether non-developer-built tools are accumulating as unowned, unpatched shadow applications at a measurable rate is not yet separated in the available evidence.

### Mechanism 3: The two-sided compression

The build-vs-buy threshold is being moved from two directions simultaneously.

From the top: senior and mid-level developers, freed from lower-complexity requests that citizen developers now handle, have capacity for more complex internal builds that previously would have required vendor purchases. From the bottom: non-developers handle simple requests before they enter the dev queue. The two effects compound.

Available data shows entry-level developer hiring has collapsed: U.S. entry-level tech job postings dropped 67% between 2023 and 2024, and 54% of engineering leaders plan to hire fewer junior developers. The relevant question is where freed senior developer capacity goes. If it routes to complex internal builds that previously required vendor procurement, the threshold moves. No direct study measures that causal link.

### Mechanism 4: Demand destruction, not competitive displacement

The standard market dynamic in software is: customers unhappy with Vendor A move to Vendor B. The customer remains in the vendor market.

The moving-breadbox dynamic is different. The customer exits the vendor market entirely. There is no market signal until the contract is not renewed.

This matters for how we read aggregate SaaS data. Overall market growth can mask category-level exits, especially in the point-solution segment, because exits are absorbed by growth in AI-native applications and enterprise platform expansions at the high end. The stock market repricing -- the "SaaSpocalypse" of early 2026, which wiped approximately $285 billion from software stock valuations including Atlassian down approximately 35% and Salesforce down approximately 28% -- is the clearest available signal that financial markets are pricing this risk. The mechanism is documented. The actual cancellation rate by category is not.

---

## 4. Scene comparison

**Scene 1 (reporting tool canceled)** illustrates the core case: a vendor with a clear value proposition loses not to competition but because the buyer's build cost fell below the subscription price. The decision is reversible only if build costs rise again or maintenance burden exceeds the savings. Neither is certain.

**Scene 2 (HR tool built by non-developer)** illustrates the second mechanism: demand that would have triggered a vendor purchase never materializes. This is harder to observe in market data -- there is no cancellation event, no renewal decision, no RFP that wasn't released. The vendor market is smaller without a measurable signal.

The two dynamics compound. Freed dev capacity from citizen-developer automation enables more complex builds. More complex builds eliminate more vendor purchases. The threshold continues to move.

What distinguishes these scenes from the "lower walls, harder gates" pattern in competitive markets is the absence of a gate. The buyer is not an external party that the vendor must win over. The buyer is internal. The friction in build-vs-buy decisions is the cost and complexity of building, not a procurement process, a regulatory certification, or a trust relationship with an external customer. When AI reduces build cost, the friction falls directly.

---

## 5. Where it broke -- evidence against the good story

**1. The dominant enterprise AI direction in 2025 is buy, not build.**

A 2025 a16z survey of 100 enterprise CIOs across 15 industries found over 90% were testing third-party AI applications. The Menlo Ventures State of Generative AI in the Enterprise 2025 report found 76% of enterprise AI use cases are now purchased rather than built -- but this covers AI use cases specifically, not general enterprise software procurement. The build-vs-buy thesis concerns general software, not AI tools. Whether the same pattern holds for the broader software market is a different question not resolved by these surveys.

**2. Klarna replaced SaaS with SaaS, not with in-house builds.**

The most-cited named case of a company "building instead of buying" is Klarna's 2024 announcement that it was ending its Salesforce CRM and Workday HR partnerships. The closer account: Klarna replaced Salesforce with alternative SaaS tools and Workday with Deel, an HR SaaS platform. The in-house component was the data layer (Neo4j), not the application layer. The Klarna case is real evidence of SaaS consolidation and cost pressure. It is not clean evidence of AI-enabled internal builds replacing vendor purchases.

**3. The best productivity study found developers got slower, not faster.**

METR's July 2025 RCT found a 19% slowdown for experienced open-source developers on mature codebases. This is a direct counter to the premise that AI tools enable rapid internal builds at significantly lower cost. The generalizability to greenfield enterprise internal tools is contested but the result is not dismissible.

**4. The aggregate SaaS market is growing.**

Global SaaS revenue is projected at $390.50 billion in 2025 with strong growth forecast through 2029. Enterprise application counts held roughly flat. The demand-destruction thesis requires a categorical shift within a growing market, not an overall contraction. The signals exist in analyst forecasts and stock prices. They are not yet visible in aggregate cancellation data.

**5. No named case of build-over-buy has been documented at scale.**

No primary dataset shows SaaS subscription cancellation rates by product category attributable to in-house AI-enabled builds. The Klarna case is the only named, documented instance of a major company publicly attributing vendor replacement to internal AI activity -- and that case involved replacing SaaS with SaaS. Analyst commentary exists; named primary evidence does not.

**6. Gartner's forecast implies 65% of point-product SaaS survives.**

Gartner predicts 35% of point-product SaaS tools will be replaced by AI agents or absorbed into larger agent ecosystems by 2030. That number receives wide coverage. The corollary -- that 65% survive -- receives less. The bear case for point solutions is real. It does not require their elimination.

**7. Gartner also predicts 40% of agentic AI projects will be canceled by 2027.**

The same Gartner analysis that forecasts point-solution disruption also forecasts that over 40% of agentic AI projects will be canceled by 2027 due to costs and unclear ROI. Build projects fail too.

---

## 6. Where it held -- evidence the window is real

**1. AI coding tool adoption is confirmed at scale.**

GitHub Copilot and Cursor together command 60% of the paid AI coding tool market. 90% of Fortune 100 companies use Copilot. More than half of the Fortune 500 use Cursor. These tools are embedded in enterprise development workflows at a scale that makes the threshold-shift hypothesis non-trivial.

**2. The market repriced software company valuations significantly in early 2026.**

The "SaaSpocalypse" of early 2026 wiped approximately $285 billion from software stock valuations. Atlassian fell approximately 35%. Salesforce fell approximately 28%. Workday and DocuSign were downgraded by Jefferies citing AI disruption risk. Thomson Reuters fell 15.83% in a single session. LegalZoom fell 19.68%. Financial markets are pricing demand destruction risk across the point-solution segment. This is not proof of realized cancellations. It is proof of durable analytical concern held by institutional investors close to the data.

**3. Low-code and citizen developer adoption is confirmed at enterprise scale.**

Available surveys suggest 84% of enterprises have adopted low-code or no-code platforms and 41% have active citizen development programs -- treat as directionally reliable, not settled fact. The market is $28.75 billion.

**4. Analyst consensus on the exposed categories is consistent.**

Reporting and analytics tools, workflow automation, internal portals, integration connectors, and vertical-niche point solutions are identified as at-risk across Gartner, Bain, IDC, and SaaS Capital analyses. No primary churn data by category confirms this. The consistency across independent analysts is meaningful even without primary data.

**5. SaaS spending growth is driven by price increases, not new application adoption.**

Zylo 2026 data shows SaaS spending is rising primarily because existing applications are becoming more expensive (AI tiers, usage-based pricing, contract expansions), not because organizations are adding more tools. Flat application counts combined with rising spend per app is consistent with the build-vs-buy thesis: at the margin, organizations are building or foregoing new point solutions while paying more for the core applications they retain.

**6. Enterprise AI-native app spend grew 181%, with large enterprises at 393%.**

AI-native application spend grew explosively in 2025. This growth is the buy side of the enterprise AI market. It does not contradict the build-vs-buy thesis -- it is a separate market segment (AI applications) growing as a different category from the point solutions at risk.

---

## 7. Internal governance and Exit test

**Internal governance:** This case does not involve AI making decisions about people's lives directly -- no eligibility denial, no firing, no credit decision. But the governance concerns are real and get missed because the stakes look smaller.

When citizen developers build internal tools, those tools may process employee data, trigger automated workflows, or gate access to organizational resources. Three questions apply: does the organization know those tools exist? Can they be audited? Can their outputs be contested? Currently, 60% of IT leaders lack visibility into all AI tools in use and only 37% of organizations have policies to detect shadow AI.

When AI coding tools build internal systems that affect employee performance tracking, resource allocation, or decision routing, those systems need the same accountability structures as any other system with human-outcome effects. Being built internally does not exempt them. Applying those standards to citizen-developer output is an active governance gap.

**Exit test:** Buyers of point-solution software have credible exit -- they can cancel contracts and build internally, switch vendors, or go without. This market is not captive. The vendors in the exposed segment do not have structural lock-in comparable to ERP systems or regulated platforms.

For the vendors, the threat is real but fair. Exit is working the way exit is supposed to work: buyers are leaving when the value proposition no longer holds. That is the market functioning correctly.

The risk of captivity runs in the opposite direction: if procurement consolidates toward a small set of AI platform vendors (Microsoft, Salesforce, ServiceNow, SAP), the point-solution market's exit gets replaced by a different captivity. Buyers who exit $50K/year analytics tools into the Microsoft 365 bundle are not freer -- they are differently captured.

This has a direct consequence for Shared Gains. Competition is the mechanism that distributes gains from the point-solution layer to buyers. When a buyer exits a point solution because build cost fell or because a smaller vendor offered better value, competition worked. But if buyers are consolidating into platform bundles rather than genuinely diversifying their vendor relationships, those gains don't flow through competition -- they get captured by the bundle holder. The competition mechanism functions correctly at the point-solution layer and fails at the platform layer simultaneously.

---

## 8. Shared Gains test

**Who captures the gains from the threshold shift?**

In the scenario where a development team builds an internal tool instead of buying a vendor subscription, the immediate gain is organizational -- the company stops paying $48,000 per year and keeps that money. Whether that gain flows to employees (through wages, reinvestment in work quality, or headcount) or to shareholders (through margin improvement) depends on the firm and its competitive environment.

For the vendor, the loss is real. Vendors in the exposed segment are not monopolists extracting rents. They are smaller companies -- many of them B2B SaaS companies with their own employees, developers, and customers -- whose market is contracting. The gains of demand destruction accrue to buyers; the losses land on vendor employees and shareholders who are not the same people capturing the gains.

**The IT Ladder dimension:** Junior developer hiring has collapsed. Entry-level tech job postings fell 67% between 2023 and 2024. 54% of engineering leaders plan to hire fewer junior developers. If freed senior developer capacity replaces vendor purchases without bringing junior developers into the workflow, the gains of the threshold shift accrue to senior developers and organizations while the cost of the narrowed entry path lands on workers who cannot start their careers. That is a distributional failure even if the aggregate efficiency gain is real.

The narrowed entry path is not the complete picture. The threshold shift also opens more complex in-house projects that previously would have gone to vendors -- work that could be more formative for junior developers than simple commodity builds. The risk is not only that work disappears. It is that the rate of automation compresses the learning surface inside those larger projects before junior developers can build judgment from it. That timing question is unresolved.

The Shared Gains test is not obviously passing here. The mechanism concentrates gains in organizations and senior developers while distributing costs to junior workers and vendor-segment employees. Whether organizations deliberately route freed capacity into mentorship and pipeline development is a management choice, not a market outcome.

---

## 9. Minimum floor

The minimum floor for this pattern concerns not whether build replaces buy -- that is a market process working correctly -- but whether the organizational and worker effects are governed.

**For citizen developer governance:**

- Organizations deploying low-code platforms should require IT review and approval for any citizen-developer tool that processes employee data, affects workflow decisions, or gates resource access.
- Shadow AI policies should include AI-generated internal applications, not just AI tool usage.
- Application ownership should be assigned before deployment, including maintenance and decommissioning responsibility.

**For the IT Ladder effect:**

- Engineering organizations should monitor junior hiring and mentorship ratios alongside AI tool adoption. If senior developers absorb junior task categories using AI, the organization needs a deliberate path for bringing new developers into the pipeline -- or it accumulates a capability gap. See [IT Ladder Collapse](/case-studies/it-ladder-collapse/) for the full mechanism.
- Structured apprenticeship tracks, protected learning-work allocations, and measurable hiring ratios give this floor teeth.

**For vendor-side workers:**

Demand destruction is a legitimate market outcome. The workers affected by it are not protected by making the market less efficient. What would protect them is portable benefits that survive job changes, retraining accessible before unemployment hits, and income support that arrives on time. None of these currently operate at adequate scale. That is the gap the minimum floor names.

**For buyers consolidating toward AI platforms:**

- The exit from point solutions into AI platform bundles is not necessarily freedom. Buyers should evaluate total switching cost and future price leverage before consolidating subscriptions into single-vendor bundles. Procurement teams should document what alternatives they evaluated and why the bundle was chosen, not just whether a contract was renewed.

---

## 10. What to do

**If you are a software development leader:**

- Audit where your vendor spend is in the $10,000-$200,000/year point-solution range. For each tool, estimate the build cost using current AI-assisted development capacity. The threshold calculation is worth doing explicitly, not intuitively.
- Before building: assign ownership, define the maintenance commitment, and set a quality bar. Shadow apps fail silently. Deliberate builds need clear owners.
- Do not assume freed senior capacity will route automatically to learning opportunities for junior developers. That routing is a management decision that must be made explicitly.

**If you are an IT governance or security leader:**

- Extend your shadow AI policy to include AI-generated internal applications. Usage and output are different risks.
- Require IT review for citizen-developer tools before deployment to production, with a lightweight process designed to approve rather than block.
- Publish an internal catalogue of sanctioned low-code platforms and the guardrails that apply. 60% of IT leaders currently lack visibility into AI tools in use. That gap is a governance failure, not a technology problem.

**If you are a product leader at a point-solution vendor:**

- The threat is real and the timeline is accelerating. The value proposition of your product needs to be stated in terms of what it costs to build the equivalent internally with AI tools, not what it cost in 2020.
- Deep integration, workflow complexity, multi-tenant data benchmarking, and compliance moats are structural; simplicity is not.
- AI-native product features that genuinely reduce buyer build-cost calculations are worth more than additional point-solution functionality.

**If you are a worker in the exposed vendor segment:**

- Demand destruction in the point-solution segment is a structural market process, not a firm-level failure. The exposure is category-wide. Skill portability is the variable that determines individual outcomes when the category contracts.
- AI coding skills, cloud data infrastructure, and adjacent technical domains are transferable to the teams that are doing the building.

---

## Loop Effect

**Bad loop:** AI tools lower build costs. Organizations build what they used to buy. Vendor-segment employment shrinks. Junior developer hiring falls as senior developers absorb both internal builds and AI-tool management. Citizen developer tools proliferate without governance. Shadow applications process employee data without oversight. Organizations consolidate into large AI platform bundles, trading one lock-in for a bigger one. Gains flow to organizations and shareholders; costs land on junior workers, vendor employees, and people who cannot get into the development pipeline.

**Good loop:** Organizations use AI tools to build thoughtful internal replacements for overpriced point solutions, recovering budget that funds better wages and product investment. Citizen developer platforms expand access to tool-building across the organization with proper IT governance. Freed senior developer capacity is channeled into more complex projects and into mentoring junior developers through a deliberate apprenticeship structure. Vendor-segment workers transition to the growing AI tooling and platform market with portable benefits and accessible retraining. Buyers consolidating subscriptions evaluate lock-in risks explicitly before moving into platform bundles.

**Case verdict:** The market signal is credible -- stock repricing and analyst consensus are pointing in the same direction -- but the threshold shift has not been confirmed in primary churn data. The scale of realized demand destruction is unknown. The productivity evidence is genuinely contested. The distributional effects -- particularly on junior workers and vendor employees -- are not being routed through any deliberate governance mechanism. The gains are flowing to organizations; the costs are not being shared.

---

## North Star verdict

The build-vs-buy threshold is plausibly moving. The signals are strong: institutional investors repriced the point-solution segment by approximately $285 billion in early 2026, analyst forecasts across Gartner, Bain, and IDC align on the exposed categories, and the structural logic of AI-reduced build costs is coherent. What the evidence does not yet confirm is the mechanism operating at scale. No primary churn dataset by product category has been found. The only named case (Klarna) involves replacing SaaS with SaaS, not in-house builds. Market repricing reflects investor belief about future cancellations, not measured evidence of current ones.

When demand destruction replaces vendor competition as the mechanism, point-solution vendors lose without warning and without a competitor to benchmark against. That is market efficiency working -- but the distributional effects are not being caught by any floor. Junior developers lose the entry pipeline. Vendor employees lose firms that may not survive the shift. Senior developers and organizations capture the gains.

> security --> choice --> competition --> shared gains --> more security

This case does not close the loop. Competition is working to reduce organizational costs, but the shared gains channel is broken: the savings from vendor cancellations are not reaching workers, and the narrowing of the junior developer pipeline compounds over time. The minimum floor -- portable benefits, apprenticeship structures, IT governance for citizen-developer output -- is the difference between a productive market transition and a redistribution event that looks like progress from the top.

---

## Research gaps

- **[RESEARCH GAP: Primary churn data by vendor category.]** No study has measured SaaS cancellation rates in the $10,000-$200,000/year segment attributable to AI-enabled internal builds. The mechanism is documented; the scale is analyst forecast, not primary measurement.
- **[RESEARCH GAP: Causal link between freed senior developer capacity and internal build activity.]** The mechanism is plausible and consistent with hiring data. It has not been directly measured.
- **[RESEARCH GAP: Citizen-developer governance failure rates.]** Shadow AI data is robust. Evidence specifically linking citizen-developer-built tools to security incidents or compliance failures (as distinct from shadow AI tool usage generally) is not separated in the available literature.
- **[RESEARCH GAP: Build cost threshold by category.]** No primary study measures the point at which AI-assisted build cost crosses the vendor price for specific software categories. The $10,000-$200,000/year exposure range is analyst consensus, not an empirically derived threshold.
- **[RESEARCH GAP: Net distributional effect on vendor-segment workers.]** No study measures employment outcomes for workers in the point-solution vendor segment compared to AI tooling and platform sector growth. Whether the demand-destruction loss is offset by the AI-native application gain in employment terms is unknown.
- **[RESEARCH GAP: METR productivity follow-up.]** The February 2026 METR follow-up study design was revised due to selection effects. Results pending. The productivity question remains the most empirically load-bearing gap in the case.
