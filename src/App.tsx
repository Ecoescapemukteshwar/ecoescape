import { lazy, Suspense, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { initializeDemandMultiplier } from "@/services/pricing";
import {
  RoomsRedirect,
  DiningRedirect,
  GardenRedirect,
  ActivitiesRedirect,
  ReviewsRedirect,
  BookingRedirect,
  LocationRedirect,
  TariffsRedirect,
} from "./pages/sectionRedirects";

// Main pages (from dev)
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ExperiencesPage = lazy(() => import("./pages/ExperiencesPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));

// Blog (from main)
const Blog = lazy(() => import("./pages/Blog"));
const BlogPostPage = lazy(() => import("./components/BlogPostPage"));
const BlogCardSkeleton = lazy(() => import("@/components/BlogCardSkeleton").then(m => ({ default: m.BlogCardSkeleton })));

// Room pages (from main)
const SuiteWithMountainView = lazy(() => import("./pages/rooms/SuiteWithMountainView"));
const SpaciousApartment = lazy(() => import("./pages/rooms/SpaciousApartment"));
const FamilyRoom = lazy(() => import("./pages/rooms/FamilyRoom"));
const FamilyRoom2 = lazy(() => import("./pages/rooms/FamilyRoom2"));

// Other pages
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PricingTestPage = lazy(() => import("./components/PricingTestPage").then(m => ({ default: m.PricingTestPage })));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground text-sm">Loading Ecoescape...</p>
    </div>
  </div>
);

// Deferred analytics - loads after page is interactive
const DeferredAnalytics = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setShouldRender(true));
      } else {
        setShouldRender(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const isDev = import.meta.env.DEV;
  const isLocalhost = typeof window !== 'undefined' && (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname === ''
  );
  if (!shouldRender || isDev || isLocalhost) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
};

const App = () => {
  // Defer demand multiplier init to avoid competing with hero image bandwidth
  useEffect(() => {
    const timer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => initializeDemandMultiplier());
      } else {
        initializeDemandMultiplier();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <DeferredAnalytics />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Suspense fallback={<PageFallback />}><HomePage /></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<PageFallback />}><AboutPage /></Suspense>} />
              <Route path="/experiences" element={<Suspense fallback={<PageFallback />}><ExperiencesPage /></Suspense>} />
              <Route path="/gallery" element={<Suspense fallback={<PageFallback />}><GalleryPage /></Suspense>} />
              <Route path="/gallery/:suite" element={<Suspense fallback={<PageFallback />}><GalleryPage /></Suspense>} />

              {/* Blog */}
              <Route
                path="/blog"
                element={
                  <Suspense fallback={
                    <div className="min-h-screen bg-background pt-40 pb-20">
                      <div className="container max-w-4xl">
                        <div className="text-center mb-14">
                          <div className="h-12 bg-muted rounded w-64 mx-auto mb-4 animate-pulse" />
                          <div className="h-6 bg-muted rounded w-96 mx-auto animate-pulse" />
                        </div>
                        <div className="space-y-8">
                          <BlogCardSkeleton />
                          <BlogCardSkeleton />
                          <BlogCardSkeleton />
                        </div>
                      </div>
                    </div>
                  }>
                    <Blog />
                  </Suspense>
                }
              />
              <Route
                path="/blog/:slug"
                element={
                  <Suspense fallback={
                    <div className="min-h-screen bg-background pt-40 pb-20">
                      <div className="container max-w-4xl">
                        <div className="space-y-8 animate-pulse">
                          <div className="h-8 bg-muted rounded w-3/4" />
                          <div className="h-4 bg-muted rounded w-1/2" />
                          <div className="h-64 bg-muted rounded" />
                          <div className="space-y-4">
                            <div className="h-4 bg-muted rounded" />
                            <div className="h-4 bg-muted rounded" />
                            <div className="h-4 bg-muted rounded w-5/6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  }>
                    <BlogPostPage />
                  </Suspense>
                }
              />

              {/* Room pages */}
              <Route path="/rooms/suite-with-mountain-view" element={<Suspense fallback={<div className="min-h-screen" />}><SuiteWithMountainView /></Suspense>} />
              <Route path="/rooms/spacious-apartment" element={<Suspense fallback={<div className="min-h-screen" />}><SpaciousApartment /></Suspense>} />
              <Route path="/rooms/family-room" element={<Suspense fallback={<div className="min-h-screen" />}><FamilyRoom /></Suspense>} />
              <Route path="/rooms/family-room-2" element={<Suspense fallback={<div className="min-h-screen" />}><FamilyRoom2 /></Suspense>} />

              {/* Section redirect routes */}
              <Route path="/rooms" element={<RoomsRedirect />} />
              <Route path="/dining" element={<DiningRedirect />} />
              <Route path="/garden" element={<GardenRedirect />} />
              <Route path="/activities" element={<ActivitiesRedirect />} />
              <Route path="/location" element={<LocationRedirect />} />
              <Route path="/reviews" element={<ReviewsRedirect />} />
              <Route path="/booking" element={<BookingRedirect />} />
              <Route path="/tariffs" element={<TariffsRedirect />} />

              {/* Other pages */}
              <Route path="/aboutus" element={<Suspense fallback={<div className="min-h-screen" />}><AboutUs /></Suspense>} />
              <Route path="/contactus" element={<Suspense fallback={<div className="min-h-screen" />}><ContactUs /></Suspense>} />
              <Route path="/test-pricing" element={<Suspense fallback={<div className="min-h-screen" />}><PricingTestPage /></Suspense>} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<Suspense fallback={<div className="min-h-screen" />}><NotFound /></Suspense>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
