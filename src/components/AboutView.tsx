import { Marquee, CabinetFooter, CrossLinks } from "@/components/crt";
import { LAST_VERIFIED, ROBLOX_GAME_URL } from "@/data/codes";
import { aboutPage } from "@/data/pages/contentPages";
import { intlLocale, type Locale } from "@/data/i18n";

export function AboutView({ locale = "en" }: { locale?: Locale }) {
  const t = aboutPage[locale];
  const prettyDate = new Date(LAST_VERIFIED).toLocaleDateString(intlLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:py-14">
      <header className="text-center">
        <h1 className="font-display text-xl leading-relaxed phosphor-cyan sm:text-3xl sm:leading-relaxed">
          {t.h1}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-dim">{t.intro}</p>
      </header>

      <section className="mt-12">
        <Marquee color="amber">{t.whatTitle}</Marquee>
        <p className="mt-4 text-dim">{t.whatBody}</p>
      </section>

      <section className="mt-14">
        <Marquee color="cyan">{t.verifyTitle}</Marquee>
        <p className="mt-4 text-dim">
          {t.verifyPre}
          <span className="phosphor-amber">{prettyDate}</span>
          {t.verifyPost}
        </p>
      </section>

      <section className="mt-14">
        <Marquee color="green">{t.stanceTitle}</Marquee>
        <p className="mt-4 text-dim">{t.stanceBody}</p>
      </section>

      <section className="mt-14">
        <Marquee color="magenta">{t.linksTitle}</Marquee>
        <p className="mt-4 text-dim">{t.linksBody}</p>
        <a
          href={ROBLOX_GAME_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block border-2 border-magenta px-5 py-2.5 font-display text-[0.6rem] text-magenta transition hover:bg-magenta hover:text-screen"
        >
          {t.playCta}
        </a>
      </section>

      <CrossLinks cross={t.cross} locale={locale} />

      <CabinetFooter />
    </main>
  );
}
