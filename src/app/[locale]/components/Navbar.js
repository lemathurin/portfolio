import Link from "next/link";
import { useTranslations } from "next-intl";
import "../components/Navbar.css";
import Image from "next/image";

// export default function NavBar() {
//   const t = useTranslations("NavBar");
//   return (
//     <div className="w-full h-full p-5 flex-col justify-start items-center gap-2.5 inline-flex">
//       <div className="h-20 p-2.5 bg-zinc-500 bg-opacity-70 rounded-[20px] shadow border-2 border-zinc-300 backdrop-blur-[10px] justify-start items-center gap-2.5 inline-flex">
//         <ol className="px-2.5 py-[15px] rounded-[10px] backdrop-blur-[15px] justify-start items-start inline-flex">
//           <li className="text-neutral-50 text-[25px] font-medium font-['Inter']">
//             <Link href="/">{t("language")}</Link>
//           </li>
//           <li className="text-neutral-50 text-[25px] font-medium font-['Inter']">
//             <Link href="/">{t("projects")}</Link>
//           </li>
//           <li className="text-neutral-50 text-[25px] font-medium font-['Inter']">
//             <Link href="/">{t("notes")}</Link>
//           </li>
//           <li className="text-neutral-50 text-[25px] font-medium font-['Inter']">
//             <Link href="/">{t("contact")}</Link>
//           </li>
//         </ol>
//       </div>
//     </div>
//   );
// }

// for the dropdown
// https://www.youtube.com/watch?v=VQWu4e6agPc

export default function NavBar() {
  const t = useTranslations("NavBar");
  return (
    <div className="entire-navbar">
      <div className="project-dropdown">
        <div className="project-left">
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
          <div className="project-right-small">
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
                alt="Screenshot of game loading screen"
              />
              <Image
                className="shadow"
                src="/images/pico-8_game.png"
                width={83}
                height={83}
                alt="Screenshot of game loading screen"
              />
            </div>
          </div>
          <div className="project-right-small">
            <h3 className="dropdown-text">{t("more-projects")}</h3>
            <div className="project-right-small-images">
              <Image
                className="shadow"
                src="/images/pico-8_loading.png"
                width={83}
                height={210}
                alt="Screenshot of game loading screen"
              />
              <Image
                className="shadow"
                src="/images/pico-8_menu.png"
                width={83}
                height={210}
                alt="Screenshot of game loading screen"
              />
              <Image
                className="shadow"
                src="/images/pico-8_game.png"
                width={83}
                height={210}
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
