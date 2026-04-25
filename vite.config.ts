import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "node:fs";
import { createRequire } from "node:module";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from "rollup-plugin-visualizer";
// vite-plugin-prerender@1.0.8 ships a broken .mjs that uses CJS require()
// AND a restrictive exports map that blocks subpath imports. Load the .cjs
// via createRequire pointed at an absolute path inside node_modules.
const cjsRequire = createRequire(import.meta.url);
const vitePrerender = cjsRequire(
  path.resolve(
    __dirname,
    "node_modules",
    "vite-plugin-prerender",
    "dist",
    "index.cjs",
  ),
);
// @ts-expect-error -- shared route module, also consumed by scripts/generate-sitemap.mjs.
import { getAllRoutes } from "./scripts/lib/routes.mjs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
        manifest: {
          name: "Ecoescape Mukteshwar",
          short_name: "Ecoescape",
          description: "Eco-friendly homestay in Mukteshwar with stunning Himalayan views",
          theme_color: "#059669",
          background_color: "#ffffff",
          display: "standalone",
          icons: [
            {
              src: "/og-image.jpg",
              sizes: "192x192",
              type: "image/jpeg"
            },
            {
              src: "/og-image.jpg",
              sizes: "512x512",
              type: "image/jpeg"
            }
          ]
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,svg,woff,woff2}"],
          globIgnores: ["**/stats.html"], // Exclude bundle analyzer output from PWA
          maximumFileSizeToCacheInBytes: 200 * 1024, // 200KB - Precache JS/CSS/fonts only, large images use runtime caching
          runtimeCaching: [
            {
              urlPattern: /^https?:\/\/.*/i,
              handler: "NetworkFirst",
              options: {
                cacheName: "ecoescape-cache",
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /\.(?:webp|png|jpg|jpeg|svg)$/i,
              handler: "CacheFirst",
              options: {
                cacheName: "image-cache",
                expiration: {
                  maxEntries: 50, // Reduced from 200 to limit cache size
                  maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days (reduced from 60)
                }
              }
            }
          ]
        },
        // Disable inline service worker registration
        injectRegister: false,
        selfDestroying: false
      }),
      visualizer({
        filename: './dist/stats.html',
        gzipSize: true,
        brotliSize: true,
        open: false,
      }),
      // Prerender every known route at build time so non-JS crawlers see
      // populated <head> and content. Resolves audit C1/C3/H1.
      //
      // OPT-IN: requires ENABLE_PRERENDER=1 in the env. The bundled
      // Chromium in puppeteer@1.20 can't launch on Apple Silicon or on
      // Vercel/Netlify's serverless Linux build containers. Locally we
      // detect the user's installed Chrome (set in `bun run build`).
      // For Vercel/Netlify: leave ENABLE_PRERENDER unset until a proper
      // Linux Chromium (e.g. @sparticuz/chromium) is wired up — the SPA
      // shell will be served instead, which is what the site shipped
      // before this PR. PR description tracks the follow-up.
      mode === "production" &&
        process.env.ENABLE_PRERENDER === "1" &&
        vitePrerender({
          staticDir: path.resolve(__dirname, "dist"),
          routes: [...getAllRoutes(), "/404"],
          renderer: new vitePrerender.PuppeteerRenderer({
            // Concurrency 2 + 4s wait keeps build at ~2 min (vs ~5 min
            // sequential) and is reliable. Concurrency 4 caused CPU
            // contention that made Helmet's rAF batch miss the wait
            // window on ~25% of routes. Don't raise concurrency further.
            renderAfterTime: 4000,
            maxConcurrentRoutes: 2,
            headless: true,
            // Surface in-page errors so we can debug ErrorBoundary triggers.
            consoleHandler(route: string, message: { type(): string; text(): string }) {
              const txt = message.text();
              if (route.includes("kumaoni-food-guide")) {
                console.warn(`[${route}] (${message.type()}) ${txt}`);
              } else if (message.type() === "error" && !txt.includes("net::ERR_FAILED")) {
                console.warn(`[prerender:${route}] ${txt}`);
              }
            },
            // Skip third-party scripts (analytics, GTM) during prerender.
            skipThirdPartyRequests: true,
            executablePath:
              process.env.PUPPETEER_EXECUTABLE_PATH ||
              (process.platform === "darwin" &&
              fs.existsSync("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")
                ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
                : undefined),
          }),
          postProcess(ctx: { route: string; html: string; outputPath: string | null }) {
            // Rename /404/index.html → /404.html so Vercel/Netlify auto-serve it
            // for unknown paths with HTTP 404. Resolves audit C4 (soft-404).
            if (ctx.route === "/404") {
              ctx.outputPath = path.resolve(__dirname, "dist", "404.html");
            }
            return ctx;
          },
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id: string) => {
            if (id.includes("node_modules/lucide-react")) {
              return "vendor-lucide";
            }
            if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router-dom")) {
              return "vendor-core";
            }
            if (id.includes("src/pages/blog/") && !id.includes("node_modules")) {
              const match = id.match(/src\/pages\/blog\/([A-Z][a-zA-Z0-9]+)\.tsx/);
              if (match) {
                return `blog-${match[1].toLowerCase()}`;
              }
            }
            if (id.includes("src/pages/blog/index")) {
              return "blog-index";
            }
            if (id.includes("src/pages/rooms")) {
              return "room-pages";
            }
          },
        },
      },
      chunkSizeWarningLimit: 400,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom"],
      exclude: [],
    },
  };
});
