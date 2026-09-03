import type { Metadata } from "next";
import { hreflangAlternates } from "@/lib/seo";
import { TidalSiegeView } from "@/components/TidalSiegeView";

export const metadata: Metadata = {
  title: "Anime Expeditions Tidal Siege & Portals Guide — Sand Dollars, Wave 150, Secret Units",
  description:
    "Tidal Siege event guide for Anime Expeditions: Sand Dollar sources, Summer Capsules, the Wave 150 Auto Rod route, Tier 5 portal materials, and how to get Sovereign, Lightning God, and Sharkfang.",
  alternates: hreflangAlternates("/tidal-siege/", "en"),
};

export default function TidalSiege() {
  return <TidalSiegeView locale="en" />;
}
