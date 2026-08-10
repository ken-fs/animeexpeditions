import type { Metadata } from "next";
import { PlannerView } from "@/components/PlannerView";
import { plannerGuide } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: plannerGuide.ru.planMetaTitle,
  description: plannerGuide.ru.planMetaDesc,
  alternates: hreflangAlternates("/evolution-planner/", "ru"),
};

export default function Plannerru() {
  return <PlannerView locale="ru" />;
}
