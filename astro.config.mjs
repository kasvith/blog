// @ts-check
import { readdirSync, readFileSync } from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { satteri } from "@astrojs/markdown-satteri";
import { renderMermaidSVG } from "beautiful-mermaid";

// Gridsome turned a paragraph holding only an image into <figure> with the alt text as its caption.
// Posts rely on that for their diagram captions, so keep the behaviour.
const figureCaptions = {
  name: "figure-captions",
  element: {
    filter: ["p"],
    /** @param {any} p @param {any} ctx */
    visit(p, ctx) {
      const kids = p.children.filter((/** @type {any} */ c) => !(c.type === "text" && !c.value.trim()));
      const img = kids[0];
      if (kids.length !== 1 || img.type !== "element" || img.tagName !== "img" || !img.properties?.alt) return;
      ctx.replaceNode(p, {
        type: "element",
        tagName: "figure",
        properties: {},
        children: [
          img,
          { type: "element", tagName: "figcaption", properties: {}, children: [{ type: "text", value: String(img.properties.alt) }] },
        ],
      });
    },
  },
};

// Frame each highlighted block like a window, with the fence's language in the title bar.
const codeFrame = {
  name: "code-frame",
  element: {
    filter: ["pre"],
    /** @param {any} pre @param {any} ctx */
    visit(pre, ctx) {
      const lang = pre.properties?.dataLanguage;
      if (!lang) return; // not highlighted by Shiki, e.g. a Mermaid block
      ctx.wrapNode(pre, {
        type: "element",
        tagName: "div",
        properties: { className: ["code"] },
        children: [
          {
            type: "element",
            tagName: "div",
            properties: { className: ["code-bar"] },
            children: lang && lang !== "plaintext" ? [{ type: "text", value: lang }] : [],
          },
        ],
      });
    },
  },
};

// Render ```mermaid blocks to SVG at build time. Colours point at --d-* tokens set on .diagram in
// global.css, so a chart follows light and dark without re-rendering.
const mermaid = {
  name: "mermaid",
  element: {
    filter: ["pre"],
    /** @param {any} pre @param {any} ctx */
    visit(pre, ctx) {
      const code = pre.children?.find((/** @type {any} */ c) => c.tagName === "code");
      if (!code?.properties?.className?.includes?.("language-mermaid")) return;
      const svg = renderMermaidSVG(ctx.textContent(code), {
        bg: "var(--d-bg)",
        fg: "var(--d-fg)",
        line: "var(--d-line)",
        accent: "var(--d-accent)",
        muted: "var(--d-muted)",
        surface: "var(--d-surface)",
        border: "var(--d-border)",
        font: "Instrument Sans Variable",
        layerSpacing: 32,
        transparent: true,
      })
        // The site already loads its fonts; drop the renderer's Google Fonts request.
        .replace(/^\s*@import .*$/m, "")
        // Its <style> is global once inlined, so keep those rules on diagrams.
        .replace(/^(\s*)(svg|text) \{/gm, "$1.diagram $2 {");
      ctx.replaceNode(pre, { type: "raw", value: `<figure class="diagram">${svg}</figure>` });
    },
  },
};

// Sitemap <lastmod> for each post: its front matter lastmod, else its date. Config can't query content collections.
const postDates = new Map(
  readdirSync("content/posts")
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const src = readFileSync(`content/posts/${f}`, "utf8");
      const date = (src.match(/^lastmod:\s*(\S+)/m) ?? src.match(/^date:\s*(\S+)/m))?.[1];
      return [`https://kasvith.me/posts/${f.slice(0, -3)}/`, date];
    }),
);

export default defineConfig({
  site: "https://kasvith.me",
  // Gridsome served every page as a directory with a trailing slash; keep the same URLs.
  trailingSlash: "always",
  integrations: [
    sitemap({
      // Single-tag pages are noindex (thin, a post or two each), so leave them out.
      filter: (page) => !/\/tags\/[^/]+\/$/.test(page),
      serialize(item) {
        const date = postDates.get(item.url);
        if (date) item.lastmod = new Date(date).toISOString();
        return item;
      },
    }),
  ],
  markdown: {
    processor: satteri({ hastPlugins: [figureCaptions, mermaid, codeFrame] }),
    syntaxHighlight: { type: "shiki", excludeLangs: ["mermaid"] },
    shikiConfig: { theme: "github-dark-default" },
  },
});
