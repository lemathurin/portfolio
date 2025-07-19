import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = await Promise.resolve(params);

  const filePath = path.join(
    process.cwd(),
    "content",
    "projects",
    locale,
    `${slug}.mdx`,
  );

  let mdxSource: string;
  try {
    mdxSource = await fs.readFile(filePath, "utf-8");
  } catch (err) {
    return notFound();
  }

  const { content } = await compileMDX({
    source: mdxSource,
    options: { parseFrontmatter: true },
  });

  return content;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = await Promise.resolve(params);

  const filePath = path.join(
    process.cwd(),
    "content",
    "projects",
    locale,
    `${slug}.mdx`,
  );

  try {
    const mdxSource = await fs.readFile(filePath, "utf-8");
    const { frontmatter } = await compileMDX({
      source: mdxSource,
      options: { parseFrontmatter: true },
    });

    return {
      title: frontmatter?.title ?? "Project",
    };
  } catch {
    return {
      title: "Project Not Found",
    };
  }
}
