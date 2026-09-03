import type { ReactNode } from "react";
import Link from "next/link";
import { localePath, type Locale } from "@/data/i18n";
import type { CrossText } from "@/data/pages/types";

/** A CRT screen panel with phosphor-grid border. */
export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border-2 border-grid bg-screen-2/40 shadow-[0_0_0_1px_rgba(67,224,232,0.08),0_0_24px_rgba(10,10,40,0.6),inset_0_1px_0_rgba(238,240,238,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}

/** Marquee-style section heading: pixel text + phosphor rule, cabinet plate. */
export function Marquee({
  children,
  color = "cyan",
}: {
  children: ReactNode;
  color?: "cyan" | "amber" | "green" | "magenta";
}) {
  return (
    <h2
      className={`flex w-full items-center gap-4 font-display text-base leading-snug phosphor-${color} sm:text-lg`}
    >
      <span className="shrink-0">{children}</span>
      <span aria-hidden="true" className="h-0.5 min-w-8 flex-1 bg-current opacity-25" />
    </h2>
  );
}

/** Locale-aware cross-link paragraph (before + links + between + after). */
export function CrossLinks({ cross, locale }: { cross: CrossText; locale: Locale }) {
  return (
    <p className="mt-12 text-dim">
      {cross.before}
      {cross.links.map((l, i) => (
        <span key={l.path}>
          <Link href={localePath(locale, l.path)} className="phosphor-cyan hover:underline">
            {l.label}
          </Link>
          {i < cross.between.length ? cross.between[i] : cross.after}
        </span>
      ))}
    </p>
  );
}

/** Shared cabinet footer disclaimer. */
export function CabinetFooter() {
  return (
    <footer className="mt-16 border-t-2 border-grid pt-6 text-dim">
      <p className="font-display text-[0.55rem] leading-relaxed">
        FAN-MADE · NOT AFFILIATED WITH EXPEDITIONS ENTERTAINMENT OR ROBLOX CORP
      </p>
      <p className="mt-2">
        Anime Expeditions Hub is an independent player resource. Game names and
        assets belong to their owners.
      </p>
    </footer>
  );
}
