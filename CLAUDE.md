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
5 fixed fandom themes one per section, then one theme with a randomly-picked
clip per page view) before landing here: **there is now just one theme,
applied identically to every page** — a looping background video of a
Legend of Zelda location — but **which clip plays on which page is hardcoded,
not random.** Every page/post picks its own clip explicitly, so the same URL
always shows the same clip.

`src/components/zelda-page.tsx` is what every single page in `src/app` wraps
its content in, and it takes the clip as a required prop:
```tsx
<ZeldaPage clip="hyrule-field">...page content...</ZeldaPage>
```
It composes `SiteShell` (`src/components/site-shell.tsx`, which hardcodes
`data-theme="zelda"` on its wrapper — there's nothing else to set it to) with
`ZeldaVideoBackground` (`src/components/zelda-video-background.tsx`), which
resolves the given clip slug via `getZeldaClip()` in `src/lib/zelda-clips.ts`
and loops it (`autoplay muted loop playsInline`). It still falls back to a
static poster image instead of playing video when `prefers-reduced-motion`
is set, and still renders a dark gradient scrim over the video so foreground
text/cards stay readable — this is why card UI across the site uses
`bg-card/70 backdrop-blur-sm` instead of opaque `bg-card` (e.g.
`work/page.tsx`'s project cards, `games/page.tsx`'s game cards).

**To change which clip a page shows:**
- For a static page (home, about, work, the blog/games index pages, each
  individual game) — edit the `clip="..."` prop right on that page's
  `<ZeldaPage>` call in its `page.tsx`.
- For a blog post — edit the `clip:` field in that post's own MDX
  frontmatter (`src/content/blog/*.mdx`), parsed through `Post.clip` in
  `src/lib/posts.ts`. This is why blog posts don't just get a prop passed
  from `blog/[slug]/page.tsx` directly: one dynamic route file serves all 6
  posts, so each post needs to carry its own clip choice in its own file
  rather than a prop that file could only set once for everyone.

This is still per-page rather than per-section (no `blog/layout.tsx` or
`games/layout.tsx` wrapping a whole section in one shared `ZeldaPage` call) —
that's what makes giving each individual post/game its own clip possible at
all; a section-level layout could only set one clip for everything under it.

Clip files live in `public/zelda-backgrounds/*.mp4` (1920x1080, ~25s,
H.264) with a poster JPEG per clip in `public/zelda-backgrounds/posters/`.
Adding a new clip means dropping the `.mp4` + a matching poster `.jpg` in
those folders and adding one entry to the `CLIP_LABELS` map in
`src/lib/zelda-clips.ts` (this also updates the `ZeldaClipSlug` type used to
type-check every `clip="..."` value) — nothing else needs to change.

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
`summary`, `clip` (required — which Zelda location plays behind this post,
see above), optional `tags`.

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

- Every page wraps its content in `<ZeldaPage clip="...">` — don't add a
  page that renders its own `SiteShell`/background, and don't reintroduce a
  section-level `layout.tsx` for theming (see the per-page-not-per-layout
  reasoning above; it defeats giving each post/game its own clip).
- New blog posts must set `clip:` in frontmatter — there's no default/
  fallback, so a post without one will fail at build time.
