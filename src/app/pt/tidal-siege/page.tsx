import type { Metadata } from "next";
import { TidalSiegeView } from "@/components/TidalSiegeView";
import { tidalSiegePage } from "@/data/pages/eventPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: tidalSiegePage.pt.metaTitle,
  description: tidalSiegePage.pt.metaDescription,
  alternates: hreflangAlternates("/tidal-siege/", "pt"),
};

export default function Page() {
  return <TidalSiegeView locale="pt" />;
}
