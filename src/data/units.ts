// Anime Expeditions units + tier list — real data.
// Tiers re-ranked 2026-09-03 against the Beebom tier list (updated for Update 2.0),
// which uses an SS / S+ / S / A ordering; unit passives/roles condensed from there.
// Update 2.0 [Summer Siege] added 9 units: Sovereign, Lightning God, Sand, Kitsune,
// Head Captain, Sharkfang, Rainman, Water Mage, Jester.
// Base forms follow the game's "Base (Form)" naming (e.g. "Vegetable (Prince)" →
// base "Vegetable"); rarity rotates via banners so it is not fixed here.
// Keep this the single source of truth for the tier-list + units pages.
// NOTE: tier order is a single-source community opinion (Beebom) — update as the
// meta shifts. B / Watch tiers are retained in the scheme but currently empty;
// the views skip empty tiers so they don't render blank panels.
//
// evolveItem provenance (Update 2.0, verified 2026-09-03):
// - Sovereign (Djinn): Lightning Emblem — Summer Fish Fest shop, 10,000 Sand Dollars (sportskeeda)
// - Lightning God (Overcharged): Ancient Bell — craftable (sprites + gold) (sportskeeda)
// - Sand (Alligator): Desert Fruit — Summer Fish Fest shop, 10,000 Sand Dollars (sportskeeda)
// - Sharkfang (Abyssal): Sharktooth Necklace — Tidal Siege shop, 10,000 Sand Dollars (sportskeeda)
// - Water Mage (Scholar): Spirit King's Cloak — Summer Fish Fest shop, 10,000 Sand Dollars (sportskeeda)
// - Head Captain (Char): Overgrown Beard + Cloud Disc — Tidal Siege shop (allthings.how)
// - Rainman (Forecast): Cloud Disc — event shop (allthings.how)
// - Kitsune and Jester have no evolution.
// roleI18n: es/pt/ru role lines localized 2026-09-03 (en is the source of truth).

import type { Locale } from "./i18n";

export const UNITS_VERIFIED = "2026-09-03";

export type Tier = "SS" | "S+" | "S" | "A" | "B" | "Watch";

export interface Unit {
  name: string; // evolved form shown to players (canonical page name)
  base: string; // base unit
  tier: Tier;
  role: string;
  roleI18n?: Partial<Record<Locale, string>>; // localized role lines (falls back to role)
  evolveItem?: string; // special evolution material
}

export const units: Unit[] = [
  // SS Tier — top of the meta
  {
    name: "Sovereign (Djinn)", base: "Sovereign", tier: "SS",
    role: "Boss-killer carry (swaps Djinn forms vs bosses)",
    roleI18n: {
      es: "Carry matabosses (cambia de forma Djinn contra jefes)",
      pt: "Carry matador de chefes (troca de forma Djinn contra chefes)",
      ru: "Керри-убийца боссов (меняет форму Джинна против боссов)",
    },
    evolveItem: "Lightning Emblem",
  },
  {
    name: "Vegetable (Prince)", base: "Vegetable", tier: "SS",
    role: "Scaling carry (buffs from nearby units)",
    roleI18n: {
      es: "Carry de escalado (se potencia con unidades cercanas)",
      pt: "Carry de escala (buffs de unidades próximas)",
      ru: "Керри со скейлингом (баффы от соседних юнитов)",
    },
  },
  {
    name: "Lightning God (Overcharged)", base: "Lightning God", tier: "SS",
    role: "Scaling DPS (Voltage Meter, up to +300%)",
    roleI18n: {
      es: "DPS de escalado (Medidor de Voltaje, hasta +300%)",
      pt: "DPS de escala (Medidor de Voltagem, até +300%)",
      ru: "DPS со скейлингом (шкала напряжения, до +300%)",
    },
    evolveItem: "Ancient Bell",
  },
  {
    name: "Prodigy (Rage)", base: "Prodigy", tier: "SS",
    role: "AoE burst (every 3rd attack)",
    roleI18n: {
      es: "Ráfaga en área (cada 3er ataque)",
      pt: "Explosão em área (a cada 3º ataque)",
      ru: "AoE-взрыв (каждая 3-я атака)",
    },
  },
  {
    name: "Dark Mage (Sovereign)", base: "Dark Mage", tier: "SS",
    role: "Dual-element damage",
    roleI18n: {
      es: "Daño de doble elemento",
      pt: "Dano de elemento duplo",
      ru: "Урон двух стихий",
    },
  },
  {
    name: "Shadow (Divine)", base: "Shadow", tier: "SS",
    role: "Scaling carry (summon-based)",
    roleI18n: {
      es: "Carry de escalado (basado en invocaciones)",
      pt: "Carry de escala (baseado em invocações)",
      ru: "Керри со скейлингом (на призывах)",
    },
  },
  {
    name: "Sand (Alligator)", base: "Sand", tier: "SS",
    role: "AoE control + burst (Sandstorm, 65% slow, stun)",
    roleI18n: {
      es: "Control en área + ráfaga (Sandstorm, 65% ralentización, aturdimiento)",
      pt: "Controle em área + explosão (Sandstorm, 65% de lentidão, atordoamento)",
      ru: "AoE-контроль + взрыв (Sandstorm, 65% замедления, стан)",
    },
    evolveItem: "Desert Fruit",
  },
  {
    name: "Bioinsect (Final Form)", base: "Bioinsect", tier: "SS",
    role: "Evolving boss-summon carry",
    roleI18n: {
      es: "Carry que evoluciona invocando jefes",
      pt: "Carry que evolui invocando chefes",
      ru: "Керри, эволюционирующий через призыв боссов",
    },
  },
  {
    name: "8th Sword (Berserker)", base: "8th Sword", tier: "SS",
    role: "Damage / specialist",
    roleI18n: {
      es: "Daño / especialista",
      pt: "Dano / especialista",
      ru: "Урон / специалист",
    },
  },
  {
    name: "Crow (Black Fire)", base: "Crow", tier: "SS",
    role: "Secret unit (needs full build)",
    roleI18n: {
      es: "Unidad Secret (necesita build completa)",
      pt: "Unidade Secret (precisa de build completa)",
      ru: "Секретный юнит (нужен полный билд)",
    },
  },
  // S+ Tier
  {
    name: "Kitsune", base: "Kitsune", tier: "S+",
    role: "Support buffer (strongest-unit + team dmg buffs)",
    roleI18n: {
      es: "Soporte de buffs (a la unidad más fuerte + daño de equipo)",
      pt: "Suporte de buffs (na unidade mais forte + dano da equipe)",
      ru: "Саппорт-баффер (сильнейшему юниту + урон команды)",
    },
  },
  {
    name: "Head Captain (Char)", base: "Head Captain", tier: "S+",
    role: "Infinite Burn stacking (up to +150% dmg taken)",
    roleI18n: {
      es: "Acumulación infinita de Burn (hasta +150% daño recibido)",
      pt: "Acúmulo infinito de Burn (até +150% de dano recebido)",
      ru: "Бесконечные стаки Burn (до +150% получаемого урона)",
    },
    evolveItem: "Overgrown Beard + Cloud Disc",
  },
  {
    name: "Carrot (Unleashed)", base: "Carrot", tier: "S+",
    role: "Crit-charged transform DPS",
    roleI18n: {
      es: "DPS de transformación por críticos",
      pt: "DPS de transformação por críticos",
      ru: "DPS-трансформа от критов",
    },
  },
  {
    name: "Sharkfang (Abyssal)", base: "Sharkfang", tier: "S+",
    role: "Control DPS (Waterfall slow, Tidal Wave rewind)",
    roleI18n: {
      es: "DPS de control (ralentización Waterfall, retroceso Tidal Wave)",
      pt: "DPS de controle (lentidão Waterfall, retrocesso Tidal Wave)",
      ru: "DPS-контроль (замедление Waterfall, откат Tidal Wave)",
    },
    evolveItem: "Sharktooth Necklace",
  },
  {
    name: "Puppet (Telekinetic)", base: "Puppet", tier: "S+",
    role: "Control (enemy rewind)",
    roleI18n: {
      es: "Control (retroceso de enemigos)",
      pt: "Controle (retrocesso de inimigos)",
      ru: "Контроль (откат врагов)",
    },
    evolveItem: "Puppet Heart",
  },
  {
    name: "Cursed Student (True Love)", base: "Cursed Student", tier: "S+",
    role: "Scaling carry / DPS",
    roleI18n: {
      es: "Carry de escalado / DPS",
      pt: "Carry de escala / DPS",
      ru: "Керри со скейлингом / DPS",
    },
    evolveItem: "Student ID",
  },
  {
    name: "Toy Maker", base: "Toy Maker", tier: "S+",
    role: "Damage / specialist",
    roleI18n: {
      es: "Daño / especialista",
      pt: "Dano / especialista",
      ru: "Урон / специалист",
    },
    evolveItem: "Joker of the Nonsensical Pirates",
  },
  {
    name: "Razorjaw (Hunter)", base: "Razorjaw", tier: "S+",
    role: "DPS (best with Unbound trait)",
    roleI18n: {
      es: "DPS (mejor con el trait Unbound)",
      pt: "DPS (melhor com o trait Unbound)",
      ru: "DPS (лучше всего с трейтом Unbound)",
    },
  },
  {
    name: "Cubert", base: "Cubert", tier: "S+",
    role: "Battlefield control (cube summons)",
    roleI18n: {
      es: "Control del campo (invocación de cubos)",
      pt: "Controle do campo (invocação de cubos)",
      ru: "Контроль поля (призыв кубов)",
    },
  },
  {
    name: "The Drink (Juicebox)", base: "The Drink", tier: "S+",
    role: "Follow-up amplifier (The Drink Mark)",
    roleI18n: {
      es: "Amplificador de follow-up (marca The Drink)",
      pt: "Amplificador de follow-up (marca The Drink)",
      ru: "Усилитель добиваний (метка The Drink)",
    },
  },
  // S Tier
  {
    name: "Rainman (Forecast)", base: "Rainman", tier: "S",
    role: "AoE + control (Frog Storm, Poison Frogs)",
    roleI18n: {
      es: "Área + control (Frog Storm, Poison Frogs)",
      pt: "Área + controle (Frog Storm, Poison Frogs)",
      ru: "AoE + контроль (Frog Storm, Poison Frogs)",
    },
    evolveItem: "Cloud Disc",
  },
  {
    name: "Water Mage (Scholar)", base: "Water Mage", tier: "S",
    role: "Freeze control (Shatter, Wall of Ice traps)",
    roleI18n: {
      es: "Control de congelación (Shatter, trampas Wall of Ice)",
      pt: "Controle de congelamento (Shatter, armadilhas Wall of Ice)",
      ru: "Контроль заморозкой (Shatter, ловушки Wall of Ice)",
    },
    evolveItem: "Spirit King's Cloak",
  },
  {
    name: "Crimson (Brother)", base: "Crimson", tier: "S",
    role: "Targeted damage (Crimson Mark)",
    roleI18n: {
      es: "Daño dirigido (marca Crimson)",
      pt: "Dano direcionado (marca Crimson)",
      ru: "Точечный урон (метка Crimson)",
    },
  },
  {
    name: "Flame Emperor (Reincarnate)", base: "Flame Emperor", tier: "S",
    role: "AoE / damage-over-time",
    roleI18n: {
      es: "Área / daño prolongado",
      pt: "Área / dano contínuo",
      ru: "AoE / урон со временем",
    },
    evolveItem: "Burning Fruit",
  },
  {
    name: "Salmon Sorcerer (Grade 1)", base: "Salmon Sorcerer", tier: "S",
    role: "Control (slow & stagger)",
    roleI18n: {
      es: "Control (ralentización y tambaleo)",
      pt: "Controle (lentidão e cambaleio)",
      ru: "Контроль (замедление и ошеломление)",
    },
    evolveItem: "Salmon",
  },
  {
    name: "Lady Giant (Envy)", base: "Lady Giant", tier: "S",
    role: "AoE / damage-over-time",
    roleI18n: {
      es: "Área / daño prolongado",
      pt: "Área / dano contínuo",
      ru: "AoE / урон со временем",
    },
  },
  {
    name: "Elf Mage (Unleashed)", base: "Elf Mage", tier: "S",
    role: "Long-fight magic damage",
    roleI18n: {
      es: "Daño mágico de peleas largas",
      pt: "Dano mágico de lutas longas",
      ru: "Магический урон в долгих боях",
    },
    evolveItem: "Cosmic Magic",
  },
  {
    name: "Ramen Guy", base: "Ramen Guy", tier: "S",
    role: "Economy (+50% Yen from kills)",
    roleI18n: {
      es: "Economía (+50% Yen por baja)",
      pt: "Economia (+50% Yen por abate)",
      ru: "Экономика (+50% йен за убийство)",
    },
  },
  // A Tier
  {
    name: "Cursed Immortal (Black Sun)", base: "Cursed Immortal", tier: "A",
    role: "Burst damage (falls off in long levels)",
    roleI18n: {
      es: "Daño en ráfaga (cae en niveles largos)",
      pt: "Dano em explosão (cai em fases longas)",
      ru: "Взрывной урон (слабеет на длинных уровнях)",
    },
  },
  {
    name: "Jester", base: "Jester", tier: "A",
    role: "Random-weapon DPS (Scythe / Rifle / Mace)",
    roleI18n: {
      es: "DPS de arma aleatoria (guadaña / rifle / maza)",
      pt: "DPS de arma aleatória (foice / rifle / maça)",
      ru: "DPS со случайным оружием (коса / винтовка / булава)",
    },
  },
  {
    name: "String Demon (Awakened)", base: "String Demon", tier: "A",
    role: "Follow-up synergy",
    roleI18n: {
      es: "Sinergia de follow-up",
      pt: "Sinergia de follow-up",
      ru: "Синергия добиваний",
    },
  },
  {
    name: "Reaper (Released)", base: "Reaper", tier: "A",
    role: "Damage / specialist",
    roleI18n: {
      es: "Daño / especialista",
      pt: "Dano / especialista",
      ru: "Урон / специалист",
    },
  },
  {
    name: "Hollow (Blaze)", base: "Hollow", tier: "A",
    role: "Damage / specialist",
    roleI18n: {
      es: "Daño / especialista",
      pt: "Dano / especialista",
      ru: "Урон / специалист",
    },
  },
  {
    name: "Forbidden Teacher", base: "Forbidden Teacher", tier: "A",
    role: "Support (buffs magical units in range)",
    roleI18n: {
      es: "Soporte (potencia unidades mágicas en rango)",
      pt: "Suporte (buffs em unidades mágicas no alcance)",
      ru: "Саппорт (баффы магическим юнитам в радиусе)",
    },
  },
  {
    name: "The Hero", base: "The Hero", tier: "A",
    role: "Team amplifier / support",
    roleI18n: {
      es: "Amplificador de equipo / soporte",
      pt: "Amplificador de equipe / suporte",
      ru: "Усилитель команды / саппорт",
    },
  },
  {
    name: "True Saint (Holy)", base: "True Saint", tier: "A",
    role: "Team amplifier / support",
    roleI18n: {
      es: "Amplificador de equipo / soporte",
      pt: "Amplificador de equipe / suporte",
      ru: "Усилитель команды / саппорт",
    },
    evolveItem: "Holy Pendant",
  },
];

/** Role line for a unit in the requested locale (falls back to English). */
export function unitRole(u: Unit, locale: Locale): string {
  return u.roleI18n?.[locale] ?? u.role;
}

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
