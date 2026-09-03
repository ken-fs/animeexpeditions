// Anime Expeditions game modes — single source of truth for the game-modes page.
// Reported from community gameplay summaries; unlock levels and mechanics are
// provisional until first-party confirmation.
// I18n: summaries localized 2026-09-03 (en is the source; mode names stay English).

import type { Locale } from "./i18n";

export const MODES_VERIFIED = "2026-09-03";

export interface GameMode {
  name: string;
  unlock?: string; // when it unlocks
  summary: string;
  summaryI18n?: Partial<Record<Locale, string>>;
  limited?: boolean; // time-limited event mode
}

export const gameModes: GameMode[] = [
  {
    name: "Story",
    summary:
      "The core progression route: clear staged maps wave by wave. It doubles as the benchmark you use to test whether a team actually works before taking it anywhere harder.",
    summaryI18n: {
      es: "La ruta de progresión principal: limpia mapas por escenarios oleada a oleada. También sirve de banco de pruebas para saber si un equipo funciona antes de llevarlo a algo más difícil.",
      pt: "A rota de progressão principal: limpe mapas em fases onda a onda. Também serve de bancada de testes para saber se um time funciona antes de levá-lo a algo mais difícil.",
      ru: "Основной путь прогресса: зачищайте карты по стадиям волна за волной. Заодно это полигон, проверяющий, работает ли команда, прежде чем вести её куда-то сложнее.",
    },
  },
  {
    name: "Expeditions",
    unlock: "Player level 20",
    summary:
      "A moving-payload route plus an Expedition area with upgradeable structures — resource production, unit training, a shop, and an Armory. This is where longer-term economy building happens.",
    summaryI18n: {
      es: "Una ruta de carga en movimiento más un área de Expedition con estructuras mejorables — producción de recursos, entrenamiento de unidades, una tienda y un Armory. Aquí es donde se construye la economía a largo plazo.",
      pt: "Uma rota de carga em movimento mais uma área de Expedition com estruturas melhoráveis — produção de recursos, treinamento de unidades, uma loja e um Armory. É aqui que a economia de longo prazo se constrói.",
      ru: "Маршрут с движущимся грузом плюс зона Expedition с улучшаемыми постройками — производство ресурсов, тренировка юнитов, магазин и Armory. Здесь строится долгосрочная экономика.",
    },
  },
  {
    name: "Raids",
    unlock: "Player level 25",
    summary:
      "Harder co-ordinated fights, with Spirit City as the current Raid area. Expect tighter role requirements than Story — bring control and sustained damage, not just a carry.",
    summaryI18n: {
      es: "Peleas coordinadas más duras, con Spirit City como área de Raid actual. Espera requisitos de rol más estrictos que en Story — lleva control y daño sostenido, no solo un carry.",
      pt: "Lutas coordenadas mais duras, com Spirit City como área de Raid atual. Espere requisitos de papel mais apertados que em Story — leve controle e dano sustentado, não só um carry.",
      ru: "Более сложные скоординированные бои, текущая зона — Spirit City. Требования к ролям жёстче, чем в Story: берите контроль и устойчивый урон, а не только керри.",
    },
  },
  {
    name: "Co-op",
    summary:
      "Combine rosters with other players. Party limits, shared economy, reward splits, and enemy scaling still need in-game verification, so treat co-op planning as provisional.",
    summaryI18n: {
      es: "Combina rosters con otros jugadores. Los límites de grupo, la economía compartida, el reparto de recompensas y el escalado enemigo aún necesitan verificación en el juego, así que trata la planificación de co-op como provisional.",
      pt: "Combine rosters com outros jogadores. Limites de grupo, economia compartilhada, divisão de recompensas e escalonamento inimigo ainda precisam de verificação no jogo, então trate o planejamento de co-op como provisório.",
      ru: "Объединяйте ростеры с другими игроками. Лимиты группы, общая экономика, делёж наград и скейлинг врагов ещё требуют проверки в игре — планируйте ко-op как предварительный.",
    },
  },
  {
    name: "Tidal Siege",
    unlock: "Update 2.0 (limited)",
    limited: true,
    summary:
      "Update 2.0's headline wave event: clear waves for Sand Dollars (event currency) and Summer Capsules containing limited units and skins. Progress through ranks for milestone rewards while the event runs.",
    summaryI18n: {
      es: "El evento de oleadas estrella de Update 2.0: limpia oleadas para ganar Sand Dollars (moneda del evento) y Summer Capsules con unidades y skins limitadas. Progresa por rangos para recompensas de hitos mientras dure el evento.",
      pt: "O evento de ondas estrela da Update 2.0: limpe ondas para ganhar Sand Dollars (moeda do evento) e Summer Capsules com unidades e skins limitadas. Progrida pelos ranks para recompensas de marcos enquanto o evento durar.",
      ru: "Главное волновое событие Update 2.0: зачищайте волны ради Sand Dollars (валюта события) и Summer Capsules с лимитированными юнитами и скинами. Поднимайтесь по рангам ради наград за вехи, пока идёт событие.",
    },
  },
  {
    name: "Fishing",
    unlock: "Update 2.0",
    summary:
      "A side system that catches units, traits, and gear. Five rods to unlock — Normal, Auto, Advanced, Lucky, and Recycling — with the Lucky Rod at a reported ~1% acquisition chance. Open the fish icon at the bottom-left of the screen.",
    summaryI18n: {
      es: "Un sistema secundario que captura unidades, traits y equipo. Cinco cañas por desbloquear — Normal, Auto, Advanced, Lucky y Recycling — con la Lucky Rod a un reportado ~1% de probabilidad. Abre el icono del pez abajo a la izquierda de la pantalla.",
      pt: "Um sistema secundário que captura unidades, traits e equipamento. Cinco varas para desbloquear — Normal, Auto, Advanced, Lucky e Recycling — com a Lucky Rod a um reportado ~1% de chance. Abra o ícone de peixe no canto inferior esquerdo da tela.",
      ru: "Побочная система, добывающая юнитов, трейты и снаряжение. Пять удочек для открытия — Normal, Auto, Advanced, Lucky и Recycling, — причём Lucky Rod достаётся с шансом ~1% по данным сообщества. Откройте иконку рыбы в левом нижнем углу экрана.",
    },
  },
  {
    name: "Portals",
    unlock: "Update 2.0",
    summary:
      "Four new portal instances added in Update 2.0, with tiered difficulty and rewards. Portal mechanics and drop tables are still being mapped by the community — treat specifics as provisional.",
    summaryI18n: {
      es: "Cuatro nuevas instancias de portales añadidas en Update 2.0, con dificultad y recompensas por tiers. Las mecánicas y tablas de drop de los portales aún las está mapeando la comunidad — trata los detalles como provisionales.",
      pt: "Quatro novas instâncias de portais adicionadas na Update 2.0, com dificuldade e recompensas por tiers. As mecânicas e tabelas de drop dos portais ainda estão sendo mapeadas pela comunidade — trate os detalhes como provisórios.",
      ru: "Четыре новых портала добавлены в Update 2.0 с тирной сложностью и наградами. Механики и таблицы дропа порталов ещё составляются сообществом — считайте детали предварительными.",
    },
  },
  {
    name: "Villain Invasion",
    unlock: "Update 0.5 (limited)",
    limited: true,
    summary:
      "A time-limited event map across four acts, with a Villain Banner, event quests, an event shop, and an Event Battle Pass. Limited modes come and go with updates — check the updates page for the current window.",
    summaryI18n: {
      es: "Un mapa de evento por tiempo limitado en cuatro actos, con Villain Banner, misiones de evento, tienda de evento y Event Battle Pass. Los modos limitados van y vienen con las actualizaciones — revisa la página de actualizaciones para la ventana actual.",
      pt: "Um mapa de evento por tempo limitado em quatro atos, com Villain Banner, missões de evento, loja de evento e Event Battle Pass. Modos limitados vão e vêm com as atualizações — confira a página de atualizações para a janela atual.",
      ru: "Временная ивентовая карта в четырёх актах с Villain Banner, ивентовыми заданиями, магазином и Event Battle Pass. Лимитные режимы приходят и уходят с обновлениями — актуальное окно смотрите на странице обновлений.",
    },
  },
  {
    name: "Villain Hunt",
    unlock: "Update 0.5",
    limited: true,
    summary:
      "Villains spawn inside non-competitive modes and drop Villain Chests and event resources — a passive way to farm event currency while you play everything else.",
    summaryI18n: {
      es: "Los villanos aparecen dentro de modos no competitivos y dropean Villain Chests y recursos de evento — una forma pasiva de farmear moneda de evento mientras juegas a todo lo demás.",
      pt: "Vilões aparecem dentro de modos não competitivos e dropam Villain Chests e recursos de evento — uma forma passiva de farmar moeda de evento enquanto você joga todo o resto.",
      ru: "Злодеи появляются внутри неконкурентных режимов и роняют Villain Chests и ивентовые ресурсы — пассивный способ фармить валюту события, играя во всё остальное.",
    },
  },
  {
    name: "Bounty Board",
    unlock: "Update 0.5",
    limited: true,
    summary:
      "A daily activity offering Gold rerolls and Event Coin rewards. Objectives are rerollable with Gold if you draw ones you can't complete.",
    summaryI18n: {
      es: "Una actividad diaria que ofrece rerolls con Gold y recompensas de Event Coins. Los objetivos se pueden rerollear con Gold si te tocan algunos que no puedes completar.",
      pt: "Uma atividade diária que oferece rerolls com Gold e recompensas de Event Coins. Os objetivos podem ser rerolados com Gold se você tirar alguns que não consegue completar.",
      ru: "Ежедневная активность с рероллами за Gold и наградами Event Coins. Задачи можно рероллить за Gold, если выпали те, что вам не по силам.",
    },
  },
];
