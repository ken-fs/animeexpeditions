// i18n dictionary. English is the source; es/pt/ru are translations.
// Game jargon (Trait Crystals, rerolls, Rates panel) is kept in English on purpose —
// that's what players in every language community actually call them.
// AI-translated; recommend a native-speaker pass before heavy promotion.

export const LOCALES = ["en", "es", "pt", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

// Human-readable names + hreflang codes for <link> tags.
export const LOCALE_META: Record<Locale, { label: string; hreflang: string }> = {
  en: { label: "EN", hreflang: "en" },
  es: { label: "ES", hreflang: "es" },
  pt: { label: "PT", hreflang: "pt-BR" },
  ru: { label: "RU", hreflang: "ru" },
};

// URL prefix per locale. English lives at root; others under /es/ etc.
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path;
  return locale === "en" ? `/${clean}`.replace("//", "/") : `/${locale}${clean || "/"}`;
}

// Date locale for toLocaleDateString.
export function intlLocale(locale: Locale): string {
  return locale === "pt" ? "pt-BR" : locale === "ru" ? "ru-RU" : locale === "es" ? "es-ES" : "en-US";
}

// Shared tier-label + role strings and the tier/units page copy.
type TierUnitsStrings = {
  tierMetaTitle: string;
  tierMetaDesc: string;
  tierH1: string;
  tierIntro: string;
  unitsMetaTitle: string;
  unitsMetaDesc: string;
  unitsH1: string;
  unitsIntro: string;
  updated: string; // "UPDATED"
  base: string;
  role: string;
  evolve: string;
  tierLabels: { SS: string; "S+": string; S: string; A: string; B: string; Watch: string };
  // cross-link sentence pieces
  seeRosterPre: string; // "Want each unit's evolution and materials? Open the "
  rosterLink: string; // "unit roster"
  seeRosterMid: string; // ". Chasing rewards? Grab the latest "
  codesLink: string; // "working codes"
  end: string; // "."
};

export const tierUnits: Record<Locale, TierUnitsStrings> = {
  en: {
    tierMetaTitle: "Anime Expeditions Tier List (September 2026) — Best Units Ranked",
    tierMetaDesc:
      "The best Anime Expeditions units ranked S to B tier by role — DPS, support, control and AoE — for Story, Expeditions and raids. Updated for the current meta.",
    tierH1: "TIER RANKING",
    tierIntro:
      "The strongest units ranked by role for Story, Expeditions and raids. Banners rotate — check the in-game Rates panel before you summon.",
    unitsMetaTitle: "Anime Expeditions Units List — Roster, Evolutions & Materials",
    unitsMetaDesc:
      "Every Anime Expeditions unit with its base form, evolved form, role, and evolution material. Full roster for planning your summons and account.",
    unitsH1: "UNIT ROSTER",
    unitsIntro:
      "The full documented roster — each unit's base form, evolved form, role, and the special item needed to evolve it. Plan who to build.",
    updated: "UPDATED",
    base: "BASE",
    role: "ROLE",
    evolve: "EVOLVE",
    tierLabels: { SS: "SS TIER — TOP OF THE META", "S+": "S+ TIER — NEAR BEST IN SLOT", S: "S TIER — BEST IN SLOT", A: "A TIER — STRONG PICKS", B: "B TIER — SITUATIONAL", Watch: "WATCH — PROMISING, UNPROVEN" },
    seeRosterPre: "Want each unit's evolution and materials? Open the ",
    rosterLink: "unit roster",
    seeRosterMid: ". Chasing rewards to level them? Grab the latest ",
    codesLink: "working codes",
    end: ".",
  },
  es: {
    tierMetaTitle: "Tier List de Anime Expeditions (Septiembre 2026) — Mejores Unidades",
    tierMetaDesc:
      "Las mejores unidades de Anime Expeditions clasificadas de tier S a B por rol — DPS, apoyo, control y AoE — para Historia, Expediciones y raids. Actualizado al meta actual.",
    tierH1: "RANKING DE TIERS",
    tierIntro:
      "Las unidades más fuertes clasificadas por rol para Historia, Expediciones y raids. Los banners rotan — revisa el panel de Rates en el juego antes de invocar.",
    unitsMetaTitle: "Lista de Unidades de Anime Expeditions — Roster, Evoluciones y Materiales",
    unitsMetaDesc:
      "Cada unidad de Anime Expeditions con su forma base, forma evolucionada, rol y material de evolución. Roster completo para planear tus invocaciones.",
    unitsH1: "LISTA DE UNIDADES",
    unitsIntro:
      "El roster completo documentado — la forma base, la forma evolucionada, el rol y el objeto especial para evolucionar cada unidad. Planea a quién subir.",
    updated: "ACTUALIZADO",
    base: "BASE",
    role: "ROL",
    evolve: "EVOLUCIÓN",
    tierLabels: { SS: "TIER SS — LO MÁS ALTO", "S+": "TIER S+ — CASI LO MEJOR", S: "TIER S — LO MEJOR", A: "TIER A — FUERTES", B: "TIER B — SITUACIONALES", Watch: "WATCH — PROMETEDORAS" },
    seeRosterPre: "¿Quieres la evolución y los materiales de cada unidad? Abre la ",
    rosterLink: "lista de unidades",
    seeRosterMid: ". ¿Buscas recompensas para subirlas? Consigue los últimos ",
    codesLink: "códigos activos",
    end: ".",
  },
  pt: {
    tierMetaTitle: "Tier List de Anime Expeditions (Setembro 2026) — Melhores Unidades",
    tierMetaDesc:
      "As melhores unidades de Anime Expeditions classificadas de tier S a B por função — DPS, suporte, controle e AoE — para História, Expedições e raids. Atualizado para o meta atual.",
    tierH1: "RANKING DE TIERS",
    tierIntro:
      "As unidades mais fortes classificadas por função para História, Expedições e raids. Os banners mudam — confira o painel de Rates no jogo antes de invocar.",
    unitsMetaTitle: "Lista de Unidades de Anime Expeditions — Roster, Evoluções e Materiais",
    unitsMetaDesc:
      "Cada unidade de Anime Expeditions com forma base, forma evoluída, função e material de evolução. Roster completo para planejar suas invocações.",
    unitsH1: "LISTA DE UNIDADES",
    unitsIntro:
      "O roster completo documentado — forma base, forma evoluída, função e o item especial para evoluir cada unidade. Planeje quem upar.",
    updated: "ATUALIZADO",
    base: "BASE",
    role: "FUNÇÃO",
    evolve: "EVOLUÇÃO",
    tierLabels: { SS: "TIER SS — O TOPO", "S+": "TIER S+ — QUASE OS MELHORES", S: "TIER S — OS MELHORES", A: "TIER A — FORTES", B: "TIER B — SITUACIONAIS", Watch: "WATCH — PROMISSORAS" },
    seeRosterPre: "Quer a evolução e os materiais de cada unidade? Abra a ",
    rosterLink: "lista de unidades",
    seeRosterMid: ". Buscando recompensas para upar? Pegue os últimos ",
    codesLink: "códigos ativos",
    end: ".",
  },
  ru: {
    tierMetaTitle: "Тир-лист Anime Expeditions (сентябрь 2026) — лучшие юниты",
    tierMetaDesc:
      "Лучшие юниты Anime Expeditions по тирам от S до B и по роли — урон, поддержка, контроль, AoE — для Story, Expeditions и рейдов. Актуально для текущей меты.",
    tierH1: "РЕЙТИНГ ТИРОВ",
    tierIntro:
      "Самые сильные юниты по ролям для Story, Expeditions и рейдов. Баннеры меняются — перед призывом смотрите панель Rates в игре.",
    unitsMetaTitle: "Список юнитов Anime Expeditions — ростер, эволюции и материалы",
    unitsMetaDesc:
      "Каждый юнит Anime Expeditions с базовой формой, эволюцией, ролью и материалом эволюции. Полный ростер для планирования призывов.",
    unitsH1: "СПИСОК ЮНИТОВ",
    unitsIntro:
      "Полный задокументированный ростер — базовая форма, эволюция, роль и особый предмет для эволюции каждого юнита. Планируйте, кого качать.",
    updated: "ОБНОВЛЕНО",
    base: "БАЗА",
    role: "РОЛЬ",
    evolve: "ЭВОЛЮЦИЯ",
    tierLabels: { SS: "ТИР SS — ВЕРШИНА МЕТЫ", "S+": "ТИР S+ — ПОЧТИ ЛУЧШИЕ", S: "ТИР S — ЛУЧШИЕ", A: "ТИР A — СИЛЬНЫЕ", B: "ТИР B — СИТУАТИВНЫЕ", Watch: "WATCH — ПЕРСПЕКТИВНЫЕ" },
    seeRosterPre: "Нужны эволюции и материалы каждого юнита? Откройте ",
    rosterLink: "список юнитов",
    seeRosterMid: ". Нужны награды для прокачки? Берите свежие ",
    codesLink: "рабочие коды",
    end: ".",
  },
};

type CodesStrings = {
  metaTitle: string;
  metaDescription: string;
  titleSub: string; // "★ WORKING CODES ★"
  intro: string;
  liveLabel: string; // "LIVE"
  verified: string; // "VERIFIED"
  visits: string; // "VISITS"
  boardTitle: string; // "WORKING CODES"
  activeSuffix: string; // "ACTIVE"
  noActive: string; // shown when zero codes are active
  expiresPrefix: string; // "EXPIRES"
  gotIt: string;
  copy: string;
  nextUp: string; // "NEXT UP:"
  nextUpBody: string;
  howTitle: string; // "HOW TO REDEEM"
  steps: string[];
  playCta: string; // "▶ PLAY ON ROBLOX"
  expiredTitle: string; // "EXPIRED — GAME OVER"
  expiredBody: string;
  screenshotsTitle: string; // "GAME SCREENSHOTS"
  trailerTitle: string; // "OFFICIAL TRAILER"
  trailerNewTitle: string; // "UPDATE 2.0 TRAILER"
  faqTitle: string;
  faq: { q: string; a: string }[];
  menu: { ranking: string; roster: string; planner: string; rankingSub: string; rosterSub: string; plannerSub: string };
  disclaimer1: string;
  disclaimer2: string;
  nav: { codes: string; ranking: string; roster: string; planner: string; guide: string };
};

export const codesPage: Record<Locale, CodesStrings> = {
  en: {
    metaTitle: "Anime Expeditions Codes (September 2026) — Working Codes & Rewards",
    metaDescription:
      "All working Anime Expeditions codes for Roblox, verified against live sources. Redeem for Trait Crystals, Equipment Rerolls and Stat Rerolls, plus every expired code and how to redeem.",
    titleSub: "★ WORKING CODES ★",
    intro:
      "Every working code, checked against live sources — redeem for Trait Crystals, Equipment Rerolls and Stat Rerolls. Insert code, claim reward, back to the game.",
    liveLabel: "LIVE",
    verified: "VERIFIED",
    visits: "VISITS",
    boardTitle: "WORKING CODES",
    activeSuffix: "ACTIVE",
    noActive: "NO WORKING CODES RIGHT NOW — the board refreshes the moment a new one drops.",
    expiresPrefix: "EXPIRES",
    gotIt: "GOT IT",
    copy: "COPY",
    nextUp: "NEXT UP:",
    nextUpBody:
      "Update 2.0 [Summer Siege] landed Aug 31 with fresh codes, an Eclipse update is already teased, and the 800M visits milestone is still ahead — all prime spots for new codes.",
    howTitle: "HOW TO REDEEM",
    steps: [
      "Open Anime Expeditions on Roblox.",
      "Tap the Settings icon in the menu.",
      "Find the Codes text box.",
      "Paste a code — use COPY, codes are case-sensitive.",
      "Press Redeem to claim your reward.",
    ],
    playCta: "▶ PLAY ON ROBLOX",
    expiredTitle: "EXPIRED — GAME OVER",
    expiredBody: "Dead codes, kept so you don't waste a turn trying them.",
    screenshotsTitle: "GAME SCREENSHOTS",
    trailerTitle: "OFFICIAL TRAILER",
    trailerNewTitle: "UPDATE 2.0 TRAILER",
    faqTitle: "FAQ",
    faq: [
      {
        q: "How do you redeem codes in Anime Expeditions?",
        a: "Launch Anime Expeditions on Roblox, open the Settings menu, find the Codes text box, paste a working code exactly as shown, and press Redeem.",
      },
      {
        q: "Why isn't my code working?",
        a: "Codes are case-sensitive and expire quickly. Copy it exactly using the Copy button, and check that it is still listed under Working Codes above rather than Expired.",
      },
      {
        q: "When do new Anime Expeditions codes come out?",
        a: "New codes usually land at visit, like, and concurrent-player milestones, or with big updates. The game is past 700M visits and Update 2.0 just dropped its own codes — watch for an 800mvisits code and the teased Eclipse update.",
      },
    ],
    menu: {
      ranking: "TIER RANKING",
      roster: "UNIT ROSTER",
      planner: "EVO PLANNER",
      rankingSub: "Best units, S→B",
      rosterSub: "Evolutions & materials",
      plannerSub: "Farm checklist",
    },
    disclaimer1: "FAN-MADE · NOT AFFILIATED WITH EXPEDITIONS ENTERTAINMENT OR ROBLOX CORP",
    disclaimer2:
      "Anime Expeditions Hub is an independent player resource. Game names and assets belong to their owners.",
    nav: { codes: "CODES", ranking: "RANKING", roster: "ROSTER", planner: "PLANNER", guide: "GUIDE" },
  },

  es: {
    metaTitle: "Códigos de Anime Expeditions (Septiembre 2026) — Códigos Activos y Recompensas",
    metaDescription:
      "Todos los códigos activos de Anime Expeditions para Roblox, verificados con fuentes en vivo. Canjéalos por Trait Crystals, Equipment Rerolls y Stat Rerolls, además de códigos caducados y cómo canjearlos.",
    titleSub: "★ CÓDIGOS ACTIVOS ★",
    intro:
      "Cada código activo, verificado con fuentes en vivo — canjéalo por Trait Crystals, Equipment Rerolls y Stat Rerolls. Introduce el código, reclama la recompensa y vuelve al juego.",
    liveLabel: "EN VIVO",
    verified: "VERIFICADO",
    visits: "VISITAS",
    boardTitle: "CÓDIGOS ACTIVOS",
    activeSuffix: "ACTIVOS",
    noActive: "NO HAY CÓDIGOS ACTIVOS AHORA MISMO — el tablero se actualiza en cuanto salga uno nuevo.",
    expiresPrefix: "CADUCA",
    gotIt: "¡LISTO!",
    copy: "COPIAR",
    nextUp: "PRÓXIMO:",
    nextUpBody:
      "Update 2.0 [Summer Siege] llegó el 31 de agosto con códigos nuevos, ya se anuncia una actualización Eclipse y el hito de 800M visitas sigue pendiente — todos son momentos clave para nuevos códigos.",
    howTitle: "CÓMO CANJEAR",
    steps: [
      "Abre Anime Expeditions en Roblox.",
      "Toca el icono de Ajustes en el menú.",
      "Busca la casilla de Códigos.",
      "Pega un código — usa COPIAR, distinguen mayúsculas.",
      "Pulsa Canjear para reclamar tu recompensa.",
    ],
    playCta: "▶ JUGAR EN ROBLOX",
    expiredTitle: "CADUCADOS — GAME OVER",
    expiredBody: "Códigos muertos, aquí para que no pierdas el tiempo probándolos.",
    screenshotsTitle: "CAPTURAS DEL JUEGO",
    trailerTitle: "TRÁILER OFICIAL",
    trailerNewTitle: "TRÁILER DE LA UPDATE 2.0",
    faqTitle: "PREGUNTAS FRECUENTES",
    faq: [
      {
        q: "¿Cómo se canjean los códigos en Anime Expeditions?",
        a: "Abre Anime Expeditions en Roblox, entra en Ajustes, busca la casilla de Códigos, pega un código activo tal cual y pulsa Canjear.",
      },
      {
        q: "¿Por qué no funciona mi código?",
        a: "Los códigos distinguen mayúsculas y caducan rápido. Cópialo exactamente con el botón Copiar y comprueba que sigue en la lista de Códigos Activos y no en Caducados.",
      },
      {
        q: "¿Cuándo salen nuevos códigos de Anime Expeditions?",
        a: "Los códigos suelen salir en hitos de visitas, likes y jugadores conectados, o con grandes actualizaciones. El juego supera los 700M de visitas y Update 2.0 ya trajo sus propios códigos — atento a un código 800mvisits y a la anunciada actualización Eclipse.",
      },
    ],
    menu: {
      ranking: "RANKING DE TIERS",
      roster: "LISTA DE UNIDADES",
      planner: "PLANIFICADOR",
      rankingSub: "Mejores unidades, S→B",
      rosterSub: "Evoluciones y materiales",
      plannerSub: "Lista de farmeo",
    },
    disclaimer1: "HECHO POR FANS · SIN AFILIACIÓN CON EXPEDITIONS ENTERTAINMENT NI ROBLOX CORP",
    disclaimer2:
      "Anime Expeditions Hub es un recurso independiente para jugadores. Los nombres y recursos del juego pertenecen a sus dueños.",
    nav: { codes: "CÓDIGOS", ranking: "RANKING", roster: "UNIDADES", planner: "PLANIFICADOR", guide: "GUÍA" },
  },

  pt: {
    metaTitle: "Códigos de Anime Expeditions (Setembro 2026) — Códigos Ativos e Recompensas",
    metaDescription:
      "Todos os códigos ativos de Anime Expeditions para Roblox, verificados com fontes ao vivo. Resgate por Trait Crystals, Equipment Rerolls e Stat Rerolls, além de códigos expirados e como resgatar.",
    titleSub: "★ CÓDIGOS ATIVOS ★",
    intro:
      "Todo código ativo, verificado com fontes ao vivo — resgate por Trait Crystals, Equipment Rerolls e Stat Rerolls. Insira o código, pegue a recompensa e volte ao jogo.",
    liveLabel: "AO VIVO",
    verified: "VERIFICADO",
    visits: "VISITAS",
    boardTitle: "CÓDIGOS ATIVOS",
    activeSuffix: "ATIVOS",
    noActive: "NENHUM CÓDIGO ATIVO NO MOMENTO — o painel atualiza assim que sair um novo.",
    expiresPrefix: "EXPIRA",
    gotIt: "PRONTO!",
    copy: "COPIAR",
    nextUp: "A SEGUIR:",
    nextUpBody:
      "Update 2.0 [Summer Siege] chegou em 31 de agosto com códigos novos, uma atualização Eclipse já foi anunciada e a meta de 800M visitas ainda está por vir — todas são ótimas chances de códigos novos.",
    howTitle: "COMO RESGATAR",
    steps: [
      "Abra Anime Expeditions no Roblox.",
      "Toque no ícone de Configurações no menu.",
      "Encontre a caixa de Códigos.",
      "Cole um código — use COPIAR, diferencia maiúsculas.",
      "Aperte Resgatar para pegar sua recompensa.",
    ],
    playCta: "▶ JOGAR NO ROBLOX",
    expiredTitle: "EXPIRADOS — GAME OVER",
    expiredBody: "Códigos mortos, aqui para você não perder tempo tentando.",
    screenshotsTitle: "CAPTURAS DO JOGO",
    trailerTitle: "TRAILER OFICIAL",
    trailerNewTitle: "TRAILER DA UPDATE 2.0",
    faqTitle: "PERGUNTAS FREQUENTES",
    faq: [
      {
        q: "Como resgatar códigos em Anime Expeditions?",
        a: "Abra Anime Expeditions no Roblox, entre em Configurações, ache a caixa de Códigos, cole um código ativo exatamente como está e aperte Resgatar.",
      },
      {
        q: "Por que meu código não funciona?",
        a: "Os códigos diferenciam maiúsculas e expiram rápido. Copie com o botão Copiar e confira se ele ainda está em Códigos Ativos, não em Expirados.",
      },
      {
        q: "Quando saem novos códigos de Anime Expeditions?",
        a: "Os códigos costumam sair em metas de visitas, likes e jogadores online, ou com grandes atualizações. O jogo passou de 700M de visitas e a Update 2.0 já trouxe seus próprios códigos — fique de olho em um código 800mvisits e na anunciada atualização Eclipse.",
      },
    ],
    menu: {
      ranking: "RANKING DE TIERS",
      roster: "LISTA DE UNIDADES",
      planner: "PLANEJADOR",
      rankingSub: "Melhores unidades, S→B",
      rosterSub: "Evoluções e materiais",
      plannerSub: "Lista de farm",
    },
    disclaimer1: "FEITO POR FÃS · SEM AFILIAÇÃO COM EXPEDITIONS ENTERTAINMENT OU ROBLOX CORP",
    disclaimer2:
      "Anime Expeditions Hub é um recurso independente para jogadores. Nomes e recursos do jogo pertencem aos seus donos.",
    nav: { codes: "CÓDIGOS", ranking: "RANKING", roster: "UNIDADES", planner: "PLANEJADOR", guide: "GUIA" },
  },

  ru: {
    metaTitle: "Коды Anime Expeditions (сентябрь 2026) — рабочие коды и награды",
    metaDescription:
      "Все рабочие коды Anime Expeditions для Roblox, проверенные по живым источникам. Активируйте ради Trait Crystals, Equipment Rerolls и Stat Rerolls, а также список истёкших кодов и инструкция по активации.",
    titleSub: "★ РАБОЧИЕ КОДЫ ★",
    intro:
      "Каждый рабочий код проверен по живым источникам — активируйте ради Trait Crystals, Equipment Rerolls и Stat Rerolls. Ввёл код, забрал награду, вернулся в игру.",
    liveLabel: "ОНЛАЙН",
    verified: "ПРОВЕРЕНО",
    visits: "ВИЗИТОВ",
    boardTitle: "РАБОЧИЕ КОДЫ",
    activeSuffix: "АКТИВНЫХ",
    noActive: "СЕЙЧАС РАБОЧИХ КОДОВ НЕТ — доска обновится, как только выйдет новый.",
    expiresPrefix: "ИСТЕКАЕТ",
    gotIt: "ГОТОВО",
    copy: "КОПИЯ",
    nextUp: "ДАЛЕЕ:",
    nextUpBody:
      "Update 2.0 [Summer Siege] вышла 31 августа с новыми кодами, обновление Eclipse уже анонсировано, а отметка 800M визитов всё ещё впереди — всё это лучшее время для новых кодов.",
    howTitle: "КАК АКТИВИРОВАТЬ",
    steps: [
      "Откройте Anime Expeditions в Roblox.",
      "Нажмите значок настроек в меню.",
      "Найдите поле для кодов.",
      "Вставьте код — жмите КОПИЯ, регистр важен.",
      "Нажмите Redeem, чтобы забрать награду.",
    ],
    playCta: "▶ ИГРАТЬ В ROBLOX",
    expiredTitle: "ИСТЁКШИЕ — GAME OVER",
    expiredBody: "Мёртвые коды — оставлены, чтобы вы не тратили на них время.",
    screenshotsTitle: "СКРИНШОТЫ ИГРЫ",
    trailerTitle: "ОФИЦИАЛЬНЫЙ ТРЕЙЛЕР",
    trailerNewTitle: "ТРЕЙЛЕР UPDATE 2.0",
    faqTitle: "ВОПРОСЫ И ОТВЕТЫ",
    faq: [
      {
        q: "Как активировать коды в Anime Expeditions?",
        a: "Запустите Anime Expeditions в Roblox, откройте настройки, найдите поле для кодов, вставьте рабочий код точь-в-точь и нажмите Redeem.",
      },
      {
        q: "Почему код не работает?",
        a: "Коды чувствительны к регистру и быстро истекают. Скопируйте кнопкой Копия и проверьте, что код всё ещё в списке рабочих, а не истёкших.",
      },
      {
        q: "Когда выходят новые коды Anime Expeditions?",
        a: "Коды обычно выходят на отметках по визитам, лайкам и онлайну или с крупными обновлениями. У игры уже больше 700M визитов, а Update 2.0 принесла свои коды — ждём код 800mvisits и анонсированное обновление Eclipse.",
      },
    ],
    menu: {
      ranking: "РЕЙТИНГ ТИРОВ",
      roster: "СПИСОК ЮНИТОВ",
      planner: "ПЛАНИРОВЩИК",
      rankingSub: "Лучшие юниты, S→B",
      rosterSub: "Эволюции и материалы",
      plannerSub: "Чек-лист фарма",
    },
    disclaimer1: "ФАНАТСКИЙ САЙТ · НЕ СВЯЗАН С EXPEDITIONS ENTERTAINMENT ИЛИ ROBLOX CORP",
    disclaimer2:
      "Anime Expeditions Hub — независимый ресурс для игроков. Названия и ресурсы игры принадлежат их владельцам.",
    nav: { codes: "КОДЫ", ranking: "РЕЙТИНГ", roster: "ЮНИТЫ", planner: "ПЛАНИРОВЩИК", guide: "ГАЙД" },
  },
};

// Evolution planner + beginner guide strings (also localizes the EvolutionPlanner widget).
type PlannerGuideStrings = {
  // planner
  planMetaTitle: string;
  planMetaDesc: string;
  planH1: string;
  planIntro: string;
  dataUpdated: string; // "DATA UPDATED"
  farmChecklist: string; // "FARM CHECKLIST"
  planEmpty: string; // "Select units to evolve..."
  unitsSelected: (n: number) => string; // "3 UNITS SELECTED"
  forUnits: string; // "for"
  noItem: (names: string) => string; // "No special item documented for: X..."
  clear: string; // "CLEAR"
  howToUse: string; // "HOW TO USE"
  planSteps: string[];
  planCrossPre: string;
  tierLink: string;
  planCrossMid: string;
  rosterLink: string;
  planCrossMid2: string;
  codesLink: string;
  end: string;
  // guide
  guideMetaTitle: string;
  guideMetaDesc: string;
  guideH1: string;
  guideIntro: string;
  updated: string;
  stage1: string; // "STAGE 1 — YOUR FIRST HOUR"
  firstHour: string[];
  teamTitle: string; // "THE 5-SLOT TEAM"
  teamIntro: string;
  teamSlots: { role: string; why: string }[];
  placement: string;
  summonsTitle: string; // "SUMMONS & PITY"
  summonsBody1: string;
  ratesPanel: string; // "Rates panel"
  summonsBody2: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  guideCrossPre: string;
  guideCrossMid: string;
  plannerLink: string;
  guideCrossMid2: string;
};

export const plannerGuide: Record<Locale, PlannerGuideStrings> = {
  en: {
    planMetaTitle: "Anime Expeditions Evolution Planner — Materials Checklist",
    planMetaDesc: "Pick the Anime Expeditions units you want to evolve and get a combined checklist of the evolution materials you need to farm. Free interactive planner.",
    planH1: "EVOLUTION PLANNER",
    planIntro: "Tick the units you're building and the planner combines every evolution material into one farm checklist — know exactly what to grind before you spend a reroll.",
    dataUpdated: "DATA UPDATED",
    farmChecklist: "FARM CHECKLIST",
    planEmpty: "Select units to evolve — their required materials appear here.",
    unitsSelected: (n) => `${n} UNIT${n > 1 ? "S" : ""} SELECTED`,
    forUnits: "for",
    noItem: (names) => `No special item documented for: ${names}. Evolve these through normal progression.`,
    clear: "CLEAR",
    howToUse: "HOW TO USE",
    planSteps: [
      "Check every unit you plan to evolve.",
      "The panel lists each material and which units need it.",
      "Farm those materials, then evolve — no wasted resources.",
    ],
    planCrossPre: "New to the roster? Start with the ",
    tierLink: "tier ranking",
    planCrossMid: ", browse the full ",
    rosterLink: "unit roster",
    planCrossMid2: ", and redeem ",
    codesLink: "working codes",
    end: ".",
    guideMetaTitle: "Anime Expeditions Beginner Guide (2026) — Best Start & Team Setup",
    guideMetaDesc: "A step-by-step Anime Expeditions beginner guide: the best first-hour route, how summons and pity work, team composition, and what to prioritize early.",
    guideH1: "BEGINNER GUIDE",
    guideIntro: "The fastest, no-waste start — the first-hour route, how summons work, and the team every new player should aim for.",
    updated: "UPDATED",
    stage1: "STAGE 1 — YOUR FIRST HOUR",
    firstHour: [
      "Redeem the latest working codes for free Gems, Trait Crystals and rerolls.",
      "Start the True Saint Beginner Path from the Events menu — it acts as the tutorial and awards resources plus Beginner Banner tickets.",
      "Spend your free Beginner Banner tickets before touching Gems.",
      "Build a balanced team instead of chasing rarity immediately.",
      "Play Story: get first clears and star objectives for rewards.",
      "Level the core units you use in most teams.",
      "Check unit quests and evolution recipes before farming random materials.",
    ],
    teamTitle: "THE 5-SLOT TEAM",
    teamIntro: "A balanced team beats a squad of high-rarity duplicates. Cover these five roles:",
    teamSlots: [
      { role: "Cheap opener", why: "Handles early waves before your income grows." },
      { role: "Area damage", why: "Clears grouped enemies quickly." },
      { role: "Boss damage", why: "Prevents late-wave timeouts on tanky targets." },
      { role: "Control / support", why: "Slows, staggers, rewinds, debuffs or buffs." },
      { role: "Economy", why: "Generates more battle currency mid-fight." },
    ],
    placement: "Placement: cheapest reliable unit first, upgrade your main carry before spreading low-level placements, keep support in range of its carry.",
    summonsTitle: "SUMMONS & PITY",
    summonsBody1: "Anime Expeditions combines banner summons with wave-based tower defense. Spend free Beginner Banner tickets before any Gems, and open the in-game ",
    ratesPanel: "Rates panel",
    summonsBody2: " to check the current pool and pity before you pull. Stop summoning once your team covers opening waves, grouped enemies, and bosses.",
    faqTitle: "FAQ",
    faq: [
      { q: "How does the summon pity system work?", a: "Anime Expeditions uses a pity system on its banners, but the exact thresholds rotate with each banner. Always open the in-game Rates panel to see the current pool and pity count before spending Gems." },
      { q: "Should I save my Gems or summon early?", a: "Spend free Beginner Banner tickets first. Only spend Gems once you have checked the Rates panel and your team still has a gap. Don't chase rarity before your team can clear opening waves and bosses." },
      { q: "Who should I use my Trait Crystals on?", a: "Save Trait Crystals for a unit likely to stay on your main team long-term. Don't chase a perfect trait on a temporary unit you'll replace." },
    ],
    guideCrossPre: "Next: pick carries from the ",
    guideCrossMid: ", plan evolutions in the ",
    plannerLink: "planner",
    guideCrossMid2: ", and grab ",
  },
  es: {
    planMetaTitle: "Planificador de Evoluciones de Anime Expeditions — Lista de Materiales",
    planMetaDesc: "Elige las unidades de Anime Expeditions que quieres evolucionar y obtén una lista combinada de los materiales de evolución que debes farmear. Planificador interactivo gratis.",
    planH1: "PLANIFICADOR DE EVOLUCIÓN",
    planIntro: "Marca las unidades que estás subiendo y el planificador combina todos los materiales de evolución en una sola lista de farmeo — sabe exactamente qué grindear antes de gastar un reroll.",
    dataUpdated: "DATOS ACTUALIZADOS",
    farmChecklist: "LISTA DE FARMEO",
    planEmpty: "Selecciona unidades para evolucionar — sus materiales aparecen aquí.",
    unitsSelected: (n) => `${n} UNIDAD${n > 1 ? "ES" : ""} SELECCIONADA${n > 1 ? "S" : ""}`,
    forUnits: "para",
    noItem: (names) => `Sin objeto especial documentado para: ${names}. Evoluciona estas por progresión normal.`,
    clear: "LIMPIAR",
    howToUse: "CÓMO USAR",
    planSteps: [
      "Marca cada unidad que planeas evolucionar.",
      "El panel lista cada material y qué unidades lo necesitan.",
      "Farmea esos materiales y evoluciona — sin recursos desperdiciados.",
    ],
    planCrossPre: "¿Nuevo en el roster? Empieza por el ",
    tierLink: "ranking de tiers",
    planCrossMid: ", explora la ",
    rosterLink: "lista de unidades",
    planCrossMid2: " y canjea ",
    codesLink: "códigos activos",
    end: ".",
    guideMetaTitle: "Guía para Principiantes de Anime Expeditions (2026) — Mejor Inicio y Equipo",
    guideMetaDesc: "Guía paso a paso para principiantes de Anime Expeditions: la mejor ruta de la primera hora, cómo funcionan las invocaciones y la pity, la composición del equipo y qué priorizar al inicio.",
    guideH1: "GUÍA PARA PRINCIPIANTES",
    guideIntro: "El inicio más rápido y sin desperdicio — la ruta de la primera hora, cómo funcionan las invocaciones y el equipo al que apuntar.",
    updated: "ACTUALIZADO",
    stage1: "FASE 1 — TU PRIMERA HORA",
    firstHour: [
      "Canjea los últimos códigos activos para Gems, Trait Crystals y rerolls gratis.",
      "Empieza el True Saint Beginner Path desde el menú de Eventos — es el tutorial y da recursos más tickets de Beginner Banner.",
      "Usa tus tickets gratis de Beginner Banner antes de tocar los Gems.",
      "Arma un equipo equilibrado en lugar de perseguir rareza de inmediato.",
      "Juega la Historia: consigue primeros clears y objetivos con estrella.",
      "Sube las unidades base que usas en la mayoría de los equipos.",
      "Revisa las misiones de unidad y recetas de evolución antes de farmear materiales al azar.",
    ],
    teamTitle: "EL EQUIPO DE 5 SLOTS",
    teamIntro: "Un equipo equilibrado supera a un escuadrón de duplicados de alta rareza. Cubre estos cinco roles:",
    teamSlots: [
      { role: "Iniciador barato", why: "Aguanta las primeras oleadas antes de que crezca tu economía." },
      { role: "Daño en área", why: "Limpia enemigos agrupados rápido." },
      { role: "Daño a jefes", why: "Evita timeouts en oleadas tardías con objetivos resistentes." },
      { role: "Control / apoyo", why: "Ralentiza, aturde, revierte, debilita o potencia." },
      { role: "Economía", why: "Genera más moneda de batalla durante la partida." },
    ],
    placement: "Colocación: la unidad fiable más barata primero, mejora tu carry principal antes de repartir colocaciones de bajo nivel, y mantén el apoyo al alcance de su carry.",
    summonsTitle: "INVOCACIONES Y PITY",
    summonsBody1: "Anime Expeditions combina invocaciones por banner con tower defense por oleadas. Usa los tickets gratis de Beginner Banner antes que los Gems, y abre el ",
    ratesPanel: "panel de Rates",
    summonsBody2: " en el juego para ver el pool actual y la pity antes de tirar. Deja de invocar cuando tu equipo cubra oleadas iniciales, enemigos agrupados y jefes.",
    faqTitle: "PREGUNTAS FRECUENTES",
    faq: [
      { q: "¿Cómo funciona el sistema de pity de invocación?", a: "Anime Expeditions usa un sistema de pity en sus banners, pero los umbrales exactos cambian con cada banner. Abre siempre el panel de Rates en el juego para ver el pool actual y el contador de pity antes de gastar Gems." },
      { q: "¿Debo guardar mis Gems o invocar pronto?", a: "Usa primero los tickets gratis de Beginner Banner. Gasta Gems solo tras revisar el panel de Rates y si a tu equipo aún le falta algo. No persigas rareza antes de poder superar oleadas iniciales y jefes." },
      { q: "¿En quién uso mis Trait Crystals?", a: "Guarda los Trait Crystals para una unidad que se quede en tu equipo principal a largo plazo. No persigas un trait perfecto en una unidad temporal que vas a reemplazar." },
    ],
    guideCrossPre: "Después: elige carries del ",
    guideCrossMid: ", planea evoluciones en el ",
    plannerLink: "planificador",
    guideCrossMid2: " y consigue ",
  },
  pt: {
    planMetaTitle: "Planejador de Evoluções de Anime Expeditions — Lista de Materiais",
    planMetaDesc: "Escolha as unidades de Anime Expeditions que quer evoluir e receba uma lista combinada dos materiais de evolução que precisa farmar. Planejador interativo grátis.",
    planH1: "PLANEJADOR DE EVOLUÇÃO",
    planIntro: "Marque as unidades que está upando e o planejador combina todos os materiais de evolução em uma lista de farm — saiba exatamente o que grindar antes de gastar um reroll.",
    dataUpdated: "DADOS ATUALIZADOS",
    farmChecklist: "LISTA DE FARM",
    planEmpty: "Selecione unidades para evoluir — os materiais aparecem aqui.",
    unitsSelected: (n) => `${n} UNIDADE${n > 1 ? "S" : ""} SELECIONADA${n > 1 ? "S" : ""}`,
    forUnits: "para",
    noItem: (names) => `Sem item especial documentado para: ${names}. Evolua essas pela progressão normal.`,
    clear: "LIMPAR",
    howToUse: "COMO USAR",
    planSteps: [
      "Marque cada unidade que planeja evoluir.",
      "O painel lista cada material e quais unidades precisam dele.",
      "Farme esses materiais e evolua — sem desperdiçar recursos.",
    ],
    planCrossPre: "Novo no roster? Comece pelo ",
    tierLink: "ranking de tiers",
    planCrossMid: ", explore a ",
    rosterLink: "lista de unidades",
    planCrossMid2: " e resgate ",
    codesLink: "códigos ativos",
    end: ".",
    guideMetaTitle: "Guia para Iniciantes de Anime Expeditions (2026) — Melhor Início e Time",
    guideMetaDesc: "Guia passo a passo para iniciantes de Anime Expeditions: a melhor rota da primeira hora, como funcionam invocações e pity, composição de time e o que priorizar no início.",
    guideH1: "GUIA PARA INICIANTES",
    guideIntro: "O início mais rápido e sem desperdício — a rota da primeira hora, como funcionam as invocações e o time que todo novo jogador deve mirar.",
    updated: "ATUALIZADO",
    stage1: "FASE 1 — SUA PRIMEIRA HORA",
    firstHour: [
      "Resgate os últimos códigos ativos para Gems, Trait Crystals e rerolls grátis.",
      "Comece o True Saint Beginner Path no menu de Eventos — é o tutorial e dá recursos mais tickets de Beginner Banner.",
      "Use seus tickets grátis de Beginner Banner antes de mexer nos Gems.",
      "Monte um time equilibrado em vez de correr atrás de raridade logo de cara.",
      "Jogue a História: consiga primeiros clears e objetivos com estrela.",
      "Suba as unidades base que você usa na maioria dos times.",
      "Confira as missões de unidade e receitas de evolução antes de farmar materiais aleatórios.",
    ],
    teamTitle: "O TIME DE 5 SLOTS",
    teamIntro: "Um time equilibrado vence um esquadrão de duplicatas de alta raridade. Cubra estas cinco funções:",
    teamSlots: [
      { role: "Iniciador barato", why: "Segura as primeiras ondas antes da economia crescer." },
      { role: "Dano em área", why: "Limpa inimigos agrupados rápido." },
      { role: "Dano em chefe", why: "Evita timeouts em ondas tardias contra alvos resistentes." },
      { role: "Controle / suporte", why: "Reduz, atordoa, reverte, enfraquece ou fortalece." },
      { role: "Economia", why: "Gera mais moeda de batalha durante a partida." },
    ],
    placement: "Posicionamento: a unidade confiável mais barata primeiro, melhore seu carry principal antes de espalhar posicionamentos de nível baixo, e mantenha o suporte no alcance do carry.",
    summonsTitle: "INVOCAÇÕES E PITY",
    summonsBody1: "Anime Expeditions combina invocações por banner com tower defense por ondas. Use os tickets grátis de Beginner Banner antes dos Gems, e abra o ",
    ratesPanel: "painel de Rates",
    summonsBody2: " no jogo para ver o pool atual e a pity antes de puxar. Pare de invocar quando seu time cobrir ondas iniciais, inimigos agrupados e chefes.",
    faqTitle: "PERGUNTAS FREQUENTES",
    faq: [
      { q: "Como funciona o sistema de pity de invocação?", a: "Anime Expeditions usa um sistema de pity nos banners, mas os limites exatos mudam a cada banner. Sempre abra o painel de Rates no jogo para ver o pool atual e o contador de pity antes de gastar Gems." },
      { q: "Devo guardar meus Gems ou invocar cedo?", a: "Use primeiro os tickets grátis de Beginner Banner. Só gaste Gems depois de checar o painel de Rates e se o time ainda tiver uma lacuna. Não corra atrás de raridade antes de conseguir passar ondas iniciais e chefes." },
      { q: "Em quem uso meus Trait Crystals?", a: "Guarde os Trait Crystals para uma unidade que fique no seu time principal a longo prazo. Não corra atrás de um trait perfeito numa unidade temporária que vai substituir." },
    ],
    guideCrossPre: "Depois: escolha carries no ",
    guideCrossMid: ", planeje evoluções no ",
    plannerLink: "planejador",
    guideCrossMid2: " e pegue ",
  },
  ru: {
    planMetaTitle: "Планировщик эволюций Anime Expeditions — чек-лист материалов",
    planMetaDesc: "Выберите юнитов Anime Expeditions для эволюции и получите общий чек-лист материалов, которые нужно фармить. Бесплатный интерактивный планировщик.",
    planH1: "ПЛАНИРОВЩИК ЭВОЛЮЦИЙ",
    planIntro: "Отметьте юнитов, которых качаете, и планировщик соберёт все материалы эволюции в один чек-лист — вы точно будете знать, что фармить, прежде чем тратить reroll.",
    dataUpdated: "ДАННЫЕ ОБНОВЛЕНЫ",
    farmChecklist: "ЧЕК-ЛИСТ ФАРМА",
    planEmpty: "Выберите юнитов для эволюции — их материалы появятся здесь.",
    unitsSelected: (n) => `ВЫБРАНО ЮНИТОВ: ${n}`,
    forUnits: "для",
    noItem: (names) => `Особый предмет не задокументирован для: ${names}. Эволюционируйте их обычной прокачкой.`,
    clear: "ОЧИСТИТЬ",
    howToUse: "КАК ПОЛЬЗОВАТЬСЯ",
    planSteps: [
      "Отметьте каждого юнита, которого планируете эволюционировать.",
      "Панель покажет каждый материал и кому он нужен.",
      "Фармите материалы и эволюционируйте — без лишних трат.",
    ],
    planCrossPre: "Новичок в ростере? Начните с ",
    tierLink: "рейтинга тиров",
    planCrossMid: ", посмотрите полный ",
    rosterLink: "список юнитов",
    planCrossMid2: " и активируйте ",
    codesLink: "рабочие коды",
    end: ".",
    guideMetaTitle: "Гайд для новичков Anime Expeditions (2026) — старт и состав команды",
    guideMetaDesc: "Пошаговый гайд для новичков Anime Expeditions: лучший маршрут первого часа, как работают призывы и pity, состав команды и что качать в первую очередь.",
    guideH1: "ГАЙД ДЛЯ НОВИЧКОВ",
    guideIntro: "Самый быстрый старт без потерь — маршрут первого часа, как работают призывы и команда, к которой стоит стремиться новичку.",
    updated: "ОБНОВЛЕНО",
    stage1: "ЭТАП 1 — ВАШ ПЕРВЫЙ ЧАС",
    firstHour: [
      "Активируйте свежие рабочие коды ради бесплатных Gems, Trait Crystals и rerolls.",
      "Начните True Saint Beginner Path в меню Events — это туториал, он даёт ресурсы и билеты Beginner Banner.",
      "Потратьте бесплатные билеты Beginner Banner прежде, чем трогать Gems.",
      "Соберите сбалансированную команду, а не гонитесь за редкостью сразу.",
      "Проходите Story: берите первые клиры и звёздные цели ради наград.",
      "Качайте базовых юнитов, которых используете в большинстве команд.",
      "Проверяйте квесты юнитов и рецепты эволюции, прежде чем фармить случайные материалы.",
    ],
    teamTitle: "КОМАНДА ИЗ 5 СЛОТОВ",
    teamIntro: "Сбалансированная команда сильнее отряда из дубликатов высокой редкости. Закройте эти пять ролей:",
    teamSlots: [
      { role: "Дешёвый опенер", why: "Держит ранние волны, пока растёт экономика." },
      { role: "Урон по области", why: "Быстро зачищает скученных врагов." },
      { role: "Урон по боссам", why: "Не даёт слить таймер на поздних волнах против танков." },
      { role: "Контроль / поддержка", why: "Замедляет, оглушает, откатывает, ослабляет или усиливает." },
      { role: "Экономика", why: "Даёт больше боевой валюты по ходу боя." },
    ],
    placement: "Расстановка: сначала самый дешёвый надёжный юнит, прокачайте основной carry до того, как раскидывать низкоуровневых, и держите поддержку в радиусе её carry.",
    summonsTitle: "ПРИЗЫВЫ И PITY",
    summonsBody1: "Anime Expeditions сочетает призывы по баннерам с волновым tower defense. Тратьте бесплатные билеты Beginner Banner раньше Gems и открывайте ",
    ratesPanel: "панель Rates",
    summonsBody2: " в игре, чтобы увидеть текущий пул и pity перед круткой. Прекращайте призывать, когда команда закрывает ранние волны, скученных врагов и боссов.",
    faqTitle: "ВОПРОСЫ И ОТВЕТЫ",
    faq: [
      { q: "Как работает система pity в призывах?", a: "В Anime Expeditions на баннерах есть pity, но точные пороги меняются с каждым баннером. Всегда открывайте панель Rates в игре, чтобы увидеть текущий пул и счётчик pity перед тратой Gems." },
      { q: "Копить Gems или призывать сразу?", a: "Сначала тратьте бесплатные билеты Beginner Banner. Gems тратьте только после проверки панели Rates и если у команды всё ещё есть пробел. Не гонитесь за редкостью, пока команда не проходит ранние волны и боссов." },
      { q: "На кого тратить Trait Crystals?", a: "Берегите Trait Crystals для юнита, который надолго останется в основной команде. Не гонитесь за идеальным trait на временном юните, которого замените." },
    ],
    guideCrossPre: "Далее: выберите carry из ",
    guideCrossMid: ", спланируйте эволюции в ",
    plannerLink: "планировщике",
    guideCrossMid2: " и заберите ",
  },
};
