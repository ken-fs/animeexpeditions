import type { Metadata } from "next";
import { MapsView } from "@/components/MapsView";

export const metadata: Metadata = {
  title: "Anime Expeditions Maps & Drops — Story Map Equipment Guide",
  description:
    "All 5 Anime Expeditions Story maps and their drops: food, standard equipment, and the unit equipment each evolved carry needs. Farm the right map for the piece you want.",
  alternates: { canonical: "https://animeexpeditions.dev/maps/" },
};

export default function Maps() {
  return <MapsView locale="en" />;
}
