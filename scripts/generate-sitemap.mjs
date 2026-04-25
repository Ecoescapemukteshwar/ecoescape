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

// Image extensions per Google's Sitemap image protocol. Only attached to
// the URLs where we have a known representative image — all four room
// pages, the homepage, and the workcation landing page.
const IMAGE_EXTENSIONS = {
  "/": [
    { loc: `${SITE_URL}/preview.webp`, title: "Sunrise from Ecoescape Mukteshwar" },
    { loc: `${SITE_URL}/LOGO-opt.webp`, title: "Ecoescape Mukteshwar logo" },
  ],
  "/workcation-mukteshwar": [
    { loc: `${SITE_URL}/preview.webp`, title: "Workcation desk setup at Ecoescape Mukteshwar" },
  ],
  "/rooms/suite-with-mountain-view": [
    { loc: `${SITE_URL}/images/suite/IMG_4065-opt.webp`, title: "Suite with Mountain View — Ecoescape Mukteshwar" },
  ],
  "/rooms/spacious-apartment": [
    { loc: `${SITE_URL}/images/two_bed_room_apartment/IMG_1597.webp`, title: "Spacious 2-Bedroom Apartment — Ecoescape Mukteshwar" },
  ],
  "/rooms/family-room": [
    { loc: `${SITE_URL}/images/room-family.webp`, title: "Family Room — Ecoescape Mukteshwar" },
  ],
  "/rooms/family-room-2": [
    { loc: `${SITE_URL}/images/room-deluxe.webp`, title: "Family Room 2 — Ecoescape Mukteshwar" },
  ],
};

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries
  .map((e) => {
    const loc = `${SITE_URL}${e.path === "/" ? "/" : e.path}`;
    const lastmod = lastmodFor(e.path);
    const images = IMAGE_EXTENSIONS[e.path] || [];
    const imageBlocks = images
      .map(
        (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
    </image:image>`,
      )
      .join("\n");
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>${imageBlocks ? "\n" + imageBlocks : ""}
  </url>`;
  })
  .join("\n")}
</urlset>
`;

fs.writeFileSync(OUTPUT, xml, "utf8");
const totalImages = Object.values(IMAGE_EXTENSIONS).reduce((n, arr) => n + arr.length, 0);
console.log(`Wrote ${entries.length} URLs (${totalImages} images) to public/sitemap.xml`);
