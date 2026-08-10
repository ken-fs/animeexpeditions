import type { Metadata } from "next";
import { TierListView } from "@/components/TierListView";
import { tierUnits } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: tierUnits.es.tierMetaTitle,
  description: tierUnits.es.tierMetaDesc,
  alternates: hreflangAlternates("/tier-list/", "es"),
};

export default function TierListes() {
  return <TierListView locale="es" />;
}
