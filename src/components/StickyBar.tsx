"use client";

import { CHECKOUT_MEN, CHECKOUT_WOMEN } from "@/lib/checkout";
import { trackPurchaseClick } from "@/lib/analytics";

export function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold-500/30 bg-cosmic-950/95 px-3 py-3 backdrop-blur-md md:hidden">
      <p className="mb-2 text-center text-xs font-semibold text-gold-400">
        התחילו עכשיו — גישה מיידית
      </p>
      <div className="mx-auto flex max-w-lg items-stretch gap-2">
        <a
          href={CHECKOUT_MEN}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPurchaseClick("men", "sticky")}
          className="btn-cta-primary flex flex-1 items-center justify-center rounded-full py-3 text-sm font-extrabold text-cosmic-950"
        >
          גברים ←
        </a>
        <a
          href={CHECKOUT_WOMEN}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPurchaseClick("women", "sticky")}
          className="btn-cta-secondary flex flex-1 items-center justify-center rounded-full border-2 border-violet-glow/50 bg-violet-glow/30 py-3 text-sm font-extrabold text-white"
        >
          נשים ←
        </a>
      </div>
    </div>
  );
}
