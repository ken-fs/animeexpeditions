import { Marquee } from "@/components/crt";

// Official media pulled from Roblox's public thumbnail API (universe 7613921865,
// place 84515722934860) and the official "Anime Expeditions" YouTube channel.
// Images are mirrored into /public/game so the rbxcdn 180-day links can't rot.
const PROMO_SHOTS = [
  { src: "/game/promo-1.png", alt: "Anime Expeditions gameplay — tower defense wave" },
  { src: "/game/promo-2.png", alt: "Anime Expeditions gameplay — anime units on the map" },
  { src: "/game/promo-3.png", alt: "Anime Expeditions gameplay — boss expedition" },
];

// Official trailer, verified live via YouTube oEmbed (channel: Anime Expeditions).
const TRAILER_ID = "ysDUclBoJHk";

export function GameMedia({
  screenshotsTitle,
  trailerTitle,
}: {
  screenshotsTitle: string;
  trailerTitle: string;
}) {
  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Anime Expeditions Official Trailer",
    description:
      "Official gameplay trailer for Anime Expeditions, the anime tower-defense experience on Roblox.",
    thumbnailUrl: `https://i.ytimg.com/vi/${TRAILER_ID}/maxresdefault.jpg`,
    uploadDate: "2026-07-01",
    embedUrl: `https://www.youtube-nocookie.com/embed/${TRAILER_ID}`,
    contentUrl: `https://www.youtube.com/watch?v=${TRAILER_ID}`,
  };

  return (
    <section className="mt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <Marquee color="amber">{screenshotsTitle}</Marquee>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {PROMO_SHOTS.map((shot) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            width={768}
            height={432}
            loading="lazy"
            className="w-full border-2 border-grid"
          />
        ))}
      </div>

      <div className="mt-10">
        <Marquee color="magenta">{trailerTitle}</Marquee>
        <div className="mt-5 aspect-video w-full border-2 border-grid">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${TRAILER_ID}`}
            title="Anime Expeditions Official Trailer"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
