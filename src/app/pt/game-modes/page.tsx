import type { Metadata } from "next";
import { GameModesView } from "@/components/GameModesView";
import { gameModesPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: gameModesPage.pt.metaTitle,
  description: gameModesPage.pt.metaDescription,
  alternates: hreflangAlternates("/game-modes/", "pt"),
};

export default function Page() {
  return <GameModesView locale="pt" />;
}
