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

### Risks / Follow-ups

1. Blog remains placeholder-only and is not yet using content collections.
2. Case-study `sources` arrays are currently unfilled for migrated entries.
3. Case-study browser currently uses in-page hydrated metadata; no query-param persistence yet.
4. Occasional dev-server/HMR instability can mimic UI disappearance; restart resolves.

### Next Action

1. Start blog migration from old Facebook posts into `src/content/blog/`.
2. Add `blog` collection schema and frontmatter template.
3. Implement `/blog` browser parity (search/filter/sort + detail pages).
4. Migrate first 5-10 Facebook-derived posts and validate publishing workflow.
5. Normalize receipts and source links for migrated foundation posts.
