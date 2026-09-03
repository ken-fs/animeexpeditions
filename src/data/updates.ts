// Anime Expeditions update log — single source of truth for the updates page.
// Reported from official Roblox event windows + community patch summaries.
// Client-side details are provisional until first-party confirmation.
// Add the newest update at the TOP as new patches drop — this is the site's
// main freshness signal, so keep dates accurate.

export const UPDATES_VERIFIED = "2026-09-03";

export interface GameUpdate {
  version: string; // e.g. "Update 1.0"
  title?: string; // theme/subtitle
  date: string; // human window or publish date
  status: "verified" | "provisional";
  highlights: string[];
}

export const updates: GameUpdate[] = [
  {
    version: "Update 2.0",
    title: "Summer Siege",
    date: "Released Aug 31, 2026",
    status: "provisional", // changelog via sportskeeda's transcript of the official in-game log; client details unverified first-hand
    highlights: [
      "Tidal Siege event: clear waves for Sand Dollars (event currency) and Summer Capsules containing limited units and skins.",
      "Fishing system: five rods (Normal, Auto, Advanced, Lucky, Recycling) — Lucky Rod is the rare 1% pull. Fish for units, traits, and gear, with ranks and milestone rewards.",
      "9 new units with evolutions — incl. Sovereign (Djinn), Lightning God (Overcharged), Sand (Alligator), Kitsune, Head Captain (Char), Sharkfang (Abyssal), Rainman (Forecast), Water Mage (Scholar), Jester — folded into the units page and tier list.",
      "4 new Portals, Battlepass Season 2, 7 new equipment, 6 skins, 5 mounts (surfboards + Crab), 3 accessories, 5 events, 4 Summer Bundles, plus QoL.",
      "Launch codes: Update2 and EclipseSoon (expire Sep 4), SummerSiege and LighthingGod (expired Sep 2, Level 25+). EclipseSoon teases the next update.",
      "First teased on the official X account (@ExpeditionsRBLX) on Aug 18, 2026.",
    ],
  },
  {
    version: "Update 1.0",
    title: "Warrior Saga",
    date: "Aug 7 – Aug 21, 2026 (event window)",
    status: "provisional",
    highlights: [
      "Warrior Saga content playable from Aug 10 per the official X account; window verified via the official Roblox events API.",
      "Rotating events (reported): Dragon's Wish — collect 7 Wish Orbs for an exclusive mount — plus Boss Bounty, Guess That Unit!, M.A.S.T.R.R.: Beyond Pain, and Ballin' Traits, most running until Update 2.0 lands.",
      "Later rotations: Elemental Weather + Wandering Trader (Aug 12), Banner Blitz + Weekend Surge (Aug 13), Forge Fever + Shiny Overflow (Aug 16).",
      "New Warrior Saga units are folded into the units page and tier list.",
      "Patch code `patch1.0` (100 Trait Crystals) dropped with the update and has since expired.",
    ],
  },
  {
    version: "Update 0.5",
    title: "Villain Invasion",
    date: "Jul 25 – Aug 1, 2026 (event window)",
    status: "provisional",
    highlights: [
      "New limited units: Crow (Black Fire) Secret, Cursed Immortal (Black Sun), Dark Mage (Sovereign), and Razorjaw (Hunter) — each with signature equipment.",
      "Villain Invasion event map: Acts 1–3 plus Final, a Villain Banner, event quests, shop, and Event Battle Pass.",
      "Villain Hunt: villains spawn in non-competitive modes and drop Villain Chests (rare Crow Rider skin).",
      "Bounty Board: daily objectives, rerollable with Gold, awarding Event Coins.",
      "Cosmetics: new skins (8th Sword, Crow Rider, Razorjaw Beyond), Demon Wings mount, Raven accessory, Vibing emote.",
      "Quality-of-life: multi-select/scrap, Index Claim All, favorite-area pinning, Leave Game, mobile Expedition menu rework.",
      "Fixes: memory leaks, black screens, guild issues, auto-upgrade, tournament end display.",
    ],
  },
  {
    version: "Wandering Trader",
    title: "Limited Event",
    date: "Published Jul 23, 2026",
    status: "provisional",
    highlights: [
      "Limited lobby trader with rotating Gem-priced stock and event tasks.",
      "Schedule and rewards were provisional at launch.",
    ],
  },
  {
    version: "Public Release",
    date: "Published Jul 17, 2026",
    status: "verified",
    highlights: [
      "Public release with active servers.",
      "Launch build: Story, unit development, Expeditions, Raids, equipment, quests, and cooperative progression.",
    ],
  },
  {
    version: "Early Access",
    date: "Published Jul 15–16, 2026",
    status: "provisional",
    highlights: [
      "EA+ and Early Access windows for community access before the public launch.",
      "Conditions were confirmed in the official Discord.",
    ],
  },
];
