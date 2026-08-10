import type { Metadata } from "next";
import { CodesPageView } from "@/components/CodesPageView";
import { codesPage } from "@/data/i18n";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: codesPage.en.metaTitle,
  description: codesPage.en.metaDescription,
  alternates: hreflangAlternates("/"),
};

export default function Home() {
  return <CodesPageView locale="en" />;
}
