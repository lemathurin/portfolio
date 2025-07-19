import Image from "next/image";
import { useTranslations } from "next-intl";
import Clock from "@/components/Clock";
import LanguageToggle from "@/components/LanguageToggle";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex justify-center p-5 md:p-0 md:py-9">
      <article className="flex max-w-lg flex-col gap-9 text-justify">
        <header className="flex w-full items-center justify-between gap-4">
          <Clock />
          <LanguageToggle />
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
          className="flex flex-col gap-2.5 pt-5 text-left"
          aria-labelledby="recent-projects-heading"
        >
          <h2 id="recent-projects-heading">Recent project</h2>
          <div className="grid grid-cols-1 gap-4">
            <article className="flex flex-col gap-0.5">
              <Link className="pb-1" href="/projects/home-inventory">
                Home inventory app
              </Link>
              <p>
                Project made to valid the RNCP certification. A full-stack web
                app with a modular, domain-driven architecture and RBAC-based
                access controls.
              </p>
              <p className="text-sm text-[var(--secondary)]">
                Next.js, Tailwind CSS, shadcn/ui, Axios, Express.js, Prisma ORM,
                PostgreSQL, Docker, Coolify, Figma
              </p>
            </article>
          </div>
        </section>
        <section
          className="flex flex-col gap-2.5 py-5 text-left"
          aria-labelledby="past-projects-heading"
        >
          <h2 id="past-projects-heading">{t("projects.title")}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="flex flex-col gap-0.5">
              <Link className="pb-1" href="/projects/portfolio-v1">
                {t("projects.oldPortfolio.title")}
              </Link>

              <p>{t("projects.oldPortfolio.description")}</p>
              <p className="text-sm text-[var(--secondary)]">
                Next.js, Tailwind CSS, Motion
              </p>
            </article>
            <article className="flex flex-col gap-0.5">
              <Link className="pb-1" href="/projects/ecommerce">
                {t("projects.ecommerce.title")}
              </Link>

              <p>{t("projects.ecommerce.description")}</p>
              <p className="text-sm text-[var(--secondary)]">
                React, Tailwind CSS, Express.js
              </p>
            </article>
            <article className="flex flex-col gap-0.5">
              <Link className="pb-1" href="/projects/dataviz">
                {t("projects.dataviz.title")}
              </Link>

              <p>{t("projects.dataviz.description")}</p>
              <p className="text-sm text-[var(--secondary)]">
                JavaScript, HTML, CSS
              </p>
            </article>
            <article className="flex flex-col gap-0.5">
              <Link className="pb-1" href="/projects/pico8">
                {t("projects.pico8.title")}
              </Link>

              <p>{t("projects.pico8.description")}</p>
              <p className="text-sm text-[var(--secondary)]">Lua</p>
            </article>
          </div>
        </section>
      </article>
    </main>
  );
}
