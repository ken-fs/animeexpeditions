import type { Metadata } from "next";
import { hreflangAlternates } from "@/lib/seo";
import { TraitsView } from "@/components/TraitsView";

export const metadata: Metadata = {
  title: "Anime Expeditions Traits — Effects, Rates & Reroll Guide",
  description:
    "Every Anime Expeditions trait with its effect, roll rate, and reroll pity — plus which traits are worth keeping and how to reroll without wasting Trait Crystals.",
  alternates: hreflangAlternates("/traits/", "en"),
};

export default function Traits() {
  return <TraitsView locale="en" />;
}
