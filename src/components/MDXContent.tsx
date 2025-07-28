import { cache } from "react";
import { getLocale } from "next-intl/server";
import { getOtherMDXContent } from "@/lib/mdxLoader";

interface MDXContentProps {
  src: string;
}

const getMDXContent = cache(async (src: string, locale: string) => {
  return await getOtherMDXContent({ src, locale });
});

export default async function MDXContent({ src }: MDXContentProps) {
  const locale = await getLocale();
  const { content } = await getMDXContent(src, locale);

  return content;
}
