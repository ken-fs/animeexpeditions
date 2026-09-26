// Anime Expeditions update log — single source of truth for the updates page.
// Reported from official Roblox event windows + community patch summaries.
// Client-side details are provisional until first-party confirmation.
// Add the newest update at the TOP as new patches drop — this is the site's
// main freshness signal, so keep dates accurate.
// I18n: highlights localized 2026-09-03 (en is the source; proper nouns stay English).

import type { Locale } from "./i18n";

export const UPDATES_VERIFIED = "2026-09-26";

export interface GameUpdate {
  version: string; // e.g. "Update 1.0"
  title?: string; // theme/subtitle
  date: string; // human window or publish date
  status: "verified" | "provisional";
  highlights: string[];
  highlightsI18n?: Partial<Record<Locale, string[]>>;
}

export const updates: GameUpdate[] = [
  {
    version: "Update 3.0",
    date: "Released Sep 25, 2026",
    status: "provisional", // official changelog's 3.0 entry is still a placeholder (identical to 2.5); details below come from creator coverage + the code batch
    highlights: [
      "New Boss Rush mode - a boss-focused mode added with the update (creator coverage, Sep 25). Exact rules and rewards are still being documented.",
      "New units: creator coverage names Shinra, Sho, Benimaru and Tobirama - the banner pulls the first post-update videos chased. Stats and evolutions get folded into the units page and tier list as they are documented.",
      "Four codes landed with the update: Bossrush, Hellfire, Update3 and RDC26 - the first batch to include the update's own name.",
      "The game updated Sep 25, 2026 (20:08 UTC), at 795M visits. The official changelog's Update 3.0 entry is still a placeholder, so this entry tracks creator coverage until first-party notes publish.",
    ],
    highlightsI18n: {
      es: [
        "Nuevo modo Boss Rush - un modo centrado en jefes a\u00f1adido con la actualizaci\u00f3n (cobertura de creadores, 25 sep). Las reglas y recompensas exactas siguen document\u00e1ndose.",
        "Nuevas unidades: la cobertura de creadores nombra a Shinra, Sho, Benimaru y Tobirama - los pulls de banner que persiguieron los primeros v\u00eddeos tras la actualizaci\u00f3n. Sus stats y evoluciones se a\u00f1adir\u00e1n a la p\u00e1gina de unidades y al tier list a medida que se documenten.",
        "Cuatro c\u00f3digos llegaron con la actualizaci\u00f3n: Bossrush, Hellfire, Update3 y RDC26 - el primer lote que incluye el nombre de la propia actualizaci\u00f3n.",
        "El juego se actualiz\u00f3 el 25 de septiembre de 2026 (20:08 UTC), con 795M de visitas. La entrada de Update 3.0 en el changelog oficial sigue siendo un placeholder, as\u00ed que esta entrada sigue la cobertura de creadores hasta que se publiquen notas de primera mano.",
      ],
      pt: [
        "Novo modo Boss Rush - um modo focado em chefes adicionado com a atualiza\u00e7\u00e3o (cobertura de criadores, 25 set). Regras e recompensas exatas ainda est\u00e3o sendo documentadas.",
        "Novas unidades: a cobertura de criadores cita Shinra, Sho, Benimaru e Tobirama - os pulls de banner perseguidos pelos primeiros v\u00eddeos ap\u00f3s a atualiza\u00e7\u00e3o. Stats e evolu\u00e7\u00f5es entram na p\u00e1gina de unidades e no tier list conforme forem documentados.",
        "Quatro c\u00f3digos chegaram com a atualiza\u00e7\u00e3o: Bossrush, Hellfire, Update3 e RDC26 - o primeiro lote a incluir o nome da pr\u00f3pria atualiza\u00e7\u00e3o.",
        "O jogo foi atualizado em 25 de setembro de 2026 (20:08 UTC), com 795M de visitas. A entrada de Update 3.0 no changelog oficial ainda \u00e9 um placeholder, ent\u00e3o esta entrada acompanha a cobertura de criadores at\u00e9 que notas de primeira m\u00e3o sejam publicadas.",
      ],
      ru: [
        "\u041d\u043e\u0432\u044b\u0439 \u0440\u0435\u0436\u0438\u043c Boss Rush - \u0440\u0435\u0436\u0438\u043c, \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0432\u043e\u043a\u0440\u0443\u0433 \u0431\u043e\u0441\u0441\u043e\u0432, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043c (\u043f\u043e \u043e\u0431\u0437\u043e\u0440\u0430\u043c \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u0435\u0439, 25 \u0441\u0435\u043d). \u0422\u043e\u0447\u043d\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438 \u043d\u0430\u0433\u0440\u0430\u0434\u044b \u0435\u0449\u0451 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f.",
        "\u041d\u043e\u0432\u044b\u0435 \u044e\u043d\u0438\u0442\u044b: \u0432 \u043e\u0431\u0437\u043e\u0440\u0430\u0445 \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u0435\u0439 \u043d\u0430\u0437\u0432\u0430\u043d\u044b Shinra, Sho, Benimaru \u0438 Tobirama - \u0438\u043c\u0435\u043d\u043d\u043e \u0438\u0445 \u0432\u044b\u0431\u0438\u0432\u0430\u043b\u0438 \u0432 \u043f\u0435\u0440\u0432\u044b\u0445 \u0432\u0438\u0434\u0435\u043e \u043f\u043e\u0441\u043b\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f. \u0421\u0442\u0430\u0442\u044b \u0438 \u044d\u0432\u043e\u043b\u044e\u0446\u0438\u0438 \u0434\u043e\u0431\u0430\u0432\u044f\u0442\u0441\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u044e\u043d\u0438\u0442\u043e\u0432 \u0438 \u0432 \u0442\u0438\u0440-\u043b\u0438\u0441\u0442 \u043f\u043e \u043c\u0435\u0440\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.",
        "\u0412\u043c\u0435\u0441\u0442\u0435 \u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0432\u044b\u0448\u043b\u043e \u0447\u0435\u0442\u044b\u0440\u0435 \u043a\u043e\u0434\u0430: Bossrush, Hellfire, Update3 \u0438 RDC26 - \u043f\u0435\u0440\u0432\u044b\u0439 \u043d\u0430\u0431\u043e\u0440, \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0438\u0439 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0430\u043c\u043e\u0433\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f.",
        "\u0418\u0433\u0440\u0430 \u043e\u0431\u043d\u043e\u0432\u0438\u043b\u0430\u0441\u044c 25 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2026 (20:08 UTC) \u043f\u0440\u0438 795M \u0432\u0438\u0437\u0438\u0442\u043e\u0432. \u0417\u0430\u043f\u0438\u0441\u044c Update 3.0 \u0432 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u043c \u0447\u0435\u0439\u043d\u0434\u0436\u043b\u043e\u0433\u0435 \u0432\u0441\u0451 \u0435\u0449\u0451 \u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0437\u0434\u0435\u0441\u044c \u043c\u044b \u043e\u043f\u0438\u0440\u0430\u0435\u043c\u0441\u044f \u043d\u0430 \u043e\u0431\u0437\u043e\u0440\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u0435\u0439 \u0434\u043e \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0437\u0430\u043c\u0435\u0442\u043e\u043a.",
      ],
    },
  },
  {
    version: "Update 2.0",
    title: "Summer Siege",
    date: "Released Aug 31, 2026",
    status: "provisional", // changelog via sportskeeda's transcript of the official in-game log; client details unverified first-hand
    highlights: [
      "Tidal Siege event: clear waves for Sand Dollars (event currency) and Summer Capsules containing limited units and skins.",
      "Fishing system: five rods (Normal, Auto, Advanced, Lucky, Recycling) — Lucky Rod is the rare 1% pull. Fish for units, traits, and gear, with ranks and milestone rewards.",
      "9 new units with evolutions — incl. Sovereign (Djinn), Lightning God (Overcharged), Sand (Alligator), Kitsune, Head Captain (Char), Sharkfang (Abyssal), Rainman (Forecast), Water Mage (Scholar), Jester — folded into the units page and tier list.",
      "4 new Portals, Battlepass Season 2, 7 new equipment, 6 skins, 5 mounts (surfboards + Crab), 3 accessories, 5 events, 4 Summer Bundles, plus QoL.",
      "Launch codes: Update2 and EclipseSoon (expire Sep 4), SummerSiege and LighthingGod (expired Sep 2, Level 25+). EclipseSoon teases the next update.",
      "First teased on the official X account (@ExpeditionsRBLX) on Aug 18, 2026.",
    ],
    highlightsI18n: {
      es: [
        "Evento Tidal Siege: limpia oleadas para ganar Sand Dollars (moneda del evento) y Summer Capsules con unidades y skins limitadas.",
        "Sistema de pesca: cinco cañas (Normal, Auto, Advanced, Lucky, Recycling) — la Lucky Rod es el premio raro al 1%. Pesca unidades, traits y equipo, con rangos y recompensas de hitos.",
        "9 unidades nuevas con evoluciones — incl. Sovereign (Djinn), Lightning God (Overcharged), Sand (Alligator), Kitsune, Head Captain (Char), Sharkfang (Abyssal), Rainman (Forecast), Water Mage (Scholar), Jester — ya integradas en la página de unidades y el ranking de tiers.",
        "4 Portals nuevos, Battlepass Season 2, 7 equipamientos nuevos, 6 skins, 5 monturas (tablas de surf + Crab), 3 accesorios, 5 eventos, 4 Summer Bundles, más QoL.",
        "Códigos de lanzamiento: Update2 y EclipseSoon (caducan el 4 de sep), SummerSiege y LighthingGod (caducaron el 2 de sep, nivel 25+). EclipseSoon anticipa la próxima actualización.",
        "Anunciada por primera vez en la cuenta oficial de X (@ExpeditionsRBLX) el 18 de agosto de 2026.",
      ],
      pt: [
        "Evento Tidal Siege: limpe ondas para ganhar Sand Dollars (moeda do evento) e Summer Capsules com unidades e skins limitadas.",
        "Sistema de pesca: cinco varas (Normal, Auto, Advanced, Lucky, Recycling) — a Lucky Rod é o prêmio raro de 1%. Pesque unidades, traits e equipamento, com ranks e recompensas de marcos.",
        "9 novas unidades com evoluções — incl. Sovereign (Djinn), Lightning God (Overcharged), Sand (Alligator), Kitsune, Head Captain (Char), Sharkfang (Abyssal), Rainman (Forecast), Water Mage (Scholar), Jester — já integradas na página de unidades e no ranking de tiers.",
        "4 novos Portals, Battlepass Season 2, 7 novos equipamentos, 6 skins, 5 montarias (pranchas + Crab), 3 acessórios, 5 eventos, 4 Summer Bundles, mais QoL.",
        "Códigos de lançamento: Update2 e EclipseSoon (expiram em 4 de set), SummerSiege e LighthingGod (expiraram em 2 de set, nível 25+). EclipseSoon antecipa a próxima atualização.",
        "Anunciada pela primeira vez na conta oficial do X (@ExpeditionsRBLX) em 18 de agosto de 2026.",
      ],
      ru: [
        "Событие Tidal Siege: зачищайте волны ради Sand Dollars (валюта события) и Summer Capsules с лимитированными юнитами и скинами.",
        "Система рыбалки: пять удочек (Normal, Auto, Advanced, Lucky, Recycling) — Lucky Rod достаётся с шансом 1%. Ловите юнитов, трейты и снаряжение, с рангами и наградами за вехи.",
        "9 новых юнитов с эволюциями — вкл. Sovereign (Djinn), Lightning God (Overcharged), Sand (Alligator), Kitsune, Head Captain (Char), Sharkfang (Abyssal), Rainman (Forecast), Water Mage (Scholar), Jester — уже внесены в список юнитов и тир-лист.",
        "4 новых портала, Battlepass Season 2, 7 новых снаряжений, 6 скинов, 5 маунтов (сёрфборды + Crab), 3 аксессуара, 5 событий, 4 Summer Bundles и улучшения QoL.",
        "Коды к запуску: Update2 и EclipseSoon (истекают 4 сен), SummerSiege и LighthingGod (истекли 2 сен, уровень 25+). EclipseSoon намекает на следующее обновление.",
        "Впервые анонсирована в официальном аккаунте X (@ExpeditionsRBLX) 18 августа 2026.",
      ],
    },
  },
  {
    version: "Update 1.0",
    title: "Warrior Saga",
    date: "Aug 7 – Aug 21, 2026 (event window)",
    status: "provisional",
    highlights: [
      "Warrior Saga content playable from Aug 10 per the official X account; window verified via the official Roblox events API.",
      "Rotating events (reported): Dragon's Wish — collect 7 Wish Orbs for an exclusive mount — plus Boss Bounty, Guess That Unit!, M.A.S.T.R.R.: Beyond Pain, and Ballin' Traits, most running until Update 2.0 lands.",
      "Later rotations: Elemental Weather + Wandering Trader (Aug 12), Banner Blitz + Weekend Surge (Aug 13), Forge Fever + Shiny Overflow (Aug 16).",
      "New Warrior Saga units are folded into the units page and tier list.",
      "Patch code `patch1.0` (100 Trait Crystals) dropped with the update and has since expired.",
    ],
    highlightsI18n: {
      es: [
        "Contenido de Warrior Saga jugable desde el 10 de agosto según la cuenta oficial de X; ventana verificada vía la API oficial de eventos de Roblox.",
        "Eventos rotativos (reportados): Dragon's Wish — colecciona 7 Wish Orbs para una montura exclusiva — más Boss Bounty, Guess That Unit!, M.A.S.T.R.R.: Beyond Pain y Ballin' Traits, la mayoría activos hasta que llegue Update 2.0.",
        "Rotaciones posteriores: Elemental Weather + Wandering Trader (12 ago), Banner Blitz + Weekend Surge (13 ago), Forge Fever + Shiny Overflow (16 ago).",
        "Las nuevas unidades de Warrior Saga ya están integradas en la página de unidades y el ranking de tiers.",
        "El código de parche `patch1.0` (100 Trait Crystals) salió con la actualización y ya caducó.",
      ],
      pt: [
        "Conteúdo de Warrior Saga jogável a partir de 10 de agosto segundo a conta oficial do X; janela verificada via API oficial de eventos do Roblox.",
        "Eventos rotativos (reportados): Dragon's Wish — colete 7 Wish Orbs para uma montaria exclusiva — mais Boss Bounty, Guess That Unit!, M.A.S.T.R.R.: Beyond Pain e Ballin' Traits, a maioria ativa até a Update 2.0 chegar.",
        "Rotações posteriores: Elemental Weather + Wandering Trader (12 ago), Banner Blitz + Weekend Surge (13 ago), Forge Fever + Shiny Overflow (16 ago).",
        "As novas unidades de Warrior Saga já estão integradas na página de unidades e no ranking de tiers.",
        "O código de patch `patch1.0` (100 Trait Crystals) saiu com a atualização e já expirou.",
      ],
      ru: [
        "Контент Warrior Saga доступен с 10 августа по данным официального аккаунта X; окно подтверждено официальным API событий Roblox.",
        "Ротирующиеся события (по данным сообщества): Dragon's Wish — соберите 7 Wish Orbs ради эксклюзивного маунта, — плюс Boss Bounty, Guess That Unit!, M.A.S.T.R.R.: Beyond Pain и Ballin' Traits, большинство идёт до выхода Update 2.0.",
        "Поздние ротации: Elemental Weather + Wandering Trader (12 авг), Banner Blitz + Weekend Surge (13 авг), Forge Fever + Shiny Overflow (16 авг).",
        "Новые юниты Warrior Saga уже внесены в список юнитов и тир-лист.",
        "Код патча `patch1.0` (100 Trait Crystals) вышел с обновлением и уже истёк.",
      ],
    },
  },
  {
    version: "Update 0.5",
    title: "Villain Invasion",
    date: "Jul 25 – Aug 1, 2026 (event window)",
    status: "provisional",
    highlights: [
      "New limited units: Crow (Black Fire) Secret, Cursed Immortal (Black Sun), Dark Mage (Sovereign), and Razorjaw (Hunter) — each with signature equipment.",
      "Villain Invasion event map: Acts 1–3 plus Final, a Villain Banner, event quests, shop, and Event Battle Pass.",
      "Villain Hunt: villains spawn in non-competitive modes and drop Villain Chests (rare Crow Rider skin).",
      "Bounty Board: daily objectives, rerollable with Gold, awarding Event Coins.",
      "Cosmetics: new skins (8th Sword, Crow Rider, Razorjaw Beyond), Demon Wings mount, Raven accessory, Vibing emote.",
      "Quality-of-life: multi-select/scrap, Index Claim All, favorite-area pinning, Leave Game, mobile Expedition menu rework.",
      "Fixes: memory leaks, black screens, guild issues, auto-upgrade, tournament end display.",
    ],
    highlightsI18n: {
      es: [
        "Nuevas unidades limitadas: Crow (Black Fire) Secret, Cursed Immortal (Black Sun), Dark Mage (Sovereign) y Razorjaw (Hunter) — cada una con equipamiento insignia.",
        "Mapa del evento Villain Invasion: Actos 1–3 más Final, un Villain Banner, misiones de evento, tienda y Event Battle Pass.",
        "Villain Hunt: los villanos aparecen en modos no competitivos y dropean Villain Chests (skin rara Crow Rider).",
        "Bounty Board: objetivos diarios, re-lanzables con Gold, que dan Event Coins.",
        "Cosméticos: nuevas skins (8th Sword, Crow Rider, Razorjaw Beyond), montura Demon Wings, accesorio Raven, emote Vibing.",
        "Calidad de vida: multi-selección/scrap, Index Claim All, fijar zona favorita, Leave Game, rediseño del menú Expedition en móvil.",
        "Arreglos: fugas de memoria, pantallas negras, problemas de guild, auto-upgrade, visualización del fin del torneo.",
      ],
      pt: [
        "Novas unidades limitadas: Crow (Black Fire) Secret, Cursed Immortal (Black Sun), Dark Mage (Sovereign) e Razorjaw (Hunter) — cada uma com equipamento assinatura.",
        "Mapa do evento Villain Invasion: Atos 1–3 mais Final, um Villain Banner, missões de evento, loja e Event Battle Pass.",
        "Villain Hunt: vilões aparecem em modos não competitivos e dropam Villain Chests (skin rara Crow Rider).",
        "Bounty Board: objetivos diários, reroláveis com Gold, que dão Event Coins.",
        "Cosméticos: novas skins (8th Sword, Crow Rider, Razorjaw Beyond), montaria Demon Wings, acessório Raven, emote Vibing.",
        "Qualidade de vida: multi-seleção/scrap, Index Claim All, fixar área favorita, Leave Game, reforma do menu Expedition no mobile.",
        "Correções: vazamentos de memória, telas pretas, problemas de guild, auto-upgrade, exibição do fim do torneio.",
      ],
      ru: [
        "Новые лимитированные юниты: Crow (Black Fire) Secret, Cursed Immortal (Black Sun), Dark Mage (Sovereign) и Razorjaw (Hunter) — каждый с фирменным снаряжением.",
        "Карта события Villain Invasion: Акты 1–3 плюс Финал, Villain Banner, ивентовые задания, магазин и Event Battle Pass.",
        "Villain Hunt: злодеи появляются в неконкурентных режимах и роняют Villain Chests (редкий скин Crow Rider).",
        "Bounty Board: ежедневные задачи с рероллом за Gold и наградами Event Coins.",
        "Косметика: новые скины (8th Sword, Crow Rider, Razorjaw Beyond), маунт Demon Wings, аксессуар Raven, эмоция Vibing.",
        "QoL: мультивыбор/разбор, Index Claim All, закрепление любимой зоны, Leave Game, переделка меню Expedition на мобильных.",
        "Исправления: утечки памяти, чёрные экраны, проблемы гильдий, авто-улучшение, отображение конца турнира.",
      ],
    },
  },
  {
    version: "Wandering Trader",
    title: "Limited Event",
    date: "Published Jul 23, 2026",
    status: "provisional",
    highlights: [
      "Limited lobby trader with rotating Gem-priced stock and event tasks.",
      "Schedule and rewards were provisional at launch.",
    ],
    highlightsI18n: {
      es: [
        "Comerciante limitado del lobby con stock rotativo a precio de Gems y tareas de evento.",
        "El calendario y las recompensas eran provisionales en el lanzamiento.",
      ],
      pt: [
        "Comerciante limitado do lobby com estoque rotativo a preço de Gems e tarefas de evento.",
        "O cronograma e as recompensas eram provisórios no lançamento.",
      ],
      ru: [
        "Лимитированный торговец в лобби с ротирующимся ассортиментом за Gems и ивентовыми заданиями.",
        "Расписание и награды на запуске были предварительными.",
      ],
    },
  },
  {
    version: "Public Release",
    date: "Published Jul 17, 2026",
    status: "verified",
    highlights: [
      "Public release with active servers.",
      "Launch build: Story, unit development, Expeditions, Raids, equipment, quests, and cooperative progression.",
    ],
    highlightsI18n: {
      es: [
        "Lanzamiento público con servidores activos.",
        "Build de lanzamiento: Story, desarrollo de unidades, Expeditions, Raids, equipamiento, misiones y progresión cooperativa.",
      ],
      pt: [
        "Lançamento público com servidores ativos.",
        "Build de lançamento: Story, desenvolvimento de unidades, Expeditions, Raids, equipamento, missões e progressão cooperativa.",
      ],
      ru: [
        "Публичный релиз с активными серверами.",
        "Релизная сборка: Story, развитие юнитов, Expeditions, Raids, снаряжение, задания и кооперативный прогресс.",
      ],
    },
  },
  {
    version: "Early Access",
    date: "Published Jul 15–16, 2026",
    status: "provisional",
    highlights: [
      "EA+ and Early Access windows for community access before the public launch.",
      "Conditions were confirmed in the official Discord.",
    ],
    highlightsI18n: {
      es: [
        "Ventanas EA+ y Early Access para acceso de la comunidad antes del lanzamiento público.",
        "Las condiciones se confirmaron en el Discord oficial.",
      ],
      pt: [
        "Janelas EA+ e Early Access para acesso da comunidade antes do lançamento público.",
        "As condições foram confirmadas no Discord oficial.",
      ],
      ru: [
        "Окна EA+ и Early Access для доступа сообщества до публичного релиза.",
        "Условия были подтверждены в официальном Discord.",
      ],
    },
  },
];
