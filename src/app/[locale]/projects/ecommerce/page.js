import {
  CaseStudyVideo,
  CaseStudyTitle,
  CaseStudyDetails,
  CaseStudyParagraph,
  CaseStudyH2,
  CaseStudyList,
} from "../../components/CaseStudy";

export default function Ecommerce() {
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
    <main className="w-screen flex items-start justify-center">
      <div className="flex flex-col md:p-10 pb-36 w-[90%] md:w-full max-w-[700px]">
        <CaseStudyVideo videoPath="/videos/smallAdopteUnMeuble.mp4" />
        <CaseStudyTitle title="E-commerce store project" />
        <CaseStudyDetails
          projectType="school project"
          duration="04/03/2024 -&gt; 14/03/2024"
          linkName="View Github repository"
          link="https://github.com/adatechschool/projet-collectif-plateforme-de-meubles-adopte-un-meuble"
        />
        <CaseStudyParagraph text="The goal of this project was to have us organize ourselves in front and back-end teams and ensure the delivery of the website. Aute laborum et non do aliqua. Ea sunt culpa exercitation magna. Excepteur eu est Lorem ut aliqua quis deserunt. Veniam velit minim eu tempor eu ipsum." />
        <CaseStudyH2 title="Tech stack and tools used" />
        <CaseStudyList items={techStack} />
        <CaseStudyH2 title="Teammates" />
        <CaseStudyList items={teammates} />
      </div>
    </main>
  );
}
