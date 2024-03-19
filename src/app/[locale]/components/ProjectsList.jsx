"use client";

import { ReactLabel, TailwindLabel } from "../components/Labels";

export default function ProjectsList(props) {
  return (
    <div className="w-screen flex md:items-start md:justify-center">
      <div className="flex flex-col items-start gap-5 p-10 pb-36 w-full max-w-[700px] *:w-full *:flex *:flex-col *:md:flex *:md:flex-row *:md:justify-between *:md:items-center *:md:content-center">
        <div>
          <h2 className="font-instrument text-3xl text-lightMode-text hover:underline hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition">
            {props.portfolio}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.personalproject}
          </p>
        </div>
        <div>
          <h2 className="font-instrument text-3xl text-lightMode-text hover:underline hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition">
            {props.ecommerce}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.schoolproject}
          </p>
        </div>
        <div>
          <h2 className="font-instrument text-3xl text-lightMode-text hover:underline hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition">
            {props.dataviz}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.schoolproject}
          </p>
        </div>
        <div>
          <h2 className="font-instrument text-3xl text-lightMode-text hover:underline hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition">
            {props.chromeextension}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.schoolproject}
          </p>
        </div>
        <div>
          <h2 className="font-instrument text-3xl text-lightMode-text hover:underline hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition">
            {props.pico8game}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.schoolproject}
          </p>
        </div>
        <div>
          <h2 className="font-instrument text-3xl text-lightMode-text hover:underline hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition">
            {props.presenterapp}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.personalproject}
          </p>
        </div>
        <div>
          <h2 className="font-instrument text-3xl text-lightMode-text hover:underline hover:-rotate-3 origin-bottom-left hover:text-lightMode-hoveredtext transition">
            {props.phpsocialnetwork}
          </h2>
          <p className="font-inter text-xl text-lightMode-text font-extralight">
            {props.schoolproject}
          </p>
        </div>
      </div>
      <ReactLabel />
      <TailwindLabel />
    </div>
  );
}
