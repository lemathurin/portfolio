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
  title: "PHP social network project",
  description: "PHP social network case study",
};

export default function PHPSocialNetwork() {
  const c = useTranslations("CaseStudy");
  const d = useTranslations("CaseStudyPHP");
  const techStack = [
    { name: "Figma", link: "https://www.figma.com/" },
    { name: "MAMP", link: "https://www.mamp.info/en/windows/" },
    { name: "HTML, CSS, PHP", link: null },
  ];
  const teammates = [
    { name: "Lise Quemener", link: "https://github.com/Lilifrontback" },
    { name: "Pierre Pedrono", link: "https://github.com/PierrePedrono" },
  ];
  return (
    <main className="w-screen flex items-start justify-center pb-32">
      <div className="flex flex-col pt-10 md:p-10 pb-36 w-[80%] md:w-full max-w-[700px]">
        <CaseStudyTitle title={d("title")} />
        <CaseStudyDetails
          projectType={c("schoolproject")}
          duration="20/11/2023 -&gt; 30/11/2023"
          linkName={c("githubrepository")}
          link="https://github.com/adatechschool/projet-collectif-r-seau-social-php-missing-my-sqli"
        />
        <CaseStudyH2 title={c("projectoverview")} />
        <CaseStudyParagraph text={d("description")} />
        <CaseStudyH2 title={c("techstack")} />
        <CaseStudyList items={techStack} />
        <CaseStudyH2 title={c("teammates")} />
        <CaseStudyList items={teammates} />
        <CaseStudyH2 title={c("whatilearned")} />
        <CaseStudyParagraph text={d("whatilearnedtext")} />
        <CaseStudyH2 title={d("beforedesign")} />
        <Image
          src="/images/CaseStudy-php/phpbefore.png"
          alt="screenshot of the project's homepage before redesign"
          width={700}
          height={700}
          className="mt-3"
        />
        <CaseStudyH2 title={d("afterdesign")} />
        <Image
          src="/images/CaseStudy-php/phpafter.png"
          alt="screenshot of the project's homepage after redesign"
          width={700}
          height={700}
          className="mt-3"
        />
        <CaseStudyH2 title={c("iterations")} />
        <Image
          src="/images/CaseStudy-php/phpiterations.png"
          alt="screenshot of the Figma file showing the iterations"
          width={700}
          height={700}
          className="mt-3"
        />
      </div>
      <meta property="og:image" content="/ogimages/php.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </main>
  );
}
