import Link from "next/link";
import { useTranslations } from "next-intl";
import "../components/Navbar.css";

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

export default function NavBar() {
  const t = useTranslations("NavBar");
  return (
    <div className="">
      <div className="">
        <ol className="menu-button-container">
          <Link href="/">
            <li className="menu-button">
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
    </div>
  );
}
