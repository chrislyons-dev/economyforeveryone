---
title: 'Admin Drag Map (MD / Clinic)'
last_updated: 2026-03-01
status: draft
lane: Healthcare-MD
tags:
  - big-costs
  - admin-drag
  - workflow
  - mapping
---

# Admin Drag Map (MD / Clinic)

**Purpose:** identify where time goes, who owns the delay, and what could be reduced safely.

## Categories to map

- documentation
- billing/coding
- prior auth / denials
- referrals
- patient messaging
- medication management
- compliance checklists
- duplicate entry / portal hopping

## Output

A list of:

- high-frequency time sinks
- root causes (payer rule, system design, regulation, habit, nobody owning the handoff)
- safe automation opportunities
- "never automate" zones (risk, dignity, accountability)
- delays that are really ownership problems, not staffing problems
- evidence for where the time tax actually lives

## Quick mapping prompt (10 minutes)

For each category, answer:

- **What is the task?** (in one sentence)
- **How often?** (per day/week)
- **How long?** (minutes each)
- **Who does it today?** (MD/RN/MA/admin)
- **Who should own it?** (if different)
- **Constraint type?** (payer / regulation / EHR / staffing / policy / habit / unclear ownership)
- **Why does it exist?** (payer rule, EHR friction, habit, legal, missing standard)
- **Proof source?** (EHR report, time sample, message counts, denial codes, 10-chart audit)
- **What is the failure mode?** (what goes wrong if rushed)
- **What is the safest next move?** (remove / standardize / delegate / automate draft)
- **What is the handoff?** (who has the ball now, and what counts as done?)

## The move-the-work ladder (cheapest safe role)

Try in this order:

1. Remove the step entirely
2. Standardize with a checklist/template
3. Delegate to the lowest safe role
4. Automate **drafting/assembly** with human sign-off
5. Only then consider deeper workflow automation

Rule: if it requires clinical judgment, it stays human-owned.

## A useful extra question

Ask: **"Is this slow because the work is hard, or because the handoff is fuzzy?"**

A lot of the worst drag comes from nobody owning the next move.
