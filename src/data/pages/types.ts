// Shared types for the per-page locale string modules (src/data/pages/*).
// Pattern: game terms & proper nouns (unit/item/trait/map names, currencies)
// stay in English across locales; UI prose is fully localized.

import type { Locale } from "../i18n";

export interface FaqItem {
  q: string;
  a: string;
}

/** Cross-link paragraph rendered as: before + link0 + between[0] + link1 + … + after */
export interface CrossText {
  before: string;
  links: { label: string; path: string }[];
  between: string[]; // length = links.length - 1
  after: string;
}

export type Loc<T> = Record<Locale, T>;
