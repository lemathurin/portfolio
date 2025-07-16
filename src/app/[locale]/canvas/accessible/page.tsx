import LanguageToggle from "@/components/LanguageToggle";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AccessibleCanvasPage() {
  const t = useTranslations("canvas");

  return (
    <main className="flex justify-center p-5 md:p-0 md:py-9">
      <article className="flex max-w-96 flex-col gap-9 text-justify">
        <header className="flex w-full items-center justify-between gap-4">
          <LanguageToggle />
          <Link
            href="/"
            className="cursor-pointer font-mono text-sm underline opacity-70 hover:no-underline hover:opacity-100"
          >
            {t("homeLink")}
          </Link>
        </header>

        <section
          aria-labelledby="profile-heading"
          className="flex flex-col gap-4"
        >
          <h2 id="profile-heading" className="text-xl">
            {t("profilePhoto")}
          </h2>
          <figure className="flex w-full justify-center bg-[var(--yellow)]">
            <Image
              src="/me-2016.png"
              alt="Avatar 2016"
              width={250}
              height={250}
            />
          </figure>
          <figure className="flex w-full justify-center bg-[var(--yellow)]">
            <Image
              src="/me-2022.png"
              alt="Avatar 2022"
              width={250}
              height={250}
            />
          </figure>
          <figure className="flex w-full justify-center bg-[var(--yellow)]">
            <Image
              src="/me-2025.png"
              alt="Avatar 2025"
              width={250}
              height={250}
            />
          </figure>
          <p>{t("profileYears")}</p>
        </section>

        <section
          aria-labelledby="photos-heading"
          className="flex flex-col gap-4"
        >
          <h2 id="photos-heading" className="text-xl">
            {t("nicePictures")}
          </h2>
          <figure>
            <Image
              src="/skytree.jpeg"
              alt="A photo of the Tokyo Skytree against a bright blue sky."
              width={500}
              height={500}
            />
          </figure>
          <figure>
            <Image
              src="/boat.jpeg"
              alt="A photo of a boat off the coast of an island with mountains."
              width={800}
              height={800}
            />
          </figure>
          <figure>
            <Image
              src="/sunset.jpeg"
              alt="A photo of a man walking on a beach with the sunset behind him."
              width={500}
              height={500}
            />
          </figure>
        </section>

        <section aria-labelledby="portfolio-heading">
          <h2 id="portfolio-heading" className="text-xl">
            {t("oldPortfolio")}
          </h2>
          <figure>
            <Image
              src="/portfolio-v1.png"
              alt="A screenshot of my first portfolio."
              width={500}
              height={500}
            />
            <figcaption>
              <Link href="#" target="_blank">
                {t("viewOldPortfolio")}
              </Link>
            </figcaption>
          </figure>
        </section>
      </article>
    </main>
  );
}
