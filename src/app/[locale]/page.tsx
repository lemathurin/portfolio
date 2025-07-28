import Image from "next/image";
import { useTranslations } from "next-intl";
import Clock from "@/components/Clock";
import LanguageToggle from "@/components/LanguageToggle";
import { Link } from "@/i18n/navigation";
import Footer from "@/components/Footer";
import MDXContent from "@/components/MDXContent";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-9 p-5 text-justify md:p-0 md:py-5">
      <header className="flex w-full items-center justify-between gap-4">
        <Clock />
        <LanguageToggle />
      </header>

      <figure className="relative flex h-36 w-full items-end justify-center overflow-hidden rounded-lg bg-[var(--yellow)]">
        <Image
          priority
          src="/me-100.svg"
          alt="Mathurin Sekine's avatar"
          role="img"
          height={150}
          width={150}
          className="border-none object-contain"
        />
      </figure>

      <section className="prose">
        <MDXContent src="home.mdx" />
      </section>

      <hr />

      <section
        className="flex flex-col gap-2.5 text-left"
        aria-labelledby="recent-projects-heading"
      >
        <h2 className="font-serif text-3xl" id="recent-projects-heading">
          {t("homeProjects.recentProjectTitle")}
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <article className="flex flex-col gap-0.5">
            <Link className="pb-1 font-medium" href="/projects/home-inventory">
              {t("homeProjects.homeInventoryApp.title")}
            </Link>
            <p className="text-sm">
              {t("homeProjects.homeInventoryApp.description")}
            </p>
            <p className="text-sm text-[var(--secondary)]">
              Next.js, Tailwind CSS, shadcn/ui, Axios, Express.js, Prisma ORM,
              PostgreSQL, Docker, Coolify, Figma
            </p>
          </article>
        </div>
      </section>

      <hr />

      <section
        className="flex flex-col gap-2.5 text-left"
        aria-labelledby="past-projects-heading"
      >
        <h2 className="font-serif text-3xl" id="past-projects-heading">
          {t("homeProjects.pastProjectsTitle")}
        </h2>
        <div className="grid gap-4 mask-b-from-0 sm:grid-cols-2 sm:mask-b-from-15%">
          <article className="flex flex-col gap-0.5">
            <Link className="pb-1" href="/projects/portfolio-v1">
              {t("homeProjects.oldPortfolio.title")}
            </Link>
            <p className="text-sm">
              {t("homeProjects.oldPortfolio.description")}
            </p>
            <p className="text-sm text-[var(--secondary)]">
              Next.js, Tailwind CSS, Motion
            </p>
          </article>
          <article className="flex flex-col gap-0.5">
            <Link className="pb-1" href="/projects/ecommerce">
              {t("homeProjects.ecommerce.title")}
            </Link>
            <p className="text-sm">{t("homeProjects.ecommerce.description")}</p>
            <p className="text-sm text-[var(--secondary)]">
              React, Tailwind CSS, Express.js
            </p>
          </article>
          <article className="flex flex-col gap-0.5">
            <Link className="pb-1" href="/projects/dataviz">
              {t("homeProjects.dataviz.title")}
            </Link>
            <p className="text-sm">{t("homeProjects.dataviz.description")}</p>
            <p className="text-sm text-[var(--secondary)]">
              JavaScript, HTML, CSS
            </p>
          </article>
          <article className="hidden flex-col gap-0.5 sm:flex">
            <Link className="pb-1" href="/projects/pico8">
              {t("homeProjects.pico8.title")}
            </Link>
            <p className="text-sm">{t("homeProjects.pico8.description")}</p>
            <p className="text-sm text-[var(--secondary)]">Lua</p>
          </article>
        </div>
        <Link className="text-sm" href="/projects">
          More projects
        </Link>
      </section>
      <Footer />
    </main>
  );
}
