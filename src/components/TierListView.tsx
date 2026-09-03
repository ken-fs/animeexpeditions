import Link from "next/link";
import { Panel, CabinetFooter } from "@/components/crt";
import { units, unitsByTier, unitRole, TIER_ORDER, UNITS_VERIFIED, type Tier } from "@/data/units";
import { tierUnits, intlLocale, localePath, type Locale } from "@/data/i18n";

const TIER_PHOSPHOR: Record<Tier, "amber" | "cyan" | "green" | "magenta"> = {
  SS: "amber",
  "S+": "amber",
  S: "amber",
  A: "cyan",
  B: "green",
  Watch: "magenta",
};

export function TierListView({ locale }: { locale: Locale }) {
  const t = tierUnits[locale];
  const prettyDate = new Date(UNITS_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Anime Expeditions Tier List",
    itemListElement: units.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${u.name} (${u.tier} Tier)`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <main className="mx-auto w-full max-w-4xl px-5 py-10 sm:py-14">
        <header className="text-center">
          <h1 className="font-display text-xl leading-relaxed phosphor-amber sm:text-3xl sm:leading-relaxed">
            {t.tierH1}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-dim">{t.tierIntro}</p>
          <p className="mt-4 font-display text-[0.55rem] text-dim">
            {t.updated} {prettyDate.toUpperCase()}
          </p>
        </header>

        <div className="mt-10 space-y-6">
          {TIER_ORDER.filter((tier) => unitsByTier(tier).length > 0).map((tier) => (
            <Panel key={tier}>
              <div className="flex items-center gap-4 border-b-2 border-grid px-4 py-3">
                <span className={`font-display text-2xl phosphor-${TIER_PHOSPHOR[tier]}`}>
                  {tier}
                </span>
                <span className="font-display text-[0.55rem] text-dim">
                  {t.tierLabels[tier]}
                </span>
              </div>
              <div>
                {unitsByTier(tier).map((u) => (
                  <div
                    key={u.name}
                    className="flex items-center justify-between gap-4 border-b-2 border-grid px-4 py-3 last:border-b-0"
                  >
                    <span className="text-fg">{u.name}</span>
                    <span className="text-right text-dim">{unitRole(u, locale)}</span>
                  </div>
                ))}
              </div>
            </Panel>
          ))}
        </div>

        <p className="mt-10 text-dim">
          {t.seeRosterPre}
          <Link href={localePath(locale, "/units/")} className="phosphor-cyan hover:underline">
            {t.rosterLink}
          </Link>
          {t.seeRosterMid}
          <Link href={localePath(locale, "/")} className="phosphor-cyan hover:underline">
            {t.codesLink}
          </Link>
          {t.end}
        </p>

        <CabinetFooter />
      </main>
    </>
  );
}
