import { Link } from "@/i18n/navigation";
import LanguageToggle from "./LanguageToggle";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();

  return (
    <header className="flex w-full items-center justify-between gap-4 text-pink-700">
      <Link href="/" className="home-navigation text-sm">
        {t("home")}
      </Link>
      <LanguageToggle />
    </header>
  );
}
