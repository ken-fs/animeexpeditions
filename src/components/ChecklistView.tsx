import Link from "next/link";
import { DailyChecklist } from "@/components/DailyChecklist";
import { Marquee, CabinetFooter } from "@/components/crt";
import { CHECKLIST_VERIFIED } from "@/data/checklist";
import { intlLocale, localePath, type Locale } from "@/data/i18n";

// English-only for now.
export function ChecklistView({ locale = "en" }: { locale?: Locale }) {
  const prettyDate = new Date(CHECKLIST_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
      <header className="text-center">
        <h1 className="font-display text-xl leading-relaxed phosphor-green sm:text-3xl sm:leading-relaxed">
          ANIME EXPEDITIONS DAILY CHECKLIST
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-dim">
          The daily and weekly tasks worth doing every session — codes, bounties,
          Expedition production, raids. Tick them off and the list remembers your
          progress and resets itself on schedule.
        </p>
        <p className="mt-4 font-display text-[0.55rem] text-dim">
          ROUTINE · {prettyDate.toUpperCase()}
        </p>
      </header>

      <div className="mt-10">
        <DailyChecklist />
      </div>

      <section className="mt-14">
        <Marquee color="cyan">WHY A ROUTINE MATTERS</Marquee>
        <p className="mt-4 text-dim">
          Progression in Anime Expeditions is milestone- and resource-gated: the
          players who pull ahead aren&apos;t grinding harder, they&apos;re just not
          leaving free rewards on the table. Codes expire, Expedition production
          caps out, daily shop deals reset, and event Battle Passes run on a
          clock. A two-minute pass through this list every session is worth more
          than an hour of unfocused farming.
        </p>
      </section>

      <p className="mt-12 text-dim">
        Starting fresh? The{" "}
        <Link href={localePath(locale, "/beginner-guide/")} className="phosphor-cyan hover:underline">
          beginner guide
        </Link>{" "}
        covers the first-hour route, and{" "}
        <Link href={localePath(locale, "/")} className="phosphor-cyan hover:underline">
          today&apos;s codes
        </Link>{" "}
        are the first thing to tick off above.
      </p>

      <CabinetFooter />
    </main>
  );
}
