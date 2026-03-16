---
title: 'Audit Logs, Records, and Appeals'
last_updated: 2026-03-14
status: draft
lane: Community
tags:
  - ai
  - claims
  - eligibility
  - appeals
  - community
---

# Audit Logs, Records, and Appeals

Use this playbook when the institution needs appeals that can actually reverse a bad denial before the harm becomes permanent.

The standard is not whether a formal appeal exists.
It is whether the claimant can access the actual decision record, reach a reviewer, and get a decision while reversal still matters.

## What problem this solves

Claims and eligibility systems often separate the pieces that matter:

- the model output sits in one system
- the notice sits in another
- the review path sits somewhere else

That fragmentation turns rights on paper into friction in practice.

## Logging requirements

Maintain logs that show:

- model or rules version used
- inputs relied on
- output, score, or recommendation
- human reviewer or approver
- final decision
- time stamps
- override status
- appeal outcome

The required record is the one that actually shaped the decision, not a cleaned-up summary created after the fact.

## Records access

Records access should be:

- easy to request
- fast enough to matter
- understandable to a normal claimant
- complete enough to support a challenge

## Appeals

A meaningful appeal path needs:

- a named owner
- a response clock
- authority to reverse the action
- a way to submit additional evidence
- tracking of overturn and response performance

## Metrics and tripwires

Track:

- records access response time
- appeal response time
- overturn rate
- percentage of cases with complete logs
- percentage of appeals resolved before practical harm hardens

Tripwires:

- records cannot be produced quickly
- notices and logs do not match
- appeals lack authority to reverse the action
- review arrives after the practical harm is already locked in

## Bridge language

"A right that arrives too late is not a real right."

"Log the decision in the form it was actually made, not the form that looks safest later."
