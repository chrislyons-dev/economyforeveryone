# economyforeveryone

economyforeveryone.org source: a narrative-first, evidence-driven publication on economic dignity, guardrails, and practical action for people navigating institutional and AI-era disruption.

## Stack

- Astro (static output, no SSR)
- Tailwind CSS v4 via Vite plugin
- Optional React islands support (`@astrojs/react`)
- Cloudflare Pages deployment via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

Build and check:

```bash
npm run check
npm run build
```

Quality gates:

```bash
npm run lint
npm run formatcheck
npm run test
npm run test:e2e
```

Combined gate:

```bash
npm run quality
```

## Deployment Model

1. CI runs on any branch push/PR.
2. CD runs on `main` push and deploys to Cloudflare Pages.
3. Build output is post-processed in deploy via `npm run csp:generate`, which writes `dist/_headers`.
4. CSP includes SHA-256 hashes for inline scripts detected in built HTML (same pattern used in `home`).
5. `public/_headers` remains a local baseline; deploy uses generated `dist/_headers` as the authoritative header file.

## Session Continuity Docs

- Bootstrap plan: `docs/roadmap/bootstrap-session-plan.md`
- Session log: `docs/roadmap/session-log.md`

## Licensing

This repository uses a split-license model:

1. Code and software assets are licensed under MIT.
2. Written editorial content is licensed under CC BY-NC-ND 4.0.

See:

- [LICENSE](./LICENSE) for code terms
- [LICENSE-CONTENT](./LICENSE-CONTENT) for content terms

## Scope Clarification

Covered by `LICENSE` (MIT), unless otherwise noted:

- Site/application code
- Build/configuration scripts
- Tooling and infrastructure configuration

Covered by `LICENSE-CONTENT` (CC BY-NC-ND 4.0), unless otherwise noted:

- Posts and essays
- Playbooks and case studies
- Other narrative/editorial text
