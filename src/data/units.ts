// Anime Expeditions units + tier list — real data.
// Tiers re-ranked 2026-08-22 against the Beebom tier list (updated 2026-08-11),
// which uses an SS / S+ / S / A ordering; unit passives/roles quoted from there.
// Base forms follow the game's "Base (Form)" naming (e.g. "Vegetable (Prince)" →
// base "Vegetable"); rarity rotates via banners so it is not fixed here.
// Keep this the single source of truth for the tier-list + units pages.
// NOTE: tier order is a single-source community opinion (Beebom) — update as the
// meta shifts. B / Watch tiers are retained in the scheme but currently empty;
// the views skip empty tiers so they don't render blank panels.

export const UNITS_VERIFIED = "2026-08-22";

export type Tier = "SS" | "S+" | "S" | "A" | "B" | "Watch";

export interface Unit {
  name: string; // evolved form shown to players (canonical page name)
  base: string; // base unit
  tier: Tier;
  role: string;
  evolveItem?: string; // special evolution material
}

export const units: Unit[] = [
  // SS Tier — top of the meta
  { name: "Vegetable (Prince)", base: "Vegetable", tier: "SS", role: "Scaling carry (buffs from nearby units)" },
  { name: "Prodigy (Rage)", base: "Prodigy", tier: "SS", role: "AoE burst (every 3rd attack)" },
  { name: "Dark Mage (Sovereign)", base: "Dark Mage", tier: "SS", role: "Dual-element damage" },
  { name: "Shadow (Divine)", base: "Shadow", tier: "SS", role: "Scaling carry (summon-based)" },
  { name: "Bioinsect (Final Form)", base: "Bioinsect", tier: "SS", role: "Evolving boss-summon carry" },
  { name: "8th Sword (Berserker)", base: "8th Sword", tier: "SS", role: "Damage / specialist" },
  { name: "Crow (Black Fire)", base: "Crow", tier: "SS", role: "Secret unit (needs full build)" },
  // S+ Tier
  { name: "Carrot (Unleashed)", base: "Carrot", tier: "S+", role: "Crit-charged transform DPS" },
  { name: "Puppet (Telekinetic)", base: "Puppet", tier: "S+", role: "Control (enemy rewind)", evolveItem: "Puppet Heart" },
  { name: "Cursed Student (True Love)", base: "Cursed Student", tier: "S+", role: "Scaling carry / DPS", evolveItem: "Student ID" },
  { name: "Toy Maker", base: "Toy Maker", tier: "S+", role: "Damage / specialist", evolveItem: "Joker of the Nonsensical Pirates" },
  { name: "Razorjaw (Hunter)", base: "Razorjaw", tier: "S+", role: "DPS (best with Unbound trait)" },
  { name: "Cubert", base: "Cubert", tier: "S+", role: "Battlefield control (cube summons)" },
  { name: "The Drink (Juicebox)", base: "The Drink", tier: "S+", role: "Follow-up amplifier (The Drink Mark)" },
  // S Tier
  { name: "Crimson (Brother)", base: "Crimson", tier: "S", role: "Targeted damage (Crimson Mark)" },
  { name: "Flame Emperor (Reincarnate)", base: "Flame Emperor", tier: "S", role: "AoE / damage-over-time", evolveItem: "Burning Fruit" },
  { name: "Salmon Sorcerer (Grade 1)", base: "Salmon Sorcerer", tier: "S", role: "Control (slow & stagger)", evolveItem: "Salmon" },
  { name: "Lady Giant (Envy)", base: "Lady Giant", tier: "S", role: "AoE / damage-over-time" },
  { name: "Elf Mage (Unleashed)", base: "Elf Mage", tier: "S", role: "Long-fight magic damage", evolveItem: "Cosmic Magic" },
  { name: "Ramen Guy", base: "Ramen Guy", tier: "S", role: "Economy (+50% Yen from kills)" },
  // A Tier
  { name: "Cursed Immortal (Black Sun)", base: "Cursed Immortal", tier: "A", role: "Burst damage (falls off in long levels)" },
  { name: "String Demon (Awakened)", base: "String Demon", tier: "A", role: "Follow-up synergy" },
  { name: "Reaper (Released)", base: "Reaper", tier: "A", role: "Damage / specialist" },
  { name: "Hollow (Blaze)", base: "Hollow", tier: "A", role: "Damage / specialist" },
  { name: "Forbidden Teacher", base: "Forbidden Teacher", tier: "A", role: "Support (buffs magical units in range)" },
  { name: "The Hero", base: "The Hero", tier: "A", role: "Team amplifier / support" },
  { name: "True Saint (Holy)", base: "True Saint", tier: "A", role: "Team amplifier / support", evolveItem: "Holy Pendant" },
];

export const TIER_ORDER: Tier[] = ["SS", "S+", "S", "A", "B", "Watch"];

export const TIER_LABEL: Record<Tier, string> = {
  SS: "SS Tier — top of the meta",
  "S+": "S+ Tier — near best in slot",
  S: "S Tier — best in slot",
  A: "A Tier — strong picks",
  B: "B Tier — situational",
  Watch: "Watch — promising, unproven",
};

export const TIER_COLOR: Record<Tier, string> = {
  SS: "text-accent",
  "S+": "text-accent",
  S: "text-accent",
  A: "text-active",
  B: "text-foreground",
  Watch: "text-muted",
};

export function unitsByTier(t: Tier) {
  return units.filter((u) => u.tier === t);
}
