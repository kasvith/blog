import { readFileSync } from "node:fs";
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { fmtDate, getPosts, readingTime } from "../../lib/posts";
import { LANG, SITE } from "../../data/site";

// 1200×630 share cards, rendered at build time: /og/default.png, /og/posts/<id>.png and /og/projects/<id>.png.

type Card = {
  kicker: string;
  title: string;
  text: string;
  aside: string;
  dot?: string;
};

export const getStaticPaths = (async () => {
  const posts = await getPosts();
  const projects = await getCollection("projects");
  const card = (slug: string, props: Card) => ({ params: { slug }, props });
  return [
    card("default", {
      kicker: "kasvith.me",
      title: SITE.name,
      text: "Co-founder & CTO of WaveZync and Stoxly.ai. Long, hands-on posts about Elixir, Go, TypeScript and how things work under the hood.",
      aside: "",
    }),
    ...posts
      .filter((p) => !p.data.cover_image)
      .map((p) =>
        card(`posts/${p.id}`, {
          kicker: `Post · ${fmtDate(p.data.date, "long")} · ${readingTime(p)} min read`,
          title: p.data.title,
          text: p.data.description,
          aside: p.data.tags.map((t) => `#${t}`).join("   "),
        }),
      ),
    ...projects.map((p) =>
      card(`projects/${p.id}`, {
        kicker: `Open source · ${p.data.lang} · ${p.data.stars} stars`,
        dot: LANG[p.data.lang],
        title: p.id,
        text: p.data.description,
        aside: p.data.repo,
      }),
    ),
  ];
}) satisfies GetStaticPaths;

const font = (pkg: string, file: string) => readFileSync(`node_modules/@fontsource/${pkg}/files/${file}`);
const fonts = [
  { name: "Bricolage", weight: 700, data: font("bricolage-grotesque", "bricolage-grotesque-latin-700-normal.woff") },
  { name: "Bricolage", weight: 600, data: font("bricolage-grotesque", "bricolage-grotesque-latin-600-normal.woff") },
  { name: "Instrument", weight: 400, data: font("instrument-sans", "instrument-sans-latin-400-normal.woff") },
  { name: "Instrument", weight: 500, data: font("instrument-sans", "instrument-sans-latin-500-normal.woff") },
] as const;
const avatar = `data:image/jpeg;base64,${readFileSync("src/assets/me.jpg").toString("base64")}`;

// Satori takes React-style element objects; this builds them without JSX.
const h = (type: string, style: Record<string, unknown>, ...children: unknown[]) => ({ type, props: { style, children } });

// Colours are the site's dark theme tokens.
function render({ kicker, title, text, aside, dot }: Card) {
  return h(
    "div",
    {
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "64px 72px 60px",
      background: "#08131a",
      backgroundImage:
        "radial-gradient(circle at 92% 0%, rgba(127, 166, 255, 0.28), transparent 46%), radial-gradient(circle at 0% 100%, rgba(52, 211, 166, 0.14), transparent 40%)",
      color: "#e9f3f4",
      fontFamily: "Instrument",
    },
    h(
      "div",
      { display: "flex", flexDirection: "column" },
      h(
        "div",
        { display: "flex", alignItems: "center", gap: 14, color: "#7fa6ff", fontSize: 24, fontWeight: 500, letterSpacing: 1.5 },
        ...(dot ? [h("div", { width: 16, height: 16, borderRadius: 8, background: dot })] : []),
        kicker.toUpperCase(),
      ),
      h(
        "div",
        {
          display: "block",
          width: "100%",
          marginTop: 28,
          fontFamily: "Bricolage",
          fontWeight: 700,
          fontSize: title.length > 60 ? 58 : 70,
          lineHeight: 1.08,
          letterSpacing: -1.5,
          lineClamp: 3,
        },
        title,
      ),
      h("div", { display: "block", width: "100%", marginTop: 24, color: "#8ba3aa", fontSize: 28, lineHeight: 1.4, lineClamp: 2 }, text),
    ),
    h(
      "div",
      { display: "flex", alignItems: "center", gap: 18 },
      { type: "img", props: { src: avatar, width: 60, height: 60, style: { borderRadius: 30, border: "2px solid #1e323b" } } },
      h(
        "div",
        { display: "flex", flexDirection: "column" },
        h("div", { fontFamily: "Bricolage", fontWeight: 600, fontSize: 26 }, SITE.name),
        h("div", { color: "#8ba3aa", fontSize: 21 }, "kasvith.me"),
      ),
      h("div", { marginLeft: "auto", color: "#8ba3aa", fontSize: 22 }, aside),
    ),
  );
}

export const GET: APIRoute = async ({ props }) => {
  const svg = await satori(render(props as Card) as never, { width: 1200, height: 630, fonts: [...fonts] });
  return new Response(new Uint8Array(new Resvg(svg).render().asPng()), { headers: { "Content-Type": "image/png" } });
};
