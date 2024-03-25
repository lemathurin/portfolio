import { useTranslations } from "next-intl";
import ProjectsList from "../components/ProjectsList";

export const metadata = {
  title: "Projects",
  description: "Mathurin Sekine's projects",
};

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
      <meta property="og:image" content="/ogimages/projects.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </div>
  );
}
