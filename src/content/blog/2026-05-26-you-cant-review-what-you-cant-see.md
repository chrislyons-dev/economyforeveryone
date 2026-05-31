---
title: "You Can't Review What You Can't See"
description: 'Human oversight of AI fails when reviewers cannot see the context pipeline. Review only works when the system produces a decision record reviewers can inspect.'
pubDate: 2026-05-26
status: 'published'
category: 'ai-impact'
topics:
  - 'ai-governance'
  - 'context-engineering'
  - 'accountability'
  - 'human-oversight'
tags:
  - 'ai-impact-series'
  - 'context-architecture'
  - 'human-oversight'
  - 'explainability'
receiptTags:
  - 'peer-reviewed'
  - 'court-records'
  - 'government-data'
sourceChannel: 'economyforeveryone'
audience:
  - 'technology-workers'
  - 'general-public'
receipts: []
---

The institution that deploys an AI system controls what the system knows. The user sees the interface; the reviewer sees the output. Neither sees the architecture.

For a productivity tool, that barely matters. For a system that approves or denies healthcare coverage, determines benefits eligibility, evaluates job applications, or shapes housing decisions, that gap is where accountability fails.

## Prompting is the surface. Context is the power.

Anthropic drew the distinction precisely. Prompt engineering covers "methods for writing and organizing LLM instructions for optimal outcomes." Context engineering covers everything the system operates on: the retrieved documents, the conversation history, the memory, the policies, the source rankings, what it must ignore. Anthropic defines it as "strategies for curating and maintaining the optimal set of tokens during LLM inference."

The institution controls that pipeline. It chose which criteria the system weighs, which documents it retrieves, which sources it ranks highest, and what context gets filtered before any query arrives. When a system denies a claim or flags a benefits application, those choices are doing the work.

This is why the distinction isn't academic. The prompt is visible and iterable. The context architecture is invisible and hard to explain. The institution is accountable for both. Only one of them gets scrutinized.

## More context doesn't fix it

A 2025 peer-reviewed study in the EMNLP Findings found that model performance degrades 14% to 85% as input length increases, even when the model already has the right information. Context length alone causes the degradation. Chroma tested 18 frontier models in July 2025 (including Claude Opus 4 and GPT-4.1) and found the same pattern across all of them.

The fix is selecting and curating the right information before it enters the window. That's a discipline the institution either built in or didn't. A longer context window or a better model doesn't change that. Neither the user nor the reviewer can tell which from outside the system. When a denial emerges from a pipeline that had the right information but handled it poorly, there's no downstream signal that anything went wrong. The output looks the same either way.

## Why requiring human review isn't enough

California SB 1120, effective January 2025, requires human review of AI-generated medical necessity decisions. This is the standard institutional response: add a human. The problem is that review requires the reviewer to see what the system saw.

Ben Green's 2022 survey of 41 government algorithm oversight policies found two consistent problems: reviewers often can't perform the oversight function they're assigned, and oversight layers tend to legitimize faulty systems rather than fix them. A 2025 Stanford and Health Affairs study found that claims reviewers at major insurers couldn't explain how their AI tools worked, didn't know AI could be biased, couldn't identify failure modes, and expressed high confidence anyway.

Pinecone's engineering team named the structural mechanism: "Run the same task twice against the same data, and an agent may return different answers with no record of which sources drove either result. For enterprises where auditability is a compliance requirement, that is a structural disqualifier, not a tuning problem."

When the pipeline is opaque, reviewers see outputs without derivations. They can't check whether the context was appropriate, or whether source ranking excluded information that mattered. KFF data from 2025 makes the cost concrete: 11.5% of Medicare Advantage prior authorization determinations were appealed, and 80.7% of those appeals were overturned. Most people don't appeal. The wrong denials stand.

## What reviewers need

For oversight to function rather than perform, reviewers need four things:

- Which context the system used: which documents were retrieved, which sources ranked highest, which criteria applied
- Why that context was selected: the retrieval rules, source rankings, and policies governing what the system was allowed to consider
- What the system concluded and on what basis: the reasoning path from context to decision, instead of only the output
- A full audit log: a timestamped, source-linked record of what the system saw and did, with enough detail to reconstruct the decision

The audit log is for auditors, the appeals process, and any regulator who comes later. The reviewer needs the first three. The system needs to produce all four by design, not as a bolt-on.

Colorado SB 26-189, signed May 14, 2026 and effective January 1, 2027, requires a plain-language explanation within 30 days of an adverse consequential decision and the right to meaningful human review. The reviewer must have authority to override, must not default to the system's output, and must consider relevant evidence. State-regulated insurers have a safe harbor if they meet existing sector-specific disclosure requirements, though whether those requirements satisfy the audit-record standard the law implies isn't confirmed. The EU AI Act requires automatic logging and traceability; key provisions for high-risk systems are targeted for December 2027, following a provisional Omnibus agreement in May 2026. Over half of states have adopted the NAIC Model Bulletin requiring written AI governance programs from insurers, and a 12-state enforcement pilot running through September 2026 is the first structured test of whether those programs are functional. Architecture that can't produce a decision record at the time of determination can't meet any of those floors, regardless of who's nominally in the loop.

More people in the loop doesn't help if they have nothing to look at. Give reviewers the record, or the review is theater.

## One steady action to take this week

Pick one AI system that shapes consequential decisions (something you use, build, or work alongside). Ask two questions about it: what record does it produce at the time of the determination, and who can see it? If you don't know the answers, that's the finding.

## Action ladder

**Short term**

- `If you build AI systems:` Pick one workflow where decisions affect people. Write down: what does the system know and where does it come from? What's logged at decision time? Can the affected person see which inputs and criteria drove the result? How do they challenge it? If you can't answer those, the system isn't ready.
- `If you use services shaped by AI:` When an automated system issues a denial or adverse determination, ask immediately for the written explanation. Note the contestation window in the same notice. Those windows close faster than the documentation needed to mount a challenge.

**Medium term**

- `Builders and deployers:` Build toward traceable context: source-linked records and a decision trail a reviewer can inspect. Treat non-determinism in any consequential pipeline as a design constraint, not a known limitation.
- `Procurement and compliance teams:` Add one question to every AI vendor review: can this system produce, at the time of decision, a source-linked record of which inputs and criteria drove the result? If no, the system will struggle to meet the accountability standards that are coming.

**Long term**

- `Institutions and policymakers:` Colorado SB 26-189 (January 1, 2027) and the EU AI Act (key high-risk provisions targeted for December 2027) are building toward explanation, appeal, and audit requirements. Support legislation that makes decision-record production a condition of deployment, not a reporting layer added after the fact.
- `Anyone paying attention:` The NAIC 12-state enforcement pilot runs through September 2026. Those results will show whether insurer AI governance programs are functional or compliance theater. Track enforcement, not just passage.

## How to talk about it

A human in the loop only helps if they have something to look at. When someone says "we have human review," the follow-up is: can the reviewer see what the system saw? If the decision record doesn't exist, the review is a formality. A useful line that echoes the title: you can't review what you can't see. That's about the architecture. The reviewer is working with whatever the system produces.

## Related reading

- [The Prompt Is the UI. Context Is the Architecture.](/blog/2026-05-19-the-prompt-is-the-ui/) - the companion post on why context is where institutional power lives
- [Case study: Automated Denials and the Accountability Gap](/case-studies/automated-denials-accountability-gap/) - three cases where the audit trail problem caused documented harm
- [The Pattern Underneath the AI Hype](/blog/2026-04-28-the-pattern-underneath-the-ai-hype/)
