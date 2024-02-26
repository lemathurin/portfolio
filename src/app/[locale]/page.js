// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "../[locale]/globals.css";

import { useTranslations } from "next-intl";
import Cursor from "./components/Cursors";

export default function Home() {
  const t = useTranslations("Home");

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // console.log(mousePosition);

  // const [cursorVariant, setCursorVariant] = useState("default");

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16,
  //   },
  //   greeting: {
  //     x: mousePosition.x - 75,
  //     y: mousePosition.y - 75,
  //     height: 150,
  //     width: 150,
  //     backgroundColor: "yellow",
  //     mixBlendMode: "difference",
  //   },
  // };

  // const textEnter = () => setCursorVariant("greeting");
  // const textLeave = () => setCursorVariant("default");

  return (
    <div className="w-screen bg-lightMode-background flex-col justify-start items-center py-80 gap-12 md:gap-20 lg:gap-40 inline-flex">
      <h1
        className="font-instrument text-lightMode-text text-7xl md:text-8xl lg:text-9xl greeting"
        // onMouseEnter={textEnter}
        // onMouseLeave={textLeave}
      >
        {t("greeting")}
      </h1>
      <div className="max-w-[70%] md:max-w-[500px] lg:max-w-[700px] flex-col justify-start items-start inline-flex">
        <p className="leading-tight text-justify text-lightMode-text text-3xl md:text-4xl lg:text-5xl">
          {t("p-1")}
        </p>
      </div>
      <div className="max-w-[70%] md:max-w-[500px] lg:max-w-[700px] flex-col justify-start items-start inline-flex">
        <p className="leading-tight text-justify text-lightMode-text text-3xl md:text-4xl lg:text-5xl">
          {t("p-2")}
        </p>
      </div>
      <div className="max-w-[70%] md:max-w-[500px] lg:max-w-[700px] flex-col justify-start items-start inline-flex">
        <p className="leading-tight text-justify text-lightMode-text text-3xl md:text-4xl lg:text-5xl">
          {t("p-3")}
        </p>
      </div>
      {/* <motion.div
        className="language-cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div> */}

      <Cursor />
    </div>
  );
}
