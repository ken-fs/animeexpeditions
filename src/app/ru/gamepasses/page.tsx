import type { Metadata } from "next";
import { GamepassesView } from "@/components/GamepassesView";
import { gamepassesPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: gamepassesPage.ru.metaTitle,
  description: gamepassesPage.ru.metaDescription,
  alternates: hreflangAlternates("/gamepasses/", "ru"),
};

export default function Page() {
  return <GamepassesView locale="ru" />;
}
