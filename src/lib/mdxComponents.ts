import React from "react";
import { Link } from "@/i18n/navigation";

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

const CustomImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return React.createElement(
    "a",
    {
      href: props.src,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    React.createElement("img", props),
  );
};

export const mdxComponents = {
  a: CustomLink,
  Image: CustomImage,
};
