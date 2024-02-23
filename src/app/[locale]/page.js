import { useTranslations } from "next-intl";
import NavBar from "./components/Navbar";

export default function Home() {
  const t = useTranslations("Home");
  const n = useTranslations("NavBar");
  return (
    <div className="w-screen bg-lightMode-background flex-col justify-start items-center py-80 gap-40 inline-flex">
      {/* <NavBar
        language={n("language")}
        projects={n("projects")}
        notes={n("notes")}
        contact={n("contact")}
        presenterApp={n("presenter-app")}
        pico8={n("pico-8")}
        moreProjects={n("more-projects")}
      /> */}
      <h1 className="font-instrument text-lightMode-text text-9xl">
        {t("greeting")}
      </h1>
      <div className="max-w-[700px] flex-col justify-start items-start inline-flex">
        <p className="leading-tight text-justify text-lightMode-text text-5xl">
          {t("p-1")}
        </p>
      </div>
      <div className="max-w-[700px] flex-col justify-start items-start inline-flex">
        <p className="leading-tight text-justify text-lightMode-text text-5xl">
          {t("p-2")}
        </p>
      </div>
      <div className="max-w-[700px] flex-col justify-start items-start inline-flex">
        <p className="leading-tight text-justify text-lightMode-text text-5xl">
          {t("p-3")}
        </p>
      </div>
    </div>
  );
}
