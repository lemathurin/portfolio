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
  title: "E-commerce website project",
  description: "E-commerce website project case study",
};

export default function Ecommerce() {
  const c = useTranslations("CaseStudy");
  const e = useTranslations("CaseStudyEcommerce");

  const techStack = [
    { name: "Figma", link: "https://www.figma.com/" },
    { name: "React Vite", link: "https://vitejs.dev/" },
    { name: "Shadcn/ui", link: "https://ui.shadcn.com/" },
    { name: "Tailwindcss", link: "https://tailwindcss.com/" },
    { name: "Supabase", link: "https://supabase.com/" },
    { name: "Express.js", link: "https://expressjs.com/" },
  ];
  const teammates = [
    { name: "Tianhong Huang", link: "https://github.com/Tianhong258" },
    { name: "Fabienne Lis", link: "https://github.com/FabienneLIS" },
    { name: "Alexis Moulliere", link: "https://github.com/realalexis" },
    { name: "Marie Le Lamer", link: "https://github.com/MarieLeLamer" },
    { name: "Audrey Gueguen", link: "https://github.com/AudreyGgn" },
    { name: "Maguelone Guinaud", link: "https://github.com/magueloneguinaud" },
    { name: "Yannick Oudin", link: "https://github.com/oudinyannick" },
    { name: "Anna Tehiva", link: "https://github.com/annatehiva" },
    { name: "Florentin Corbiat", link: "https://github.com/CorbiatFlorentin" },
  ];
  return (
    <main className="w-screen flex items-start justify-center pb-32">
      <div className="flex flex-col pt-10 md:p-10 pb-36 w-[80%] md:w-full max-w-[700px]">
        <CaseStudyVideo videoPath="/videos/smallAdopteUnMeuble.mp4" />
        <CaseStudyTitle title={e("title")} />
        <CaseStudyDetails
          projectType={c("schoolproject")}
          duration="04/03/2024 -&gt; 14/03/2024"
          linkName={c("githubrepository")}
          link="https://github.com/adatechschool/projet-collectif-plateforme-de-meubles-adopte-un-meuble"
        />
        <CaseStudyH2 title={c("projectoverview")} />
        <CaseStudyParagraph text={e("description")} />
        <CaseStudyH2 title={c("techstack")} />
        <CaseStudyList items={techStack} />
        <CaseStudyH2 title={c("teammates")} />
        <CaseStudyList items={teammates} />
        <CaseStudyH2 title={c("whatilearned")} />
        <CaseStudyParagraph text={e("whatilearnedtext")} />
        <CaseStudyH2 title={c("screenshots")} />
        <Image
          src="/images/CaseStudy-ecommerce/homepage.png"
          alt="screenshot of the homepage"
          width={700}
          height={700}
          className="mt-3 shadow-xl"
        />
        <Image
          src="/images/CaseStudy-ecommerce/mobileversion.png"
          alt="screenshot of the homepage"
          width={175}
          height={340}
          className="mt-14 shadow-xl"
        />
        <Image
          src="/images/CaseStudy-ecommerce/articlePage.png"
          alt="screenshot of the article page"
          width={700}
          height={700}
          className="mt-14 shadow-xl"
        />
        <Image
          src="/images/CaseStudy-ecommerce/aboutPage.png"
          alt="screenshot of the article page"
          width={700}
          height={700}
          className="mt-14 shadow-xl"
        />
        <CaseStudyH2 title={c("iterations")} />
        <Image
          src="/images/CaseStudy-ecommerce/iterations.png"
          alt="screenshot of the homepage"
          width={700}
          height={700}
          className="mt-3 shadow-xl"
        />
      </div>
      <meta property="og:image" content="/ogimages/ecommerce.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </main>
  );
}
