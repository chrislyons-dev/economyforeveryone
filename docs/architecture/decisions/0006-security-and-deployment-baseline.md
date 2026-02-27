# 0006 - Security and Deployment Baseline

- Status: Accepted
- Date: 2026-02-26

## Context

The site is static-first and intended for reliable CI/CD deployment with strong browser security defaults.

## Decision

Adopt a deployment baseline that includes:

- Static build artifacts as deployment output.
- Strict security headers/CSP policy with generated script hashes for built output.
- CI/CD validation gates (`check`, `build`, tests) before production publish.

## Consequences

- Pros:
  - Better security posture with minimal runtime complexity.
  - Deterministic deployments and repeatable validation.
  - Clear path to operational readiness and post-deploy checks.
- Cons:
  - CSP/header tuning must be maintained when client-side behavior changes.
  - Build/deploy pipeline complexity is slightly higher than a minimal static setup.
