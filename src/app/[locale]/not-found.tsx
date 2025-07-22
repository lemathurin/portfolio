import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const t = useTranslations();

  return (
    <main className="flex w-full max-w-lg flex-col justify-center gap-9 p-5 md:p-0 md:py-9">
      <Header />
      <article className="prose">
        <h1>{t("404.error")}</h1>
        <p>{t("404.message")}</p>
      </article>
      <Footer />
    </main>
  );
}
