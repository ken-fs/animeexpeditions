import type { Metadata } from "next";
import { UpdatesView } from "@/components/UpdatesView";
import { updatesPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: updatesPage.es.metaTitle,
  description: updatesPage.es.metaDescription,
  alternates: hreflangAlternates("/updates/", "es"),
};

export default function Page() {
  return <UpdatesView locale="es" />;
}
