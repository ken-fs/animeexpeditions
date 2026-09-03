import type { MetadataRoute } from "next";
import { LAST_VERIFIED } from "@/data/codes";
import { LOCALES, LOCALE_META, localePath } from "@/data/i18n";

export const dynamic = "force-static";

const SITE = "https://animeexpeditions.dev";
const lastModified = new Date(LAST_VERIFIED);

// All content pages now exist in every locale.
const MULTILINGUAL: { path: string; changeFrequency: "daily" | "weekly" | "monthly"; priority: number }[] = [
  { path: "/", changeFrequency: "daily", priority: 1 },
  { path: "/tier-list/", changeFrequency: "weekly", priority: 0.8 },
  { path: "/units/", changeFrequency: "weekly", priority: 0.8 },
  { path: "/evolution-planner/", changeFrequency: "weekly", priority: 0.7 },
  { path: "/beginner-guide/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/traits/", changeFrequency: "weekly", priority: 0.7 },
  { path: "/updates/", changeFrequency: "weekly", priority: 0.7 },
  { path: "/fishing/", changeFrequency: "weekly", priority: 0.7 },
  { path: "/tidal-siege/", changeFrequency: "weekly", priority: 0.7 },
  { path: "/team-builder/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/maps/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/game-modes/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/gamepasses/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/daily-checklist/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about/", changeFrequency: "monthly", priority: 0.3 },
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

  return entries;
}
