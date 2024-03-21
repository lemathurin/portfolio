import { useTranslations } from "next-intl";
import HomePage from "./components/HomePage";

export default function Home() {
  const t = useTranslations("Home");
  const h = useTranslations("HireWindow");
  return (
    <HomePage
      greeting={t("greeting")}
      presenterApp={t("presenter-app")}
      pico8={t("pico-8")}
      moreProjects={t("more-projects")}
      p1={t("p-1")}
      p2={t("p-2")}
      p3={t("p-3")}
      to={h("to")}
      futureEmployer={h("futureEmployer")}
      hello={h("hello")}
      line1={h("line1")}
      line2={h("line2")}
      line3part1={h("line3part1")}
      line3part2={h("line3part2")}
      line3part3={h("line3part3")}
      here={h("here")}
      line4={h("line4")}
      name={h("name")}
      deleteButtonLabel={h("deleteButtonLabel")}
    />
  );
}
