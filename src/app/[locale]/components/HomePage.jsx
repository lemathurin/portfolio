"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../[locale]/globals.css";

import Cursor from "./components/Cursors";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  console.log(mousePosition);

  const [cursorVariant, setCursorVariant] = useState("default");

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
    greeting: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("greeting");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="w-screen bg-lightMode-background flex-col justify-start items-center inline-flex pb-[20svh] md:pb-[30svh] lg:pb-[40vh]">
      <div className="mt-[20svh] md:mt-[30svh] lg:mt-[40vh] mb-[10svh] md:mb-[15svh] lg:mb-[20svh]">
        <h1
          className="font-instrument text-lightMode-text text-7xl md:text-8xl lg:text-9xl greeting"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          {props.greeting}
        </h1>
      </div>
      <div className="max-w-[80%] md:max-w-[500px] lg:max-w-[700px] flex-col justify-start items-start inline-flex gap-12 md:gap-20 lg:gap-40">
        <div>
          <p className="font-instrument leading-tight md:leading-snug lg:leading-normal text-justify text-lightMode-text text-3xl md:text-4xl lg:text-5xl">
            {props.p1}
          </p>
        </div>
        <div>
          <p className="font-instrument leading-tight md:leading-snug lg:leading-normal text-justify text-lightMode-text text-3xl md:text-4xl lg:text-5xl">
            {props.p2}
          </p>
        </div>
        <div>
          <p className="font-instrument leading-tight md:leading-snug lg:leading-normal text-justify text-lightMode-text text-3xl md:text-4xl lg:text-5xl">
            {props.p3}
          </p>
        </div>
      </div>
      <motion.div
        className="language-cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>

      <Cursor />
    </div>
  );
}
