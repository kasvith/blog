# kasvith.me

Personal site and blog of Kasun Vithanage, built with [Astro](https://astro.build) and deployed to Cloudflare Workers as static assets.

## Commands

```sh
pnpm install
pnpm dev       # local dev server
pnpm build     # static build into dist/
pnpm preview   # serve dist/ through Wrangler, with _redirects applied
pnpm check     # astro check (types in .astro files)
pnpm lint      # oxlint
pnpm deploy    # build and upload to Cloudflare
```

## Where things live

- `content/posts/*.md`: blog posts. Images sit next to them in `content/posts/images/`, and the file name is the URL (`/posts/<file-name>/`).
- `src/content/projects/*.md`: open source project pages (`/projects/<name>/`).
- `src/data/site.ts`: name, links, work, experience and education shown on the home and About pages.
- `public/`: files served as-is, including `_redirects` for old Gridsome URLs and a `service-worker.js` that removes the old site's service worker from returning visitors.
