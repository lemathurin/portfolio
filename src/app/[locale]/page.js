"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../[locale]/globals.css";

// import { useTranslations } from "next-intl";

export default function Home(props) {
  // const t = useTranslations("Home");

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <div className="w-screen bg-lightMode-background flex-col justify-start items-center gap-40 inline-flex">
      <h1 className="font-instrument text-lightMode-text text-9xl">
        {props.greeting}
      </h1>
      <div className="max-w-[700px] flex-col justify-start items-start inline-flex">
        <p className="leading-tight text-justify text-lightMode-text text-5xl">
          {props.p1}
        </p>
      </div>
      <div className="max-w-[700px] flex-col justify-start items-start inline-flex">
        <p className="leading-tight text-justify text-lightMode-text text-5xl">
          {props.p2}
        </p>
      </div>
      <div className="max-w-[700px] flex-col justify-start items-start inline-flex">
        <p className="leading-tight text-justify text-lightMode-text text-5xl">
          {props.p3}
        </p>
      </div>
      <motion.div
        className="language-cursor"
        variants={variants}
        animate="default"
      ></motion.div>
    </div>
  );
}
