import type { Metadata } from "next";
import { TraitsView } from "@/components/TraitsView";
import { traitsPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: traitsPage.pt.metaTitle,
  description: traitsPage.pt.metaDescription,
  alternates: hreflangAlternates("/traits/", "pt"),
};

export default function Page() {
  return <TraitsView locale="pt" />;
}
