import type { Metadata } from "next";
import { TraitsView } from "@/components/TraitsView";
import { traitsPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: traitsPage.es.metaTitle,
  description: traitsPage.es.metaDescription,
  alternates: hreflangAlternates("/traits/", "es"),
};

export default function Page() {
  return <TraitsView locale="es" />;
}
