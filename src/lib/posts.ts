import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("posts", (p) => p.data.published);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const readingTime = (p: Post) => Math.max(1, Math.round((p.body ?? "").split(/\s+/).length / 220));

const formats = {
  short: { month: "short", year: "numeric" },
  long: { day: "numeric", month: "long", year: "numeric" },
} as const;

export const fmtDate = (d: Date, style: keyof typeof formats) =>
  new Intl.DateTimeFormat("en-GB", { ...formats[style], timeZone: "UTC" }).format(d);
