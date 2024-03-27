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
  title: "Portfolio version 1.0",
  description: "Portfolio version 1.0 case study",
};

export default function PortfolioCaseStudy() {
  const c = useTranslations("CaseStudy");
  const p = useTranslations("CaseStudyPortfolioV1");

  const techStack = [
    {
      name: "Figma",
      link: "https://figma.com/",
    },
    { name: "Next.js", link: "https://nextjs.org/" },
    { name: "next-intl", link: "https://next-intl-docs.vercel.app/" },
    { name: "Tailwindcss", link: "https://tailwindcss.com/" },
    { name: "Framer Motion", link: "https://www.framer.com/motion/" },
    { name: "Vercel", link: "https://vercel.com/" },
  ];
  const teammates = [
    { name: "Mehdi Bejjar", link: "https://github.com/bejjarmehdi" },
    { name: "Daniela Ortúzar", link: "https://github.com/danielaortuzar" },
  ];
  return (
    <main className="w-screen flex items-start justify-center pb-32">
      <div className="flex flex-col pt-10 md:p-10 pb-36 w-[80%] md:w-full max-w-[700px]">
        <CaseStudyTitle title={p("title")} />
        <CaseStudyDetails
          projectType={c("personalproject")}
          duration="02/2024 -&gt; 04/2024"
          linkName={c("githubrepository")}
          link="https://github.com/adatechschool/projet-collectif-pico8-daniela-mehdi-mathurin"
        />
        <CaseStudyH2 title={c("projectoverview")} />
        <CaseStudyParagraph text={p("description")} />
        <CaseStudyH2 title={c("techstack")} />
        <CaseStudyList items={techStack} />
        <CaseStudyH2 title={p("designinspiration")} />
      </div>
    </main>
  );
}
