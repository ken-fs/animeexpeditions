// Anime Expeditions fishing system — single source of truth for the /fishing/ page.
// Added in Update 2.0 [Summer Siege] (Aug 31, 2026). Rod stats, passives, and unlocks
// cross-checked across allthings.how + Beebom + ProGameGuides + GAMES.GG (Sep 2026).
// Where sources disagree the entry is flagged in `note` — verify in-game before
// treating as authoritative.
// I18n: unlock/passive/note + reward lists localized 2026-09-03 (en is the source).

import type { Locale } from "./i18n";

export const FISHING_VERIFIED = "2026-09-03";

type I18n = Partial<Record<Locale, string>>;

export interface FishingRod {
  name: string;
  lureSpeed: string; // bite wait range — higher is faster
  control: string; // how tightly the minigame bar steers
  controlZone: string; // catch window size
  passive: string;
  passiveI18n?: I18n;
  unlock: string;
  unlockI18n?: I18n;
  note?: string;
  noteI18n?: I18n;
}

export const rods: FishingRod[] = [
  {
    name: "Normal Rod",
    lureSpeed: "6–12",
    control: "0.5",
    controlZone: "0.3",
    passive: "",
    unlock: "Given to every player at the start",
    unlockI18n: {
      es: "Disponible para todos desde el inicio",
      pt: "Disponível para todos desde o início",
      ru: "Выдаётся каждому игроку с самого начала",
    },
  },
  {
    name: "Advanced Rod",
    lureSpeed: "5–10",
    control: "0.5",
    controlZone: "0.3",
    passive: "",
    unlock: "Buy from the Summer Shop for 750 Sand Dollars",
    unlockI18n: {
      es: "Cómprala en la Summer Shop por 750 Sand Dollars",
      pt: "Compre na Summer Shop por 750 Sand Dollars",
      ru: "Покупается в Summer Shop за 750 Sand Dollars",
    },
    note: "Same control as the Normal Rod but the fastest bite of the manual rods — the first thing to buy.",
    noteI18n: {
      es: "Mismo control que la Normal Rod pero el pique más rápido de las cañas manuales — lo primero que comprar.",
      pt: "Mesmo controle da Normal Rod, mas a fisgada mais rápida das varas manuais — a primeira coisa a comprar.",
      ru: "Тот же контроль, что у Normal Rod, но самая быстрая поклёвка среди ручных удочек — первая покупка.",
    },
  },
  {
    name: "Lucky Rod",
    lureSpeed: "6–12",
    control: "0.7",
    controlZone: "0.35",
    passive: "Every 8th fish caught is a guaranteed Mythic",
    passiveI18n: {
      es: "Cada 8º pez capturado es un Mythic garantizado",
      pt: "Cada 8º peixe capturado é um Mythic garantido",
      ru: "Каждая 8-я пойманная рыба — гарантированный Mythic",
    },
    unlock: "~1% drop chance after catching any fish",
    unlockI18n: {
      es: "~1% de probabilidad de caer tras cualquier captura",
      pt: "~1% de chance de cair após qualquer captura",
      ru: "Шанс ~1% выпасть после любой поимки",
    },
    note: "The rare chase rod — pure RNG. The Mythic-every-8-catches passive makes it the Bestiary finisher.",
    noteI18n: {
      es: "La caña rara perseguida — RNG puro. La pasiva de Mythic cada 8 capturas la convierte en la rematadora del Bestiary.",
      pt: "A vara rara perseguida — RNG puro. A passiva de Mythic a cada 8 capturas a torna a finalizadora do Bestiary.",
      ru: "Редкая удочка-мечта — чистый RNG. Пассивка на Mythic каждые 8 поимок делает её финишером Бестиария.",
    },
  },
  {
    name: "Recycling Rod",
    lureSpeed: "6–12",
    control: "0.9",
    controlZone: "0.4",
    passive: "Every 10 items sold recycles into a random Legendary+ item",
    passiveI18n: {
      es: "Cada 10 objetos vendidos se reciclan en un objeto Legendary+ aleatorio",
      pt: "Cada 10 itens vendidos reciclam em um item Legendary+ aleatório",
      ru: "Каждые 10 проданных предметов перерабатываются в случайный предмет Legendary+",
    },
    unlock: "Catch 100 fish total (reported milestone)",
    unlockI18n: {
      es: "Captura 100 peces en total (hito reportado)",
      pt: "Capture 100 peixes no total (marco reportado)",
      ru: "Поймайте всего 100 рыб (веха по данным сообщества)",
    },
    note: "Highest Control in the game — the most forgiving minigame. One source lists it as a random fishing drop instead; the 100-fish milestone is the commonly cited trigger.",
    noteI18n: {
      es: "El Control más alto del juego — el minijuego más indulgente. Una fuente la lista como drop aleatorio de pesca; el hito de 100 peces es el disparador más citado.",
      pt: "O Control mais alto do jogo — o minigame mais indulgente. Uma fonte a lista como drop aleatório de pesca; o marco de 100 peixes é o gatilho mais citado.",
      ru: "Самый высокий Control в игре — самая щадящая мини-игра. Один источник называет её случайным дропом с рыбалки; веха в 100 рыб — самый цитируемый триггер.",
    },
  },
  {
    name: "Auto Rod",
    lureSpeed: "12–24",
    control: "0.7",
    controlZone: "0",
    passive: "Skips the fishing minigame entirely — double lure speed, auto-catch",
    passiveI18n: {
      es: "Se salta el minijuego de pesca por completo — doble velocidad de cebo, captura automática",
      pt: "Pula o minigame de pesca por completo — velocidade de isca dobrada, captura automática",
      ru: "Полностью пропускает мини-игру — двойная скорость приманки, автоловля",
    },
    unlock: "Reach Wave 150 in Tidal Siege Infinite mode",
    unlockI18n: {
      es: "Llega a la Ola 150 en el modo Infinite de Tidal Siege",
      pt: "Chegue à Onda 150 no modo Infinite do Tidal Siege",
      ru: "Дойдите до 150-й волны в режиме Infinite на Tidal Siege",
    },
    note: "The AFK farmer. Control Zone is 0 because there is no minigame to steer.",
    noteI18n: {
      es: "La farmeadora AFK. Control Zone es 0 porque no hay minijuego que dirigir.",
      pt: "A farmadora AFK. Control Zone é 0 porque não há minigame para dirigir.",
      ru: "АФК-фармер. Control Zone равна 0, потому что мини-игры нет.",
    },
  },
];

// What a catch pays out (per GAMES.GG + Beebom fishing guides).
export const fishingRewards: Record<Locale, string[]> = {
  en: [
    "Fish for the Bestiary — 22 reported species spread across five locations (Lobby pools, Coral Kingdom, East Town, and more).",
    "Sand Dollars on every catch — the Summer Siege event currency.",
    "Fishing XP plus milestone XP that fills the event milestone ladder.",
    "Rare bonus catches, up to Mythic fish (guaranteed every 8th catch with the Lucky Rod).",
    "The Sharktooth Conch — a very rare catch in Tidal Siege pools that unlocks the Mythic unit Sharkfang.",
  ],
  es: [
    "Peces para el Bestiary — 22 especies reportadas repartidas en cinco ubicaciones (charcos del Lobby, Coral Kingdom, East Town y más).",
    "Sand Dollars en cada captura — la moneda del evento Summer Siege.",
    "XP de pesca más XP de hitos que llena la escalera de hitos del evento.",
    "Capturas extra raras, hasta peces Mythic (garantizado cada 8ª captura con la Lucky Rod).",
    "El Sharktooth Conch — una captura muy rara en los charcos de Tidal Siege que desbloquea la unidad Mythic Sharkfang.",
  ],
  pt: [
    "Peixes para o Bestiary — 22 espécies reportadas espalhadas por cinco locais (poças do Lobby, Coral Kingdom, East Town e mais).",
    "Sand Dollars em cada captura — a moeda do evento Summer Siege.",
    "XP de pesca mais XP de marcos que preenche a escada de marcos do evento.",
    "Capturas bônus raras, até peixes Mythic (garantido a cada 8ª captura com a Lucky Rod).",
    "O Sharktooth Conch — uma captura muito rara nas poças do Tidal Siege que desbloqueia a unidade Mythic Sharkfang.",
  ],
  ru: [
    "Рыбы для Бестиария — 22 вида по данным сообщества в пяти локациях (бассейны Лобби, Coral Kingdom, East Town и другие).",
    "Sand Dollars за каждый улов — валюта события Summer Siege.",
    "XP рыбалки плюс XP вех, заполняющий лестницу вех события.",
    "Редкие бонусные уловы, вплоть до рыб Mythic (гарантированно каждый 8-й улов с Lucky Rod).",
    "Sharktooth Conch — очень редкий улов в водоёмах Tidal Siege, открывающий мифического юнита Sharkfang.",
  ],
};

// The 25-level milestone ladder tops out at a Flamingo cosmetic (GAMES.GG).
export const milestoneNotes: Record<Locale, string[]> = {
  en: [
    "Catches fill a 25-level milestone ladder with a reward per level — the Flamingo cosmetic sits at the top.",
    "Fishing also raises your Event Rank; reaching Veteran rank reports a daily currency bonus from standard modes.",
  ],
  es: [
    "Las capturas llenan una escalera de hitos de 25 niveles con recompensa por nivel — el cosmético Flamingo está arriba del todo.",
    "Pescar también sube tu Event Rank; alcanzar el rango Veteran reporta un bono diario de moneda en los modos estándar.",
  ],
  pt: [
    "As capturas preenchem uma escada de marcos de 25 níveis com recompensa por nível — o cosmético Flamingo fica no topo.",
    "Pescar também aumenta seu Event Rank; alcançar o rank Veteran reporta um bônus diário de moeda nos modos padrão.",
  ],
  ru: [
    "Уловы заполняют лестницу вех на 25 уровней с наградой за уровень — на вершине косметика Flamingo.",
    "Рыбалка также поднимает ваш Event Rank; достижение ранга Veteran даёт ежедневный бонус валюты в стандартных режимах (по данным сообщества).",
  ],
};

// Recommended grind loop (GAMES.GG's Summer Fish Fest route).
export const grindLoop: Record<Locale, string[]> = {
  en: [
    "Fish the lobby pools with the Normal Rod until you can afford the Advanced Rod (750 Sand Dollars).",
    "Use the Advanced Rod to chase harder fish in Coral Kingdom and East Town for Bestiary progress.",
    "Run Tidal Siege alongside fishing and push Infinite mode to Wave 150 for the Auto Rod.",
    "Equip the Auto Rod and farm hands-free — every catch still rolls the ~1% Lucky Rod drop.",
  ],
  es: [
    "Pesca en los charcos del lobby con la Normal Rod hasta que puedas pagar la Advanced Rod (750 Sand Dollars).",
    "Usa la Advanced Rod para ir a por peces más difíciles en Coral Kingdom y East Town y avanzar en el Bestiary.",
    "Juega Tidal Siege en paralelo a la pesca y empuja el modo Infinite hasta la Ola 150 para la Auto Rod.",
    "Equipa la Auto Rod y farmea sin manos — cada captura sigue tirando el ~1% de la Lucky Rod.",
  ],
  pt: [
    "Pesque nas poças do lobby com a Normal Rod até poder pagar a Advanced Rod (750 Sand Dollars).",
    "Use a Advanced Rod para ir atrás de peixes mais difíceis em Coral Kingdom e East Town e avançar no Bestiary.",
    "Jogue Tidal Siege junto com a pesca e empurre o modo Infinite até a Onda 150 pela Auto Rod.",
    "Equipe a Auto Rod e farme sem as mãos — cada captura ainda rola os ~1% da Lucky Rod.",
  ],
  ru: [
    "Рыбачьте в бассейнах лобби с Normal Rod, пока не накопите на Advanced Rod (750 Sand Dollars).",
    "Используйте Advanced Rod, чтобы охотиться на более сложную рыбу в Coral Kingdom и East Town и продвигать Бестиарий.",
    "Проходите Tidal Siege параллельно с рыбалкой и дойдите в режиме Infinite до 150-й волны ради Auto Rod.",
    "Экипируйте Auto Rod и фармите без рук — каждый улов всё ещё роллит ~1% шанс Lucky Rod.",
  ],
};
