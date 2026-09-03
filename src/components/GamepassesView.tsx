import { Panel, Marquee, CabinetFooter, CrossLinks } from "@/components/crt";
import { gamepasses, GAMEPASSES_VERIFIED } from "@/data/gamepasses";
import { gamepassesPage } from "@/data/pages/contentPages";
import { ROBLOX_GAME_URL } from "@/data/codes";
import { intlLocale, loc, type Locale } from "@/data/i18n";

export function GamepassesView({ locale = "en" }: { locale?: Locale }) {
  const t = gamepassesPage[locale];
  const prettyDate = new Date(GAMEPASSES_VERIFIED).toLocaleDateString(intlLocale(locale), {
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
      <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
        <header className="text-center">
          <h1 className="font-display text-xl leading-relaxed phosphor-amber sm:text-3xl sm:leading-relaxed">
            {t.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-dim">{t.intro}</p>
          <p className="mt-4 font-display text-[0.55rem] text-dim">
            {t.stamp} {prettyDate.toUpperCase()}
          </p>
        </header>

        <div className="mt-12 space-y-4">
          {gamepasses.map((g) => (
            <Panel key={g.name} className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-grid pb-3">
                <h2 className="phosphor-amber">{g.name}</h2>
                <span className="font-display text-[0.6rem] phosphor-green">{g.price}</span>
              </div>
              <p className="mt-3 text-dim">
                <span className="font-display text-[0.5rem] phosphor-magenta">{t.reportedTag}</span>
                {loc(g.reportedI18n, locale, g.reported)}
              </p>
              <p className="mt-2 font-display text-[0.5rem] text-dim">
                {g.confirmed ? t.confirmedYes : t.confirmedNo}
              </p>
            </Panel>
          ))}
        </div>

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
          <a
            href={ROBLOX_GAME_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block border-2 border-magenta px-5 py-2.5 font-display text-[0.6rem] text-magenta transition hover:bg-magenta hover:text-screen"
          >
            {t.cta}
          </a>
        </section>

        <CrossLinks cross={t.cross} locale={locale} />

        <CabinetFooter />
      </main>
    </>
  );
}
