import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PricingTestPage } from "@/components/PricingTestPage";
import { lazy, Suspense, useEffect } from "react";
import { initializeDemandMultiplier } from "@/services/pricing";

const Blog = lazy(() => import("./pages/Blog"));
const BlogPostPage = lazy(() => import("./components/BlogPostPage"));
const SuiteWithMountainView = lazy(() => import("./pages/rooms/SuiteWithMountainView"));
const SpaciousApartment = lazy(() => import("./pages/rooms/SpaciousApartment"));
const FamilyRoom = lazy(() => import("./pages/rooms/FamilyRoom"));
const FamilyRoom2 = lazy(() => import("./pages/rooms/FamilyRoom2"));

const queryClient = new QueryClient();

const App = () => {
  // Initialize demand multiplier on app startup
  useEffect(() => {
    initializeDemandMultiplier().then(multiplier => {
      if (multiplier !== 1.0) {
        console.log('✅ Demand multiplier initialized:', multiplier);
      }
    });
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Analytics />
          <SpeedInsights />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Suspense fallback={<div className="min-h-screen" />}><Blog /></Suspense>} />
              {/* Dynamic blog routing - handles all blog posts automatically */}
              <Route path="/blog/:slug" element={<Suspense fallback={<div className="min-h-screen" />}><BlogPostPage /></Suspense>} />
              {/* Room pages */}
              <Route path="/rooms/suite-with-mountain-view" element={<Suspense fallback={<div className="min-h-screen" />}><SuiteWithMountainView /></Suspense>} />
              <Route path="/rooms/spacious-apartment" element={<Suspense fallback={<div className="min-h-screen" />}><SpaciousApartment /></Suspense>} />
              <Route path="/rooms/family-room" element={<Suspense fallback={<div className="min-h-screen" />}><FamilyRoom /></Suspense>} />
              <Route path="/rooms/family-room-2" element={<Suspense fallback={<div className="min-h-screen" />}><FamilyRoom2 /></Suspense>} />
              <Route path="/test-pricing" element={<PricingTestPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
