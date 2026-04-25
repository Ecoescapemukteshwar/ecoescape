import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Signal vite-plugin-prerender (Puppeteer) that the app has hydrated and
// Helmet has populated <head>. Lazy routes need a brief settle time.
if (typeof window !== "undefined" && typeof document !== "undefined") {
  const dispatch = () =>
    setTimeout(() => document.dispatchEvent(new Event("render-event")), 200);
  if (document.readyState === "complete") {
    dispatch();
  } else {
    window.addEventListener("load", dispatch, { once: true });
  }
}
