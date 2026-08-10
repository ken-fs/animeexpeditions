import Link from "next/link";
import { Panel, Marquee, CabinetFooter } from "@/components/crt";
import { traits, KEEP_LABEL, KEEP_PHOSPHOR, TRAITS_VERIFIED } from "@/data/traits";
import { intlLocale, localePath, type Locale } from "@/data/i18n";

// English-only for now. Other locales fall back to the English page until the
// traits copy is properly localized (see the site's i18n plan).
export function TraitsView({ locale = "en" }: { locale?: Locale }) {
  const prettyDate = new Date(TRAITS_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const faq = [
    {
      q: "What are traits in Anime Expeditions?",
      a: "Traits are a per-unit modifier rolled at the Trait Reroll station using Trait Crystals. They stack on top of a unit's kit — extra damage, faster attacks, more range, crit, or income — but they can't turn a wrong-for-the-stage unit into a right one. Treat them as the last optimization layer, not a fix.",
    },
    {
      q: "Which traits are worth keeping?",
      a: "Chase the rare multi-stat traits — Unbound, Primordial, Forsaken and Draconic — on units you know are permanent. Bolt, Optics, Investor and Precision 2 are strong keeps too. The single-stat commons (Strength 1, Speed 1, Range 1) are fine early but worth replacing once you have crystals to spare.",
    },
    {
      q: "How does trait reroll pity work?",
      a: "Only the four rarest traits report a pity counter: Draconic at 300 rerolls, Forsaken at 500, Primordial at 750, and Unbound at 1,500. Everything else has no reported pity. These thresholds are community-reported, not officially confirmed, so watch the in-client counter before committing crystals.",
    },
    {
      q: "Do traits carry through evolution?",
      a: "This isn't confirmed in current community data. Assume you may need to re-roll after evolving, and don't sink pity-level crystal counts into a base form you're about to evolve until you've verified it in-game.",
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
          <h1 className="font-display text-xl leading-relaxed phosphor-cyan sm:text-3xl sm:leading-relaxed">
            ANIME EXPEDITIONS TRAITS
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-dim">
            Every trait, its effect, its roll rate, and whether it&apos;s worth
            spending Trait Crystals to keep. Rare multi-stat traits are the ones
            that change a run — the commons are placeholders until you can afford
            better.
          </p>
          <p className="mt-4 font-display text-[0.55rem] text-dim">
            REPORTED · VERIFIED {prettyDate.toUpperCase()}
          </p>
        </header>

        {/* Traits board */}
        <Panel className="mt-10">
          <div className="flex items-center justify-between border-b-2 border-grid px-4 py-3">
            <Marquee color="cyan">TRAIT TABLE</Marquee>
            <span className="font-display text-[0.55rem] text-dim">
              {traits.length} TRAITS
            </span>
          </div>
          <div className="divide-y-2 divide-grid/50">
            {traits.map((tr) => (
              <div key={tr.name} className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center">
                <div className="sm:w-40 shrink-0">
                  <span className="phosphor-amber">{tr.name}</span>
                  <span className={`ml-2 font-display text-[0.5rem] phosphor-${KEEP_PHOSPHOR[tr.keep]}`}>
                    {KEEP_LABEL[tr.keep].toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 text-fg">{tr.effect}</div>
                <div className="flex shrink-0 gap-4 font-display text-[0.55rem] text-dim">
                  <span className="phosphor-cyan">{tr.rate}</span>
                  <span className="w-28 text-right">
                    {tr.pity ? `PITY ${tr.pity}` : "NO PITY"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* Reroll strategy */}
        <section className="mt-14">
          <Marquee color="amber">HOW TO REROLL WITHOUT WASTING CRYSTALS</Marquee>
          <ol className="mt-5 space-y-4">
            {[
              "Confirm the unit earns a permanent slot. Never reroll traits on a unit you'll bench next week — crystals spent there are gone.",
              "Name the one mechanic you're improving: raw damage, attack speed (SPA), crit, range, or income. Rerolling with no target just burns crystals.",
              "Set a stopping rule before you start. Decide the trait you'll settle for, and walk away when you hit it — the pity counter only saves you on the four rarest traits.",
              "Keep rare multi-stat traits, accept mid-tier as a stop, and only replace single-stat commons once the unit is permanent and you have crystals to spare.",
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-sm phosphor-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-fg">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-dim">
            The Trait Reroll station sits in the upgrade area. Before you spend,
            check the selected unit, the crystal cost, the replacement warning,
            and the pity counter in-client — community rates are a guide, not a
            guarantee.
          </p>
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
          Traits are the last layer — get the right units first on the{" "}
          <Link href={localePath(locale, "/tier-list/")} className="phosphor-cyan hover:underline">
            tier list
          </Link>
          , plan their evolutions in the{" "}
          <Link href={localePath(locale, "/evolution-planner/")} className="phosphor-cyan hover:underline">
            evolution planner
          </Link>
          , then grab{" "}
          <Link href={localePath(locale, "/")} className="phosphor-cyan hover:underline">
            working codes
          </Link>{" "}
          for free Trait Crystals to reroll with.
        </p>

        <CabinetFooter />
      </main>
    </>
  );
}
