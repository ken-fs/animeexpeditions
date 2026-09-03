import type { Metadata } from "next";
import { TraitsView } from "@/components/TraitsView";
import { traitsPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: traitsPage.ru.metaTitle,
  description: traitsPage.ru.metaDescription,
  alternates: hreflangAlternates("/traits/", "ru"),
};

export default function Page() {
  return <TraitsView locale="ru" />;
}
