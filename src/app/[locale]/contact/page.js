import Link from "next/link";

export default function contact() {
  return (
    <div className="w-screen h-screen flex items-start md:items-center justify-center bg-lightMode-background">
      <div className="flex flex-col p-10 pb-20 md:grid md:grid-cols-3 md:gap-5">
        <div className="font-instrument md:text-right text-3xl hover:underline hover:-rotate-3 md:hover:rotate-3 origin-bottom-left md:origin-bottom-right hover:text-lightMode-hoveredtext transition">
          <Link href="/">Email</Link>
        </div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          I’ll answer as soon as possible
        </div>
        <div className="font-instrument md:text-right text-3xl hover:text-lightMode-hoveredtext cursor-not-allowed">
          LinkedIn
        </div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          coming soon
        </div>
        <div className="font-instrument md:text-right text-3xl hover:underline hover:-rotate-3 md:hover:rotate-3 origin-bottom-left md:origin-bottom-right hover:text-lightMode-hoveredtext transition">
          <Link href="https://github.com/lemathurin">GitHub</Link>
        </div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          see more of my dev work
        </div>
        <div className="font-instrument md:text-right text-3xl hover:underline hover:-rotate-3 md:hover:rotate-3 origin-bottom-left md:origin-bottom-right hover:text-lightMode-hoveredtext transition">
          <Link href="https://twitter.com/mathurin_sekine">Twitter</Link>
        </div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          I don’t post often
        </div>
        <div className="font-instrument md:text-right text-3xl hover:underline hover:-rotate-3 md:hover:rotate-3 origin-bottom-left md:origin-bottom-right hover:text-lightMode-hoveredtext transition">
          <Link href="https://dribbble.com/mathurin">Dribbble</Link>
        </div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          some of my design work is here
        </div>
        <div className="font-instrument md:text-right text-3xl hover:underline hover:-rotate-3 md:hover:rotate-3 origin-bottom-left md:origin-bottom-right hover:text-lightMode-hoveredtext transition">
          <Link href="https://layers.to/mathurin">Layers</Link>
        </div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          and also here
        </div>
        <div className="font-instrument md:text-right text-3xl hover:underline hover:-rotate-3 md:hover:rotate-3 origin-bottom-left md:origin-bottom-right hover:text-lightMode-hoveredtext transition">
          <Link href="https://read.cv/mathurin">read.cv</Link>
        </div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          my cv is available here
        </div>
      </div>
    </div>
  );
}
