import type { Metadata } from "next";
import { GuideView } from "@/components/GuideView";
import { plannerGuide } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: plannerGuide.ru.guideMetaTitle,
  description: plannerGuide.ru.guideMetaDesc,
  alternates: hreflangAlternates("/beginner-guide/", "ru"),
};

export default function Guideru() {
  return <GuideView locale="ru" />;
}
