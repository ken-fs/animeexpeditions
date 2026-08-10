import Link from "next/link";
import { EvolutionPlanner } from "@/components/EvolutionPlanner";
import { Marquee, CabinetFooter } from "@/components/crt";
import { UNITS_VERIFIED } from "@/data/units";
import { plannerGuide, intlLocale, localePath, type Locale } from "@/data/i18n";

export function PlannerView({ locale }: { locale: Locale }) {
  const t = plannerGuide[locale];
  const prettyDate = new Date(UNITS_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-10 sm:py-14">
      <header className="text-center">
        <h1 className="font-display text-xl leading-relaxed phosphor-magenta sm:text-3xl sm:leading-relaxed">
          {t.planH1}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-dim">{t.planIntro}</p>
        <p className="mt-4 font-display text-[0.55rem] text-dim">
          {t.dataUpdated} {prettyDate.toUpperCase()}
        </p>
      </header>

      <div className="mt-10">
        <EvolutionPlanner locale={locale} />
      </div>

      <section className="mt-14 max-w-2xl">
        <Marquee color="cyan">{t.howToUse}</Marquee>
        <ol className="mt-5 space-y-2 text-dim">
          {t.planSteps.map((step, i) => (
            <li key={i}>
              <span className="phosphor-magenta font-display text-[0.55rem]">
                {String(i + 1).padStart(2, "0")}
              </span>{" "}
              {step}
            </li>
          ))}
        </ol>
        <p className="mt-6 text-dim">
          {t.planCrossPre}
          <Link href={localePath(locale, "/tier-list/")} className="phosphor-cyan hover:underline">
            {t.tierLink}
          </Link>
          {t.planCrossMid}
          <Link href={localePath(locale, "/units/")} className="phosphor-cyan hover:underline">
            {t.rosterLink}
          </Link>
          {t.planCrossMid2}
          <Link href={localePath(locale, "/")} className="phosphor-cyan hover:underline">
            {t.codesLink}
          </Link>
          {t.end}
        </p>
      </section>

      <CabinetFooter />
    </main>
  );
}
