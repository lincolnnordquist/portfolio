import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Gauge, Grid3x3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Games",
  description: "A small arcade of playable browser mini-games.",
};

const GAMES = [
  {
    href: "/games/memory-match",
    name: "Memory Match",
    blurb: "Flip the tiles, find the pairs.",
    icon: Grid3x3,
  },
  {
    href: "/games/reaction-test",
    name: "Reaction Test",
    blurb: "How fast is your snap count? Click the moment it turns green.",
    icon: Gauge,
  },
  {
    href: "/games/tic-tac-toe",
    name: "Tic-Tac-Toe",
    blurb: "Beat the block-headed AI. Fair warning: it plays perfectly.",
    icon: Brain,
  },
];

export default function GamesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex max-w-2xl flex-col gap-4">
        <h1 className="theme-heading text-3xl font-semibold">Arcade</h1>
        <p className="text-muted-foreground">
          A shelf of tiny browser games I built to procrastinate
          productively.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {GAMES.map((game) => {
          const Icon = game.icon;
          return (
            <Link
              key={game.href}
              href={game.href}
              className="group flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h2 className="theme-heading text-lg font-semibold">
                  {game.name}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {game.blurb}
                </p>
              </div>
              <span className="theme-heading mt-auto pt-2 text-sm font-medium text-primary">
                Play &rarr;
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
