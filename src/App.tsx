import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { PricingTestPage } from "@/components/PricingTestPage";
import { lazy, Suspense, useEffect } from "react";
import { initializeDemandMultiplier } from "@/services/pricing";

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

const App = () => {
  // Initialize demand multiplier on app startup
  useEffect(() => {
    initializeDemandMultiplier();
  }, []);

  const isDev = import.meta.env.DEV;

  return (
    <ErrorBoundary>
      <TooltipProvider>
        {!isDev && <Analytics />}
        {!isDev && <SpeedInsights />}
        <Toaster />
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Suspense fallback={<IndexFallback />}><Index /></Suspense>} />
              <Route path="/blog" element={<Suspense fallback={<div className="min-h-screen" />}><Blog /></Suspense>} />
              {/* Dynamic blog routing - handles all blog posts automatically */}
              <Route path="/blog/:slug" element={<Suspense fallback={<div className="min-h-screen" />}><BlogPostPage /></Suspense>} />
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
    </ErrorBoundary>
  );
};

export default App;
