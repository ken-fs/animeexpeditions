import { DailyChecklist } from "@/components/DailyChecklist";
import { Marquee, CabinetFooter, CrossLinks } from "@/components/crt";
import { CHECKLIST_VERIFIED } from "@/data/checklist";
import { checklistPage } from "@/data/pages/toolsPages";
import { intlLocale, type Locale } from "@/data/i18n";

export function ChecklistView({ locale = "en" }: { locale?: Locale }) {
  const t = checklistPage[locale];
  const prettyDate = new Date(CHECKLIST_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
      <header className="text-center">
        <h1 className="font-display text-xl leading-relaxed phosphor-green sm:text-3xl sm:leading-relaxed">
          {t.h1}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-dim">{t.intro}</p>
        <p className="mt-4 font-display text-[0.55rem] text-dim">
          {t.stamp} · {prettyDate.toUpperCase()}
        </p>
      </header>

      <div className="mt-10">
        <DailyChecklist locale={locale} />
      </div>

      <section className="mt-14">
        <Marquee color="cyan">{t.whyTitle}</Marquee>
        <p className="mt-4 text-dim">{t.whyBody}</p>
      </section>

      <CrossLinks cross={t.cross} locale={locale} />

      <CabinetFooter />
    </main>
  );
}
