import { ImageResponse } from "next/og";
import { getMDXContent } from "@/lib/mdxLoader";
import fs from "node:fs/promises";
import path from "node:path";
import { getTranslations } from "next-intl/server";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export default async function Image({
  params,
}: {
  params: { locale: string; contentType: string; slug: string };
}) {
  const { locale, contentType, slug } = await params;
  const t = await getTranslations({ locale });

  try {
    const { frontmatter } = await getMDXContent({
      locale,
      contentType,
      slug,
    });

    // Truncate description to fit in 2-3 lines (approximately 120-150 characters)
    const maxLength = 104;
    const truncatedDescription =
      frontmatter.description && frontmatter.description.length > maxLength
        ? frontmatter.description.substring(0, maxLength).trim() + "..."
        : frontmatter.description;

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            padding: "40px 333px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            backgroundColor: "#FCFCFD",
          }}
        >
          <span
            style={{
              color: "#52575C",
              fontFamily: "Inter",
              fontSize: 32,
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            {t(`${contentType}`)}
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              alignSelf: "stretch",
            }}
          >
            <h1
              style={{
                color: "#252B31",
                fontFamily: "Instrument Serif",
                fontSize: 75,
                lineHeight: "100%",
              }}
            >
              {frontmatter.title}
            </h1>
            <p
              style={{
                color: "#252B31",
                fontFamily: "Inter",
                fontSize: 36,
                lineHeight: "1.2",
              }}
            >
              {truncatedDescription}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* Add an image when possible */}
            <span
              style={{ color: "#52575C", fontFamily: "Inter", fontSize: 32 }}
            >
              Mathurin Sekine
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Instrument Serif",
            data: await loadGoogleFont("Instrument+Serif", frontmatter.title),
            weight: 400,
            style: "normal",
          },
          {
            name: "Inter",
            data: await loadGoogleFont("Inter", frontmatter.description || ""),
            weight: 400,
            style: "normal",
          },
        ],
      },
    );
  } catch {
    const defaultOgImage = await fs.readFile(
      path.join(process.cwd(), "public", "og-image.webp"),
    );
    return new Response(defaultOgImage, {
      headers: { "Content-Type": "image/webp" },
    });
  }
}
