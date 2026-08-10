// Anime Expeditions update log — single source of truth for the updates page.
// Reported from official Roblox event windows + community patch summaries.
// Client-side details are provisional until first-party confirmation.
// Add the newest update at the TOP as new patches drop — this is the site's
// main freshness signal, so keep dates accurate.

export const UPDATES_VERIFIED = "2026-08-10";

export interface GameUpdate {
  version: string; // e.g. "Update 1.0"
  title?: string; // theme/subtitle
  date: string; // human window or publish date
  status: "verified" | "provisional";
  highlights: string[];
}

export const updates: GameUpdate[] = [
  {
    version: "Update 1.0",
    date: "Aug 7 – Aug 21, 2026 (event window)",
    status: "provisional",
    highlights: [
      "Scheduled via the official Roblox events API for Aug 7 4:00 PM UTC to Aug 21 4:00 PM UTC.",
      "Verified schedule only — no changelog, units, modes, or balance details confirmed yet.",
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
