import type { Metadata } from "next";
import { GuideView } from "@/components/GuideView";
import { plannerGuide } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: plannerGuide.en.guideMetaTitle,
  description: plannerGuide.en.guideMetaDesc,
  alternates: hreflangAlternates("/beginner-guide/"),
};

export default function BeginnerGuide() {
  return <GuideView locale="en" />;
}
