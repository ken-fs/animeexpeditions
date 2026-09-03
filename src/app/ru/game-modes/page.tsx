import type { Metadata } from "next";
import { GameModesView } from "@/components/GameModesView";
import { gameModesPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: gameModesPage.ru.metaTitle,
  description: gameModesPage.ru.metaDescription,
  alternates: hreflangAlternates("/game-modes/", "ru"),
};

export default function Page() {
  return <GameModesView locale="ru" />;
}
