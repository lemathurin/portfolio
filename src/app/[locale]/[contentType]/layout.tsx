import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-col gap-9 p-5 md:p-0 md:py-9">
      <Header />
      <article className="prose w-full">{children}</article>
      <Footer />
    </main>
  );
}
