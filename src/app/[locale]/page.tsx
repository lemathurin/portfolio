import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex justify-center">
      <section className="max-w-96 text-justify text-lg flex flex-col gap-4">
        <div className="w-full h-36 bg-[#FFCD34] relative">
          <Image
            src="/me-100.svg"
            alt="Mathurin Sekine SVG"
            fill
            className="object-contain object-bottom"
          />
        </div>
        <p>{t("intro.greeting")}</p>
        <p>{t("intro.experience")}</p>
        <p>{t("intro.project")}</p>
        <p>{t("intro.skills")}</p>
        <p>{t("intro.contact")}</p>
        <p>{t("intro.closing")}</p>
        <p>{t("intro.signature")}</p>
      </section>
    </main>
  );
}
