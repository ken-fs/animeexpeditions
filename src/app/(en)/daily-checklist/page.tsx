import type { Metadata } from "next";
import { ChecklistView } from "@/components/ChecklistView";

export const metadata: Metadata = {
  title: "Anime Expeditions Daily Checklist — Dailies & Weeklies Tracker",
  description:
    "A daily and weekly checklist for Anime Expeditions — codes, bounties, Expedition production, raids and more. Saves your progress locally and resets on schedule.",
  alternates: { canonical: "https://animeexpeditions.dev/daily-checklist/" },
};

export default function DailyChecklistPage() {
  return <ChecklistView locale="en" />;
}
