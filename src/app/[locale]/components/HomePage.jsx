"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../globals.css";
import HireWindow from "./HireWindow";
import HiredWindow from "./HiredWindow";
import {
  NotificationAlert,
  ReactLabel,
  TailwindLabel,
  SupabaseLabel,
  ExpressLabel,
  FigmaLabel,
  WelcomeLabel,
} from "./Labels";
import { Link } from "../../../navigation";
import { RemoveScroll } from "react-remove-scroll";

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
      boxShadow: `0px 4px 10px 0px rgba(32, 32, 32, 0.25)`,
    },
  };

  const textEnter = () => setCursorVariant("greeting");
  const textLeave = () => setCursorVariant("default");

  const profileEnter = () => setCursorVariant("profile");
  const profileLeave = () => setCursorVariant("default");

  const [isOpened, setIsOpened] = useState(false);

  const [isHovered, setHovered] = useState(false);
  // const [isHovered, setHovered] = useState("greeting");

  const toggleHiredWindow = () => {
    setIsOpened(!isOpened);
  };

  const constraintsRef = useRef(null);

  const isVisible = true;

  return (
    <div
      ref={constraintsRef}
      className="w-screen flex-col justify-start items-center inline-flex pb-[20svh] md:pb-[30svh] lg:pb-[40vh]"
    >
      <div className="mt-[20svh] md:mt-[30svh] lg:mt-[40vh] mb-[10svh] md:mb-[15svh] lg:mb-[20svh] relative cursor-default">
        <AnimatePresence>
          {isVisible && (
            <motion.div className="absolute w-full h-full">
              <motion.div
                whileTap={{ scale: 1.2 }}
                initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -12 }}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 600,
                  damping: 30,
                  duration: 0.5,
                }}
                className="absolute top-[-9px] left-[-40px] z-10 -rotate-12"
                drag
                dragConstraints={constraintsRef}
              >
                <WelcomeLabel
                  text={props.hey}
                  bgcolor="#FE6D73"
                  bordercolor="#FE2027"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 1.2 }}
                initial={{ opacity: 0, scale: 0.5, rotate: -11 }}
                animate={{ opacity: 1, scale: 1, rotate: 11 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -11 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 600,
                  damping: 30,
                  duration: 0.5,
                }}
                className="absolute top-[-40px] left-[20px] z-10 rotate-[7deg]"
                drag
                dragConstraints={constraintsRef}
              >
                <span
                  className="text-3xl md:text-5xl"
                  style={{
                    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  👋
                </span>
              </motion.div>
              <motion.div
                whileTap={{ scale: 1.2 }}
                initial={{ opacity: 0, scale: 0.5, rotate: 13 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 13 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 600,
                  damping: 30,
                  duration: 0.5,
                }}
                className="absolute w-max top-[-20px] left-[60px] md:left-[100px] z-20 rotate-[25deg]"
                drag
                dragConstraints={constraintsRef}
              >
                <WelcomeLabel
                  text={props.nicetomeetyou}
                  bgcolor="#FF8552"
                  bordercolor="#FF621F"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 1.2 }}
                initial={{ opacity: 0, scale: 0.5, rotate: -25 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -25 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 600,
                  damping: 30,
                  duration: 0.5,
                }}
                className="absolute top-[20px] right-[-70px] md:right-[-50px] z-20 rotate-[7deg]"
                drag
                dragConstraints={constraintsRef}
              >
                <WelcomeLabel
                  text={props.welcome}
                  bgcolor="#7261A3"
                  bordercolor="#594B81"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 1.2 }}
                initial={{ opacity: 0, scale: 0.5, rotate: 11 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 11 }}
                transition={{
                  delay: 0.7,
                  type: "spring",
                  stiffness: 600,
                  damping: 30,
                  duration: 0.5,
                }}
                className="absolute bottom-[-10px] right-[-35px] z-10 rotate-[7deg]"
                drag
                dragConstraints={constraintsRef}
              >
                <WelcomeLabel
                  text={props.clickaround}
                  bgcolor="#0471A6"
                  bordercolor="#034363"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 1.2 }}
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 15 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -20 }}
                transition={{
                  delay: 0.9,
                  type: "spring",
                  stiffness: 600,
                  damping: 30,
                  duration: 0.5,
                }}
                className="absolute bottom-[-28px] left-[50%] z-10 rotate-[7deg]"
                drag
                dragConstraints={constraintsRef}
              >
                <span
                  className="text-3xl md:text-5xl"
                  style={{
                    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  💻
                </span>
              </motion.div>
              <motion.div
                whileTap={{ scale: 1.2 }}
                initial={{ opacity: 0, scale: 0.5, rotate: 22 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 22 }}
                transition={{
                  delay: 1.1,
                  type: "spring",
                  stiffness: 600,
                  damping: 30,
                  duration: 0.5,
                }}
                className="absolute bottom-[-10px] left-[-70px] z-20 rotate-[20deg]"
                drag
                dragConstraints={constraintsRef}
              >
                <WelcomeLabel
                  text={props.givemeajob}
                  bgcolor="#308888"
                  bordercolor="#205A5A"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <h1
          className="font-instrument text-lightMode-text text-7xl md:text-8xl lg:text-9xl greeting"
          // onMouseEnter={() => setHovered("greeting")}
          // onMouseLeave={() => setHovered(false)}
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
            className="font-instrument cursor-none hover:underline text-lightMode-hoveredtext hover:text-lightMode-text transition"
          >
            Mathurin Sekine
          </span>
          <span className="font-instrument">{props.l2}</span>
          <a
            href="https://adatechschool.fr/"
            target="_blank"
            className="font-instrument hover:underline text-lightMode-hoveredtext hover:text-[#E74C34] transition"
            onMouseEnter={() => setHovered("adaLink")}
            onMouseLeave={() => setHovered(false)}
          >
            Ada Tech School
          </a>
          <span className="font-instrument">{props.l3}</span>
          <span className="underline decoration-[#63635D]">
            <span
              onClick={() => setIsOpened("hiredWindow")}
              className="font-instrument cursor-pointer"
            >
              {props.dev1}
            </span>
            <div className="w-max inline-flex relative underline decoration-[#63635D]">
              <span
                onClick={() => setIsOpened("hiredWindow")}
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
                onClick={() => setIsOpened("hiredWindow")}
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
            <span className="hover:underline text-lightMode-hoveredtext hover:text-lightMode-text transition">
              {props.projects}
            </span>
          </Link>
          {props.l5}
          <Link
            onMouseEnter={() => setHovered("ecommercelink")}
            onMouseLeave={() => setHovered(false)}
            href="/projects/ecommerce"
            className="font-instrument hover:underline text-lightMode-hoveredtext hover:text-lightMode-text transition"
          >
            {props.ecommerce}
          </Link>
          {props.l6}
          <Link
            href="/projects/portfolio"
            className="font-instrument hover:underline text-lightMode-hoveredtext hover:text-lightMode-text transition"
          >
            <span>{props.thisPortfolio}</span>
          </Link>
          {props.dot}
        </p>
        <p className="font-instrument leading-tight md:leading-snug lg:leading-normal text-justify text-lightMode-text text-3xl md:text-4xl lg:text-5xl">
          {props.l7}
          <a
            href="https://dribbble.com/mathurin"
            target="_blank"
            className="hover:underline text-lightMode-hoveredtext hover:text-lightMode-text transition"
          >
            Dribbble
          </a>
          {props.l8}
          <a
            href="https://layers.to/mathurin"
            target="_blank"
            className="hover:underline text-lightMode-hoveredtext hover:text-lightMode-text transition"
          >
            Layers
          </a>
          {props.dot}
          {props.l9}
          <Link href="/contact">
            <span className="hover:underline text-lightMode-hoveredtext hover:text-lightMode-text transition">
              {props.l10}
            </span>
          </Link>
          {props.dot}
        </p>
      </div>
      <AnimatePresence>
        {isHovered === "adaLink" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
            className="w-screen h-screen bg-[#FDD8D0] fixed top-0 left-0 -z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHovered === "ecommercelink" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="w-screen h-screen fixed left-0 top-0 -z-10 md:flex justify-center items-center hidden"
          >
            <div className="w-screen h-screen absolute left-0 top-0 backdrop-blur bg-white/30"></div>
            <video
              autoPlay
              loop
              muted
              className="h-[110%] w-[106%]"
              style={{ objectFit: "cover" }}
            >
              <source src="/videos/smallAdopteUnMeuble.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="homepage-cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
      {/* <AnimatePresence>
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
            <RemoveScroll>
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
                  contract={props.contract}
                  line2part2={props.line2part2}
                  ideally={props.ideally}
                  line3part1={props.line3part1}
                  line3part2={props.line3part2}
                  line3part3={props.line3part3}
                  period={props.period}
                  here={props.here}
                  line4={props.line4}
                  name={props.name}
                  deleteButtonLabel={props.deleteButtonLabel}
                />
              </motion.div>
            </RemoveScroll>
          </motion.div>
        )}
      </AnimatePresence> */}
      <AnimatePresence>
        {isOpened === "hiredWindow" && (
          <motion.div
            className="w-screen h-screen fixed z-50 backdrop-blur-md bg-black/20 transform-gpu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
            }}
          >
            <RemoveScroll>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 80 }}
                transition={{
                  duration: 0.3,
                }}
              >
                <HiredWindow
                  onClose={toggleHiredWindow}
                  opening={props.opening}
                  to={props.to}
                  recipient={props.recipient}
                  part1={props.part1}
                  juisci={props.juisci}
                  part2={props.part2}
                  goodday={props.goodday}
                  name={props.name}
                  deleteButtonLabel={props.deleteButtonLabel}
                />
              </motion.div>
            </RemoveScroll>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
