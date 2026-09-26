// Anime Expeditions codes — single source of truth.
// Update this file when new codes drop; the page + schema + FAQ read from here.
// Codes are milestone-based (visits/likes/ccu), so the next one is predictable.

export interface GameCode {
  code: string;
  reward: string;
  status: "active" | "expired";
  expires?: string; // ISO date, when a still-active code is known to expire
}

// Last verified against live sources (see per-code notes). Update on every check.
// Last verified: 2026-09-26 — Beebom (dateModified 09-26) + UrGameTips (09-25)
// both list the same four new codes (Bossrush/Hellfire/Update3/RDC26) and both
// moved restartsorry! to expired. 2-source rule satisfied for the batch.
// Watch item: Beebom's expired list also shows `fastrestart!`, a code we have
// never tracked (TryHardGuides lists it too, but with a stale active list).
// Verify against a second fresh source before adding it here.
export const LAST_VERIFIED = "2026-09-26";
// 2026-09-26: Roblox games API for universeId 7613921865 — 795,232,103 visits;
// game updated 2026-09-25 20:08 UTC (the update that carried the Update 3 batch).
export const GAME_VISITS = "795M+"; // live visits, for milestone context (Roblox API, universeId 7613921865)
export const NEXT_MILESTONE_HINT =
  "The Update 3 batch landed Sep 25 (4 codes). Next watch: the 800M-visits milestone (795M now) - the batch-rotation pattern means that milestone should bring the next code batch.";

export const codes: GameCode[] = [
  // --- Update 3 batch (2026-09-25) ---
  // Sourcing: Beebom (dateModified 2026-09-26, all four marked NEW) + UrGameTips
  // (2026-09-25: "we added Bossrush, Update3, RDC26, Hellfire; we moved
  // restartsorry! to the expired list"). Neither source itemizes rewards yet,
  // so the reward column stays generic rather than inventing numbers — daily
  // patrol fills it in when a source publishes the list. Roblox API corroborates
  // the drop: game updated 2026-09-25 20:08 UTC, visits 775M -> 795M.
  {
    code: "Bossrush",
    reward: "Free rewards",
    status: "active",
  },
  {
    code: "Hellfire",
    reward: "Free rewards",
    status: "active",
  },
  {
    code: "Update3",
    reward: "Free rewards",
    status: "active",
  },
  {
    code: "RDC26",
    reward: "Free rewards",
    status: "active",
  },
  // --- Eclipse batch (2026-09-10) ---
  // Sourcing: Beebom (full list + rewards, marked NEW) + SuperCheats (partial)
  // + Roblox API corroboration (game updated Sep 10 02:42 UTC; 250K likes
  // crossed). Awaiting a second full aggregator (IGN/RadioTimes) - daily
  // patrol re-checks; will be pulled immediately if contradicted.
  {
    // 2026-09-24: settled expired. The Sep 12 expiry GamesRadar/RadioTimes
    // printed turned out right - Beebom now lists Eclipse expired; GameRant
    // and RadioTimes both dropped it from active lists. Patrol-verified.
    code: "Eclipse",
    reward: "50 Trait Crystals, 25 Equipment Rerolls",
    status: "expired",
  },
  {
    // 2026-09-24: Beebom now marks it expired; GameRant/RadioTimes dropped it
    // from active lists. Eclipse batch fully rotated out.
    code: "250klikes",
    reward: "25 Trait Crystals, 25 Equipment Rerolls, 1,000 Sand Dollars",
    status: "expired",
  },
  {
    // 2026-09-24: Beebom now marks it expired; GameRant/RadioTimes dropped it
    // from active lists. Eclipse batch fully rotated out.
    code: "8thCompany",
    reward: "50 Stat Rerolls, 25 Trait Crystals",
    status: "expired",
  },
  {
    // 2026-09-24: Beebom now marks it expired; GameRant/RadioTimes dropped it
    // from active lists. Eclipse batch fully rotated out.
    code: "EvolutionsFix",
    reward: "25 Trait Crystals",
    status: "expired",
  },
  {
    // 2026-09-26: moved to expired — Beebom + UrGameTips both retired it when
    // the Update 3 batch landed. Survived ~2 days (added Sep 24, expired by
    // Sep 26), in line with this game's rapid rotation (Eclipse: Sep 10 -> 12).
    code: "restartsorry!",
    reward: "25 Trait Crystals",
    status: "expired",
  },
  // --- expired below ---
  {
    // 2026-09-06: died on schedule — gamesradar gave it a Sep 4 expiry, and
    // RadioTimes (Sep 4 live re-check) confirms zero active codes. Beebom and
    // UrGameTips still show it, but neither has re-verified since the expiry date.
    code: "Update2",
    reward: "50 Stat Rerolls, 20 Trait Crystals",
    status: "expired",
  },
  {
    // 2026-09-06: same resolution as Update2 (gamesradar Sep 4 expiry +
    // RadioTimes zero-active confirmation). Teased the next (Eclipse) update -
    // watch for the Eclipse batch as the next drop.
    code: "EclipseSoon",
    reward: "50 Trait Crystals",
    status: "expired",
  },
  {
    // Update 2.0 launch code, dead Sep 2 per gamesradar. Requires Level 25 in-game.
    code: "SummerSiege",
    reward: "50 Equipment Rerolls, 800 Sand Dollars (Level 25+)",
    status: "expired",
  },
  {
    // In-game spelling really is "LighthingGod". Dead Sep 2 per gamesradar.
    code: "LighthingGod",
    reward: "20 Trait Crystals, 500 Sand Dollars (Level 25+)",
    status: "expired",
  },
  {
    // Dead Sep 1 per gamesradar.
    code: "QuickRestart!",
    reward: "25 Trait Crystals",
    status: "expired",
  },
  {
    // Active Aug 18–20 (gamerant, beebom), dead by Aug 24 (eurogamer/radiotimes).
    code: "700mvisits",
    reward: "50 Trait Crystals, 30 Equipment Rerolls, 30 Stat Rerolls",
    status: "expired",
  },
  {
    // Update 1.0 (Warrior Saga) patch code. Reward per gamerant (Aug 18).
    code: "patch1.0",
    reward: "100 Trait Crystals",
    status: "expired",
  },
  {
    // 600M-visits milestone; reward per gamerant (Aug 18).
    code: "600mvisits",
    reward: "50 Trait Crystals, 30 Equipment Rerolls, 30 Stat Rerolls",
    status: "expired",
  },
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
