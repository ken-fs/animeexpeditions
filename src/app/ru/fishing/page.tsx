import type { Metadata } from "next";
import { FishingView } from "@/components/FishingView";
import { fishingPage } from "@/data/pages/eventPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: fishingPage.ru.metaTitle,
  description: fishingPage.ru.metaDescription,
  alternates: hreflangAlternates("/fishing/", "ru"),
};

export default function Page() {
  return <FishingView locale="ru" />;
}
