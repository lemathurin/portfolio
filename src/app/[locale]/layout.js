import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import { useTranslations } from "next-intl";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mathurin Sekine",
  description: "Mathurin Sekine's portfolio",
};

export default function RootLayout({ children, params: { locale } }) {
  const n = useTranslations("NavBar");
  return (
    <html lang={locale}>
      <body
        className={`${inter.variable}, ${instrument.variable} bg-lightMode-background`}
      >
        {children}
        <NavBar
          language={n("language")}
          home={n("home")}
          projects={n("projects")}
          notes={n("notes")}
          contact={n("contact")}
          presenterApp={n("presenter-app")}
          pico8={n("pico-8")}
          moreProjects={n("more-projects")}
          notesComingSoon={n("notes-comingsoon")}
          article1={n("article1")}
          article2={n("article2")}
          article3={n("article3")}
        />
        <Analytics />
      </body>
    </html>
  );
}
