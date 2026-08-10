import type { Metadata } from "next";
import { TierListView } from "@/components/TierListView";
import { tierUnits } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: tierUnits.en.tierMetaTitle,
  description: tierUnits.en.tierMetaDesc,
  alternates: hreflangAlternates("/tier-list/"),
};

export default function TierList() {
  return <TierListView locale="en" />;
}
