import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReactionTest } from "@/components/games/reaction-test";
import ZeldaPage from "@/components/zelda-page";

export const metadata: Metadata = {
  title: "Reaction Test — Games",
  description: "How fast is your snap count? Click the moment it turns green.",
};

export default function ReactionTestPage() {
  return (
    <ZeldaPage clip="laundry-pool">
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
            <h1 className="theme-heading text-2xl font-bold">Reaction Test</h1>
            <p className="text-sm text-muted-foreground">
              How fast is your snap count? Click the instant it turns green.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-5 sm:p-7">
            <ReactionTest />
          </div>
        </div>
      </div>
    </ZeldaPage>
  );
}
