import { Panel, Marquee, CabinetFooter, CrossLinks } from "@/components/crt";
import { storyMaps, MAPS_VERIFIED, type MapDrop } from "@/data/maps";
import { mapsPage } from "@/data/pages/contentPages";
import { intlLocale, type Locale } from "@/data/i18n";

const TYPE_PHOSPHOR = {
  Food: "green",
  "Standard equipment": "cyan",
  "Unit equipment": "amber",
} as const;

export function MapsView({ locale = "en" }: { locale?: Locale }) {
  const t = mapsPage[locale];
  const prettyDate = new Date(MAPS_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const typeLabel = (type: MapDrop["type"]) =>
    type === "Food" ? t.typeLabels.food : type === "Standard equipment" ? t.typeLabels.standard : t.typeLabels.unit;

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-10 sm:py-14">
      <header className="text-center">
        <h1 className="font-display text-xl leading-relaxed phosphor-cyan sm:text-3xl sm:leading-relaxed">
          {t.h1}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-dim">{t.intro}</p>
        <p className="mt-4 font-display text-[0.55rem] text-dim">
          {t.stamp} {prettyDate.toUpperCase()}
        </p>
      </header>

      <div className="mt-12 space-y-8">
        {storyMaps.map((m) => (
          <section key={m.name}>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-display text-base phosphor-magenta">
                {String(m.order).padStart(2, "0")}
              </span>
              <h2 className="font-display text-sm phosphor-cyan sm:text-base">
                {m.name.toUpperCase()}
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {m.drops.map((d) => (
                <Panel key={d.name} className="px-4 py-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="phosphor-amber">{d.name}</h3>
                    <span className={`font-display text-[0.5rem] phosphor-${TYPE_PHOSPHOR[d.type]}`}>
                      {typeLabel(d.type)}
                    </span>
                  </div>
                  {d.forUnit && (
                    <p className="mt-1.5 text-dim">
                      {t.unitGearFor}
                      <span className="text-fg">{d.forUnit}</span>
                    </p>
                  )}
                </Panel>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-14">
        <Marquee color="amber">{t.howTitle}</Marquee>
        <p className="mt-4 text-dim">{t.howBody}</p>
      </section>

      <CrossLinks cross={t.cross} locale={locale} />

      <CabinetFooter />
    </main>
  );
}
