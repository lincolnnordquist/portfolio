import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import ZeldaPage from "@/components/zelda-page";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <ZeldaPage clip="clock-town">
      <div className="flex flex-col gap-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <h1 className="theme-heading text-3xl font-semibold">Blog</h1>
          <p className="text-muted-foreground">
            Notes on building software, and the games, anime, and teams that
            sneak into the metaphors.
          </p>
        </div>
        <ul className="flex flex-col">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-2 border-t border-border py-7 transition-colors hover:bg-accent/40"
                style={{
                  borderBottomWidth: i === posts.length - 1 ? 1 : 0,
                }}
              >
                <time
                  dateTime={post.date}
                  className="text-sm text-muted-foreground"
                >
                  {post.date}
                </time>
                <h2 className="theme-heading flex items-center gap-1.5 text-xl font-semibold">
                  {post.title}
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {post.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </ZeldaPage>
  );
}
