import { getMDXContent, getContentTypes } from "@/lib/mdx";
import fs from "node:fs/promises";
import path from "node:path";

export async function generateStaticParams() {
  const contentTypes = await getContentTypes();
  const locales = ["en", "fr"];
  const params = [];

  for (const contentType of contentTypes) {
    for (const locale of locales) {
      try {
        const contentDir = path.join(
          process.cwd(),
          "content",
          contentType,
          locale,
        );
        const files = await fs.readdir(contentDir);
        const mdxFiles = files
          .filter((file) => file.endsWith(".mdx"))
          .map((file) => file.replace(".mdx", ""));

        for (const slug of mdxFiles) {
          params.push({
            contentType,
            slug,
            locale,
          });
        }
      } catch {
        continue;
      }
    }
  }

  return params;
}

export default async function ContentPage({
  params,
}: {
  params: { locale: string; contentType: string; slug: string };
}) {
  const { locale, contentType, slug } = await Promise.resolve(params);

  const { content } = await getMDXContent({
    locale,
    contentType,
    slug,
  });

  return content;
}
