---
title: 'Check the Facts Before a Denial'
last_updated: 2026-03-14
status: draft
lane: Civics
tags:
  - ai
  - claims
  - eligibility
  - corroboration
  - civics
---

# Check the Facts Before a Denial

Use this playbook when a flag, score, mismatch, or anomaly could trigger denial, closure, disenrollment, or another materially consequential adverse action.

The point is simple: one automated signal should not become a real-world consequence by itself.

## What problem this solves

The fastest harms often happen before appeals ever start.
Action lands first.

If a single mismatch, risk score, fraud flag, or incomplete-data signal can trigger a high-stakes adverse action, the system has set the threshold too low.

## What counts as corroboration

Corroboration means an independent second basis that is reviewable, documented, and not merely a restatement of the first signal.

## Operating rule

Require corroboration before any materially consequential adverse action unless a narrow emergency exception is defined in advance.

Examples:

- a utilization alert should not stand in for a clinical review by itself
- a data mismatch should not stand in for substantive ineligibility by itself
- a fraud flag should not stand in for a final closure decision by itself

## Emergency exception

Emergency-first action should be rare, narrow, and reviewable.

If action happens before corroboration:

- record the emergency basis
- set a fast post-hoc review clock
- require prompt corroboration
- reverse the action if corroboration fails

## Metrics and tripwires

Track:

- share of adverse actions taken with corroboration
- emergency exception rate
- post-hoc reversal rate
- reviewer time per flagged case

Tripwires:

- adverse actions routinely proceed on one signal alone
- emergency exception use becomes routine
- reviewers cannot explain what counted as corroboration
- reversal rates show the threshold is too low

## Bridge language

"Require corroboration before harm."

"If one automated flag can still trigger the denial, the safeguard is cosmetic."
