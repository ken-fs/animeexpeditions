import type { Metadata } from "next";
import { FishingView } from "@/components/FishingView";

export const metadata: Metadata = {
  title: "Anime Expeditions Fishing Guide — All 5 Rods, Unlocks & Rewards",
  description:
    "Every Anime Expeditions fishing rod with stats and unlocks — Lucky Rod 1% drop, Auto Rod Wave 150 route — plus what fishing pays out: Sand Dollars, Bestiary fish, and the Sharkfang unit.",
  // English-only page for now — self-canonical, no hreflang until localized.
  alternates: { canonical: "https://animeexpeditions.dev/fishing/" },
};

export default function Fishing() {
  return <FishingView locale="en" />;
}
