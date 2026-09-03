import type { Metadata } from "next";
import { hreflangAlternates } from "@/lib/seo";
import { UpdatesView } from "@/components/UpdatesView";

export const metadata: Metadata = {
  title: "Anime Expeditions Updates — Patch Notes & Event Windows",
  description:
    "Every Anime Expeditions update and event window, newest first: new units, limited modes like Villain Invasion, cosmetics, and fixes. Dates from the official Roblox schedule.",
  alternates: { canonical: "https://animeexpeditions.dev/updates/" },
};

export default function Updates() {
  return <UpdatesView locale="en" />;
}
