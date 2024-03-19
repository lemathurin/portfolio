"use client";

import {
  ReactLabel,
  TailwindLabel,
  NextjsLabel,
  JavascriptLabel,
  FramerMotionLabel,
  PhpLabel,
  LuaLabel,
  MySqlLabel,
  SupabaseLabel,
  ExpressLabel,
  FigmaLabel,
} from "../components/Labels";
import { motion, AnimatePresence, stagger } from "framer-motion";
import { useState } from "react";

export default function ProjectsList(props) {
  const [isHovered, setHovered] = useState(false);

  // const staggerLabels = stagger(0.1, { startDelay: 0.15 });

  return (
    <div className="w-screen flex md:items-start md:justify-center">
      <div className="flex flex-col items-start gap-5 p-10 pb-36 w-full max-w-[700px] *:w-full *:flex *:flex-col *:md:flex *:md:flex-row *:md:justify-between *:md:items-center *:md:content-center *:relative">
        <div>
          <AnimatePresence>
            {isHovered === "portfolio" && (
              <motion.div className="absolute top-0 left-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -12 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[-9px] left-[-28px] z-10 -rotate-12 pointer-events-none"
                >
                  <NextjsLabel />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute w-max top-[-9px] left-[21px] z-20 rotate-[25deg] pointer-events-none"
                >
                  <FramerMotionLabel />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 7 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[23px] left-[5px] z-20 rotate-[7deg] pointer-events-none"
                >
                  <TailwindLabel />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 11 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 11 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[-19px] left-[80px] z-10 rotate-[7deg] pointer-events-none"
                >
                  <FigmaLabel />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <h2
            className="font-instrument text-3xl text-lightMode-text hover:underline hover:text-lightMode-hoveredtext transition"
            onMouseEnter={() => setHovered("portfolio")}
            onMouseLeave={() => setHovered(false)}
          >
            {props.portfolio}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.personalproject}
          </p>
        </div>
        <div>
          <AnimatePresence>
            {isHovered === "ecommerce" && (
              <motion.div className="absolute top-0 left-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 12 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 12 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[-9px] left-[0px] z-10 -rotate-12 pointer-events-none"
                >
                  <ReactLabel />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -9 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute w-max top-[20px] left-[40px] z-20 rotate-[25deg] pointer-events-none"
                >
                  <ExpressLabel />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -7 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[-15px] left-[80px] z-20 rotate-[7deg] pointer-events-none"
                >
                  <SupabaseLabel />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 2 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[26px] left-[130px] z-20 rotate-[20deg] pointer-events-none"
                >
                  <TailwindLabel />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 11 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 11 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[-10px] left-[150px] z-10 rotate-[7deg] pointer-events-none"
                >
                  <FigmaLabel />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <h2
            className="font-instrument text-3xl text-lightMode-text hover:underline hover:text-lightMode-hoveredtext transition"
            onMouseEnter={() => setHovered("ecommerce")}
            onMouseLeave={() => setHovered(false)}
          >
            {props.ecommerce}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.schoolproject}
          </p>
        </div>
        <div>
          <AnimatePresence>
            {isHovered === "dataviz" && (
              <motion.div className="absolute top-0 left-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -18 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -18 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[-10px] left-[-30px] z-10 -rotate-12 pointer-events-none"
                >
                  <FigmaLabel />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 11 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 11 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[-10px] left-[110px] z-10 rotate-[7deg] pointer-events-none"
                >
                  <JavascriptLabel />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <h2
            className="font-instrument text-3xl text-lightMode-text hover:underline hover:text-lightMode-hoveredtext transition"
            onMouseEnter={() => setHovered("dataviz")}
            onMouseLeave={() => setHovered(false)}
          >
            {props.dataviz}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.schoolproject}
          </p>
        </div>
        <div>
          <AnimatePresence>
            {isHovered === "chromeextension" && (
              <motion.div className="absolute top-0 left-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[10px] left-[40px] z-10 -rotate-12 pointer-events-none"
                >
                  <JavascriptLabel />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 18 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 18 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[-10px] left-[90px] z-10 rotate-[7deg] pointer-events-none"
                >
                  <FigmaLabel />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <h2
            className="font-instrument text-3xl text-lightMode-text hover:underline hover:text-lightMode-hoveredtext transition"
            onMouseEnter={() => setHovered("chromeextension")}
            onMouseLeave={() => setHovered(false)}
          >
            {props.chromeextension}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.schoolproject}
          </p>
        </div>
        <div>
          <AnimatePresence>
            {isHovered === "pico8" && (
              <motion.div className="absolute top-0 left-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[-10px] left-[-15px] z-10 rotate-[7deg] pointer-events-none"
                >
                  <LuaLabel />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <h2
            className="font-instrument text-3xl text-lightMode-text hover:underline hover:text-lightMode-hoveredtext transition"
            onMouseEnter={() => setHovered("pico8")}
            onMouseLeave={() => setHovered(false)}
          >
            {props.pico8game}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.schoolproject}
          </p>
        </div>
        <div>
          <AnimatePresence>
            {isHovered === "presenterapp" && (
              <motion.div className="absolute top-0 left-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[16px] left-[-15px] z-10 rotate-[7deg] pointer-events-none"
                >
                  <TailwindLabel />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -13 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -13 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[-10px] left-[50px] z-10 rotate-[7deg] pointer-events-none"
                >
                  <FigmaLabel />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 13 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 13 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[20px] left-[90px] z-10 rotate-[7deg] pointer-events-none"
                >
                  <ReactLabel />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <h2
            className="font-instrument text-3xl text-lightMode-text hover:underline hover:text-lightMode-hoveredtext transition"
            onMouseEnter={() => setHovered("presenterapp")}
            onMouseLeave={() => setHovered(false)}
          >
            {props.presenterapp}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.personalproject}
          </p>
        </div>
        <div>
          <AnimatePresence>
            {isHovered === "php" && (
              <motion.div className="absolute top-0 left-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[-15px] left-[40px] z-10 -rotate-12 pointer-events-none"
                >
                  <PhpLabel />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 18 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 18 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="absolute top-[20px] left-[90px] z-10 rotate-[7deg] pointer-events-none"
                >
                  <FigmaLabel />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <h2
            className="font-instrument text-3xl text-lightMode-text hover:underline hover:text-lightMode-hoveredtext transition"
            onMouseEnter={() => setHovered("php")}
            onMouseLeave={() => setHovered(false)}
          >
            {props.phpsocialnetwork}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.schoolproject}
          </p>
        </div>
      </div>
      {/* <TailwindLabel />
      <ReactLabel />
      <NextjsLabel />
      <JavascriptLabel />
      <FramerMotionLabel />
      <PhpLabel />
      <LuaLabel />
      <MySqlLabel />
      <SupabaseLabel />
      <ExpressLabel /> */}
    </div>
  );
}
