import { TeamBuilder } from "@/components/TeamBuilder";
import { Marquee, CabinetFooter, CrossLinks } from "@/components/crt";
import { UNITS_VERIFIED } from "@/data/units";
import { teamBuilderPage } from "@/data/pages/toolsPages";
import { intlLocale, type Locale } from "@/data/i18n";

export function TeamBuilderView({ locale = "en" }: { locale?: Locale }) {
  const t = teamBuilderPage[locale];
  const prettyDate = new Date(UNITS_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-10 sm:py-14">
      <header className="text-center">
        <h1 className="font-display text-xl leading-relaxed phosphor-amber sm:text-3xl sm:leading-relaxed">
          {t.h1}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-dim">{t.intro}</p>
        <p className="mt-4 font-display text-[0.55rem] text-dim">
          {t.stamp} · {prettyDate.toUpperCase()}
        </p>
      </header>

      <div className="mt-10">
        <TeamBuilder locale={locale} />
      </div>

      <section className="mt-14 max-w-2xl">
        <Marquee color="cyan">{t.howTitle}</Marquee>
        <ol className="mt-5 space-y-2 text-dim">
          {t.howSteps.map((step, i) => (
            <li key={i}>
              <span className="phosphor-magenta font-display text-[0.55rem]">
                {String(i + 1).padStart(2, "0")}
              </span>{" "}
              {step}
            </li>
          ))}
        </ol>
      </section>

      <CrossLinks cross={t.cross} locale={locale} />

      <CabinetFooter />
    </main>
  );
}
