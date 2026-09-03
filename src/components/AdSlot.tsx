"use client";

import { useEffect, useRef } from "react";
import type { AdUnit } from "@/data/ads";

// Adsterra (highrevenueformat) iframe banner.
// The network's invoke.js locates its own <script> tag and inserts the ad iframe
// next to it, so the classic double-script snippet is replayed inside the mounted
// container. `atOptions` is a global read at invoke time — a module-level queue
// serializes units so a later slot never overwrites an earlier slot's options.
let adQueue: Promise<void> = Promise.resolve();

export function AdSlot({ unit, className = "" }: { unit: AdUnit; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = ref.current;
    if (!box || box.dataset.loaded) return;
    box.dataset.loaded = "1";

    adQueue = adQueue.then(
      () =>
        new Promise<void>((resolve) => {
          const done = () => resolve();
          const inline = document.createElement("script");
          inline.text = `atOptions = ${JSON.stringify({
            key: unit.key,
            format: "iframe",
            height: unit.height,
            width: unit.width,
            params: {},
          })};`;
          const ext = document.createElement("script");
          ext.src = `https://www.highrevenueformat.com/${unit.key}/invoke.js`;
          ext.async = false; // keep execution order deterministic
          ext.onload = done;
          ext.onerror = done;
          setTimeout(done, 8000); // a blocked/failed unit never stalls the queue
          box.appendChild(inline);
          box.appendChild(ext);
        })
    );
  }, [unit]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="mb-1 font-display text-[0.5rem] text-dim/70">AD</span>
      {/* Fixed-size slot: reserves space up front, so no layout shift when the ad loads. */}
      <div
        ref={ref}
        style={{ width: unit.width, height: unit.height, maxWidth: "100%" }}
        className="overflow-hidden border-2 border-grid bg-screen-2/30"
      />
    </div>
  );
}
