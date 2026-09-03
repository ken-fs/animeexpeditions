import { Panel, Marquee, CabinetFooter, CrossLinks } from "@/components/crt";
import { traits, KEEP_PHOSPHOR, TRAITS_VERIFIED, type TraitKeep } from "@/data/traits";
import { traitsPage } from "@/data/pages/contentPages";
import { intlLocale, type Locale } from "@/data/i18n";

export function TraitsView({ locale = "en" }: { locale?: Locale }) {
  const t = traitsPage[locale];
  const prettyDate = new Date(TRAITS_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const keepLabel = (k: TraitKeep) =>
    (k === "keep" ? t.keepLabels.keep : k === "situational" ? t.keepLabels.situational : t.keepLabels.replaceLater).toUpperCase();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="mx-auto w-full max-w-4xl px-5 py-10 sm:py-14">
        <header className="text-center">
          <h1 className="font-display text-xl leading-relaxed phosphor-cyan sm:text-3xl sm:leading-relaxed">
            {t.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-dim">{t.intro}</p>
          <p className="mt-4 font-display text-[0.55rem] text-dim">
            {t.stamp} {prettyDate.toUpperCase()}
          </p>
        </header>

        {/* Traits board */}
        <Panel className="mt-10">
          <div className="flex items-center justify-between border-b-2 border-grid px-4 py-3">
            <Marquee color="cyan">{t.tableTitle}</Marquee>
            <span className="font-display text-[0.55rem] text-dim">
              {traits.length} {t.traitsSuffix}
            </span>
          </div>
          <div className="divide-y-2 divide-grid/50">
            {traits.map((tr) => (
              <div key={tr.name} className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center">
                <div className="sm:w-40 shrink-0">
                  <span className="phosphor-amber">{tr.name}</span>
                  <span className={`ml-2 font-display text-[0.5rem] phosphor-${KEEP_PHOSPHOR[tr.keep]}`}>
                    {keepLabel(tr.keep)}
                  </span>
                </div>
                <div className="flex-1 text-fg">{tr.effect}</div>
                <div className="flex shrink-0 gap-4 font-display text-[0.55rem] text-dim">
                  <span className="phosphor-cyan">{tr.rate}</span>
                  <span className="w-28 text-right">
                    {tr.pity ? `${t.pityPrefix} ${tr.pity}` : t.noPity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* Reroll strategy */}
        <section className="mt-14">
          <Marquee color="amber">{t.rerollTitle}</Marquee>
          <ol className="mt-5 space-y-4">
            {t.rerollSteps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-sm phosphor-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-fg">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-dim">{t.rerollNote}</p>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <Marquee color="cyan">{t.faqTitle}</Marquee>
          <div className="mt-5 space-y-6">
            {t.faq.map((f) => (
              <div key={f.q}>
                <h3 className="phosphor-amber">{f.q}</h3>
                <p className="mt-1.5 text-dim">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <CrossLinks cross={t.cross} locale={locale} />

        <CabinetFooter />
      </main>
    </>
  );
}
