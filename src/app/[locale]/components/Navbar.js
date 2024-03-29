"use client";

// import Link from "next/link";
import "../components/Navbar.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "../../../navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { LanguageLabel } from "./Labels";

export default function NavBar(props) {
  const locale = useLocale();
  // console.log("Active Locale:", locale);

  const currentPath = usePathname();
  // console.log("Active Path:", currentPath);

  const inactiveLocale = locale === "en" ? "fr" : "en";

  const newPath = currentPath.replace(`/${locale}`, `/${inactiveLocale}`);
  // console.log("New Path:", newPath);

  const [activeDropdown, setActiveDropdown] = useState(null);
  // const [activeDropdown, setActiveDropdown] = useState("notes");

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
    <div className="entire-navbar fixed bottom-[2svh] flex flex-col justify-end items-center max-w-min">
      <div className="dropdown-container">
        <AnimatePresence>
          {activeDropdown === "projects" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              key="projects"
              className="project-dropdown-container pb-[0.3125rem] md:pb-[0.625rem]"
              onMouseEnter={() => handleMouseEnter("projects")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="project-dropdown h-[13rem] md:h-[17.125rem] p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.625rem] md:rounded-[1.25rem]">
                <Link
                  href="/projects/ecommerce"
                  onClick={() => setActiveDropdown(null)}
                  className="project-left group relative overflow-hidden dropdown-boxes p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.3125rem] md:rounded-[0.625rem]"
                >
                  {/* <div className="project-left dropdown-boxes p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.3125rem] md:rounded-[0.625rem]"> */}
                  <h3 className="dropdown-text font-instrument text-[1.7rem] md:text-[2.1875rem]">
                    {props.mainProject}
                  </h3>
                  <div className="w-[150%] md:w-full group-hover:-rotate-2 origin-bottom-left transition-all">
                    <Image
                      className="shadow rounded"
                      src="/images/CaseStudy-ecommerce/homepage.png"
                      width={400}
                      height={210}
                      alt="Screenshot of the e-commerce website project"
                      priority={true}
                    />
                  </div>
                  {/* </div> */}
                </Link>
                <div className="project-right-section gap-[0.3125rem] md:gap-[0.625rem]">
                  <Link
                    href="/projects/portfolio"
                    onClick={() => setActiveDropdown(null)}
                    className="group project-right-small dropdown-boxes p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.3125rem] md:rounded-[0.625rem]"
                  >
                    {/* <div className="project-right-small dropdown-boxes p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.3125rem] md:rounded-[0.625rem]"> */}
                    <h3 className="dropdown-text font-instrument text-[1.7rem] md:text-[2.1875rem]">
                      {props.topright}
                    </h3>
                    <div className="project-right-small-images">
                      <Image
                        className="shadow group-hover:-rotate-3 transition-all"
                        src="/images/CaseStudy-portfolio/homepage.png"
                        width={100}
                        height={100}
                        alt="Screenshot of my portfolio's homepage"
                      />
                      <Image
                        className="shadow group-hover:rotate-3 transition-all"
                        src="/images/CaseStudy-portfolio/projectsnavbar.png"
                        width={100}
                        height={100}
                        alt="Screenshot of the navbar with the 'notes' dropdown"
                      />
                      <Image
                        className="shadow group-hover:-rotate-3 transition-all"
                        src="/images/CaseStudy-portfolio/notesnavbar.png"
                        width={100}
                        height={100}
                        alt="Screenshot of the navbar with the 'projects' dropdown"
                      />
                    </div>
                    {/* </div> */}
                  </Link>
                  <Link
                    href="/projects"
                    onClick={() => setActiveDropdown(null)}
                    className="group project-right-small dropdown-boxes p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.3125rem] md:rounded-[0.625rem]"
                  >
                    {/* <div className="project-right-small dropdown-boxes p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.3125rem] md:rounded-[0.625rem]"> */}

                    <h3 className="dropdown-text font-instrument text-[1.7rem] md:text-[2.1875rem]">
                      {props.moreProjects}
                    </h3>
                    <div className="project-right-small-images">
                      <Image
                        className="shadow group-hover:rotate-3 transition-all"
                        src="/images/eym.png"
                        width={83}
                        height={210}
                        alt="Screenshot of the browser extension project"
                      />
                      <Image
                        className="shadow group-hover:-rotate-6 transition-all"
                        src="/images/CaseStudy-pico8/pico-8_game.png"
                        width={83}
                        height={210}
                        alt="Screenshot of the Pico-8 game"
                      />
                      <Image
                        className="shadow group-hover:-rotate-2 transition-all"
                        src="/images/dataviz.png"
                        width={110}
                        height={83}
                        alt="Screenshot of a page from the dataviz project"
                      />
                    </div>
                    {/* </div> */}
                  </Link>
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
              key="notes"
              className="project-dropdown-container pb-[0.3125rem] md:pb-[0.625rem]"
              onMouseEnter={() => handleMouseEnter("notes")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="project-dropdown cursor-wait h-[13rem] md:h-[17.125rem] p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.625rem] md:rounded-[1.25rem]">
                <div className="dropdown-boxes flex flex-col overflow-hidden w-full h-full p-[0.3125rem] md:p-[0.625rem] gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.3125rem] md:rounded-[0.625rem]">
                  <h3 className="dropdown-text font-instrument text-[1.7rem] md:text-[2.1875rem] mb-[0.625rem]">
                    {props.notesComingSoon}
                  </h3>
                  <div className="w-full h-full flex justify-between flex-start blur-[0.08rem] gap-[0.2rem]">
                    <div className="origin-top-right -rotate-[15deg] hover:rotate-0 hover:-translate-y-[0.01rem] transition-all translate-y-3 w-[11.125rem] h-[14rem] p-[0.9rem] rounded-[0.625rem] shadow-2xl flex-col justify-start items-start gap-2 md:gap-2.5 inline-flex bg-[#FBFDFC]">
                      <p className="text-black font-instrument text-[0.8rem] md:text-[1.2rem] leading-3 md:leading-5">
                        {props.article1}
                      </p>
                      <p className="text-black font-inter font-normal text-justify text-[0.3rem] md:text-[0.45rem]">
                        Ut sunt nostrud{" "}
                        <mark className="bg-orange-200">enim veniam do</mark>{" "}
                        magna non cillum minim tempor irure velit id qui ipsum.
                        Magna ipsum elit proident commodo occaecat incididunt
                        culpa commodo aliqua.{" "}
                        <mark className="bg-green-200">Labore nostrud in</mark>{" "}
                        deserunt laborum nostrud ullamco Lorem.
                        <br />
                        <br />
                        Veniam aliqua dolore nulla. Dolor ut et anim. Eiusmod
                        pariatur aliquip consectetur ullamco in culpa labore
                        cupidatat sunt tempor do ad adipisicing amet. Elit ipsum
                        consectetur sit irure non enim et do incididunt nisi.
                      </p>
                    </div>
                    <div className="z-10 hover:-translate-y-2 transition-all w-[11.125rem] h-[14rem] p-[0.9rem] rounded-[0.625rem] shadow-2xl flex-col justify-start items-start gap-2 md:gap-2.5 inline-flex bg-[#FBFDFC]">
                      <p className="text-black font-instrument text-[0.8rem] md:text-[1.2rem] leading-3 md:leading-5">
                        {props.article2}
                      </p>
                      <p className="text-black font-inter font-normal text-justify text-[0.3rem] md:text-[0.45rem]">
                        Reprehenderit minim sit commodo cupidatat est fugiat
                        occaecat dolor. Laboris non dolor in duis. Ex ut do non
                        voluptate <mark>aliquip ullamco est est</mark>. Amet non
                        do nisi dolor labore sunt veniam eiusmod ullamco duis.
                        Dolor cupidatat esse consectetur{" "}
                        <mark className="bg-purple-200">officia</mark> qui
                        adipisicing sint.
                        <br />
                        <br />
                        Deserunt pariatur sint excepteur eiusmod ullamco mollit
                        labore irure incididunt est elit reprehenderit qui
                        laboris.
                      </p>
                    </div>
                    <div className="origin-top-left rotate-[15deg] hover:rotate-0 hover:-translate-y-[0.01rem] transition-all translate-y-3 w-[11.125rem] h-[14rem] p-[0.9rem] rounded-[0.625rem] shadow-2xl flex-col justify-start items-start gap-2 md:gap-2.5 inline-flex bg-[#FBFDFC]">
                      <p className="text-black font-instrument text-[0.8rem] md:text-[1.2rem] leading-3 md:leading-5">
                        {props.article3}
                      </p>
                      <p className="text-black font-inter font-normal text-justify text-[0.3rem] md:text-[0.45rem]">
                        Do enim incididunt commodo irure pariatur incididunt
                        pariatur ut{" "}
                        <mark className="bg-purple-200">voluptate culpa</mark>.
                        Nisi pariatur amet tempor occaecat duis cupidatat
                        ullamco ut magna et veniam aliquip. Fugiat veniam elit
                        nisi ipsum eu esse nulla consequat.
                        <br />
                        <br />
                        Ad in non ea nulla quis non est duis est sit laboris
                        nostrud. Nisi dolore sunt incididunt pariatur. Veniam
                        sint officia culpa irure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ol className="menu-button-container flex px-[0.3125rem] md:px-[0.625rem] items-center gap-[0.3125rem] md:gap-[0.625rem] rounded-[0.625rem] md:rounded-[1.25rem]">
        <motion.a
          href={newPath}
          className="absolute -top-3 -left-2 md:hidden"
          whileTap={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          initial={{ rotate: -12 }}
          animate={{ rotate: -12 }}
          exit={{ rotate: -12 }}
        >
          <LanguageLabel language={props.language} />
        </motion.a>
        <li className="menu-button hidden md:flex py-[0.46875rem] px-[0.3125rem] md:px-[0.625rem] items-start rounded-[0.3125rem] md:rounded-[0.625rem] w-max">
          <a href={newPath}>
            <span className="menu-text font-inter text-[1rem] md:text-[1.3rem]">
              {props.language}
            </span>
          </a>
        </li>
        <div className="menu-button-accessibility cursor-default py-[0.3125rem] md:py-[0.625rem]">
          <Link href="/">
            <li className="menu-button flex py-[0.46875rem] md:py-[0.46875rem] px-[0.3125rem] md:px-[0.625rem] items-start rounded-[0.3125rem] md:rounded-[0.625rem] w-max">
              <span className="menu-text font-inter text-[1rem] md:text-[1.3rem]">
                {props.home}
              </span>
            </li>
          </Link>
        </div>
        <div
          className="menu-button-accessibility cursor-default py-[0.3125rem] md:py-[0.625rem]"
          onMouseEnter={() => handleMouseEnter("projects")}
          onMouseLeave={handleMouseLeave}
        >
          {/* <Link href="/projects"> */}
          <li className="menu-button flex py-[0.46875rem] md:py-[0.46875rem] px-[0.3125rem] md:px-[0.625rem] items-start rounded-[0.3125rem] md:rounded-[0.625rem] w-max">
            <span className="menu-text font-inter text-[1rem] md:text-[1.3rem]">
              {props.projects}
            </span>
          </li>
          {/* </Link>{" "} */}
        </div>
        <div
          className="menu-button-accessibility cursor-default py-[0.3125rem] md:py-[0.625rem]"
          onMouseEnter={() => handleMouseEnter("notes")}
          onMouseLeave={handleMouseLeave}
        >
          <li className="menu-button flex py-[0.46875rem] md:py-[0.46875rem] px-[0.3125rem] md:px-[0.625rem] items-start rounded-[0.3125rem] md:rounded-[0.625rem] w-max">
            <span className="menu-text font-inter text-[1rem] md:text-[1.3rem]">
              {props.notes}
            </span>
          </li>
        </div>
        <Link href="/contact">
          <li className="menu-button flex py-[0.46875rem] px-[0.3125rem] md:px-[0.625rem] items-start rounded-[0.3125rem] md:rounded-[0.625rem] w-max">
            <span className="menu-text font-inter text-[1rem] md:text-[1.3rem]">
              {props.contact}
            </span>
          </li>
        </Link>
      </ol>
    </div>
  );
}
