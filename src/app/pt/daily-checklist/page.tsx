import type { Metadata } from "next";
import { ChecklistView } from "@/components/ChecklistView";
import { checklistPage } from "@/data/pages/toolsPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: checklistPage.pt.metaTitle,
  description: checklistPage.pt.metaDescription,
  alternates: hreflangAlternates("/daily-checklist/", "pt"),
};

export default function Page() {
  return <ChecklistView locale="pt" />;
}
