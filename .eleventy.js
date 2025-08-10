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
          data: fs.readFileSync("src/assets/fonts/Inter-Regular.woff2"),
          weight: 400,
          style: "normal",
        },
        {
          name: "Instrument",
          data: fs.readFileSync(
            "src/assets/fonts/InstrumentSerif-Regular.woff2",
          ),
          weight: 400,
          style: "normal",
        },
      ],
    },
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

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

  eleventyConfig.addCollection("projects_en", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("src/content/projects/en/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date)),
  );
  eleventyConfig.addCollection("projects_fr", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("src/content/projects/fr/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date)),
  );

  eleventyConfig.addCollection("experiences_en", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/content/experiences/en/*.md"),
  );
  eleventyConfig.addCollection("experiences_fr", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/content/experiences/fr/*.md"),
  );

  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
}
