import Link from "next/link";
import { Panel, Marquee, CabinetFooter } from "@/components/crt";
import {
  rods,
  fishingRewards,
  milestoneNotes,
  grindLoop,
  FISHING_VERIFIED,
} from "@/data/fishing";
import { intlLocale, type Locale } from "@/data/i18n";

// English-only for now — mirrors the traits/updates pages until localized.
export function FishingView({ locale = "en" }: { locale?: Locale }) {
  const prettyDate = new Date(FISHING_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const faq = [
    {
      q: "How do you fish in Anime Expeditions?",
      a: "Press the fish icon at the bottom-left of the screen, stand in any water (lobby pools or map pools), and left-click to cast. In the minigame, keep your block under the moving fish icon — press to move right, release to drift left — until the progress bar fills.",
    },
    {
      q: "What is the rarest fishing rod in Anime Expeditions?",
      a: "The Lucky Rod. It drops at roughly a 1% chance after any catch, and its passive makes every 8th fish a guaranteed Mythic. The Auto Rod is the hardest grind instead — it requires Wave 150 in Tidal Siege Infinite mode.",
    },
    {
      q: "Can you fish units in Anime Expeditions?",
      a: "Yes — the Sharktooth Conch is a very rare catch in Tidal Siege pools, and using it awards the Mythic unit Sharkfang. The Auto Rod (Wave 150) is the practical way to farm Conch attempts because it skips the minigame.",
    },
    {
      q: "What do Sand Dollars do?",
      a: "Sand Dollars are the Summer Siege event currency. Every catch pays some, and they buy Summer Capsules (100 each, 10 for 1,000), the Advanced Rod (750), and the new units' evolution items (10,000 each) in the event shop.",
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
            ANIME EXPEDITIONS FISHING
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-dim">
            Every rod, its stats, and how to unlock it — plus what fishing
            actually pays out. Fishing arrived with Update 2.0 [Summer Siege]
            and quietly funds half the event: Sand Dollars, capsules, and even
            a Mythic unit.
          </p>
          <p className="mt-4 font-display text-[0.55rem] text-dim">
            VERIFIED {prettyDate.toUpperCase()} · REPORTED DATA — CHECK IN-GAME
          </p>
        </header>

        {/* How it works */}
        <section className="mt-12">
          <Marquee color="cyan">HOW FISHING WORKS</Marquee>
          <p className="mt-4 text-dim">
            Open the fish icon at the bottom-left, stand in any body of water —
            lobby pools or the pools inside game-mode maps — and cast. Keep your
            block under the fish icon until the bar fills. Better rods widen the
            catch window (<span className="text-fg">Control Zone</span>) and
            tighten steering (<span className="text-fg">Control</span>); Lure
            Speed shortens the wait for a bite.
          </p>
        </section>

        {/* Rod table */}
        <section className="mt-14">
          <Marquee color="amber">ALL 5 RODS — STATS & UNLOCKS</Marquee>
          <div className="mt-5 space-y-3">
            {rods.map((r) => (
              <Panel key={r.name} className="px-4 py-3">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="phosphor-amber">{r.name}</h3>
                  <p className="font-display text-[0.55rem] phosphor-green">
                    {r.unlock.toUpperCase()}
                  </p>
                </div>
                <dl className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-dim">
                  <div>
                    Lure <span className="text-fg">{r.lureSpeed}</span>
                  </div>
                  <div>
                    Control <span className="text-fg">{r.control}</span>
                  </div>
                  <div>
                    Zone <span className="text-fg">{r.controlZone}</span>
                  </div>
                </dl>
                {r.passive && (
                  <p className="mt-1.5 text-dim">
                    <span className="phosphor-magenta font-display text-[0.55rem]">
                      PASSIVE
                    </span>{" "}
                    {r.passive}
                  </p>
                )}
                {r.note && <p className="mt-1 text-dim">{r.note}</p>}
              </Panel>
            ))}
          </div>
        </section>

        {/* Rewards */}
        <section className="mt-14">
          <Marquee color="green">WHAT FISHING PAYS OUT</Marquee>
          <ul className="mt-5 space-y-3">
            {fishingRewards.map((r, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-sm phosphor-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-fg">{r}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-2">
            {milestoneNotes.map((n, i) => (
              <p key={i} className="text-dim">
                {n}
              </p>
            ))}
          </div>
        </section>

        {/* Grind loop */}
        <section className="mt-14">
          <Marquee color="magenta">THE EFFICIENT GRIND LOOP</Marquee>
          <ol className="mt-5 space-y-4">
            {grindLoop.map((step, i) => (
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
          Fishing feeds straight into the{" "}
          <Link href="/tidal-siege/" className="phosphor-cyan hover:underline">
            Tidal Siege event
          </Link>{" "}
          — and the evolution items it funds are listed per unit in the{" "}
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
