import type { Metadata } from "next";
import { hreflangAlternates } from "@/lib/seo";
import { FishingView } from "@/components/FishingView";

export const metadata: Metadata = {
  title: "Anime Expeditions Fishing Guide — All 5 Rods, Unlocks & Rewards",
  description:
    "Every Anime Expeditions fishing rod with stats and unlocks — Lucky Rod 1% drop, Auto Rod Wave 150 route — plus what fishing pays out: Sand Dollars, Bestiary fish, and the Sharkfang unit.",
  alternates: hreflangAlternates("/fishing/", "en"),
};

export default function Fishing() {
  return <FishingView locale="en" />;
}
