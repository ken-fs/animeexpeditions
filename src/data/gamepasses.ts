// Anime Expeditions gamepasses — single source of truth for the gamepasses page.
// Prices/IDs are officially verified via Roblox API; benefit descriptions are
// EMPTY in the official API, so effects below are community-reported and flagged.
// Regional/managed pricing can change the checkout price. Snapshot: 2026-07-18.
// 2026-08-22: re-verified against Roblox game-passes API (universe 7613921865) —
// the 3 for-sale passes and prices below still match; effects remain unpublished.
// I18n: reported notes localized 2026-09-03 (en is the source).

import type { Locale } from "./i18n";

export const GAMEPASSES_VERIFIED = "2026-08-22";

export interface Gamepass {
  name: string;
  price: string; // Robux, default-snapshot
  reported: string; // community-reported effect (NOT official)
  reportedI18n?: Partial<Record<Locale, string>>;
  confirmed: boolean; // is the benefit officially published? (all currently false)
}

export const gamepasses: Gamepass[] = [
  {
    name: "VIP",
    price: "399 R$",
    reported: "Guides associate it with recurring discounts or progression acceleration.",
    reportedI18n: {
      es: "Las guías lo asocian con descuentos recurrentes o aceleración de progresión.",
      pt: "Os guias o associam a descontos recorrentes ou aceleração de progressão.",
      ru: "Гайды связывают его с регулярными скидками или ускорением прогресса.",
    },
    confirmed: false,
  },
  {
    name: "Shiny Hunter",
    price: "999 R$",
    reported: "Guides link it to Shiny-unit collection, but no multiplier, base Shiny rate, or stacking rule is published.",
    reportedI18n: {
      es: "Las guías lo ligan a la colección de unidades Shiny, pero no se publica multiplicador, tasa base de Shiny ni regla de acumulación.",
      pt: "Os guias o ligam à coleção de unidades Shiny, mas nenhum multiplicador, taxa base de Shiny ou regra de acúmulo é publicada.",
      ru: "Гайды связывают его с коллекционированием Shiny-юнитов, но множитель, базовый шанс Shiny и правило стака не опубликованы.",
    },
    confirmed: false,
  },
  {
    name: "Display All Units",
    price: "399 R$",
    reported: "Framed as a display/collection feature; exact display capacity and behavior are not published.",
    reportedI18n: {
      es: "Presentado como una función de exhibición/colección; la capacidad exacta y el comportamiento no están publicados.",
      pt: "Apresentado como um recurso de exibição/coleção; a capacidade exata e o comportamento não estão publicados.",
      ru: "Преподносится как функция витрины/коллекции; точная вместимость и поведение не опубликованы.",
    },
    confirmed: false,
  },
];
