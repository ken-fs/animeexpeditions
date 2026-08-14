# Anime Expeditions companion site

A fan-made companion site for the Roblox game **Anime Expeditions** — **[animeexpeditions.dev](https://animeexpeditions.dev)**

It gives players the reference data and tools they need outside the game, fast and copy-pasteable: current working redeem codes, a unit tier list, a units roster with evolutions, an interactive evolution-materials planner, a team builder, and guides.

> **Not affiliated** with Expeditions Entertainment or Roblox Corporation. This is an independent fan project. All game data (codes, units, tiers, materials) is real and verifiable — unknowns are marked "check in-game", never invented.

## Pages

**Multilingual** — English (root) plus Español, Português, and Русский:

- **Codes** (home) — current working redeem codes, with verified dates
- **Tier list** — which units are strong right now
- **Units** — roster with roles and evolution items
- **Evolution planner** — interactive: plan materials to farm across several units
- **Beginner guide** — the optimal early game

**English-only** (content): Traits · Updates · Game modes · Maps · Gamepasses · About
**English-only** (interactive tools): Team builder · Daily checklist

## Data

All game content lives in single-source-of-truth files under `src/data/` — `codes.ts`, `units.ts`, `traits.ts`, `gameModes.ts`, `gamepasses.ts`, `updates.ts`, `maps.ts`, `checklist.ts`, and translations in `i18n.ts`. Codes and tier data change with game updates; edit the data file, not the pages. Every time-sensitive fact carries its verified date.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4**
- Static export (`output: export`), deployed to **Cloudflare Workers** (`./out` as static assets, config in `wrangler.jsonc`)

## Development

Uses **npm** — not pnpm. (pnpm triggers an `unrs-resolver` build-script error here.)

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
npm run lint
```

After changing the route structure, run `rm -rf .next` before building — Next 16 caches the old typed-route paths.

## Deployment

Deployed on Cloudflare. Pushing to `main` triggers an automatic build and deploy — no manual build step needed after committing.
