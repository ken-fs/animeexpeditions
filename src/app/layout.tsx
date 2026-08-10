import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";

// Arcade-cabinet CRT world: pixel display face + phosphor terminal face.
const display = Press_Start_2P({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});
const body = VT323({
  variable: "--font-body",
  subsets: ["latin"],
  weight: "400",
});

const SITE_URL = "https://animeexpeditions.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Anime Expeditions Codes (August 2026) — Working Codes & Rewards",
  description:
    "All working Anime Expeditions codes for Roblox, verified against live sources. Redeem for Trait Crystals, Equipment Rerolls and Stat Rerolls, plus every expired code and how to redeem.",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Anime Expeditions Codes (August 2026) — Working Codes",
    description:
      "Verified working Anime Expeditions codes for Roblox, updated as new milestone codes drop.",
    url: SITE_URL,
    siteName: "Anime Expeditions Codes",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Anime Expeditions Codes & Tier List" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anime Expeditions Codes (August 2026)",
    description: "Verified working Anime Expeditions codes for Roblox.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col crt">
        {/* impeccable:direction 7746c798
          THESIS: An arcade cabinet's CRT screen, not another dark-SaaS page. Refuses centered card-flow, eyebrow labels, and decorative accent dots.
          OWN-WORLD: Deep indigo phosphor screen, scanline overlay, glowing cyan/magenta/amber phosphor, pixel display face (Press Start 2P) + terminal face (VT323), high-score-board sections, cabinet bezel framing.
          STORY: The player walks up to a cabinet, reads the "HIGH SCORE"-style codes board and tier ranking, punches in a secret code, gets back to the game.
          FIRST VIEWPORT: Cabinet marquee title, then a big glowing "WORKING CODES" board with the active code lit like a top high-score record.
          FORM: arcade-cabinet CRT (grounded #5, roll key 7746c798).
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md */}
        <div className="scanlines" aria-hidden="true" />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
