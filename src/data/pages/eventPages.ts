// Locale strings for the Update 2.0 event pages: fishing, tidal-siege.
// Content lists (rods, rewards, portal facts…) live in src/data/fishing.ts and
// src/data/tidalSiege.ts as Record<Locale, …>; this module is the page chrome.

import type { CrossText, FaqItem, Loc } from "./types";

export interface FishingStrings {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  stamp: string;
  howTitle: string;
  howBodyPre: string; // around the two highlighted stat names
  howBodyMid: string;
  howBodyPost: string;
  controlZone: string;
  control: string;
  rodsTitle: string;
  passiveTag: string;
  statLure: string;
  statControl: string;
  statZone: string;
  rewardsTitle: string;
  loopTitle: string;
  faqTitle: string;
  faq: FaqItem[];
  cross: CrossText;
}

export interface TidalSiegeStrings {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  stamp: string;
  sandTitle: string;
  unitsTitle: string;
  portalsTitle: string;
  autoTitle: string;
  warningsTitle: string;
  faqTitle: string;
  faq: FaqItem[];
  cross: CrossText;
}

export const fishingPage: Loc<FishingStrings> = {
  en: {
    metaTitle: "Anime Expeditions Fishing Guide — All 5 Rods, Unlocks & Rewards",
    metaDescription:
      "Every Anime Expeditions fishing rod with stats and unlocks — Lucky Rod 1% drop, Auto Rod Wave 150 route — plus what fishing pays out: Sand Dollars, Bestiary fish, and the Sharkfang unit.",
    h1: "ANIME EXPEDITIONS FISHING",
    intro:
      "Every rod, its stats, and how to unlock it — plus what fishing actually pays out. Fishing arrived with Update 2.0 [Summer Siege] and quietly funds half the event: Sand Dollars, capsules, and even a Mythic unit.",
    stamp: "VERIFIED · REPORTED DATA — CHECK IN-GAME",
    howTitle: "HOW FISHING WORKS",
    howBodyPre:
      "Open the fish icon at the bottom-left, stand in any body of water — lobby pools or the pools inside game-mode maps — and cast. Keep your block under the fish icon until the bar fills. Better rods widen the catch window (",
    howBodyMid: ") and tighten steering (",
    howBodyPost: "); Lure Speed shortens the wait for a bite.",
    controlZone: "Control Zone",
    control: "Control",
    rodsTitle: "ALL 5 RODS — STATS & UNLOCKS",
    passiveTag: "PASSIVE",
    statLure: "Lure",
    statControl: "Control",
    statZone: "Zone",
    rewardsTitle: "WHAT FISHING PAYS OUT",
    loopTitle: "THE EFFICIENT GRIND LOOP",
    faqTitle: "QUESTIONS PEOPLE ASK",
    faq: [
      {
        q: "How do you fish in Anime Expeditions?",
        a: "Press the fish icon at the bottom-left of the screen, stand in any water (lobby pools or map pools), and left-click to cast. In the minigame, keep your block under the moving fish icon — press to move right, release to drift left — until the progress bar fills.",
      },
      {
        q: "What is the rarest fishing rod in Anime Expeditions?",
        a: "The Lucky Rod. It drops at roughly a 1% chance after any catch, and its passive makes every 8th fish a guaranteed Mythic. The Auto Rod is the hardest grind instead — it requires Wave 150 in Tidal Siege Infinite mode.",
      },
      {
        q: "Can you fish units in Anime Expeditions?",
        a: "Yes — the Sharktooth Conch is a very rare catch in Tidal Siege pools, and using it awards the Mythic unit Sharkfang. The Auto Rod (Wave 150) is the practical way to farm Conch attempts because it skips the minigame.",
      },
      {
        q: "What do Sand Dollars do?",
        a: "Sand Dollars are the Summer Siege event currency. Every catch pays some, and they buy Summer Capsules (100 each, 10 for 1,000), the Advanced Rod (750), and the new units' evolution items (10,000 each) in the event shop.",
      },
    ],
    cross: {
      before: "Fishing feeds straight into the ",
      links: [
        { label: "Tidal Siege event", path: "/tidal-siege/" },
        { label: "unit roster", path: "/units/" },
      ],
      between: [" — and the evolution items it funds are listed per unit in the "],
      after: ".",
    },
  },
  es: {
    metaTitle: "Guía de Pesca de Anime Expeditions — Las 5 Cañas, Desbloqueos y Recompensas",
    metaDescription:
      "Cada caña de pesca de Anime Expeditions con stats y desbloqueo — Lucky Rod al 1%, ruta del Auto Rod en la Ola 150 — y lo que la pesca realmente da: Sand Dollars, peces del Bestiary y la unidad Sharkfang.",
    h1: "PESCA EN ANIME EXPEDITIONS",
    intro:
      "Cada caña, sus stats y cómo desbloquearla — más lo que la pesca realmente paga. La pesca llegó con Update 2.0 [Summer Siege] y financia discretamente la mitad del evento: Sand Dollars, cápsulas y hasta una unidad Mythic.",
    stamp: "VERIFICADO · DATOS REPORTADOS — REVISA EN EL JUEGO",
    howTitle: "CÓMO FUNCIONA LA PESCA",
    howBodyPre:
      "Abre el icono del pez abajo a la izquierda, párate en cualquier cuerpo de agua — los charcos del lobby o los de los mapas de los modos — y lanza. Mantén tu bloque bajo el icono del pez hasta que se llene la barra. Las mejores cañas amplían la ventana de captura (",
    howBodyMid: ") y afirman la dirección (",
    howBodyPost: "); la Lure Speed acorta la espera a que pique.",
    controlZone: "Control Zone",
    control: "Control",
    rodsTitle: "LAS 5 CAÑAS — STATS Y DESBLOQUEO",
    passiveTag: "PASIVA",
    statLure: "Lure",
    statControl: "Control",
    statZone: "Zona",
    rewardsTitle: "LO QUE LA PESCA PAGA",
    loopTitle: "LA RUTA DE GRINDEO EFICIENTE",
    faqTitle: "PREGUNTAS FRECUENTES",
    faq: [
      {
        q: "¿Cómo se pesca en Anime Expeditions?",
        a: "Pulsa el icono del pez abajo a la izquierda, párate en cualquier agua (charcos del lobby o de los mapas) y haz clic para lanzar. En el minijuego, mantén tu bloque bajo el icono del pez en movimiento — pulsa para moverte a la derecha, suelta para derivar a la izquierda — hasta que se llene la barra de progreso.",
      },
      {
        q: "¿Cuál es la caña más rara de Anime Expeditions?",
        a: "La Lucky Rod. Cae con ~1% de probabilidad tras cualquier captura, y su pasiva hace que cada 8º pez sea un Mythic garantizado. La Auto Rod es el grind más duro — requiere la Ola 150 en el modo Infinite de Tidal Siege.",
      },
      {
        q: "¿Se pueden pescar unidades en Anime Expeditions?",
        a: "Sí — el Sharktooth Conch es una captura muy rara en los charcos de Tidal Siege, y usarlo da la unidad Mythic Sharkfang. La Auto Rod (Ola 150) es la forma práctica de farmear intentos de Conch porque se salta el minijuego.",
      },
      {
        q: "¿Para qué sirven los Sand Dollars?",
        a: "Los Sand Dollars son la moneda del evento Summer Siege. Cada captura paga algunos, y compran Summer Capsules (100 cada una, 10 por 1,000), la Advanced Rod (750) y los objetos de evolución de las nuevas unidades (10,000 cada uno) en la tienda del evento.",
      },
    ],
    cross: {
      before: "La pesca alimenta directamente el ",
      links: [
        { label: "evento Tidal Siege", path: "/tidal-siege/" },
        { label: "lista de unidades", path: "/units/" },
      ],
      between: [" — y los objetos de evolución que financia están listados por unidad en la "],
      after: ".",
    },
  },
  pt: {
    metaTitle: "Guia de Pesca de Anime Expeditions — As 5 Varas, Desbloqueios e Recompensas",
    metaDescription:
      "Cada vara de pesca de Anime Expeditions com stats e desbloqueio — Lucky Rod a 1%, rota da Auto Rod na Onda 150 — e o que a pesca realmente dá: Sand Dollars, peixes do Bestiary e a unidade Sharkfang.",
    h1: "PESCA EM ANIME EXPEDITIONS",
    intro:
      "Cada vara, seus stats e como desbloqueá-la — mais o que a pesca realmente paga. A pesca chegou com a Update 2.0 [Summer Siege] e financia discretamente metade do evento: Sand Dollars, cápsulas e até uma unidade Mythic.",
    stamp: "VERIFICADO · DADOS REPORTADOS — CONFIRA NO JOGO",
    howTitle: "COMO A PESCA FUNCIONA",
    howBodyPre:
      "Abra o ícone de peixe no canto inferior esquerdo, fique em qualquer corpo d'água — as poças do lobby ou as dos mapas dos modos — e lance. Mantenha seu bloco sob o ícone do peixe até a barra encher. Varas melhores alargam a janela de captura (",
    howBodyMid: ") e firmam a direção (",
    howBodyPost: "); a Lure Speed encurta a espera pela fisgada.",
    controlZone: "Control Zone",
    control: "Control",
    rodsTitle: "AS 5 VARAS — STATS E DESBLOQUEIO",
    passiveTag: "PASSIVA",
    statLure: "Lure",
    statControl: "Control",
    statZone: "Zona",
    rewardsTitle: "O QUE A PESCA PAGA",
    loopTitle: "A ROTA DE FARM EFICIENTE",
    faqTitle: "PERGUNTAS FREQUENTES",
    faq: [
      {
        q: "Como pescar em Anime Expeditions?",
        a: "Aperte o ícone de peixe no canto inferior esquerdo, fique em qualquer água (poças do lobby ou dos mapas) e clique para lançar. No minigame, mantenha seu bloco sob o ícone do peixe em movimento — aperte para ir à direita, solte para derivar à esquerda — até a barra de progresso encher.",
      },
      {
        q: "Qual é a vara mais rara de Anime Expeditions?",
        a: "A Lucky Rod. Cai com ~1% de chance após qualquer captura, e sua passiva faz de cada 8º peixe um Mythic garantido. A Auto Rod é o farm mais duro — exige a Onda 150 no modo Infinite do Tidal Siege.",
      },
      {
        q: "Dá para pescar unidades em Anime Expeditions?",
        a: "Sim — o Sharktooth Conch é uma captura muito rara nas poças do Tidal Siege, e usá-lo dá a unidade Mythic Sharkfang. A Auto Rod (Onda 150) é a forma prática de farmar tentativas de Conch porque pula o minigame.",
      },
      {
        q: "Para que servem os Sand Dollars?",
        a: "Sand Dollars são a moeda do evento Summer Siege. Cada captura paga alguns, e eles compram Summer Capsules (100 cada, 10 por 1.000), a Advanced Rod (750) e os itens de evolução das novas unidades (10.000 cada) na loja do evento.",
      },
    ],
    cross: {
      before: "A pesca alimenta diretamente o ",
      links: [
        { label: "evento Tidal Siege", path: "/tidal-siege/" },
        { label: "lista de unidades", path: "/units/" },
      ],
      between: [" — e os itens de evolução que ela financia estão listados por unidade na "],
      after: ".",
    },
  },
  ru: {
    metaTitle: "Гайд по Рыбалке в Anime Expeditions — Все 5 Удочек, Открытие и Награды",
    metaDescription:
      "Каждая удочка в Anime Expeditions со статами и способом открытия — Lucky Rod с шансом 1%, путь к Auto Rod на 150-й волне — и что реально даёт рыбалка: Sand Dollars, рыбы Бестиария и юнит Sharkfang.",
    h1: "РЫБАЛКА В ANIME EXPEDITIONS",
    intro:
      "Каждая удочка, её статы и как открыть — плюс что реально платит рыбалка. Рыбалка пришла с Update 2.0 [Summer Siege] и тихо финансирует половину события: Sand Dollars, капсулы и даже мифического юнита.",
    stamp: "ПРОВЕРЕНО · ДАННЫЕ СООБЩЕСТВА — СМОТРИ В ИГРЕ",
    howTitle: "КАК УСТРОЕНА РЫБАЛКА",
    howBodyPre:
      "Откройте иконку рыбы в левом нижнем углу, встаньте в любой водоём — бассейны лобби или водоёмы на картах режимов — и забросьте. Держите блок под иконкой рыбы, пока не заполнится полоса. Лучшие удочки расширяют окно поимки (",
    howBodyMid: ") и делают управление плотнее (",
    howBodyPost: "); Lure Speed сокращает ожидание поклёвки.",
    controlZone: "Control Zone",
    control: "Control",
    rodsTitle: "ВСЕ 5 УДОЧЕК — СТАТЫ И ОТКРЫТИЕ",
    passiveTag: "ПАССИВ",
    statLure: "Lure",
    statControl: "Control",
    statZone: "Зона",
    rewardsTitle: "ЧТО ПЛАТИТ РЫБАЛКА",
    loopTitle: "ЭФФЕКТИВНЫЙ МАРШРУТ ФАРМА",
    faqTitle: "ВОПРОСЫ И ОТВЕТЫ",
    faq: [
      {
        q: "Как рыбачить в Anime Expeditions?",
        a: "Нажмите иконку рыбы в левом нижнем углу экрана, встаньте в любую воду (бассейны лобби или водоёмы карт) и кликните, чтобы забросить. В мини-игре держите блок под движущейся иконкой рыбы — нажмите, чтобы двигаться вправо, отпустите, чтобы дрейфовать влево, — пока не заполнится полоса прогресса.",
      },
      {
        q: "Какая удочка самая редкая в Anime Expeditions?",
        a: "Lucky Rod. Падает с шансом ~1% после любой поимки, а её пассив делает каждую 8-ю рыбу гарантированным Mythic. Auto Rod — самый тяжёлый гринд: требует 150-ю волну в режиме Infinite на Tidal Siege.",
      },
      {
        q: "Можно ли выловить юнитов в Anime Expeditions?",
        a: "Да — Sharktooth Conch это очень редкий улов в водоёмах Tidal Siege, и его использование даёт мифического юнита Sharkfang. Auto Rod (150-я волна) — практичный способ фармить попытки Conch, потому что пропускает мини-игру.",
      },
      {
        q: "Зачем нужны Sand Dollars?",
        a: "Sand Dollars — валюта события Summer Siege. Каждый улов приносит немного, а тратятся они в ивентовом магазине на Summer Capsules (100 штука, 10 за 1 000), Advanced Rod (750) и предметы эволюции новых юнитов (10 000 каждый).",
      },
    ],
    cross: {
      before: "Рыбалка напрямую питает ",
      links: [
        { label: "событие Tidal Siege", path: "/tidal-siege/" },
        { label: "список юнитов", path: "/units/" },
      ],
      between: [" — а предметы эволюции, которые она финансирует, перечислены по юнитам в "],
      after: ".",
    },
  },
};

export const tidalSiegePage: Loc<TidalSiegeStrings> = {
  en: {
    metaTitle: "Anime Expeditions Tidal Siege & Portals Guide — Sand Dollars, Wave 150, Secret Units",
    metaDescription:
      "Tidal Siege event guide for Anime Expeditions: Sand Dollar sources, Summer Capsules, the Wave 150 Auto Rod route, Tier 5 portal materials, and how to get Sovereign, Lightning God, and Sharkfang.",
    h1: "TIDAL SIEGE & PORTALS",
    intro:
      "The Update 2.0 [Summer Siege] event hub — Sand Dollars, Summer Capsules, the Wave 150 Auto Rod route, and how Tier 5 portals turn into the two new Secret units.",
    stamp: "VERIFIED · LIMITED EVENT · REPORTED DATA",
    sandTitle: "SAND DOLLARS — THE EVENT CURRENCY",
    unitsTitle: "EVENT-EXCLUSIVE UNITS",
    portalsTitle: "PORTALS — PATH TO THE SECRET UNITS",
    autoTitle: "WAVE 150 — THE AUTO ROD ROUTE",
    warningsTitle: "BEFORE THE EVENT ENDS",
    faqTitle: "QUESTIONS PEOPLE ASK",
    faq: [
      {
        q: "How do you get Sand Dollars in Anime Expeditions?",
        a: "Sand Dollars come from clearing Tidal Siege waves (standard and Infinite mode), event quests and log-in rewards, and fishing — every catch pays some. They fund Summer Capsules, the Advanced Rod, and the new units' evolution items in the event shop.",
      },
      {
        q: "How do you get Sovereign and Lightning God?",
        a: "Both are Secret units locked behind Secret Portals. Farm Tier 5 portals for Djinn's Treasure (Sovereign) and Charged Dust (Lightning God) — a reported 4% drop each with a 25-run pity — then craft the portal with four copies at the Crafting Station. Host the portal yourself: hosting guarantees the unit, joining someone else's run is only about a 2% chance.",
      },
      {
        q: "What is Wave 150 in Tidal Siege for?",
        a: "Reaching Wave 150 in Tidal Siege Infinite mode unlocks the Auto Rod, the fishing rod that skips the minigame and auto-catches at double lure speed. It unlocks automatically in the fishing menu once you hit the wave.",
      },
      {
        q: "Does Tidal Siege end?",
        a: "Yes — it is the Update 2.0 [Summer Siege] limited event. Summer Capsules, the event shop, and its Sand Dollar sources leave when the event ends, so buy the evolution items you need while you are still farming.",
      },
    ],
    cross: {
      before: "The fishing half of the event — rods, minigame, and the Sharktooth Conch — lives in the ",
      links: [
        { label: "fishing guide", path: "/fishing/" },
        { label: "unit roster", path: "/units/" },
      ],
      between: [", and every new unit's evolution item is listed in the "],
      after: ".",
    },
  },
  es: {
    metaTitle: "Guía de Tidal Siege y Portals de Anime Expeditions — Sand Dollars, Ola 150, Unidades Secret",
    metaDescription:
      "Guía del evento Tidal Siege de Anime Expeditions: fuentes de Sand Dollars, Summer Capsules, la ruta del Auto Rod en la Ola 150, materiales de portales Tier 5 y cómo conseguir a Sovereign, Lightning God y Sharkfang.",
    h1: "TIDAL SIEGE Y PORTALS",
    intro:
      "El centro del evento Update 2.0 [Summer Siege] — Sand Dollars, Summer Capsules, la ruta del Auto Rod en la Ola 150 y cómo los portales Tier 5 se convierten en las dos nuevas unidades Secret.",
    stamp: "VERIFICADO · EVENTO LIMITADO · DATOS REPORTADOS",
    sandTitle: "SAND DOLLARS — LA MONEDA DEL EVENTO",
    unitsTitle: "UNIDADES EXCLUSIVAS DEL EVENTO",
    portalsTitle: "PORTALS — EL CAMINO A LAS UNIDADES SECRET",
    autoTitle: "OLA 150 — LA RUTA DEL AUTO ROD",
    warningsTitle: "ANTES DE QUE TERMINE EL EVENTO",
    faqTitle: "PREGUNTAS FRECUENTES",
    faq: [
      {
        q: "¿Cómo se consiguen Sand Dollars en Anime Expeditions?",
        a: "Los Sand Dollars vienen de limpiar oleadas de Tidal Siege (modo estándar e Infinite), misiones del evento, recompensas de inicio de sesión y la pesca — cada captura paga algunos. Financian las Summer Capsules, la Advanced Rod y los objetos de evolución de las nuevas unidades en la tienda del evento.",
      },
      {
        q: "¿Cómo se consiguen Sovereign y Lightning God?",
        a: "Ambas son unidades Secret bloqueadas tras Secret Portals. Farmea portales Tier 5 para Djinn's Treasure (Sovereign) y Charged Dust (Lightning God) — drop reportado del 4% cada uno con pity de 25 intentos — y luego fabrica el portal con cuatro copias en la Crafting Station. Sé el anfitrión del portal: ser anfitrión garantiza la unidad; unirte a la de otro da solo ~2% de probabilidad.",
      },
      {
        q: "¿Para qué sirve la Ola 150 de Tidal Siege?",
        a: "Llegar a la Ola 150 en el modo Infinite de Tidal Siege desbloquea la Auto Rod, la caña que se salta el minijuego y captura sola con el doble de velocidad de cebo. Se desbloquea automáticamente en el menú de pesca al llegar a la ola.",
      },
      {
        q: "¿Tidal Siege termina?",
        a: "Sí — es el evento limitado de Update 2.0 [Summer Siege]. Las Summer Capsules, la tienda del evento y las fuentes de Sand Dollars se van cuando termina, así que compra los objetos de evolución que necesites mientras sigas farmeando.",
      },
    ],
    cross: {
      before: "La mitad de pesca del evento — cañas, minijuego y el Sharktooth Conch — está en la ",
      links: [
        { label: "guía de pesca", path: "/fishing/" },
        { label: "lista de unidades", path: "/units/" },
      ],
      between: [", y el objeto de evolución de cada unidad nueva está listado en la "],
      after: ".",
    },
  },
  pt: {
    metaTitle: "Guia de Tidal Siege e Portals de Anime Expeditions — Sand Dollars, Onda 150, Unidades Secret",
    metaDescription:
      "Guia do evento Tidal Siege de Anime Expeditions: fontes de Sand Dollars, Summer Capsules, a rota da Auto Rod na Onda 150, materiais de portais Tier 5 e como conseguir Sovereign, Lightning God e Sharkfang.",
    h1: "TIDAL SIEGE E PORTALS",
    intro:
      "O centro do evento Update 2.0 [Summer Siege] — Sand Dollars, Summer Capsules, a rota da Auto Rod na Onda 150 e como os portais Tier 5 viram as duas novas unidades Secret.",
    stamp: "VERIFICADO · EVENTO LIMITADO · DADOS REPORTADOS",
    sandTitle: "SAND DOLLARS — A MOEDA DO EVENTO",
    unitsTitle: "UNIDADES EXCLUSIVAS DO EVENTO",
    portalsTitle: "PORTALS — O CAMINHO PARA AS UNIDADES SECRET",
    autoTitle: "ONDA 150 — A ROTA DA AUTO ROD",
    warningsTitle: "ANTES DO EVENTO ACABAR",
    faqTitle: "PERGUNTAS FREQUENTES",
    faq: [
      {
        q: "Como conseguir Sand Dollars em Anime Expeditions?",
        a: "Sand Dollars vêm de limpar ondas do Tidal Siege (modo padrão e Infinite), missões do evento, recompensas de login e pesca — cada captura paga alguns. Eles financiam as Summer Capsules, a Advanced Rod e os itens de evolução das novas unidades na loja do evento.",
      },
      {
        q: "Como conseguir Sovereign e Lightning God?",
        a: "Ambas são unidades Secret travadas atrás de Secret Portals. Farme portais Tier 5 para Djinn's Treasure (Sovereign) e Charged Dust (Lightning God) — drop reportado de 4% cada com pity de 25 tentativas — e depois fabrique o portal com quatro cópias na Crafting Station. Seja o anfitrião do portal: ser anfitrião garante a unidade; entrar na de outro dá só ~2% de chance.",
      },
      {
        q: "Para que serve a Onda 150 no Tidal Siege?",
        a: "Chegar à Onda 150 no modo Infinite do Tidal Siege desbloqueia a Auto Rod, a vara que pula o minigame e captura sozinha com o dobro de velocidade de isca. Ela desbloqueia automaticamente no menu de pesca ao chegar na onda.",
      },
      {
        q: "O Tidal Siege acaba?",
        a: "Sim — é o evento limitado da Update 2.0 [Summer Siege]. As Summer Capsules, a loja do evento e as fontes de Sand Dollars saem quando ele termina, então compre os itens de evolução que precisar enquanto ainda estiver farmando.",
      },
    ],
    cross: {
      before: "A metade de pesca do evento — varas, minigame e o Sharktooth Conch — está no ",
      links: [
        { label: "guia de pesca", path: "/fishing/" },
        { label: "lista de unidades", path: "/units/" },
      ],
      between: [", e o item de evolução de cada unidade nova está listado na "],
      after: ".",
    },
  },
  ru: {
    metaTitle: "Гайд по Tidal Siege и Порталам в Anime Expeditions — Sand Dollars, 150-я Волна, Secret-Юниты",
    metaDescription:
      "Гайд по событию Tidal Siege в Anime Expeditions: источники Sand Dollars, Summer Capsules, путь к Auto Rod на 150-й волне, материалы порталов Tier 5 и как получить Sovereign, Lightning God и Sharkfang.",
    h1: "TIDAL SIEGE И ПОРТАЛЫ",
    intro:
      "Центр события Update 2.0 [Summer Siege] — Sand Dollars, Summer Capsules, путь к Auto Rod на 150-й волне и как порталы Tier 5 превращаются в двух новых Secret-юнитов.",
    stamp: "ПРОВЕРЕНО · ЛИМИТНОЕ СОБЫТИЕ · ДАННЫЕ СООБЩЕСТВА",
    sandTitle: "SAND DOLLARS — ВАЛЮТА СОБЫТИЯ",
    unitsTitle: "ЭКСКЛЮЗИВНЫЕ ЮНИТЫ СОБЫТИЯ",
    portalsTitle: "ПОРТАЛЫ — ПУТЬ К SECRET-ЮНИТАМ",
    autoTitle: "150-Я ВОЛНА — ПУТЬ К AUTO ROD",
    warningsTitle: "ДО КОНЦА СОБЫТИЯ",
    faqTitle: "ВОПРОСЫ И ОТВЕТЫ",
    faq: [
      {
        q: "Как получить Sand Dollars в Anime Expeditions?",
        a: "Sand Dollars дают за зачистку волн Tidal Siege (стандартный и Infinite режимы), ивентовые задания, награды за вход и рыбалку — каждый улов приносит немного. На них покупаются Summer Capsules, Advanced Rod и предметы эволюции новых юнитов в ивентовом магазине.",
      },
      {
        q: "Как получить Sovereign и Lightning God?",
        a: "Оба — Secret-юниты за Secret-порталами. Фармите порталы Tier 5 ради Djinn's Treasure (Sovereign) и Charged Dust (Lightning God) — шанс 4% за каждый с pity на 25 забегов по данным сообщества, — затем скрафтите портал из четырёх копий на Crafting Station. Открывайте портал сами: хост гарантированно получает юнита, а у гостя шанс лишь около 2%.",
      },
      {
        q: "Зачем нужна 150-я волна на Tidal Siege?",
        a: "Достижение 150-й волны в режиме Infinite на Tidal Siege открывает Auto Rod — удочку, которая пропускает мини-игру и ловит сама с двойной скоростью приманки. Она открывается автоматически в меню рыбалки на нужной волне.",
      },
      {
        q: "Tidal Siege закончится?",
        a: "Да — это лимитное событие Update 2.0 [Summer Siege]. Summer Capsules, ивентовый магазин и источники Sand Dollars уйдут с его концом, так что покупайте нужные предметы эволюции, пока фармите.",
      },
    ],
    cross: {
      before: "Рыболовная половина события — удочки, мини-игра и Sharktooth Conch — живёт в ",
      links: [
        { label: "гайде по рыбалке", path: "/fishing/" },
        { label: "списке юнитов", path: "/units/" },
      ],
      between: [", а предмет эволюции каждого нового юнита перечислен в "],
      after: ".",
    },
  },
};
