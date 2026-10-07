import Nav from "@/components/nav";
import Footer from "@/components/footer";
import type { Theme } from "@/lib/themes";

export default function SiteShell({
  theme,
  children,
}: {
  theme: Theme;
  children: React.ReactNode;
}) {
  return (
    <div
      data-theme={theme}
      className="theme-surface flex min-h-full flex-1 flex-col text-foreground"
    >
      <Nav theme={theme} />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
