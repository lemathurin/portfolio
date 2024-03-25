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
  title: "Pico-8 project",
  description: "Pico-8 project case study",
};

export default function Pico8CaseStudy() {
  const c = useTranslations("CaseStudy");
  const p = useTranslations("CaseStudyPico8");

  const techStack = [
    {
      name: "Affinity Designer",
      link: "https://affinity.serif.com/en-us/designer/",
    },
    { name: "Pico-8", link: "https://www.lexaloffle.com/pico-8.php" },
  ];
  const teammates = [
    { name: "Mehdi Bejjar", link: "https://github.com/annatehiva" },
    { name: "Daniela Ortúzar", link: "https://github.com/danielaortuzar" },
  ];
  return (
    <main className="w-screen flex items-start justify-center pb-32">
      <div className="flex flex-col pt-10 md:p-10 pb-36 w-[80%] md:w-full max-w-[700px]">
        <CaseStudyTitle title={p("title")} />
        <CaseStudyDetails
          projectType={c("schoolproject")}
          duration="23/10/2023 -&gt; 02/11/2024"
          linkName={c("githubrepository")}
          link="https://github.com/adatechschool/projet-collectif-pico8-daniela-mehdi-mathurin"
        />
        <CaseStudyH2 title={c("projectoverview")} />
        <CaseStudyParagraph text={p("description")} />
        <CaseStudyH2 title={c("techstack")} />
        <CaseStudyList items={techStack} />
        <CaseStudyH2 title={c("teammates")} />
        <CaseStudyList items={teammates} />
        <CaseStudyH2 title={c("whatilearned")} />
        <CaseStudyParagraph text={p("whatilearnedtext")} />
        <CaseStudyH2 title={c("screenshots")} />
        <Image
          src="/images/CaseStudy-pico8/pico-8_loading.png"
          alt="screenshot of the article page"
          width={700}
          height={700}
          className="mt-14"
        />
        <Image
          src="/images/CaseStudy-pico8/pico-8_game.png"
          alt="screenshot of the article page"
          width={700}
          height={700}
          className="mt-14"
        />
        <Image
          src="/images/CaseStudy-pico8/pico-8_menu.png"
          alt="screenshot of the article page"
          width={700}
          height={700}
          className="mt-14"
        />
        <CaseStudyH2 title={c("iterations")} />
        <Image
          src="/images/CaseStudy-pico8/pico-8_mapdesign.png"
          alt="screenshot of the article page"
          width={700}
          height={700}
          className="mt-14"
        />
        <Image
          src="/images/CaseStudy-pico8/pico-8_spritedesign.png"
          alt="screenshot of the article page"
          width={700}
          height={700}
          className="mt-14"
        />
      </div>
    </main>
  );
}
