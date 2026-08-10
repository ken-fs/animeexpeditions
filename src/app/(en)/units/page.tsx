import type { Metadata } from "next";
import { UnitsView } from "@/components/UnitsView";
import { tierUnits } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: tierUnits.en.unitsMetaTitle,
  description: tierUnits.en.unitsMetaDesc,
  alternates: hreflangAlternates("/units/"),
};

export default function Units() {
  return <UnitsView locale="en" />;
}
