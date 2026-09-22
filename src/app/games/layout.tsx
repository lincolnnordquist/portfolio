import SiteShell from "@/components/site-shell";

export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell theme="nintendo">{children}</SiteShell>;
}
