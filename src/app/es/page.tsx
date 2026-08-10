import type { Metadata } from "next";
import { CodesPageView } from "@/components/CodesPageView";
import { codesPage } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: codesPage.es.metaTitle,
  description: codesPage.es.metaDescription,
  alternates: hreflangAlternates("/", "es"),
};

export default function HomeEs() {
  return <CodesPageView locale="es" />;
}
