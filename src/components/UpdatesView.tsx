import Link from "next/link";
import { Panel, Marquee, CabinetFooter } from "@/components/crt";
import { updates, UPDATES_VERIFIED } from "@/data/updates";
import { intlLocale, localePath, type Locale } from "@/data/i18n";

// English-only for now.
export function UpdatesView({ locale = "en" }: { locale?: Locale }) {
  const prettyDate = new Date(UPDATES_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
      <header className="text-center">
        <h1 className="font-display text-xl leading-relaxed phosphor-magenta sm:text-3xl sm:leading-relaxed">
          ANIME EXPEDITIONS UPDATES
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-dim">
          Every update and event window, newest first — new units, limited
          modes, cosmetics, and fixes. Event maps like Villain Invasion are
          time-limited, so check the window before you plan around them.
        </p>
        <p className="mt-4 font-display text-[0.55rem] text-dim">
          UPDATED {prettyDate.toUpperCase()}
        </p>
      </header>

      <div className="mt-12 space-y-8">
        {updates.map((u) => (
          <Panel key={u.version} className="p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-grid pb-3">
              <h2 className="phosphor-amber">
                {u.version}
                {u.title && <span className="phosphor-cyan"> — {u.title}</span>}
              </h2>
              <span
                className={`font-display text-[0.5rem] ${
                  u.status === "verified" ? "phosphor-green" : "text-dim"
                }`}
              >
                {u.status === "verified" ? "● VERIFIED" : "○ PROVISIONAL"}
              </span>
            </div>
            <p className="mt-3 font-display text-[0.55rem] text-dim">{u.date}</p>
            <ul className="mt-4 space-y-2">
              {u.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-dim">
                  <span className="phosphor-magenta">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>

      <section className="mt-14">
        <Marquee color="cyan">HOW WE TRACK UPDATES</Marquee>
        <p className="mt-4 text-dim">
          Event windows are read from the official Roblox events schedule, so the
          dates are firm. Client-side details — exact drop rates, evolution
          recipes, reward caps — are marked provisional until they&apos;re
          confirmed in-game or by the developer, because early patch summaries
          shift in the first days after a release.
        </p>
      </section>

      <p className="mt-12 text-dim">
        New update usually means new codes — check the{" "}
        <Link href={localePath(locale, "/")} className="phosphor-cyan hover:underline">
          working codes
        </Link>{" "}
        list, then see where the new units land on the{" "}
        <Link href={localePath(locale, "/tier-list/")} className="phosphor-cyan hover:underline">
          tier list
        </Link>
        .
      </p>

      <CabinetFooter />
    </main>
  );
}
