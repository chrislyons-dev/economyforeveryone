# 0001 - Static Astro + React Islands

- Status: Accepted
- Date: 2026-02-26

## Context

The site needs to be fast, simple to deploy, and resilient for content publishing workflows, while still supporting richer UX for browsing large content lists.

## Decision

Use Astro static output as the platform baseline, with React islands only where interactive filtering/sorting is needed.

## Consequences

- Pros:
  - Static hosting and straightforward deployment.
  - Strong baseline performance and caching.
  - Interactivity scoped to specific components instead of full SPA complexity.
- Cons:
  - Some browser-only behavior must be implemented client-side without SSR fallback logic.
  - State persistence across reloads requires explicit query/localStorage handling.
