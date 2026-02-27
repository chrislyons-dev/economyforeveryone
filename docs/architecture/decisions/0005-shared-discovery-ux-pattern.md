# 0005 - Shared Discovery UX Pattern

- Status: Accepted
- Date: 2026-02-26

## Context

Blogs, case studies, and playbooks all use search/filter controls but evolved with slight visual inconsistencies.

## Decision

Standardize discovery UX patterns across content index pages:

- Same filter container treatment (border, padding, background).
- Same control chrome (inputs/selects, spacing, labels).
- Different content-card accent colors by content type for fast page recognition.

## Consequences

- Pros:
  - Familiar interaction model across sections.
  - Less cognitive overhead when switching content types.
  - Distinct section identity retained through color semantics.
- Cons:
  - Component/style coupling increases; broad style changes affect multiple pages.
