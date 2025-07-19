import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export type ContentType = "projects" | "canvas" | "articles";

export async function getContentTypes(): Promise<string[]> {
  try {
    const contentDir = path.join(process.cwd(), "content");
    const entries = await fs.readdir(contentDir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);
  } catch {
    return [];
  }
}

export interface MDXParams {
  locale: string;
  contentType: string;
  slug: string;
}

export async function getMDXContent({ locale, slug, contentType }: MDXParams) {
  const availableTypes = await getContentTypes();
  if (!availableTypes.includes(contentType)) {
    return notFound();
  }

  const filePath = path.join(
    process.cwd(),
    "content",
    contentType,
    locale,
    `${slug}.mdx`,
  );

  let mdxSource: string;
  try {
    mdxSource = await fs.readFile(filePath, "utf-8");
  } catch {
    return notFound();
  }

  const { content, frontmatter } = await compileMDX({
    source: mdxSource,
    options: { parseFrontmatter: true },
  });

  return { content, frontmatter };
}
