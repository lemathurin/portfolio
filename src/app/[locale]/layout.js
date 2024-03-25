import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import { useTranslations } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
});

export const metadata = {
  title: "Mathurin Sekine",
  description: "Mathurin Sekine's portfolio",
};

export default function RootLayout({ children, params: { locale } }) {
  const n = useTranslations("NavBar");
  return (
    <html
      lang={locale}
      className={`${inter.variable} ${instrument.variable} bg-lightMode-background overflow-x-hidden`}
    >
      <body>
        {children}
        <NavBar
          language={n("language")}
          home={n("home")}
          projects={n("projects")}
          notes={n("notes")}
          contact={n("contact")}
          mainProject={n("mainproject")}
          pico8={n("pico-8")}
          moreProjects={n("more-projects")}
          notesComingSoon={n("notes-comingsoon")}
          article1={n("article1")}
          article2={n("article2")}
          article3={n("article3")}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
