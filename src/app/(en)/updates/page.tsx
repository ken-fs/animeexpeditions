import type { Metadata } from "next";
import { hreflangAlternates } from "@/lib/seo";
import { UpdatesView } from "@/components/UpdatesView";

export const metadata: Metadata = {
  title: "Anime Expeditions Updates — Update 3.5 Monster Clash Patch Notes (Oct 2026)",
  description:
    "Every Anime Expeditions update, newest first — Update 3.5 Monster Clash (Oct 7) with two new units, the Monster Hunt boards and an hourly world boss, plus event windows, limited modes and fixes.",
  alternates: { canonical: "https://animeexpeditions.dev/updates/" },
};

export default function Updates() {
  return <UpdatesView locale="en" />;
}
