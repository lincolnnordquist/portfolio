import SiteShell from "@/components/site-shell";
import ZeldaVideoBackground from "@/components/zelda-video-background";

export default function ZeldaPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteShell background={<ZeldaVideoBackground />}>{children}</SiteShell>
  );
}
