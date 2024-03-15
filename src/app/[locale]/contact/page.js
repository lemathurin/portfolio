import Link from "next/link";

export default function contact() {
  return (
    <div className="w-screen h-screen flex items-start md:items-center justify-center">
      <div className="flex flex-col p-10 pb-20 md:grid md:grid-cols-3 md:gap-5">
        <div className="font-instrument md:text-right text-3xl">Email</div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          <Link href="/contact">I’ll answer as soon as possible</Link>
        </div>
        <div className="font-instrument md:text-right text-3xl">LinkedIn</div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          you can send me a message there as well
        </div>
        <div className="font-instrument md:text-right text-3xl">Github</div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          see more of my dev work
        </div>
        <div className="font-instrument md:text-right text-3xl">Twitter</div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          I don’t post often
        </div>
        <div className="font-instrument md:text-right text-3xl">Dribbble</div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          some of my design work is here
        </div>
        <div className="font-instrument md:text-right text-3xl">Layers</div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          and also here
        </div>
        <div className="font-instrument md:text-right text-3xl">read.cv</div>
        <div className="font-inter font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          my cv is available here
        </div>
      </div>
    </div>
  );
}
