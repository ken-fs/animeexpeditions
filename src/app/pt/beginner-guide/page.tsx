import type { Metadata } from "next";
import { GuideView } from "@/components/GuideView";
import { plannerGuide } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: plannerGuide.pt.guideMetaTitle,
  description: plannerGuide.pt.guideMetaDesc,
  alternates: hreflangAlternates("/beginner-guide/", "pt"),
};

export default function Guidept() {
  return <GuideView locale="pt" />;
}
