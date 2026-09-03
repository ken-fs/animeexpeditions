import { Panel, Marquee, CabinetFooter, CrossLinks } from "@/components/crt";
import { updates, UPDATES_VERIFIED } from "@/data/updates";
import { updatesPage } from "@/data/pages/contentPages";
import { intlLocale, loc, type Locale } from "@/data/i18n";

export function UpdatesView({ locale = "en" }: { locale?: Locale }) {
  const t = updatesPage[locale];
  const prettyDate = new Date(UPDATES_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
      <header className="text-center">
        <h1 className="font-display text-xl leading-relaxed phosphor-magenta sm:text-3xl sm:leading-relaxed">
          {t.h1}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-dim">{t.intro}</p>
        <p className="mt-4 font-display text-[0.55rem] text-dim">
          {t.stamp} {prettyDate.toUpperCase()}
        </p>
      </header>

      <div className="mt-12 space-y-8">
        {updates.map((u) => {
          const highlights = loc(u.highlightsI18n, locale, u.highlights);
          return (
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
                  {u.status === "verified" ? t.verified : t.provisional}
                </span>
              </div>
              <p className="mt-3 font-display text-[0.55rem] text-dim">{u.date}</p>
              <ul className="mt-4 space-y-2">
                {highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-dim">
                    <span className="phosphor-magenta">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          );
        })}
      </div>

      <section className="mt-14">
        <Marquee color="cyan">{t.trackTitle}</Marquee>
        <p className="mt-4 text-dim">{t.trackBody}</p>
      </section>

      <CrossLinks cross={t.cross} locale={locale} />

      <CabinetFooter />
    </main>
  );
}
