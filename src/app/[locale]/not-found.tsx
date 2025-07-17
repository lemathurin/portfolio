import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import Clock from "@/components/Clock";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations();

  return (
    <main className="flex justify-center p-5 md:p-0 md:py-9">
      <article className="flex max-w-96 flex-col gap-9 text-justify">
        <header className="flex w-full items-center justify-between gap-4">
          <LanguageToggle />
          <Clock />
        </header>
        <h1 className="text-xl">{t("404.error")}</h1>
        <p>{t("404.message")}</p>
        <Link href="/">{t("canvas.homeLink")}</Link>
      </article>
    </main>
  );
}
