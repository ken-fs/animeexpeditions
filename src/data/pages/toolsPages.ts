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

export interface RerollStrings {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  stamp: string;
  // Calculator UI
  targetLabel: string;
  targetHint: string;
  doneLabel: string;
  doneHint: string;
  perReroll: string;
  expected: string;
  rerollsUnit: string;
  atN: (n: number) => string;
  pityLabel: string;
  pityLeft: (n: number) => string;
  pityReached: string;
  noPity: string;
  tableTitle: string;
  colTrait: string;
  colRate: string;
  colExpected: string;
  colPity: string;
  colKeep: string;
  howTitle: string;
  howSteps: string[];
  honestyTitle: string;
  honestyBody: string;
  cross: CrossText;
}

export const rerollPage: Loc<RerollStrings> = {
  en: {
    metaTitle: "Anime Expeditions Trait Reroll Calculator — Odds & Pity",
    metaDescription:
      "Work out how many Trait Crystal rerolls you need in Anime Expeditions. Real roll rates and pity thresholds for all 17 traits, with the probability maths done for you.",
    h1: "TRAIT REROLL CALCULATOR",
    intro:
      "Rolling for a trait without knowing the odds is how people burn a thousand crystals and quit. Pick the trait you want and enter how many rerolls you have already spent — the maths below tells you what you are actually up against.",
    stamp: "TRAIT DATA",
    targetLabel: "TRAIT YOU WANT",
    targetHint: "Pick the trait you are rolling for. Expected rerolls is the average, not a guarantee — half of players get it sooner and half later.",
    doneLabel: "REROLLS DONE SO FAR",
    doneHint: "Enter what you have already spent. This only affects the pity countdown — the odds per reroll never change.",
    perReroll: "CHANCE PER REROLL",
    expected: "EXPECTED REROLLS",
    rerollsUnit: "rerolls",
    atN: (n) => `Chance of hitting it within ${n} rerolls`,
    pityLabel: "PITY COUNTDOWN",
    pityLeft: (n) => `${n} rerolls to guaranteed`,
    pityReached: "Pity threshold reached — the next reroll is guaranteed",
    noPity: "No confirmed pity for this trait",
    tableTitle: "EVERY TRAIT, RANKED BY RARITY",
    colTrait: "Trait",
    colRate: "Rate",
    colExpected: "Expected rerolls",
    colPity: "Pity",
    colKeep: "Verdict",
    howTitle: "HOW TO USE THIS",
    howSteps: [
      "Rates are per reroll and independent — a bad streak never makes the next roll more likely. Only pity changes your floor.",
      "Expected rerolls is the average. At a 0.1% rate that is 1,000 rerolls, and roughly a third of players will still be waiting after 1,000.",
      "Pity is the number that actually matters for planning. If a trait has a pity threshold, your worst case is that number — not infinity.",
      "Budget for pity, not for luck. If you are not willing to reach the pity count, treat the trait as unavailable to you.",
    ],
    honestyTitle: "ABOUT THESE NUMBERS",
    honestyBody:
      "Rates and pity thresholds are community-reported and cross-checked against public third-party tables — they are not published by the developer. Treat them as close enough to plan with, and confirm in-client before spending a large crystal stack.",
    cross: {
      before: "Not sure which trait is worth the crystals? See the ",
      links: [
        { label: "trait list", path: "/traits/" },
        { label: "unit tier list", path: "/tier-list/" },
      ],
      between: [" to match traits to the units you actually run, then check the "],
      after: " for the rest of your loadout.",
    },
  },
  es: {
    metaTitle: "Calculadora de Rerolls de Traits — Anime Expeditions",
    metaDescription:
      "Calcula cuántos rerolls de Trait Crystals necesitas en Anime Expeditions. Tasas reales y umbrales de pity para los 17 traits, con las probabilidades ya hechas.",
    h1: "CALCULADORA DE REROLLS",
    intro:
      "Tirar traits sin saber las probabilidades es como la gente quema mil cristales y lo deja. Elige el trait que buscas e introduce cuántos rerolls llevas: los números de abajo te dicen a qué te enfrentas de verdad.",
    stamp: "DATOS DE TRAITS",
    targetLabel: "TRAIT QUE QUIERES",
    targetHint: "Elige el trait por el que estás tirando. Los rerolls esperados son la media, no una garantía: la mitad lo consigue antes y la mitad después.",
    doneLabel: "REROLLS YA HECHOS",
    doneHint: "Introduce lo que llevas gastado. Esto solo afecta a la cuenta atrás del pity — las probabilidades por tirada no cambian nunca.",
    perReroll: "PROBABILIDAD POR TIRADA",
    expected: "REROLLS ESPERADOS",
    rerollsUnit: "rerolls",
    atN: (n) => `Probabilidad de conseguirlo en ${n} rerolls`,
    pityLabel: "CUENTA ATRÁS DEL PITY",
    pityLeft: (n) => `${n} rerolls para garantizado`,
    pityReached: "Umbral de pity alcanzado — la próxima tirada está garantizada",
    noPity: "Sin pity confirmado para este trait",
    tableTitle: "TODOS LOS TRAITS, POR RAREZA",
    colTrait: "Trait",
    colRate: "Tasa",
    colExpected: "Rerolls esperados",
    colPity: "Pity",
    colKeep: "Veredicto",
    howTitle: "CÓMO USARLO",
    howSteps: [
      "Las tasas son por tirada e independientes: una mala racha nunca hace más probable la siguiente. Solo el pity cambia tu suelo.",
      "Los rerolls esperados son la media. A una tasa del 0,1% son 1.000 rerolls, y cerca de un tercio de los jugadores seguirá esperando después de 1.000.",
      "El pity es el número que importa para planificar. Si un trait tiene umbral, tu peor caso es ese número, no el infinito.",
      "Presupuesta para el pity, no para la suerte. Si no estás dispuesto a llegar al pity, considera ese trait fuera de tu alcance.",
    ],
    honestyTitle: "SOBRE ESTOS NÚMEROS",
    honestyBody:
      "Las tasas y los umbrales de pity son datos reportados por la comunidad y contrastados con tablas públicas de terceros — no los publica el desarrollador. Úsalos como referencia para planificar y confírmalos en el juego antes de gastar un montón grande de cristales.",
    cross: {
      before: "¿No sabes qué trait merece los cristales? Mira la ",
      links: [
        { label: "lista de traits", path: "/traits/" },
        { label: "tier list de unidades", path: "/tier-list/" },
      ],
      between: [" para emparejar traits con las unidades que usas, y luego revisa el "],
      after: " para el resto de tu equipo.",
    },
  },
  pt: {
    metaTitle: "Calculadora de Rerolls de Traits — Anime Expeditions",
    metaDescription:
      "Calcule quantos rerolls de Trait Crystals você precisa no Anime Expeditions. Taxas reais e limites de pity para os 17 traits, com a matemática já feita.",
    h1: "CALCULADORA DE REROLLS",
    intro:
      "Rolar traits sem saber as chances é como as pessoas queimam mil cristais e desistem. Escolha o trait que você quer e informe quantos rerolls já gastou — os números abaixo mostram o que você realmente enfrenta.",
    stamp: "DADOS DE TRAITS",
    targetLabel: "TRAIT QUE VOCÊ QUER",
    targetHint: "Escolha o trait que está buscando. Os rerolls esperados são a média, não uma garantia: metade consegue antes e metade depois.",
    doneLabel: "REROLLS JÁ FEITOS",
    doneHint: "Informe o que já gastou. Isso afeta apenas a contagem do pity — as chances por rolagem nunca mudam.",
    perReroll: "CHANCE POR ROLAGEM",
    expected: "REROLLS ESPERADOS",
    rerollsUnit: "rerolls",
    atN: (n) => `Chance de conseguir em ${n} rerolls`,
    pityLabel: "CONTAGEM DO PITY",
    pityLeft: (n) => `${n} rerolls para garantido`,
    pityReached: "Limite de pity atingido — a próxima rolagem é garantida",
    noPity: "Sem pity confirmado para este trait",
    tableTitle: "TODOS OS TRAITS, POR RARIDADE",
    colTrait: "Trait",
    colRate: "Taxa",
    colExpected: "Rerolls esperados",
    colPity: "Pity",
    colKeep: "Veredito",
    howTitle: "COMO USAR",
    howSteps: [
      "As taxas são por rolagem e independentes — uma sequência ruim nunca torna a próxima mais provável. Só o pity muda o seu piso.",
      "Rerolls esperados é a média. A uma taxa de 0,1% são 1.000 rerolls, e cerca de um terço dos jogadores ainda estará esperando depois disso.",
      "O pity é o número que importa para planejar. Se um trait tem limite, seu pior caso é esse número, não o infinito.",
      "Orce pelo pity, não pela sorte. Se você não está disposto a chegar ao pity, trate o trait como indisponível.",
    ],
    honestyTitle: "SOBRE ESTES NÚMEROS",
    honestyBody:
      "As taxas e os limites de pity são dados relatados pela comunidade e conferidos com tabelas públicas de terceiros — não são publicados pelo desenvolvedor. Use como referência para planejar e confirme no jogo antes de gastar uma pilha grande de cristais.",
    cross: {
      before: "Não sabe qual trait merece os cristais? Veja a ",
      links: [
        { label: "lista de traits", path: "/traits/" },
        { label: "tier list de unidades", path: "/tier-list/" },
      ],
      between: [" para combinar traits com as unidades que você usa, e depois confira o "],
      after: " para o resto do seu time.",
    },
  },
  ru: {
    metaTitle: "Калькулятор Рероллов Трейтов — Anime Expeditions",
    metaDescription:
      "Посчитайте, сколько рероллов Trait Crystals нужно в Anime Expeditions. Реальные шансы и пороги pity для всех 17 трейтов — математика уже сделана за вас.",
    h1: "КАЛЬКУЛЯТОР РЕРОЛЛОВ ТРЕЙТОВ",
    intro:
      "Крутить трейты, не зная шансов, — так люди сжигают тысячу кристаллов и бросают игру. Выберите нужный трейт и укажите, сколько рероллов уже потрачено: цифры ниже показывают, против чего вы на самом деле играете.",
    stamp: "ДАННЫЕ ТРЕЙТОВ",
    targetLabel: "НУЖНЫЙ ТРЕЙТ",
    targetHint: "Выберите трейт, который крутите. Ожидаемые рероллы — это среднее, а не гарантия: половина получит раньше, половина позже.",
    doneLabel: "УЖЕ СДЕЛАНО РЕРОЛЛОВ",
    doneHint: "Укажите, сколько уже потратили. Это влияет только на отсчёт pity — шанс за реролл не меняется никогда.",
    perReroll: "ШАНС ЗА РЕРОЛЛ",
    expected: "ОЖИДАЕМЫХ РЕРОЛЛОВ",
    rerollsUnit: "рероллов",
    atN: (n) => `Шанс получить за ${n} рероллов`,
    pityLabel: "ОТСЧЁТ PITY",
    pityLeft: (n) => `${n} рероллов до гарантии`,
    pityReached: "Порог pity достигнут — следующий реролл гарантирован",
    noPity: "Pity для этого трейта не подтверждён",
    tableTitle: "ВСЕ ТРЕЙТЫ ПО РЕДКОСТИ",
    colTrait: "Трейт",
    colRate: "Шанс",
    colExpected: "Ожидаемо рероллов",
    colPity: "Pity",
    colKeep: "Вердикт",
    howTitle: "КАК ЭТО ЧИТАТЬ",
    howSteps: [
      "Шансы считаются за реролл и независимы — плохая серия никогда не повышает шанс следующего. Пол меняет только pity.",
      "Ожидаемые рероллы — это среднее. При шансе 0,1% это 1 000 рероллов, и примерно треть игроков всё ещё будет ждать после этого.",
      "Pity — то число, которое реально важно для планирования. Если у трейта есть порог, ваш худший случай — этот порог, а не бесконечность.",
      "Считайте бюджет по pity, а не по удаче. Если не готовы дойти до pity — считайте трейт недоступным.",
    ],
    honestyTitle: "ОБ ЭТИХ ЧИСЛАХ",
    honestyBody:
      "Шансы и пороги pity — данные сообщества, сверенные с публичными сторонними таблицами; разработчик их не публикует. Используйте как ориентир для планирования и проверяйте в игре перед тем, как тратить большой запас кристаллов.",
    cross: {
      before: "Не уверены, какой трейт стоит кристаллов? Смотрите ",
      links: [
        { label: "список трейтов", path: "/traits/" },
        { label: "тир-лист юнитов", path: "/tier-list/" },
      ],
      between: [" чтобы сопоставить трейты с юнитами, которых вы водите, затем "],
      after: " для остальной части сборки.",
    },
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
