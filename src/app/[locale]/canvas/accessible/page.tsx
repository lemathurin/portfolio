import LanguageToggle from "@/components/LanguageToggle";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function AccessibleCanvasPage() {
  const t = useTranslations();

  return (
    <main className="flex justify-center p-5 md:p-0 md:py-9">
      <article className="flex max-w-96 flex-col gap-9 text-justify">
        <header className="flex w-full items-center justify-between gap-4">
          <LanguageToggle />
          <Link
            href="/"
            className="cursor-pointer font-mono text-sm underline opacity-70 hover:no-underline hover:opacity-100"
          >
            {t("canvas.homeLink")}
          </Link>
        </header>

        <section
          aria-labelledby="profile-heading"
          className="flex flex-col gap-4"
        >
          <h2 id="profile-heading">{t("canvas.profilePhoto")}</h2>
          <figure className="flex w-full justify-center bg-[#FFCD34]">
            <Image
              src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwXliqVsBCbbFRm7wShzYQZJ4WeOX8q02spPHKE"
              alt="Avatar 2016"
              width={250}
              height={250}
            />
          </figure>
          <figure className="flex w-full justify-center bg-[#FFCD34]">
            <Image
              src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwX1wRGlfIRHdtW9MuSenZ7CN360Bwy8IpQijUb"
              alt="Avatar 2022"
              width={250}
              height={250}
            />
          </figure>
          <figure className="flex w-full justify-center bg-[#FFCD34]">
            <Image
              src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwXcbArxXFWPh3xNZjmzVMS5t9QDGin0YqvX2lw"
              alt="Avatar 2025"
              width={250}
              height={250}
            />
          </figure>
          <p>{t("canvas.profileYears")}</p>
        </section>

        <section
          aria-labelledby="photos-heading"
          className="flex flex-col gap-4"
        >
          <h2 id="photos-heading">{t("canvas.nicePictures")}</h2>
          <figure>
            <Image
              src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwX2zP6Isjab2JnoGdL156AWIvsmt0jQPpKyFz8"
              alt={t("canvas.skytreeAlt")}
              width={500}
              height={500}
            />
          </figure>
          <figure>
            <Image
              src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwXHSk6BSAi8sevGcB4FyxCY9AX7lOpHVJzWb6f"
              alt={t("canvas.boatAlt")}
              width={800}
              height={800}
            />
          </figure>
          <figure>
            <Image
              src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwXZOH8OaCSLlRducqbNZgY7F3QVhKp02nC4JrI"
              alt={t("canvas.sunsetAlt")}
              width={500}
              height={500}
            />
          </figure>
        </section>

        <section aria-labelledby="portfolio-heading">
          <h2 id="portfolio-heading">{t("canvas.oldPortfolio")}</h2>
          <figure>
            <Image
              src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwXvqgwD1hpJmwX8nIfCriaYKcTs17Wdk5eDNt6"
              alt={t("canvas.portfolioV1Alt")}
              width={500}
              height={500}
            />
            <figcaption>{t("canvas.oldPortfolio")}</figcaption>
          </figure>
        </section>
      </article>
    </main>
  );
}
