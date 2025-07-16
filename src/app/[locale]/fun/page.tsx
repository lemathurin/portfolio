"use client";

import Image from "next/image";
import Canvas from "@/components/Canvas";
import Link from "next/link";

export default function FunPage() {
  return (
    <Canvas>
      <h1
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          pointerEvents: "none",
          fontFamily: "var(--font-mono)",
        }}
      >
        scroll around the page
      </h1>
      <div
        className="relative"
        style={{
          left: 1250,
          top: 700,
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
          My profile throughout the years. (2016, 2022, 2025)
        </p>
      </div>
      <div
        className="relative"
        style={{
          left: 450,
          top: 1600,
        }}
      >
        <Image
          src="/skytree.jpeg"
          alt="A photo of the Tokyo Skytree against a bright blue sky."
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
          alt="A photo of a boat of the coast of an island with mountains."
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
          alt="A photo of a man walking on a beach with the sunset behind him."
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
          some nice pictures I took
        </p>
      </div>
      <div
        className="relative"
        style={{
          left: 1750,
          top: 1200,
        }}
      >
        <Image
          src="/portfolio-v1.png"
          alt="A screenshot of my first portfolio."
          width={500}
          height={500}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "rotate(-2deg)",
          }}
        />
        <Link
          target="_blank"
          href="#"
          style={{
            position: "absolute",
            left: 200,
            top: 350,
            transform: "rotate(1deg)",
          }}
        >
          my old portfolio
        </Link>
      </div>
    </Canvas>
  );
}
