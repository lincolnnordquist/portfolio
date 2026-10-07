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

## Theme → section assignment

- [x] Every section now has a fixed theme (Home=Seahawks, About=Dark Fantasy,
      Work=Minecraft, Blog=One Piece, Games=Nintendo) — see the table in
      `CLAUDE.md`. Whole blog/games sections share one theme now, not
      per-post/per-game.
- [ ] This pairing is a first pass, somewhat arbitrary — revisit once there's
      more real content to see it against
- [ ] Real palettes/fonts/patterns for all 5 themes were ported from v0
      (`src/app/globals.css`) — still not hand-tuned

## Games

- [x] Three playable games built: Tic-Tac-Toe (with a minimax AI), Memory
      Match, Reaction Test — all under `/games`, all Nintendo-themed
- [ ] More games? Current three are a v0 starting point, not the final roster

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
