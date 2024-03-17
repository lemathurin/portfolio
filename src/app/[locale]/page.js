import { useTranslations } from "next-intl";
import HomePage from "./components/HomePage";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <HomePage
      greeting={t("greeting")}
      presenterApp={t("presenter-app")}
      pico8={t("pico-8")}
      moreProjects={t("more-projects")}
      p1={t("p-1")}
      p2={t("p-2")}
      p3={t("p-3")}
    />
  );
}
