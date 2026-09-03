import Link from "next/link";
import { Panel, CabinetFooter } from "@/components/crt";
import { units, TIER_ORDER, unitsByTier, unitRole, UNITS_VERIFIED, type Tier } from "@/data/units";
import { tierUnits, intlLocale, localePath, type Locale } from "@/data/i18n";

const TIER_PHOSPHOR: Record<Tier, "amber" | "cyan" | "green" | "magenta"> = {
  SS: "amber",
  "S+": "amber",
  S: "amber",
  A: "cyan",
  B: "green",
  Watch: "magenta",
};

export function UnitsView({ locale }: { locale: Locale }) {
  const t = tierUnits[locale];
  const prettyDate = new Date(UNITS_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Anime Expeditions Unit Roster",
    itemListElement: units.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: u.name,
    })),
  };

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <header className="text-center">
        <h1 className="font-display text-xl leading-relaxed phosphor-cyan sm:text-3xl sm:leading-relaxed">
          {t.unitsH1}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-dim">{t.unitsIntro}</p>
        <p className="mt-4 font-display text-[0.55rem] text-dim">
          {t.updated} {prettyDate.toUpperCase()}
        </p>
      </header>

      <div className="mt-10 space-y-8">
        {TIER_ORDER.filter((tier) => unitsByTier(tier).length > 0).map((tier) => (
          <section key={tier}>
            <div className="mb-4 flex items-center gap-3">
              <span className={`font-display text-lg phosphor-${TIER_PHOSPHOR[tier]}`}>
                {tier}
              </span>
              <span className="font-display text-[0.55rem] text-dim">{t.tierLabels[tier]}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {unitsByTier(tier).map((u) => (
                <Panel key={u.name} className="p-4">
                  <h2 className="phosphor-amber">{u.name}</h2>
                  <dl className="mt-3 space-y-1.5 text-dim">
                    <div className="flex gap-3">
                      <dt className="w-24 shrink-0 font-display text-[0.55rem] phosphor-cyan">
                        {t.base}
                      </dt>
                      <dd className="text-fg">{u.base}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-24 shrink-0 font-display text-[0.55rem] phosphor-cyan">
                        {t.role}
                      </dt>
                      <dd>{unitRole(u, locale)}</dd>
                    </div>
                    {u.evolveItem && (
                      <div className="flex gap-3">
                        <dt className="w-24 shrink-0 font-display text-[0.55rem] phosphor-cyan">
                          {t.evolve}
                        </dt>
                        <dd className="text-fg">{u.evolveItem}</dd>
                      </div>
                    )}
                  </dl>
                </Panel>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-10 text-dim">
        {t.seeRosterPre}
        <Link href={localePath(locale, "/tier-list/")} className="phosphor-cyan hover:underline">
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
  );
}
