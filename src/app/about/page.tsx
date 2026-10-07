import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About — Lincoln Nordquist",
  description:
    "About Lincoln Nordquist, a software engineer focused on developer tooling and distributed systems.",
};

const EXPERIENCE = [
  {
    role: "Staff Software Engineer",
    company: "Northwind Labs",
    period: "2022 — Present",
    detail:
      "Lead the platform team building internal developer tooling used by 400+ engineers. Cut CI times by 60% and shipped a self-serve deploy pipeline.",
  },
  {
    role: "Senior Software Engineer",
    company: "Harbor Systems",
    period: "2019 — 2022",
    detail:
      "Designed the event-driven backbone behind the billing product, handling millions of transactions a day with strong consistency guarantees.",
  },
  {
    role: "Software Engineer",
    company: "Kite & Co.",
    period: "2016 — 2019",
    detail:
      "Full-stack product work across web and mobile. Built the first version of the analytics dashboard that became the company's flagship feature.",
  },
];

const VALUES = [
  {
    title: "Boring on purpose",
    body: "The best infrastructure is the kind nobody thinks about. I optimize for legibility and low surprise over cleverness.",
  },
  {
    title: "Write it down",
    body: "Design docs, runbooks, and post-mortems compound. I'd rather over-document a decision than re-derive it in an incident.",
  },
  {
    title: "Ship, then sharpen",
    body: "Get something real in front of people early, then iterate with evidence instead of guessing in a vacuum.",
  },
];

export default function About() {
  return (
    <SiteShell theme="dark-fantasy">
      <div className="flex flex-col gap-4">
        <header className="flex flex-col gap-4">
          <h1 className="theme-heading text-4xl font-bold tracking-tight sm:text-5xl">
            About
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;ve spent my career building software that other people
            build on top of. That means I think a lot about clarity, failure
            modes, and the humans on the other end of an API. Away from the
            keyboard I&apos;m usually deep in a video game, an anime backlog,
            or a Seahawks game I&apos;m too emotionally invested in.
          </p>
        </header>

        <section className="mt-10">
          <h2 className="theme-heading mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            How I work
          </h2>
          <div className="flex flex-col gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="flex flex-col gap-1.5">
                <h3 className="theme-heading text-lg font-semibold">
                  {v.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="theme-heading mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Experience
          </h2>
          <ol className="flex flex-col">
            {EXPERIENCE.map((job, i) => (
              <li
                key={job.company}
                className="grid gap-1 border-t border-border py-6 sm:grid-cols-[160px_1fr]"
                style={{
                  borderBottomWidth: i === EXPERIENCE.length - 1 ? 1 : 0,
                }}
              >
                <span className="text-sm text-muted-foreground">
                  {job.period}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="theme-heading text-lg font-semibold">
                    {job.role}{" "}
                    <span className="font-normal text-muted-foreground">
                      · {job.company}
                    </span>
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {job.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </SiteShell>
  );
}
