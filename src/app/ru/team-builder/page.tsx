import type { Metadata } from "next";
import { TeamBuilderView } from "@/components/TeamBuilderView";
import { teamBuilderPage } from "@/data/pages/toolsPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: teamBuilderPage.ru.metaTitle,
  description: teamBuilderPage.ru.metaDescription,
  alternates: hreflangAlternates("/team-builder/", "ru"),
};

export default function Page() {
  return <TeamBuilderView locale="ru" />;
}
