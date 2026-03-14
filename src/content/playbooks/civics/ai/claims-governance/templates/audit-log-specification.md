---
title: "Audit Log Specification"
last_updated: 2026-03-14
status: draft
lane: Civics
tags:
  - ai
  - claims
  - eligibility
  - template
  - civics
---

# Audit Log Specification

Use this template to define the minimum record for every materially consequential adverse decision.

## Required fields

- case or claim identifier
- model, rules engine, or workflow version
- inputs used
- output, score, or recommendation
- human reviewer or approver
- final decision
- time stamps
- override status
- notice date
- appeal outcome

## Record quality rules

- the stored record should match the decision as actually made
- changes after the decision should be versioned, not overwritten
- retention should last long enough for review, audit, and appeal
- export should be possible without vendor mediation
