import type { Metadata } from "next";
import { LOCALES, LOCALE_META, localePath, type Locale } from "@/data/i18n";

const SITE = "https://animeexpeditions.dev";

/**
 * Build canonical + hreflang alternates for a page that exists in every locale.
 * `path` is the locale-agnostic path, e.g. "/" or "/tier-list/".
 * `current` is the locale of the page requesting metadata (drives canonical).
 */
export function hreflangAlternates(
  path: string,
  current: Locale = "en"
): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const lc of LOCALES) {
    languages[LOCALE_META[lc].hreflang] = SITE + localePath(lc, path);
  }
  // x-default points at the English (root) version.
  languages["x-default"] = SITE + localePath("en", path);

  return {
    canonical: SITE + localePath(current, path),
    languages,
  };
}
