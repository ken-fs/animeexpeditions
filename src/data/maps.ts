// Anime Expeditions Story maps + drops — single source of truth for the maps page.
// Reported associations from community drop tables (BloxInformer/GAMES.GG-class
// sources), NOT a guaranteed drop guide. No drop % or unlock levels are claimed.
// Verify in the live game panel before farming.

export const MAPS_VERIFIED = "2026-08-10";

export interface MapDrop {
  name: string;
  type: "Food" | "Standard equipment" | "Unit equipment";
  forUnit?: string; // which evolved unit the unit-equipment ties to
}

export interface StoryMap {
  order: number;
  name: string;
  drops: MapDrop[];
}

export const storyMaps: StoryMap[] = [
  {
    order: 1,
    name: "School Grounds",
    drops: [
      { name: "Cursed Boba", type: "Food" },
      { name: "Kunai", type: "Standard equipment" },
      { name: "Promise Ring", type: "Unit equipment", forUnit: "Cursed Student (True Love)" },
      { name: "Technique Amplifier", type: "Unit equipment", forUnit: "Salmon Sorcerer (Grade 1)" },
    ],
  },
  {
    order: 2,
    name: "Flower Forest",
    drops: [
      { name: "Red Flower", type: "Food" },
      { name: "Katana", type: "Standard equipment" },
      { name: "Hell's Flower", type: "Unit equipment", forUnit: "Hollow (Blaze)" },
    ],
  },
  {
    order: 3,
    name: "Rose Kingdom",
    drops: [
      { name: "Frown Fruit", type: "Food" },
      { name: "Magic Orb", type: "Standard equipment" },
      { name: "Emperor's Attire", type: "Unit equipment", forUnit: "Flame Emperor (Reincarnate)" },
      { name: "Webbed Fruit", type: "Unit equipment", forUnit: "String Demon (Awakened)" },
    ],
  },
  {
    order: 4,
    name: "Fairy King Forest",
    drops: [
      { name: "Delicious Pie", type: "Food" },
      { name: "Warrior's Axe", type: "Standard equipment" },
      { name: "Boulder", type: "Unit equipment", forUnit: "Lady Giant (Envy)" },
      { name: "Calamity's Eye", type: "Unit equipment", forUnit: "Puppet (Telekinetic)" },
    ],
  },
  {
    order: 5,
    name: "King's Tomb",
    drops: [
      { name: "Mana Flash", type: "Food" },
      { name: "Magic Book", type: "Standard equipment" },
      { name: "Elven Battle Staff", type: "Unit equipment", forUnit: "Elf Mage (Unleashed)" },
    ],
  },
];
