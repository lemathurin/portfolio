"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

interface InteractiveCanvasProps {
  children: React.ReactNode;
}

const InteractiveCanvas: React.FC<InteractiveCanvasProps> = ({ children }) => {
  const DIV_WIDTH = 2500;
  const DIV_HEIGHT = 2500;

  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    const updateBoundsAndCenter = () => {
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

      // Center the canvas initially
      x.set(clamp((viewportWidth - DIV_WIDTH) / 2, -maxOffsetX, 0));
      y.set(clamp((viewportHeight - DIV_HEIGHT) / 2, -maxOffsetY, 0));
    };

    updateBoundsAndCenter();
    window.addEventListener("resize", updateBoundsAndCenter);
    return () => window.removeEventListener("resize", updateBoundsAndCenter);
  }, [x, y]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      x.set(clamp(x.get() - e.deltaX, constraints.left, constraints.right));
      y.set(clamp(y.get() - e.deltaY, constraints.top, constraints.bottom));
    };

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
      style={{
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
      }}
    >
      <motion.div
        drag
        dragElastic={isTouchDevice ? undefined : 0}
        dragMomentum={isTouchDevice ? undefined : false}
        dragConstraints={constraints}
        style={{
          width: DIV_WIDTH,
          height: DIV_HEIGHT,
          x,
          y,
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const clamp = (val: number, min: number, max: number) =>
  Math.max(min, Math.min(max, val));

export default InteractiveCanvas;
