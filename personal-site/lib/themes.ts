export type ThemeId =
  | "base"
  | "nintendo"
  | "onepiece"
  | "seahawks"
  | "darkfantasy"
  | "minecraft"

export type ThemeMeta = {
  id: ThemeId
  /** Fandom label shown on badges. `null` for the neutral professional chrome. */
  label: string | null
  /** Short blurb describing the vibe. */
  blurb: string
}

export const THEMES: Record<ThemeId, ThemeMeta> = {
  base: {
    id: "base",
    label: null,
    blurb: "Neutral, understated chrome.",
  },
  nintendo: {
    id: "nintendo",
    label: "Nintendo",
    blurb: "Bright, adventurous, retro-game inspired.",
  },
  onepiece: {
    id: "onepiece",
    label: "One Piece",
    blurb: "Bold, high-energy, ocean adventure.",
  },
  seahawks: {
    id: "seahawks",
    label: "Seahawks",
    blurb: "Navy, action green and silver. Loud and sporty.",
  },
  darkfantasy: {
    id: "darkfantasy",
    label: "Dark Fantasy",
    blurb: "Moody, gothic, high-contrast and rune-etched.",
  },
  minecraft: {
    id: "minecraft",
    label: "Minecraft",
    blurb: "Blocky, earthy, pixel-art inspired.",
  },
}

export const FANDOM_THEME_IDS: ThemeId[] = [
  "nintendo",
  "onepiece",
  "seahawks",
  "darkfantasy",
  "minecraft",
]

/**
 * Manual per-page theme assignment. Every route is themed — there is no
 * neutral chrome anymore. Matching is longest-prefix, so `/blog` and every
 * post under it share one theme, and likewise for `/games`.
 * Tweak a value here to reskin that whole section.
 */
const ROUTE_THEMES: { prefix: string; theme: ThemeId }[] = [
  { prefix: "/about", theme: "darkfantasy" },
  { prefix: "/work", theme: "minecraft" },
  { prefix: "/blog", theme: "onepiece" },
  { prefix: "/games", theme: "nintendo" },
  { prefix: "/", theme: "seahawks" },
]

export function getThemeForPath(pathname: string): ThemeId {
  const match = ROUTE_THEMES.find(
    ({ prefix }) =>
      prefix === "/"
        ? pathname === "/"
        : pathname === prefix || pathname.startsWith(prefix + "/"),
  )
  return match?.theme ?? "seahawks"
}
