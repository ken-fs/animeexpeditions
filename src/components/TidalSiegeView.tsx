import { Panel, Marquee, CabinetFooter, CrossLinks } from "@/components/crt";
import {
  sandDollarSources,
  summerShop,
  eventUnits,
  portalFacts,
  autoRodRoute,
  eventWarnings,
  SIEGE_VERIFIED,
} from "@/data/tidalSiege";
import { tidalSiegePage } from "@/data/pages/eventPages";
import { intlLocale, loc, type Locale } from "@/data/i18n";

export function TidalSiegeView({ locale = "en" }: { locale?: Locale }) {
  const t = tidalSiegePage[locale];
  const prettyDate = new Date(SIEGE_VERIFIED).toLocaleDateString(intlLocale(locale), {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="mx-auto w-full max-w-4xl px-5 py-10 sm:py-14">
        <header className="text-center">
          <h1 className="font-display text-xl leading-relaxed phosphor-amber sm:text-3xl sm:leading-relaxed">
            {t.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-dim">{t.intro}</p>
          <p className="mt-4 font-display text-[0.55rem] text-dim">
            {t.stamp} {prettyDate.toUpperCase()}
          </p>
        </header>

        {/* Sand Dollars */}
        <section className="mt-12">
          <Marquee color="amber">{t.sandTitle}</Marquee>
          <ul className="mt-5 space-y-3">
            {sandDollarSources[locale].map((s, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-sm phosphor-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-fg">{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-3">
            {summerShop.map((s) => (
              <Panel key={s.item} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3">
                <h3 className="text-fg">{s.item}</h3>
                <span className="font-display text-[0.55rem] phosphor-green">
                  {s.price.toUpperCase()}
                </span>
                <p className="w-full text-dim">{loc(s.noteI18n, locale, s.note)}</p>
              </Panel>
            ))}
          </div>
        </section>

        {/* Event units */}
        <section className="mt-14">
          <Marquee color="cyan">{t.unitsTitle}</Marquee>
          <div className="mt-5 space-y-3">
            {eventUnits.map((u) => (
              <Panel key={u.unit} className="px-4 py-3">
                <h3 className="phosphor-amber">{u.unit}</h3>
                <p className="mt-1.5 text-dim">{loc(u.howI18n, locale, u.how)}</p>
              </Panel>
            ))}
          </div>
        </section>

        {/* Portals */}
        <section className="mt-14">
          <Marquee color="magenta">{t.portalsTitle}</Marquee>
          <ul className="mt-5 space-y-3">
            {portalFacts[locale].map((f, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-sm phosphor-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-fg">{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Auto Rod route */}
        <section className="mt-14">
          <Marquee color="green">{t.autoTitle}</Marquee>
          <ol className="mt-5 space-y-4">
            {autoRodRoute[locale].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-sm phosphor-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-fg">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Warnings */}
        <section className="mt-14">
          <Panel className="px-4 py-4">
            <h2 className="font-display text-[0.7rem] phosphor-magenta">
              {t.warningsTitle}
            </h2>
            <ul className="mt-3 space-y-2">
              {eventWarnings[locale].map((w, i) => (
                <li key={i} className="text-dim">
                  {w}
                </li>
              ))}
            </ul>
          </Panel>
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
