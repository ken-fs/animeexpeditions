import type { Metadata } from "next";
import { UnitsView } from "@/components/UnitsView";
import { tierUnits } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: tierUnits.es.unitsMetaTitle,
  description: tierUnits.es.unitsMetaDesc,
  alternates: hreflangAlternates("/units/", "es"),
};

export default function Unitses() {
  return <UnitsView locale="es" />;
}
