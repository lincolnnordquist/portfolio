# Lincoln's Personal Site

Personal site combining a professional portfolio, a blog, and playable mini-games.
Owner: Lincoln Nordquist.

## Current state

Next.js (App Router) + TypeScript + Tailwind CSS v4, `src/app` as a flat
route tree (no route groups). Live sections: `/` (home), `/about`, `/work`,
`/blog` (+ posts), `/games` (+ 3 playable games).

Build order going forward: real content page by page (portfolio work, blog
posts, more games), not more scaffolding.

## One theme, whole site: the Zelda video background

The site went through a few iterations (a professional/fun mode split, then
5 fixed fandom themes one per section) before landing here: **there is now
just one theme, applied identically to every page** — a looping background
video of a random Legend of Zelda location, picked fresh on every page view.
There is no more theme *choice* to document; every page looks the same way,
by design.

`src/components/zelda-page.tsx` is what every single page in `src/app` wraps
its content in:
```tsx
<ZeldaPage>...page content...</ZeldaPage>
```
It composes `SiteShell` (`src/components/site-shell.tsx`, which hardcodes
`data-theme="zelda"` on its wrapper — there's nothing else to set it to) with
`ZeldaVideoBackground` (`src/components/zelda-video-background.tsx`), which:
- Picks one clip at random **on mount**, client-side (`useEffect`, so there's
  no server/client render mismatch), from `src/lib/zelda-clips.ts`, and loops
  it (`autoplay muted loop playsInline`).
- Falls back to a static poster image instead of playing video when
  `prefers-reduced-motion` is set.
- Renders a dark gradient scrim over the video so foreground text/cards stay
  readable — this is why card UI across the site uses `bg-card/70
  backdrop-blur-sm` instead of opaque `bg-card` (e.g. `work/page.tsx`'s
  project cards, `games/page.tsx`'s game cards).

**Every page independently randomizes, not just once per section.** This is
why `ZeldaPage` is called from every individual `page.tsx` rather than from
a shared `layout.tsx` per section (there used to be a `blog/layout.tsx` and
`games/layout.tsx` doing exactly that, for the old per-section theme model —
both were deleted). Next.js layouts **persist across client-side navigation**
between their child routes (only `page.tsx` remounts), so if the video pick
lived in a layout, clicking between blog posts wouldn't get a new random
clip — only a full page reload would. Putting the pick in `page.tsx` instead
means every navigation, including client-side ones, remounts `ZeldaPage` and
re-rolls the clip.

Clip files live in `public/zelda-backgrounds/*.mp4` (1920x1080, ~25s,
H.264) with a poster JPEG per clip in `public/zelda-backgrounds/posters/`.
Adding a new clip means dropping the `.mp4` + a matching poster `.jpg` in
those folders and adding one entry to the `CLIP_LABELS` map in
`src/lib/zelda-clips.ts` — nothing else needs to change.

`src/components/nav.tsx` is the one nav used everywhere (Home/About/Work/
Blog/Games links, active-link highlighting). No theme badge anymore — there's
only one theme, so it had nothing left to communicate.

## Games

Games are **real playable browser mini-games built from scratch** (not just
screenshots/links to external games), living at `/games`. Currently: Tic-Tac-
Toe (minimax AI), Memory Match, Reaction Test — each its own route under
`/games`.

## Blog

Blog posts are Markdown/MDX files committed to the repo at
`src/content/blog/*.mdx` — no headless CMS. Parsed with `gray-matter`,
rendered with `next-mdx-remote/rsc`. Frontmatter fields: `title`, `date`,
`summary`, optional `tags`.

## Tech stack

- **Next.js** (App Router), chosen because Lincoln already has production/
  senior-project experience with it.
- **Tailwind CSS v4** for styling. Colors are semantic CSS custom properties
  (`--background`, `--foreground`, `--primary`, etc., mapped into Tailwind
  via `@theme inline` in `src/app/globals.css`) scoped under
  `[data-theme="zelda"]` — kept as an attribute-scoped block rather than
  folded into `:root` directly, since it costs nothing and leaves the door
  open if a second theme ever comes back.
- **TypeScript** throughout.

## Working conventions

- Every page wraps its content in `<ZeldaPage>` — don't add a page that
  renders its own `SiteShell`/background, and don't reintroduce a
  section-level `layout.tsx` for theming (see the per-page-not-per-layout
  reasoning above; it defeats the "different video every page" behavior).
