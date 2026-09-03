import type { Metadata } from "next";
import { MapsView } from "@/components/MapsView";
import { mapsPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: mapsPage.es.metaTitle,
  description: mapsPage.es.metaDescription,
  alternates: hreflangAlternates("/maps/", "es"),
};

export default function Page() {
  return <MapsView locale="es" />;
}
