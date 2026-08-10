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
  tierLabels: { S: string; A: string; B: string; Watch: string };
  // cross-link sentence pieces
  seeRosterPre: string; // "Want each unit's evolution and materials? Open the "
  rosterLink: string; // "unit roster"
  seeRosterMid: string; // ". Chasing rewards? Grab the latest "
  codesLink: string; // "working codes"
  end: string; // "."
};

export const tierUnits: Record<Locale, TierUnitsStrings> = {
  en: {
    tierMetaTitle: "Anime Expeditions Tier List (August 2026) — Best Units Ranked",
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
    tierLabels: { S: "S TIER — BEST IN SLOT", A: "A TIER — STRONG PICKS", B: "B TIER — SITUATIONAL", Watch: "WATCH — PROMISING, UNPROVEN" },
    seeRosterPre: "Want each unit's evolution and materials? Open the ",
    rosterLink: "unit roster",
    seeRosterMid: ". Chasing rewards to level them? Grab the latest ",
    codesLink: "working codes",
    end: ".",
  },
  es: {
    tierMetaTitle: "Tier List de Anime Expeditions (Agosto 2026) — Mejores Unidades",
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
    tierLabels: { S: "TIER S — LO MEJOR", A: "TIER A — FUERTES", B: "TIER B — SITUACIONALES", Watch: "WATCH — PROMETEDORAS" },
    seeRosterPre: "¿Quieres la evolución y los materiales de cada unidad? Abre la ",
    rosterLink: "lista de unidades",
    seeRosterMid: ". ¿Buscas recompensas para subirlas? Consigue los últimos ",
    codesLink: "códigos activos",
    end: ".",
  },
  pt: {
    tierMetaTitle: "Tier List de Anime Expeditions (Agosto 2026) — Melhores Unidades",
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
    tierLabels: { S: "TIER S — OS MELHORES", A: "TIER A — FORTES", B: "TIER B — SITUACIONAIS", Watch: "WATCH — PROMISSORAS" },
    seeRosterPre: "Quer a evolução e os materiais de cada unidade? Abra a ",
    rosterLink: "lista de unidades",
    seeRosterMid: ". Buscando recompensas para upar? Pegue os últimos ",
    codesLink: "códigos ativos",
    end: ".",
  },
  ru: {
    tierMetaTitle: "Тир-лист Anime Expeditions (август 2026) — лучшие юниты",
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
    tierLabels: { S: "ТИР S — ЛУЧШИЕ", A: "ТИР A — СИЛЬНЫЕ", B: "ТИР B — СИТУАТИВНЫЕ", Watch: "WATCH — ПЕРСПЕКТИВНЫЕ" },
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
  faqTitle: string;
  faq: { q: string; a: string }[];
  menu: { ranking: string; roster: string; planner: string; rankingSub: string; rosterSub: string; plannerSub: string };
  disclaimer1: string;
  disclaimer2: string;
  nav: { codes: string; ranking: string; roster: string; planner: string; guide: string };
};

export const codesPage: Record<Locale, CodesStrings> = {
  en: {
    metaTitle: "Anime Expeditions Codes (August 2026) — Working Codes & Rewards",
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
    expiresPrefix: "EXPIRES",
    gotIt: "GOT IT",
    copy: "COPY",
    nextUp: "NEXT UP:",
    nextUpBody:
      "expect a 600mvisits code at the 600M milestone. We forecast codes from visit, like and CCU thresholds.",
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
        a: "New codes are usually released at visit, like, and concurrent-player milestones. The game is past 570M visits, so a 600mvisits code is expected when it reaches 600 million visits.",
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
    metaTitle: "Códigos de Anime Expeditions (Agosto 2026) — Códigos Activos y Recompensas",
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
    expiresPrefix: "CADUCA",
    gotIt: "¡LISTO!",
    copy: "COPIAR",
    nextUp: "PRÓXIMO:",
    nextUpBody:
      "espera un código 600mvisits al llegar al hito de 600M. Predecimos los códigos según los hitos de visitas, likes y jugadores conectados.",
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
        a: "Los códigos suelen salir en hitos de visitas, likes y jugadores conectados. El juego supera los 570M de visitas, así que se espera un código 600mvisits al alcanzar los 600 millones.",
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
    metaTitle: "Códigos de Anime Expeditions (Agosto 2026) — Códigos Ativos e Recompensas",
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
    expiresPrefix: "EXPIRA",
    gotIt: "PRONTO!",
    copy: "COPIAR",
    nextUp: "A SEGUIR:",
    nextUpBody:
      "espere um código 600mvisits ao atingir a marca de 600M. Prevemos os códigos pelas metas de visitas, likes e jogadores online.",
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
        a: "Os códigos costumam sair em metas de visitas, likes e jogadores online. O jogo passou de 570M de visitas, então espera-se um código 600mvisits ao chegar a 600 milhões.",
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
    metaTitle: "Коды Anime Expeditions (август 2026) — рабочие коды и награды",
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
    expiresPrefix: "ИСТЕКАЕТ",
    gotIt: "ГОТОВО",
    copy: "КОПИЯ",
    nextUp: "ДАЛЕЕ:",
    nextUpBody:
      "ждите код 600mvisits на отметке 600M. Мы прогнозируем коды по порогам визитов, лайков и онлайна.",
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
        a: "Коды обычно выходят на отметках по визитам, лайкам и онлайну. У игры уже больше 570M визитов, поэтому код 600mvisits ждём на отметке 600 миллионов.",
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
