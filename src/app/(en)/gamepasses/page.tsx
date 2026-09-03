import type { Metadata } from "next";
import { hreflangAlternates } from "@/lib/seo";
import { GamepassesView } from "@/components/GamepassesView";

export const metadata: Metadata = {
  title: "Anime Expeditions Gamepasses — Prices & What They Do",
  description:
    "Every Anime Expeditions gamepass with its verified Robux price and an honest note on what it reportedly does — VIP, Shiny Hunter, and Display All Units.",
  alternates: { canonical: "https://animeexpeditions.dev/gamepasses/" },
};

export default function Gamepasses() {
  return <GamepassesView locale="en" />;
}
