import { useTranslations } from "next-intl";
import HomePage from "./components/HomePage";

export default function Home() {
  const t = useTranslations("Home");
  const h = useTranslations("HireWindow");
  return (
    <HomePage
      greeting={t("greeting")}
      l1={t("l1")}
      l2={t("l2")}
      l3={t("l3")}
      dev1={t("dev1")}
      dev2={t("dev2")}
      l4={t("l4")}
      projects={t("projects")}
      l5={t("l5")}
      ecommerce={t("ecommerce")}
      l6={t("l6")}
      thisPortfolio={t("thisPortfolio")}
      l7={t("l7")}
      l8={t("l8")}
      l9={t("l9")}
      l10={t("l10")}
      dot={t("dot")}
      presenterApp={t("presenter-app")}
      pico8={t("pico-8")}
      moreProjects={t("more-projects")}
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
