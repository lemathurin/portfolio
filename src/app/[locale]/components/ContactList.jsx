"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactList(props) {
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);

  const handleEmailClick = () => {
    if (showEmail) {
      setEmail("");
      setShowEmail(false);
    } else {
      setEmail("test@gmail.com");
      setShowEmail(true);
    }
  };

  return (
    <div className="flex flex-col gap-10 pt-10 pb-36 w-full">
      <div className="flex flex-col px-10">
        <div className="font-instrument text-lightMode-text text-3xl hover:underline hover:-rotate-3 md:hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition cursor-pointer">
          <a onClick={handleEmailClick}>Email</a>
        </div>
        <div
          className={`font-inter text-lightMode-text font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0 ${
            showEmail ? "font-semibold not-italic" : ""
          }`}
        >
          {showEmail ? email : `${props.email}`}
        </div>
        <div className="font-instrument text-lightMode-text text-3xl hover:text-[#5C271F] hover:line-through transition cursor-not-allowed">
          LinkedIn
        </div>
        <div className="font-inter text-lightMode-text font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          {props.linkedin}
        </div>
        <div className="font-instrument text-lightMode-text text-3xl hover:underline hover:-rotate-3 md:hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition">
          <Link href="https://github.com/lemathurin">GitHub</Link>
        </div>
        <div className="font-inter text-lightMode-text font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          {props.github}
        </div>
        <div className="font-instrument text-lightMode-text text-3xl hover:underline hover:-rotate-3 md:hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition">
          <Link href="https://twitter.com/mathurin_sekine">Twitter</Link>
        </div>
        <div className="font-inter text-lightMode-text font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          {props.twitter}
        </div>
        <div className="font-instrument text-lightMode-text text-3xl hover:underline hover:-rotate-3 md:hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition">
          <Link href="https://dribbble.com/mathurin">Dribbble</Link>
        </div>
        <div className="font-inter text-lightMode-text font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          {props.dribbble}
        </div>
        <div className="font-instrument text-lightMode-text text-3xl hover:underline hover:-rotate-3 md:hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition">
          <Link href="https://layers.to/mathurin">Layers</Link>
        </div>
        <div className="font-inter text-lightMode-text font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          {props.layers}
        </div>
        <div className="font-instrument text-lightMode-text text-3xl hover:underline hover:-rotate-3 md:hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition">
          <Link href="https://read.cv/mathurin">read.cv</Link>
        </div>
        <div className="font-inter text-lightMode-text font-extralight italic text-xl flex items-end col-span-2 pb-8 md:pb-0">
          {props.readcv}
        </div>
      </div>
    </div>
  );
}
