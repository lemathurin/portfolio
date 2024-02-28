import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import { useTranslations } from "next-intl";
import Home from "./page";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params: { locale } }) {
  const n = useTranslations("NavBar");
  return (
    <html lang={locale}>
      <body className={instrument.className}>
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
