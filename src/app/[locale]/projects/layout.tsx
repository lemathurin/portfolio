import LanguageToggle from "@/components/LanguageToggle";
import { Link } from "@/i18n/navigation";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex justify-center p-5 md:p-0 md:py-9">
      <div className="flex max-w-lg flex-col gap-9 text-justify">
        <header className="flex w-full items-center justify-between gap-4">
          <Link href="/" className="text-sm">
            <span style={{ fontFamily: "system-ui, Arial, sans-serif" }}>
              ←
            </span>{" "}
            home
          </Link>
          <LanguageToggle />
        </header>
        <article className="prose prose-stone dark:prose-invert">
          {children}
        </article>
      </div>
    </main>
  );
}
