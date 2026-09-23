import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ZeldaPage from "@/components/zelda-page";

const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
  "PostgreSQL",
  "AWS",
  "Kubernetes",
];

export default function Home() {
  return (
    <ZeldaPage clip="hyrule-field">
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-8 pb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Software Engineer
          </p>
          <h1 className="theme-heading max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            I build reliable systems and the interfaces that make them feel
            effortless.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I&apos;m Lincoln Nordquist, a software engineer focused on
            developer tooling, distributed systems, and thoughtful product
            design. I care about the details that never show up in a demo but
            always show up in production.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-black/30 hover:backdrop-blur-sm"
            >
              About me
            </Link>
          </div>
        </section>

        <section className="border-t border-border py-8">
          <div className="grid gap-6 sm:grid-cols-[160px_1fr]">
            <h2 className="theme-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Toolbox
            </h2>
            <ul className="flex flex-wrap gap-2">
              {STACK.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-sm text-card-foreground backdrop-blur-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-4 border-t border-border py-8 sm:grid-cols-2">
          <Link
            href="/work"
            className="group flex flex-col justify-between gap-6 rounded-xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-colors hover:border-primary/50"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                The front door
              </span>
              <h3 className="theme-heading text-xl font-semibold text-card-foreground">
                Professional work
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Selected projects, the problems they solved, and how they
                were built.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              See the portfolio
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>

          <Link
            href="/blog"
            className="group flex flex-col justify-between gap-6 rounded-xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-colors hover:border-primary/50"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                The back room
              </span>
              <h3 className="theme-heading text-xl font-semibold text-card-foreground">
                Writing &amp; games
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A blog and a shelf of playable browser toys.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              Wander in
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </section>
      </div>
    </ZeldaPage>
  );
}
