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
// 2026-10-11 pull: the Update 3 batch (Bossrush/Hellfire/Update3/RDC26) rotated
// out — Beebom's expired list and UrGameTips' expired table (17 entries) both
// carry all four. The new batch is three codes, both sources agree on rewards:
// Clash! / Brothers / HollowWorld. Watcher found the gap on its first pass.
export const LAST_VERIFIED = "2026-10-11";
// 2026-10-11: Roblox games API for universeId 7613921865 — 803.8M visits;
// game updated 2026-10-09 (the build that carried this batch).
export const GAME_VISITS = "803M+"; // live visits, for milestone context (Roblox API, universeId 7613921865)
export const NEXT_MILESTONE_HINT =
  "The 800M-visit milestone has passed (803M) — the batch-rotation pattern means the next code drop is likely tied to a 900M milestone or the next update.";

export const codes: GameCode[] = [
  // --- October batch (2026-10-09) ---
  // Sourcing: Beebom (all three marked NEW, rewards spelled out) + UrGameTips
  // (same three, same rewards, in the working table). 2-source rule satisfied.
  {
    code: "Clash!",
    reward: "500x Defense Credit + 50x Trait Crystal",
    status: "active",
  },
  {
    code: "Brothers",
    reward: "20x Equipment Reroll + 10x Equipment Lock + 10x Stat Reroll",
    status: "active",
  },
  {
    code: "HollowWorld",
    reward: "50x Trait Crystal",
    status: "active",
  },
  // --- Update 3 batch (2026-09-25) — retired 2026-10-11 ---
  // Sourcing: both Beebom (expired list) and UrGameTips (expired table) carry
  // all four as expired in the October pull.
  {
    code: "Bossrush",
    reward: "Free rewards",
    status: "expired",
  },
  {
    code: "Hellfire",
    reward: "Free rewards",
    status: "expired",
  },
  {
    code: "Update3",
    reward: "Free rewards",
    status: "expired",
  },
  {
    code: "RDC26",
    reward: "Free rewards",
    status: "expired",
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
