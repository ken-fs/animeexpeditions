import type { Metadata } from "next";
import { PlannerView } from "@/components/PlannerView";
import { plannerGuide } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: plannerGuide.pt.planMetaTitle,
  description: plannerGuide.pt.planMetaDesc,
  alternates: hreflangAlternates("/evolution-planner/", "pt"),
};

export default function Plannerpt() {
  return <PlannerView locale="pt" />;
}
