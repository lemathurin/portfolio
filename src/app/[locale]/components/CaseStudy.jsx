import * as React from "react";

export function CaseStudyVideo({ videoPath }) {
  return (
    <video autoPlay loop muted>
      <source width={"100%"} src={videoPath} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export function CaseStudyTitle({ title }) {
  return (
    <h1 className="mt-14 font-instrument text-lightMode-text text-5xl">
      {title}
    </h1>
  );
}

export function CaseStudyDetails({ projectType, duration, linkName, link }) {
  return (
    <description className="mt-3 flex flex-col gap-1">
      <h3 className="font-inter italic text-lightMode-text text-xl font-semibold">
        {projectType}
      </h3>
      <h3 className="font-inter italic text-lightMode-text text-xl font-semibold">
        {duration}
      </h3>
      <a
        href={link}
        className="font-inter text-lightMode-hoveredtext hover:text-lightMode-text hover:underline text-xl font-semibold"
      >
        {linkName}
      </a>
    </description>
  );
}

export function CaseStudyParagraph({ text }) {
  return <p className="mt-3 font-inter text-lightMode-text text-lg">{text}</p>;
}

export function CaseStudyH2({ title }) {
  return (
    <h2 className="mt-14 font-instrument text-lightMode-text text-4xl">
      {title}
    </h2>
  );
}

export function CaseStudyList({ items }) {
  return (
    <ul className="mt-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="w-max font-inter text-lightMode-hoveredtext hover:text-lightMode-text hover:underline text-lg"
        >
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
