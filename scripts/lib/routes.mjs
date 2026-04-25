// Single source of truth for prerendered routes.
// Imported by scripts/generate-sitemap.mjs and vite.config.ts.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..");
const BLOG_INDEX = path.join(repoRoot, "src", "pages", "blog", "index.ts");

export const SITE_URL = "https://ecoescapemukteshwar.com";

export const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/aboutus", priority: "0.8", changefreq: "monthly" },
  { path: "/experiences", priority: "0.8", changefreq: "monthly" },
  // /contactus is a client-side <Navigate> redirect — handled at the platform
  // level via a 301 redirect in vercel.json / netlify.toml, so omit from
  // both prerender and sitemap to avoid duplicate-content / soft-404 noise.
  { path: "/blog", priority: "0.9", changefreq: "weekly" },
  { path: "/rooms/suite-with-mountain-view", priority: "0.9", changefreq: "monthly" },
  { path: "/rooms/spacious-apartment", priority: "0.9", changefreq: "monthly" },
  { path: "/rooms/family-room", priority: "0.9", changefreq: "monthly" },
  { path: "/rooms/family-room-2", priority: "0.9", changefreq: "monthly" },
];

export function readBlogSlugs() {
  const src = fs.readFileSync(BLOG_INDEX, "utf8");
  // Matches the keys of the blogComponents object: 'some-slug': lazy(() => ...)
  const re = /['"]([a-z0-9][a-z0-9-]+)['"]\s*:\s*lazy/g;
  return [...src.matchAll(re)].map((m) => m[1]);
}

export function getAllRoutes() {
  const blogSlugs = readBlogSlugs();
  return [
    ...STATIC_ROUTES.map(({ path: p }) => p),
    ...blogSlugs.map((s) => `/blog/${s}`),
  ];
}

export function getSitemapEntries() {
  const blogSlugs = readBlogSlugs();
  return [
    ...STATIC_ROUTES,
    ...blogSlugs.map((s) => ({
      path: `/blog/${s}`,
      priority: "0.7",
      changefreq: "monthly",
    })),
  ];
}
