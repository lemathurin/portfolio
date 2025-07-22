import { Link } from "@/i18n/navigation";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between gap-4 text-pink-700">
      <Link href="/" className="home-navigation text-sm">
        home
      </Link>
      <LanguageToggle />
    </header>
  );
}
