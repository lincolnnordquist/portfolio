import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import ZeldaPage from "@/components/zelda-page";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="theme-heading mt-4 text-2xl font-bold" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="theme-heading border-l-4 border-primary bg-card/60 py-3 pl-5 pr-4 text-lg italic text-card-foreground"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-lg leading-relaxed text-foreground/90" {...props} />
  ),
  pre: (props: React.ComponentProps<"pre">) => (
    <pre
      className="overflow-x-auto rounded-md bg-card p-4 font-mono text-sm text-card-foreground"
      {...props}
    />
  ),
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <ZeldaPage clip={post.clip}>
      <Link
        href="/blog"
        className="theme-heading mb-10 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        All posts
      </Link>

      <article className="flex flex-col gap-6">
        <header className="flex flex-col gap-4">
          <time dateTime={post.date} className="text-sm text-muted-foreground">
            {post.date}
          </time>
          <h1 className="theme-heading text-4xl font-bold leading-tight sm:text-5xl">
            {post.title}
          </h1>
        </header>

        <div className="flex flex-col gap-6">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {post.tags && post.tags.length > 0 && (
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
        )}
      </article>
    </ZeldaPage>
  );
}
