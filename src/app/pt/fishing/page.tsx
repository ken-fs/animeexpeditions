import type { Metadata } from "next";
import { FishingView } from "@/components/FishingView";
import { fishingPage } from "@/data/pages/eventPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: fishingPage.pt.metaTitle,
  description: fishingPage.pt.metaDescription,
  alternates: hreflangAlternates("/fishing/", "pt"),
};

export default function Page() {
  return <FishingView locale="pt" />;
}
