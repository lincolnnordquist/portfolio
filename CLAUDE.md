# Lincoln's Personal Site

Personal site combining a professional portfolio, a blog, and playable mini-games.
Owner: Lincoln Nordquist.

## Current state

Next.js (App Router) + TypeScript + Tailwind CSS v4, `src/app` as a flat
route tree (no route groups — see "One theme per section" below for why).
Live sections: `/` (home), `/about`, `/work`, `/blog` (+ posts), `/games`
(+ 3 playable games).

Build order going forward: real content page by page (portfolio work, blog
posts, more games), not more scaffolding.

## One theme per section — no neutral mode

There used to be a "professional mode vs. fun mode" split with a neutral,
unthemed professional area. **That's gone.** Every page on the site now has
exactly one fandom theme, fixed per section:

| Section | Theme |
|---|---|
| Home (`/`) | Seahawks |
| About (`/about`) | Dark Fantasy |
| Work (`/work`) | Minecraft |
| Blog (`/blog`, every post under it) | One Piece |
| Games (`/games`, every game under it) | Nintendo |

This table is the single source of truth for the assignment — it's somewhat
arbitrary (5 themes, 5 sections, one each) and can be reshuffled by editing
the `theme` values where `SiteShell` is called (see below); doing so doesn't
require any other architecture change.

**Blog posts and games do not carry their own individual theme anymore** —
the whole blog is One Piece, the whole games section is Nintendo, regardless
of which post or game you're on. (Earlier in this project's history theming
was content-level/per-post; that model was deliberately replaced with this
simpler one.)

Planned fandom themes — valid `Theme` values in `src/lib/themes.ts`:
- **Nintendo** — Zelda / Mario / Pokémon
- **One Piece** (anime)
- **Seahawks** (NFL)
- **Dark fantasy** — Game of Thrones / Berserk / Brandon Sanderson influence
- **Minecraft**

Each theme should have a distinct palette, type treatment, and feel — these
are meant to look genuinely different from each other, not just a color-swap
of the same layout. Current palettes in `src/app/globals.css` are a first
pass (ported from a v0 mockup), not final art direction — treat each theme's
real design as its own pass. Confirm before adding a new fandom theme that
wasn't discussed.

## How theming is wired up

Theme is resolved statically per route, not from any content field. Every
page (or its layout) renders `<SiteShell theme="...">` from
`src/components/site-shell.tsx`, which sets `data-theme` on a single
top-level wrapper containing `Nav`, the page content, and `Footer` — so nav
and footer always match whatever section is active.
`[data-theme="..."]` selectors in `src/app/globals.css` define the
background/text/accent/font CSS custom properties per theme.

Because theme is fixed per section rather than per piece of content, a
section with multiple pages applies it once via a `layout.tsx` instead of
every page repeating it:
- `src/app/blog/layout.tsx` and `src/app/games/layout.tsx` each wrap their
  whole subtree in one `<SiteShell theme="...">` — individual pages under
  them (`blog/page.tsx`, `blog/[slug]/page.tsx`, `games/page.tsx`,
  `games/tic-tac-toe/page.tsx`, etc.) don't call `SiteShell` themselves.
- `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/work/page.tsx` are
  single leaf pages with no children, so each calls `SiteShell` directly.

`src/components/nav.tsx` is the one nav used everywhere (Home/About/Work/
Blog/Games links, active-link highlighting, a small badge showing the
current section's theme label). There's no more "Portfolio" / "Fun stuff"
cross-mode button — that was explicitly removed.

## Games

Games are **real playable browser mini-games built from scratch** (not just
screenshots/links to external games), living at `/games`. Currently: Tic-Tac-
Toe (minimax AI), Memory Match, Reaction Test — each its own route under
`/games`, all sharing the Nintendo theme per the table above.

## Blog

Blog posts are Markdown/MDX files committed to the repo at
`src/content/blog/*.mdx` — no headless CMS. Parsed with `gray-matter`,
rendered with `next-mdx-remote/rsc`. Frontmatter fields: `title`, `date`,
`summary`, optional `tags`. (No `theme` field — see above.)

## Tech stack

- **Next.js** (App Router), chosen because Lincoln already has production/
  senior-project experience with it.
- **Tailwind CSS v4** for styling — the multi-theme requirement (several
  visually distinct fandom skins) benefits from utility-first, config-driven
  theming rather than hand-rolled CSS per page. Theme colors are semantic
  CSS custom properties (`--background`, `--foreground`, `--primary`, etc.,
  mapped into Tailwind via `@theme inline`) that get redefined per
  `[data-theme="..."]` block.
- **TypeScript** throughout.

## Working conventions

- Every route has exactly one theme (see the table above) — there is no
  neutral/unthemed state anymore. When adding a new page, decide which
  section it belongs to and it inherits that section's theme; don't add a
  page that opts out of theming.
