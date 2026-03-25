import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const prerenderPlugin = null; // Temporarily disabled due to ESM/require issue in the plugin

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
      cssInjectedByJsPlugin(),
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
          globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}"],
          maximumFileSizeToCacheInBytes: 3 * 1024 * 1024, // 3 MB - TODO: Compress F4E15BBC-891E-40CB-84F4-77E47B25C194_1_105_c.webp (2.48 MB)
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
                  maxEntries: 200,
                  maxAgeSeconds: 60 * 60 * 24 * 60 // 60 days
                }
              }
            }
          ]
        },
        // Disable inline service worker registration
        injectRegister: false,
        selfDestroying: false
      }),
      prerenderPlugin && (prerenderPlugin as Function)({
        staticDir: path.join(__dirname, "dist"),
        routes: [
          "/",
          "/blog",
        ],
        renderer: new (prerenderPlugin as unknown as { PuppeteerRenderer: any }).PuppeteerRenderer({ // eslint-disable-line @typescript-eslint/no-explicit-any
          maxConcurrentRoutes: 1,
          renderAfterTime: 500,
        }),
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
            // Group heavy vendor libraries into their own chunks
            if (id.includes("node_modules/lucide-react")) {
              return "vendor-lucide";
            }
            if (id.includes("node_modules/framer-motion")) {
              return "vendor-framer";
            }
            if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router-dom")) {
              return "vendor-core";
            }

            // Split blog posts into individual chunks
            if (id.includes("src/pages/blog/") && !id.includes("node_modules")) {
              const match = id.match(/src\/pages\/blog\/([A-Z][a-zA-Z0-9]+)\.tsx/);
              if (match) {
                return `blog-${match[1].toLowerCase()}`;
              }
            }
            // Keep blog index separate
            if (id.includes("src/pages/blog/index")) {
              return "blog-index";
            }
            // Keep room pages separate
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
