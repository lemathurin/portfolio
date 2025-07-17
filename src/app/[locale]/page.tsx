import Image from "next/image";
import { useTranslations } from "next-intl";
import Clock from "@/components/Clock";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex justify-center p-5 md:p-0 md:py-9">
      <article className="flex max-w-96 flex-col gap-9 text-justify">
        <header className="flex w-full items-center justify-between gap-4">
          <LanguageToggle />
          <Clock />
        </header>

        <figure className="relative flex h-36 w-full items-end justify-center overflow-hidden bg-[var(--yellow)]">
          <Image
            src="/me-100.svg"
            alt="Mathurin Sekine's avatar"
            role="img"
            height={150}
            width={150}
            className="object-contain"
          />
        </figure>

        <section aria-label={t("intro.title")}>
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
          {/* <p>{t("intro.project")}</p> */}
          {/* <br /> */}
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
              cv: (chunks) => (
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1UCXUY5eaDHlGNqP18yvHJ3Bli5_bo5YA/view?usp=sharing"
                >
                  {chunks}
                </Link>
              ),
              github: (chunks) => (
                <Link target="_blank" href="https://github.com/lemathurin">
                  {chunks}
                </Link>
              ),
            })}
          </p>
          <br />
          <p>{t("intro.closing")}</p>
          <p>{t("intro.signature")}</p>
          <br />
          <br />
          <p>
            {t.rich("intro.more", {
              canvas: (chunks) => <Link href="/canvas">{chunks}</Link>,
            })}
          </p>
        </section>
        <section
          className="flex flex-col gap-2.5"
          aria-labelledby="past-projects-heading"
        >
          <h2 id="past-projects-heading">{t("projects.title")}</h2>
          <div className="grid grid-cols-1 gap-4">
            <article>
              <h3>
                <Link
                  target="_blank"
                  href="https://github.com/lemathurin/portfolio/tree/v1"
                >
                  {t("projects.oldPortfolio.title")}
                </Link>
              </h3>
              <p>{t("projects.oldPortfolio.description")}</p>
              <p className="text-sm opacity-70">
                Next.js, Tailwind CSS, Motion
              </p>
            </article>
            <article>
              <h3>
                <Link
                  target="_blank"
                  href="https://github.com/lemathurin/e-commerce-website"
                >
                  {t("projects.ecommerce.title")}
                </Link>
              </h3>
              <p>{t("projects.ecommerce.description")}</p>
              <p className="text-sm opacity-70">
                React, Tailwind CSS, Express.js
              </p>
            </article>
            <article>
              <h3>
                <Link
                  target="_blank"
                  href="https://github.com/lemathurin/dataviz-sncf"
                >
                  {t("projects.dataviz.title")}
                </Link>
              </h3>
              <p>{t("projects.dataviz.description")}</p>
              <p className="text-sm opacity-70">JavaScript, HTML, CSS</p>
            </article>
            <article>
              <h3>
                <Link
                  target="_blank"
                  href="https://github.com/lemathurin/pico8"
                >
                  {t("projects.pico8.title")}
                </Link>
              </h3>
              <p>{t("projects.pico8.description")}</p>
              <p className="text-sm opacity-70">Lua</p>
            </article>
          </div>
        </section>
      </article>
    </main>
  );
}
