import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from "rollup-plugin-visualizer";

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
    ],
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
