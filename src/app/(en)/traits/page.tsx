import type { Metadata } from "next";
import { TraitsView } from "@/components/TraitsView";

export const metadata: Metadata = {
  title: "Anime Expeditions Traits — Effects, Rates & Reroll Guide",
  description:
    "Every Anime Expeditions trait with its effect, roll rate, and reroll pity — plus which traits are worth keeping and how to reroll without wasting Trait Crystals.",
  // English-only page for now — self-canonical, no hreflang until localized.
  alternates: { canonical: "https://animeexpeditions.dev/traits/" },
};

export default function Traits() {
  return <TraitsView locale="en" />;
}
