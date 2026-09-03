import type { Metadata } from "next";
import { GameModesView } from "@/components/GameModesView";
import { gameModesPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: gameModesPage.es.metaTitle,
  description: gameModesPage.es.metaDescription,
  alternates: hreflangAlternates("/game-modes/", "es"),
};

export default function Page() {
  return <GameModesView locale="es" />;
}
