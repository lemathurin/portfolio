import Link from "next/link";
import { useTranslations } from "next-intl";
import "../components/Navbar.css";
import Image from "next/image";

// for the dropdown
// https://www.youtube.com/watch?v=VQWu4e6agPc

export default function NavBar() {
  const t = useTranslations("NavBar");
  return (
    <div className="entire-navbar">
      <div className="project-dropdown">
        <div className="project-left dropdown-boxes">
          <h3 className="dropdown-text">{t("presenter-app")}</h3>
          <Image
            className="shadow"
            src="/images/presenter_app.png"
            width={400}
            height={210}
            alt="Screenshot of the unfinished project"
          />
        </div>
        <div className="project-right-section">
          <div className="project-right-small dropdown-boxes">
            <h3 className="dropdown-text">{t("pico-8")}</h3>
            <div className="project-right-small-images">
              <Image
                className="shadow"
                src="/images/pico-8_loading.png"
                width={83}
                height={83}
                alt="Screenshot of game loading screen"
              />
              <Image
                className="shadow"
                src="/images/pico-8_menu.png"
                width={83}
                height={83}
                alt="Screenshot of game menu screen"
              />
              <Image
                className="shadow"
                src="/images/pico-8_game.png"
                width={83}
                height={83}
                alt="Screenshot of game"
              />
            </div>
          </div>
          <div className="project-right-small dropdown-boxes">
            <h3 className="dropdown-text">{t("more-projects")}</h3>
            <div className="project-right-small-images">
              <Image
                className="shadow"
                src="/images/eym.png"
                width={83}
                height={210}
                alt="Screenshot of game loading screen"
              />
              <Image
                className="shadow"
                src="/images/portfolio_exploration.png"
                width={83}
                height={210}
                alt="Screenshot of game loading screen"
              />
              <Image
                className="shadow"
                src="/images/dataviz.png"
                width={110}
                height={83}
                alt="Screenshot of game loading screen"
              />
            </div>
          </div>
        </div>
      </div>
      <ol className="menu-button-container">
        <Link href="/">
          <li className="menu-button cursor-cell">
            <span className="menu-text" href="/">
              {t("language")}
            </span>
          </li>
        </Link>
        <Link href="/">
          <li className="menu-button">
            <span className="menu-text" href="/">
              {t("projects")}
            </span>
          </li>
        </Link>{" "}
        <Link href="/">
          <li className="menu-button">
            <span className="menu-text" href="/">
              {t("notes")}
            </span>
          </li>
        </Link>{" "}
        <Link href="/">
          <li className="menu-button">
            <span className="menu-text" href="/">
              {t("contact")}
            </span>
          </li>
        </Link>
      </ol>
    </div>
  );
}
