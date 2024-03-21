"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../globals.css";
import HireWindow from "./HireWindow";
import { NotificationAlert } from "./Labels";
import { Link } from "../../../navigation";

// import Cursor from "../components/Cursors";

export default function Home(props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // console.log(mousePosition);

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
      borderRadius: "100%",
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
    profile: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      borderRadius: "50%",
      height: 100,
      width: 100,
      backgroundImage: "url(/images/profile_picture.png)",
      backgroundSize: "cover",
    },
  };

  const textEnter = () => setCursorVariant("greeting");
  const textLeave = () => setCursorVariant("default");

  const profileEnter = () => setCursorVariant("profile");
  const profileLeave = () => setCursorVariant("default");

  const [isOpened, setIsOpened] = useState(false);

  const toggleHireWindow = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="w-screen bg-lightMode-background flex-col justify-start items-center inline-flex pb-[20svh] md:pb-[30svh] lg:pb-[40vh]">
      <div className="mt-[20svh] md:mt-[30svh] lg:mt-[40vh] mb-[10svh] md:mb-[15svh] lg:mb-[20svh]">
        <h1
          className="font-instrument text-lightMode-text text-7xl md:text-8xl lg:text-9xl greeting cursor-none"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          {props.greeting}
        </h1>
      </div>
      <div className="max-w-[80%] md:max-w-[500px] lg:max-w-[700px] flex-col justify-start items-start inline-flex gap-12 md:gap-20 lg:gap-40">
        <div className="leading-tight md:leading-snug lg:leading-normal text-justify text-lightMode-text text-3xl md:text-4xl lg:text-5xl">
          <span className="font-instrument">{props.l1}</span>
          <span
            onMouseEnter={profileEnter}
            onMouseLeave={profileLeave}
            className="font-instrument cursor-none hover:underline decoration-dashed text-lightMode-hoveredtext hover:text-lightMode-text transition"
          >
            Mathurin Sekine
          </span>
          <span className="font-instrument">{props.l2}</span>
          <a
            href="https://adatechschool.fr/"
            target="_blank"
            className="font-instrument hover:underline decoration-dashed text-lightMode-hoveredtext hover:text-lightMode-text transition"
          >
            Ada Tech School
          </a>
          <span className="font-instrument">{props.l3}</span>
          <span className="underline decoration-[#63635D]">
            <span
              onClick={() => setIsOpened("hireWindow")}
              className="font-instrument cursor-pointer"
            >
              {props.dev1}
            </span>
            <div className="w-max inline-flex relative underline decoration-[#63635D]">
              <span
                onClick={() => setIsOpened("hireWindow")}
                className="font-instrument cursor-pointer"
              >
                {props.dev2}
              </span>
              <motion.div
                whileTap={{ scale: 1.2, rotate: -20 }}
                whileHover={{ scale: 1.4, rotate: 12 }}
                initial={{ scale: 1 }}
                animate={{ rotate: 0 }}
                exit={{ scale: 1 }}
                onClick={() => setIsOpened("hireWindow")}
                className="cursor-pointer absolute top-[-6px] right-[-19px] lg:top-[0px] lg:right-[-20px]"
              >
                <NotificationAlert />
              </motion.div>
            </div>
          </span>
          <span className="font-instrument">{props.dot}</span>
        </div>
        <p className="font-instrument leading-tight md:leading-snug lg:leading-normal text-justify text-lightMode-text text-3xl md:text-4xl lg:text-5xl">
          {props.l4}
          <Link href="/projects">
            <span className="hover:underline decoration-dashed text-lightMode-hoveredtext hover:text-lightMode-text transition">
              {props.projects}
            </span>
          </Link>
          {props.l5}
          <span>{props.ecommerce}</span>
          {props.l6}
          <span>{props.thisPortfolio}</span>
          {props.dot}
        </p>
        <p className="font-instrument leading-tight md:leading-snug lg:leading-normal text-justify text-lightMode-text text-3xl md:text-4xl lg:text-5xl">
          {props.l7}
          <a
            href="https://dribbble.com/mathurin"
            target="_blank"
            className="hover:underline decoration-dashed text-lightMode-hoveredtext hover:text-lightMode-text transition"
          >
            Dribbble
          </a>
          {props.l8}
          <a
            href="https://layers.to/mathurin"
            target="_blank"
            className="hover:underline decoration-dashed text-lightMode-hoveredtext hover:text-lightMode-text transition"
          >
            Layers
          </a>
          {props.dot}
          {props.l9}
          <Link href="/contact">
            <span className="hover:underline decoration-dashed text-lightMode-hoveredtext hover:text-lightMode-text transition">
              {props.l10}
            </span>
          </Link>
          {props.dot}
        </p>
      </div>

      <motion.div
        className="homepage-cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
      <AnimatePresence>
        {isOpened === "hireWindow" && (
          <motion.div
            className="w-screen h-screen fixed z-50 backdrop-blur-md bg-black/20 transform-gpu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 80 }}
              transition={{
                duration: 0.3,
              }}
            >
              <HireWindow
                onClose={toggleHireWindow}
                to={props.to}
                futureEmployer={props.futureEmployer}
                hello={props.hello}
                line1={props.line1}
                line2={props.line2}
                line3part1={props.line3part1}
                line3part2={props.line3part2}
                line3part3={props.line3part3}
                here={props.here}
                line4={props.line4}
                name={props.name}
                deleteButtonLabel={props.deleteButtonLabel}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <Cursor /> */}
    </div>
  );
}
