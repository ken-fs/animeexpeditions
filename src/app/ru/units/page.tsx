import type { Metadata } from "next";
import { UnitsView } from "@/components/UnitsView";
import { tierUnits } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: tierUnits.ru.unitsMetaTitle,
  description: tierUnits.ru.unitsMetaDesc,
  alternates: hreflangAlternates("/units/", "ru"),
};

export default function Unitsru() {
  return <UnitsView locale="ru" />;
}
