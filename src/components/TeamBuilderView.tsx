import Link from "next/link";
import { TeamBuilder } from "@/components/TeamBuilder";
import { Marquee, CabinetFooter } from "@/components/crt";
import { UNITS_VERIFIED } from "@/data/units";
import { intlLocale, localePath, type Locale } from "@/data/i18n";

// English-only for now.
export function TeamBuilderView({ locale = "en" }: { locale?: Locale }) {
  const prettyDate = new Date(UNITS_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-10 sm:py-14">
      <header className="text-center">
        <h1 className="font-display text-xl leading-relaxed phosphor-amber sm:text-3xl sm:leading-relaxed">
          ANIME EXPEDITIONS TEAM BUILDER
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-dim">
          Pick up to six units and see the gaps before a run does. A team is only
          as good as its weakest role — this flags whether you&apos;re missing
          damage, support, or control, not just whether your units are strong.
        </p>
        <p className="mt-4 font-display text-[0.55rem] text-dim">
          ROSTER DATA · {prettyDate.toUpperCase()}
        </p>
      </header>

      <div className="mt-10">
        <TeamBuilder />
      </div>

      <section className="mt-14 max-w-2xl">
        <Marquee color="cyan">HOW TO READ IT</Marquee>
        <ol className="mt-5 space-y-2 text-dim">
          {[
            "Build around one or two S-tier carries, then fill the roles around them — don't stack six damage units.",
            "Watch the role coverage row: a team with no control unit stalls on stages with heavy enemy pressure, however much damage you bring.",
            "Support amplifies your carry's damage — one good support usually beats a third DPS.",
            "Watch-tier picks are unproven. Fine to experiment, risky to build your whole team on.",
          ].map((step, i) => (
            <li key={i}>
              <span className="phosphor-magenta font-display text-[0.55rem]">
                {String(i + 1).padStart(2, "0")}
              </span>{" "}
              {step}
            </li>
          ))}
        </ol>
        <p className="mt-6 text-dim">
          Not sure who&apos;s worth a slot? Check the{" "}
          <Link href={localePath(locale, "/tier-list/")} className="phosphor-cyan hover:underline">
            tier list
          </Link>{" "}
          and the full{" "}
          <Link href={localePath(locale, "/units/")} className="phosphor-cyan hover:underline">
            unit roster
          </Link>
          , then grab{" "}
          <Link href={localePath(locale, "/")} className="phosphor-cyan hover:underline">
            codes
          </Link>{" "}
          to reroll their traits.
        </p>
      </section>

      <CabinetFooter />
    </main>
  );
}
