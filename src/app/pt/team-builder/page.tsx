import type { Metadata } from "next";
import { TeamBuilderView } from "@/components/TeamBuilderView";
import { teamBuilderPage } from "@/data/pages/toolsPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: teamBuilderPage.pt.metaTitle,
  description: teamBuilderPage.pt.metaDescription,
  alternates: hreflangAlternates("/team-builder/", "pt"),
};

export default function Page() {
  return <TeamBuilderView locale="pt" />;
}
