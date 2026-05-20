import { CHECKOUT_MEN, CHECKOUT_WOMEN } from "@/lib/checkout";

type GenderCtaProps = {
  size?: "default" | "large";
  className?: string;
  showLabel?: boolean;
  variant?: "default" | "urgent";
};

const sizeMap = {
  default: {
    wrap: "gap-3 max-w-md",
    btn: "px-7 py-3.5 text-base w-full sm:w-auto sm:min-w-[200px]",
    sub: "text-xs",
  },
  large: {
    wrap: "gap-4 max-w-xl",
    btn: "px-10 py-5 text-lg md:text-xl w-full sm:w-auto sm:min-w-[240px]",
    sub: "text-sm",
  },
};

export function GenderCta({
  size = "default",
  className = "",
  showLabel = true,
  variant = "default",
}: GenderCtaProps) {
  const s = sizeMap[size];
  const isUrgent = variant === "urgent";

  const menLabel = isUrgent ? "התחל עכשיו — גברים ←" : "גברים — קנה עכשיו ₪249";
  const womenLabel = isUrgent ? "התחל עכשיו — נשים ←" : "נשים — קנה עכשיו ₪249";

  return (
    <div className={`mx-auto flex w-full flex-col items-center ${className}`}>
      {showLabel && (
        <div className="mb-4 text-center">
          <p className="text-base font-semibold text-gold-400 md:text-lg">
            {isUrgent
              ? "הגישה שלך מחכה — לחץ והתחל היום"
              : "בחרו את הגרסה שלכם והתחילו עכשיו:"}
          </p>
          <p className="mt-1 text-sm text-white/50">
            גישה מיידית · הורדה לאחר תשלום · ללא מנוי
          </p>
        </div>
      )}

      <div
        className={`flex w-full flex-col items-center justify-center sm:flex-row ${s.wrap} ${s.wrap.includes("max-w") ? "mx-auto" : ""}`}
      >
        <a
          href={CHECKOUT_MEN}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-cta-primary inline-flex flex-col items-center justify-center rounded-full font-extrabold text-cosmic-950 shadow-xl transition hover:scale-[1.04] active:scale-[0.97] ${s.btn}`}
        >
          <span>{menLabel}</span>
          <span className={`${s.sub} mt-0.5 font-medium opacity-80`}>
            14 מדיטציות · גרסת גברים
          </span>
        </a>
        <a
          href={CHECKOUT_WOMEN}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-cta-secondary inline-flex flex-col items-center justify-center rounded-full border-2 border-violet-glow/60 bg-violet-glow/25 font-extrabold text-white shadow-xl shadow-violet-glow/20 transition hover:scale-[1.04] hover:bg-violet-glow/40 active:scale-[0.97] ${s.btn}`}
        >
          <span>{womenLabel}</span>
          <span className={`${s.sub} mt-0.5 font-medium text-white/70`}>
            14 מדיטציות · גרסת נשים
          </span>
        </a>
      </div>
    </div>
  );
}
