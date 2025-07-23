import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContentTypes } from "@/lib/mdxLoader";
import { compileMDX } from "next-mdx-remote/rsc";
import { getTranslations } from "next-intl/server";
import { FrontmatterModel } from "@/types/content";

interface PageProps {
  params: Promise<{
    locale: string;
    contentType: string;
  }>;
}

export default async function ContentTypePage({ params }: PageProps) {
  const { locale, contentType } = await params;
  const t = await getTranslations();

  const availableTypes = await getContentTypes();
  if (!availableTypes.includes(contentType)) {
    return notFound();
  }

  const dirPath = path.join(process.cwd(), "content", contentType, locale);

  let files: string[];
  try {
    files = await fs.readdir(dirPath);
  } catch {
    return notFound();
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

  const validEntries = (
    entries.filter(Boolean) as {
      title: string;
      slug: string;
      date: string;
      description?: string;
      stack?: string[];
    }[]
  ).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime(); // descending
  });

  if (validEntries.length === 0) {
    return notFound();
  }

  return (
    <main>
      <h1 className="mb-[0.5em] font-serif text-[2.5rem]">{t("projects")}</h1>
      <section className="flex flex-col gap-5">
        {validEntries.map(({ title, slug, description, stack = [] }) => (
          <article key={slug}>
            <h2>
              <Link href={`/${locale}/${contentType}/${slug}`}>{title}</Link>
            </h2>
            <p className="mt-1 text-sm">{description}</p>
            <p className="text-sm text-[var(--secondary)]">
              {stack.join(", ")}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
