import type { MetadataRoute } from "next";
import { LAST_VERIFIED } from "@/data/codes";
import { LOCALES, LOCALE_META, localePath } from "@/data/i18n";

export const dynamic = "force-static";

const SITE = "https://animeexpeditions.dev";
const lastModified = new Date(LAST_VERIFIED);

// Pages that exist in every locale, with their crawl hints.
const MULTILINGUAL: { path: string; changeFrequency: "daily" | "weekly"; priority: number }[] = [
  { path: "/", changeFrequency: "daily", priority: 1 },
  { path: "/tier-list/", changeFrequency: "weekly", priority: 0.8 },
  { path: "/units/", changeFrequency: "weekly", priority: 0.8 },
];

// English-only pages (not yet translated).
const EN_ONLY: { path: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { path: "/evolution-planner/", changeFrequency: "weekly", priority: 0.7 },
  { path: "/beginner-guide/", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, changeFrequency, priority } of MULTILINGUAL) {
    const languages: Record<string, string> = {};
    for (const lc of LOCALES) languages[LOCALE_META[lc].hreflang] = SITE + localePath(lc, path);
    languages["x-default"] = SITE + localePath("en", path);

    for (const lc of LOCALES) {
      entries.push({
        url: SITE + localePath(lc, path),
        lastModified,
        changeFrequency,
        priority: lc === "en" ? priority : priority - 0.1,
        alternates: { languages },
      });
    }
  }

  for (const { path, changeFrequency, priority } of EN_ONLY) {
    entries.push({ url: SITE + path, lastModified, changeFrequency, priority });
  }

  return entries;
}
