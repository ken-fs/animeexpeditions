import type { Metadata } from "next";
import { TierListView } from "@/components/TierListView";
import { tierUnits } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: tierUnits.ru.tierMetaTitle,
  description: tierUnits.ru.tierMetaDesc,
  alternates: hreflangAlternates("/tier-list/", "ru"),
};

export default function TierListru() {
  return <TierListView locale="ru" />;
}
