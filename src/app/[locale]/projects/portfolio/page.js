import {
  CaseStudyVideo,
  CaseStudyTitle,
  CaseStudyDetails,
  CaseStudyParagraph,
  CaseStudyH2,
  CaseStudyList,
  CaseStudyLink,
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
  const credits = [
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
          link="https://github.com/lemathurin/portfolio"
        />
        <CaseStudyH2 title={c("projectoverview")} />
        <CaseStudyParagraph text={p("description")} />
        <CaseStudyH2 title={c("techstack")} />
        <CaseStudyList items={techStack} />
        <CaseStudyH2 title={p("designinspiration")} />
        <Image
          src="/images/CaseStudy-portfolio/godot.png"
          alt="A screenshot of cognacgodet.com website. It shows big serif text with images between words."
          width={700}
          height={700}
          className="mt-3"
        />
        <CaseStudyLink text="Cognac Godet" link="https://cognacgodet.com/" />
        <CaseStudyParagraph text={p("1stinspiration")} />
        <Image
          src="/images/CaseStudy-portfolio/amie.png"
          alt="A screenshot of Amie's website's navbar."
          width={700}
          height={700}
          className="mt-14"
        />
        <CaseStudyLink text="Amie" link="https://amie.so/" />
        <CaseStudyParagraph text={p("2ndinspiration")} />
        <Image
          src="/images/CaseStudy-portfolio/pedro.png"
          alt="A screenshot of Pedro Duarte's website's blog."
          width={700}
          height={700}
          className="mt-14"
        />
        <CaseStudyLink text="Pedro Duarte" link="https://ped.ro/" />
        <CaseStudyParagraph text={p("3rdinspiration")} />
        <Image
          src="/images/CaseStudy-portfolio/button.png"
          alt="A screenshot of Pedro Duarte's website's blog."
          width={700}
          height={700}
          className="mt-14"
        />
        <CaseStudyLink
          text="Farrel Putra"
          link="https://twitter.com/farrelput/status/1768952348976558161/photo/2"
        />
        <CaseStudyParagraph text={p("4thinspiration")} />
        <CaseStudyH2 title={c("iterations")} />
        <Image
          src="/images/CaseStudy-portfolio/iteration1.png"
          alt="A screenshot of Farrel Putra's Twitter post."
          width={700}
          height={700}
          className="mt-3"
        />
        <Image
          src="/images/CaseStudy-portfolio/iteration2.png"
          alt="Iteration 1"
          width={700}
          height={700}
          className="mt-14"
        />
        <Image
          src="/images/CaseStudy-portfolio/iteration3.png"
          alt="Iteration 2"
          width={700}
          height={700}
          className="mt-14"
        />
        <Image
          src="/images/CaseStudy-portfolio/iteration4.png"
          alt="Iteration 3"
          width={700}
          height={700}
          className="mt-14"
        />
        <Image
          src="/images/CaseStudy-portfolio/iteration5.png"
          alt="Iteration 4"
          width={700}
          height={700}
          className="mt-14"
        />
        <Image
          src="/images/CaseStudy-portfolio/iterations.png"
          alt="All the iterations"
          width={700}
          height={700}
          className="mt-14"
        />
      </div>
    </main>
  );
}
