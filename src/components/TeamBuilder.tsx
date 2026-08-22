"use client";

import { useMemo, useState } from "react";
import { units, TIER_ORDER, unitsByTier, type Tier } from "@/data/units";

const MAX_TEAM = 6;

const TIER_PHOSPHOR: Record<Tier, "amber" | "cyan" | "green" | "magenta"> = {
  SS: "amber",
  "S+": "amber",
  S: "amber",
  A: "cyan",
  B: "green",
  Watch: "magenta",
};

// Rough role buckets derived from each unit's free-text role, so the builder can
// flag coverage gaps without a separate data field. Order = display order.
const ROLE_BUCKETS: { key: string; label: string; match: (role: string) => boolean }[] = [
  { key: "dps", label: "Damage", match: (r) => /carry|dps|damage/i.test(r) },
  { key: "support", label: "Support", match: (r) => /support|amplif|buff/i.test(r) },
  { key: "control", label: "Control", match: (r) => /control|slow|stagger|stun|rewind/i.test(r) },
  { key: "aoe", label: "AoE / DoT", match: (r) => /aoe|damage-over-time|dot/i.test(r) },
];

function rolesOf(role: string): string[] {
  const hit = ROLE_BUCKETS.filter((b) => b.match(role)).map((b) => b.key);
  return hit.length ? hit : ["other"];
}

export function TeamBuilder() {
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
              {tier} TIER
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
                    <span className="font-display text-[0.5rem] text-dim">{u.role}</span>
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
          YOUR TEAM · {picked.size}/{MAX_TEAM}
        </h2>

        {analysis.chosen.length === 0 ? (
          <p className="mt-4 text-dim">
            Pick up to six units. This checks your role coverage — a team with no
            control or no support fails the harder stages no matter how much raw
            damage it has.
          </p>
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
              <p className="font-display text-[0.55rem] phosphor-cyan">ROLE COVERAGE</p>
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
                      {b.label.toUpperCase()}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Verdict */}
            <div className="space-y-1.5 border-t-2 border-grid pt-3 text-dim">
              {analysis.gaps.length > 0 ? (
                <p>
                  <span className="phosphor-magenta">Gap: </span>
                  no {analysis.gaps.map((g) => g.label.toLowerCase()).join(", ")}. The
                  harder modes punish a missing role faster than a weaker unit.
                </p>
              ) : (
                <p>
                  <span className="phosphor-green">Balanced. </span>
                  Damage, support, and control are all covered.
                </p>
              )}
              {analysis.watch > 0 && (
                <p>
                  {analysis.watch} unproven (Watch-tier) pick
                  {analysis.watch > 1 ? "s" : ""} — fine to test, risky to rely on.
                </p>
              )}
              {analysis.sTier >= 3 && (
                <p className="phosphor-amber">{analysis.sTier} S-tier carries — strong core.</p>
              )}
            </div>

            <button
              onClick={() => setPicked(new Set())}
              className="w-full border-2 border-magenta px-3 py-2 font-display text-[0.55rem] text-magenta transition hover:bg-magenta hover:text-screen"
            >
              CLEAR TEAM
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
