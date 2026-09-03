import Link from "next/link";
import { Panel, Marquee, CabinetFooter } from "@/components/crt";
import {
  sandDollarSources,
  summerShop,
  eventUnits,
  portalFacts,
  autoRodRoute,
  eventWarnings,
  SIEGE_VERIFIED,
} from "@/data/tidalSiege";
import { intlLocale, type Locale } from "@/data/i18n";

// English-only for now — mirrors the traits/fishing pages until localized.
export function TidalSiegeView({ locale = "en" }: { locale?: Locale }) {
  const prettyDate = new Date(SIEGE_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const faq = [
    {
      q: "How do you get Sand Dollars in Anime Expeditions?",
      a: "Sand Dollars come from clearing Tidal Siege waves (standard and Infinite mode), event quests and log-in rewards, and fishing — every catch pays some. They fund Summer Capsules, the Advanced Rod, and the new units' evolution items in the event shop.",
    },
    {
      q: "How do you get Sovereign and Lightning God?",
      a: "Both are Secret units locked behind Secret Portals. Farm Tier 5 portals for Djinn's Treasure (Sovereign) and Charged Dust (Lightning God) — a reported 4% drop each with a 25-run pity — then craft the portal with four copies at the Crafting Station. Host the portal yourself: hosting guarantees the unit, joining someone else's run is only about a 2% chance.",
    },
    {
      q: "What is Wave 150 in Tidal Siege for?",
      a: "Reaching Wave 150 in Tidal Siege Infinite mode unlocks the Auto Rod, the fishing rod that skips the minigame and auto-catches at double lure speed. It unlocks automatically in the fishing menu once you hit the wave.",
    },
    {
      q: "Does Tidal Siege end?",
      a: "Yes — it is the Update 2.0 [Summer Siege] limited event. Summer Capsules, the event shop, and its Sand Dollar sources leave when the event ends, so buy the evolution items you need while you are still farming.",
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
      <main className="mx-auto w-full max-w-4xl px-5 py-10 sm:py-14">
        <header className="text-center">
          <h1 className="font-display text-xl leading-relaxed phosphor-amber sm:text-3xl sm:leading-relaxed">
            TIDAL SIEGE &amp; PORTALS
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-dim">
            The Update 2.0 [Summer Siege] event hub — Sand Dollars, Summer
            Capsules, the Wave 150 Auto Rod route, and how Tier 5 portals turn
            into the two new Secret units.
          </p>
          <p className="mt-4 font-display text-[0.55rem] text-dim">
            VERIFIED {prettyDate.toUpperCase()} · LIMITED EVENT · REPORTED DATA
          </p>
        </header>

        {/* Sand Dollars */}
        <section className="mt-12">
          <Marquee color="amber">SAND DOLLARS — THE EVENT CURRENCY</Marquee>
          <ul className="mt-5 space-y-3">
            {sandDollarSources.map((s, i) => (
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
                <p className="w-full text-dim">{s.note}</p>
              </Panel>
            ))}
          </div>
        </section>

        {/* Event units */}
        <section className="mt-14">
          <Marquee color="cyan">EVENT-EXCLUSIVE UNITS</Marquee>
          <div className="mt-5 space-y-3">
            {eventUnits.map((u) => (
              <Panel key={u.unit} className="px-4 py-3">
                <h3 className="phosphor-amber">{u.unit}</h3>
                <p className="mt-1.5 text-dim">{u.how}</p>
              </Panel>
            ))}
          </div>
        </section>

        {/* Portals */}
        <section className="mt-14">
          <Marquee color="magenta">PORTALS — PATH TO THE SECRET UNITS</Marquee>
          <ul className="mt-5 space-y-3">
            {portalFacts.map((f, i) => (
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
          <Marquee color="green">WAVE 150 — THE AUTO ROD ROUTE</Marquee>
          <ol className="mt-5 space-y-4">
            {autoRodRoute.map((step, i) => (
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
              BEFORE THE EVENT ENDS
            </h2>
            <ul className="mt-3 space-y-2">
              {eventWarnings.map((w, i) => (
                <li key={i} className="text-dim">
                  {w}
                </li>
              ))}
            </ul>
          </Panel>
        </section>

        {/* FAQ */}
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
        </section>

        <p className="mt-12 text-dim">
          The fishing half of the event — rods, minigame, and the Sharktooth
          Conch — lives in the{" "}
          <Link href="/fishing/" className="phosphor-cyan hover:underline">
            fishing guide
          </Link>
          , and every new unit&apos;s evolution item is listed in the{" "}
          <Link href="/units/" className="phosphor-cyan hover:underline">
            unit roster
          </Link>
          .
        </p>

        <CabinetFooter />
      </main>
    </>
  );
}
