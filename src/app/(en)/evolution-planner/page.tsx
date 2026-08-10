import type { Metadata } from "next";
import { PlannerView } from "@/components/PlannerView";
import { plannerGuide } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: plannerGuide.en.planMetaTitle,
  description: plannerGuide.en.planMetaDesc,
  alternates: hreflangAlternates("/evolution-planner/"),
};

export default function EvolutionPlannerPage() {
  return <PlannerView locale="en" />;
}
