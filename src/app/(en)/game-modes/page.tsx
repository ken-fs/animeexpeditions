import type { Metadata } from "next";
import { hreflangAlternates } from "@/lib/seo";
import { GameModesView } from "@/components/GameModesView";

export const metadata: Metadata = {
  title: "Anime Expeditions Game Modes — Story, Expeditions, Raids & Events",
  description:
    "Every Anime Expeditions game mode explained: Story, Expeditions (level 20), Raids (level 25), Co-op, and limited event modes like Villain Invasion — with unlock levels.",
  alternates: { canonical: "https://animeexpeditions.dev/game-modes/" },
};

export default function GameModes() {
  return <GameModesView locale="en" />;
}
