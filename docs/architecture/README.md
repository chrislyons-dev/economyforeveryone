# Architecture Overview

This folder captures how `economyforeveryone` is structured, and why specific implementation choices were made.

## Core Architecture

1. Static Astro site as the runtime foundation.
2. Markdown-first content model via Astro Content Collections.
3. Collection-driven routes for blogs, case studies, playbooks, and receipts/methods.
4. Client-side discovery UX (search/filter/sort) for content-heavy index pages.
5. Security-first deployment baseline (strict headers/CSP, CI/CD validation).

## Current Structure

- `content-management.md`  
  Historical implementation spec for content pipeline design.

- `decisions/`  
  Architecture Decision Records (ADRs) for the most important technical and product-architecture choices.

## ADR Index

1. [0001 - Static Astro + React Islands](./decisions/0001-static-astro-react-islands.md)
2. [0002 - Local Content Collections as Source of Truth](./decisions/0002-local-content-collections-source-of-truth.md)
3. [0003 - Route and Internal Link Conventions](./decisions/0003-route-and-link-conventions.md)
4. [0004 - Receipts Separation from Narrative Content](./decisions/0004-receipts-separation-from-narrative-content.md)
5. [0005 - Shared Discovery UX Pattern](./decisions/0005-shared-discovery-ux-pattern.md)
6. [0006 - Security and Deployment Baseline](./decisions/0006-security-and-deployment-baseline.md)

## How To Add New Decisions

1. Add a new numbered file under `decisions/` (e.g., `0007-...`).
2. Include: Context, Decision, Consequences, and Status.
3. Link it in this README.
