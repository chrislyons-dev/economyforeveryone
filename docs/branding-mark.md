# E4E Logo Symbology and Color Usage

This doc defines the primary mark, its meaning, and how we use our palette so the brand stays friendly, welcoming, and legible from favicon to hero.

---

## 1) The core idea (one sentence)

**Home inside a continuous loop**: security enables real choice; choice forces fair competition; competition produces shared gains; shared gains create more security.

**Loop:**  
`security -> real choice -> fair competition -> shared gains -> more security`

---

## 2) Primary mark (the thing that must work at 16x16)

**A simple circle ring surrounding a rounded "home" shape, with an open door cutout.**

### What each element means

- **Circle ring** = the continuous cycle (feedback loop; repeats until interrupted).
- **Home shape** = security / belonging / everyone welcome (the point of the economy).
- **Rounded corners** = warmth and invitation (avoid "badge / agency / militant" vibes).
- **Open door (negative space)** = welcome + access (not gated, not "for members only").

### Hidden structure (the "5" without busy visuals)

The home can be drawn as a subtly 5-sided friendly form (a "pentagon-house"):

- flat-ish base
- two side walls
- two roof slopes meeting at a rounded peak

This encodes "five steps" without letters, numbers, or gears.

---

## 3) Logo variants (keep it simple)

### A) Default mark (most usage)

- Mark color: `--color-ink`
- Background: `--color-paper`

### B) Inverse mark (dark headers / footers)

- Mark color: `--color-paper`
- Background: `--color-ink` or `--color-civic-strong`

### C) Accent mark (optional, still minimal)

- Mark color: `--color-ink`
- One tiny accent (a dot/tick on the ring marking "Security") in `--color-civic`
- Background: `--color-paper`

**Rule:** the logo mark itself stays one color, with at most one accent.

---

## 4) Do / Don't (tone protection)

### Do

- Use rounded corners everywhere.
- Prefer solid shapes + negative space over thin strokes for favicon sizes.
- Keep the mark calm and unofficial (more "welcome sign" than "seal").

### Don't

- Don't add stars, laurels, shields, banners, double rings, or "seal" motifs.
- Don't use 5 different colors inside the logo mark (it will not survive 16x16).
- Don't use gears as the primary mark (reads "industrial/steampunk/ops," not "home/everyone").

---

## 5) Base palette (tokens)

- `--color-paper: #f7f4ee`
- `--color-ink: #1f2428`
- `--color-muted: #5f666d`
- `--color-surface: #efe9dd`
- `--color-civic: #2f5d7c`
- `--color-civic-strong: #244a63`
- `--color-terracotta: #b96a4a`
- `--color-olive: #6c7a3d`

---

## 6) Step colors (for diagrams and UI, not the logo mark)

The logo communicates "home inside a loop."  
The diagram system communicates the five steps with consistent colors.

### Recommended step mapping (clockwise)

1. **Security** -> `--color-civic-strong`
2. **Real choice** -> `--color-civic`
3. **Fair competition** -> `--color-olive`
4. **Shared gains** -> `--color-terracotta`
5. **More security** -> a light civic tint derived from existing tokens (see below)

Why this mapping:

- Civic blues feel stable + trustworthy (security/agency).
- Olive reads as rules/guardrails/balance (competition that's fair).
- Terracotta reads as human warmth + shared prosperity (gains that land for people).
- The loop closes with a softened civic to suggest reinforcement rather than escalation.

### Derived tint (no new hex required)

Use `color-mix()` to create the fifth step from existing tokens:

```css
:root {
  --step-security: var(--color-civic-strong);
  --step-choice: var(--color-civic);
  --step-competition: var(--color-olive);
  --step-gains: var(--color-terracotta);
  --step-security-2: color-mix(in srgb, var(--color-civic) 45%, var(--color-paper));
}
```

---

## 7) Favicon and small-size rules (non-negotiable)

- Test at **16x16**, **24x24**, **32x32**.
- If the interior "home" collapses:
  - switch the home to solid fill
  - keep the door as negative space
- Avoid thin outlines. If outlines are used:
  - the home stroke should be slightly thicker than the circle stroke

**Success criteria:** at 16x16, it still reads as circle + home + door.

---

## 8) Usage guidelines (where each version goes)

- **Favicon:** Default mark, solid/negative-space friendly, one color.
- **Header / nav:** Default mark or Inverse mark (depending on background).
- **Section headers / diagrams:** Use the 5-step palette mapping.
- **Social cards:** Mark stays simple; the diagram/steps can carry the color story.

---

## 9) Quick language for captions / tooltips

- "Home inside a loop: security -> choice -> fair competition -> shared gains -> more security."
- "The logo is intentionally simple. The five-step detail lives in our diagrams."

---

## 10) File naming (suggested)

- `branding/mark.md` (this file)
- `branding/assets/logo-mark.svg`
- `branding/assets/logo-mark-solid.svg` (favicon-optimized)
- `branding/assets/favicon-32.png`, `favicon-16.png`
- `branding/assets/loop-5step-diagram.svg`
