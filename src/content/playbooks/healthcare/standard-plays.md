---
title: 'Standard Plays (Minimum Viable Interventions)'
last_updated: 2026-03-01
status: draft
lane: Healthcare-MD
tags:
  - big-costs
  - interventions
  - workflow
  - implementation
---

# Standard Plays (minimum viable interventions)

These are the default moves to reduce admin drag safely.
Pick one. Ship it. Measure it.

Rule of thumb: start with **clarity, routing, and deleting dumb loops** before you reach for heavy automation.

## Play 1: Inbox triage rules (human-owned)

**Goal:** reduce clinician inbox time without missing safety signals.

- Define categories (urgent clinical / routine clinical / admin / FYI)
- Route admin to staff; route routine to protocol queues
- Use drafted replies for common items (clinician approves)
- Add clear escalation triggers

**Measure:** inbox minutes/day, response times, safety events.

**Ship this:** a routing table with escalation triggers.  
**Safety backstop:** random weekly audit of urgent items and missed escalations.  
**Failure modes:** urgent items buried, staff overload, patients unsure who owns the reply.

## Play 2: Drafted patient replies (templates + personalization)

**Goal:** stop rewriting the same message 30 times.

- Build 10-20 templates for common questions
- Include "red flag" language (when to call/come in)
- Clinician edits and sends

**Measure:** time per message, patient satisfaction proxy, callback rate.

**Ship this:** 10-20 reviewed templates with red-flag language.  
**Safety backstop:** clinician approval stays required for send.  
**Failure modes:** wrong tone, missing nuance, callback volume shifts instead of falling.

## Play 3: Note drafting from a structured visit outline

**Goal:** cut note time without degrading quality.

- Use a consistent structure (HPI, assessment, plan)
- Draft from problem list + prior notes + visit structure
- Require citations/links to source in chart for key claims
- Clinician reviews and signs

**Measure:** note closure time, after-hours time, documentation quality audits.

**Ship this:** one structured note format for one visit type.  
**Safety backstop:** clinician signs and spot-audits source references.  
**Failure modes:** hallucinated details, stale carry-forward text, hidden quality drop.

## Play 4: Prior auth packet builder (assembly, not decisions)

**Goal:** reduce the hunt-and-gather burden.

- Standard packet per payer and condition
- Auto-assemble: history, meds tried, labs/imaging, guidelines
- Human reviews; clinician signs
- Track where packets still bounce so the form gets better over time

**Measure:** cycle time, approval rate, number of rework loops.

**Ship this:** one packet checklist for one payer and one condition.  
**Safety backstop:** human review and sign-off before submission.  
**Failure modes:** missing document, payer-specific mismatch, packet assembly shifts burden to the wrong role.

## Play 5: Plain-language denial cleanup

**Goal:** stop wasting time on denials nobody can decode.

- Require a simple denial reason field people can actually understand
- Group denials into a small set of usable categories
- Build the next action into the workflow: resend / appeal / switch / done
- Track repeat denial reasons by payer and service line

**Measure:** time from denial to next action, repeat denial categories, avoidable rework.

**Ship this:** denial categories plus one plain-language next-step grid.  
**Safety backstop:** appeal/escalation owner named for unclear denials.  
**Failure modes:** denials categorized prettily but still unresolved, staff confusion about next move.

## Play 6: Referral handoff owner

**Goal:** reduce referral friction and bounce-backs.

- Assign one owner for outbound referral handoffs
- Standard summary + question being asked
- Include relevant labs/imaging and timeline
- Use a checklist so nothing is missing
- Measure time to scheduled visit, not just time to fax sent

**Measure:** referral turnaround time, incomplete referral rate, time to scheduled visit.

**Ship this:** a handoff checklist plus one owner assignment.  
**Safety backstop:** weekly audit of stalled referrals.  
**Failure modes:** fax sent counted as done, patient still unscheduled, ownership ambiguity persists.

## Play 7: Protocol-driven med refills (rules + flags)

**Goal:** move routine refills out of clinician brainspace.

- Define refill protocols
- Auto-flag exceptions (labs overdue, interactions, controlled meds)
- Human ownership stays clear

**Measure:** refill turnaround, exception rate, safety events.

**Ship this:** one refill protocol with exception flags.  
**Safety backstop:** exceptions route to clinician review automatically.  
**Failure modes:** overdue labs missed, controlled-med exceptions mishandled, refill delay shifts to staff queue.

## Play 8: Fast-lane approvals for repeat low-value denials

**Goal:** stop repeating the same approval fight for the same low-risk cases.

- Identify services with high approval likelihood after routine rework
- Create a gold-card or fast-lane proposal for those categories
- Start with one payer or one service line if needed
- Track whether time saved comes without extra downstream problems

**Measure:** approval cycle time, repeat-appeal volume, clinician/admin time saved.

**Ship this:** one fast-lane proposal for one payer or one service line.  
**Safety backstop:** track downstream denials or safety issues after approval shortcuts.  
**Failure modes:** payer refuses the lane, hidden rework shifts downstream, low-value fight remains unchanged.

## Play 9: Reduce duplicate work (the delete-a-step play)

**Goal:** remove a step that exists only because "we've always done it."

- Identify duplicates (double entry, double review, duplicate portal upload)
- Propose one removal with a safety backstop
- Trial for 2-4 weeks; keep if safe

**Measure:** minutes saved, error rate.

**Ship this:** one deleted step plus a 2-4 week trial.  
**Safety backstop:** rollback trigger if error rate rises.  
**Failure modes:** hidden duplicate was actually a safety catch, work reappears elsewhere.

## Play 10: Patient instructions that prevent repeat calls

**Goal:** reduce confusion loops for patients and staff.

- Rewrite top repeat-confusion instructions in plain language
- Put next steps, timing, and who-to-call in one place
- Check whether the message works with real patients, not just staff

**Measure:** repeat call volume, message turnaround time, patient confusion rate.

**Ship this:** one rewritten instruction bundle for one high-repeat workflow.  
**Safety backstop:** test with real patients or staff before broad use.  
**Failure modes:** instructions read clearly to staff but not to patients, confusion shifts to portal messages.

## Play 11: Lab and diagnostic results routing rules

**Goal:** keep abnormal results visible while moving routine review through a cleaner path.

- Define what requires clinician eyes
- Define what can route through protocol or staff
- Name turnaround expectations
- Build escalation for abnormal or unclear results

**Measure:** result turnaround time, missed follow-up rate, patient callback rate.

**Ship this:** one routing rule table for one result category.  
**Safety backstop:** abnormal results audit with rapid escalation.  
**Failure modes:** abnormal values misrouted, staff uncertainty about escalation, delayed callbacks.

## Play 12: One-click orderset plus patient instruction bundle

**Goal:** reduce repeated assembly work for common conditions.

- Bundle orders, education, and next-step instructions
- Keep clinician review and customization
- Start with one high-volume condition

**Measure:** order-entry time, repeat clarification messages, completion rate.

**Ship this:** one orderset plus one instruction bundle.  
**Safety backstop:** clinician review before sign.  
**Failure modes:** stale defaults, wrong patient instructions, hidden downstream work.

## Play 13: Visit prep and pre-charting guardrails

**Goal:** move safe prep work upstream without shifting judgment away from the clinician.

- Define what can be prepped safely
- Define what must stay clinician-owned
- Standardize prep inputs and red flags

**Measure:** visit prep time, note closure time, missing-info rate.

**Ship this:** one pre-charting checklist for one visit type.  
**Safety backstop:** clinician confirms key judgment fields.  
**Failure modes:** staff drift into assessment, missing nuance, prep becomes duplicate work.
