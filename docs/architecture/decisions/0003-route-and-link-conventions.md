# 0003 - Route and Internal Link Conventions

- Status: Accepted
- Date: 2026-02-26

## Context

Content markdown included many filename-style links (`*.md`) that were correct for repository browsing but poor for website UX.

## Decision

Standardize on clean internal routes for user-facing links:

- Use `/playbooks/...`, `/blog/...`, `/case-studies/...` paths.
- Use human-readable link titles (not markdown filenames).
- Avoid exposing `.md` in site navigation/content links.

## Consequences

- Pros:
  - Cleaner, consistent user experience.
  - Better information scent and scanability.
  - Route stability independent of file naming.
- Cons:
  - Link maintenance required when slug/structure changes.
