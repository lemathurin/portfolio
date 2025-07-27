import React from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export const CustomLink = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
  const { href, children, ...rest } = props;
  const isExternal = href && (href.startsWith("http") || href.startsWith("//"));

  if (isExternal) {
    return React.createElement(
      "a",
      {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        ...rest,
      },
      children,
    );
  }

  return React.createElement(Link, { href: href || "", ...rest }, children);
};

const CustomImage = (props: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) => {
  const width = props.width || 512;
  const height = props.height || 302;

  return React.createElement(
    "a",
    {
      href: props.src,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    React.createElement(Image, {
      src: props.src,
      alt: props.alt,
      width,
      height,
      loading: "eager",
    }),
  );
};

const TLDR = ({ children }: { children: React.ReactNode }) => {
  return React.createElement(
    "aside",
    {
      "aria-labelledby": "tldr-heading",
      className: "tldr",
    },
    [children],
  );
};

export const mdxComponents = {
  a: CustomLink,
  Image: CustomImage,
  TLDR,
};
