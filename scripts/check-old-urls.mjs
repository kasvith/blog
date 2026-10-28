// Every URL the old Gridsome site served. Run after `pnpm build`: fails if any of them
// no longer exists in dist/ and has no redirect in public/_redirects.
import { existsSync, readFileSync } from "node:fs";

const posts = [
  "deno-first-impression",
  "how-i-embedded-resources-in-go",
  "how-we-created-a-realtime-patient-monitoring-system-with-go-and-vue",
  "lets-create-a-simple-lb-go",
  "moving-to-my-own-space",
  "using-dataloader-with-nestjs",
];
const tags = [
  "blogging",
  "covid19",
  "deno",
  "es6",
  "go",
  "gohugo",
  "golang",
  "graphql",
  "hugo",
  "javascript",
  "js",
  "load-balancer",
  "nestjs",
  "ts",
  "typescript",
  "vue",
];
const urls = [
  "/",
  "/posts/",
  "/tags/",
  "/feed.xml",
  "/feed.atom",
  "/feed.json",
  "/sitemap.xml",
  "/service-worker.js",
  "/manifest.json",
  "/img/featured.jpg",
  "/favicon.ico",
  ...posts.map((p) => `/posts/${p}/`),
  ...tags.map((t) => `/tags/${t}/`),
];

const redirected = new Set(
  readFileSync("dist/_redirects", "utf8")
    .split("\n")
    .filter((line) => line.trim() && !line.startsWith("#"))
    .map((line) => line.trim().split(/\s+/)[0]),
);
const missing = urls.filter((u) => !redirected.has(u) && !existsSync(`dist${u}${u.endsWith("/") ? "index.html" : ""}`));

if (missing.length) {
  console.error(`These old URLs no longer resolve:\n${missing.join("\n")}`);
  process.exit(1);
}
console.log(`All ${urls.length} old URLs still resolve.`);
