import type { Metadata } from "next";
import { UnitsView } from "@/components/UnitsView";
import { tierUnits } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: tierUnits.pt.unitsMetaTitle,
  description: tierUnits.pt.unitsMetaDesc,
  alternates: hreflangAlternates("/units/", "pt"),
};

export default function Unitspt() {
  return <UnitsView locale="pt" />;
}
