"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";

export default function LanguageToggle() {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();

  function toggleLanguage() {
    const newLocale = locale === "en" ? "fr" : "en";
    router.push("/", { locale: newLocale });
  }

  return (
    <button
      onClick={toggleLanguage}
      className="font-mono text-sm underline hover:no-underline opacity-70 hover:opacity-100 cursor-pointer"
      aria-label={t("languageToggle")}
    >
      {t("languageToggle")}
    </button>
  );
}
