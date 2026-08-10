"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_META, localePath, type Locale } from "@/data/i18n";

const LINKS = [
  { href: "/", label: "CODES" },
  { href: "/tier-list/", label: "RANKING" },
  { href: "/units/", label: "ROSTER" },
  { href: "/evolution-planner/", label: "PLANNER" },
  { href: "/beginner-guide/", label: "GUIDE" },
];

// English-only pages (not yet localized). Shown only when locale === "en".
const EN_ONLY_LINKS = [
  { href: "/team-builder/", label: "TEAM" },
  { href: "/daily-checklist/", label: "DAILY" },
  { href: "/traits/", label: "TRAITS" },
  { href: "/maps/", label: "MAPS" },
  { href: "/updates/", label: "UPDATES" },
  { href: "/game-modes/", label: "MODES" },
];

function currentLocale(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg) ? (seg as Locale) : "en";
}

export function SiteNav() {
  const pathname = usePathname() || "/";
  const locale = currentLocale(pathname);

  return (
    <header className="border-b-2 border-grid bg-bezel/60">
      <nav className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-display text-sm leading-tight phosphor-cyan">
          ANIME EXPEDITIONS
        </Link>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-display text-[0.6rem]">
          {[...LINKS, ...(locale === "en" ? EN_ONLY_LINKS : [])].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-dim transition-colors hover:text-fg hover:[text-shadow:0_0_8px_rgba(67,224,232,0.6)]"
            >
              {l.label}
            </Link>
          ))}

          {/* Language switcher — nav-level, top right */}
          <span className="flex items-center gap-2 border-l-2 border-grid pl-4 text-[0.55rem]">
            {LOCALES.map((lc) => (
              <Link
                key={lc}
                href={localePath(lc)}
                aria-current={lc === locale ? "true" : undefined}
                className={
                  lc === locale
                    ? "phosphor-cyan"
                    : "text-dim transition-colors hover:text-fg"
                }
              >
                {LOCALE_META[lc].label}
              </Link>
            ))}
          </span>
        </div>
      </nav>
    </header>
  );
}
