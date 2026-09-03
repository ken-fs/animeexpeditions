import type { Metadata } from "next";
import { GamepassesView } from "@/components/GamepassesView";
import { gamepassesPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: gamepassesPage.pt.metaTitle,
  description: gamepassesPage.pt.metaDescription,
  alternates: hreflangAlternates("/gamepasses/", "pt"),
};

export default function Page() {
  return <GamepassesView locale="pt" />;
}
