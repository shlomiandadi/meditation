import { GenderCta } from "@/components/GenderCta";
import { Reveal } from "@/components/Reveal";
import type { ButtonLocation } from "@/lib/analytics";

type ActionBannerProps = {
  headline: string;
  subline?: string;
  location: ButtonLocation;
};

export function ActionBanner({ headline, subline, location }: ActionBannerProps) {
  return (
    <Reveal>
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-b from-gold-500/10 via-cosmic-800/80 to-cosmic-900/90 px-6 py-10 text-center shadow-2xl shadow-gold-500/10 md:px-10 md:py-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center top, color-mix(in srgb, #d4a853 25%, transparent), transparent 60%)",
          }}
        />
        <div className="relative">
          <p className="mb-2 inline-block animate-bounce-subtle rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1 text-xs font-bold tracking-wide text-gold-400">
            אל תדחו — התחילו היום
          </p>
          <h3 className="mb-3 text-xl font-extrabold text-white md:text-2xl">
            {headline}
          </h3>
          {subline && (
            <p className="mx-auto mb-6 max-w-lg text-white/70">{subline}</p>
          )}
          <GenderCta
            size="default"
            showLabel={false}
            variant="urgent"
            location={location}
          />
        </div>
      </div>
    </Reveal>
  );
}
