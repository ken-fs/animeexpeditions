import type { Metadata } from "next";
import { TidalSiegeView } from "@/components/TidalSiegeView";
import { tidalSiegePage } from "@/data/pages/eventPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: tidalSiegePage.es.metaTitle,
  description: tidalSiegePage.es.metaDescription,
  alternates: hreflangAlternates("/tidal-siege/", "es"),
};

export default function Page() {
  return <TidalSiegeView locale="es" />;
}
