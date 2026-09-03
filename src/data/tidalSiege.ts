// Anime Expeditions Tidal Siege event + Portals — single source of truth for the
// /tidal-siege/ page. Update 2.0 [Summer Siege] (Aug 31, 2026). Cross-checked across
// sportskeeda unit guides + allthings.how + nerdschalk + GAMES.GG (Sep 2026).
// Event-limited: capsules, shop items, and event modes disappear when Summer Siege ends.
// I18n: prose lists localized 2026-09-03 (en is the source; item/unit names stay English).

import type { Locale } from "./i18n";

export const SIEGE_VERIFIED = "2026-09-03";

type I18n = Partial<Record<Locale, string>>;

// --- Event economy ---
export const sandDollarSources: Record<Locale, string[]> = {
  en: [
    "Clearing Tidal Siege waves (both standard and Infinite mode runs).",
    "Event quests and log-in rewards during Summer Siege.",
    "Fishing — every catch pays Sand Dollars.",
  ],
  es: [
    "Limpiar oleadas de Tidal Siege (tanto en modo estándar como Infinite).",
    "Misiones del evento y recompensas de inicio de sesión durante Summer Siege.",
    "La pesca — cada captura paga Sand Dollars.",
  ],
  pt: [
    "Limpar ondas do Tidal Siege (tanto no modo padrão quanto Infinite).",
    "Missões do evento e recompensas de login durante o Summer Siege.",
    "A pesca — cada captura paga Sand Dollars.",
  ],
  ru: [
    "Зачистка волн Tidal Siege (как в стандартном, так и в Infinite режиме).",
    "Ивентовые задания и награды за вход во время Summer Siege.",
    "Рыбалка — каждый улов приносит Sand Dollars.",
  ],
};

export interface ShopRow {
  item: string;
  price: string; // universal — not localized
  note: string;
  noteI18n?: I18n;
}

export const summerShop: ShopRow[] = [
  {
    item: "Summer Capsule",
    price: "100 Sand Dollars",
    note: "10 for 1,000. Holds limited units — Head Captain, Rainman, Water Mage reported — plus skins.",
    noteI18n: {
      es: "10 por 1,000. Contiene unidades limitadas — Head Captain, Rainman, Water Mage reportadas — más skins.",
      pt: "10 por 1.000. Contém unidades limitadas — Head Captain, Rainman, Water Mage reportadas — mais skins.",
      ru: "10 за 1 000. Содержит лимитированных юнитов — Head Captain, Rainman, Water Mage по данным сообщества, — плюс скины.",
    },
  },
  {
    item: "Advanced Rod",
    price: "750 Sand Dollars",
    note: "Fastest manual fishing rod — buy this first.",
    noteI18n: {
      es: "La caña manual más rápida — compra esto primero.",
      pt: "A vara manual mais rápida — compre isto primeiro.",
      ru: "Самая быстрая ручная удочка — купите её первой.",
    },
  },
  {
    item: "Evolution items",
    price: "10,000 Sand Dollars each",
    note: "Lightning Emblem, Cloud Disc, Desert Fruit, Overgrown Beard, Spirit King's Cloak, Sharktooth Necklace. These fund the new units' evolutions.",
    noteI18n: {
      es: "Lightning Emblem, Cloud Disc, Desert Fruit, Overgrown Beard, Spirit King's Cloak, Sharktooth Necklace. Financian las evoluciones de las nuevas unidades.",
      pt: "Lightning Emblem, Cloud Disc, Desert Fruit, Overgrown Beard, Spirit King's Cloak, Sharktooth Necklace. Financiam as evoluções das novas unidades.",
      ru: "Lightning Emblem, Cloud Disc, Desert Fruit, Overgrown Beard, Spirit King's Cloak, Sharktooth Necklace. Финансируют эволюции новых юнитов.",
    },
  },
];

// --- Exclusive unit routes ---
export interface UnitRoute {
  unit: string;
  how: string;
  howI18n?: I18n;
}

export const eventUnits: UnitRoute[] = [
  {
    unit: "Sharkfang (event Mythic)",
    how: "Fish up a Sharktooth Conch in Tidal Siege water pools (very rare), then use it. Evolves with the Sharktooth Necklace from the event shop.",
    howI18n: {
      es: "Pesca un Sharktooth Conch en los charcos de Tidal Siege (muy raro) y luego úsalo. Evoluciona con la Sharktooth Necklace de la tienda del evento.",
      pt: "Pesque um Sharktooth Conch nas poças do Tidal Siege (muito raro) e depois use-o. Evolui com a Sharktooth Necklace da loja do evento.",
      ru: "Выловите Sharktooth Conch в водоёмах Tidal Siege (очень редко) и используйте его. Эволюционирует с Sharktooth Necklace из ивентового магазина.",
    },
  },
  {
    unit: "Head Captain, Rainman, Water Mage",
    how: "Pull from Summer Capsules (100 Sand Dollars each). Their evolution items are in the same event shop — buy them before the event ends.",
    howI18n: {
      es: "Salen de las Summer Capsules (100 Sand Dollars cada una). Sus objetos de evolución están en la misma tienda del evento — cómpralos antes de que termine.",
      pt: "Saem das Summer Capsules (100 Sand Dollars cada). Seus itens de evolução estão na mesma loja do evento — compre antes que termine.",
      ru: "Выбиваются из Summer Capsules (100 Sand Dollars за штуку). Их предметы эволюции — в том же ивентовом магазине; купите их до конца события.",
    },
  },
  {
    unit: "Sovereign & Lightning God (Secrets)",
    how: "Craft their Secret Portals from Tier 5 portal materials — see the portals section.",
    howI18n: {
      es: "Fabrica sus Secret Portals con materiales de portales Tier 5 — mira la sección de portales.",
      pt: "Fabrique os Secret Portals delas com materiais de portais Tier 5 — veja a seção de portais.",
      ru: "Скрафтите их Secret-порталы из материалов порталов Tier 5 — см. раздел про порталы.",
    },
  },
  {
    unit: "Kitsune & Jester",
    how: "Kitsune is tied to the Kitsune Bingo event; Jester comes from Battlepass Season 2.",
    howI18n: {
      es: "Kitsune está ligada al evento Kitsune Bingo; Jester viene del Battlepass Season 2.",
      pt: "Kitsune está ligada ao evento Kitsune Bingo; Jester vem do Battlepass Season 2.",
      ru: "Kitsune привязана к событию Kitsune Bingo; Jester — из Battlepass Season 2.",
    },
  },
];

// --- Portals ---
export const portalFacts: Record<Locale, string[]> = {
  en: [
    "Update 2.0 added a Portals mode with 4 new portals across five tiers of difficulty.",
    "Tier 5 portals drop Charged Dust and Djinn's Treasure — each at a reported 4% drop rate with a 25-run pity.",
    "Four copies of a Tier 5 material craft its Secret Portal at the Crafting Station: 4× Djinn's Treasure → Sovereign's Portal, 4× Charged Dust → Lightning God's Portal.",
    "HOST the Secret Portal and the Secret unit is guaranteed. JOIN someone else's and your chance drops to ~2% — always host your own.",
    "Clearing a Secret Portal can also award a Secret Unit Augment that raises difficulty, reward chances, and pity progress.",
  ],
  es: [
    "Update 2.0 añadió un modo Portals con 4 portales nuevos repartidos en cinco tiers de dificultad.",
    "Los portales Tier 5 dropean Charged Dust y Djinn's Treasure — cada uno con un drop reportado del 4% y pity de 25 intentos.",
    "Cuatro copias de un material Tier 5 fabrican su Secret Portal en la Crafting Station: 4× Djinn's Treasure → Sovereign's Portal, 4× Charged Dust → Lightning God's Portal.",
    "SÉ el ANFITRIÓN del Secret Portal y la unidad Secret está garantizada. ÚNETE a la de otro y tu probabilidad cae a ~2% — sé siempre tu propio anfitrión.",
    "Limpiar un Secret Portal también puede dar un Secret Unit Augment que sube la dificultad, las probabilidades de recompensa y el progreso de pity.",
  ],
  pt: [
    "A Update 2.0 adicionou um modo Portals com 4 novos portais em cinco tiers de dificuldade.",
    "Os portais Tier 5 dropam Charged Dust e Djinn's Treasure — cada um com drop reportado de 4% e pity de 25 tentativas.",
    "Quatro cópias de um material Tier 5 fabricam seu Secret Portal na Crafting Station: 4× Djinn's Treasure → Sovereign's Portal, 4× Charged Dust → Lightning God's Portal.",
    "SEJA o ANFITRIÃO do Secret Portal e a unidade Secret é garantida. ENTRE na de outro e sua chance cai para ~2% — sempre seja seu próprio anfitrião.",
    "Limpar um Secret Portal também pode dar um Secret Unit Augment que aumenta a dificuldade, as chances de recompensa e o progresso de pity.",
  ],
  ru: [
    "Update 2.0 добавила режим Portals с 4 новыми порталами в пяти тирах сложности.",
    "Порталы Tier 5 роняют Charged Dust и Djinn's Treasure — каждый с шансом 4% и pity на 25 забегов по данным сообщества.",
    "Четыре копии материала Tier 5 крафтят соответствующий Secret-портал на Crafting Station: 4× Djinn's Treasure → Sovereign's Portal, 4× Charged Dust → Lightning God's Portal.",
    "ОТКРОЙТЕ Secret-портал САМИ — и Secret-юнит гарантирован. Зайдя к другому, вы получаете лишь ~2% — всегда хостите свой.",
    "Зачистка Secret-портала может также дать Secret Unit Augment, повышающий сложность, шансы наград и прогресс pity.",
  ],
};

// --- Auto Rod route ---
export const autoRodRoute: Record<Locale, string[]> = {
  en: [
    "Enter Tidal Siege and pick Infinite mode.",
    "Survive to Wave 150 — expect multiple enemy paths and Storm Weather.",
    "The Auto Rod unlocks automatically in the fishing menu (no claim step).",
    "Equip it to skip the fishing minigame — ideal for farming Sharktooth Conch attempts.",
  ],
  es: [
    "Entra en Tidal Siege y elige el modo Infinite.",
    "Sobrevive hasta la Ola 150 — espera múltiples rutas enemigas y Storm Weather.",
    "La Auto Rod se desbloquea automáticamente en el menú de pesca (sin paso de reclamo).",
    "Equípala para saltarte el minijuego de pesca — ideal para farmear intentos de Sharktooth Conch.",
  ],
  pt: [
    "Entre no Tidal Siege e escolha o modo Infinite.",
    "Sobreviva até a Onda 150 — espere múltiplas rotas inimigas e Storm Weather.",
    "A Auto Rod desbloqueia automaticamente no menu de pesca (sem etapa de resgate).",
    "Equipe-a para pular o minigame de pesca — ideal para farmar tentativas de Sharktooth Conch.",
  ],
  ru: [
    "Зайдите на Tidal Siege и выберите режим Infinite.",
    "Выживите до 150-й волны — ждите несколько путей врагов и Storm Weather.",
    "Auto Rod открывается автоматически в меню рыбалки (ничего забирать не нужно).",
    "Экипируйте её, чтобы пропускать мини-игру — идеально для фарма попыток Sharktooth Conch.",
  ],
};

export const eventWarnings: Record<Locale, string[]> = {
  en: [
    "Summer Capsules, event shop items, and Sand Dollar sources are event-limited — they leave when Summer Siege ends.",
    "Buy the evolution items you need BEFORE the event ends; pulling the unit is the easy half, the shop items can't be back-filled later.",
  ],
  es: [
    "Las Summer Capsules, los objetos de la tienda del evento y las fuentes de Sand Dollars son limitados del evento — se van cuando termine Summer Siege.",
    "Compra los objetos de evolución que necesites ANTES de que termine el evento; sacar la unidad es la mitad fácil, los objetos de la tienda no se pueden recuperar después.",
  ],
  pt: [
    "As Summer Capsules, os itens da loja do evento e as fontes de Sand Dollars são limitados do evento — eles saem quando o Summer Siege acabar.",
    "Compre os itens de evolução que precisar ANTES do evento acabar; tirar a unidade é a metade fácil, os itens da loja não dá para recuperar depois.",
  ],
  ru: [
    "Summer Capsules, товары ивентового магазина и источники Sand Dollars ограничены событием — они уйдут с концом Summer Siege.",
    "Купите нужные предметы эволюции ДО конца события: выбить юнита — простая половина, товары магазина потом не восполнить.",
  ],
};
