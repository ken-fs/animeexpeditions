"use client";

import { useEffect, useState } from "react";
import { tasks, type Cadence } from "@/data/checklist";
import { loc, type Locale } from "@/data/i18n";
import { checklistPage } from "@/data/pages/toolsPages";

const STORAGE_KEY = "ae-checklist-v1";

// Period keys drive the auto-reset. Daily rolls at UTC midnight; weekly rolls on
// the ISO week. Comparing a stored key to the current one tells us when to clear.
function dayKey(d: Date): string {
  return d.toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
}
function weekKey(d: Date): string {
  // ISO week number (UTC-based), good enough for a reset boundary.
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((t.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${t.getUTCFullYear()}-W${week}`;
}

interface Stored {
  daily: string; // period key when daily set was last valid
  weekly: string;
  done: string[]; // checked task ids
}

// Strings are looked up in-module (checklistPage) — see TeamBuilder for why.
export function DailyChecklist({ locale }: { locale: Locale }) {
  const t = checklistPage[locale];
  const [done, setDone] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  // Load from storage after mount, applying daily/weekly resets.
  useEffect(() => {
    const now = new Date();
    const dk = dayKey(now);
    const wk = weekKey(now);
    let carried: string[] = [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const s: Stored = JSON.parse(raw);
        const keep = new Set(s.done ?? []);
        // Drop daily tasks if the day rolled over; weekly if the week rolled over.
        for (const task of tasks) {
          const rolled = task.cadence === "daily" ? s.daily !== dk : s.weekly !== wk;
          if (rolled) keep.delete(task.id);
        }
        carried = [...keep];
      }
    } catch {
      // ignore corrupt storage
    }
    setDone(new Set(carried));
    setHydrated(true);
  }, []);

  // Persist on change (only after hydration so we don't overwrite with empty).
  useEffect(() => {
    if (!hydrated) return;
    const now = new Date();
    const payload: Stored = { daily: dayKey(now), weekly: weekKey(now), done: [...done] };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // ignore quota/private-mode errors
    }
  }, [done, hydrated]);

  function toggle(id: string) {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function resetAll() {
    setDone(new Set());
  }

  const groups: Cadence[] = ["daily", "weekly"];

  return (
    <div className="space-y-8">
      {groups.map((cadence) => {
        const list = tasks.filter((t) => t.cadence === cadence);
        const doneCount = list.filter((t) => done.has(t.id)).length;
        return (
          <section key={cadence}>
            <div className="mb-3 flex items-center justify-between border-b-2 border-grid pb-2">
              <h2 className="font-display text-[0.6rem] phosphor-cyan">
                {t.cadenceLabels[cadence]}
              </h2>
              <span className="font-display text-[0.55rem] text-dim">
                {hydrated ? `${doneCount}/${list.length}` : `0/${list.length}`}
              </span>
            </div>
            <div className="space-y-2">
              {list.map((task) => {
                const on = hydrated && done.has(task.id);
                return (
                  <label
                    key={task.id}
                    className={`flex cursor-pointer items-start gap-3 border-2 px-3 py-2.5 transition ${
                      on
                        ? "border-green bg-green/10"
                        : "border-grid bg-screen-2/40 hover:border-dim"
                    }`}
                  >
                    <span
                      className={`mt-0.5 grid size-5 shrink-0 place-items-center border-2 font-display text-[0.6rem] ${
                        on ? "border-green phosphor-green" : "border-dim"
                      }`}
                      aria-hidden="true"
                    >
                      {on ? "✓" : ""}
                    </span>
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => toggle(task.id)}
                      className="sr-only"
                    />
                    <span>
                      <span className={on ? "text-dim line-through" : "text-fg"}>
                        {loc(task.labelI18n, locale, task.label)}
                      </span>
                      {task.note && (
                        <span className="mt-0.5 block text-dim">
                          {loc(task.noteI18n, locale, task.note)}
                        </span>
                      )}
                    </span>
                  </label>
                );
              })}
            </div>
          </section>
        );
      })}

      <button
        onClick={resetAll}
        className="border-2 border-magenta px-4 py-2 font-display text-[0.55rem] text-magenta transition hover:bg-magenta hover:text-screen"
      >
        {t.resetAll}
      </button>
      <p className="text-dim">{t.privacyNote}</p>
    </div>
  );
}
