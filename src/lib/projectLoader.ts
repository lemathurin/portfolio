import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import { FrontmatterModel } from "@/types/content";

export interface ProjectEntry {
  title: string;
  slug: string;
  date: string;
  description?: string;
  stack?: string[];
}

export async function getLatestProjects(
  locale: string,
  limit?: number,
): Promise<ProjectEntry[]> {
  const contentType = "projects";
  const dirPath = path.join(process.cwd(), "content", contentType, locale);

  let files: string[];
  try {
    files = await fs.readdir(dirPath);
  } catch {
    return [];
  }

  const entries = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const fullPath = path.join(dirPath, file);
        const source = await fs.readFile(fullPath, "utf-8");

        try {
          const { frontmatter } = await compileMDX<FrontmatterModel>({
            source,
            options: { parseFrontmatter: true },
          });

          return {
            title: frontmatter.title,
            slug: frontmatter.slug,
            date: frontmatter.date,
            description: frontmatter.description,
            stack: frontmatter.stack,
          };
        } catch {
          return null;
        }
      }),
  );

  const validEntries = (entries.filter(Boolean) as ProjectEntry[]).sort(
    (a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    },
  );

  return limit ? validEntries.slice(0, limit) : validEntries;
}
