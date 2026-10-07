import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TicTacToe } from "@/components/games/tic-tac-toe";

export const metadata: Metadata = {
  title: "Tic-Tac-Toe — Games",
  description: "Beat the block-headed AI. Fair warning: it plays perfectly.",
};

export default function TicTacToePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md">
        <Link
          href="/games"
          className="theme-heading mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to arcade
        </Link>
        <div className="mb-6 flex flex-col gap-1">
          <h1 className="theme-heading text-2xl font-bold">Tic-Tac-Toe</h1>
          <p className="text-sm text-muted-foreground">
            Beat the block-headed AI. Fair warning: it plays perfectly.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card/50 p-5 sm:p-7">
          <TicTacToe />
        </div>
      </div>
    </div>
  );
}
