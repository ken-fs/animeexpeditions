// Anime Expeditions daily/weekly checklist tasks — single source of truth.
// A practical routine template for the current loop; adjust as modes change.
// Progress is stored locally in the browser and resets on the cadence below.
// I18n: labels/notes localized 2026-09-03 (en is the source).

import type { Locale } from "./i18n";

export const CHECKLIST_VERIFIED = "2026-09-03";

export type Cadence = "daily" | "weekly";

export interface Task {
  id: string; // stable key for localStorage
  label: string;
  labelI18n?: Partial<Record<Locale, string>>;
  cadence: Cadence;
  note?: string;
  noteI18n?: Partial<Record<Locale, string>>;
}

export const tasks: Task[] = [
  // Daily
  {
    id: "codes",
    label: "Redeem any new codes",
    labelI18n: { es: "Canjea los códigos nuevos", pt: "Resgate os códigos novos", ru: "Активируйте новые коды" },
    cadence: "daily",
    note: "New codes drop on visit/like milestones — check before they expire.",
    noteI18n: {
      es: "Los códigos nuevos salen en hitos de visitas/likes — revísalos antes de que caduquen.",
      pt: "Códigos novos saem em marcos de visitas/likes — confira antes que expirem.",
      ru: "Новые коды выходят на отметках визитов/лайков — проверяйте, пока не истекли.",
    },
  },
  {
    id: "bounty",
    label: "Clear the Bounty Board",
    labelI18n: { es: "Completa el Bounty Board", pt: "Complete o Bounty Board", ru: "Зачистите Bounty Board" },
    cadence: "daily",
    note: "Reroll objectives you can't finish with Gold; rewards Event Coins.",
    noteI18n: {
      es: "Rerollea con Gold los objetivos que no puedas terminar; da Event Coins.",
      pt: "Rerole com Gold os objetivos que não conseguir terminar; dá Event Coins.",
      ru: "Реролльте за Gold задачи, которые не можете выполнить; награда — Event Coins.",
    },
  },
  {
    id: "expedition",
    label: "Collect Expedition production",
    labelI18n: { es: "Recoge la producción de Expedition", pt: "Colete a produção de Expedition", ru: "Собирайте производство Expedition" },
    cadence: "daily",
    note: "Resource structures bank output — claim so it doesn't cap out.",
    noteI18n: {
      es: "Las estructuras de recursos acumulan producción — recógela para que no llegue al tope.",
      pt: "As estruturas de recursos acumulam produção — colete para não encher.",
      ru: "Ресурсные постройки копят продукцию — забирайте, чтобы не упёрлась в лимит.",
    },
  },
  {
    id: "story-energy",
    label: "Spend Story energy / tickets",
    labelI18n: { es: "Gasta la energía / tickets de Story", pt: "Gaste a energia / tickets de Story", ru: "Тратьте энергию / билеты Story" },
    cadence: "daily",
    note: "Don't let energy sit at max; farm the map you need drops from.",
    noteI18n: {
      es: "No dejes la energía al máximo; farmea el mapa cuyos drops necesitas.",
      pt: "Não deixe a energia no máximo; farme o mapa cujos drops você precisa.",
      ru: "Не держите энергию на максимуме; фармите карту с нужным дропом.",
    },
  },
  {
    id: "tidal-siege",
    label: "Clear Tidal Siege waves",
    labelI18n: { es: "Limpia oleadas de Tidal Siege", pt: "Limpe ondas do Tidal Siege", ru: "Зачищайте волны Tidal Siege" },
    cadence: "daily",
    note: "Update 2.0 event — banks Sand Dollars and Summer Capsules each run.",
    noteI18n: {
      es: "Evento de Update 2.0 — acumula Sand Dollars y Summer Capsules en cada partida.",
      pt: "Evento da Update 2.0 — acumula Sand Dollars e Summer Capsules a cada partida.",
      ru: "Событие Update 2.0 — каждый забег приносит Sand Dollars и Summer Capsules.",
    },
  },
  {
    id: "fishing",
    label: "Use your fishing rods",
    labelI18n: { es: "Usa tus cañas de pesca", pt: "Use suas varas de pesca", ru: "Используйте удочки" },
    cadence: "daily",
    note: "Update 2.0 — fish for units, traits, and gear; work toward the Lucky Rod.",
    noteI18n: {
      es: "Update 2.0 — pesca unidades, traits y equipo; ve a por la Lucky Rod.",
      pt: "Update 2.0 — pesque unidades, traits e equipamento; mire a Lucky Rod.",
      ru: "Update 2.0 — ловите юнитов, трейты и снаряжение; идите к Lucky Rod.",
    },
  },
  {
    id: "summon",
    label: "Free daily summon",
    labelI18n: { es: "Invocación diaria gratis", pt: "Invocação diária grátis", ru: "Бесплатный ежедневный призыв" },
    cadence: "daily",
    note: "Take any free pull before the banner rotates.",
    noteI18n: {
      es: "Haz cualquier tirada gratis antes de que rote el banner.",
      pt: "Faça qualquer puxada grátis antes do banner rodar.",
      ru: "Сделайте бесплатную крутку до ротации баннера.",
    },
  },
  {
    id: "shop",
    label: "Check the daily shop reset",
    labelI18n: { es: "Revisa el reinicio diario de la tienda", pt: "Confira o reset diário da loja", ru: "Проверяйте ежедневное обновление магазина" },
    cadence: "daily",
    note: "Grab cheap crystal/reroll deals; skip overpriced filler.",
    noteI18n: {
      es: "Aprovecha las ofertas baratas de cristales/rerolls; ignora el relleno caro.",
      pt: "Aproveite as ofertas baratas de cristais/rerolls; pule o enchimento caro.",
      ru: "Берите дешёвые предложения кристаллов/рероллов; пропускайте дорогую ерунду.",
    },
  },

  // Weekly
  {
    id: "raids",
    label: "Run your weekly Raids",
    labelI18n: { es: "Haz tus Raids semanales", pt: "Faça suas Raids semanais", ru: "Проходите еженедельные Raids" },
    cadence: "weekly",
    note: "Raids (level 25+) gate the best upgrade materials.",
    noteI18n: {
      es: "Las Raids (nivel 25+) bloquean los mejores materiales de mejora.",
      pt: "As Raids (nível 25+) travam os melhores materiais de melhoria.",
      ru: "Raids (уровень 25+) закрывают лучшие материалы улучшения.",
    },
  },
  {
    id: "battlepass",
    label: "Push event Battle Pass tiers",
    labelI18n: { es: "Sube los tiers del Battle Pass del evento", pt: "Suba os tiers do Battle Pass do evento", ru: "Продвигайте уровни ивентового Battle Pass" },
    cadence: "weekly",
    note: "During events, clear enough quests to bank the pass rewards.",
    noteI18n: {
      es: "Durante los eventos, completa suficientes misiones para asegurar las recompensas del pase.",
      pt: "Durante os eventos, complete missões suficientes para garantir as recompensas do passe.",
      ru: "Во время событий выполняйте достаточно заданий, чтобы забрать награды пасса.",
    },
  },
  {
    id: "guild",
    label: "Hit guild contribution",
    labelI18n: { es: "Cumple la contribución de guild", pt: "Bata a contribuição da guild", ru: "Выполните вклад в гильдию" },
    cadence: "weekly",
    note: "Log the weekly guild activity so you don't miss shared rewards.",
    noteI18n: {
      es: "Registra la actividad semanal de guild para no perder recompensas compartidas.",
      pt: "Registre a atividade semanal da guild para não perder recompensas compartilhadas.",
      ru: "Отметьте еженедельную активность гильдии, чтобы не пропустить общие награды.",
    },
  },
  {
    id: "reroll",
    label: "Trait-reroll your keepers",
    labelI18n: { es: "Haz trait-reroll a tus fijas", pt: "Faça trait-reroll nas suas fixas", ru: "Реролльте трейты основным юнитам" },
    cadence: "weekly",
    note: "Spend banked Trait Crystals only on permanent units.",
    noteI18n: {
      es: "Gasta los Trait Crystals ahorrados solo en unidades permanentes.",
      pt: "Gaste os Trait Crystals guardados só em unidades permanentes.",
      ru: "Тратьте накопленные Trait Crystals только на постоянных юнитов.",
    },
  },
];
