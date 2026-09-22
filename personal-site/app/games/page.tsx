import type { Metadata } from "next"
import { Arcade } from "@/components/games/arcade"

export const metadata: Metadata = {
  title: "Games — Alex Rivera",
  description:
    "A small arcade of playable browser mini-games. Open one and it can bring its own fandom skin with it.",
}

export default function GamesPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <header className="mb-12 flex max-w-2xl flex-col gap-4">
        <h1 className="theme-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Arcade
        </h1>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          A shelf of tiny browser games I built to procrastinate productively.
          Each one carries its own skin — pick one and the whole page dresses up
          to match.
        </p>
      </header>
      <Arcade />
    </main>
  )
}
