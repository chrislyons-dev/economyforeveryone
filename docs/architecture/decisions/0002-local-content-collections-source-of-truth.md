# 0002 - Local Content Collections as Source of Truth

- Status: Accepted
- Date: 2026-02-26

## Context

Content originally existed across multiple repositories and working-note sources. Site publishing required predictable builds and clear ownership of what is rendered.

## Decision

Keep website-rendered content inside `economyforeveryone/src/content/**` and model it with Astro Content Collections.

## Consequences

- Pros:
  - Fully self-contained builds for the site.
  - Schema validation for frontmatter and content consistency.
  - Easier review/PR workflow for publishable changes.
- Cons:
  - Requires explicit sync/migration from upstream research artifacts.
  - Possible drift from source docs unless sync cadence is maintained.
