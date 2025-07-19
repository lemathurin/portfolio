import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations();

  return (
    <main className="flex justify-center p-5 md:p-0 md:py-9">
      <article className="flex max-w-lg flex-col gap-9 text-justify">
        <header className="flex w-full items-center justify-between gap-4">
          <Link href="/">{t("canvas.homeLink")}</Link>
          <LanguageToggle />
        </header>
        <h2>{t("404.error")}</h2>
        <p>{t("404.message")}</p>
      </article>
    </main>
  );
}
