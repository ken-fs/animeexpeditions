// Anime Expeditions daily/weekly checklist tasks — single source of truth.
// A practical routine template for the current loop; adjust as modes change.
// Progress is stored locally in the browser and resets on the cadence below.

export const CHECKLIST_VERIFIED = "2026-08-10";

export type Cadence = "daily" | "weekly";

export interface Task {
  id: string; // stable key for localStorage
  label: string;
  cadence: Cadence;
  note?: string;
}

export const tasks: Task[] = [
  // Daily
  { id: "codes", label: "Redeem any new codes", cadence: "daily", note: "New codes drop on visit/like milestones — check before they expire." },
  { id: "bounty", label: "Clear the Bounty Board", cadence: "daily", note: "Reroll objectives you can't finish with Gold; rewards Event Coins." },
  { id: "expedition", label: "Collect Expedition production", cadence: "daily", note: "Resource structures bank output — claim so it doesn't cap out." },
  { id: "story-energy", label: "Spend Story energy / tickets", cadence: "daily", note: "Don't let energy sit at max; farm the map you need drops from." },
  { id: "summon", label: "Free daily summon", cadence: "daily", note: "Take any free pull before the banner rotates." },
  { id: "shop", label: "Check the daily shop reset", cadence: "daily", note: "Grab cheap crystal/reroll deals; skip overpriced filler." },

  // Weekly
  { id: "raids", label: "Run your weekly Raids", cadence: "weekly", note: "Raids (level 25+) gate the best upgrade materials." },
  { id: "battlepass", label: "Push event Battle Pass tiers", cadence: "weekly", note: "During events, clear enough quests to bank the pass rewards." },
  { id: "guild", label: "Hit guild contribution", cadence: "weekly", note: "Log the weekly guild activity so you don't miss shared rewards." },
  { id: "reroll", label: "Trait-reroll your keepers", cadence: "weekly", note: "Spend banked Trait Crystals only on permanent units." },
];
