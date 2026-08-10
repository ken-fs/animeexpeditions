import type { Metadata } from "next";
import Link from "next/link";
import { EvolutionPlanner } from "@/components/EvolutionPlanner";
import { Marquee, CabinetFooter } from "@/components/crt";
import { UNITS_VERIFIED } from "@/data/units";

const SITE_URL = "https://animeexpeditions.dev";

export const metadata: Metadata = {
  title: "Anime Expeditions Evolution Planner — Materials Checklist",
  description:
    "Pick the Anime Expeditions units you want to evolve and get a combined checklist of the evolution materials you need to farm. Free interactive planner.",
  alternates: { canonical: "/evolution-planner/" },
  openGraph: {
    title: "Anime Expeditions Evolution Planner",
    description: "Select units to evolve and get a combined materials checklist.",
    url: `${SITE_URL}/evolution-planner/`,
    type: "website",
  },
};

const prettyDate = new Date(UNITS_VERIFIED).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function EvolutionPlannerPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-10 sm:py-14">
      <header className="text-center">
        <h1 className="font-display text-xl leading-relaxed phosphor-magenta sm:text-3xl sm:leading-relaxed">
          EVOLUTION PLANNER
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-dim">
          Tick the units you&apos;re building and the planner combines every
          evolution material into one farm checklist — know exactly what to grind
          before you spend a reroll.
        </p>
        <p className="mt-4 font-display text-[0.55rem] text-dim">
          DATA UPDATED {prettyDate.toUpperCase()}
        </p>
      </header>

      <div className="mt-10">
        <EvolutionPlanner />
      </div>

      <section className="mt-14 max-w-2xl">
        <Marquee color="cyan">HOW TO USE</Marquee>
        <ol className="mt-5 space-y-2 text-dim">
          <li>
            <span className="phosphor-magenta font-display text-[0.55rem]">
              01
            </span>{" "}
            Check every unit you plan to evolve.
          </li>
          <li>
            <span className="phosphor-magenta font-display text-[0.55rem]">
              02
            </span>{" "}
            The panel lists each material and which units need it.
          </li>
          <li>
            <span className="phosphor-magenta font-display text-[0.55rem]">
              03
            </span>{" "}
            Farm those materials, then evolve — no wasted resources.
          </li>
        </ol>
        <p className="mt-6 text-dim">
          New to the roster? Start with the{" "}
          <Link href="/tier-list/" className="phosphor-cyan hover:underline">
            tier ranking
          </Link>
          , browse the full{" "}
          <Link href="/units/" className="phosphor-cyan hover:underline">
            unit roster
          </Link>
          , and redeem{" "}
          <Link href="/" className="phosphor-cyan hover:underline">
            working codes
          </Link>
          .
        </p>
      </section>

      <CabinetFooter />
    </main>
  );
}
