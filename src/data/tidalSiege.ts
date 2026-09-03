// Anime Expeditions Tidal Siege event + Portals — single source of truth for the
// /tidal-siege/ page. Update 2.0 [Summer Siege] (Aug 31, 2026). Cross-checked across
// sportskeeda unit guides + allthings.how + nerdschalk + GAMES.GG (Sep 2026).
// Event-limited: capsules, shop items, and event modes disappear when Summer Siege ends.

export const SIEGE_VERIFIED = "2026-09-03";

// --- Event economy ---
export const sandDollarSources = [
  "Clearing Tidal Siege waves (both standard and Infinite mode runs).",
  "Event quests and log-in rewards during Summer Siege.",
  "Fishing — every catch pays Sand Dollars.",
];

export const summerShop = [
  { item: "Summer Capsule", price: "100 Sand Dollars", note: "10 for 1,000. Holds limited units — Head Captain, Rainman, Water Mage reported — plus skins." },
  { item: "Advanced Rod", price: "750 Sand Dollars", note: "Fastest manual fishing rod — buy this first." },
  { item: "Evolution items", price: "10,000 Sand Dollars each", note: "Lightning Emblem, Cloud Disc, Desert Fruit, Overgrown Beard, Spirit King's Cloak, Sharktooth Necklace. These fund the new units' evolutions." },
];

// --- Exclusive unit routes ---
export interface UnitRoute {
  unit: string;
  how: string;
}

export const eventUnits: UnitRoute[] = [
  {
    unit: "Sharkfang (event Mythic)",
    how: "Fish up a Sharktooth Conch in Tidal Siege water pools (very rare), then use it. Evolves with the Sharktooth Necklace from the event shop.",
  },
  {
    unit: "Head Captain, Rainman, Water Mage",
    how: "Pull from Summer Capsules (100 Sand Dollars each). Their evolution items are in the same event shop — buy them before the event ends.",
  },
  {
    unit: "Sovereign & Lightning God (Secrets)",
    how: "Craft their Secret Portals from Tier 5 portal materials — see the portals section.",
  },
  {
    unit: "Kitsune & Jester",
    how: "Kitsune is tied to the Kitsune Bingo event; Jester comes from Battlepass Season 2.",
  },
];

// --- Portals ---
export const portalFacts = [
  "Update 2.0 added a Portals mode with 4 new portals across five tiers of difficulty.",
  "Tier 5 portals drop Charged Dust and Djinn's Treasure — each at a reported 4% drop rate with a 25-run pity.",
  "Four copies of a Tier 5 material craft its Secret Portal at the Crafting Station: 4× Djinn's Treasure → Sovereign's Portal, 4× Charged Dust → Lightning God's Portal.",
  "HOST the Secret Portal and the Secret unit is guaranteed. JOIN someone else's and your chance drops to ~2% — always host your own.",
  "Clearing a Secret Portal can also award a Secret Unit Augment that raises difficulty, reward chances, and pity progress.",
];

// --- Auto Rod route ---
export const autoRodRoute = [
  "Enter Tidal Siege and pick Infinite mode.",
  "Survive to Wave 150 — expect multiple enemy paths and Storm Weather.",
  "The Auto Rod unlocks automatically in the fishing menu (no claim step).",
  "Equip it to skip the fishing minigame — ideal for farming Sharktooth Conch attempts.",
];

export const eventWarnings = [
  "Summer Capsules, event shop items, and Sand Dollar sources are event-limited — they leave when Summer Siege ends.",
  "Buy the evolution items you need BEFORE the event ends; pulling the unit is the easy half, the shop items can't be back-filled later.",
];
