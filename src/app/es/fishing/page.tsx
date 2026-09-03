import type { Metadata } from "next";
import { FishingView } from "@/components/FishingView";
import { fishingPage } from "@/data/pages/eventPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: fishingPage.es.metaTitle,
  description: fishingPage.es.metaDescription,
  alternates: hreflangAlternates("/fishing/", "es"),
};

export default function Page() {
  return <FishingView locale="es" />;
}
