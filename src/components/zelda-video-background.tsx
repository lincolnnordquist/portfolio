"use client";

import { useEffect, useState } from "react";
import { getRandomZeldaClip, type ZeldaClip } from "@/lib/zelda-clips";

export default function ZeldaVideoBackground() {
  const [clip, setClip] = useState<ZeldaClip | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Random pick + matchMedia are client-only reads with no server-render
    // equivalent - picking during render would either crash on the server
    // or produce a hydration mismatch, so this has to happen in an effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setClip(getRandomZeldaClip());
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
  }, []);

  if (!clip) return null;

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
