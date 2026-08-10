"use client";

import { useMemo, useState } from "react";
import { units, TIER_ORDER, unitsByTier } from "@/data/units";
import { plannerGuide, tierUnits, type Locale } from "@/data/i18n";

export function EvolutionPlanner({ locale = "en" }: { locale?: Locale }) {
  const t = plannerGuide[locale];
  const tierLabel = tierUnits[locale].tierLabels;
  const [picked, setPicked] = useState<Set<string>>(new Set());

  function toggle(name: string) {
    setPicked((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }

  const plan = useMemo(() => {
    const chosen = units.filter((u) => picked.has(u.name));
    const materials = new Map<string, string[]>();
    const noItem: string[] = [];
    for (const u of chosen) {
      if (u.evolveItem) {
        const list = materials.get(u.evolveItem) ?? [];
        list.push(u.name);
        materials.set(u.evolveItem, list);
      } else {
        noItem.push(u.name);
      }
    }
    return { chosen, materials, noItem };
  }, [picked]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
      {/* Picker */}
      <div className="space-y-6">
        {TIER_ORDER.map((tier) => (
          <fieldset key={tier}>
            <legend className="mb-2 font-display text-[0.55rem] phosphor-cyan">
              {tierLabel[tier]}
            </legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {unitsByTier(tier).map((u) => {
                const on = picked.has(u.name);
                return (
                  <label
                    key={u.name}
                    className={`flex cursor-pointer items-center gap-3 border-2 px-3 py-2 transition ${
                      on
                        ? "border-cyan bg-cyan/10 text-fg"
                        : "border-grid bg-screen-2/40 text-dim hover:border-dim"
                    }`}
                  >
                    <span
                      className={`grid size-5 shrink-0 place-items-center border-2 ${
                        on ? "border-cyan phosphor-cyan" : "border-dim"
                      }`}
                      aria-hidden="true"
                    >
                      {on ? "×" : ""}
                    </span>
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => toggle(u.name)}
                      className="sr-only"
                    />
                    <span>{u.name}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      {/* Result panel */}
      <aside className="h-fit border-2 border-grid bg-screen-2/40 p-5 lg:sticky lg:top-6">
        <h2 className="font-display text-[0.7rem] phosphor-amber">
          {t.farmChecklist}
        </h2>
        {plan.chosen.length === 0 ? (
          <p className="mt-4 text-dim">{t.planEmpty}</p>
        ) : (
          <div className="mt-4 space-y-4">
            <p className="font-display text-[0.55rem] text-dim">
              {t.unitsSelected(plan.chosen.length)}
            </p>
            {plan.materials.size > 0 && (
              <ul className="space-y-2">
                {[...plan.materials.entries()].map(([item, forUnits]) => (
                  <li key={item} className="border-2 border-grid px-3 py-2">
                    <span className="phosphor-green">{item}</span>
                    <span className="mt-0.5 block text-dim">
                      {t.forUnits} {forUnits.join(", ")}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {plan.noItem.length > 0 && (
              <p className="text-dim">{t.noItem(plan.noItem.join(", "))}</p>
            )}
            <button
              onClick={() => setPicked(new Set())}
              className="w-full border-2 border-magenta px-3 py-2 font-display text-[0.55rem] text-magenta transition hover:bg-magenta hover:text-screen"
            >
              {t.clear}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
