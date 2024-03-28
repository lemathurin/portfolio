import * as React from "react";

export function CaseStudyVideo({ videoPath }) {
  return (
    <video autoPlay loop muted playsInline>
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
    <div className="mt-3 flex flex-col gap-1">
      <h3 className="font-inter text-lightMode-text text-xl font-semibold">
        {projectType}
      </h3>
      <h3 className="font-inter text-lightMode-text text-xl font-semibold">
        {duration}
      </h3>
      <a
        href={link}
        className="font-inter text-lightMode-hoveredtext hover:text-lightMode-text hover:underline text-xl font-semibold w-max"
      >
        {linkName}
      </a>
    </div>
  );
}

export function CaseStudyLink({ text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lightMode-hoveredtext hover:text-lightMode-text hover:underline w-max font-inter mt-2"
    >
      {text}
    </a>
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
        <li key={index} className="w-max font-inter text-lg">
          {item.link ? (
            <a
              href={item.link}
              className="text-lightMode-hoveredtext hover:text-lightMode-text hover:underline font-inter"
            >
              {item.name}
            </a>
          ) : (
            <span className="text-lightMode-text">{item.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
