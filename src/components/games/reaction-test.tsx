"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Phase = "idle" | "waiting" | "go" | "result" | "tooSoon";

export function ReactionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [time, setTime] = useState(0);
  const [best, setBest] = useState<number | null>(null);
  const startRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearPending = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const arm = useCallback(() => {
    setPhase("waiting");
    clearPending();
    const delay = 900 + Math.random() * 2600;
    timeoutRef.current = setTimeout(() => {
      startRef.current = performance.now();
      setPhase("go");
    }, delay);
  }, []);

  useEffect(() => () => clearPending(), []);

  const handleClick = () => {
    if (phase === "idle" || phase === "result" || phase === "tooSoon") {
      arm();
    } else if (phase === "waiting") {
      clearPending();
      setPhase("tooSoon");
    } else if (phase === "go") {
      const ms = Math.round(performance.now() - startRef.current);
      setTime(ms);
      setBest((b) => (b === null ? ms : Math.min(b, ms)));
      setPhase("result");
    }
  };

  const config: Record<Phase, { bg: string; title: string; sub: string }> = {
    idle: {
      bg: "bg-secondary",
      title: "Reaction Test",
      sub: "Click to start, then click the instant it turns green.",
    },
    waiting: {
      bg: "bg-accent",
      title: "Wait for green...",
      sub: "Don't jump the snap.",
    },
    go: { bg: "bg-primary", title: "CLICK!", sub: "Now!" },
    result: {
      bg: "bg-secondary",
      title: `${time} ms`,
      sub: "Click to go again.",
    },
    tooSoon: {
      bg: "bg-destructive",
      title: "Too soon!",
      sub: "Click to try again.",
    },
  };

  const c = config[phase];

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "flex h-56 w-full flex-col items-center justify-center gap-2 rounded-xl text-center transition-colors",
          c.bg,
          phase === "go" || phase === "tooSoon"
            ? "text-primary-foreground"
            : "text-foreground",
        )}
      >
        <span className="theme-heading text-3xl font-bold">{c.title}</span>
        <span className="text-sm opacity-90">{c.sub}</span>
      </button>
      <p className="theme-heading text-sm text-muted-foreground">
        {best !== null ? `Best: ${best} ms` : "No score yet"}
      </p>
    </div>
  );
}
