import { getCollection } from "astro:content";
import { getPosts } from "../lib/posts";
import { SITE, work } from "../data/site";

// llms.txt (https://llmstxt.org): a Markdown map of the site for language models.
export async function GET() {
  const posts = await getPosts();
  const projects = (await getCollection("projects")).sort((a, b) => a.data.order - b.data.order);
  const link = (title: string, path: string, note: string) => `- [${title}](${SITE.url}${path}): ${note}`;

  const text = [
    `# ${SITE.name} (${SITE.handle})`,
    `> ${SITE.description}`,
    `Contact: ${SITE.email}. Also on GitHub (${SITE.github}), LinkedIn (${SITE.linkedin}) and X (${SITE.twitter}).`,
    "## Currently",
    work.map((w) => `- [${w.name}](${w.url}): ${w.role}. ${w.desc}`).join("\n"),
    "## Posts",
    posts.map((p) => link(p.data.title, `/posts/${p.id}/`, p.data.description)).join("\n"),
    "## Open source",
    projects.map((p) => link(p.id, `/projects/${p.id}/`, p.data.description)).join("\n"),
    "## Optional",
    [
      link("About", "/about/", "Background, past roles and education."),
      link("Full text", "/llms-full.txt", "Every post and project page as Markdown in one file."),
      link("RSS feed", "/feed.xml", "New posts as they're published."),
    ].join("\n"),
  ].join("\n\n");

  return new Response(`${text}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
