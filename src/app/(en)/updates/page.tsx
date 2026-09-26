import type { Metadata } from "next";
import { hreflangAlternates } from "@/lib/seo";
import { UpdatesView } from "@/components/UpdatesView";

export const metadata: Metadata = {
  title: "Anime Expeditions Updates — Update 3.0 Patch Notes & Events (Sep 2026)",
  description:
    "Every Anime Expeditions update, newest first — Update 3.0 (Sep 25) with Boss Rush and new units, plus event windows, limited modes, cosmetics and fixes.",
  alternates: { canonical: "https://animeexpeditions.dev/updates/" },
};

export default function Updates() {
  return <UpdatesView locale="en" />;
}
