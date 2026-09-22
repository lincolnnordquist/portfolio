export const THEMES = [
  "nintendo",
  "one-piece",
  "seahawks",
  "dark-fantasy",
  "minecraft",
] as const;

export type Theme = (typeof THEMES)[number];

export type ThemeMeta = {
  id: Theme;
  label: string;
  blurb: string;
};

export const THEME_META: Record<Theme, ThemeMeta> = {
  nintendo: {
    id: "nintendo",
    label: "Nintendo",
    blurb: "Bright, adventurous, retro-game inspired.",
  },
  "one-piece": {
    id: "one-piece",
    label: "One Piece",
    blurb: "Bold, high-energy, ocean adventure.",
  },
  seahawks: {
    id: "seahawks",
    label: "Seahawks",
    blurb: "Navy, action green and silver. Loud and sporty.",
  },
  "dark-fantasy": {
    id: "dark-fantasy",
    label: "Dark Fantasy",
    blurb: "Moody, gothic, high-contrast and rune-etched.",
  },
  minecraft: {
    id: "minecraft",
    label: "Minecraft",
    blurb: "Blocky, earthy, pixel-art inspired.",
  },
};
