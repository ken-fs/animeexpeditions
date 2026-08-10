import Link from "next/link";
import { CodeCard } from "@/components/CodeCard";
import { Panel, Marquee } from "@/components/crt";
import { GameMedia } from "@/components/GameMedia";
import { activeCodes, expiredCodes, LAST_VERIFIED, GAME_VISITS, ROBLOX_GAME_URL } from "@/data/codes";
import { codesPage, type Locale } from "@/data/i18n";

export function CodesPageView({ locale }: { locale: Locale }) {
  const t = codesPage[locale];
  const prettyDate = new Date(LAST_VERIFIED).toLocaleDateString(
    locale === "en" ? "en-US" : locale === "pt" ? "pt-BR" : locale === "ru" ? "ru-RU" : "es-ES",
    { year: "numeric", month: "long", day: "numeric" }
  );

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
        {/* Marquee title */}
        <section className="text-center">
          <h1 className="font-display text-2xl leading-relaxed phosphor-amber sm:text-4xl sm:leading-relaxed">
            ANIME EXPEDITIONS
            <span className="mt-4 block phosphor-cyan text-lg sm:text-2xl">
              {t.titleSub}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-dim">{t.intro}</p>
          <p className="mt-4 font-display text-[0.55rem] leading-relaxed text-dim">
            <span className="phosphor-green">● {t.liveLabel}</span> · {t.verified}{" "}
            {prettyDate.toUpperCase()} · {GAME_VISITS} {t.visits}
          </p>
        </section>

        {/* Codes board */}
        <Panel className="mt-10">
          <div className="flex items-center justify-between border-b-2 border-grid px-4 py-3">
            <Marquee color="green">{t.boardTitle}</Marquee>
            <span className="font-display text-[0.55rem] text-dim">
              {activeCodes.length} {t.activeSuffix}
            </span>
          </div>
          <div>
            {activeCodes.map((c) => (
              <CodeCard
                key={c.code}
                code={c.code}
                reward={c.reward}
                expires={c.expires}
                copyLabel={t.copy}
                copiedLabel={t.gotIt}
                expiresPrefix={t.expiresPrefix}
                dateLocale={locale}
              />
            ))}
          </div>
        </Panel>

        <p className="mt-4 text-dim">
          <span className="phosphor-amber font-display text-[0.55rem]">{t.nextUp}</span>{" "}
          {t.nextUpBody}
        </p>

        {/* How to redeem */}
        <section className="mt-14">
          <Marquee color="cyan">{t.howTitle}</Marquee>
          <ol className="mt-5 space-y-4">
            {t.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-sm phosphor-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-fg">{step}</span>
              </li>
            ))}
          </ol>
          <a
            href={ROBLOX_GAME_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block border-2 border-magenta px-5 py-2.5 font-display text-[0.6rem] text-magenta transition hover:bg-magenta hover:text-screen"
          >
            {t.playCta}
          </a>
        </section>

        {/* Official game media — Roblox screenshots + YouTube trailer */}
        <GameMedia screenshotsTitle={t.screenshotsTitle} trailerTitle={t.trailerTitle} />

        {/* Expired */}
        <section className="mt-14">
          <Marquee color="magenta">{t.expiredTitle}</Marquee>
          <p className="mt-3 text-dim">{t.expiredBody}</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-display text-[0.6rem] text-dim">
            {expiredCodes.map((c) => (
              <span key={c.code} className="line-through decoration-magenta/60">
                {c.code}
              </span>
            ))}
          </div>
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

        {/* Cross-links (point within same locale; en pages only for now) */}
        <nav className="mt-14 grid gap-3 sm:grid-cols-3">
          {[
            { href: "/tier-list/", label: t.menu.ranking, sub: t.menu.rankingSub },
            { href: "/units/", label: t.menu.roster, sub: t.menu.rosterSub },
            { href: "/evolution-planner/", label: t.menu.planner, sub: t.menu.plannerSub },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-2 border-grid px-4 py-4 transition hover:border-cyan"
            >
              <span className="font-display text-[0.6rem] phosphor-cyan">{l.label}</span>
              <span className="mt-2 block text-dim">{l.sub}</span>
            </Link>
          ))}
        </nav>

        <footer className="mt-14 border-t-2 border-grid pt-6 text-dim">
          <p className="font-display text-[0.55rem] leading-relaxed">{t.disclaimer1}</p>
          <p className="mt-2">{t.disclaimer2}</p>
        </footer>
      </main>
    </>
  );
}
