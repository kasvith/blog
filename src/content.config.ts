import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  // Posts stay in content/posts, so their history and relative image paths are untouched.
  loader: glob({ pattern: "*.md", base: "./content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      lastmod: z.coerce.date().optional(),
      published: z.boolean().default(true),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      keywords: z.array(z.string()).default([]),
      cover_image: image().optional(),
      // BCP 47 code of the post body; titles and site chrome stay English.
      lang: z.string().default("en"),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    repo: z.string(),
    lang: z.string(),
    stars: z.number(),
    site: z.url().optional(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = { posts, projects };
