# Bootstrap Session Plan

## Objective

Ship a secure static Astro foundation for `economyforeveryone.org` that aligns with the communication plan and is resilient across multi-session implementation.

## Status

Bootstrap scope is complete. This document remains as historical baseline; active delivery has moved to content migration, UX consistency, and deployment readiness.

## Scope (This Bootstrap)

1. Static Astro app scaffold (no SSR).
2. Tailwind + semantic tokens + E4E visual identity baseline.
3. IA starter pages and signature component stubs.
4. Security headers with aggressive CSP.
5. GitHub Actions CI (all branches) and CD (main).
6. Session tracking docs for long-running delivery.

## Non-Goals (This Session)

1. Full content collection migration.
2. End-to-end tests and visual regression setup.
3. Cloudflare account wiring and secret provisioning.

## Acceptance Criteria

1. App builds statically with `npm run build`.
2. Deploy pipeline generates `dist/_headers` with strict CSP and script hashes.
3. `/blog` path exists under same app.
4. CI workflow runs on any branch push/PR.
5. Deploy workflow runs on `main` pushes.

## Next Sessions

1. Complete deployment readiness checklist (content publish-state review + link QA).
2. Run release validation (`check`, `build`, and smoke e2e across core routes).
3. Verify Cloudflare deploy configuration/secrets and execute first production deployment.
4. Validate post-deploy CSP/headers, route health, and rollback path.
5. Begin post-launch operations cadence (content updates, QA gate, and issue intake).
