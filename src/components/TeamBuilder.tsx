"use client";

import { useMemo, useState } from "react";
import { units, TIER_ORDER, unitsByTier, unitRole, type Tier } from "@/data/units";
import { teamBuilderPage, type TeamBuilderStrings } from "@/data/pages/toolsPages";
import type { Locale } from "@/data/i18n";

const MAX_TEAM = 6;

const TIER_PHOSPHOR: Record<Tier, "amber" | "cyan" | "green" | "magenta"> = {
  SS: "amber",
  "S+": "amber",
  S: "amber",
  A: "cyan",
  B: "green",
  Watch: "magenta",
};

// Rough role buckets derived from each unit's free-text English role (units.ts
// `role` field is the matching source — localized display strings never feed
// this regex). Order = display order.
const ROLE_BUCKETS: { key: keyof TeamBuilderStrings["roleLabels"]; match: (role: string) => boolean }[] = [
  { key: "dps", match: (r) => /carry|dps|damage/i.test(r) },
  { key: "support", match: (r) => /support|amplif|buff/i.test(r) },
  { key: "control", match: (r) => /control|slow|stagger|stun|rewind/i.test(r) },
  { key: "aoe", match: (r) => /aoe|damage-over-time|dot/i.test(r) },
];

function rolesOf(role: string): string[] {
  const hit = ROLE_BUCKETS.filter((b) => b.match(role)).map((b) => b.key);
  return hit.length ? hit : ["other"];
}

// Strings are looked up in-module (teamBuilderPage) so functions like watchNote
// stay usable — they can't cross the server→client prop boundary.
export function TeamBuilder({ locale }: { locale: Locale }) {
  const t = teamBuilderPage[locale];
  const [picked, setPicked] = useState<Set<string>>(new Set());

  function toggle(name: string) {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else if (next.size < MAX_TEAM) {
        next.add(name);
      }
      return next;
    });
  }

  const analysis = useMemo(() => {
    const chosen = units.filter((u) => picked.has(u.name));
    const covered = new Set<string>();
    for (const u of chosen) for (const r of rolesOf(u.role)) covered.add(r);
    const gaps = ROLE_BUCKETS.filter((b) => !covered.has(b.key));
    const sTier = chosen.filter((u) => u.tier === "S").length;
    const watch = chosen.filter((u) => u.tier === "Watch").length;
    return { chosen, covered, gaps, sTier, watch };
  }, [picked]);

  const full = picked.size >= MAX_TEAM;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
      {/* Picker */}
      <div className="space-y-6">
        {TIER_ORDER.filter((tier) => unitsByTier(tier).length > 0).map((tier) => (
          <fieldset key={tier}>
            <legend className={`mb-2 font-display text-[0.55rem] phosphor-${TIER_PHOSPHOR[tier]}`}>
              {tier} {t.tierSuffix}
            </legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {unitsByTier(tier).map((u) => {
                const on = picked.has(u.name);
                const locked = !on && full;
                return (
                  <label
                    key={u.name}
                    className={`flex items-center gap-3 border-2 px-3 py-2 transition ${
                      on
                        ? "border-cyan bg-cyan/10 text-fg cursor-pointer"
                        : locked
                          ? "border-grid/50 text-dim/40 cursor-not-allowed"
                          : "border-grid bg-screen-2/40 text-dim hover:border-dim cursor-pointer"
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
                      disabled={locked}
                      onChange={() => toggle(u.name)}
                      className="sr-only"
                    />
                    <span className="flex-1">{u.name}</span>
                    <span className="font-display text-[0.5rem] text-dim">{unitRole(u, locale)}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      {/* Analysis panel */}
      <aside className="h-fit border-2 border-grid bg-screen-2/40 p-5 lg:sticky lg:top-6">
        <h2 className="font-display text-[0.7rem] phosphor-amber">
          {t.yourTeam} · {picked.size}/{MAX_TEAM}
        </h2>

        {analysis.chosen.length === 0 ? (
          <p className="mt-4 text-dim">{t.emptyState}</p>
        ) : (
          <div className="mt-4 space-y-4">
            <ul className="space-y-1.5">
              {analysis.chosen.map((u) => (
                <li key={u.name} className="flex items-baseline justify-between gap-2 text-fg">
                  <span>{u.name}</span>
                  <span className={`font-display text-[0.5rem] phosphor-${TIER_PHOSPHOR[u.tier]}`}>
                    {u.tier}
                  </span>
                </li>
              ))}
            </ul>

            {/* Role coverage */}
            <div className="border-t-2 border-grid pt-3">
              <p className="font-display text-[0.55rem] phosphor-cyan">{t.roleCoverage}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {ROLE_BUCKETS.map((b) => {
                  const on = analysis.covered.has(b.key);
                  return (
                    <span
                      key={b.key}
                      className={`border px-2 py-0.5 font-display text-[0.5rem] ${
                        on ? "border-cyan phosphor-cyan" : "border-grid/50 text-dim/50 line-through"
                      }`}
                    >
                      {t.roleLabels[b.key].toUpperCase()}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Verdict */}
            <div className="space-y-1.5 border-t-2 border-grid pt-3 text-dim">
              {analysis.gaps.length > 0 ? (
                <p>
                  <span className="phosphor-magenta">{t.gapPre}</span>
                  no {analysis.gaps.map((g) => t.roleLabels[g.key].toLowerCase()).join(", ")}
                  {t.gapBody}
                </p>
              ) : (
                <p>
                  <span className="phosphor-green">{t.balanced}</span>
                </p>
              )}
              {analysis.watch > 0 && <p>{t.watchNote(analysis.watch)}</p>}
              {analysis.sTier >= 3 && <p className="phosphor-amber">{t.sTierNote(analysis.sTier)}</p>}
            </div>

            <button
              onClick={() => setPicked(new Set())}
              className="w-full border-2 border-magenta px-3 py-2 font-display text-[0.55rem] text-magenta transition hover:bg-magenta hover:text-screen"
            >
              {t.clearTeam}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
