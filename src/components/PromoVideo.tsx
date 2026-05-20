const YOUTUBE_VIDEO_ID = "tytZZZxsVxQ";

export function PromoVideo() {
  return (
    <div className="mx-auto mb-10 w-full max-w-3xl px-1">
      <p className="mb-4 text-center text-base font-bold text-gold-400 md:text-lg">
        ▶ צפו עכשיו — ותבינו למה אלפי אנשים בוחרים בסט הזה
      </p>

      <div className="video-glow relative overflow-hidden rounded-2xl border border-gold-500/35 bg-cosmic-900 shadow-2xl shadow-gold-500/15">
        <div className="relative aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&hl=he`}
            title="14 מדיטציות לסינכרון התדר — מאור אילוז"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        </div>
      </div>

      <p className="mt-3 text-center text-sm text-white/50">
        אחרי הצפייה — בחרו גברים או נשים והתחילו מיד ↓
      </p>
    </div>
  );
}
