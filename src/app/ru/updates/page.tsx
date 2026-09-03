import type { Metadata } from "next";
import { UpdatesView } from "@/components/UpdatesView";
import { updatesPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: updatesPage.ru.metaTitle,
  description: updatesPage.ru.metaDescription,
  alternates: hreflangAlternates("/updates/", "ru"),
};

export default function Page() {
  return <UpdatesView locale="ru" />;
}
