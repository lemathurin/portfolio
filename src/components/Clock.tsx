"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setMounted(true); // Mark as mounted
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null; // Don't render on server

  return (
    <span className="font-mono text-sm" aria-label="Current time in Nantes">
      Nantes -{" "}
      {currentTime.toLocaleTimeString("fr-FR", {
        timeZone: "Europe/Paris",
        // hour: "2-digit",
        // minute: "2-digit",
      })}
    </span>
  );
}
