---
title: 'Clinic Playbook (Minutes Back)'
last_updated: 2026-03-01
status: draft
lane: Healthcare-MD
tags:
  - big-costs
  - clinicians
  - admin-drag
  - operations
  - guardrails
---

# Clinic Playbook: Minutes Back (Physicians vs Paperwork)

This is a small, repeatable playbook for helping clinicians who are drowning in admin drag.

Goal: **give minutes back** without creating new harms.

Core loop:

**Map the drag -> pick 1-2 targets -> apply guardrails -> ship a small fix -> measure -> repeat**

## What this playbook now assumes

The newer healthcare case work sharpened two things:

1. A lot of "complexity" is not random. It is built into forms, approvals, handoffs, portals, and billing rules.
2. The fix is not just "work harder" or "buy AI." It is throughput, clarity, and fewer dumb loops.

So the working question is:

**Where is the delay, who owns it, and what small rule or workflow change would give time back without making care worse?**

## What's inside

- [Admin Drag Map (MD / Clinic)](./admin-drag-map.md)  
  Where time goes (documentation, prior auth, inbox, etc.) and what's driving it.

- [AI for Care (with Guardrails)](./ai-for-care-guardrails.md)  
  What AI can do safely, what it must never do, and the always-required rules.

- [Triage and Prioritization](./triage-and-prioritization.md)  
  How to pick the first target (frequency x minutes x judgment x risk).

- [Standard Plays (Minimum Viable Interventions)](./standard-plays.md)  
  A small menu of safe interventions (delegation + standardization first, automation second).

- [Scoreboard (Prove It Helped)](./scoreboard.md)  
  3-5 metrics to prove this is working.

- [Field Notes (MD / Clinic)](./templates/field-notes.md)  
  A 5-minute weekly capture that turns lived pain into the next fix.

- [One Ask (Clinic Ops / IT / Leadership)](./templates/one-ask.md)  
  A short request you can send to leadership/ops/IT to remove a bottleneck.

- [Quickstart (15 Minutes)](./quickstart-15-min.md)
  A fast entry point for testing the kit on one real workflow.

- [MD Feedback Questions](./md-feedback-questions.md)
  Questions that make it easier for a physician to review the playbook against real clinic reality.

## The practical target list

The best first targets are usually boring and expensive:

- prior auth loops that bounce the same case three times
- inbox work that should have a default path but does not
- referrals that stall because no one owns the handoff
- documentation rules nobody can explain clearly
- patient instructions that generate repeat confusion and repeat calls
- denial workflows that eat time without changing the answer

If you can shorten one of those loops, you usually help patients and clinicians at the same time.

## How to use (the 30-minute version)

1. Do a quick **admin drag map** (10 min)
2. Use **triage** to pick one target (5 min)
3. Apply **guardrails** (2 min)
4. Choose one **standard play** and ship a minimum viable fix (10-60 min)
5. Update the **scoreboard** weekly (2 min)
6. Capture a **field note** weekly (5 min)

## Definition of Done

A clinic-improvement sprint is done when it produces:

1. one target
2. one owner set
3. one chosen standard play
4. one safety backstop and rollback plan
5. one baseline metric plus weekly tracking
6. one one-ask sent or queued

## Owner model (simple RACI)

Most clinic drag does not have one owner. It has a small owner stack.

- **Clinical owner:** patient-safety and judgment guardrails
- **Operations owner:** routing, staffing, and workflow behavior
- **Build owner:** EHR, IT, or vendor changes
- **Policy owner:** compliance, billing, payer-contract, or legal constraints

If one of these is missing, the work may stall or create a hidden risk.

## Two-track delivery model

- **Track A: clinic-controlled**
  templates, routing rules, delegation, checklists, drafted replies, local handoff rules
- **Track B: org-controlled**
  EHR build, payer-contract changes, formal policy updates, reporting infrastructure

This distinction matters because some ideas are good but not clinic-controllable.

## Minimum change-safety checklist

Before shipping any workflow change, answer:

- what could go wrong?
- how would we detect it quickly?
- what is the escalation trigger?
- what is the rollback plan if the guardrail fails?

## What stronger asks look like

The hospital-complexity work points toward a few better asks:

- "Publish prior-authorization turnaround times by payer and service line."
- "Set a plain-language denial standard so staff and patients can tell what failed."
- "Create one owner for referral handoffs and measure time to scheduled visit."
- "Reduce duplicate data entry in this workflow by 50% within 90 days."
- "Create a gold-card or fast-lane path for repeat approvals with low denial value."

These are better than "fix burnout" because they give someone a rule, an owner, and a number.

## Success criteria

This is working if:

- clinician after-hours ("pajama time") is down
- inbox time is down
- note closure time is down
- prior auth/referral cycles get shorter
- nothing gets less safe, less humane, or less accountable
