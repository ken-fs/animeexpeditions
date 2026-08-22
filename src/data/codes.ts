// Anime Expeditions codes — single source of truth.
// Update this file when new codes drop; the page + schema + FAQ read from here.
// Codes are milestone-based (visits/likes/ccu), so the next one is predictable.

export interface GameCode {
  code: string;
  reward: string;
  status: "active" | "expired";
  expires?: string; // ISO date, when a still-active code is known to expire
}

// Last verified against live sources (beebom + tryhardguides, cross-checked). Update on every check.
export const LAST_VERIFIED = "2026-08-22"; // ISO date, shown as "Last verified"
export const GAME_VISITS = "720M+"; // live visits, for milestone context (Roblox API, universeId 7613921865)
export const NEXT_MILESTONE_HINT =
  "Game is past 700M visits — expect an `800mvisits` code when it hits 800M.";

export const codes: GameCode[] = [
  {
    // Milestone code for 700M visits. Reward per Beebom (2026-08-20);
    // TryHardGuides lists it as active but only as generic "Freebies".
    code: "700mvisits",
    reward: "50 Trait Crystals, 30 Equipment Rerolls, 30 Stat Rerolls",
    status: "active",
  },
  // --- expired below ---
  // 2026-08-22: the previous five actives all rolled to expired per beebom + tryhardguides.
  {
    code: "sorry4longmaintenance",
    reward: "250 Trait Crystals, 25 Stat Locks, 25 Stat Rerolls",
    status: "expired",
  },
  {
    code: "warriorsaga",
    reward: "25 Trait Crystals, 25 Equipment Rerolls, 25 Stat Locks",
    status: "expired",
  },
  {
    code: "update1",
    reward: "100 Trait Crystals, 25 Equipment Rerolls, 25 Equipment Locks, 25 Stat Rerolls",
    status: "expired",
  },
  {
    code: "ballin!",
    reward: "25 Trait Crystals, 10 Equipment Rerolls, 10 Stat Rerolls",
    status: "expired",
  },
  {
    code: "2.5mgroup!",
    reward: "50 Trait Crystals, 25 Equipment Rerolls, 25 Stat Locks, 25 Stat Rerolls",
    status: "expired",
  },
  {
    code: "500mvisits",
    reward: "50 Trait Crystals, 30 Equipment Rerolls, 30 Stat Rerolls",
    status: "expired",
  },
  { code: "AnotherRestart", reward: "Rewards", status: "expired" },
  { code: "400mvisits", reward: "Trait Crystals + Rerolls", status: "expired" },
  { code: "200klikes", reward: "Rewards", status: "expired" },
  { code: "300mvisits", reward: "Rewards", status: "expired" },
  { code: "300kccu", reward: "Rewards", status: "expired" },
  { code: "250kccu", reward: "Rewards", status: "expired" },
  { code: "200mvisits", reward: "Rewards", status: "expired" },
  { code: "VillainInvasion", reward: "Rewards", status: "expired" },
  { code: "releasetournamentsorry", reward: "Rewards", status: "expired" },
  { code: "sorryforlongmaintenance", reward: "Rewards", status: "expired" },
  { code: "1MGROUP!", reward: "Rewards", status: "expired" },
  { code: "wfade", reward: "2,500 Gems + Trait Crystals + Rerolls", status: "expired" },
  { code: "HAPPYBDAYCOOP", reward: "Rewards", status: "expired" },
  { code: "100K!", reward: "Rewards", status: "expired" },
  { code: "30KLIKES!", reward: "Rewards", status: "expired" },
  { code: "EXPEDITIONS", reward: "Rewards", status: "expired" },
  { code: "AE#1", reward: "5 Equipment Locks, 5 Equipment Rerolls, 5 Stat Locks, 5 Stat Rerolls, 500 Gems", status: "expired" },
  { code: "RELEASE", reward: "50 Trait Crystals, 2,500 Gems", status: "expired" },
  { code: "WanderingFix", reward: "Rewards", status: "expired" },
  { code: "EA+", reward: "Early-access exclusive rewards", status: "expired" },
  { code: "EA", reward: "20 Trait Crystals, 2,500 Gems (early-access exclusive)", status: "expired" },
  { code: "100mvisits", reward: "Rewards", status: "expired" },
  { code: "WeekendSurge", reward: "Rewards", status: "expired" },
  { code: "sorryforguilds", reward: "Rewards", status: "expired" },
  { code: "SorryForRestart", reward: "Rewards", status: "expired" },
  { code: "200KCCU", reward: "Rewards", status: "expired" },
  { code: "SorryForBugs", reward: "Rewards", status: "expired" },
];

export const activeCodes = codes.filter((c) => c.status === "active");
export const expiredCodes = codes.filter((c) => c.status === "expired");

// Roblox experience deep-link (rootPlaceId from games API)
export const ROBLOX_GAME_URL =
  "https://www.roblox.com/games/84515722934860/Anime-Expeditions";
