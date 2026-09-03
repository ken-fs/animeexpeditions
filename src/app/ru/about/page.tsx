import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";
import { aboutPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: aboutPage.ru.metaTitle,
  description: aboutPage.ru.metaDescription,
  alternates: hreflangAlternates("/about/", "ru"),
};

export default function Page() {
  return <AboutView locale="ru" />;
}
