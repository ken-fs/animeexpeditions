import { TraitRerollCalculator } from "@/components/TraitRerollCalculator";
import { Marquee, CabinetFooter, CrossLinks } from "@/components/crt";
import { TRAITS_VERIFIED } from "@/data/traits";
import { rerollPage } from "@/data/pages/toolsPages";
import { intlLocale, type Locale } from "@/data/i18n";

export function TraitRerollView({ locale = "en" }: { locale?: Locale }) {
  const t = rerollPage[locale];
  const prettyDate = new Date(TRAITS_VERIFIED).toLocaleDateString(intlLocale(locale), {
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
        <TraitRerollCalculator locale={locale} />
      </div>

      <CrossLinks cross={t.cross} locale={locale} />
      <CabinetFooter />
    </main>
  );
}
