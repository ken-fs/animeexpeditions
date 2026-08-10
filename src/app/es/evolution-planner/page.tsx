import type { Metadata } from "next";
import { PlannerView } from "@/components/PlannerView";
import { plannerGuide } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: plannerGuide.es.planMetaTitle,
  description: plannerGuide.es.planMetaDesc,
  alternates: hreflangAlternates("/evolution-planner/", "es"),
};

export default function Planneres() {
  return <PlannerView locale="es" />;
}
