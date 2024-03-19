import { useTranslations } from "next-intl";
import ProjectsList from "../components/ProjectsList";

export default function Projects() {
  const p = useTranslations("Projects");
  return (
    <div>
      <ProjectsList
        portfolio={p("portfolio")}
        ecommerce={p("ecommerce")}
        dataviz={p("dataviz")}
        chromeextension={p("chromeextension")}
        pico8game={p("pico8game")}
        presenterapp={p("presenterapp")}
        phpsocialnetwork={p("phpsocialnetwork")}
        schoolproject={p("schoolproject")}
        personalproject={p("personalproject")}
      />
    </div>
  );
}
