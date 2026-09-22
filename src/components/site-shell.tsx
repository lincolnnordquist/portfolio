import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function SiteShell({
  background,
  children,
}: {
  background?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      data-theme="zelda"
      className="theme-surface relative flex min-h-full flex-1 flex-col text-foreground"
    >
      {background}
      <div className="relative z-10 flex min-h-full flex-1 flex-col">
        <Nav />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
