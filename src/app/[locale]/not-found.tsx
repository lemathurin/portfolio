import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MDXContent from "@/components/MDXContent";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-col justify-center gap-9 p-5 md:p-0 md:py-5">
      <Header isNotFoundPage={true} />
      <article className="prose">
        <MDXContent src="404.mdx" />
      </article>
      <Footer />
    </main>
  );
}
