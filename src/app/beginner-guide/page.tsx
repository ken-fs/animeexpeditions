import type { Metadata } from "next";
import Link from "next/link";
import { Panel, Marquee, CabinetFooter } from "@/components/crt";
import { UNITS_VERIFIED } from "@/data/units";

const SITE_URL = "https://animeexpeditions.dev";

export const metadata: Metadata = {
  title: "Anime Expeditions Beginner Guide (2026) — Best Start & Team Setup",
  description:
    "A step-by-step Anime Expeditions beginner guide: the best first-hour route, how summons and pity work, team composition, and what to prioritize early.",
  alternates: { canonical: "/beginner-guide/" },
  openGraph: {
    title: "Anime Expeditions Beginner Guide (2026)",
    description:
      "Best start, summon strategy and team setup for new Anime Expeditions players.",
    url: `${SITE_URL}/beginner-guide/`,
    type: "article",
  },
};

const prettyDate = new Date(UNITS_VERIFIED).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const firstHour = [
  "Redeem the latest working codes for free Gems, Trait Crystals and rerolls.",
  "Start the True Saint Beginner Path from the Events menu — it acts as the tutorial and awards resources plus Beginner Banner tickets.",
  "Spend your free Beginner Banner tickets before touching Gems.",
  "Build a balanced team instead of chasing rarity immediately.",
  "Play Story: get first clears and star objectives for rewards.",
  "Level the core units you use in most teams.",
  "Check unit quests and evolution recipes before farming random materials.",
];

const teamSlots = [
  { role: "Cheap opener", why: "Handles early waves before your income grows." },
  { role: "Area damage", why: "Clears grouped enemies quickly." },
  { role: "Boss damage", why: "Prevents late-wave timeouts on tanky targets." },
  { role: "Control / support", why: "Slows, staggers, rewinds, debuffs or buffs." },
  { role: "Economy", why: "Generates more battle currency mid-fight." },
];

const faq = [
  {
    q: "How does the summon pity system work?",
    a: "Anime Expeditions uses a pity system on its banners, but the exact thresholds rotate with each banner. Always open the in-game Rates panel to see the current pool and pity count before spending Gems.",
  },
  {
    q: "Should I save my Gems or summon early?",
    a: "Spend free Beginner Banner tickets first. Only spend Gems once you have checked the Rates panel and your team still has a gap. Don't chase rarity before your team can clear opening waves and bosses.",
  },
  {
    q: "Who should I use my Trait Crystals on?",
    a: "Save Trait Crystals for a unit likely to stay on your main team long-term. Don't chase a perfect trait on a temporary unit you'll replace.",
  },
];

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function BeginnerGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
        <header className="text-center">
          <h1 className="font-display text-xl leading-relaxed phosphor-green sm:text-3xl sm:leading-relaxed">
            BEGINNER GUIDE
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-dim">
            The fastest, no-waste start — the first-hour route, how summons work,
            and the team every new player should aim for.
          </p>
          <p className="mt-4 font-display text-[0.55rem] text-dim">
            UPDATED {prettyDate.toUpperCase()}
          </p>
        </header>

        {/* First hour */}
        <section className="mt-12">
          <Marquee color="cyan">STAGE 1 — YOUR FIRST HOUR</Marquee>
          <ol className="mt-5 space-y-4">
            {firstHour.map((step, i) => (
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
          <Marquee color="amber">THE 5-SLOT TEAM</Marquee>
          <p className="mt-3 text-dim">
            A balanced team beats a squad of high-rarity duplicates. Cover these
            five roles:
          </p>
          <div className="mt-5 space-y-3">
            {teamSlots.map((s, i) => (
              <Panel key={s.role} className="flex gap-4 px-4 py-3">
                <span className="font-display text-base phosphor-amber">
                  P{i + 1}
                </span>
                <div>
                  <h3 className="text-fg">{s.role}</h3>
                  <p className="mt-0.5 text-dim">{s.why}</p>
                </div>
              </Panel>
            ))}
          </div>
          <p className="mt-4 text-dim">
            Placement: cheapest reliable unit first, upgrade your main carry
            before spreading low-level placements, keep support in range of its
            carry.
          </p>
        </section>

        {/* Summons */}
        <section className="mt-14">
          <Marquee color="magenta">SUMMONS &amp; PITY</Marquee>
          <p className="mt-3 text-dim">
            Anime Expeditions combines banner summons with wave-based tower
            defense. Spend free Beginner Banner tickets before any Gems, and open
            the in-game <span className="phosphor-cyan">Rates panel</span> to
            check the current pool and pity before you pull. Stop summoning once
            your team covers opening waves, grouped enemies, and bosses.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <Marquee color="cyan">FAQ</Marquee>
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
          Next: pick carries from the{" "}
          <Link href="/tier-list/" className="phosphor-cyan hover:underline">
            tier ranking
          </Link>
          , plan evolutions in the{" "}
          <Link href="/evolution-planner/" className="phosphor-cyan hover:underline">
            planner
          </Link>
          , and grab{" "}
          <Link href="/" className="phosphor-cyan hover:underline">
            working codes
          </Link>
          .
        </p>

        <CabinetFooter />
      </main>
    </>
  );
}
