import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import { useTranslations } from "next-intl";

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
      <body className={`${inter.variable}, ${instrument.variable}`}>
        {children}
        <NavBar
          language={n("language")}
          projects={n("projects")}
          notes={n("notes")}
          contact={n("contact")}
          presenterApp={n("presenter-app")}
          pico8={n("pico-8")}
          moreProjects={n("more-projects")}
        />
      </body>
    </html>
  );
}
