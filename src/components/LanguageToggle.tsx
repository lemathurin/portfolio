"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname, Link } from "@/i18n/navigation";

export default function LanguageToggle() {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  function toggleLanguage(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const newLocale = locale === "en" ? "fr" : "en";
    router.push(pathname, { locale: newLocale });
  }

  return (
    <Link
      href={pathname}
      onClick={toggleLanguage}
      className="text-sm no-underline"
      aria-label={t("languageToggle")}
    >
      {t("languageToggle")}
    </Link>
  );
}
