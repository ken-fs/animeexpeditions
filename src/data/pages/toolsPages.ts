// Locale strings for the interactive tool pages: team-builder, daily-checklist.
// Role-matching logic stays on the English `role` field (units.ts); only the
// display labels are localized.

import type { CrossText, Loc } from "./types";

export interface TeamBuilderStrings {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  stamp: string;
  howTitle: string;
  howSteps: string[];
  cross: CrossText;
  // TeamBuilder component
  yourTeam: string;
  emptyState: string;
  roleCoverage: string;
  roleLabels: { dps: string; support: string; control: string; aoe: string };
  gapPre: string;
  gapBody: string; // after the role list
  balanced: string;
  watchNote: (n: number) => string;
  sTierNote: (n: number) => string;
  clearTeam: string;
  tierSuffix: string;
}

export interface ChecklistStrings {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  stamp: string;
  whyTitle: string;
  whyBody: string;
  cross: CrossText;
  // DailyChecklist component
  cadenceLabels: { daily: string; weekly: string };
  resetAll: string;
  privacyNote: string;
}

export const teamBuilderPage: Loc<TeamBuilderStrings> = {
  en: {
    metaTitle: "Anime Expeditions Team Builder — Check Your Role Coverage",
    metaDescription:
      "Build an Anime Expeditions team of up to six units and instantly see role coverage gaps — damage, support, and control — plus tier quality. Free, runs in your browser.",
    h1: "ANIME EXPEDITIONS TEAM BUILDER",
    intro:
      "Pick up to six units and see the gaps before a run does. A team is only as good as its weakest role — this flags whether you're missing damage, support, or control, not just whether your units are strong.",
    stamp: "ROSTER DATA",
    howTitle: "HOW TO READ IT",
    howSteps: [
      "Build around one or two S-tier carries, then fill the roles around them — don't stack six damage units.",
      "Watch the role coverage row: a team with no control unit stalls on stages with heavy enemy pressure, however much damage you bring.",
      "Support amplifies your carry's damage — one good support usually beats a third DPS.",
      "Watch-tier picks are unproven. Fine to experiment, risky to build your whole team on.",
    ],
    cross: {
      before: "Not sure who's worth a slot? Check the ",
      links: [
        { label: "tier list", path: "/tier-list/" },
        { label: "unit roster", path: "/units/" },
        { label: "codes", path: "/" },
      ],
      between: [" and the full ", ", then grab "],
      after: " to reroll their traits.",
    },
    yourTeam: "YOUR TEAM",
    emptyState:
      "Pick up to six units. This checks your role coverage — a team with no control or no support fails the harder stages no matter how much raw damage it has.",
    roleCoverage: "ROLE COVERAGE",
    roleLabels: { dps: "Damage", support: "Support", control: "Control", aoe: "AoE / DoT" },
    gapPre: "Gap: ",
    gapBody: ". The harder modes punish a missing role faster than a weaker unit.",
    balanced: "Balanced. Damage, support, and control are all covered.",
    watchNote: (n) => `${n} unproven (Watch-tier) pick${n > 1 ? "s" : ""} — fine to test, risky to rely on.`,
    sTierNote: (n) => `${n} S-tier carries — strong core.`,
    clearTeam: "CLEAR TEAM",
    tierSuffix: "TIER",
  },
  es: {
    metaTitle: "Team Builder de Anime Expeditions — Revisa la Cobertura de Roles",
    metaDescription:
      "Arma un equipo de Anime Expeditions de hasta seis unidades y ve al instante los huecos de roles — daño, soporte y control — además de la calidad de tiers. Gratis, funciona en tu navegador.",
    h1: "TEAM BUILDER DE ANIME EXPEDITIONS",
    intro:
      "Elige hasta seis unidades y ve los huecos antes que la partida. Un equipo vale lo que vale su rol más débil — esto señala si te falta daño, soporte o control, no solo si tus unidades son fuertes.",
    stamp: "DATOS DEL ROSTER",
    howTitle: "CÓMO LEERLO",
    howSteps: [
      "Arma alrededor de uno o dos carries de tier S y luego cubre los roles a su alrededor — no apiles seis unidades de daño.",
      "Mira la fila de cobertura de roles: un equipo sin unidad de control se frena en escenarios con mucha presión enemiga, por mucho daño que lleves.",
      "El soporte amplifica el daño de tu carry — un buen soporte suele ganarle a un tercer DPS.",
      "Las unidades en Watch no están probadas. Vale experimentar, es riesgoso armar todo el equipo sobre ellas.",
    ],
    cross: {
      before: "¿No sabes quién merece un slot? Revisa el ",
      links: [
        { label: "ranking de tiers", path: "/tier-list/" },
        { label: "lista de unidades", path: "/units/" },
        { label: "códigos", path: "/" },
      ],
      between: [" y la ", ", luego consigue "],
      after: " para rerollear sus traits.",
    },
    yourTeam: "TU EQUIPO",
    emptyState:
      "Elige hasta seis unidades. Esto revisa tu cobertura de roles — un equipo sin control o sin soporte falla en los escenarios difíciles por mucho daño bruto que tenga.",
    roleCoverage: "COBERTURA DE ROLES",
    roleLabels: { dps: "Daño", support: "Soporte", control: "Control", aoe: "Área / DoT" },
    gapPre: "Hueco: ",
    gapBody: ". Los modos difíciles castigan un rol faltante más rápido que una unidad débil.",
    balanced: "Equilibrado. Daño, soporte y control están cubiertos.",
    watchNote: (n) => `${n} unidad${n > 1 ? "es" : ""} sin probar (tier Watch) — vale probar, riesgoso depender de ${n > 1 ? "ellas" : "ella"}.`,
    sTierNote: (n) => `${n} carries de tier S — núcleo fuerte.`,
    clearTeam: "LIMPIAR EQUIPO",
    tierSuffix: "TIER",
  },
  pt: {
    metaTitle: "Team Builder de Anime Expeditions — Confira a Cobertura de Papéis",
    metaDescription:
      "Monte um time de Anime Expeditions de até seis unidades e veja na hora os buracos de papéis — dano, suporte e controle — além da qualidade dos tiers. Grátis, roda no seu navegador.",
    h1: "TEAM BUILDER DE ANIME EXPEDITIONS",
    intro:
      "Escolha até seis unidades e veja os buracos antes da partida. Um time vale o quanto vale seu papel mais fraco — isto sinaliza se falta dano, suporte ou controle, não só se suas unidades são fortes.",
    stamp: "DADOS DO ROSTER",
    howTitle: "COMO LER",
    howSteps: [
      "Monte em volta de um ou dois carries de tier S e depois cubra os papéis em volta deles — não empilhe seis unidades de dano.",
      "Olhe a linha de cobertura de papéis: um time sem unidade de controle trava em fases com muita pressão inimiga, por mais dano que leve.",
      "Suporte amplifica o dano do seu carry — um bom suporte geralmente ganha de um terceiro DPS.",
      "Unidades em Watch não estão provadas. Vale experimentar, é arriscado montar o time todo nelas.",
    ],
    cross: {
      before: "Não sabe quem merece um slot? Confira o ",
      links: [
        { label: "ranking de tiers", path: "/tier-list/" },
        { label: "lista de unidades", path: "/units/" },
        { label: "códigos", path: "/" },
      ],
      between: [" e a ", ", depois pegue "],
      after: " para rerollar os traits delas.",
    },
    yourTeam: "SEU TIME",
    emptyState:
      "Escolha até seis unidades. Isto confere sua cobertura de papéis — um time sem controle ou sem suporte falha nas fases difíceis por mais dano bruto que tenha.",
    roleCoverage: "COBERTURA DE PAPÉIS",
    roleLabels: { dps: "Dano", support: "Suporte", control: "Controle", aoe: "Área / DoT" },
    gapPre: "Buraco: ",
    gapBody: ". Os modos difíceis punem um papel faltante mais rápido que uma unidade fraca.",
    balanced: "Equilibrado. Dano, suporte e controle estão cobertos.",
    watchNote: (n) => `${n} unidade${n > 1 ? "s" : ""} não provada${n > 1 ? "s" : ""} (tier Watch) — vale testar, arriscado depender.`,
    sTierNote: (n) => `${n} carries de tier S — núcleo forte.`,
    clearTeam: "LIMPAR TIME",
    tierSuffix: "TIER",
  },
  ru: {
    metaTitle: "Тимбилдер Anime Expeditions — Проверка Покрытия Ролей",
    metaDescription:
      "Соберите команду Anime Expeditions до шести юнитов и сразу увидьте пробелы в ролях — урон, поддержка и контроль — плюс качество тиров. Бесплатно, работает в браузере.",
    h1: "ТИМБИЛДЕР ANIME EXPEDITIONS",
    intro:
      "Выберите до шести юнитов и увидьте пробелы раньше, чем это сделает матч. Команда стоит столько, сколько её самая слабая роль — тут видно, чего не хватает: урона, поддержки или контроля, а не просто сильных юнитов.",
    stamp: "ДАННЫЕ РОСТЕРА",
    howTitle: "КАК ЭТО ЧИТАТЬ",
    howSteps: [
      "Стройте вокруг одного-двух керри тира S, затем закрывайте роли вокруг них — не набирайте шесть юнитов урона.",
      "Смотрите на строку покрытия ролей: команда без контроля встаёт на стадиях с плотным давлением врага, сколько бы урона вы ни принесли.",
      "Поддержка усиливает урон вашего керри — один хороший саппорт обычно лучше третьего DPS.",
      "Юниты тира Watch не проверены. Экспериментировать можно, строить на них всю команду — рискованно.",
    ],
    cross: {
      before: "Не знаете, кто достоин слота? Смотрите ",
      links: [
        { label: "тир-лист", path: "/tier-list/" },
        { label: "список юнитов", path: "/units/" },
        { label: "коды", path: "/" },
      ],
      between: [" и полный ", ", затем заберите "],
      after: " на реролл их трейтов.",
    },
    yourTeam: "ВАША КОМАНДА",
    emptyState:
      "Выберите до шести юнитов. Это проверка покрытия ролей — команда без контроля или поддержки проигрывает сложные стадии, сколько бы у неё ни было чистого урона.",
    roleCoverage: "ПОКРЫТИЕ РОЛЕЙ",
    roleLabels: { dps: "Урон", support: "Поддержка", control: "Контроль", aoe: "AoE / DoT" },
    gapPre: "Пробел: ",
    gapBody: ". Сложные режимы наказывают за отсутствующую роль быстрее, чем за слабого юнита.",
    balanced: "Сбалансировано. Урон, поддержка и контроль закрыты.",
    watchNote: (n) => `Непроверенных юнитов (тир Watch): ${n} — тестировать можно, полагаться рискованно.`,
    sTierNote: (n) => `Керри тира S: ${n} — сильное ядро.`,
    clearTeam: "ОЧИСТИТЬ КОМАНДУ",
    tierSuffix: "ТИР",
  },
};

export const checklistPage: Loc<ChecklistStrings> = {
  en: {
    metaTitle: "Anime Expeditions Daily Checklist — Dailies & Weeklies Tracker",
    metaDescription:
      "A daily and weekly checklist for Anime Expeditions — codes, bounties, Expedition production, raids and more. Saves your progress locally and resets on schedule.",
    h1: "ANIME EXPEDITIONS DAILY CHECKLIST",
    intro:
      "The daily and weekly tasks worth doing every session — codes, bounties, Expedition production, raids. Tick them off and the list remembers your progress and resets itself on schedule.",
    stamp: "ROUTINE",
    whyTitle: "WHY A ROUTINE MATTERS",
    whyBody:
      "Progression in Anime Expeditions is milestone- and resource-gated: the players who pull ahead aren't grinding harder, they're just not leaving free rewards on the table. Codes expire, Expedition production caps out, daily shop deals reset, and event Battle Passes run on a clock. A two-minute pass through this list every session is worth more than an hour of unfocused farming.",
    cross: {
      before: "Starting fresh? The ",
      links: [
        { label: "beginner guide", path: "/beginner-guide/" },
        { label: "today's codes", path: "/" },
      ],
      between: [" covers the first-hour route, and "],
      after: " are the first thing to tick off above.",
    },
    cadenceLabels: { daily: "DAILY · resets at UTC midnight", weekly: "WEEKLY · resets Monday (UTC)" },
    resetAll: "RESET ALL",
    privacyNote:
      "Progress is saved in this browser only — nothing is uploaded. Daily tasks clear at UTC midnight, weekly tasks at the start of the ISO week.",
  },
  es: {
    metaTitle: "Checklist Diaria de Anime Expeditions — Seguimiento de Diarias y Semanales",
    metaDescription:
      "Una checklist diaria y semanal de Anime Expeditions — códigos, bounties, producción de Expedition, raids y más. Guarda tu progreso localmente y se reinicia según lo programado.",
    h1: "CHECKLIST DIARIA DE ANIME EXPEDITIONS",
    intro:
      "Las tareas diarias y semanales que vale la pena hacer en cada sesión — códigos, bounties, producción de Expedition, raids. Márcalas y la lista recuerda tu progreso y se reinicia sola según el calendario.",
    stamp: "RUTINA",
    whyTitle: "POR QUÉ IMPORTA UNA RUTINA",
    whyBody:
      "La progresión en Anime Expeditions está limitada por hitos y recursos: los jugadores que avanzan más no grindean más fuerte, simplemente no dejan recompensas gratis sobre la mesa. Los códigos caducan, la producción de Expedition se llena, las ofertas diarias de la tienda se reinician y los Battle Passes de evento corren contra reloj. Dos minutos con esta lista en cada sesión valen más que una hora de farmeo sin foco.",
    cross: {
      before: "¿Empezando de cero? La ",
      links: [
        { label: "guía para principiantes", path: "/beginner-guide/" },
        { label: "códigos de hoy", path: "/" },
      ],
      between: [" cubre la ruta de la primera hora, y los "],
      after: " son lo primero que marcar arriba.",
    },
    cadenceLabels: { daily: "DIARIA · se reinicia a medianoche UTC", weekly: "SEMANAL · se reinicia el lunes (UTC)" },
    resetAll: "REINICIAR TODO",
    privacyNote:
      "El progreso se guarda solo en este navegador — no se sube nada. Las tareas diarias se limpian a medianoche UTC, las semanales al inicio de la semana ISO.",
  },
  pt: {
    metaTitle: "Checklist Diária de Anime Expeditions — Rastreador de Diárias e Semanais",
    metaDescription:
      "Uma checklist diária e semanal de Anime Expeditions — códigos, bounties, produção de Expedition, raids e mais. Salva seu progresso localmente e reinicia no horário.",
    h1: "CHECKLIST DIÁRIA DE ANIME EXPEDITIONS",
    intro:
      "As tarefas diárias e semanais que valem a pena em cada sessão — códigos, bounties, produção de Expedition, raids. Marque-as e a lista lembra seu progresso e reinicia sozinha no horário.",
    stamp: "ROTINA",
    whyTitle: "POR QUE UMA ROTINA IMPORTA",
    whyBody:
      "A progressão em Anime Expeditions é limitada por marcos e recursos: os jogadores que avançam mais não grindam mais, só não deixam recompensas grátis na mesa. Códigos expiram, a produção de Expedition enche, as ofertas diárias da loja resetam e os Battle Passes de evento correm contra o relógio. Dois minutos nesta lista por sessão valem mais que uma hora de farm sem foco.",
    cross: {
      before: "Começando do zero? O ",
      links: [
        { label: "guia para iniciantes", path: "/beginner-guide/" },
        { label: "códigos de hoje", path: "/" },
      ],
      between: [" cobre a rota da primeira hora, e os "],
      after: " são a primeira coisa a marcar acima.",
    },
    cadenceLabels: { daily: "DIÁRIA · reinicia à meia-noite UTC", weekly: "SEMANAL · reinicia na segunda (UTC)" },
    resetAll: "RESETAR TUDO",
    privacyNote:
      "O progresso é salvo apenas neste navegador — nada é enviado. As tarefas diárias limpam à meia-noite UTC, as semanais no início da semana ISO.",
  },
  ru: {
    metaTitle: "Ежедневный Чеклист Anime Expeditions — Дейли и Викли",
    metaDescription:
      "Ежедневный и еженедельный чеклист Anime Expeditions — коды, баунти, производство Expedition, рейды и другое. Сохраняет прогресс локально и сбрасывается по расписанию.",
    h1: "ЕЖЕДНЕВНЫЙ ЧЕКЛИСТ ANIME EXPEDITIONS",
    intro:
      "Ежедневные и еженедельные задачи, которые стоит делать каждую сессию — коды, баунти, производство Expedition, рейды. Отмечайте их, а список запомнит прогресс и сам сбросится по расписанию.",
    stamp: "РУТИНА",
    whyTitle: "ЗАЧЕМ НУЖНА РУТИНА",
    whyBody:
      "Прогресс в Anime Expeditions ограничен вехами и ресурсами: игроки, которые вырываются вперёд, не гриндят больше — они просто не оставляют бесплатные награды на столе. Коды истекают, производство Expedition упирается в лимит, ежедневные предложения магазина сбрасываются, а ивентовые Battle Passes идут на таймере. Две минуты с этим списком каждую сессию стоят больше часа бесфокусного фарма.",
    cross: {
      before: "Начинаете с нуля? ",
      links: [
        { label: "Гайд для новичков", path: "/beginner-guide/" },
        { label: "сегодняшние коды", path: "/" },
      ],
      between: [" описывает маршрут первого часа, а "],
      after: " — первое, что стоит отметить выше.",
    },
    cadenceLabels: { daily: "ДЕЙЛИ · сброс в полночь UTC", weekly: "ВИКЛИ · сброс в понедельник (UTC)" },
    resetAll: "СБРОСИТЬ ВСЁ",
    privacyNote:
      "Прогресс сохраняется только в этом браузере — ничего не отправляется. Ежедневные задачи сбрасываются в полночь UTC, еженедельные — в начале недели ISO.",
  },
};
