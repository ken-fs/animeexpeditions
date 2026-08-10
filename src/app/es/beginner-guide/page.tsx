import type { Metadata } from "next";
import { GuideView } from "@/components/GuideView";
import { plannerGuide } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: plannerGuide.es.guideMetaTitle,
  description: plannerGuide.es.guideMetaDesc,
  alternates: hreflangAlternates("/beginner-guide/", "es"),
};

export default function Guidees() {
  return <GuideView locale="es" />;
}
