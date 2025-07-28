import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import Clock from "@/components/Clock";
import LanguageToggle from "@/components/LanguageToggle";
import { Link } from "@/i18n/navigation";
import Footer from "@/components/Footer";
import MDXContent from "@/components/MDXContent";
import ProjectCard from "@/components/ProjectCard";
import { getLatestProjects } from "@/lib/projectLoader";

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations();
  const pastProjects = await getLatestProjects(locale, 4);

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
        aria-labelledby="past-projects-heading"
      >
        <h2 className="font-serif text-3xl" id="past-projects-heading">
          {t("projects")}
        </h2>
        <div className="mt-[1em] grid gap-4 mask-b-from-0 sm:grid-cols-2 sm:mask-b-from-15%">
          {pastProjects.slice(0).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link className="text-sm" href="/projects">
          {t("seeAllProjects")}
        </Link>
      </section>
      <Footer />
    </main>
  );
}
