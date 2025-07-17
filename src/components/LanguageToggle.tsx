"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageToggle() {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  function toggleLanguage() {
    const newLocale = locale === "en" ? "fr" : "en";
    router.push(pathname, { locale: newLocale });
  }

  return (
    <button
      onClick={toggleLanguage}
      className="cursor-pointer font-mono text-sm underline opacity-70 hover:no-underline hover:opacity-100"
      aria-label={t("languageToggle")}
    >
      {t("languageToggle")}
    </button>
  );
}
