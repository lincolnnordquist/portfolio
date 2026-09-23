import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ZeldaClipSlug } from "@/lib/zelda-clips";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  /** Which background video plays behind this post - see src/lib/zelda-clips.ts. */
  clip: ZeldaClipSlug;
}

export interface Post extends PostMeta {
  content: string;
}

function readPost(slug: string): Post {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary,
    tags: data.tags,
    clip: data.clip,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  const slugs = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

  return slugs
    .map((slug) => readPost(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post {
  return readPost(slug);
}
