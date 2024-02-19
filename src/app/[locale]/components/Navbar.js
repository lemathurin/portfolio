"use client";

import Link from "next/link";
import "../components/Navbar.css";
import Image from "next/image";
import { useState } from "react";

export default function NavBar(props) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className="entire-navbar">
      {isButtonHovered && (
        <div className="project-dropdown">
          <div className="project-left dropdown-boxes">
            <h3 className="dropdown-text">{props.presenterApp}</h3>
            <Image
              className="shadow"
              src="/images/presenter_app.png"
              width={400}
              height={210}
              alt="Screenshot of the unfinished project"
            />
          </div>
          <div className="project-right-section">
            <div className="project-right-small dropdown-boxes">
              <h3 className="dropdown-text">{props.pico8}</h3>
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
            <div className="project-right-small dropdown-boxes">
              <h3 className="dropdown-text">{props.moreProjects}</h3>
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
      )}
      <ol className="menu-button-container">
        <Link href="/">
          <li className="menu-button cursor-cell">
            <span className="menu-text" href="/">
              {props.language}
            </span>
          </li>
        </Link>
        <Link href="/">
          <li
            className="menu-button"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            <span className="menu-text" href="/">
              {props.projects}
            </span>
          </li>
        </Link>{" "}
        <Link href="/">
          <li className="menu-button">
            <span className="menu-text" href="/">
              {props.notes}
            </span>
          </li>
        </Link>{" "}
        <Link href="/">
          <li className="menu-button">
            <span className="menu-text" href="/">
              {props.contact}
            </span>
          </li>
        </Link>
      </ol>
    </div>
  );
}
