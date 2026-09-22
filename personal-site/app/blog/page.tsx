import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { POSTS, formatDate } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog — Alex Rivera",
  description:
    "Writing on engineering, craft, and the fandoms that leak into how I think. Some posts reskin the whole page.",
}

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <header className="flex max-w-2xl flex-col gap-4">
        <h1 className="theme-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Blog
        </h1>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          Notes on building software, and the games, anime, and teams that
          sneak into the metaphors. A few of these wear their fandom on their
          sleeve — open one and the whole site changes clothes.
        </p>
      </header>

      <ul className="mt-14 flex flex-col">
        {POSTS.map((post, i) => {
          const label = THEMES[post.theme].label
          return (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-2 border-t border-border py-7 transition-colors hover:bg-accent/40"
                style={{
                  borderBottomWidth: i === POSTS.length - 1 ? 1 : 0,
                }}
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readingTime}</span>
                  {label && (
                    <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {label} theme
                    </span>
                  )}
                </div>
                <h2 className="theme-heading flex items-center gap-1.5 text-xl font-semibold">
                  {post.title}
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </h2>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
