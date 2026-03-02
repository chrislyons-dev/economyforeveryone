---
title: 'Triage and Prioritization'
last_updated: 2026-03-01
status: draft
lane: Healthcare-MD
tags:
  - big-costs
  - triage
  - prioritization
  - operations
---

# Triage & Prioritization (pick the first target)

The fastest way to help is not "fix everything."
It is to pick the **highest-frequency pain** that requires the **least clinical judgment** and has a clear owner.

## Score each candidate task (0-3)

### A) Frequency

- 0 = rare
- 1 = weekly
- 2 = daily
- 3 = many times/day

### B) Minutes per occurrence

- 0 = <1 min
- 1 = 1-3 min
- 2 = 4-7 min
- 3 = 8+ min

### C) Clinical judgment required (reverse score)

- 0 = high judgment / high stakes
- 1 = moderate
- 2 = low
- 3 = mostly clerical / assembly

### D) Risk if wrong (reverse score)

- 0 = high harm potential
- 1 = moderate
- 2 = low
- 3 = minimal (administrative)

### E) Owner clarity

- 0 = nobody owns it
- 1 = shared vaguely
- 2 = one team mostly owns it
- 3 = one role clearly owns it

### F) Effort / dependencies (reverse score)

- 0 = multi-month IT / payer / legal dependency
- 1 = several approvals or significant build work
- 2 = one team can probably ship it this month
- 3 = clinic-controlled in days

## Priority score

**Priority = (A + B + C + D + E + F)**

Start with the top 1-2 tasks.
Ship a small fix.
Measure.
Repeat.

## Good first targets (usually)

- prior auth packet assembly
- denial cleanup when the same reason keeps repeating
- referral handoff ownership
- drafting patient message replies for common topics
- visit note drafting from a structured outline
- routine med refill protocol routing (rules + flags)
- duplicate portal entry or duplicate form upload

## Bad first targets (usually)

- denying care
- high-stakes triage without clear ownership
- anything that replaces consent conversations
- complicated workflow fights where no team will own the change

## Rule of thumb

If you cannot answer "who owns this mess once we touch it?" you are probably not ready to start there.

## Equity / access check

Before you pick a winner, ask:

- who might this make worse off?
- how would we notice quickly?
- does this save time by shifting burden onto harder patients?
