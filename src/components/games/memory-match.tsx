"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Anchor,
  Bird,
  Bomb,
  Crown,
  Flame,
  Gem,
  Ghost,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: LucideIcon[] = [Anchor, Bird, Bomb, Crown, Flame, Gem, Ghost, Rocket];

type Card = {
  id: number;
  icon: LucideIcon;
  key: number;
  matched: boolean;
};

function buildDeck(): Card[] {
  const deck = ICONS.flatMap((icon, key) => [
    { icon, key },
    { icon, key },
  ]).map((c, id) => ({ ...c, id, matched: false }));

  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export function MemoryMatch() {
  const [deck, setDeck] = useState<Card[]>(buildDeck);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const locked = flipped.length === 2;

  const reset = useCallback(() => {
    setDeck(buildDeck());
    setFlipped([]);
    setMoves(0);
  }, []);

  useEffect(() => {
    if (flipped.length !== 2) return;
    const [a, b] = flipped;
    const isMatch = deck[a].key === deck[b].key;
    const t = setTimeout(() => {
      if (isMatch) {
        setDeck((d) =>
          d.map((c, i) => (i === a || i === b ? { ...c, matched: true } : c)),
        );
      }
      setFlipped([]);
    }, 650);
    return () => clearTimeout(t);
  }, [flipped, deck]);

  const won = deck.every((c) => c.matched);

  const handleFlip = (i: number) => {
    if (locked || flipped.includes(i) || deck[i].matched) return;
    if (flipped.length === 0) {
      setFlipped([i]);
    } else if (flipped.length === 1) {
      setFlipped([flipped[0], i]);
      setMoves((m) => m + 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex w-full items-center justify-between text-sm">
        <span className="theme-heading font-semibold">Moves: {moves}</span>
        {won && (
          <span className="theme-heading font-semibold text-primary">
            Cleared in {moves} moves!
          </span>
        )}
        <button
          type="button"
          onClick={reset}
          className="rounded-md border border-border px-3 py-1.5 font-medium transition-colors hover:bg-accent"
        >
          New game
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
        {deck.map((card, i) => {
          const isUp = flipped.includes(i) || card.matched;
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => handleFlip(i)}
              aria-label={isUp ? "Revealed card" : "Hidden card"}
              className={cn(
                "flex aspect-square w-16 items-center justify-center rounded-lg border-2 transition-all sm:w-20",
                isUp
                  ? "border-primary bg-card"
                  : "border-border bg-secondary hover:border-primary/50",
                card.matched && "opacity-45",
              )}
            >
              {isUp ? (
                <Icon className="size-7 text-primary sm:size-8" />
              ) : (
                <span className="theme-heading text-lg text-muted-foreground">
                  ?
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
