// Anime Expeditions traits — single source of truth for the traits page.
// Reported community data (cross-checked against public third-party tables),
// NOT official. Verify rates and pity in-client before spending Trait Crystals.
// Update this file as the meta / rates are confirmed.

export const TRAITS_VERIFIED = "2026-08-10";

export type TraitKeep = "keep" | "situational" | "replace-later";

export interface Trait {
  name: string;
  effect: string;
  rate: string; // roll rate as shown by community tables
  pity?: string; // reroll pity threshold, if any
  keep: TraitKeep; // rough guidance: is it worth keeping?
}

// Ordered best → most common (rarest first reads better on a "what to chase" page).
export const traits: Trait[] = [
  { name: "Unbound", effect: "+350% Damage, -5% SPA, +10% Range", rate: "0.1%", pity: "1,500 rerolls", keep: "keep" },
  { name: "Primordial", effect: "+35% Damage, -15% SPA, +20% Range", rate: "0.2%", pity: "750 rerolls", keep: "keep" },
  { name: "Forsaken", effect: "+35% Crit Damage, +35% Crit Chance, +10% Range", rate: "0.3%", pity: "500 rerolls", keep: "keep" },
  { name: "Draconic", effect: "+20% Damage, +50% DoT Damage, -10% unit cost", rate: "0.5%", pity: "300 rerolls", keep: "keep" },
  { name: "Investor", effect: "+25% income", rate: "2%", keep: "keep" },
  { name: "Optics", effect: "+25% Range", rate: "3%", keep: "keep" },
  { name: "Bolt", effect: "-15% SPA", rate: "4%", keep: "keep" },
  { name: "Precision 2", effect: "+20% Crit Chance, +10% Crit Damage", rate: "4%", keep: "keep" },
  { name: "Precision 1", effect: "+10% Crit Chance, +5% Crit Damage", rate: "6%", keep: "situational" },
  { name: "Limit Breaker", effect: "+15% Damage", rate: "6%", keep: "situational" },
  { name: "Range 2", effect: "+10% Range", rate: "7%", keep: "situational" },
  { name: "Speed 2", effect: "-10% SPA", rate: "7%", keep: "situational" },
  { name: "Strength 2", effect: "+10% Damage", rate: "7%", keep: "situational" },
  { name: "Enlightenment", effect: "+50% experience gain", rate: "9%", keep: "situational" },
  { name: "Range 1", effect: "+5% Range", rate: "14.63%", keep: "replace-later" },
  { name: "Speed 1", effect: "-5% SPA", rate: "14.63%", keep: "replace-later" },
  { name: "Strength 1", effect: "+5% Damage", rate: "14.64%", keep: "replace-later" },
];

export const KEEP_LABEL: Record<TraitKeep, string> = {
  keep: "Keep",
  situational: "Situational",
  "replace-later": "Replace later",
};

export const KEEP_PHOSPHOR: Record<TraitKeep, "amber" | "cyan" | "green"> = {
  keep: "amber",
  situational: "cyan",
  "replace-later": "green",
};
