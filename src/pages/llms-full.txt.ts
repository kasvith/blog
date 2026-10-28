import { getCollection } from "astro:content";
import { getPosts } from "../lib/posts";
import { SITE } from "../data/site";

// Every post and project page as Markdown, linked from llms.txt.
export async function GET() {
  const posts = await getPosts();
  const projects = (await getCollection("projects")).sort((a, b) => a.data.order - b.data.order);
  const page = (title: string, path: string, meta: string, body = "") => `# ${title}\n\nURL: ${SITE.url}${path}\n${meta}\n\n${body.trim()}`;

  const text = [
    `# ${SITE.name} (${SITE.handle})\n\n> ${SITE.description}`,
    ...posts.map((p) =>
      page(p.data.title, `/posts/${p.id}/`, `Published: ${p.data.date.toISOString().slice(0, 10)}\n\n${p.data.description}`, p.body),
    ),
    ...projects.map((p) => page(p.id, `/projects/${p.id}/`, `Source: https://github.com/${p.data.repo}\n\n${p.data.description}`, p.body)),
  ].join("\n\n---\n\n");

  return new Response(`${text}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
