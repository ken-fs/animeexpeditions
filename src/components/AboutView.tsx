import Link from "next/link";
import { Marquee, CabinetFooter } from "@/components/crt";
import { LAST_VERIFIED, ROBLOX_GAME_URL } from "@/data/codes";
import { intlLocale, localePath, type Locale } from "@/data/i18n";

// English-only for now.
export function AboutView({ locale = "en" }: { locale?: Locale }) {
  const prettyDate = new Date(LAST_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
      <header className="text-center">
        <h1 className="font-display text-xl leading-relaxed phosphor-cyan sm:text-3xl sm:leading-relaxed">
          ABOUT THIS SITE
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-dim">
          An independent, fan-made guide to Anime Expeditions on Roblox — built
          to get you a working answer fast, and honest about what&apos;s verified
          versus still being tested.
        </p>
      </header>

      <section className="mt-12">
        <Marquee color="amber">WHAT THIS IS</Marquee>
        <p className="mt-4 text-dim">
          This site tracks codes, unit rankings, evolutions, traits, and game
          modes for Anime Expeditions. It&apos;s a small, independent project — not
          an official source, not run by the developer, and not affiliated with
          Roblox. The goal is a fast, no-clutter reference: the working code you
          need, the unit that actually carries, the evolution material you&apos;re
          missing — without ten paragraphs of filler in the way.
        </p>
      </section>

      <section className="mt-14">
        <Marquee color="cyan">HOW WE VERIFY</Marquee>
        <p className="mt-4 text-dim">
          Codes are checked against multiple live community sources and the
          in-game redemption box before they&apos;re listed as working, and
          re-checked as new ones drop. The codes list was last verified on{" "}
          <span className="phosphor-amber">{prettyDate}</span>. Anything we
          can&apos;t confirm first-hand — provisional patch details, reported
          drop rates, unconfirmed reroll pity — is labeled as reported rather
          than stated as fact. When the game updates and old data goes stale, the
          honest move is to mark it, not to pretend it&apos;s current.
        </p>
      </section>

      <section className="mt-14">
        <Marquee color="green">TIER RANKINGS &amp; STANCE</Marquee>
        <p className="mt-4 text-dim">
          Tier placements reflect current community consensus for the live meta,
          cross-checked across sources rather than one person&apos;s opinion.
          Rankings shift with every balance patch and new banner, so treat them
          as a snapshot with a date on it — not a permanent verdict. Where a
          unit is promising but untested, it&apos;s flagged as such instead of
          being ranked on hype.
        </p>
      </section>

      <section className="mt-14">
        <Marquee color="magenta">OFFICIAL LINKS</Marquee>
        <p className="mt-4 text-dim">
          For anything authoritative — the current banner, live events, and the
          real redemption box — go to the game itself:
        </p>
        <a
          href={ROBLOX_GAME_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block border-2 border-magenta px-5 py-2.5 font-display text-[0.6rem] text-magenta transition hover:bg-magenta hover:text-screen"
        >
          ▶ PLAY ON ROBLOX
        </a>
      </section>

      <p className="mt-14 text-dim">
        Start with the{" "}
        <Link href={localePath(locale, "/")} className="phosphor-cyan hover:underline">
          working codes
        </Link>
        , then the{" "}
        <Link href={localePath(locale, "/beginner-guide/")} className="phosphor-cyan hover:underline">
          beginner guide
        </Link>
        .
      </p>

      <CabinetFooter />
    </main>
  );
}
