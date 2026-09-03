import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";
import { aboutPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: aboutPage.pt.metaTitle,
  description: aboutPage.pt.metaDescription,
  alternates: hreflangAlternates("/about/", "pt"),
};

export default function Page() {
  return <AboutView locale="pt" />;
}
