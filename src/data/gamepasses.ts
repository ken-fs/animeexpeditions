// Anime Expeditions gamepasses — single source of truth for the gamepasses page.
// Prices/IDs are officially verified via Roblox API; benefit descriptions are
// EMPTY in the official API, so effects below are community-reported and flagged.
// Regional/managed pricing can change the checkout price. Snapshot: 2026-07-18.

export const GAMEPASSES_VERIFIED = "2026-08-10";

export interface Gamepass {
  name: string;
  price: string; // Robux, default-snapshot
  reported: string; // community-reported effect (NOT official)
  confirmed: boolean; // is the benefit officially published? (all currently false)
}

export const gamepasses: Gamepass[] = [
  {
    name: "VIP",
    price: "399 R$",
    reported: "Guides associate it with recurring discounts or progression acceleration.",
    confirmed: false,
  },
  {
    name: "Shiny Hunter",
    price: "999 R$",
    reported: "Guides link it to Shiny-unit collection, but no multiplier, base Shiny rate, or stacking rule is published.",
    confirmed: false,
  },
  {
    name: "Display All Units",
    price: "399 R$",
    reported: "Framed as a display/collection feature; exact display capacity and behavior are not published.",
    confirmed: false,
  },
];
