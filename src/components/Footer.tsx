import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="flex flex-col gap-9 text-sm">
      <hr />
      <div className="grid grid-cols-3">
        <ul className="col-span-1 grid gap-2">
          <li>
            <Link href="/">{t("home")}</Link>
          </li>
          <li>
            <Link href="/projects">{t("projects")}</Link>
          </li>
          <li>
            <Link href="/canvas">{t("canvas")}</Link>
          </li>
        </ul>

        <ul className="col-span-2 grid grid-cols-2 gap-2">
          <li>
            <Link target="_blank" href="https://github.com/lemathurin">
              Github
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://x.com/mathurin_sekine">
              Twitter{" "}
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/mathurinsekine/"
            >
              Linkedin
            </Link>
          </li>
          <li>
            <Link target="_blank" href="mailto:mathurinsekine@gmail.com">
              {t("email")}
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://drive.google.com/drive/folders/14lc7oAt43DVOJXmW-ZMd9ZqO2eX93dSq?usp=sharing"
            >
              {t("resume")}
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://bsky.app/profile/mathurin.bsky.social"
            >
              Bluesky
            </Link>
          </li>
        </ul>
      </div>
      <span className="text-[var(--secondary)]">© 2025 Mathurin Sekine</span>
    </footer>
  );
}
