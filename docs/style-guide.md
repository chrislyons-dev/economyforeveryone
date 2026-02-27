# Style Guide

## Voice and Tone

- Narrative-first, evidence-driven.
- Warm, plain-language, and direct.
- Facts, not vibes. Bridges, not dunks.
- Avoid contempt, therapy jargon, and performative outrage.

## Writing Conventions

- Prefer short sections with clear headings.
- End practical pieces with one concrete next action.
- Separate confirmed facts from uncertainty.
- Use human-readable link labels (not raw filenames).
- Avoid exposing `.md` in user-facing links.

## Content Structure

- Use frontmatter title as the rendered page title.
- Do not repeat top-level `# Title` in body when redundant.
- Keep receipts/source-heavy detail in methods/receipts structures; keep narrative pages readable.
- Use clean route links:
  - `/playbooks/...`
  - `/blog/...`
  - `/case-studies/...`

## UX and Visual Conventions

- Keep search/filter controls visually consistent across index pages.
- Use section color semantics:
  - Blog: civic/blue
  - Case Studies: guardrail/terracotta
  - Playbooks: action/olive
- Keep detail-page prose compact and readable (tight vertical rhythm).

## Color System

See also: [Branding Mark](./branding-mark.md) for logo symbology and step-diagram usage.

### Base palette (tokens)

- `--color-paper: #f7f4ee`
- `--color-ink: #1f2428`
- `--color-muted: #5f666d`
- `--color-surface: #efe9dd`
- `--color-civic: #2f5d7c`
- `--color-civic-strong: #244a63`
- `--color-terracotta: #b96a4a`
- `--color-olive: #6c7a3d`

### Semantic theme tokens

- Backgrounds:
  - `--theme-bg-base`
  - `--theme-bg-surface`
  - `--theme-bg-elevated`
- Text:
  - `--theme-text-primary`
  - `--theme-text-secondary`
  - `--theme-text-muted`
- Accents:
  - `--theme-accent-primary` (civic/blue)
  - `--theme-accent-alt` (terracotta)
  - `--theme-accent-positive` (olive)
- Borders:
  - `--theme-border-subtle`
  - `--theme-border-default`
  - `--theme-border-strong`

### Section color mapping (required)

- Blog cards and receipts-like content use civic/blue tones.
- Case studies use guardrail/terracotta tones.
- Playbooks use action/olive tones.

### Component usage patterns

- Use semantic classes over raw hex values whenever possible:
  - `receipt-card` for civic/blue
  - `guardrail-card` for terracotta
  - `action-card` for olive
- Keep filters/search controls on shared neutral surfaces (`panel` + border tokens).
- Avoid introducing one-off accent colors unless added to palette and documented here.

### Contrast and accessibility

- Use `--theme-text-primary` for body copy on all card backgrounds.
- Reserve muted text for metadata/supporting text.
- Ensure links and CTA text remain readable in both light and dark theme tokens.

## Playbook Conventions

- Root playbook naming: `<Lane> Playbook`.
- Root playbooks should link to referenced playbooks/adapters with readable titles.
- Prefer concise "how to use" and "success criteria" sections.

## Documentation Conventions

- Architecture decisions belong in ADRs under `docs/architecture/decisions/`.
- Update `docs/roadmap/session-log.md` when major milestones land.
- Keep docs current with implementation, especially around deployment and content workflows.
