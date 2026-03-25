import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

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
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
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
      prerenderPlugin && (prerenderPlugin as any)({
        staticDir: path.join(__dirname, "dist"),
        routes: [
          "/",
          "/blog",
        ],
        renderer: new (prerenderPlugin as any).PuppeteerRenderer({
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
            if (id.includes("node_modules/recharts")) {
              return "vendor-recharts";
            }
            if (id.includes("node_modules/@tanstack/react-query")) {
              return "vendor-query";
            }
            if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router-dom")) {
              return "vendor-core";
            }
            
            // Keep room and blog pages separate
            if (id.includes("src/pages/rooms")) {
              return "room-pages";
            }
            if (id.includes("src/pages/blog")) {
              return "blog-pages";
            }
          },
        },
      },
      chunkSizeWarningLimit: 800,
      cssCodeSplit: true,
      minify: 'esbuild',
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom"],
      exclude: [],
    },
  };
});
