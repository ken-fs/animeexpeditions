import type { Metadata } from "next";
import { GamepassesView } from "@/components/GamepassesView";
import { gamepassesPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: gamepassesPage.es.metaTitle,
  description: gamepassesPage.es.metaDescription,
  alternates: hreflangAlternates("/gamepasses/", "es"),
};

export default function Page() {
  return <GamepassesView locale="es" />;
}
