import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { POSTS, getPost, formatDate } from "@/lib/blog"

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Not found" }
  return { title: `${post.title} — Alex Rivera`, description: post.excerpt }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <main className="mx-auto max-w-2xl px-5 py-14 sm:py-20">
        <Link
          href="/blog"
          className="theme-heading mb-10 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          All posts
        </Link>

        <article className="flex flex-col gap-6">
          <header className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="theme-heading text-balance text-4xl font-bold leading-tight sm:text-5xl">
              {post.title}
            </h1>
          </header>

          <div className="flex flex-col gap-6">
            {post.body.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2
                      key={i}
                      className="theme-heading mt-4 text-2xl font-bold"
                    >
                      {block.text}
                    </h2>
                  )
                case "quote":
                  return (
                    <blockquote
                      key={i}
                      className="theme-heading border-l-4 border-primary bg-card/60 py-3 pl-5 pr-4 text-lg italic text-card-foreground"
                    >
                      {block.text}
                    </blockquote>
                  )
                case "code":
                  return (
                    <pre
                      key={i}
                      className="overflow-x-auto rounded-md bg-card p-4 font-mono text-sm text-card-foreground"
                    >
                      <code>{block.text}</code>
                    </pre>
                  )
                default:
                  return (
                    <p
                      key={i}
                      className="text-pretty text-lg leading-relaxed text-foreground/90"
                    >
                      {block.text}
                    </p>
                  )
              }
            })}
          </div>

          <footer className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </footer>
        </article>
    </main>
  )
}
