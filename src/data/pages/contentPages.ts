// Locale strings for the six content pages: traits, updates, game-modes, about,
// maps, gamepasses. Game terms & proper nouns stay English; prose is localized.

import type { CrossText, FaqItem, Loc } from "./types";

export interface TraitsStrings {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  stamp: string;
  tableTitle: string;
  traitsSuffix: string;
  pityPrefix: string;
  noPity: string;
  rerollTitle: string;
  rerollSteps: string[];
  rerollNote: string;
  faqTitle: string;
  faq: FaqItem[];
  keepLabels: { keep: string; situational: string; replaceLater: string };
  cross: CrossText;
}

export interface UpdatesStrings {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  stamp: string;
  verified: string;
  provisional: string;
  trackTitle: string;
  trackBody: string;
  cross: CrossText;
}

export interface GameModesStrings {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  stamp: string;
  limitedTag: string;
  unlocksTag: string;
  faqTitle: string;
  faq: FaqItem[];
  cross: CrossText;
}

export interface AboutStrings {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whatTitle: string;
  whatBody: string;
  verifyTitle: string;
  verifyPre: string;
  verifyPost: string; // after the date
  stanceTitle: string;
  stanceBody: string;
  linksTitle: string;
  linksBody: string;
  playCta: string;
  cross: CrossText;
}

export interface MapsStrings {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  stamp: string;
  unitGearFor: string;
  typeLabels: { food: string; standard: string; unit: string };
  howTitle: string;
  howBody: string;
  cross: CrossText;
}

export interface GamepassesStrings {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  stamp: string;
  reportedTag: string;
  confirmedYes: string;
  confirmedNo: string;
  faqTitle: string;
  faq: FaqItem[];
  cta: string;
  cross: CrossText;
}

export const traitsPage: Loc<TraitsStrings> = {
  en: {
    metaTitle: "Anime Expeditions Traits — Effects, Rates & Reroll Guide",
    metaDescription:
      "Every Anime Expeditions trait with its effect, roll rate, and reroll pity — plus which traits are worth keeping and how to reroll without wasting Trait Crystals.",
    h1: "ANIME EXPEDITIONS TRAITS",
    intro:
      "Every trait, its effect, its roll rate, and whether it's worth spending Trait Crystals to keep. Rare multi-stat traits are the ones that change a run — the commons are placeholders until you can afford better.",
    stamp: "REPORTED · VERIFIED",
    tableTitle: "TRAIT TABLE",
    traitsSuffix: "TRAITS",
    pityPrefix: "PITY",
    noPity: "NO PITY",
    rerollTitle: "HOW TO REROLL WITHOUT WASTING CRYSTALS",
    rerollSteps: [
      "Confirm the unit earns a permanent slot. Never reroll traits on a unit you'll bench next week — crystals spent there are gone.",
      "Name the one mechanic you're improving: raw damage, attack speed (SPA), crit, range, or income. Rerolling with no target just burns crystals.",
      "Set a stopping rule before you start. Decide the trait you'll settle for, and walk away when you hit it — the pity counter only saves you on the four rarest traits.",
      "Keep rare multi-stat traits, accept mid-tier as a stop, and only replace single-stat commons once the unit is permanent and you have crystals to spare.",
    ],
    rerollNote:
      "The Trait Reroll station sits in the upgrade area. Before you spend, check the selected unit, the crystal cost, the replacement warning, and the pity counter in-client — community rates are a guide, not a guarantee.",
    faqTitle: "QUESTIONS PEOPLE ASK",
    faq: [
      {
        q: "What are traits in Anime Expeditions?",
        a: "Traits are a per-unit modifier rolled at the Trait Reroll station using Trait Crystals. They stack on top of a unit's kit — extra damage, faster attacks, more range, crit, or income — but they can't turn a wrong-for-the-stage unit into a right one. Treat them as the last optimization layer, not a fix.",
      },
      {
        q: "Which traits are worth keeping?",
        a: "Chase the rare multi-stat traits — Unbound, Primordial, Forsaken and Draconic — on units you know are permanent. Bolt, Optics, Investor and Precision 2 are strong keeps too. The single-stat commons (Strength 1, Speed 1, Range 1) are fine early but worth replacing once you have crystals to spare.",
      },
      {
        q: "How does trait reroll pity work?",
        a: "Only the four rarest traits report a pity counter: Draconic at 300 rerolls, Forsaken at 500, Primordial at 750, and Unbound at 1,500. Everything else has no reported pity. These thresholds are community-reported, not officially confirmed, so watch the in-client counter before committing crystals.",
      },
      {
        q: "Do traits carry through evolution?",
        a: "This isn't confirmed in current community data. Assume you may need to re-roll after evolving, and don't sink pity-level crystal counts into a base form you're about to evolve until you've verified it in-game.",
      },
    ],
    keepLabels: { keep: "Keep", situational: "Situational", replaceLater: "Replace later" },
    cross: {
      before: "Traits are the last layer — get the right units first on the ",
      links: [
        { label: "tier list", path: "/tier-list/" },
        { label: "evolution planner", path: "/evolution-planner/" },
        { label: "working codes", path: "/" },
      ],
      between: [", plan their evolutions in the ", ", then grab "],
      after: " for free Trait Crystals to reroll with.",
    },
  },
  es: {
    metaTitle: "Traits de Anime Expeditions — Efectos, Probabilidades y Guía de Reroll",
    metaDescription:
      "Todos los traits de Anime Expeditions con su efecto, probabilidad y pity de reroll — qué traits vale la pena conservar y cómo hacer reroll sin malgastar Trait Crystals.",
    h1: "TRAITS DE ANIME EXPEDITIONS",
    intro:
      "Cada trait, su efecto, su probabilidad y si vale la pena gastar Trait Crystals para conservarlo. Los traits raros multi-stat son los que cambian una partida — los comunes son temporales hasta que puedas pagar algo mejor.",
    stamp: "REPORTADO · VERIFICADO",
    tableTitle: "TABLA DE TRAITS",
    traitsSuffix: "TRAITS",
    pityPrefix: "PITY",
    noPity: "SIN PITY",
    rerollTitle: "CÓMO HACER REROLL SIN MALGASTAR CRISTALES",
    rerollSteps: [
      "Confirma que la unidad se gana un slot permanente. Nunca hagas reroll en una unidad que dejarás en la banca la próxima semana — los cristales gastados ahí no vuelven.",
      "Define la única mecánica que quieres mejorar: daño bruto, velocidad de ataque (SPA), crítico, rango o ingresos. Hacer reroll sin objetivo solo quema cristales.",
      "Pon una regla de salida antes de empezar. Decide qué trait te sirve y retírate al conseguirlo — el contador de pity solo te salva en los cuatro traits más raros.",
      "Conserva los traits raros multi-stat, acepta uno medio como parada y reemplaza los comunes de un solo stat solo cuando la unidad sea permanente y te sobren cristales.",
    ],
    rerollNote:
      "La estación de Trait Reroll está en la zona de mejoras. Antes de gastar, revisa la unidad seleccionada, el costo en cristales, el aviso de reemplazo y el contador de pity en el juego — las tasas de la comunidad son una guía, no una garantía.",
    faqTitle: "PREGUNTAS FRECUENTES",
    faq: [
      {
        q: "¿Qué son los traits en Anime Expeditions?",
        a: "Los traits son modificadores por unidad que se obtienen en la estación de Trait Reroll usando Trait Crystals. Se suman al kit de la unidad — daño extra, ataques más rápidos, más rango, crítico o ingresos — pero no convierten a una unidad equivocada en la correcta. Trátalos como la última capa de optimización, no como un parche.",
      },
      {
        q: "¿Qué traits vale la pena conservar?",
        a: "Busca los traits raros multi-stat — Unbound, Primordial, Forsaken y Draconic — en unidades que sepas que son permanentes. Bolt, Optics, Investor y Precision 2 también son buenos. Los comunes de un stat (Strength 1, Speed 1, Range 1) sirven al inicio pero conviene reemplazarlos cuando tengas cristales.",
      },
      {
        q: "¿Cómo funciona el pity de reroll?",
        a: "Solo los cuatro traits más raros reportan contador de pity: Draconic en 300 rerolls, Forsaken en 500, Primordial en 750 y Unbound en 1,500. El resto no tiene pity reportado. Estos umbrales son reportados por la comunidad, no confirmados oficialmente — revisa el contador en el juego antes de comprometer cristales.",
      },
      {
        q: "¿Los traits se mantienen al evolucionar?",
        a: "No está confirmado en los datos actuales de la comunidad. Asume que podrías tener que volver a tirar tras evolucionar, y no inviertas pity en una forma base que estás a punto de evolucionar sin verificarlo en el juego.",
      },
    ],
    keepLabels: { keep: "Conservar", situational: "Situacional", replaceLater: "Reemplazar luego" },
    cross: {
      before: "Los traits son la última capa — consigue primero las unidades correctas en el ",
      links: [
        { label: "ranking de tiers", path: "/tier-list/" },
        { label: "planificador de evolución", path: "/evolution-planner/" },
        { label: "códigos activos", path: "/" },
      ],
      between: [", planea sus evoluciones en el ", " y consigue "],
      after: " para tener Trait Crystals gratis con los que hacer reroll.",
    },
  },
  pt: {
    metaTitle: "Traits de Anime Expeditions — Efeitos, Chances e Guia de Reroll",
    metaDescription:
      "Todos os traits de Anime Expeditions com efeito, chance e pity de reroll — quais traits valem a pena manter e como fazer reroll sem desperdiçar Trait Crystals.",
    h1: "TRAITS DE ANIME EXPEDITIONS",
    intro:
      "Cada trait, seu efeito, sua chance e se vale gastar Trait Crystals para mantê-lo. Os traits raros multi-stat são os que mudam uma partida — os comuns são temporários até você pagar algo melhor.",
    stamp: "REPORTADO · VERIFICADO",
    tableTitle: "TABELA DE TRAITS",
    traitsSuffix: "TRAITS",
    pityPrefix: "PITY",
    noPity: "SEM PITY",
    rerollTitle: "COMO FAZER REROLL SEM DESPERDIÇAR CRISTAIS",
    rerollSteps: [
      "Confirme que a unidade ganha um slot permanente. Nunca faça reroll em uma unidade que vai para o banco na próxima semana — os cristais gastos ali não voltam.",
      "Defina a única mecânica que quer melhorar: dano bruto, velocidade de ataque (SPA), crítico, alcance ou renda. Reroll sem alvo só queima cristais.",
      "Defina uma regra de parada antes de começar. Decida qual trait aceita e saia quando conseguir — o contador de pity só te salva nos quatro traits mais raros.",
      "Mantenha traits raros multi-stat, aceite um médio como parada e só substitua os comuns de um stat quando a unidade for permanente e sobrarem cristais.",
    ],
    rerollNote:
      "A estação de Trait Reroll fica na área de melhorias. Antes de gastar, confira a unidade selecionada, o custo em cristais, o aviso de substituição e o contador de pity no jogo — as taxas da comunidade são um guia, não uma garantia.",
    faqTitle: "PERGUNTAS FREQUENTES",
    faq: [
      {
        q: "O que são traits em Anime Expeditions?",
        a: "Traits são modificadores por unidade rolados na estação de Trait Reroll usando Trait Crystals. Eles somam ao kit da unidade — dano extra, ataques mais rápidos, mais alcance, crítico ou renda — mas não transformam uma unidade errada na certa. Trate-os como a última camada de otimização, não como conserto.",
      },
      {
        q: "Quais traits valem a pena manter?",
        a: "Busque os traits raros multi-stat — Unbound, Primordial, Forsaken e Draconic — em unidades que você sabe que são permanentes. Bolt, Optics, Investor e Precision 2 também são ótimos. Os comuns de um stat (Strength 1, Speed 1, Range 1) servem no início, mas valem substituir quando sobrarem cristais.",
      },
      {
        q: "Como funciona o pity de reroll?",
        a: "Só os quatro traits mais raros reportam contador de pity: Draconic em 300 rerolls, Forsaken em 500, Primordial em 750 e Unbound em 1.500. O resto não tem pity reportado. Esses limites são reportados pela comunidade, não confirmados oficialmente — confira o contador no jogo antes de comprometer cristais.",
      },
      {
        q: "Os traits passam pela evolução?",
        a: "Não está confirmado nos dados atuais da comunidade. Assuma que pode precisar rolar de novo após evoluir, e não gaste pity em uma forma base que você está prestes a evoluir sem verificar no jogo.",
      },
    ],
    keepLabels: { keep: "Manter", situational: "Situacional", replaceLater: "Substituir depois" },
    cross: {
      before: "Traits são a última camada — pegue primeiro as unidades certas no ",
      links: [
        { label: "ranking de tiers", path: "/tier-list/" },
        { label: "planejador de evolução", path: "/evolution-planner/" },
        { label: "códigos ativos", path: "/" },
      ],
      between: [", planeje as evoluções no ", " e pegue "],
      after: " para ter Trait Crystals grátis para reroll.",
    },
  },
  ru: {
    metaTitle: "Трейты Anime Expeditions — Эффекты, Шансы и Гайд по Рероллу",
    metaDescription:
      "Все трейты Anime Expeditions с эффектами, шансами и pity реролла — какие трейты стоит оставить и как рероллить, не тратя Trait Crystals впустую.",
    h1: "ТРЕЙТЫ ANIME EXPEDITIONS",
    intro:
      "Каждый трейт, его эффект, шанс и стоит ли тратить Trait Crystals, чтобы оставить его. Редкие мультистатовые трейты меняют матч — обычные лишь временная мера, пока не накопите на лучшее.",
    stamp: "ПО ДАННЫМ СООБЩЕСТВА · ПРОВЕРЕНО",
    tableTitle: "ТАБЛИЦА ТРЕЙТОВ",
    traitsSuffix: "ТРЕЙТОВ",
    pityPrefix: "PITY",
    noPity: "БЕЗ PITY",
    rerollTitle: "КАК РЕРОЛЛИТЬ, НЕ ТРАТЯ КРИСТАЛЛЫ ВПУСТУЮ",
    rerollSteps: [
      "Убедитесь, что юнит займёт постоянный слот. Никогда не реролльте трейты юниту, которого через неделю уберёте на скамейку — кристаллы не вернутся.",
      "Назовите одну механику, которую улучшаете: чистый урон, скорость атаки (SPA), крит, дальность или доход. Реролл без цели просто сжигает кристаллы.",
      "Заранее решите, когда остановиться. Выберите трейт, который вас устроит, и уходите, получив его, — счётчик pity спасает только на четырёх редчайших трейтах.",
      "Оставляйте редкие мультистатовые трейты, соглашайтесь на средний как временный и меняйте одностатовые обычные, только когда юнит постоянный и кристаллов в избытке.",
    ],
    rerollNote:
      "Станция Trait Reroll находится в зоне улучшений. Перед тратой проверьте выбранного юнита, цену в кристаллах, предупреждение о замене и счётчик pity в игре — шансы от сообщества это ориентир, а не гарантия.",
    faqTitle: "ВОПРОСЫ И ОТВЕТЫ",
    faq: [
      {
        q: "Что такое трейты в Anime Expeditions?",
        a: "Трейты — модификаторы юнита, которые выбиваются на станции Trait Reroll за Trait Crystals. Они добавляются к набору юнита — урон, скорость атак, дальность, крит или доход, — но не делают неподходящего юнита подходящим. Считайте их последним слоем оптимизации, а не исправлением.",
      },
      {
        q: "Какие трейты стоит оставлять?",
        a: "Охотьтесь за редкими мультистатовыми — Unbound, Primordial, Forsaken и Draconic — на юнитах, которые точно постоянные. Bolt, Optics, Investor и Precision 2 тоже отличные. Одностатовые обычные (Strength 1, Speed 1, Range 1) сойдут на старте, но потом их стоит заменить.",
      },
      {
        q: "Как работает pity реролла?",
        a: "Счётчик pity есть только у четырёх редчайших трейтов: Draconic на 300 рероллах, Forsaken на 500, Primordial на 750 и Unbound на 1 500. У остальных pity не зафиксирован. Эти пороги от сообщества, официально не подтверждены — смотрите счётчик в игре, прежде чем тратить кристаллы.",
      },
      {
        q: "Сохраняются ли трейты при эволюции?",
        a: "В текущих данных сообщества это не подтверждено. Исходите из того, что после эволюции придётся роллить заново, и не вкладывайте pity в базовую форму, которую собираетесь эволвить, не проверив в игре.",
      },
    ],
    keepLabels: { keep: "Оставить", situational: "Ситуативно", replaceLater: "Заменить позже" },
    cross: {
      before: "Трейты — последний слой: сначала возьмите правильных юнитов из ",
      links: [
        { label: "тир-листа", path: "/tier-list/" },
        { label: "планировщика эволюций", path: "/evolution-planner/" },
        { label: "рабочих кодов", path: "/" },
      ],
      between: [", спланируйте эволюции в ", ", затем заберите "],
      after: " ради бесплатных Trait Crystals на реролл.",
    },
  },
};

export const updatesPage: Loc<UpdatesStrings> = {
  en: {
    metaTitle: "Anime Expeditions Updates — Patch Notes & Event Windows",
    metaDescription:
      "Every Anime Expeditions update and event window, newest first: new units, limited modes like Villain Invasion, cosmetics, and fixes. Dates from the official Roblox schedule.",
    h1: "ANIME EXPEDITIONS UPDATES",
    intro:
      "Every update and event window, newest first — new units, limited modes, cosmetics, and fixes. Event maps like Villain Invasion are time-limited, so check the window before you plan around them.",
    stamp: "UPDATED",
    verified: "● VERIFIED",
    provisional: "○ PROVISIONAL",
    trackTitle: "HOW WE TRACK UPDATES",
    trackBody:
      "Event windows are read from the official Roblox events schedule, so the dates are firm. Client-side details — exact drop rates, evolution recipes, reward caps — are marked provisional until they're confirmed in-game or by the developer, because early patch summaries shift in the first days after a release.",
    cross: {
      before: "New update usually means new codes — check the ",
      links: [
        { label: "working codes", path: "/" },
        { label: "tier list", path: "/tier-list/" },
      ],
      between: [" list, then see where the new units land on the "],
      after: ".",
    },
  },
  es: {
    metaTitle: "Actualizaciones de Anime Expeditions — Parches y Ventanas de Eventos",
    metaDescription:
      "Todas las actualizaciones y ventanas de eventos de Anime Expeditions, de la más nueva a la más vieja: unidades nuevas, modos limitados como Villain Invasion, cosméticos y arreglos. Fechas del calendario oficial de Roblox.",
    h1: "ACTUALIZACIONES DE ANIME EXPEDITIONS",
    intro:
      "Cada actualización y ventana de evento, de la más nueva a la más vieja — unidades nuevas, modos limitados, cosméticos y arreglos. Los mapas de evento como Villain Invasion son por tiempo limitado, así que revisa la ventana antes de planear con ellos.",
    stamp: "ACTUALIZADO",
    verified: "● VERIFICADO",
    provisional: "○ PROVISIONAL",
    trackTitle: "CÓMO SEGUIMOS LAS ACTUALIZACIONES",
    trackBody:
      "Las ventanas de eventos se leen del calendario oficial de eventos de Roblox, así que las fechas son firmes. Los detalles del cliente — tasas exactas de drop, recetas de evolución, topes de recompensas — se marcan como provisionales hasta confirmarse en el juego o por el desarrollador, porque los resúmenes tempranos de parches cambian en los primeros días tras un lanzamiento.",
    cross: {
      before: "Una actualización nueva suele traer códigos nuevos — revisa la lista de ",
      links: [
        { label: "códigos activos", path: "/" },
        { label: "ranking de tiers", path: "/tier-list/" },
      ],
      between: [" y luego mira dónde caen las nuevas unidades en el "],
      after: ".",
    },
  },
  pt: {
    metaTitle: "Atualizações de Anime Expeditions — Notas de Patch e Janelas de Eventos",
    metaDescription:
      "Todas as atualizações e janelas de eventos de Anime Expeditions, da mais nova à mais antiga: unidades novas, modos limitados como Villain Invasion, cosméticos e correções. Datas do calendário oficial do Roblox.",
    h1: "ATUALIZAÇÕES DE ANIME EXPEDITIONS",
    intro:
      "Cada atualização e janela de evento, da mais nova à mais antiga — unidades novas, modos limitados, cosméticos e correções. Mapas de evento como Villain Invasion são por tempo limitado, então confira a janela antes de planejar com eles.",
    stamp: "ATUALIZADO",
    verified: "● VERIFICADO",
    provisional: "○ PROVISÓRIO",
    trackTitle: "COMO ACOMPANHAMOS AS ATUALIZAÇÕES",
    trackBody:
      "As janelas de eventos são lidas do calendário oficial de eventos do Roblox, então as datas são firmes. Detalhes do cliente — taxas exatas de drop, receitas de evolução, limites de recompensas — ficam marcados como provisórios até serem confirmados no jogo ou pelo desenvolvedor, porque os resumos de patch mudam nos primeiros dias após o lançamento.",
    cross: {
      before: "Atualização nova geralmente traz códigos novos — confira a lista de ",
      links: [
        { label: "códigos ativos", path: "/" },
        { label: "ranking de tiers", path: "/tier-list/" },
      ],
      between: [" e depois veja onde as novas unidades caem no "],
      after: ".",
    },
  },
  ru: {
    metaTitle: "Обновления Anime Expeditions — Патчноуты и Окна Событий",
    metaDescription:
      "Все обновления и окна событий Anime Expeditions, от новых к старым: новые юниты, ограниченные режимы вроде Villain Invasion, косметика и исправления. Даты из официального расписания Roblox.",
    h1: "ОБНОВЛЕНИЯ ANIME EXPEDITIONS",
    intro:
      "Каждое обновление и окно события, от новых к старым — новые юниты, ограниченные режимы, косметика и исправления. Ивентовые карты вроде Villain Invasion временные, так что проверяйте окно, прежде чем строить планы.",
    stamp: "ОБНОВЛЕНО",
    verified: "● ПОДТВЕРЖДЕНО",
    provisional: "○ ПРЕДВАРИТЕЛЬНО",
    trackTitle: "КАК МЫ ОТСЛЕЖИВАЕМ ОБНОВЛЕНИЯ",
    trackBody:
      "Окна событий читаются из официального расписания событий Roblox, поэтому даты твёрдые. Клиентские детали — точные шансы дропа, рецепты эволюций, лимиты наград — помечены предварительными, пока не подтвердятся в игре или разработчиком: ранние сводки патчей меняются в первые дни после релиза.",
    cross: {
      before: "Новое обновление обычно значит новые коды — проверьте список ",
      links: [
        { label: "рабочих кодов", path: "/" },
        { label: "тир-лист", path: "/tier-list/" },
      ],
      between: [", а потом посмотрите, где новые юниты в "],
      after: ".",
    },
  },
};

export const gameModesPage: Loc<GameModesStrings> = {
  en: {
    metaTitle: "Anime Expeditions Game Modes — Story, Expeditions, Raids & Events",
    metaDescription:
      "Every Anime Expeditions game mode explained: Story, Expeditions (level 20), Raids (level 25), Co-op, and limited event modes like Villain Invasion — with unlock levels.",
    h1: "ANIME EXPEDITIONS GAME MODES",
    intro:
      "Every mode, what it is, and when it unlocks — the permanent progression track plus the limited event modes that rotate in with updates.",
    stamp: "UPDATED",
    limitedTag: "LIMITED · ",
    unlocksTag: "UNLOCKS · ",
    faqTitle: "QUESTIONS PEOPLE ASK",
    faq: [
      {
        q: "What game modes are in Anime Expeditions?",
        a: "The permanent modes are Story, Expeditions (unlocks at level 20), Raids (level 25), and Co-op. On top of those, updates add limited event modes — Update 2.0 brought Tidal Siege, Fishing, and Portals.",
      },
      {
        q: "When do Expeditions and Raids unlock?",
        a: "Expeditions unlocks at player level 20 and Raids at level 25. Until then, Story is your progression track — it's also the safest place to test a team before you take it into the harder modes.",
      },
      {
        q: "Are event modes permanent?",
        a: "No. Modes like Tidal Siege (Update 2.0) and Villain Invasion (Update 0.5) are tied to their update's event window. Limited modes rotate out with the update, so check the updates page for the current window before planning around them.",
      },
    ],
    cross: {
      before: "Pick your mode, then build for it — the ",
      links: [
        { label: "tier list", path: "/tier-list/" },
        { label: "beginner guide", path: "/beginner-guide/" },
      ],
      between: [" flags which units carry Raids, and the "],
      after: " covers the first-hour Story route.",
    },
  },
  es: {
    metaTitle: "Modos de Juego de Anime Expeditions — Story, Expeditions, Raids y Eventos",
    metaDescription:
      "Todos los modos de juego de Anime Expeditions explicados: Story, Expeditions (nivel 20), Raids (nivel 25), Co-op y modos de evento limitados como Villain Invasion — con niveles de desbloqueo.",
    h1: "MODOS DE JUEGO DE ANIME EXPEDITIONS",
    intro:
      "Cada modo, qué es y cuándo se desbloquea — la ruta de progresión permanente más los modos de evento limitados que rotan con las actualizaciones.",
    stamp: "ACTUALIZADO",
    limitedTag: "LIMITADO · ",
    unlocksTag: "DESBLOQUEA · ",
    faqTitle: "PREGUNTAS FRECUENTES",
    faq: [
      {
        q: "¿Qué modos de juego hay en Anime Expeditions?",
        a: "Los modos permanentes son Story, Expeditions (se desbloquea en nivel 20), Raids (nivel 25) y Co-op. Encima de esos, las actualizaciones añaden modos de evento limitados — Update 2.0 trajo Tidal Siege, Fishing y Portals.",
      },
      {
        q: "¿Cuándo se desbloquean Expeditions y Raids?",
        a: "Expeditions se desbloquea en nivel 20 de jugador y Raids en nivel 25. Hasta entonces, Story es tu ruta de progresión — y el lugar más seguro para probar un equipo antes de llevarlo a los modos difíciles.",
      },
      {
        q: "¿Los modos de evento son permanentes?",
        a: "No. Modos como Tidal Siege (Update 2.0) y Villain Invasion (Update 0.5) están ligados a la ventana de evento de su actualización. Los modos limitados rotan con la actualización, así que revisa la página de actualizaciones para la ventana actual antes de planear con ellos.",
      },
    ],
    cross: {
      before: "Elige tu modo y arma para él — el ",
      links: [
        { label: "ranking de tiers", path: "/tier-list/" },
        { label: "guía para principiantes", path: "/beginner-guide/" },
      ],
      between: [" marca qué unidades cargan en Raids, y la "],
      after: " cubre la ruta de Story de la primera hora.",
    },
  },
  pt: {
    metaTitle: "Modos de Jogo de Anime Expeditions — Story, Expeditions, Raids e Eventos",
    metaDescription:
      "Todos os modos de jogo de Anime Expeditions explicados: Story, Expeditions (nível 20), Raids (nível 25), Co-op e modos de evento limitados como Villain Invasion — com níveis de desbloqueio.",
    h1: "MODOS DE JOGO DE ANIME EXPEDITIONS",
    intro:
      "Cada modo, o que é e quando desbloqueia — a rota de progressão permanente mais os modos de evento limitados que entram com as atualizações.",
    stamp: "ATUALIZADO",
    limitedTag: "LIMITADO · ",
    unlocksTag: "DESBLOQUEIA · ",
    faqTitle: "PERGUNTAS FREQUENTES",
    faq: [
      {
        q: "Quais modos de jogo existem em Anime Expeditions?",
        a: "Os modos permanentes são Story, Expeditions (desbloqueia no nível 20), Raids (nível 25) e Co-op. Além deles, atualizações adicionam modos de evento limitados — a Update 2.0 trouxe Tidal Siege, Fishing e Portals.",
      },
      {
        q: "Quando Expeditions e Raids desbloqueiam?",
        a: "Expeditions desbloqueia no nível 20 de jogador e Raids no nível 25. Até lá, Story é sua rota de progressão — e o lugar mais seguro para testar um time antes de levá-lo aos modos difíceis.",
      },
      {
        q: "Os modos de evento são permanentes?",
        a: "Não. Modos como Tidal Siege (Update 2.0) e Villain Invasion (Update 0.5) ficam ligados à janela de evento da sua atualização. Modos limitados saem com a atualização, então confira a página de atualizações para a janela atual antes de planejar com eles.",
      },
    ],
    cross: {
      before: "Escolha seu modo e monte para ele — o ",
      links: [
        { label: "ranking de tiers", path: "/tier-list/" },
        { label: "guia para iniciantes", path: "/beginner-guide/" },
      ],
      between: [" marca quais unidades carregam em Raids, e o "],
      after: " cobre a rota de Story da primeira hora.",
    },
  },
  ru: {
    metaTitle: "Режимы Anime Expeditions — Story, Expeditions, Raids и События",
    metaDescription:
      "Все режимы Anime Expeditions: Story, Expeditions (уровень 20), Raids (уровень 25), Co-op и ограниченные ивентовые режимы вроде Villain Invasion — с уровнями открытия.",
    h1: "РЕЖИМЫ ANIME EXPEDITIONS",
    intro:
      "Каждый режим, что он из себя представляет и когда открывается — постоянная линия прогресса плюс ограниченные ивентовые режимы, приходящие с обновлениями.",
    stamp: "ОБНОВЛЕНО",
    limitedTag: "ЛИМИТ · ",
    unlocksTag: "ОТКРЫТИЕ · ",
    faqTitle: "ВОПРОСЫ И ОТВЕТЫ",
    faq: [
      {
        q: "Какие режимы есть в Anime Expeditions?",
        a: "Постоянные режимы — Story, Expeditions (открывается на 20 уровне), Raids (25 уровень) и Co-op. Сверх них обновления добавляют ограниченные ивентовые режимы — Update 2.0 принесла Tidal Siege, Fishing и Portals.",
      },
      {
        q: "Когда открываются Expeditions и Raids?",
        a: "Expeditions — на 20 уровне игрока, Raids — на 25. До этого Story — ваша линия прогресса и самое безопасное место проверить команду перед сложными режимами.",
      },
      {
        q: "Ивентовые режимы постоянные?",
        a: "Нет. Режимы вроде Tidal Siege (Update 2.0) и Villain Invasion (Update 0.5) привязаны к окну события своего обновления. Лимитные режимы уходят вместе с обновлением — проверяйте актуальное окно на странице обновлений, прежде чем строить планы.",
      },
    ],
    cross: {
      before: "Выберите режим и соберите команду под него — ",
      links: [
        { label: "тир-лист", path: "/tier-list/" },
        { label: "гайд для новичков", path: "/beginner-guide/" },
      ],
      between: [" показывает, какие юниты тащат Raids, а "],
      after: " описывает маршрут Story на первый час.",
    },
  },
};

export const aboutPage: Loc<AboutStrings> = {
  en: {
    metaTitle: "About — Anime Expeditions Guide",
    metaDescription:
      "An independent, fan-made Anime Expeditions guide. How we verify codes, how tier rankings are decided, and what's confirmed versus reported.",
    h1: "ABOUT THIS SITE",
    intro:
      "An independent, fan-made guide to Anime Expeditions on Roblox — built to get you a working answer fast, and honest about what's verified versus still being tested.",
    whatTitle: "WHAT THIS IS",
    whatBody:
      "This site tracks codes, unit rankings, evolutions, traits, and game modes for Anime Expeditions. It's a small, independent project — not an official source, not run by the developer, and not affiliated with Roblox. The goal is a fast, no-clutter reference: the working code you need, the unit that actually carries, the evolution material you're missing — without ten paragraphs of filler in the way.",
    verifyTitle: "HOW WE VERIFY",
    verifyPre:
      "Codes are checked against multiple live community sources and the in-game redemption box before they're listed as working, and re-checked as new ones drop. The codes list was last verified on ",
    verifyPost:
      ". Anything we can't confirm first-hand — provisional patch details, reported drop rates, unconfirmed reroll pity — is labeled as reported rather than stated as fact. When the game updates and old data goes stale, the honest move is to mark it, not to pretend it's current.",
    stanceTitle: "TIER RANKINGS & STANCE",
    stanceBody:
      "Tier placements reflect current community consensus for the live meta, cross-checked across sources rather than one person's opinion. Rankings shift with every balance patch and new banner, so treat them as a snapshot with a date on it — not a permanent verdict. Where a unit is promising but untested, it's flagged as such instead of being ranked on hype.",
    linksTitle: "OFFICIAL LINKS",
    linksBody:
      "For anything authoritative — the current banner, live events, and the real redemption box — go to the game itself:",
    playCta: "▶ PLAY ON ROBLOX",
    cross: {
      before: "Start with the ",
      links: [
        { label: "working codes", path: "/" },
        { label: "beginner guide", path: "/beginner-guide/" },
      ],
      between: [", then the "],
      after: ".",
    },
  },
  es: {
    metaTitle: "Acerca de — Guía de Anime Expeditions",
    metaDescription:
      "Una guía independiente hecha por fans de Anime Expeditions. Cómo verificamos los códigos, cómo se decide el ranking de tiers y qué está confirmado versus reportado.",
    h1: "SOBRE ESTE SITIO",
    intro:
      "Una guía independiente hecha por fans de Anime Expeditions en Roblox — hecha para darte una respuesta útil rápido, y honesta sobre qué está verificado y qué aún se está probando.",
    whatTitle: "QUÉ ES ESTO",
    whatBody:
      "Este sitio sigue códigos, rankings de unidades, evoluciones, traits y modos de juego de Anime Expeditions. Es un proyecto pequeño e independiente — no es una fuente oficial, no lo maneja el desarrollador y no está afiliado a Roblox. El objetivo es una referencia rápida y sin relleno: el código que funciona que necesitas, la unidad que de verdad carga, el material de evolución que te falta — sin diez párrafos de paja en medio.",
    verifyTitle: "CÓMO VERIFICAMOS",
    verifyPre:
      "Los códigos se comprueban contra varias fuentes activas de la comunidad y la caja de canje en el juego antes de listarlos como activos, y se vuelven a revisar cuando salen nuevos. La lista de códigos se verificó por última vez el ",
    verifyPost:
      ". Todo lo que no podemos confirmar de primera mano — detalles provisionales de parches, tasas de drop reportadas, pity de reroll sin confirmar — se etiqueta como reportado en vez de afirmarse como hecho. Cuando el juego se actualiza y los datos viejos quedan obsoletos, lo honesto es marcarlo, no fingir que siguen vigentes.",
    stanceTitle: "RANKING DE TIERS Y POSTURA",
    stanceBody:
      "Las posiciones de tier reflejan el consenso actual de la comunidad para el meta en vivo, cruzado entre fuentes en vez de la opinión de una sola persona. Los rankings cambian con cada parche de balance y cada banner nuevo, así que trátalos como una foto con fecha — no como un veredicto permanente. Cuando una unidad es prometedora pero no está probada, se señala como tal en vez de rankearla por hype.",
    linksTitle: "ENLACES OFICIALES",
    linksBody:
      "Para cualquier cosa oficial — el banner actual, los eventos en vivo y la caja de canje real — ve al juego mismo:",
    playCta: "▶ JUGAR EN ROBLOX",
    cross: {
      before: "Empieza con los ",
      links: [
        { label: "códigos activos", path: "/" },
        { label: "guía para principiantes", path: "/beginner-guide/" },
      ],
      between: [", luego la "],
      after: ".",
    },
  },
  pt: {
    metaTitle: "Sobre — Guia de Anime Expeditions",
    metaDescription:
      "Um guia independente feito por fãs de Anime Expeditions. Como verificamos os códigos, como o ranking de tiers é decidido e o que está confirmado versus reportado.",
    h1: "SOBRE ESTE SITE",
    intro:
      "Um guia independente feito por fãs de Anime Expeditions no Roblox — feito para te dar uma resposta útil rápido, e honesto sobre o que está verificado e o que ainda está sendo testado.",
    whatTitle: "O QUE É ISTO",
    whatBody:
      "Este site acompanha códigos, rankings de unidades, evoluções, traits e modos de jogo de Anime Expeditions. É um projeto pequeno e independente — não é uma fonte oficial, não é mantido pelo desenvolvedor e não é afiliado ao Roblox. O objetivo é uma referência rápida e sem bagunça: o código que funciona que você precisa, a unidade que realmente carrega, o material de evolução que está faltando — sem dez parágrafos de enrolação no caminho.",
    verifyTitle: "COMO VERIFICAMOS",
    verifyPre:
      "Os códigos são checados contra várias fontes ativas da comunidade e a caixa de resgate no jogo antes de serem listados como ativos, e são rechecados quando saem novos. A lista de códigos foi verificada pela última vez em ",
    verifyPost:
      ". Tudo o que não conseguimos confirmar em primeira mão — detalhes provisórios de patches, taxas de drop reportadas, pity de reroll não confirmado — é marcado como reportado em vez de afirmado como fato. Quando o jogo atualiza e os dados antigos ficam obsoletos, o honesto é sinalizar, não fingir que estão vigentes.",
    stanceTitle: "RANKING DE TIERS E POSTURA",
    stanceBody:
      "As posições de tier refletem o consenso atual da comunidade para o meta ao vivo, cruzado entre fontes em vez da opinião de uma pessoa só. Os rankings mudam a cada patch de balanceamento e cada banner novo, então trate-os como uma foto com data — não como um veredito permanente. Quando uma unidade é promissora mas não testada, ela é sinalizada como tal em vez de rankeada no hype.",
    linksTitle: "LINKS OFICIAIS",
    linksBody:
      "Para qualquer coisa oficial — o banner atual, os eventos ao vivo e a caixa de resgate real — vá ao próprio jogo:",
    playCta: "▶ JOGAR NO ROBLOX",
    cross: {
      before: "Comece com os ",
      links: [
        { label: "códigos ativos", path: "/" },
        { label: "guia para iniciantes", path: "/beginner-guide/" },
      ],
      between: [", depois o "],
      after: ".",
    },
  },
  ru: {
    metaTitle: "О сайте — Гайд по Anime Expeditions",
    metaDescription:
      "Независимый фанатский гайд по Anime Expeditions. Как мы проверяем коды, как решается тир-рейтинг и что подтверждено, а что лишь по данным сообщества.",
    h1: "О ЭТОМ САЙТЕ",
    intro:
      "Независимый фанатский гайд по Anime Expeditions в Roblox — создан, чтобы быстро дать рабочий ответ, и честно говорит, что проверено, а что ещё тестируется.",
    whatTitle: "ЧТО ЭТО ТАКОЕ",
    whatBody:
      "Этот сайт отслеживает коды, рейтинги юнитов, эволюции, трейты и режимы Anime Expeditions. Это маленький независимый проект — не официальный источник, не от разработчика и не аффилирован с Roblox. Цель — быстрый справочник без мусора: рабочий код, юнит, который реально тащит, недостающий материал эволюции — без десяти абзацев воды по пути.",
    verifyTitle: "КАК МЫ ПРОВЕРЯЕМ",
    verifyPre:
      "Коды проверяются по нескольким живым источникам сообщества и по полю ввода в игре, прежде чем попасть в список рабочих, и перепроверяются при выходе новых. Список кодов в последний раз проверен ",
    verifyPost:
      ". Всё, что мы не можем подтвердить лично — предварительные детали патчей, шансы дропа от сообщества, неподтверждённый pity, — помечается как данные сообщества, а не как факт. Когда игра обновляется и старые данные устаревают, честно это отметить, а не делать вид, что они актуальны.",
    stanceTitle: "ТИР-РЕЙТИНГ И ПОЗИЦИЯ",
    stanceBody:
      "Позиции в тирах отражают текущий консенсус сообщества по живой мете, сверенный между источниками, а не чьё-то мнение. Рейтинги меняются с каждым балансным патчем и новым баннером, так что воспринимайте их как снимок с датой, а не вечный вердикт. Если юнит многообещающий, но не проверен, мы так и помечаем, а не ранжируем по хайпу.",
    linksTitle: "ОФИЦИАЛЬНЫЕ ССЫЛКИ",
    linksBody:
      "За чем-либо официальным — текущий баннер, живые события и настоящее поле ввода кодов — идите в саму игру:",
    playCta: "▶ ИГРАТЬ В ROBLOX",
    cross: {
      before: "Начните с ",
      links: [
        { label: "рабочих кодов", path: "/" },
        { label: "гайда для новичков", path: "/beginner-guide/" },
      ],
      between: [", затем "],
      after: ".",
    },
  },
};

export const mapsPage: Loc<MapsStrings> = {
  en: {
    metaTitle: "Anime Expeditions Maps & Drops — Story Map Equipment Guide",
    metaDescription:
      "All 5 Anime Expeditions Story maps and their drops: food, standard equipment, and the unit equipment each evolved carry needs. Farm the right map for the piece you want.",
    h1: "ANIME EXPEDITIONS MAPS & DROPS",
    intro:
      "The five Story maps in order, and what each one drops — food, standard equipment, and the unit equipment that ties to a specific evolved unit. Farm the map that holds the piece you actually need.",
    stamp: "REPORTED · VERIFIED",
    unitGearFor: "Unit gear for ",
    typeLabels: { food: "FOOD", standard: "STANDARD EQUIPMENT", unit: "UNIT EQUIPMENT" },
    howTitle: "HOW TO USE THIS",
    howBody:
      "Unit equipment is map-locked: each evolved carry pulls its signature gear from one specific Story map, so there's no point grinding the wrong stage. Standard equipment and food drop more broadly. These are reported associations, not guaranteed drop rates — confirm the drop in the live game panel before you commit a long farm.",
    cross: {
      before: "Work out which units are worth gearing on the ",
      links: [
        { label: "tier list", path: "/tier-list/" },
        { label: "evolution planner", path: "/evolution-planner/" },
        { label: "gamepass", path: "/gamepasses/" },
      ],
      between: [", plan their evolutions in the ", ", then farm the right map above. Weighing a "],
      after: " instead? See what each one really does first.",
    },
  },
  es: {
    metaTitle: "Mapas y Drops de Anime Expeditions — Guía de Equipamiento por Mapa",
    metaDescription:
      "Los 5 mapas de Story de Anime Expeditions y sus drops: comida, equipamiento estándar y el equipamiento de unidad que necesita cada carry evolucionado. Farmea el mapa correcto para la pieza que quieres.",
    h1: "MAPAS Y DROPS DE ANIME EXPEDITIONS",
    intro:
      "Los cinco mapas de Story en orden y qué dropea cada uno — comida, equipamiento estándar y el equipamiento de unidad ligado a una unidad evolucionada concreta. Farmea el mapa que tiene la pieza que de verdad necesitas.",
    stamp: "REPORTADO · VERIFICADO",
    unitGearFor: "Equipo de unidad para ",
    typeLabels: { food: "COMIDA", standard: "EQUIPAMIENTO ESTÁNDAR", unit: "EQUIPAMIENTO DE UNIDAD" },
    howTitle: "CÓMO USAR ESTO",
    howBody:
      "El equipamiento de unidad está ligado a un mapa: cada carry evolucionado saca su equipo insignia de un mapa de Story concreto, así que no tiene sentido grindear el escenario equivocado. El equipamiento estándar y la comida dropean más ampliamente. Son asociaciones reportadas, no tasas de drop garantizadas — confirma el drop en el panel del juego antes de comprometer un farm largo.",
    cross: {
      before: "Decide qué unidades vale la pena equipar en el ",
      links: [
        { label: "ranking de tiers", path: "/tier-list/" },
        { label: "planificador de evolución", path: "/evolution-planner/" },
        { label: "gamepass", path: "/gamepasses/" },
      ],
      between: [", planea sus evoluciones en el ", " y luego farmea el mapa correcto arriba. ¿Pensando en un "],
      after: "? Mira primero qué hace cada uno de verdad.",
    },
  },
  pt: {
    metaTitle: "Mapas e Drops de Anime Expeditions — Guia de Equipamento por Mapa",
    metaDescription:
      "Os 5 mapas de Story de Anime Expeditions e seus drops: comida, equipamento padrão e o equipamento de unidade que cada carry evoluído precisa. FARM o mapa certo para a peça que você quer.",
    h1: "MAPAS E DROPS DE ANIME EXPEDITIONS",
    intro:
      "Os cinco mapas de Story em ordem e o que cada um dropa — comida, equipamento padrão e o equipamento de unidade ligado a uma unidade evoluída específica. Farme o mapa que tem a peça que você realmente precisa.",
    stamp: "REPORTADO · VERIFICADO",
    unitGearFor: "Equipamento de unidade para ",
    typeLabels: { food: "COMIDA", standard: "EQUIPAMENTO PADRÃO", unit: "EQUIPAMENTO DE UNIDADE" },
    howTitle: "COMO USAR ISTO",
    howBody:
      "O equipamento de unidade é travado por mapa: cada carry evoluído tira seu equipamento assinatura de um mapa de Story específico, então não faz sentido grindar a fase errada. Equipamento padrão e comida dropam mais amplamente. São associações reportadas, não taxas de drop garantidas — confirme o drop no painel do jogo antes de comprometer um farm longo.",
    cross: {
      before: "Decida quais unidades valem equipar no ",
      links: [
        { label: "ranking de tiers", path: "/tier-list/" },
        { label: "planejador de evolução", path: "/evolution-planner/" },
        { label: "gamepass", path: "/gamepasses/" },
      ],
      between: [", planeje as evoluções no ", " e depois farme o mapa certo acima. Pensando em um "],
      after: "? Veja primeiro o que cada um realmente faz.",
    },
  },
  ru: {
    metaTitle: "Карты и Дроп Anime Expeditions — Гайд по Снаряжению с Карт",
    metaDescription:
      "Все 5 карт Story в Anime Expeditions и их дроп: еда, стандартное снаряжение и снаряжение юнитов для каждого эволвнутого керри. Фармите правильную карту под нужную вещь.",
    h1: "КАРТЫ И ДРОП ANIME EXPEDITIONS",
    intro:
      "Пять карт Story по порядку и что падает с каждой — еда, стандартное снаряжение и снаряжение юнитов, привязанное к конкретной эволюционированной форме. Фармите карту, где лежит именно нужная вам вещь.",
    stamp: "ПО ДАННЫМ СООБЩЕСТВА · ПРОВЕРЕНО",
    unitGearFor: "Снаряжение юнита для ",
    typeLabels: { food: "ЕДА", standard: "СТАНДАРТНОЕ СНАРЯЖЕНИЕ", unit: "СНАРЯЖЕНИЕ ЮНИТА" },
    howTitle: "КАК ЭТИМ ПОЛЬЗОВАТЬСЯ",
    howBody:
      "Снаряжение юнитов привязано к карте: каждый эволвнутый керри добывает своё фирменное снаряжение на одной конкретной карте Story, так что нет смысла гриндить не ту стадию. Стандартное снаряжение и еда падают шире. Это ассоциации от сообщества, а не гарантированные шансы дропа — подтвердите дроп в панели игры, прежде чем затевать долгий фарм.",
    cross: {
      before: "Решите, каких юнитов стоит снаряжать, по ",
      links: [
        { label: "тир-листу", path: "/tier-list/" },
        { label: "планировщике эволюций", path: "/evolution-planner/" },
        { label: "геймпассе", path: "/gamepasses/" },
      ],
      between: [", спланируйте эволюции в ", " и фармите правильную карту выше. Думаете о "],
      after: "? Сначала посмотрите, что каждый реально делает.",
    },
  },
};

export const gamepassesPage: Loc<GamepassesStrings> = {
  en: {
    metaTitle: "Anime Expeditions Gamepasses — Prices & What They Do",
    metaDescription:
      "Every Anime Expeditions gamepass with its verified Robux price and an honest note on what it reportedly does — VIP, Shiny Hunter, and Display All Units.",
    h1: "ANIME EXPEDITIONS GAMEPASSES",
    intro:
      "Every gamepass with its verified price — and an honest note on what it reportedly does, since the official descriptions are blank. Prices are confirmed; benefits are not.",
    stamp: "PRICES VERIFIED",
    reportedTag: "REPORTED · ",
    confirmedYes: "● OFFICIAL BENEFIT PUBLISHED",
    confirmedNo: "○ OFFICIAL BENEFIT: NOT PUBLISHED",
    faqTitle: "QUESTIONS PEOPLE ASK",
    faq: [
      {
        q: "Are the Anime Expeditions gamepasses worth it?",
        a: "Honest answer: the official gamepass descriptions are empty, so nobody can promise exactly what you're buying. Prices and IDs are verified, but the effects below are community guesses. Treat any gamepass as a support-the-developer purchase first and a gameplay boost second, until the benefits are confirmed in-game.",
      },
      {
        q: "What does the Shiny Hunter pass actually do?",
        a: "The name and community guides link it to collecting Shiny units, but the official API publishes no Shiny-rate multiplier, base rate, or stacking rule. At 999 R$ it's the most expensive pass, so don't buy it expecting a confirmed drop-rate boost.",
      },
      {
        q: "Can gamepass prices change?",
        a: "Yes. Regional and managed pricing can change the actual checkout price from the default snapshot shown here (checked July 18, 2026). Always confirm the live price on the Roblox store page before buying.",
      },
    ],
    cta: "▶ CHECK LIVE PRICES ON ROBLOX",
    cross: {
      before: "Before spending Robux, grab the free stuff first — the ",
      links: [{ label: "working codes", path: "/" }],
      between: [],
      after: " hand out Trait Crystals and rerolls at no cost.",
    },
  },
  es: {
    metaTitle: "Gamepasses de Anime Expeditions — Precios y Qué Hacen",
    metaDescription:
      "Cada gamepass de Anime Expeditions con su precio verificado en Robux y una nota honesta de lo que supuestamente hace — VIP, Shiny Hunter y Display All Units.",
    h1: "GAMEPASSES DE ANIME EXPEDITIONS",
    intro:
      "Cada gamepass con su precio verificado — y una nota honesta de lo que supuestamente hace, ya que las descripciones oficiales están en blanco. Los precios están confirmados; los beneficios no.",
    stamp: "PRECIOS VERIFICADOS",
    reportedTag: "REPORTADO · ",
    confirmedYes: "● BENEFICIO OFICIAL PUBLICADO",
    confirmedNo: "○ BENEFICIO OFICIAL: NO PUBLICADO",
    faqTitle: "PREGUNTAS FRECUENTES",
    faq: [
      {
        q: "¿Valen la pena los gamepasses de Anime Expeditions?",
        a: "Respuesta honesta: las descripciones oficiales de los gamepasses están vacías, así que nadie puede prometer qué compras exactamente. Los precios e IDs están verificados, pero los efectos de abajo son suposiciones de la comunidad. Trata cualquier gamepass como una compra para apoyar al desarrollador primero y una ventaja de juego después, hasta que los beneficios se confirmen en el juego.",
      },
      {
        q: "¿Qué hace realmente el pase Shiny Hunter?",
        a: "El nombre y las guías de la comunidad lo ligan a coleccionar unidades Shiny, pero la API oficial no publica multiplicador de tasa Shiny, tasa base ni regla de acumulación. A 999 R$ es el pase más caro, así que no lo compres esperando una mejora de drop confirmada.",
      },
      {
        q: "¿Pueden cambiar los precios de los gamepasses?",
        a: "Sí. Los precios regionales y gestionados pueden cambiar el precio final respecto a la captura mostrada aquí (revisado el 18 de julio de 2026). Confirma siempre el precio en vivo en la página de la tienda de Roblox antes de comprar.",
      },
    ],
    cta: "▶ VER PRECIOS EN VIVO EN ROBLOX",
    cross: {
      before: "Antes de gastar Robux, consigue primero lo gratis — los ",
      links: [{ label: "códigos activos", path: "/" }],
      between: [],
      after: " regalan Trait Crystals y rerolls sin costo.",
    },
  },
  pt: {
    metaTitle: "Gamepasses de Anime Expeditions — Preços e o Que Fazem",
    metaDescription:
      "Cada gamepass de Anime Expeditions com seu preço verificado em Robux e uma nota honesta sobre o que supostamente faz — VIP, Shiny Hunter e Display All Units.",
    h1: "GAMEPASSES DE ANIME EXPEDITIONS",
    intro:
      "Cada gamepass com seu preço verificado — e uma nota honesta sobre o que supostamente faz, já que as descrições oficiais estão em branco. Os preços estão confirmados; os benefícios não.",
    stamp: "PREÇOS VERIFICADOS",
    reportedTag: "REPORTADO · ",
    confirmedYes: "● BENEFÍCIO OFICIAL PUBLICADO",
    confirmedNo: "○ BENEFÍCIO OFICIAL: NÃO PUBLICADO",
    faqTitle: "PERGUNTAS FREQUENTES",
    faq: [
      {
        q: "Os gamepasses de Anime Expeditions valem a pena?",
        a: "Resposta honesta: as descrições oficiais dos gamepasses estão vazias, então ninguém pode prometer exatamente o que você está comprando. Preços e IDs estão verificados, mas os efeitos abaixo são suposições da comunidade. Trate qualquer gamepass como uma compra para apoiar o desenvolvedor primeiro e uma vantagem de jogo depois, até os benefícios serem confirmados no jogo.",
      },
      {
        q: "O que o passe Shiny Hunter realmente faz?",
        a: "O nome e os guias da comunidade o ligam a colecionar unidades Shiny, mas a API oficial não publica multiplicador de taxa Shiny, taxa base nem regra de acúmulo. A 999 R$ é o passe mais caro, então não compre esperando um bônus de drop confirmado.",
      },
      {
        q: "Os preços dos gamepasses podem mudar?",
        a: "Sim. Preços regionais e gerenciados podem mudar o valor final em relação à captura mostrada aqui (verificado em 18 de julho de 2026). Sempre confirme o preço ao vivo na página da loja do Roblox antes de comprar.",
      },
    ],
    cta: "▶ VER PREÇOS AO VIVO NO ROBLOX",
    cross: {
      before: "Antes de gastar Robux, pegue primeiro o que é grátis — os ",
      links: [{ label: "códigos ativos", path: "/" }],
      between: [],
      after: " dão Trait Crystals e rerolls sem custo.",
    },
  },
  ru: {
    metaTitle: "Геймпассы Anime Expeditions — Цены и Что Они Дают",
    metaDescription:
      "Каждый геймпасс Anime Expeditions с проверенной ценой в Robux и честной пометкой о том, что он предположительно даёт — VIP, Shiny Hunter и Display All Units.",
    h1: "ГЕЙМПАССЫ ANIME EXPEDITIONS",
    intro:
      "Каждый геймпасс с проверенной ценой — и честной пометкой о предполагаемом эффекте, потому что официальные описания пустые. Цены подтверждены; бонусы — нет.",
    stamp: "ЦЕНЫ ПРОВЕРЕНЫ",
    reportedTag: "ПО ДАННЫМ СООБЩЕСТВА · ",
    confirmedYes: "● ОФИЦИАЛЬНЫЙ БОНУС ОПУБЛИКОВАН",
    confirmedNo: "○ ОФИЦИАЛЬНЫЙ БОНУС: НЕ ОПУБЛИКОВАН",
    faqTitle: "ВОПРОСЫ И ОТВЕТЫ",
    faq: [
      {
        q: "Стоят ли геймпассы Anime Expeditions своих денег?",
        a: "Честный ответ: официальные описания геймпассов пустые, так что никто не может пообещать, что именно вы покупаете. Цены и ID проверены, но эффекты ниже — предположения сообщества. Воспринимайте любой геймпасс как поддержку разработчика в первую очередь и как игровой бонус во вторую, пока бонусы не подтвердятся в игре.",
      },
      {
        q: "Что на самом деле даёт пасс Shiny Hunter?",
        a: "Название и гайды сообщества связывают его с коллекционированием Shiny-юнитов, но официальный API не публикует множитель шанса Shiny, базовый шанс или правило стака. За 999 R$ это самый дорогой пасс — не покупайте его в расчёте на подтверждённый бонус к дропу.",
      },
      {
        q: "Могут ли цены геймпассов меняться?",
        a: "Да. Региональные и управляемые цены могут изменить итоговую сумму относительно показанного здесь снимка (проверено 18 июля 2026). Всегда сверяйте живую цену на странице магазина Roblox перед покупкой.",
      },
    ],
    cta: "▶ СМОТРЕТЬ АКТУАЛЬНЫЕ ЦЕНЫ В ROBLOX",
    cross: {
      before: "Прежде чем тратить Robux, сначала заберите бесплатное — ",
      links: [{ label: "рабочие коды", path: "/" }],
      between: [],
      after: " раздают Trait Crystals и рероллы бесплатно.",
    },
  },
};
