import type { Metadata } from "next";
import { TraitRerollView } from "@/components/TraitRerollView";
import { rerollPage } from "@/data/pages/toolsPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: rerollPage.ru.metaTitle,
  description: rerollPage.ru.metaDescription,
  alternates: hreflangAlternates("/trait-reroll/"),
};

export default function Page() {
  return <TraitRerollView locale="ru" />;
}
