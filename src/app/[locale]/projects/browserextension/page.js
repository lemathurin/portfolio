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
  title: "Browser extension project",
  description: "Browser extension case study",
};

export default function Extension() {
  const c = useTranslations("CaseStudy");
  const d = useTranslations("CaseStudyExtension");
  const techStack = [
    { name: "Figma", link: "https://www.figma.com/" },
    { name: "HTML, CSS, Javascript", link: null },
  ];
  const teammates = [
    { name: "Emilie Respingue", link: "https://github.com/EmilieRespingue" },
    { name: "Yannick Oudin", link: "https://github.com/oudinyannick" },
  ];
  return (
    <main className="w-screen flex items-start justify-center pb-32">
      <div className="flex flex-col pt-10 md:p-10 pb-36 w-[80%] md:w-full max-w-[700px]">
        <CaseStudyTitle title={d("title")} />
        <CaseStudyDetails
          projectType={c("schoolproject")}
          duration="08/01/2024 -&gt; 18/01/2024"
          linkName={c("githubrepository")}
          link="https://github.com/lemathurin/pomodoro"
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
        <Image
          src="/images/CaseStudy-extension/extension.png"
          alt="screenshot of the homepage"
          width={700}
          height={700}
          className="mt-3"
        />
        <Image
          src="/images/CaseStudy-extension/extensionbig.png"
          alt="screenshot of the homepage"
          width={700}
          height={700}
          className="mt-14"
        />
        <CaseStudyH2 title={c("iterations")} />
        <Image
          src="/images/CaseStudy-extension/extensioniterations.png"
          alt="screenshot of the homepage"
          width={700}
          height={700}
          className="mt-3"
        />
      </div>
      <meta property="og:image" content="/ogimages/extension.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </main>
  );
}
