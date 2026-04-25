// Build-time sitemap generator. Run via `npm run build` (prebuild hook).
// Reads routes from scripts/lib/routes.mjs so prerender + sitemap stay in sync.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import { SITE_URL, getSitemapEntries } from "./lib/routes.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const OUTPUT = path.join(repoRoot, "public", "sitemap.xml");

const today = new Date().toISOString().slice(0, 10);

function gitLastmod(relPath) {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${relPath}"`, {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out || today;
  } catch {
    return today;
  }
}

function lastmodFor(routePath) {
  if (routePath === "/") return gitLastmod("src/pages/HomePage.tsx");
  if (routePath === "/about") return gitLastmod("src/pages/AboutPage.tsx");
  if (routePath === "/aboutus") return gitLastmod("src/pages/AboutUs.tsx");
  if (routePath === "/experiences") return gitLastmod("src/pages/ExperiencesPage.tsx");
  if (routePath === "/contactus") return gitLastmod("src/pages/ContactUs.tsx");
  if (routePath === "/blog") return gitLastmod("src/pages/Blog.tsx");
  if (routePath.startsWith("/rooms/")) {
    const slug = routePath.replace("/rooms/", "");
    const componentMap = {
      "suite-with-mountain-view": "SuiteWithMountainView",
      "spacious-apartment": "SpaciousApartment",
      "family-room": "FamilyRoom",
      "family-room-2": "FamilyRoom2",
    };
    const file = componentMap[slug];
    return file ? gitLastmod(`src/pages/rooms/${file}.tsx`) : today;
  }
  if (routePath.startsWith("/blog/")) {
    return gitLastmod("src/pages/blog/index.ts");
  }
  return today;
}

const entries = getSitemapEntries();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map((e) => {
    const loc = `${SITE_URL}${e.path === "/" ? "/" : e.path}`;
    const lastmod = lastmodFor(e.path);
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

fs.writeFileSync(OUTPUT, xml, "utf8");
console.log(`Wrote ${entries.length} URLs to public/sitemap.xml`);
