"use client";

import Image from "next/image";
import Canvas from "@/components/Canvas";
import { Link } from "@/i18n/navigation";
import Clock from "@/components/Clock";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";

export default function CanvasPage() {
  const t = useTranslations();

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-40 border-b-[1px] border-[var(--quaternary)] bg-[var(--bg-primary)] p-2.5 sm:p-5">
        <div className="mx-auto flex w-full max-w-lg">
          <Header />
        </div>
      </div>
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
          {t("canvasPage.scrollHint")}
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
            src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwXliqVsBCbbFRm7wShzYQZJ4WeOX8q02spPHKE"
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
            src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwX1wRGlfIRHdtW9MuSenZ7CN360Bwy8IpQijUb"
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
            src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwXcbArxXFWPh3xNZjmzVMS5t9QDGin0YqvX2lw"
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
            {t("canvasPage.profileYears")}
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
            src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwX2zP6Isjab2JnoGdL156AWIvsmt0jQPpKyFz8"
            alt={t("canvasPage.skytreeAlt")}
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
            src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwXHSk6BSAi8sevGcB4FyxCY9AX7lOpHVJzWb6f"
            alt={t("canvasPage.boatAlt")}
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
            src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwXZOH8OaCSLlRducqbNZgY7F3QVhKp02nC4JrI"
            alt={t("canvasPage.sunsetAlt")}
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
            {t("canvasPage.nicePictures")}
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
            src="https://5q44w9bzpv.ufs.sh/f/vqzvWuhpJmwXXGT3V6tgs8zZdmwB31rtVQfjMYHnJCTbkAFD"
            alt={t("canvasPage.portfolioV1Alt")}
            width={500}
            height={500}
            className="shadow-lg"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "rotate(-2deg)",
            }}
          />
          <Link
            href="/projects/portfolio-v1"
            style={{
              position: "absolute",
              left: 200,
              top: 330,
              transform: "rotate(1deg)",
            }}
          >
            {t("canvasPage.oldPortfolio")}
          </Link>
        </section>
      </Canvas>
      <footer className="fixed right-0 bottom-0 left-0 z-40 border-t-[1px] border-[var(--quaternary)] bg-[var(--bg-primary)] p-2.5 sm:p-5">
        <div className="mx-auto flex w-full max-w-lg flex-row items-center justify-between">
          <Clock />
          <Link
            href="/canvas/accessible"
            className="cursor-pointer text-sm text-[var(--primary)]"
          >
            {t("canvasPage.accessibleVersion")}
          </Link>
        </div>
      </footer>
    </>
  );
}
