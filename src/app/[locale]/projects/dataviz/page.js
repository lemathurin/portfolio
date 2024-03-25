import {
  CaseStudyVideo,
  CaseStudyTitle,
  CaseStudyDetails,
  CaseStudyParagraph,
  CaseStudyH2,
  CaseStudyList,
} from "../../components/CaseStudy";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Dataviz & API project",
  description: "Dataviz & API project case study",
};

export default function Dataviz() {
  const c = useTranslations("CaseStudy");
  const d = useTranslations("CaseStudyDataviz");
  const techStack = [
    { name: "Figma", link: "https://www.figma.com/" },
    { name: "Basic HTML, CSS, Javascript", link: null },
  ];
  const teammates = [
    { name: "Tianhong Huang", link: "https://github.com/Tianhong258" },
    { name: "Fabienne Lis", link: "https://github.com/FabienneLIS" },
  ];
  return (
    <main className="w-screen flex items-start justify-center pb-32">
      <div className="flex flex-col pt-10 md:p-10 pb-36 w-[80%] md:w-full max-w-[700px]">
        <CaseStudyTitle title={d("title")} />
        <CaseStudyDetails
          projectType={c("schoolproject")}
          duration="20/11/2023 -&gt; 30/11/2023"
          linkName={c("githubrepository")}
          link="https://github.com/lemathurin/dataviz-sncf"
        />
        <CaseStudyH2 title={c("projectoverview")} />
        <CaseStudyParagraph text={d("description")} />
        <CaseStudyH2 title={c("techstack")} />
        <CaseStudyList items={techStack} />
        <CaseStudyH2 title={c("teammates")} />
        <CaseStudyList items={teammates} />
        <CaseStudyH2 title={c("whatilearned")} />
        <CaseStudyParagraph text={d("whatilearnedtext")} />
        <CaseStudyH2 title={c("screenshots")} />
      </div>
    </main>
  );
}
