import type { Metadata } from "next";
import { MapsView } from "@/components/MapsView";
import { mapsPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: mapsPage.ru.metaTitle,
  description: mapsPage.ru.metaDescription,
  alternates: hreflangAlternates("/maps/", "ru"),
};

export default function Page() {
  return <MapsView locale="ru" />;
}
