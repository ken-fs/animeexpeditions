import type { Metadata } from "next";
import { hreflangAlternates } from "@/lib/seo";
import { TeamBuilderView } from "@/components/TeamBuilderView";

export const metadata: Metadata = {
  title: "Anime Expeditions Team Builder — Check Your Role Coverage",
  description:
    "Build an Anime Expeditions team of up to six units and instantly see role coverage gaps — damage, support, and control — plus tier quality. Free, runs in your browser.",
  alternates: { canonical: "https://animeexpeditions.dev/team-builder/" },
};

export default function TeamBuilderPage() {
  return <TeamBuilderView locale="en" />;
}
