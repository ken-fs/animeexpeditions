// Anime Expeditions units + tier list — real data (launch-window snapshot, verified 2026-07-17).
// Source: community wiki roster/tier pages, cross-checked. Rarity rotates via banners so not fixed here.
// Update tiers as the meta shifts; keep this the single source of truth for tier-list + units pages.

export const UNITS_VERIFIED = "2026-08-09";

export type Tier = "S" | "A" | "B" | "Watch";

export interface Unit {
  name: string; // evolved form shown to players (canonical page name)
  base: string; // base unit
  tier: Tier;
  role: string;
  evolveItem?: string; // special evolution material
}

export const units: Unit[] = [
  // S Tier
  { name: "Cursed Student (True Love)", base: "Cursed Student", tier: "S", role: "Scaling carry / DPS", evolveItem: "Student ID" },
  { name: "Salmon Sorcerer (Grade 1)", base: "Salmon Sorcerer", tier: "S", role: "Control (slow & stagger)", evolveItem: "Salmon" },
  { name: "Shadow (Divine)", base: "Shadow", tier: "S", role: "Scaling carry (summon-based)" },
  { name: "True Saint (Holy)", base: "True Saint", tier: "S", role: "Team amplifier / support", evolveItem: "Holy Pendant" },
  // A Tier
  { name: "The Hero", base: "The Hero", tier: "A", role: "Team amplifier / support" },
  { name: "Elf Mage (Unleashed)", base: "Elf Mage", tier: "A", role: "Long-fight magic damage", evolveItem: "Cosmic Magic" },
  { name: "Flame Emperor (Reincarnate)", base: "Flame Emperor", tier: "A", role: "AoE / damage-over-time", evolveItem: "Burning Fruit" },
  { name: "Puppet (Telekinetic)", base: "Puppet", tier: "A", role: "Control (enemy rewind)", evolveItem: "Puppet Heart" },
  { name: "String Demon (Awakened)", base: "String Demon", tier: "A", role: "Follow-up synergy" },
  // B Tier
  { name: "Lady Giant (Envy)", base: "Lady Giant", tier: "B", role: "AoE / damage-over-time" },
  { name: "Hollow (Blaze)", base: "Hollow", tier: "B", role: "Damage / specialist" },
  { name: "Reaper (Released)", base: "Reaper", tier: "B", role: "Damage / specialist" },
  { name: "8th Sword (Berserker)", base: "8th Sword", tier: "B", role: "Damage / specialist" },
  // Watch Tier
  { name: "Crimson (Brother)", base: "Crimson", tier: "Watch", role: "Targeted damage (Crimson Mark)" },
  { name: "Toy Maker", base: "Toy Maker", tier: "Watch", role: "Promising — needs testing", evolveItem: "Joker of the Nonsensical Pirates" },
];

export const TIER_ORDER: Tier[] = ["S", "A", "B", "Watch"];

export const TIER_LABEL: Record<Tier, string> = {
  S: "S Tier — best in slot",
  A: "A Tier — strong picks",
  B: "B Tier — situational",
  Watch: "Watch — promising, unproven",
};

export const TIER_COLOR: Record<Tier, string> = {
  S: "text-accent",
  A: "text-active",
  B: "text-foreground",
  Watch: "text-muted",
};

export function unitsByTier(t: Tier) {
  return units.filter((u) => u.tier === t);
}
