"use client";

import { useMemo, useState } from "react";
import { traits, KEEP_LABEL, KEEP_PHOSPHOR, type Trait } from "@/data/traits";
import { rerollPage, type RerollStrings } from "@/data/pages/toolsPages";
import type { Locale } from "@/data/i18n";

/** Parse a community rate string like "14.63%" or "0.1%" into a number 0-1. */
function rateOf(t: Trait): number {
  const n = Number(t.rate.replace("%", "").trim());
  return Number.isFinite(n) ? n / 100 : 0;
}

/** Parse a pity string like "1,500 rerolls" into a number, or null if absent. */
function pityOf(t: Trait): number | null {
  if (!t.pity) return null;
  const n = Number(t.pity.replace(/[^0-9]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : null;
}

/**
 * Chance of at least one hit in n independent rerolls: 1 - (1-p)^n.
 * Computed in log space so a 0.1% rate over thousands of rerolls doesn't
 * underflow to a meaningless 0 before the subtraction.
 */
function chanceWithin(p: number, n: number): number {
  if (p <= 0) return 0;
  if (p >= 1) return 1;
  return 1 - Math.exp(n * Math.log1p(-p));
}

const fmtPct = (x: number, digits = 2) => `${(x * 100).toFixed(digits)}%`;

export function TraitRerollCalculator({ locale }: { locale: Locale }) {
  const t: RerollStrings = rerollPage[locale];
  const [targetName, setTargetName] = useState(traits[0].name);
  const [doneInput, setDoneInput] = useState("0");

  const done = Math.max(0, Math.floor(Number(doneInput) || 0));

  const target = traits.find((x) => x.name === targetName) ?? traits[0];
  const p = rateOf(target);
  const pity = pityOf(target);

  const expected = p > 0 ? Math.round(1 / p) : 0;
  // "Chance within N" is most useful at a round number near the expectation.
  const n = expected > 0 ? expected : 1;
  const within = chanceWithin(p, n);
  const pityLeft = pity !== null ? Math.max(0, pity - done) : null;

  // Full table with the same maths applied per row, so the page is useful even
  // if you ignore the picker.
  const rows = useMemo(
    () =>
      traits.map((x) => {
        const rp = rateOf(x);
        return { t: x, rate: rp, expected: rp > 0 ? Math.round(1 / rp) : 0, pity: pityOf(x) };
      }),
    [],
  );

  return (
    <div className="space-y-8">
      {/* Picker */}
      <section className="panel p-5">
        <h2 className="font-display text-sm phosphor-cyan">{t.targetLabel}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {traits.map((x) => {
            const on = x.name === targetName;
            return (
              <button
                key={x.name}
                type="button"
                onClick={() => setTargetName(x.name)}
                className={`px-3 py-1.5 font-display text-[0.6rem] tracking-wide ${
                  on ? "phosphor-amber border border-current" : "text-dim border border-transparent"
                }`}
              >
                {x.name}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-dim">{t.targetHint}</p>

        <div className="mt-6">
          <label htmlFor="rerolls-done" className="font-display text-sm phosphor-cyan">
            {t.doneLabel}
          </label>
          <input
            id="rerolls-done"
            type="number"
            min={0}
            step={1}
            inputMode="numeric"
            value={doneInput}
            onChange={(e) => setDoneInput(e.target.value)}
            className="mt-2 w-40 border border-current bg-transparent px-3 py-2 font-display text-lg phosphor-amber"
          />
          <p className="mt-2 text-xs text-dim">{t.doneHint}</p>
        </div>
      </section>

      {/* Results */}
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="panel p-5">
          <h3 className="font-display text-xs text-dim">{t.perReroll}</h3>
          <p className="mt-2 font-display text-2xl phosphor-amber">{fmtPct(p)}</p>
          <p className="mt-2 text-xs text-dim">
            1 in {p > 0 ? Math.round(1 / p).toLocaleString() : "—"}
          </p>
        </div>
        <div className="panel p-5">
          <h3 className="font-display text-xs text-dim">{t.expected}</h3>
          <p className="mt-2 font-display text-2xl phosphor-amber">
            {expected.toLocaleString()}
          </p>
          <p className="mt-2 text-xs text-dim">{t.rerollsUnit}</p>
        </div>
        <div className="panel p-5">
          <h3 className="font-display text-xs text-dim">{t.pityLabel}</h3>
          {pityLeft !== null ? (
            <>
              <p className="mt-2 font-display text-2xl phosphor-amber">
                {pityLeft.toLocaleString()}
              </p>
              <p className="mt-2 text-xs text-dim">
                {pityLeft === 0 ? t.pityReached : t.pityLeft(pityLeft)}
              </p>
            </>
          ) : (
            <p className="mt-2 text-xs text-dim">{t.noPity}</p>
          )}
        </div>
      </section>

      {/* Chance within N */}
      <section className="panel p-5">
        <h3 className="font-display text-sm phosphor-cyan">{t.atN(n)}</h3>
        <p className="mt-2 font-display text-2xl phosphor-amber">{fmtPct(within, 1)}</p>
        <div className="mt-4 space-y-1">
          {[1, 2, 4].map((mult) => {
            const nn = n * mult;
            return (
              <div key={mult} className="flex items-center gap-3">
                <span className="w-28 shrink-0 text-xs text-dim">
                  {nn.toLocaleString()} {t.rerollsUnit}
                </span>
                <span className="h-2 flex-1 bg-current/10">
                  <span
                    className="block h-2 bg-current"
                    style={{ width: `${Math.min(100, chanceWithin(p, nn) * 100)}%` }}
                  />
                </span>
                <span className="w-14 shrink-0 text-right text-xs phosphor-cyan">
                  {fmtPct(chanceWithin(p, nn), 0)}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full table */}
      <section className="panel p-5">
        <h2 className="font-display text-sm phosphor-cyan">{t.tableTitle}</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-current/20 font-display text-xs text-dim">
                <th className="py-2 pr-3">{t.colTrait}</th>
                <th className="py-2 pr-3">{t.colRate}</th>
                <th className="py-2 pr-3">{t.colExpected}</th>
                <th className="py-2 pr-3">{t.colPity}</th>
                <th className="py-2">{t.colKeep}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.t.name}
                  className={`border-b border-current/10 ${r.t.name === targetName ? "phosphor-amber" : ""}`}
                >
                  <td className="py-2 pr-3 font-semibold">{r.t.name}</td>
                  <td className="py-2 pr-3 text-dim">{r.t.rate}</td>
                  <td className="py-2 pr-3 text-dim">{r.expected.toLocaleString()}</td>
                  <td className="py-2 pr-3 text-dim">{r.pity ? r.pity.toLocaleString() : "—"}</td>
                  <td className="py-2">
                    <span className={`phosphor-${KEEP_PHOSPHOR[r.t.keep]}`}>
                      {KEEP_LABEL[r.t.keep]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How to use */}
      <section className="panel p-5">
        <h2 className="font-display text-sm phosphor-cyan">{t.howTitle}</h2>
        <ol className="mt-4 space-y-3">
          {t.howSteps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-display phosphor-amber">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-dim">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Honesty note */}
      <section className="panel p-5">
        <h2 className="font-display text-sm phosphor-magenta">{t.honestyTitle}</h2>
        <p className="mt-3 text-sm text-dim">{t.honestyBody}</p>
      </section>
    </div>
  );
}
