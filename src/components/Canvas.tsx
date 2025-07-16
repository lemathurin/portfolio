"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

interface CanvasProps {
  children: React.ReactNode;
  role?: string;
}

const Canvas: React.FC<CanvasProps> = ({ children, role }) => {
  const DIV_WIDTH = 2500;
  const DIV_HEIGHT = 2500;

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollEnabledRef = useRef(false);
  const [hasRestored, setHasRestored] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  // console.log("Initial motion values:", x.get(), y.get());

  const STORAGE_KEY = "canvas_position";

  function savePosition() {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ x: x.get(), y: y.get() }),
    );
  }

  function restorePosition() {
    const savedPosition = sessionStorage.getItem(STORAGE_KEY);
    if (savedPosition) {
      const { x: savedX, y: savedY } = JSON.parse(savedPosition);
      x.set(savedX);
      y.set(savedY);
      // console.log("restoring x:", savedX);
      // console.log("restoring y:", savedY);
    } else {
      const container = containerRef.current;
      if (!container) return;

      const viewportWidth = container.offsetWidth;
      const viewportHeight = container.offsetHeight;

      const maxOffsetX = DIV_WIDTH - viewportWidth;
      const maxOffsetY = DIV_HEIGHT - viewportHeight;

      x.set(clamp((viewportWidth - DIV_WIDTH) / 2, -maxOffsetX, 0));
      y.set(clamp((viewportHeight - DIV_HEIGHT) / 2, -maxOffsetY, 0));
      // console.log("centering x:", (viewportWidth - DIV_WIDTH) / 2);
      // console.log("centering y:", (viewportHeight - DIV_HEIGHT) / 2);
    }
    setHasRestored(true);

    scrollEnabledRef.current = false;
    setTimeout(() => {
      scrollEnabledRef.current = true;
      // console.log("Scroll handling re-enabled");
    }, 1100);
  }

  useEffect(() => {
    function updateBoundsAndCenter() {
      const container = containerRef.current;
      if (!container) return;

      const viewportWidth = container.offsetWidth;
      const viewportHeight = container.offsetHeight;

      const maxOffsetX = DIV_WIDTH - viewportWidth;
      const maxOffsetY = DIV_HEIGHT - viewportHeight;

      setConstraints({
        left: -maxOffsetX,
        right: 0,
        top: -maxOffsetY,
        bottom: 0,
      });

      restorePosition();
    }

    updateBoundsAndCenter();
    window.addEventListener("resize", updateBoundsAndCenter);
    return () => window.removeEventListener("resize", updateBoundsAndCenter);
  }, [x, y]);

  useEffect(() => {
    function handleWheel(e: WheelEvent) {
      if (!hasRestored) {
        // console.log("Blocked wheel because position not restored yet");
        return;
      }

      if (!scrollEnabledRef.current) {
        // console.log("Blocked wheel: momentum scroll blocked");
        e.preventDefault();
        return;
      }

      e.preventDefault();

      const newX = clamp(
        x.get() - e.deltaX,
        constraints.left,
        constraints.right,
      );
      const newY = clamp(
        y.get() - e.deltaY,
        constraints.top,
        constraints.bottom,
      );

      // console.log("scrolling to:", newX, newY, e.deltaX, e.deltaY);

      x.set(newX);
      y.set(newY);
      savePosition();
    }

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, [x, y, constraints]);

  const isTouchDevice =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  return (
    <div
      ref={containerRef}
      role={role}
      style={{
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
        transform: "translateZ(0)",
        cursor: "move",
      }}
    >
      {hasRestored && (
        <motion.div
          drag
          dragElastic={isTouchDevice ? undefined : 0}
          dragMomentum={isTouchDevice ? undefined : false}
          dragConstraints={constraints}
          onDragEnd={() => {
            savePosition();
            // console.log("dragged to:", x.get(), y.get());
          }}
          style={{
            width: DIV_WIDTH,
            height: DIV_HEIGHT,
            x,
            y,
            backgroundImage: `
            linear-gradient(to right, var(--secondary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--secondary) 1px, transparent 1px)
          `,
            backgroundSize: "25px 25px",
            zIndex: -1,
          }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

const clamp = (val: number, min: number, max: number) =>
  Math.max(min, Math.min(max, val));

export default Canvas;
