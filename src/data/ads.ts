// Ad units — single source of truth.
// Adsterra (served via highrevenueformat.com), classic iframe banners.
// NOTE: Adsterra also requires its own ads.txt record from the dashboard —
// append it to public/ads.txt (see repo note there).

export interface AdUnit {
  key: string;
  width: number;
  height: number;
}

export const ADSTERRA: Record<"leaderboard" | "rectangle", AdUnit> = {
  // 728×90 — desktop only (overflows small screens)
  leaderboard: { key: "bf7c7a8f18780e742a107a37ac518db7", width: 728, height: 90 },
  // 300×250 — fits all viewports
  rectangle: { key: "f926e5378df122c339daf93533fb7166", width: 300, height: 250 },
};
