# Site TODO

Living checklist of what's left to build. Not exhaustive — add/remove/reorder
as priorities change. See `CLAUDE.md` for the architecture and design intent
behind these.

## Home / About / Work

- [ ] Real "About" content — bio/values/experience are placeholder ("Lincoln
      Nordquist" name, fake employers/projects) ported from a v0 mockup
- [ ] Real "Work" content — same: placeholder projects (Ledger, Forge, Atlas,
      Relay) need swapping for real ones
- [ ] Resume/contact info (downloadable PDF? email/LinkedIn/GitHub links?)
- [ ] Decide if "Work" needs individual project detail pages or stays a single list
- [ ] A photo? Currently no imagery anywhere on the site

## Blog

- [x] Typography pass for MDX body content — headings/quotes/code now have
      real styling via custom MDX components
- [ ] Write real posts — the 6 current posts are placeholder (ported from v0)
- [x] Tags — added, rendered as pills at the bottom of each post

## One Zelda video theme, site-wide

- [x] Retired the whole 5-theme system (Nintendo/One Piece/Seahawks/Dark
      Fantasy are gone, `src/lib/themes.ts` deleted). Every page now uses
      the single Zelda video-background look via `ZeldaPage` — see
      `CLAUDE.md`.
- [x] 9 clips in `public/zelda-backgrounds/`, each page independently
      re-rolls a random clip on every navigation (not just once per section)
- [ ] Clips still have their original audio tracks (harmless since always
      muted, but could be stripped to shave a little file size)
- [ ] Clip filenames were clipped from existing YouTube uploads (not
      Lincoln's own captures) — fine for now, worth keeping in mind for a
      public/professional-facing site
- [ ] Every page now autoplays a video on load, not just Home — worth
      keeping an eye on perceived load time as more real content goes in
- [ ] More clips? 9 is enough to feel varied but more locations = less
      repetition for a returning visitor

## Games

- [x] Three playable games built: Tic-Tac-Toe (with a minimax AI), Memory
      Match, Reaction Test — all under `/games`

## Site-wide polish

- [ ] Replace favicon/logo assets — still the default CRA/React placeholder
      icons in `public/`
- [x] Page metadata — most routes have their own title/description now
- [ ] Mobile responsiveness pass — nothing has been checked on small screens yet
- [ ] Decide on hosting/deployment (e.g. Vercel) + domain
- [ ] `personal-site/` scratch folder at repo root (the v0 export) can be
      deleted once we're confident everything useful has been pulled from it

## Done

- [x] Migrate from CRA to Next.js (App Router) + TypeScript + Tailwind v4
- [x] Ported v0-designed themes, 3 games, 6 blog posts, and placeholder
      home/about/work content into the real app
- [x] MDX blog pipeline (gray-matter + next-mdx-remote)
- [x] Removed the professional/fun mode split — every section now has one
      fixed theme, applied via `SiteShell` + a single unified `Nav`/`Footer`
- [x] Retired the 5-theme system entirely in favor of one Zelda
      video-background look applied to every page
