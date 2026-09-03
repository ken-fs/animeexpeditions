import { Marquee } from "@/components/crt";

// Official media pulled from Roblox's public thumbnail API (universe 7613921865,
// place 84515722934860) and the official "Anime Expeditions" YouTube channel.
// Images are mirrored into /public/game (WebP) so the rbxcdn 180-day links can't rot.
// promo-1/2 = Update 2.0 [Summer Siege] art (surfaced Sep 2026); promo-3..5 = launch shots.
const PROMO_SHOTS = [
  { src: "/game/promo-1.webp", alt: "Anime Expeditions — official key art from the game's Roblox page" },
  { src: "/game/promo-2.webp", alt: "Anime Expeditions — official artwork from the game's Roblox page" },
  { src: "/game/promo-3.webp", alt: "Anime Expeditions gameplay — tower defense wave" },
  { src: "/game/promo-4.webp", alt: "Anime Expeditions gameplay — anime units on the map" },
  { src: "/game/promo-5.webp", alt: "Anime Expeditions gameplay — boss expedition" },
];

// Official Update 2.0 trailer (@AnimeExpeditionsOfficial), verified live via YouTube
// oEmbed. 2026-09-03: the channel removed the original launch trailer (ysDUclBoJHk
// now returns "video unavailable" in embed), so only the Summer Siege trailer is shown.
const TRAILER = {
  id: "7t5YwGIPKC4",
  title: "Anime Expeditions — Update 2.0 Summer Siege Trailer",
  uploadDate: "2026-08-30",
};

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
    name: TRAILER.title,
    description:
      "Official gameplay trailer for Anime Expeditions, the anime tower-defense experience on Roblox.",
    thumbnailUrl: `https://i.ytimg.com/vi/${TRAILER.id}/maxresdefault.jpg`,
    uploadDate: TRAILER.uploadDate,
    embedUrl: `https://www.youtube-nocookie.com/embed/${TRAILER.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${TRAILER.id}`,
  };

  const [featured, ...restShots] = PROMO_SHOTS;

  return (
    <section className="mt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <Marquee color="amber">{screenshotsTitle}</Marquee>
      <div className="mt-5">
        {/* Featured shot — full-width cabinet screen */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={featured.src}
          alt={featured.alt}
          width={768}
          height={432}
          loading="lazy"
          className="w-full border-2 border-grid"
        />
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {restShots.map((shot) => (
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
      </div>

      <div className="mt-10">
        <Marquee color="magenta">{trailerTitle}</Marquee>
        <div className="mt-5 aspect-video w-full border-2 border-grid">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${TRAILER.id}`}
            title={TRAILER.title}
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
