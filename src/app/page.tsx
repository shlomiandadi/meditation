import { ActionBanner } from "@/components/ActionBanner";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { GenderCta } from "@/components/GenderCta";
import { PromoVideo } from "@/components/PromoVideo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StickyBar } from "@/components/StickyBar";

const TRUST_ITEMS = [
  "14 מדיטציות עמוקות",
  "הורדה מיידית",
  "תרגול ללא הגבלת זמן",
  "₪249 בלבד",
];

const BENEFITS = [
  {
    title: "14 מדיטציות מודרכות עמוקות",
    desc: "כל אחת מטפלת בשכבה אחרת — הרפיה, מיקוד, שחרור ותכנות.",
  },
  {
    title: "תכנות תת-המודע",
    desc: "שינוי שקורה כשאתה במצב הנכון — בלי מאבק ובלי כפייה.",
  },
  {
    title: "סינכרון תדר",
    desc: "חזרה לקצב פנימי שמאפשר ביטחון, בהירות ושפע.",
  },
  {
    title: "הורדה מיידית",
    desc: "מתחילים היום — גישה מלאה מיד לאחר הרכישה.",
  },
];

const OUTCOMES = [
  "נרדמים מהר יותר — והראש שקט יותר",
  "מגיבים פחות מתוך פחד, יותר מתוך בחירה",
  "מרגישים ממוקדים — לא רק \"עסוקים\"",
  "דפוסים ישנים מתחילים להרגיש רחוקים",
  "תחושה שמשהו התחיל לזוז — מבפנים",
];

const FOR_YOU = [
  "אתה מרגיש שיודעים מה לעשות — אבל משהו בפנים עדיין תוקע",
  "המתח, הלחץ או הרעש בראש כבר לא משחקים",
  "אתה רוצה כלים פרקטיים — לא פילוסופיה של 400 עמודים",
  "אתה מוכן להקדיש כמה דקות ביום לשינוי מבפנים",
  "אתה מבין שתת-המודע מנהל את רוב החיים — ורוצה לדבר איתו באותה שפה",
];

const OBJECTIONS = [
  {
    q: "\"אין לי זמן\"",
    a: "מדיטציה אחת = כמה דקות. אין לך זמן לא להקדיש אותן — כשהראש לא נרדם.",
  },
  {
    q: "\"כבר ניסיתי מדיטציה\"",
    a: "ניסית רגילה. לא עמוקה לתכנות תת-המודע.",
  },
  {
    q: "\"זה נשמע מיסטי\"",
    a: "זה נשימה + הרפיה + מצב מוח. מדויק. בלי קטורות.",
  },
  {
    q: "\"249 זה הרבה\"",
    a: "פחות מ־18 שקל למדיטציה. פחות מקפה ביום — על שינוי שאתה לוקח איתך שנים.",
  },
];

const FAQ = [
  {
    q: "מה אני מקבל בדיוק?",
    a: "14 מדיטציות מודרכות + הורדה מיידית לאחר רכישה.",
  },
  {
    q: "איך מתחילים?",
    a: "בוחרים גברים או נשים → רוכשים → מקבלים גישה להורדה → מתרגלים.",
  },
  {
    q: "מה ההבדל בין גרסת גברים לנשים?",
    a: "אותו סט של 14 מדיטציות — מותאם להנחיה ולטון שמתאימים לכל מין. בחרו את הכפתור המתאים לכם.",
  },
  {
    q: "צריך ניסיון קודם?",
    a: "לא. ההנחיה מובילה אותך שלב אחר שלב.",
  },
  {
    q: "למה ₪249?",
    a: "כי מאור רצה להנגיש מערכת שלמה — לא מוצר דוגמה.",
  },
];

const STEPS = [
  { num: "01", title: "רוכשים את הסט", desc: "תשלום מאובטח · ₪249 חד-פעמי" },
  { num: "02", title: "מקבלים גישה", desc: "הורדה מיידית לכל 14 המדיטציות" },
  { num: "03", title: "מתרגלים בקצב שלך", desc: "בבית, מתי שרוצים, ללא מנוי" },
];

function CenteredListItem({
  children,
  icon = "✓",
}: {
  children: React.ReactNode;
  icon?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-lg text-gold-400">
        {icon}
      </span>
      <span className="max-w-md text-base text-white/90 md:text-lg">
        {children}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      <div className="relative z-10">
        <StickyBar />

        {/* Hero */}
        <header className="relative overflow-hidden">
          <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-16 text-center md:pb-28 md:pt-24">
            <Reveal>
              <p className="animate-bounce-subtle mb-4 inline-block rounded-full border border-gold-500/40 bg-gold-500/15 px-5 py-1.5 text-sm font-bold text-gold-400">
                ⚡ גישה מיידית לאחר רכישה — התחילו היום
              </p>
            </Reveal>

            <Reveal delay={1}>
              <p className="mb-4 text-sm font-medium tracking-wide text-white/60 md:text-base">
                מאור אילוז · סט מדיטציות מלא
              </p>

              <h1 className="mx-auto mb-6 max-w-3xl text-3xl font-extrabold leading-[1.15] text-white md:text-5xl lg:text-[3.25rem]">
                <span className="gold-gradient-text">14 מדיטציות</span>
                <br />
                שמכניסות את המוח למצב שבו תת-המודע
                <br />
                כבר לא מתנגד — הוא מתכנת
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                סט מלא של מדיטציות מודרכות עמוקות — לשחרור מתח, שינוי דפוסי
                חשיבה, וחיזוק ביטחון, מיקוד ושפע.
                <br />
                <strong className="text-gold-400">
                  הורדה מיידית לאחר רכישה. תרגול בבית, בקצב שלך.
                </strong>
              </p>
            </Reveal>

            <Reveal delay={2}>
              <PromoVideo />
            </Reveal>

            <Reveal delay={3}>
              <div className="mx-auto mb-8 flex max-w-2xl flex-wrap justify-center gap-2 md:gap-3">
                {TRUST_ITEMS.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gold-500/25 bg-cosmic-800/50 px-3 py-1.5 text-xs text-white/90 md:px-4 md:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <GenderCta size="large" variant="urgent" location="hero" />
              <p className="mx-auto mt-4 max-w-sm text-sm font-medium text-gold-400/90">
                👆 לחצו על הכפתור המתאים לכם — וקבלו גישה תוך דקות
              </p>
              <p className="mt-2 text-sm text-white/50">
                תשלום מאובטח · ללא התחייבות חודשית
              </p>
            </Reveal>

            <Reveal>
              <p className="mx-auto mt-12 max-w-xl border-t border-white/10 pt-10 text-base italic leading-relaxed text-white/70 md:text-lg">
                אנשים לא נכשלים כי הם חלשים.
                <br />
                הם נכשלים כי המערכת העצבים שלהם עדיין רצה על תוכנה ישנה.
              </p>
            </Reveal>
          </div>
        </header>

        {/* Pain */}
        <section className="border-y border-white/5 bg-cosmic-900/80 py-16 md:py-24">
          <div className="section-center">
            <Reveal>
              <SectionHeading subtitle="זה לא חוסר ממד. זה מצב תודעתי.">
                אם אתה מרגיש שאתה &quot;יודע מה לעשות&quot; — אבל הגוף לא
                מצליח לעקוב
              </SectionHeading>
            </Reveal>

            <Reveal>
              <div className="prose-center mx-auto max-w-2xl space-y-5 text-lg leading-relaxed text-white/80">
                <p>אתה קם עם רעש בראש.</p>
                <p>אתה הולך לישון עם אותו לופ.</p>
                <p>
                  אתה קורא, אתה לומד, אתה מבין —{" "}
                  <strong className="text-white">
                    אבל משהו בפנים עדיין חוסם.
                  </strong>
                </p>
                <p className="text-white/60">
                  זה לא עצלנות. זה לא &quot;חוסר אמונה&quot;.
                </p>
                <p>
                  <span className="font-semibold text-gold-400">
                    מדיטציה עמוקה לא &quot;מרגיעה&quot;.
                  </span>{" "}
                  היא מכניסה אותך למצב שבו תת-המודע פתוח לקבל תכנות חדש — בלי
                  מאבק, בלי כפייה, בלי שכנוע עצמי מייגע.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <Reveal>
              <SectionHeading subtitle="זה לא קסם. זה סינכרון תדר + תכנות תת-המודע.">
                תאר לעצמך 21 יום מהיום
              </SectionHeading>
            </Reveal>

            <div className="mx-auto grid max-w-2xl gap-4 md:gap-5">
              {OUTCOMES.map((item, i) => (
                <Reveal key={item} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="card-glass flex flex-col items-center gap-3 rounded-2xl p-6 text-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/25 text-xl text-gold-400">
                      ✓
                    </span>
                    <span className="text-base text-white/90 md:text-lg">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-3xl px-5">
            <ActionBanner
              headline="מוכנים לשבור את הלופ?"
              subline="14 מדיטציות מחכות לכם — בחרו גברים או נשים והתחילו עכשיו."
              location="outcomes_banner"
            />
          </div>
        </section>

        {/* What you get */}
        <section className="bg-cosmic-900/60 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 text-center">
            <Reveal>
              <SectionHeading subtitle="מערכת שלמה. לא קובץ אחד ושכחת.">
                14 מדיטציות. ערך אמיתי.
              </SectionHeading>
            </Reveal>

            <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
              {BENEFITS.map((b, i) => (
                <Reveal key={b.title} delay={(i % 3) as 0 | 1 | 2}>
                  <article className="card-glass h-full rounded-2xl p-6 text-center">
                    <h3 className="mb-2 text-lg font-bold text-gold-400">
                      {b.title}
                    </h3>
                    <p className="text-white/75">{b.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="card-glass mx-auto mt-10 max-w-2xl rounded-2xl p-6 text-center md:p-8">
                <p className="text-lg text-white/80">
                  פגישת ליווי אחת עם מאמן מקצועי יכולה לעלות מאות שקלים.
                </p>
                <p className="mt-2 text-xl font-bold text-white md:text-2xl">
                  כאן — 14 כלים שאפשר להפעיל שוב ושוב, ב־
                  <span className="gold-gradient-text">₪249 בלבד</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* About course */}
        <section className="py-16 md:py-24">
          <div className="section-center">
            <Reveal>
              <SectionHeading>
                זה לא &quot;עוד מדיטציות&quot;. זה מעבר תודעתי.
              </SectionHeading>
            </Reveal>
            <Reveal>
              <div className="prose-center mx-auto max-w-2xl space-y-5 text-lg leading-relaxed text-white/80">
                <p>
                  הסט כולל סדרת מדיטציות מודרכות שנועדות להכניס אותך, שוב ושוב,
                  למצב שבו הגוף והמוח{" "}
                  <strong className="text-white">רגועים ופתוחים</strong> — המצב
                  היחיד שבו אפשר באמת:
                </p>
                <ul className="mx-auto space-y-3 text-white/85">
                  {[
                    "לשחרר מתחים שנצברו שנים",
                    "לשנות דפוסי חשיבה שחוזרים על עצמם",
                    "לחזק תחושות של ביטחון, מיקוד ושפע",
                  ].map((line) => (
                    <li
                      key={line}
                      className="flex items-center justify-center gap-2 text-center"
                    >
                      <span className="text-gold-400">◆</span>
                      {line}
                    </li>
                  ))}
                </ul>
                <p>
                  דרך{" "}
                  <strong className="text-gold-400">
                    נשימה, הרפיה והכוונה תודעתית
                  </strong>{" "}
                  — לא תיאוריה. חוויה. שחוזרת על עצמה, עד שהמערכת שלך לומדת
                  להאמין במשהו חדש.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Instructor */}
        <section className="border-y border-white/5 bg-cosmic-900/80 py-16 md:py-24">
          <div className="section-center">
            <Reveal>
              <SectionHeading subtitle="הכלי שאני נותן ללקוחות שלי — עכשיו אצלך.">
                מאור אילוז
              </SectionHeading>
            </Reveal>

            <Reveal>
              <div className="card-glass mx-auto max-w-2xl rounded-2xl p-6 text-center md:p-8">
                <p className="mb-4 text-lg leading-relaxed text-white/85">
                  מאור אילוז הוא מאמן גוף ונפש ומלווה תהליכי שינוי והתפתחות
                  אישית. בעבודתו הוא משלב אימון מנטלי, נשימה מודעת ומדיטציה
                  עמוקה — במטרה להרגיע את מערכת העצבים, לחזק מודעות פנימית
                  וליצור שינוי אמיתי.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-white/85">
                  לאורך השנים ליווה אנשים בתהליכים של שיפור הרגלים, ויסות רגשי
                  וחיזוק ביטחון עצמי — תוך שימוש בכלים פרקטיים ופשוטים ליישום
                  ביומיום.
                </p>
                <p className="text-lg font-medium text-gold-400">
                  הסט נוצר מהשטח — כדי שכל אחד יוכל לעצור, לנשום, ולהתחבר מחדש
                  לשקט הפנימי.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* For who */}
        <section className="py-16 md:py-24">
          <div className="section-center">
            <Reveal>
              <SectionHeading>הסט הזה נבנה בשבילך — אם</SectionHeading>
            </Reveal>
            <div className="mx-auto flex max-w-xl flex-col gap-5">
              {FOR_YOU.map((item, i) => (
                <Reveal key={item} delay={(i % 3) as 0 | 1 | 2}>
                  <CenteredListItem>{item}</CenteredListItem>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-cosmic-800/40 p-6 text-center leading-relaxed text-white/70">
                <strong className="text-white">לא בשבילך</strong> אם אתה מחפש
                כפתור קסם בלי להקשיב.
                <br />
                <span className="mt-3 inline-block text-gold-400">
                  אבל אם אתה מוכן להקשיב לעצמך — 14 המדיטציות האלה יכולות להיות
                  מה שהכי התחרט שלא התחלת קודם.
                </span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-cosmic-900/60 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <Reveal>
              <SectionHeading>איך זה עובד</SectionHeading>
            </Reveal>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <Reveal key={step.num} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="card-glass flex h-full flex-col items-center rounded-2xl p-6 text-center">
                    <span className="gold-gradient-text text-3xl font-extrabold">
                      {step.num}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/65">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Objections */}
        <section className="py-16 md:py-24">
          <div className="section-center">
            <Reveal>
              <SectionHeading>אולי אתה חושב ש...</SectionHeading>
            </Reveal>
            <div className="mx-auto max-w-2xl space-y-5">
              {OBJECTIONS.map((o, i) => (
                <Reveal key={o.q} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="card-glass rounded-2xl p-5 text-center md:p-6">
                    <p className="mb-2 font-bold text-white">{o.q}</p>
                    <p className="text-white/75">{o.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-3xl px-5">
            <ActionBanner
              headline="עדיין מתלבטים? תנו לעצמכם 14 הזדמנויות לשנות."
              subline="לחיצה אחת — ואתם בפנים. בלי המתנה."
              location="objections_banner"
            />
          </div>
        </section>

        {/* Purchase */}
        <section
          id="purchase"
          className="scroll-mt-8 border-y border-gold-500/20 bg-gradient-to-b from-cosmic-900 to-cosmic-950 py-20 md:py-28"
        >
          <div className="mx-auto max-w-2xl px-5 text-center">
            <Reveal>
              <p className="animate-bounce-subtle mb-2 inline-block rounded-full border border-gold-500/50 bg-gold-500/15 px-4 py-1 text-sm font-bold text-gold-400">
                הצעה פתוחה עכשיו
              </p>
              <h2 className="mb-4 text-2xl font-bold text-white md:text-4xl">
                השאלה לא &quot;האם זה עובד&quot;
              </h2>
              <p className="mb-8 text-lg text-white/75 md:text-xl">
                השאלה היא: כמה עוד אתה מוכן לחיות על תדר שלא שלך?
              </p>

              <div className="card-glass mx-auto mb-8 inline-block rounded-3xl px-10 py-8">
                <p className="text-sm text-white/60">מחיר חד-פעמי</p>
                <p className="gold-gradient-text text-5xl font-extrabold md:text-6xl">
                  ₪249
                </p>
                <p className="mt-2 text-white/70">
                  14 מדיטציות · הורדה מיידית · ללא מנוי
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <GenderCta size="large" variant="urgent" location="purchase" />
              <p className="mx-auto mt-6 max-w-md text-sm font-semibold text-gold-400">
                כל יום שאתה דוחה — המוח ממשיך להריץ את אותה תוכנה.
                <br />
                <span className="text-white/70">
                  היום אתה יכול להתחיל להריץ חדשה.
                </span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-5 text-center">
            <Reveal>
              <SectionHeading>שאלות נפוצות</SectionHeading>
            </Reveal>
            <div className="space-y-4">
              {FAQ.map((item, i) => (
                <Reveal key={item.q} delay={(i % 3) as 0 | 1 | 2}>
                  <details className="card-glass group rounded-2xl p-5 open:pb-6">
                    <summary className="cursor-pointer list-none text-center font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center justify-center gap-3">
                        {item.q}
                        <span className="text-gold-400 transition group-open:rotate-45">
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-3 text-center text-white/75">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-32 pt-8 md:pb-24">
          <div className="mx-auto max-w-xl px-5 text-center">
            <Reveal>
              <p className="mb-2 text-2xl font-bold text-white md:text-3xl">
                14 מדיטציות. תדר אחד.
              </p>
              <p className="mb-2 text-lg text-gold-400">
                שינוי שמתחיל בפנים — עכשיו.
              </p>
              <p className="mb-8 text-sm text-white/50">
                אל תחכו ל&quot;יום שיהיה לכם זמן&quot; — התחילו היום.
              </p>
              <GenderCta size="large" variant="urgent" location="footer" />
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-white/5 py-8 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} מאור אילוז · כל הזכויות שמורות</p>
          <p className="mx-auto mt-2 max-w-md px-4">
            תוכן להתפתחות אישית בלבד · אינו מהווה ייעוץ רפואי או טיפולי
          </p>
        </footer>
      </div>
    </div>
  );
}
