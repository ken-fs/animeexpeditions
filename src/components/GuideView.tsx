import Link from "next/link";
import { Panel, Marquee, CabinetFooter } from "@/components/crt";
import { UNITS_VERIFIED } from "@/data/units";
import { plannerGuide, intlLocale, localePath, type Locale } from "@/data/i18n";

export function GuideView({ locale }: { locale: Locale }) {
  const t = plannerGuide[locale];
  const prettyDate = new Date(UNITS_VERIFIED).toLocaleDateString(intlLocale(locale), {
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
          <h1 className="font-display text-xl leading-relaxed phosphor-green sm:text-3xl sm:leading-relaxed">
            {t.guideH1}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-dim">{t.guideIntro}</p>
          <p className="mt-4 font-display text-[0.55rem] text-dim">
            {t.updated} {prettyDate.toUpperCase()}
          </p>
        </header>

        {/* First hour */}
        <section className="mt-12">
          <Marquee color="cyan">{t.stage1}</Marquee>
          <ol className="mt-5 space-y-4">
            {t.firstHour.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-sm phosphor-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-fg">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Team comp */}
        <section className="mt-14">
          <Marquee color="amber">{t.teamTitle}</Marquee>
          <p className="mt-3 text-dim">{t.teamIntro}</p>
          <div className="mt-5 space-y-3">
            {t.teamSlots.map((s, i) => (
              <Panel key={i} className="flex gap-4 px-4 py-3">
                <span className="font-display text-base phosphor-amber">P{i + 1}</span>
                <div>
                  <h3 className="text-fg">{s.role}</h3>
                  <p className="mt-0.5 text-dim">{s.why}</p>
                </div>
              </Panel>
            ))}
          </div>
          <p className="mt-4 text-dim">{t.placement}</p>
        </section>

        {/* Summons */}
        <section className="mt-14">
          <Marquee color="magenta">{t.summonsTitle}</Marquee>
          <p className="mt-3 text-dim">
            {t.summonsBody1}
            <span className="phosphor-cyan">{t.ratesPanel}</span>
            {t.summonsBody2}
          </p>
        </section>

        {/* Update 2.0 economy */}
        <section className="mt-14">
          <Marquee color="green">{t.economyTitle}</Marquee>
          <ul className="mt-5 space-y-4">
            {t.economyBody.map((line, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-sm phosphor-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-fg">{line}</span>
              </li>
            ))}
          </ul>
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

        <p className="mt-12 text-dim">
          {t.guideCrossPre}
          <Link href={localePath(locale, "/tier-list/")} className="phosphor-cyan hover:underline">
            {t.tierLink}
          </Link>
          {t.guideCrossMid}
          <Link href={localePath(locale, "/evolution-planner/")} className="phosphor-cyan hover:underline">
            {t.plannerLink}
          </Link>
          {t.guideCrossMid2}
          <Link href={localePath(locale, "/")} className="phosphor-cyan hover:underline">
            {t.codesLink}
          </Link>
          {t.end}
        </p>

        <CabinetFooter />
      </main>
    </>
  );
}
