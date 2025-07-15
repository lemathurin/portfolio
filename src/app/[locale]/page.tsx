import Image from "next/image";
import { useTranslations } from "next-intl";
import Clock from "@/components/Clock";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex justify-center p-5 md:p-0 md:py-9">
      <article className="max-w-96 text-justify flex flex-col gap-9">
        <header className="flex justify-between items-center w-full gap-4">
          <LanguageToggle />
          <Clock />
        </header>

        <figure className="w-full h-36 bg-[var(--yellow)] relative overflow-hidden flex items-end justify-center">
          <Image
            src="/me-100.svg"
            alt="Mathurin Sekine's avatar"
            role="img"
            height={150}
            width={150}
            className="object-contain"
          />
        </figure>

        <section aria-labelledby="intro-heading">
          <h1 id="intro-heading" className="sr-only">
            About me
          </h1>
          <p>{t("intro.wave")}</p>
          <br />
          <p>{t("intro.greeting")}</p>
          <br />
          <p>
            {t.rich("intro.experience", {
              juisci: (chunks) => (
                <Link target="_blank" href="https://juisci.com">
                  {chunks}
                </Link>
              ),
              ada: (chunks) => (
                <Link target="_blank" href="https://adatechschool.fr/">
                  {chunks}
                </Link>
              ),
            })}
          </p>
          <br />
          <p>{t("intro.project")}</p>
          <br />
          <p>{t("intro.skills")}</p>
          <br />
          <p>
            {t.rich("intro.contact", {
              linkedin: (chunks) => (
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/mathurinsekine/"
                >
                  {chunks}
                </Link>
              ),
              twitter: (chunks) => (
                <Link target="_blank" href="https://x.com/mathurin_sekine">
                  {chunks}
                </Link>
              ),
              mailto: (chunks) => (
                <Link target="_blank" href="mailto:mathurinsekine@gmail.com">
                  {chunks}
                </Link>
              ),
              email: (chunks) => (
                <span className="font-mono opacity-70 text-sm">{chunks}</span>
              ),
            })}
          </p>
          <br />
          <p>{t("intro.closing")}</p>
          <p>{t("intro.signature")}</p>
        </section>
      </article>
    </main>
  );
}
