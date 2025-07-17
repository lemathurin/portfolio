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
      </article>
    </main>
  );
}
