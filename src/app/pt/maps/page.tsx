import type { Metadata } from "next";
import { MapsView } from "@/components/MapsView";
import { mapsPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: mapsPage.pt.metaTitle,
  description: mapsPage.pt.metaDescription,
  alternates: hreflangAlternates("/maps/", "pt"),
};

export default function Page() {
  return <MapsView locale="pt" />;
}
