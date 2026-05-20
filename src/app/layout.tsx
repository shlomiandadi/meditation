import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "14 מדיטציות לסינכרון התדר ותכנות תת-המודע | מאור אילוז",
  description:
    "סט 14 מדיטציות עמוקות לתכנות תת-המודע וסינכרון התדר. הורדה מיידית לאחר רכישה. ₪249 בלבד.",
  openGraph: {
    title: "14 מדיטציות לסינכרון התדר",
    description: "שינוי תודעתי מבפנים החוצה — סט מלא להורדה",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
