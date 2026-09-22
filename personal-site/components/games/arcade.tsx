"use client"

import { useState } from "react"
import { ArrowLeft, Brain, Gauge, Grid3x3 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { MemoryMatch } from "@/components/games/memory-match"
import { ReactionTest } from "@/components/games/reaction-test"
import { TicTacToe } from "@/components/games/tic-tac-toe"
import { ThemeSetter } from "@/components/theme-context"
import { THEMES, type ThemeId } from "@/lib/themes"

type Game = {
  id: string
  name: string
  blurb: string
  icon: LucideIcon
  theme: ThemeId
  render: () => React.ReactNode
}

const GAMES: Game[] = [
  {
    id: "memory",
    name: "Memory Match",
    blurb: "Flip the tiles, find the pairs. Wrapped in a bright retro skin.",
    icon: Grid3x3,
    theme: "nintendo",
    render: () => <MemoryMatch />,
  },
  {
    id: "reaction",
    name: "Reaction Test",
    blurb: "How fast is your snap count? Click the moment it turns green.",
    icon: Gauge,
    theme: "seahawks",
    render: () => <ReactionTest />,
  },
  {
    id: "tictactoe",
    name: "Tic-Tac-Toe",
    blurb: "Beat the block-headed AI. Fair warning: it plays perfectly.",
    icon: Brain,
    theme: "minecraft",
    render: () => <TicTacToe />,
  },
]

export function Arcade() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = GAMES.find((g) => g.id === activeId)

  if (active) {
    const label = THEMES[active.theme].label
    return (
      <div className="flex flex-col items-center">
        {/* Applying a game's fandom skin reskins the whole page. */}
        <ThemeSetter theme={active.theme} />
        <div className="w-full max-w-md">
          <button
            type="button"
            onClick={() => setActiveId(null)}
            className="theme-heading mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to arcade
          </button>
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h2 className="theme-heading text-2xl font-bold">
                {active.name}
              </h2>
              {label && (
                <span className="rounded-full border border-primary/50 bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {label}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{active.blurb}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-5 sm:p-7">
            {active.render()}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {GAMES.map((game) => {
        const Icon = game.icon
        const label = THEMES[game.theme].label
        return (
          <button
            key={game.id}
            type="button"
            onClick={() => setActiveId(game.id)}
            className="group flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 text-left transition-colors hover:border-primary/50"
          >
            <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-5" />
            </span>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <h2 className="theme-heading text-lg font-semibold">
                  {game.name}
                </h2>
                {label && (
                  <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                    {label}
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {game.blurb}
              </p>
            </div>
            <span className="theme-heading mt-auto pt-2 text-sm font-medium text-primary">
              Play →
            </span>
          </button>
        )
      })}
    </div>
  )
}
