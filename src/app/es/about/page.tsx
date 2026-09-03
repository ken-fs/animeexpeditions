import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";
import { aboutPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: aboutPage.es.metaTitle,
  description: aboutPage.es.metaDescription,
  alternates: hreflangAlternates("/about/", "es"),
};

export default function Page() {
  return <AboutView locale="es" />;
}
