import type { Metadata } from "next";
import { TraitRerollView } from "@/components/TraitRerollView";
import { rerollPage } from "@/data/pages/toolsPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: rerollPage.en.metaTitle,
  description: rerollPage.en.metaDescription,
  alternates: hreflangAlternates("/trait-reroll/"),
};

export default function Page() {
  return <TraitRerollView locale="en" />;
}
