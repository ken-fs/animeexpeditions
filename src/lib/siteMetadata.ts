import type { Metadata } from "next";

const SITE_URL = "https://animeexpeditions.dev";

// Shared, locale-agnostic metadata for every root layout. Page-level metadata
// (title/description/canonical) is set per page via generateMetadata/metadata.
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
  openGraph: {
    type: "website",
    siteName: "Anime Expeditions Codes",
    url: SITE_URL,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Anime Expeditions Codes & Tier List" }],
  },
  robots: { index: true, follow: true },
};
