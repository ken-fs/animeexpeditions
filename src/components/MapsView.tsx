import Link from "next/link";
import { Panel, Marquee, CabinetFooter } from "@/components/crt";
import { storyMaps, MAPS_VERIFIED } from "@/data/maps";
import { intlLocale, localePath, type Locale } from "@/data/i18n";

const TYPE_PHOSPHOR = {
  Food: "green",
  "Standard equipment": "cyan",
  "Unit equipment": "amber",
} as const;

// English-only for now.
export function MapsView({ locale = "en" }: { locale?: Locale }) {
  const prettyDate = new Date(MAPS_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-10 sm:py-14">
      <header className="text-center">
        <h1 className="font-display text-xl leading-relaxed phosphor-cyan sm:text-3xl sm:leading-relaxed">
          ANIME EXPEDITIONS MAPS &amp; DROPS
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-dim">
          The five Story maps in order, and what each one drops — food, standard
          equipment, and the unit equipment that ties to a specific evolved unit.
          Farm the map that holds the piece you actually need.
        </p>
        <p className="mt-4 font-display text-[0.55rem] text-dim">
          REPORTED · VERIFIED {prettyDate.toUpperCase()}
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
                      {d.type.toUpperCase()}
                    </span>
                  </div>
                  {d.forUnit && (
                    <p className="mt-1.5 text-dim">
                      Unit gear for{" "}
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
        <Marquee color="amber">HOW TO USE THIS</Marquee>
        <p className="mt-4 text-dim">
          Unit equipment is map-locked: each evolved carry pulls its signature
          gear from one specific Story map, so there&apos;s no point grinding the
          wrong stage. Standard equipment and food drop more broadly. These are
          reported associations, not guaranteed drop rates — confirm the drop in
          the live game panel before you commit a long farm.
        </p>
      </section>

      <p className="mt-12 text-dim">
        Work out which units are worth gearing on the{" "}
        <Link href={localePath(locale, "/tier-list/")} className="phosphor-cyan hover:underline">
          tier list
        </Link>
        , plan their evolutions in the{" "}
        <Link href={localePath(locale, "/evolution-planner/")} className="phosphor-cyan hover:underline">
          evolution planner
        </Link>
        , then farm the right map above. Weighing a{" "}
        <Link href="/gamepasses/" className="phosphor-cyan hover:underline">
          gamepass
        </Link>{" "}
        instead? See what each one really does first.
      </p>

      <CabinetFooter />
    </main>
  );
}
