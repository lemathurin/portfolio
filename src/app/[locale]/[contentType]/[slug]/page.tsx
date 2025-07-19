import { getMDXContent } from "@/lib/mdx";

export async function generateStaticParams() {
  // This will generate static paths for all content types and their files
  // You can implement this based on your build requirements
  return [];
}

export default async function ContentPage({
  params,
}: {
  params: { locale: string; contentType: string; slug: string };
}) {
  const { locale, contentType, slug } = await Promise.resolve(params);

  const { content, frontmatter } = await getMDXContent({
    locale,
    contentType,
    slug,
  });

  return content;
}
