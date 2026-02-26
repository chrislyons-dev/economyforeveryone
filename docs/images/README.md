# Branding assets

Files:

- `logo-mark.svg` - primary mark (ink on paper background, CSS-token friendly)
- `logo-mark-transparent.svg` - transparent background, uses `currentColor`
- `favicon-16.png`, `favicon-32.png` - raster favicons
- `apple-touch-icon-180.png` - Apple touch icon
- `icon-512.png` - large icon

Notes:

- The SVG uses your palette tokens with fallbacks:
  - `--color-paper: #f7f4ee`
  - `--color-ink: #1f2428`
- PNGs are rendered using the fallback hex values for maximum portability.
- Deployable copies are synced to `public/branding/` for site runtime use.
