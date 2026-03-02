---
title: 'Scoreboard (Prove It Helped)'
last_updated: 2026-03-01
status: draft
lane: Healthcare-MD
tags:
  - big-costs
  - metrics
  - measurement
  - outcomes
---

# Scoreboard (prove it helped)

Pick 3-5 metrics. Track weekly.
If you cannot measure it, it drifts into impression and anecdote.

## Recommended core metrics

- **After-hours EHR time ("pajama time")** per clinician
- **Inbox time/day** (or count x average handling time)
- **Note closure time** (visit -> signed note)
- **Prior auth cycle time** (request -> decision)
- **Referral cycle time** (order -> scheduled -> completed)
- **Patient repeat-contact rate** (how often patients have to call or message again on the same issue)

## Good add-on metrics when they fit the target

- **Denial-to-next-action time** (how long a denial sits before someone can do the next thing)
- **Repeat denial categories** by payer or service line
- **Time to scheduled referral visit**
- **Duplicate entry count** in a target workflow
- **Repeat patient call volume** after instructions are sent

## Safety / quality checks (always)

- Patient safety events related to the workflow change (should be zero or down)
- Patient complaint themes (watch for "I cannot reach my doctor" or "nobody can tell me what happened")
- Clinician satisfaction ("did this actually help?")

## Measurement definitions (make this explicit)

For every metric, define:

- **Definition:** exact numerator / denominator or timing start-stop
- **Source:** EHR report, payer portal, manual sample, queue report, chart audit
- **Guardrail:** what must not worsen while this improves

Examples:

- **After-hours EHR time**
  Definition: clinician EHR activity outside scheduled clinic hours, per week
  Source: EHR usage report
  Guardrail: note quality and patient response delays do not worsen

- **Prior auth cycle time**
  Definition: request submitted to payer decision received
  Source: PA tracker, payer portal, manual sample
  Guardrail: approval quality does not worsen through missing documentation

- **Patient repeat-contact rate**
  Definition: repeat call or portal message on the same unresolved issue within a set window
  Source: message pool review or call-center sample
  Guardrail: do not suppress contact by making access harder

## Reporting rhythm

- Weekly: quick numbers + one sentence interpretation
- Monthly: what we shipped + what changed + next target

## Keep it honest

Do not hide a slower patient handoff behind a prettier dashboard.
If time moved from one person to another, say that plainly.
