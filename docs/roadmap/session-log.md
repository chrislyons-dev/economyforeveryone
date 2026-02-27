# Session Log

## 2026-02-25

### Completed

1. Bootstrapped static Astro app structure.
2. Added semantic token-based global theme with E4E palette.
3. Added initial IA pages and signature components.
4. Added aggressive CSP and security headers in `public/_headers`.
5. Added CI workflow for all branch changes and CD workflow for `main`.
6. Added `wrangler.toml` and roadmap docs.
7. Installed dependencies and validated `npm run check` + `npm run build`.
8. Removed inline style attributes so strict CSP can remain aggressive.
9. Added quality tooling and checks: ESLint, Prettier, Vitest unit tests, Playwright functional smoke tests.
10. Validated `lint`, `formatcheck`, `test`, `test:e2e`, and `build` locally.
11. Added CSP hash generation script and deploy step to emit `dist/_headers` from built HTML inline scripts.

### Risks / Follow-ups

1. CSP may need iterative tuning if future React islands introduce inline/runtime requirements.
2. Cloudflare secrets must be set before CD workflow can deploy.
3. `npm install` reported 5 moderate vulnerabilities; evaluate and address with controlled updates.
4. Keep `public/_headers` in sync as local baseline, but treat generated `dist/_headers` as deploy source of truth.

### Next Action

1. Run `npm install` then `npm run build`.
2. Adjust CSP only if build output requires additional directives.
3. Add content collections and first migrated posts.

## 2026-02-26

### Completed

1. Added Astro content collections for case studies in `src/content.config.ts`.
2. Added case-study authoring template in `src/content/case-studies/TEMPLATE.md`.
3. Migrated and published case studies:
   - `costco`
   - `nucor`
   - `citizens-united-2010`
   - `boeing-post-merger`
   - `saturn-gm`
   - `montgomery-county-housing-production-fund`
   - `tokyo-housing`
4. Replaced static `/case-studies` placeholder with collection-driven rendering.
5. Added per-case static detail routes at `/case-studies/<slug>/`.
6. Added client-side case-study search/filter/sort UI (`CaseStudyBrowser` React island).
7. Added case-study metadata endpoint at `/case-studies.json`.
8. Added case-study Playwright e2e coverage for list stability and detail-page persistence.
9. Adjusted sticky header layering/background to prevent content bleed-through.
10. Scaffolded blog content system using communication-plan and legacy-post structure cues:

- Added `blog` collection schema in `src/content.config.ts`.
- Added blog template in `src/content/blog/TEMPLATE.md`.
- Added initial migrated foundation posts from legacy Facebook references.
- Added blog browser island with search/filter/sort and static detail routes.
- Added `/blog/posts.json` metadata endpoint.
- Added Playwright e2e coverage for blog index/search behavior.

### Completed (Later Sessions)

1. Migrated and normalized playbooks into local site content under `src/content/playbooks` (self-contained in `economyforeveryone`).
2. Added playbook collection rendering with list + detail routes and search/filter UI.
3. Added root playbook ordering (`is_root`) and consistent root naming (`<Lane> Playbook`).
4. Linked Civics/Community/Healthcare/Writing root playbooks to internal playbook routes with human-readable titles.
5. Removed public `Field Notes` nav/page; kept playbook content references where useful.
6. Merged `Contribute` into `About` and standardized contribution path (GitHub issues + email).
7. Migrated and normalized additional blog posts; cleaned frontmatter, descriptions, and encoding artifacts.
8. Reclassified core-model-adjacent blogs and added reciprocal “Related Core Model Posts” links.
9. Removed redundant in-body blog `# title` headings where frontmatter title is already rendered.
10. Unified search/filter UX treatment across playbooks/blogs/case studies (shared border/card treatment).
11. Applied lane-level visual differentiation (blogs blue, case studies terracotta, playbooks olive/action).
12. Improved reading UX with tighter prose rhythm and clearer heading hierarchy.
13. Rebalanced site header typography so brand hierarchy reads correctly.
14. Repeatedly validated with `npm run check` and kept diagnostics clean.

### Risks / Follow-ups

1. Astro dev-mode duplicate-id warnings still appear intermittently during sync; checks/builds are clean but warning source should be audited.
2. Some migrated content still has `draft` status in playbooks and may need publish-state review before launch.
3. Link QA across all newly normalized playbook routes should be run once more in production-like build.
4. Cloudflare deploy secrets/workflow validation remains required for first live publish.

### Next Action

1. Final pre-deploy content pass: spot-check key pages (home, origin, core model, playbooks, blogs, case studies).
2. Run full release checks: `npm run check`, `npm run build`, and smoke e2e on critical paths.
3. Verify deployment wiring and secrets for Cloudflare production publish.
4. Execute first production deployment and validate post-deploy headers/CSP and route health.
5. Open a post-launch stabilization checklist (broken links, metadata, analytics, feedback capture).
