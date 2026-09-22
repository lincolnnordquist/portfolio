"use client";

import { useCallback, useEffect, useState } from "react";
import { X, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

type Cell = "X" | "O" | null;
const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function winner(b: Cell[]): Cell | "draw" | null {
  for (const [a, c, d] of LINES) {
    if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a];
  }
  return b.every(Boolean) ? "draw" : null;
}

// Minimax so the AI (O) plays perfectly.
function minimax(b: Cell[], isAI: boolean): number {
  const w = winner(b);
  if (w === "O") return 1;
  if (w === "X") return -1;
  if (w === "draw") return 0;

  const scores: number[] = [];
  b.forEach((cell, i) => {
    if (cell) return;
    const next = [...b];
    next[i] = isAI ? "O" : "X";
    scores.push(minimax(next, !isAI));
  });
  return isAI ? Math.max(...scores) : Math.min(...scores);
}

function bestMove(b: Cell[]): number {
  let move = -1;
  let best = -Infinity;
  b.forEach((cell, i) => {
    if (cell) return;
    const next = [...b];
    next[i] = "O";
    const score = minimax(next, false);
    if (score > best) {
      best = score;
      move = i;
    }
  });
  return move;
}

export function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<"X" | "O">("X");
  const result = winner(board);

  const reset = useCallback(() => {
    setBoard(Array(9).fill(null));
    setTurn("X");
  }, []);

  useEffect(() => {
    if (turn !== "O" || result) return;
    const t = setTimeout(() => {
      const move = bestMove(board);
      if (move === -1) return;
      setBoard((b) => {
        const next = [...b];
        next[move] = "O";
        return next;
      });
      setTurn("X");
    }, 380);
    return () => clearTimeout(t);
  }, [turn, board, result]);

  const play = (i: number) => {
    if (board[i] || result || turn !== "X") return;
    setBoard((b) => {
      const next = [...b];
      next[i] = "X";
      return next;
    });
    setTurn("O");
  };

  const status =
    result === "X"
      ? "You win!"
      : result === "O"
        ? "The machine wins."
        : result === "draw"
          ? "A draw. Respectable."
          : turn === "X"
            ? "Your move (X)"
            : "Thinking...";

  return (
    <div className="flex flex-col items-center gap-5">
      <p className="theme-heading text-sm font-semibold">{status}</p>
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <button
            key={i}
            type="button"
            onClick={() => play(i)}
            disabled={!!cell || !!result || turn !== "X"}
            aria-label={cell ? `Cell ${i + 1}: ${cell}` : `Play cell ${i + 1}`}
            className={cn(
              "flex size-20 items-center justify-center rounded-lg border-2 border-border bg-card transition-colors",
              !cell && !result && turn === "X" && "hover:border-primary/60",
            )}
          >
            {cell === "X" && (
              <X className="size-9 text-primary" strokeWidth={3} />
            )}
            {cell === "O" && (
              <Circle
                className="size-8 text-secondary-foreground"
                strokeWidth={3}
              />
            )}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={reset}
        className="rounded-md border border-border px-4 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
      >
        Reset board
      </button>
    </div>
  );
}
