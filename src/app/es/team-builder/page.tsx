import type { Metadata } from "next";
import { TeamBuilderView } from "@/components/TeamBuilderView";
import { teamBuilderPage } from "@/data/pages/toolsPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: teamBuilderPage.es.metaTitle,
  description: teamBuilderPage.es.metaDescription,
  alternates: hreflangAlternates("/team-builder/", "es"),
};

export default function Page() {
  return <TeamBuilderView locale="es" />;
}
