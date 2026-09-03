"use client";

import { useState } from "react";
import type { Locale } from "@/data/i18n";

export function CodeCard({
  code,
  reward,
  expires,
  rank,
  copyLabel = "COPY",
  copiedLabel = "GOT IT",
  expiresPrefix = "EXPIRES",
  dateLocale = "en",
}: {
  code: string;
  reward: string;
  expires?: string;
  rank?: number; // high-score board position (01, 02…)
  copyLabel?: string;
  copiedLabel?: string;
  expiresPrefix?: string;
  dateLocale?: Locale;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard blocked — no-op
    }
  }

  const intl =
    dateLocale === "pt" ? "pt-BR" : dateLocale === "ru" ? "ru-RU" : dateLocale === "es" ? "es-ES" : "en-US";
  const expiresLabel = expires
    ? new Date(expires).toLocaleDateString(intl, { month: "short", day: "numeric" })
    : null;

  return (
    <div className="flex items-center justify-between gap-4 border-b-2 border-grid bg-screen-2/40 px-4 py-3 last:border-b-0">
      {rank !== undefined && (
        <span aria-hidden="true" className="hidden shrink-0 font-display text-sm phosphor-magenta sm:block">
          {String(rank).padStart(2, "0")}
        </span>
      )}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <code className="font-display text-base phosphor-green break-all">{code}</code>
          {expiresLabel && (
            <span className="font-display text-[0.5rem] text-magenta">
              {expiresPrefix} {expiresLabel.toUpperCase()}
            </span>
          )}
        </div>
        <p className="mt-1.5 text-dim">{reward}</p>
      </div>
      <button
        onClick={copy}
        className="shrink-0 border-2 border-cyan px-4 py-2 font-display text-[0.6rem] text-cyan transition hover:bg-cyan hover:text-screen active:translate-y-0.5"
        aria-label={`Copy code ${code}`}
      >
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}
