// Anime Expeditions game modes — single source of truth for the game-modes page.
// Reported from community gameplay summaries; unlock levels and mechanics are
// provisional until first-party confirmation.

export const MODES_VERIFIED = "2026-09-03";

export interface GameMode {
  name: string;
  unlock?: string; // when it unlocks
  summary: string;
  limited?: boolean; // time-limited event mode
}

export const gameModes: GameMode[] = [
  {
    name: "Story",
    summary:
      "The core progression route: clear staged maps wave by wave. It doubles as the benchmark you use to test whether a team actually works before taking it anywhere harder.",
  },
  {
    name: "Expeditions",
    unlock: "Player level 20",
    summary:
      "A moving-payload route plus an Expedition area with upgradeable structures — resource production, unit training, a shop, and an Armory. This is where longer-term economy building happens.",
  },
  {
    name: "Raids",
    unlock: "Player level 25",
    summary:
      "Harder co-ordinated fights, with Spirit City as the current Raid area. Expect tighter role requirements than Story — bring control and sustained damage, not just a carry.",
  },
  {
    name: "Co-op",
    summary:
      "Combine rosters with other players. Party limits, shared economy, reward splits, and enemy scaling still need in-game verification, so treat co-op planning as provisional.",
  },
  {
    name: "Tidal Siege",
    unlock: "Update 2.0 (limited)",
    limited: true,
    summary:
      "Update 2.0's headline wave event: clear waves for Sand Dollars (event currency) and Summer Capsules containing limited units and skins. Progress through ranks for milestone rewards while the event runs.",
  },
  {
    name: "Fishing",
    unlock: "Update 2.0",
    summary:
      "A side system that catches units, traits, and gear. Five rods to unlock — Normal, Auto, Advanced, Lucky, and Recycling — with the Lucky Rod at a reported ~1% acquisition chance. Open the fish icon at the bottom-left of the screen.",
  },
  {
    name: "Portals",
    unlock: "Update 2.0",
    summary:
      "Four new portal instances added in Update 2.0, with tiered difficulty and rewards. Portal mechanics and drop tables are still being mapped by the community — treat specifics as provisional.",
  },
  {
    name: "Villain Invasion",
    unlock: "Update 0.5 (limited)",
    limited: true,
    summary:
      "A time-limited event map across four acts, with a Villain Banner, event quests, an event shop, and an Event Battle Pass. Limited modes come and go with updates — check the updates page for the current window.",
  },
  {
    name: "Villain Hunt",
    unlock: "Update 0.5",
    limited: true,
    summary:
      "Villains spawn inside non-competitive modes and drop Villain Chests and event resources — a passive way to farm event currency while you play everything else.",
  },
  {
    name: "Bounty Board",
    unlock: "Update 0.5",
    limited: true,
    summary:
      "A daily activity offering Gold rerolls and Event Coin rewards. Objectives are rerollable with Gold if you draw ones you can't complete.",
  },
];
