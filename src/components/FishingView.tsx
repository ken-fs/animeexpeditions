import { Panel, Marquee, CabinetFooter, CrossLinks } from "@/components/crt";
import {
  rods,
  fishingRewards,
  milestoneNotes,
  grindLoop,
  FISHING_VERIFIED,
} from "@/data/fishing";
import { fishingPage } from "@/data/pages/eventPages";
import { intlLocale, loc, type Locale } from "@/data/i18n";

export function FishingView({ locale = "en" }: { locale?: Locale }) {
  const t = fishingPage[locale];
  const prettyDate = new Date(FISHING_VERIFIED).toLocaleDateString(intlLocale(locale), {
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
          <h1 className="font-display text-xl leading-relaxed phosphor-cyan sm:text-3xl sm:leading-relaxed">
            {t.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-dim">{t.intro}</p>
          <p className="mt-4 font-display text-[0.55rem] text-dim">
            {t.stamp} {prettyDate.toUpperCase()}
          </p>
        </header>

        {/* How it works */}
        <section className="mt-12">
          <Marquee color="cyan">{t.howTitle}</Marquee>
          <p className="mt-4 text-dim">
            {t.howBodyPre}
            <span className="text-fg">{t.controlZone}</span>
            {t.howBodyMid}
            <span className="text-fg">{t.control}</span>
            {t.howBodyPost}
          </p>
        </section>

        {/* Rod table */}
        <section className="mt-14">
          <Marquee color="amber">{t.rodsTitle}</Marquee>
          <div className="mt-5 space-y-3">
            {rods.map((r) => {
              const passive = loc(r.passiveI18n, locale, r.passive);
              const note = r.note ? loc(r.noteI18n, locale, r.note) : undefined;
              return (
                <Panel key={r.name} className="px-4 py-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="phosphor-amber">{r.name}</h3>
                    <p className="font-display text-[0.55rem] phosphor-green">
                      {loc(r.unlockI18n, locale, r.unlock).toUpperCase()}
                    </p>
                  </div>
                  <dl className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-dim">
                    <div>
                      {t.statLure} <span className="text-fg">{r.lureSpeed}</span>
                    </div>
                    <div>
                      {t.statControl} <span className="text-fg">{r.control}</span>
                    </div>
                    <div>
                      {t.statZone} <span className="text-fg">{r.controlZone}</span>
                    </div>
                  </dl>
                  {passive && (
                    <p className="mt-1.5 text-dim">
                      <span className="phosphor-magenta font-display text-[0.55rem]">
                        {t.passiveTag}
                      </span>{" "}
                      {passive}
                    </p>
                  )}
                  {note && <p className="mt-1 text-dim">{note}</p>}
                </Panel>
              );
            })}
          </div>
        </section>

        {/* Rewards */}
        <section className="mt-14">
          <Marquee color="green">{t.rewardsTitle}</Marquee>
          <ul className="mt-5 space-y-3">
            {fishingRewards[locale].map((r, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-sm phosphor-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-fg">{r}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-2">
            {milestoneNotes[locale].map((n, i) => (
              <p key={i} className="text-dim">
                {n}
              </p>
            ))}
          </div>
        </section>

        {/* Grind loop */}
        <section className="mt-14">
          <Marquee color="magenta">{t.loopTitle}</Marquee>
          <ol className="mt-5 space-y-4">
            {grindLoop[locale].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-sm phosphor-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-fg">{step}</span>
              </li>
            ))}
          </ol>
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
