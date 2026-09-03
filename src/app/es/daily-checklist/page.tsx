import type { Metadata } from "next";
import { ChecklistView } from "@/components/ChecklistView";
import { checklistPage } from "@/data/pages/toolsPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: checklistPage.es.metaTitle,
  description: checklistPage.es.metaDescription,
  alternates: hreflangAlternates("/daily-checklist/", "es"),
};

export default function Page() {
  return <ChecklistView locale="es" />;
}
