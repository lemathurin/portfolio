import { getMDXContent, getContentTypes } from "@/lib/mdxLoader";
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

interface PageProps {
  params: Promise<{
    locale: string;
    contentType: string;
    slug: string;
  }>;
}

export default async function ContentPage({ params }: PageProps) {
  const { locale, contentType, slug } = await params;

  const { content } = await getMDXContent({
    locale,
    contentType,
    slug,
  });

  return <article className="prose w-full">{content}</article>;
}
