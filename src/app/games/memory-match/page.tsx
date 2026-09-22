import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MemoryMatch } from "@/components/games/memory-match";

export const metadata: Metadata = {
  title: "Memory Match — Games",
  description: "Flip the tiles, find the pairs.",
};

export default function MemoryMatchPage() {
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
          <h1 className="theme-heading text-2xl font-bold">Memory Match</h1>
          <p className="text-sm text-muted-foreground">
            Flip the tiles, find the pairs.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card/50 p-5 sm:p-7">
          <MemoryMatch />
        </div>
      </div>
    </div>
  );
}
