import SiteShell from "@/components/site-shell";
import ZeldaVideoBackground from "@/components/zelda-video-background";
import type { ZeldaClipSlug } from "@/lib/zelda-clips";

export default function ZeldaPage({
  clip,
  children,
}: {
  clip: ZeldaClipSlug;
  children: React.ReactNode;
}) {
  return (
    <SiteShell background={<ZeldaVideoBackground clip={clip} />}>
      {children}
    </SiteShell>
  );
}
