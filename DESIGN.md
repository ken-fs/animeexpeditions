# Design

<!-- impeccable:design 1 · direction 7746c798 (arcade-cabinet CRT, grounded #5) -->

## World

An arcade cabinet's CRT screen. The site reads like a coin-op machine's display: deep indigo phosphor tube, scanline overlay, vignette, and glowing pixel text. This deliberately refuses the AI-default dark-SaaS look (centered card-flow, eyebrow labels, accent dots, soft rounded cards).

## Palette (tokens in globals.css)

- `--screen` #08090a — tube glass ground (near-black NEUTRAL, not blue — a smooth blue radial glow reads as the AI-default "near-black + neon + glowing edges", explicitly avoided)
- `--screen-2` #101215 — raised panels
- `--bezel` #030304 — darkest cabinet edge
- `--grid` #26292f — 2px phosphor borders (never 1px hairlines)
- `--fg` #eef0ee — screen white (faint green cast)
- `--dim` #8b9088 — dimmed phosphor (secondary text; neutral, never gray/blue)

Background is flat near-black + a 4px CRT aperture-grille dot mask (radial-gradient dot pattern), NOT a smooth gradient glow. Vignette is subtle corner darkening only, dialed down so it never reads as a halo.
- `--cyan` #43e0e8 — primary phosphor (nav, links, A-tier)
- `--magenta` #ff4fa3 — hot accent (steps, Watch tier, expired)
- `--amber` #ffcf4a — high-score gold (title, headings, S-tier)
- `--green` #57f2a0 — "working/active" phosphor (live codes, B-tier)

Phosphor colors carry a matching `text-shadow` glow via `.phosphor-*` classes.

## Type

- Display: **Press Start 2P** (`--font-display`) — pixel arcade face. Used for titles, section marquees, tier badges, labels. Runs LARGE per glyph; use small rem sizes (0.55–2rem) and generous line-height.
- Body: **VT323** (`--font-body`) — phosphor terminal face. Base 1.35rem (VT323 is small). Everything not a heading.

## Structure

- Cabinet marquee title (centered pixel text) opens each page.
- Codes = a "WORKING CODES" high-score board (`Panel` + `CodeCard` rows), active code lit green like a top record.
- Tier list = ranking board with glowing pixel tier badges (S=amber, A=cyan, B=green, Watch=magenta).
- Steps use 2-digit magenta pixel numbers (01/02…), not circles.
- Borders are 2px `--grid`; panels via `Panel` in `components/crt.tsx`. No rounded soft cards, no 1px hairlines.
- Cross-links render as a cabinet menu grid at page end.

## Global chrome

- `.scanlines` fixed overlay (repeating-linear-gradient, multiply blend) + `.crt::after` vignette. Both `pointer-events:none`.
- `prefers-reduced-motion` disables `.blink`.

## Shared components

`components/crt.tsx`: `Panel`, `Marquee` (color prop), `CabinetFooter`. Reuse these; do not reintroduce ad-hoc card/border styles.

## Verified

Contrast AA+ on all phosphor-on-screen pairs; desktop + mobile screenshots checked (pixel title wraps cleanly, no overflow); detector clean. Direction contract lives in `layout.tsx` body comment (seed 7746c798).
