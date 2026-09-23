export interface ZeldaClip {
  slug: string;
  label: string;
  src: string;
  poster: string;
}

const CLIP_LABELS: Record<string, string> = {
  "astral-observatory": "Astral Observatory",
  "clock-town": "Clock Town",
  "hyrule-field": "Hyrule Field",
  kakariko: "Kakariko Village",
  "laundry-pool": "Laundry Pool",
  stable: "Stable",
  "temple-of-time": "Temple of Time",
  "tp-fountain": "Fountain",
  "zoras-domain": "Zora's Domain",
};

export type ZeldaClipSlug = keyof typeof CLIP_LABELS;

export const ZELDA_CLIPS: ZeldaClip[] = Object.entries(CLIP_LABELS).map(
  ([slug, label]) => ({
    slug,
    label,
    src: `/zelda-backgrounds/${slug}.mp4`,
    poster: `/zelda-backgrounds/posters/${slug}.jpg`,
  }),
);

export function getZeldaClip(slug: ZeldaClipSlug): ZeldaClip {
  const clip = ZELDA_CLIPS.find((c) => c.slug === slug);
  if (!clip) {
    throw new Error(`Unknown Zelda clip slug: "${slug}"`);
  }
  return clip;
}
