"use client";

import Image from "next/image";
import Canvas from "@/components/Canvas";
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import Clock from "@/components/Clock";
import { useTranslations } from "next-intl";

export default function CanvasPage() {
  const t = useTranslations();

  return (
    <>
      <header className="bg-primary fixed top-0 right-0 left-0 z-40 flex w-full items-center justify-between gap-4 p-2 dark:mix-blend-difference">
        <LanguageToggle />
        <Link
          href="/canvas/accessible"
          className="cursor-pointer font-mono text-sm underline opacity-70 hover:no-underline hover:opacity-100"
        >
          {t("canvas.accessibleVersion")}
        </Link>
      </header>
      <Canvas role="main">
        <h1
          style={{
            position: "absolute",
            left: 1250,
            top: 1250,
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            fontFamily: "var(--font-mono)",
            whiteSpace: "nowrap",
          }}
        >
          {t("canvas.scrollHint")}
        </h1>
        <section
          className="relative"
          style={{
            left: 1250,
            top: 700,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/me-2016.png"
            alt="Avatar 2016"
            width={250}
            height={250}
            className="shadow-lg"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "rotate(-5deg)",
            }}
          />
          <Image
            src="/me-2022.png"
            alt="Avatar 2022"
            width={250}
            height={250}
            className="shadow-lg"
            style={{
              position: "absolute",
              left: 235,
              top: 20,
              transform: "rotate(5deg)",
            }}
          />
          <Image
            src="/me-2025.png"
            alt="Avatar 2025"
            width={250}
            height={250}
            className="shadow-lg"
            style={{
              position: "absolute",
              left: 470,
              top: 10,
              transform: "rotate(-3deg)",
            }}
          />
          <p
            style={{
              position: "absolute",
              left: 150,
              top: 300,
              transform: "rotate(2deg)",
            }}
          >
            {t("canvas.profileYears")}
          </p>
        </section>
        <section
          className="relative"
          style={{
            left: 450,
            top: 1600,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/skytree.jpeg"
            alt={t("canvas.skytreeAlt")}
            width={500}
            height={500}
            className="shadow-lg"
            style={{
              position: "absolute",
              left: -30,
              top: 40,
              transform: "rotate(-5deg)",
            }}
          />
          <Image
            src="/boat.jpeg"
            alt={t("canvas.boatAlt")}
            width={800}
            height={800}
            className="shadow-lg"
            style={{
              position: "absolute",
              left: 480,
              top: 50,
              transform: "rotate(2deg)",
            }}
          />

          <Image
            src="/sunset.jpeg"
            alt={t("canvas.sunsetAlt")}
            width={500}
            height={500}
            className="shadow-lg"
            style={{
              position: "absolute",
              left: -200,
              top: -600,
              transform: "rotate(2deg)",
            }}
          />
          <p
            style={{
              position: "absolute",
              left: 550,
              top: 0,
              transform: "rotate(2deg)",
            }}
          >
            {t("canvas.nicePictures")}
          </p>
        </section>
        <section
          className="relative"
          style={{
            left: 1750,
            top: 1200,
          }}
        >
          <Image
            src="/portfolio-v1.png"
            alt={t("canvas.portfolioV1Alt")}
            width={500}
            height={500}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "rotate(-2deg)",
              pointerEvents: "none",
            }}
          />
          <p
            style={{
              position: "absolute",
              left: 200,
              top: 350,
              transform: "rotate(1deg)",
            }}
          >
            {t("canvas.oldPortfolio")}
          </p>
        </section>
      </Canvas>
      <footer className="bg-primary fixed right-0 bottom-0 left-0 z-40 flex w-full items-center justify-between gap-4 p-2 dark:mix-blend-difference">
        <Link
          href="/"
          className="cursor-pointer font-mono text-sm underline opacity-70 hover:no-underline hover:opacity-100"
        >
          <span style={{ fontFamily: "system-ui, Arial, sans-serif" }}>←</span>{" "}
          {t("canvas.homeLink")}
        </Link>
        <Clock />
      </footer>
    </>
  );
}
