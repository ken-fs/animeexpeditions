import type { Metadata } from "next";
import { UpdatesView } from "@/components/UpdatesView";
import { updatesPage } from "@/data/pages/contentPages";
import { hreflangAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: updatesPage.pt.metaTitle,
  description: updatesPage.pt.metaDescription,
  alternates: hreflangAlternates("/updates/", "pt"),
};

export default function Page() {
  return <UpdatesView locale="pt" />;
}
