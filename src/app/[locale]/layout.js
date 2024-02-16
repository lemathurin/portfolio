import { Instrument_Serif, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

console.log(__dirname);

const EditorialNew = localFont({
  src: "../../../public/fonts/EditorialNew-Regular.otf",
  weight: "400",
});

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={instrument.className}>{children}</body>
    </html>
  );
}
