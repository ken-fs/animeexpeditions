import type { Metadata } from "next";
import { CodesPageView } from "@/components/CodesPageView";
import { codesPage } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: codesPage.pt.metaTitle,
  description: codesPage.pt.metaDescription,
  alternates: hreflangAlternates("/", "pt"),
};

export default function HomePt() {
  return <CodesPageView locale="pt" />;
}
