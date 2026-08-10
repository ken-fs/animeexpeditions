import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anime Expeditions Hub",
    short_name: "AE Hub",
    description: "Anime Expeditions codes, tier list, units and guides for Roblox.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e1016",
    theme_color: "#0e1016",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
