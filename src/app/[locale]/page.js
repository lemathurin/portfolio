import { useTranslations } from "next-intl";
import HomePage from "./components/HomePage";

export const metadata = {
  title: "Mathurin Sekine",
  description: "Welcome to my portfolio",
};

export default function Home() {
  const t = useTranslations("Home");
  const h = useTranslations("HireWindow");
  const i = useTranslations("HiredWindow");
  return (
    <>
      <HomePage
        greeting={t("greeting")}
        hey={t("hey")}
        nicetomeetyou={t("nicetomeetyou")}
        welcome={t("welcome")}
        givemeajob={t("givemeajob")}
        clickaround={t("clickaround")}
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
        // to={h("to")}
        futureEmployer={h("futureEmployer")}
        hello={h("hello")}
        line1={h("line1")}
        line2={h("line2")}
        contract={h("contract")}
        line2part2={h("line2part2")}
        ideally={h("ideally")}
        line3part1={h("line3part1")}
        line3part2={h("line3part2")}
        line3part3={h("line3part3")}
        period={h("period")}
        here={h("here")}
        line4={h("line4")}
        // name={h("name")}
        // deleteButtonLabel={h("deleteButtonLabel")}
        opening={i("opening")}
        to={i("to")}
        recipient={i("recipient")}
        part1={i("part1")}
        juisci={i("juisci")}
        part2={i("part2")}
        goodday={i("goodday")}
        name={i("name")}
        deleteButtonLabel={i("deleteButtonLabel")}
      />
      <meta property="og:image" content="/ogimages/home.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  );
}
