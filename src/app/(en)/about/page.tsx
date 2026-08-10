import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About — Anime Expeditions Guide",
  description:
    "An independent, fan-made Anime Expeditions guide. How we verify codes, how tier rankings are decided, and what's confirmed versus reported.",
  alternates: { canonical: "https://animeexpeditions.dev/about/" },
};

export default function About() {
  return <AboutView locale="en" />;
}
