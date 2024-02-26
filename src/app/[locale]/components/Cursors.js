"use client";

import "../components/Cursors.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
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
    <motion.div
      className="language-cursor"
      variants={variants}
      animate={cursorVariant}
    />
  );
}
