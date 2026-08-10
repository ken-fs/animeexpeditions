import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 py-24 text-center">
      <p className="font-display text-3xl phosphor-magenta sm:text-5xl">
        GAME OVER
      </p>
      <p className="mt-6 font-display text-sm phosphor-amber blink">
        404 — CONTINUE?
      </p>
      <p className="mt-5 max-w-md text-dim">
        This page doesn&apos;t exist. Insert coin and pick a screen:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4 font-display text-[0.6rem]">
        <Link
          href="/"
          className="border-2 border-cyan px-4 py-3 text-cyan transition hover:bg-cyan hover:text-screen"
        >
          CODES
        </Link>
        <Link
          href="/tier-list/"
          className="border-2 border-grid px-4 py-3 text-dim transition hover:border-cyan hover:text-fg"
        >
          RANKING
        </Link>
        <Link
          href="/beginner-guide/"
          className="border-2 border-grid px-4 py-3 text-dim transition hover:border-cyan hover:text-fg"
        >
          GUIDE
        </Link>
      </div>
    </main>
  );
}
