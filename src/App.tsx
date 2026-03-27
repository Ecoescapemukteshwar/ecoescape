import { lazy, Suspense, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { PageMeta } from "@/seo/PageMeta";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const BlogCardSkeleton = lazy(() => import("@/components/BlogCardSkeleton").then(m => ({ default: m.BlogCardSkeleton })));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./pages/NotFound"));
import {
  RoomsRedirect,
  DiningRedirect,
  GardenRedirect,
  GalleryRedirect,
  ActivitiesRedirect,
  ReviewsRedirect,
  BookingRedirect,
  LocationRedirect,
} from "./pages/sectionRedirects";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { lazy as lazyPricing } from "react";
const PricingTestPage = lazyPricing(() => import("./components/PricingTestPage").then(m => ({ default: () => (
    <>
      <PageMeta
        title="Pricing Test - Ecoescape Mukteshwar"
        description="Internal pricing test page"
        noindex={true}
      />
      <m.default />
    </>
  ) })));
import { initializeDemandMultiplier } from "@/services/pricing";

const TooltipProvider = lazy(() =>
  import("@/components/ui/tooltip").then(m => ({ default: m.TooltipProvider }))
);

const Blog = lazy(() => import("./pages/Blog"));
const BlogPostPage = lazy(() => import("./components/BlogPostPage"));
const SuiteWithMountainView = lazy(() => import("./pages/rooms/SuiteWithMountainView"));
const SpaciousApartment = lazy(() => import("./pages/rooms/SpaciousApartment"));
const FamilyRoom = lazy(() => import("./pages/rooms/FamilyRoom"));
const FamilyRoom2 = lazy(() => import("./pages/rooms/FamilyRoom2"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Index = lazy(() => import("./pages/Index"));

// Index page fallback component
const IndexFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground text-sm">Loading Ecoescape...</p>
    </div>
  </div>
);

// Deferred analytics component - loads after page is interactive
const DeferredAnalytics = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Defer analytics until after page is interactive (2 second delay + requestIdleCallback)
    const timer = setTimeout(() => {
      // Use requestIdleCallback if available, otherwise load immediately
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setShouldRender(true));
      } else {
        setShouldRender(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Skip analytics in dev mode and on localhost/preview
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
    }, 3000); // Wait 3s after page load
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <TooltipProvider>
          <DeferredAnalytics />
        <Toaster />
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Suspense fallback={<IndexFallback />}><Index /></Suspense>} />
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
              {/* Dynamic blog routing - handles all blog posts automatically */}
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
              {/* Section redirect routes - clean URLs that redirect to hash sections */}
              <Route path="/rooms" element={<RoomsRedirect />} />
              <Route path="/dining" element={<DiningRedirect />} />
              <Route path="/garden" element={<GardenRedirect />} />
              <Route path="/gallery" element={<GalleryRedirect />} />
              <Route path="/activities" element={<ActivitiesRedirect />} />
              <Route path="/location" element={<LocationRedirect />} />
              <Route path="/reviews" element={<ReviewsRedirect />} />
              <Route path="/booking" element={<BookingRedirect />} />
              <Route path="/contactus" element={<Suspense fallback={<div className="min-h-screen" />}><ContactUs /></Suspense>} />
              <Route path="/aboutus" element={<Suspense fallback={<div className="min-h-screen" />}><AboutUs /></Suspense>} />
              <Route path="/test-pricing" element={<PricingTestPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<Suspense fallback={<div className="min-h-screen" />}><NotFound /></Suspense>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
