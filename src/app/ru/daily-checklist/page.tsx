import type { Metadata } from "next";
import { ChecklistView } from "@/components/ChecklistView";
import { checklistPage } from "@/data/pages/toolsPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: checklistPage.ru.metaTitle,
  description: checklistPage.ru.metaDescription,
  alternates: hreflangAlternates("/daily-checklist/", "ru"),
};

export default function Page() {
  return <ChecklistView locale="ru" />;
}
