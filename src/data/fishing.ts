// Anime Expeditions fishing system — single source of truth for the /fishing/ page.
// Added in Update 2.0 [Summer Siege] (Aug 31, 2026). Rod stats, passives, and unlocks
// cross-checked across allthings.how + Beebom + ProGameGuides + GAMES.GG (Sep 2026).
// Where sources disagree the entry is flagged in `note` — verify in-game before
// treating as authoritative.

export const FISHING_VERIFIED = "2026-09-03";

export interface FishingRod {
  name: string;
  lureSpeed: string; // bite wait range — higher is faster
  control: string; // how tightly the minigame bar steers
  controlZone: string; // catch window size
  passive?: string;
  unlock: string;
  note?: string;
}

export const rods: FishingRod[] = [
  {
    name: "Normal Rod",
    lureSpeed: "6–12",
    control: "0.5",
    controlZone: "0.3",
    unlock: "Given to every player at the start",
  },
  {
    name: "Advanced Rod",
    lureSpeed: "5–10",
    control: "0.5",
    controlZone: "0.3",
    unlock: "Buy from the Summer Shop for 750 Sand Dollars",
    note: "Same control as the Normal Rod but the fastest bite of the manual rods — the first thing to buy.",
  },
  {
    name: "Lucky Rod",
    lureSpeed: "6–12",
    control: "0.7",
    controlZone: "0.35",
    passive: "Every 8th fish caught is a guaranteed Mythic",
    unlock: "~1% drop chance after catching any fish",
    note: "The rare chase rod — pure RNG. The Mythic-every-8-catches passive makes it the Bestiary finisher.",
  },
  {
    name: "Recycling Rod",
    lureSpeed: "6–12",
    control: "0.9",
    controlZone: "0.4",
    passive: "Every 10 items sold recycles into a random Legendary+ item",
    unlock: "Catch 100 fish total (reported milestone)",
    note: "Highest Control in the game — the most forgiving minigame. One source lists it as a random fishing drop instead; the 100-fish milestone is the commonly cited trigger.",
  },
  {
    name: "Auto Rod",
    lureSpeed: "12–24",
    control: "0.7",
    controlZone: "0",
    passive: "Skips the fishing minigame entirely — double lure speed, auto-catch",
    unlock: "Reach Wave 150 in Tidal Siege Infinite mode",
    note: "The AFK farmer. Control Zone is 0 because there is no minigame to steer.",
  },
];

// What a catch pays out (per GAMES.GG + Beebom fishing guides).
export const fishingRewards = [
  "Fish for the Bestiary — 22 reported species spread across five locations (Lobby pools, Coral Kingdom, East Town, and more).",
  "Sand Dollars on every catch — the Summer Siege event currency.",
  "Fishing XP plus milestone XP that fills the event milestone ladder.",
  "Rare bonus catches, up to Mythic fish (guaranteed every 8th catch with the Lucky Rod).",
  "The Sharktooth Conch — a very rare catch in Tidal Siege pools that unlocks the Mythic unit Sharkfang.",
];

// The 25-level milestone ladder tops out at a Flamingo cosmetic (GAMES.GG).
export const milestoneNotes = [
  "Catches fill a 25-level milestone ladder with a reward per level — the Flamingo cosmetic sits at the top.",
  "Fishing also raises your Event Rank; reaching Veteran rank reports a daily currency bonus from standard modes.",
];

// Recommended grind loop (GAMES.GG's Summer Fish Fest route).
export const grindLoop = [
  "Fish the lobby pools with the Normal Rod until you can afford the Advanced Rod (750 Sand Dollars).",
  "Use the Advanced Rod to chase harder fish in Coral Kingdom and East Town for Bestiary progress.",
  "Run Tidal Siege alongside fishing and push Infinite mode to Wave 150 for the Auto Rod.",
  "Equip the Auto Rod and farm hands-free — every catch still rolls the ~1% Lucky Rod drop.",
];
