"use client";

// import Link from "next/link";
import "../components/Navbar.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "../../../navigation";
// import { useLocale } from "next-intl";

export default function NavBar(props) {
  // const currentLocale = useLocale();

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown); // Set active dropdown on mouse enter
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null); // Clear active dropdown on mouse leave
    }, 200);
  };

  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="entire-navbar fixed bottom-[0px] md:bottom-[20px] flex p-[1.25rem] flex-col justify-end items-center max-w-min">
      <AnimatePresence>
        {activeDropdown === "projects" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="project-dropdown-container pb-[0.3125rem] md:pb-[0.625rem]"
            onMouseEnter={() => handleMouseEnter("projects")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-dropdown h-[13rem] md:h-[17.125rem] p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.625rem] md:rounded-[1.25rem]">
              <div className="project-left dropdown-boxes p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.3125rem] md:rounded-[0.625rem]">
                <h3 className="dropdown-text font-instrument text-[1.7rem] md:text-[2.1875rem]">
                  {props.presenterApp}
                </h3>
                <Image
                  className="shadow"
                  src="/images/presenter_app.png"
                  width={400}
                  height={210}
                  alt="Screenshot of the unfinished project"
                />
              </div>
              <div className="project-right-section gap-[0.3125rem] md:gap-[0.625rem]">
                <div className="project-right-small dropdown-boxes p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.3125rem] md:rounded-[0.625rem]">
                  <h3 className="dropdown-text font-instrument text-[1.7rem] md:text-[2.1875rem]">
                    {props.pico8}
                  </h3>
                  <div className="project-right-small-images">
                    <Image
                      className="shadow"
                      src="/images/pico-8_loading.png"
                      width={83}
                      height={83}
                      alt="Screenshot of game loading screen"
                    />
                    <Image
                      className="shadow"
                      src="/images/pico-8_menu.png"
                      width={83}
                      height={83}
                      alt="Screenshot of game menu screen"
                    />
                    <Image
                      className="shadow"
                      src="/images/pico-8_game.png"
                      width={83}
                      height={83}
                      alt="Screenshot of game"
                    />
                  </div>
                </div>
                <div className="project-right-small dropdown-boxes p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.3125rem] md:rounded-[0.625rem]">
                  <h3 className="dropdown-text font-instrument text-[1.7rem] md:text-[2.1875rem]">
                    {props.moreProjects}
                  </h3>
                  <div className="project-right-small-images">
                    <Image
                      className="shadow"
                      src="/images/eym.png"
                      width={83}
                      height={210}
                      alt="Screenshot of game loading screen"
                    />
                    <Image
                      className="shadow"
                      src="/images/portfolio_exploration.png"
                      width={83}
                      height={210}
                      alt="Screenshot of game loading screen"
                    />
                    <Image
                      className="shadow"
                      src="/images/dataviz.png"
                      width={110}
                      height={83}
                      alt="Screenshot of game loading screen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeDropdown === "notes" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="project-dropdown-container pb-[0.3125rem] md:pb-[0.625rem]"
            onMouseEnter={() => handleMouseEnter("notes")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-dropdown h-[13rem] md:h-[17.125rem] p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.625rem] md:rounded-[1.25rem]">
              <div className="project-left dropdown-boxes p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.3125rem] md:rounded-[0.625rem]">
                <h3 className="dropdown-text font-instrument text-[1.7rem] md:text-[2.1875rem]">
                  {props.presenterApp}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ol className="menu-button-container flex px-[0.3125rem] md:px-[0.625rem] items-center gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.625rem] md:rounded-[1.25rem]">
        <Link href="/">
          <li className="menu-button flex py-[0.46875rem] md:py-[0.9375rem] px-[0.3125rem] md:px-[0.625rem] items-start rounded-[0.3125rem] md:rounded-[0.625rem] w-max">
            <span
              className="menu-text font-inter text-[1rem] md:text-[1.3rem]"
              // href="/"
            >
              {props.language}
            </span>
          </li>
        </Link>
        <div
          className="menu-button-accessibility cursor-default py-[0.3125rem] md:py-[0.625rem]"
          onMouseEnter={() => handleMouseEnter("projects")}
          onMouseLeave={handleMouseLeave}
        >
          {/* <Link href="/"> */}
          <li className="menu-button flex py-[0.46875rem] md:py-[0.9375rem] px-[0.3125rem] md:px-[0.625rem] items-start rounded-[0.3125rem] md:rounded-[0.625rem] w-max">
            <span
              className="menu-text font-inter text-[1rem] md:text-[1.3rem]"
              // href="/"
            >
              {props.projects}
            </span>
          </li>
          {/* </Link>{" "} */}
        </div>
        <Link href="/">
          <li className="menu-button flex py-[0.46875rem] md:py-[0.9375rem] px-[0.3125rem] md:px-[0.625rem] items-start rounded-[0.3125rem] md:rounded-[0.625rem] w-max">
            <span
              className="menu-text font-inter text-[1rem] md:text-[1.3rem]"
              onMouseEnter={() => handleMouseEnter("notes")}
              onMouseLeave={handleMouseLeave}
              // href="/"
            >
              {props.notes}
            </span>
          </li>
        </Link>{" "}
        <Link href="/contact">
          <li className="menu-button flex py-[0.46875rem] md:py-[0.9375rem] px-[0.3125rem] md:px-[0.625rem] items-start rounded-[0.3125rem] md:rounded-[0.625rem] w-max">
            <span
              className="menu-text font-inter text-[1rem] md:text-[1.3rem]"
              // href="/"
            >
              {props.contact}
            </span>
          </li>
        </Link>
      </ol>
    </div>
  );
}
