import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts } from "../lib/posts";
import { SITE } from "../data/site";

// Same /feed.xml path and title as the Gridsome feed. Links keep its no-trailing-slash form,
// because readers use the link as each item's ID and would otherwise show every post again.
export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: "kasvith.me - feed",
    description: SITE.description,
    site: context.site!,
    trailingSlash: false,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      categories: p.data.tags,
      link: `/posts/${p.id}`,
    })),
  });
}
