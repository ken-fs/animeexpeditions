import type { Metadata } from "next";
import { TidalSiegeView } from "@/components/TidalSiegeView";
import { tidalSiegePage } from "@/data/pages/eventPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: tidalSiegePage.ru.metaTitle,
  description: tidalSiegePage.ru.metaDescription,
  alternates: hreflangAlternates("/tidal-siege/", "ru"),
};

export default function Page() {
  return <TidalSiegeView locale="ru" />;
}
