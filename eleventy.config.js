import EleventyPluginOgImage from "eleventy-plugin-og-image";
import markdownIt from "markdown-it";
import markdownItLinkAttributes from "markdown-it-link-attributes";
import fs from "fs";

/** @param { import('@11ty/eleventy/src/UserConfig').default } eleventyConfig */
export default async function (eleventyConfig) {
  // Add the OG Image plugin
  eleventyConfig.addPlugin(EleventyPluginOgImage, {
    satoriOptions: {
      fonts: [
        {
          name: "Inter",
          data: fs.readFileSync("fonts/Inter-Regular.woff2"),
          weight: 400,
          style: "normal",
        },
        {
          name: "Instrument",
          data: fs.readFileSync("fonts/InstrumentSerif-Regular.woff2"),
          weight: 400,
          style: "normal",
        },
      ],
    },
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy("styles.css");

  // Copy fonts folder
  eleventyConfig.addPassthroughCopy("fonts");

  // Enable HTML inside Markdown with link attributes
  let markdownLib = markdownIt({
    html: true,
    linkify: true,
  }).use(markdownItLinkAttributes, {
    matcher(href) {
      // Only add attrs if href starts with "http" and is NOT your own domain
      return href.startsWith("http") && !href.includes("yourdomain.com");
    },
    attrs: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  });

  eleventyConfig.setLibrary("md", markdownLib);

  // Collections by locale
  eleventyConfig.addCollection("projects_en", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("content/projects/en/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date)),
  );
  eleventyConfig.addCollection("projects_fr", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("content/projects/fr/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date)),
  );
  eleventyConfig.addCollection("experiences_en", (collectionApi) =>
    collectionApi.getFilteredByGlob("content/experiences/en/*.md"),
  );
  eleventyConfig.addCollection("experiences_fr", (collectionApi) =>
    collectionApi.getFilteredByGlob("content/experiences/fr/*.md"),
  );

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "dist",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
}
