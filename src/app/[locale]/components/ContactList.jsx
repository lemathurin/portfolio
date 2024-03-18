"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactList(props) {
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const handleEmailClick = () => {
    if (showEmail) {
      setEmail("");
      setShowEmail(false);
    } else {
      setEmail("test@gmail.com");
      setShowEmail(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 4000);
  };

  return (
    <div className="flex flex-col gap-10 pt-10 pb-36 w-full max-w-[700px]">
      <div className="flex flex-col px-10 md:grid md:grid-cols-2 md:gap-y-5">
        <div className="font-instrument text-lightMode-text text-3xl hover:underline hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition w-min cursor-pointer">
          <a onClick={handleEmailClick}>Email</a>
        </div>
        <div
          className={`font-inter text-lightMode-text font-extralight text-xl flex items-end md:justify-end pb-8 ${
            showEmail ? "font-semibold" : ""
          }`}
          style={{
            position: "relative",
            whiteSpace: "nowrap",
            // overflow: "hidden",
          }}
        >
          <AnimatePresence>
            {showEmail ? (
              <>
                <motion.span
                  key="email"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.1 }}
                  onClick={handleCopyEmail}
                  className="hover:underline hover:text-lightMode-hoveredtext"
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    bottom: 0,
                    [window.innerWidth > 640 ? "right" : "left"]: 0,
                  }}
                >
                  {email}
                </motion.span>
              </>
            ) : (
              <AnimatePresence>
                <motion.span
                  key="props-email"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.1 }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    [window.innerWidth > 640 ? "right" : "left"]: 0,
                  }}
                >
                  {props.email}
                </motion.span>
              </AnimatePresence>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showCopyMessage && (
              <motion.div
                key="copy-message"
                initial={{ opacity: 0, scale: 0.5 }} // Initial scale set to 0.5 (half size)
                animate={{ opacity: 1, scale: 1 }} // Animate to full size
                exit={{ opacity: 0, scale: 0.5 }} // Exit animation, back to half size
                transition={{
                  type: "spring",
                  stiffness: 900,
                  damping: 30,
                  duration: 0.5,
                }}
                style={{
                  cursor: "default",
                  position: "absolute",
                  top: -20,
                  [window.innerWidth > 640 ? "right" : "left"]:
                    window.innerWidth > 640 ? -30 : 60,
                  padding: "0rem 0.625rem 0.3125rem 0.625rem",
                  backgroundColor: "#5BB98B",
                  rotate: "8deg",
                  borderRadius: "2rem",
                  border: "2px solid #46A758",
                  boxShadow:
                    "0px -2.5px 0px 0px #46A758 inset, 0px 4px 10px 0px rgba(32, 32, 32, 0.25)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span className="text-white text-sm font-normal">
                  saved to clipboard
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="font-instrument text-lightMode-text text-3xl hover:text-[#5C271F] hover:line-through transition cursor-not-allowed w-min pt-8 md:pt-0">
          LinkedIn
        </div>
        <div className="font-inter text-lightMode-text font-extralight  text-xl flex items-end md:justify-end">
          {props.linkedin}
        </div>
        <div className="font-instrument text-lightMode-text text-3xl hover:underline hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition w-min pt-8 md:pt-0">
          <Link href="https://github.com/lemathurin">GitHub</Link>
        </div>
        <div className="font-inter text-lightMode-text font-extralight  text-xl flex items-end md:justify-end">
          {props.github}
        </div>
        <div className="font-instrument text-lightMode-text text-3xl hover:underline hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition w-min pt-8 md:pt-0">
          <Link href="https://twitter.com/mathurin_sekine">Twitter</Link>
        </div>
        <div className="font-inter text-lightMode-text font-extralight  text-xl flex items-end md:justify-end">
          {props.twitter}
        </div>
        <div className="font-instrument text-lightMode-text text-3xl hover:underline hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition w-min pt-8 md:pt-0">
          <Link href="https://dribbble.com/mathurin">Dribbble</Link>
        </div>
        <div className="font-inter text-lightMode-text font-extralight  text-xl flex items-end md:justify-end">
          {props.dribbble}
        </div>
        <div className="font-instrument text-lightMode-text text-3xl hover:underline hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition w-min pt-8 md:pt-0">
          <Link href="https://layers.to/mathurin">Layers</Link>
        </div>
        <div className="font-inter text-lightMode-text font-extralight  text-xl flex items-end md:justify-end">
          {props.layers}
        </div>
        <div className="font-instrument text-lightMode-text text-3xl hover:underline hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition w-min pt-8 md:pt-0">
          <Link href="https://read.cv/mathurin">read.cv</Link>
        </div>
        <div className="font-inter text-lightMode-text font-extralight  text-xl flex items-end md:justify-end">
          {props.readcv}
        </div>
      </div>
    </div>
  );
}
