"use client";

import { useEffect, useState } from "react";
import { getZeldaClip, type ZeldaClipSlug } from "@/lib/zelda-clips";

export default function ZeldaVideoBackground({
  clip: clipSlug,
}: {
  clip: ZeldaClipSlug;
}) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // prefers-reduced-motion is a client-only read with no server-render
    // equivalent, so this has to happen in an effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const clip = getZeldaClip(clipSlug);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {reducedMotion ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={clip.poster}
          alt=""
          className="h-full w-full object-cover"
        />
      ) : (
        <video
          key={clip.slug}
          className="h-full w-full object-cover"
          src={clip.src}
          poster={clip.poster}
          autoPlay
          muted
          loop
          playsInline
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
    </div>
  );
}
