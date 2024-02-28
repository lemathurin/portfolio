"use client";

import Link from "next/link";
import "../components/Navbar.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar(props) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const timeoutRef = useRef(null);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Clear any existing timeout
    setIsButtonHovered(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsButtonHovered(false);
    }, 200);
  };

  // Clear timeout on component unmount
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="entire-navbar fixed bottom-[0px] md:bottom-[20px] flex p-[1.25rem] flex-col justify-end items-center max-w-min">
      <AnimatePresence>
        {isButtonHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }} // Set initial opacity to 0 and move up by 10px
            animate={{
              opacity: isButtonHovered ? 1 : 0,
              y: isButtonHovered ? 0 : -10,
            }} // Animate opacity and y position based on isButtonHovered state
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }} // Set transition duration
            className="project-dropdown-container pb-[0.3125rem] md:pb-[0.625rem]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-dropdown h-[13rem] md:h-[17.125rem] rounded-[0.625rem] md:rounded-[1.25rem]">
              <div className="project-left dropdown-boxes rounded-[0.3125rem] md:rounded-[0.625rem]">
                <h3 className="dropdown-text text-[1.7rem] md:text-[2.1875rem]">
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
              <div className="project-right-section">
                <div className="project-right-small dropdown-boxes rounded-[0.3125rem] md:rounded-[0.625rem]">
                  <h3 className="dropdown-text text-[1.7rem] md:text-[2.1875rem]">
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
                <div className="project-right-small dropdown-boxes rounded-[0.3125rem] md:rounded-[0.625rem]">
                  <h3 className="dropdown-text text-[1.7rem] md:text-[2.1875rem]">
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
      <ol className="menu-button-container flex px-[0.3125rem] md:px-[0.625rem] items-center gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.625rem] md:rounded-[1.25rem]">
        <Link href="/">
          <li className="menu-button flex py-[0.46875rem] md:py-[0.9375rem] px-[0.3125rem] md:px-[0.625rem] items-start rounded-[0.3125rem] md:rounded-[0.625rem] w-max">
            <span className="menu-text text-[1rem] md:text-[1.3rem]" href="/">
              {props.language}
            </span>
          </li>
        </Link>
        <div
          className="menu-button-accessibility py-[0.3125rem] md:py-[0.625rem]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/">
            <li className="menu-button flex py-[0.46875rem] md:py-[0.9375rem] px-[0.3125rem] md:px-[0.625rem] items-start rounded-[0.3125rem] md:rounded-[0.625rem] w-max">
              <span className="menu-text text-[1rem] md:text-[1.3rem]" href="/">
                {props.projects}
              </span>
            </li>
          </Link>{" "}
        </div>
        <Link href="/">
          <li className="menu-button flex py-[0.46875rem] md:py-[0.9375rem] px-[0.3125rem] md:px-[0.625rem] items-start rounded-[0.3125rem] md:rounded-[0.625rem] w-max">
            <span className="menu-text text-[1rem] md:text-[1.3rem]" href="/">
              {props.notes}
            </span>
          </li>
        </Link>{" "}
        <Link href="/contact">
          <li className="menu-button flex py-[0.46875rem] md:py-[0.9375rem] px-[0.3125rem] md:px-[0.625rem] items-start rounded-[0.3125rem] md:rounded-[0.625rem] w-max">
            <span className="menu-text text-[1rem] md:text-[1.3rem]" href="/">
              {props.contact}
            </span>
          </li>
        </Link>
      </ol>
    </div>
  );
}
