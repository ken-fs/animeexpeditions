import Link from "next/link";
import { Panel, Marquee, CabinetFooter } from "@/components/crt";
import { gameModes, MODES_VERIFIED } from "@/data/gameModes";
import { intlLocale, localePath, type Locale } from "@/data/i18n";

// English-only for now.
export function GameModesView({ locale = "en" }: { locale?: Locale }) {
  const prettyDate = new Date(MODES_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const faq = [
    {
      q: "What game modes are in Anime Expeditions?",
      a: "The permanent modes are Story, Expeditions (unlocks at level 20), Raids (level 25), and Co-op. On top of those, updates add limited event modes — Update 0.5 brought Villain Invasion, Villain Hunt, and the Bounty Board.",
    },
    {
      q: "When do Expeditions and Raids unlock?",
      a: "Expeditions unlocks at player level 20 and Raids at level 25. Until then, Story is your progression track — it's also the safest place to test a team before you take it into the harder modes.",
    },
    {
      q: "Are event modes permanent?",
      a: "No. Villain Invasion, Villain Hunt, and the Bounty Board are tied to Update 0.5's event window. Limited modes rotate out with the update, so check the updates page for the current window before planning around them.",
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
          <h1 className="font-display text-xl leading-relaxed phosphor-green sm:text-3xl sm:leading-relaxed">
            ANIME EXPEDITIONS GAME MODES
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-dim">
            Every mode, what it is, and when it unlocks — the permanent progression
            track plus the limited event modes that rotate in with updates.
          </p>
          <p className="mt-4 font-display text-[0.55rem] text-dim">
            UPDATED {prettyDate.toUpperCase()}
          </p>
        </header>

        <div className="mt-12 space-y-4">
          {gameModes.map((m) => (
            <Panel key={m.name} className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="phosphor-amber">{m.name}</h2>
                {m.unlock && (
                  <span className="font-display text-[0.5rem] phosphor-cyan">
                    {m.limited ? "LIMITED · " : "UNLOCKS · "}
                    {m.unlock.toUpperCase()}
                  </span>
                )}
              </div>
              <p className="mt-3 text-dim">{m.summary}</p>
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
        </section>

        <p className="mt-12 text-dim">
          Pick your mode, then build for it — the{" "}
          <Link href={localePath(locale, "/tier-list/")} className="phosphor-cyan hover:underline">
            tier list
          </Link>{" "}
          flags which units carry Raids, and the{" "}
          <Link href={localePath(locale, "/beginner-guide/")} className="phosphor-cyan hover:underline">
            beginner guide
          </Link>{" "}
          covers the first-hour Story route.
        </p>

        <CabinetFooter />
      </main>
    </>
  );
}
