import type { Metadata } from "next";
import { CodesPageView } from "@/components/CodesPageView";
import { codesPage } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: codesPage.ru.metaTitle,
  description: codesPage.ru.metaDescription,
  alternates: hreflangAlternates("/", "ru"),
};

export default function HomeRu() {
  return <CodesPageView locale="ru" />;
}
