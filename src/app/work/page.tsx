import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import ZeldaPage from "@/components/zelda-page";

export const metadata: Metadata = {
  title: "Work — Lincoln Nordquist",
  description: "Selected engineering projects by Lincoln Nordquist.",
};

const PROJECTS = [
  {
    name: "Ledger",
    year: "2024",
    tag: "Distributed systems",
    summary:
      "A double-entry accounting engine with exactly-once processing across regions. Powers billing for a fintech handling nine figures monthly.",
    stack: ["Go", "PostgreSQL", "Kafka", "gRPC"],
  },
  {
    name: "Forge",
    year: "2023",
    tag: "Developer tooling",
    summary:
      "A self-serve deploy platform that turned a two-day onboarding into a fifteen-minute one. Preview environments, one-click rollbacks, and audit trails.",
    stack: ["TypeScript", "Next.js", "Kubernetes", "AWS"],
  },
  {
    name: "Atlas",
    year: "2022",
    tag: "Data visualization",
    summary:
      "A real-time observability dashboard rendering millions of spans without dropping frames, using windowed aggregation and a custom canvas renderer.",
    stack: ["React", "WebGL", "ClickHouse"],
  },
  {
    name: "Relay",
    year: "2021",
    tag: "Open source",
    summary:
      "A tiny, dependency-free pub/sub library for the browser. 4k stars and quietly running in production at a few companies I keep meeting at conferences.",
    stack: ["TypeScript"],
  },
];

export default function Work() {
  return (
    <ZeldaPage clip="stable">
      <div className="flex flex-col gap-4">
        <header className="flex max-w-2xl flex-col gap-4">
          <h1 className="theme-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Selected work
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A handful of projects that show how I think. Each one is a real
            problem, a set of constraints, and the trade-offs I chose to live
            with.
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-colors hover:border-primary/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {project.tag} · {project.year}
                  </span>
                  <h2 className="theme-heading text-xl font-semibold text-card-foreground">
                    {project.name}
                  </h2>
                </div>
                <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </ZeldaPage>
  );
}
