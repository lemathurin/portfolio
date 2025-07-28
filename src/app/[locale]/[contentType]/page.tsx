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

  if (contentType === "other") {
    return notFound();
  }

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
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  if (validEntries.length === 0) {
    return notFound();
  }

  const entriesByYear: Record<string, typeof validEntries> = {};
  validEntries.forEach((entry) => {
    const year = new Date(entry.date).getFullYear().toString();
    if (!entriesByYear[year]) {
      entriesByYear[year] = [];
    }
    entriesByYear[year].push(entry);
  });

  const sortedYears = Object.keys(entriesByYear).sort(
    (a, b) => parseInt(b) - parseInt(a),
  );

  return (
    <section className="flex flex-col">
      <h1 className="mb-[0.5em] font-serif text-[2.5rem]">{t("projects")}</h1>
      {sortedYears.map((year) => (
        <section className="flex flex-col" key={year}>
          <div className="mb-1 flex items-center gap-5">
            <h2 className="font-mono text-[var(--secondary)]">{year}</h2>
            <hr />
          </div>
          {entriesByYear[year].map(
            ({ title, slug, description, stack = [] }) => (
              <article key={slug}>
                <h3 className="font-serif text-[1.8rem]">
                  <Link href={`/${locale}/${contentType}/${slug}`}>
                    {title}
                  </Link>
                </h3>
                <p className="mt-1 line-clamp-3">{description}</p>
                <p className="mb-5 text-sm text-[var(--secondary)]">
                  {stack.join(", ")}
                </p>
              </article>
            ),
          )}
        </section>
      ))}
    </section>
  );
}
