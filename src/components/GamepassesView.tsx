import Link from "next/link";
import { Panel, Marquee, CabinetFooter } from "@/components/crt";
import { gamepasses, GAMEPASSES_VERIFIED } from "@/data/gamepasses";
import { ROBLOX_GAME_URL } from "@/data/codes";
import { intlLocale, localePath, type Locale } from "@/data/i18n";

// English-only for now.
export function GamepassesView({ locale = "en" }: { locale?: Locale }) {
  const prettyDate = new Date(GAMEPASSES_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const faq = [
    {
      q: "Are the Anime Expeditions gamepasses worth it?",
      a: "Honest answer: the official gamepass descriptions are empty, so nobody can promise exactly what you're buying. Prices and IDs are verified, but the effects below are community guesses. Treat any gamepass as a support-the-developer purchase first and a gameplay boost second, until the benefits are confirmed in-game.",
    },
    {
      q: "What does the Shiny Hunter pass actually do?",
      a: "The name and community guides link it to collecting Shiny units, but the official API publishes no Shiny-rate multiplier, base rate, or stacking rule. At 999 R$ it's the most expensive pass, so don't buy it expecting a confirmed drop-rate boost.",
    },
    {
      q: "Can gamepass prices change?",
      a: "Yes. Regional and managed pricing can change the actual checkout price from the default snapshot shown here (checked July 18, 2026). Always confirm the live price on the Roblox store page before buying.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
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
            ANIME EXPEDITIONS GAMEPASSES
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-dim">
            Every gamepass with its verified price — and an honest note on what it
            reportedly does, since the official descriptions are blank. Prices are
            confirmed; benefits are not.
          </p>
          <p className="mt-4 font-display text-[0.55rem] text-dim">
            PRICES VERIFIED {prettyDate.toUpperCase()}
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
                <span className="font-display text-[0.5rem] phosphor-magenta">REPORTED · </span>
                {g.reported}
              </p>
              <p className="mt-2 font-display text-[0.5rem] text-dim">
                {g.confirmed ? "● OFFICIAL BENEFIT PUBLISHED" : "○ OFFICIAL BENEFIT: NOT PUBLISHED"}
              </p>
            </Panel>
          ))}
        </div>

        <section className="mt-14">
          <Marquee color="cyan">QUESTIONS PEOPLE ASK</Marquee>
          <div className="mt-5 space-y-6">
            {faq.map((f) => (
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
            ▶ CHECK LIVE PRICES ON ROBLOX
          </a>
        </section>

        <p className="mt-12 text-dim">
          Before spending Robux, grab the free stuff first — the{" "}
          <Link href={localePath(locale, "/")} className="phosphor-cyan hover:underline">
            working codes
          </Link>{" "}
          hand out Trait Crystals and rerolls at no cost.
        </p>

        <CabinetFooter />
      </main>
    </>
  );
}
