import type { Locale } from "./i18n";

const TAG: Record<Locale, string> = { en: "en-US", es: "es-ES", pt: "pt-BR", ru: "ru-RU" };

/**
 * Month for page titles ("November 2026" / "Noviembre 2026" / "Novembro 2026" / "ноябрь 2026"), taken from a
 * *_VERIFIED check date — never typed by hand. On 2026-11-17 the codes / tier-list / updates titles still said
 * "October 2026" (es/pt/ru codes even "September") although the data had been re-checked in November.
 * Re-checking a page = bumping its *_VERIFIED date; the title follows.
 */
export function monthYear(iso: string, locale: Locale = "en", style: "long" | "short" = "long"): string {
  const d = new Date(`${iso}T00:00:00Z`);
  let m = d.toLocaleDateString(TAG[locale], { month: style, timeZone: "UTC" }).replace(/\.$/, "");
  if (locale !== "ru") m = m[0].toUpperCase() + m.slice(1);
  return `${m} ${d.getUTCFullYear()}`;
}
