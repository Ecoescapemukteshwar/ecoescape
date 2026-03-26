import { lazy, Suspense, useState, useRef, useCallback } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { useHashScroll } from "@/hooks/useHashScroll";
import { useInViewCallback } from "@/hooks/useInViewCallback";
import { reviewSchemas } from "@/config/testimonials";

const RoomsSection = lazy(() => import("@/components/RoomsSection").then(m => ({ default: m.RoomsSection })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const DiningSection = lazy(() => import("@/components/DiningSection").then(m => ({ default: m.DiningSection })));
const GardenSection = lazy(() => import("@/components/GardenSection").then(m => ({ default: m.GardenSection })));
const GallerySection = lazy(() => import("@/components/GallerySection").then(m => ({ default: m.GallerySection })));
const ThingsToDoSection = lazy(() => import("@/components/ThingsToDoSection").then(m => ({ default: m.ThingsToDoSection })));
const AmenitiesSection = lazy(() => import("@/components/AmenitiesSection").then(m => ({ default: m.AmenitiesSection })));
const PoliciesSection = lazy(() => import("@/components/PoliciesSection").then(m => ({ default: m.PoliciesSection })));
const BookingSection = lazy(() => import("@/components/BookingSection").then(m => ({ default: m.BookingSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SectionFallback = () => (
  <div className="min-h-[400px] flex items-center justify-center bg-muted/10">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const Index = () => {
  useHashScroll();

  // Track which sections should be loaded
  const [sectionsToLoad, setSectionsToLoad] = useState({
    rooms: false,
    testimonials: false,
    dining: false,
    garden: false,
    gallery: false,
    thingsToDo: false,
    amenities: false,
    policies: false,
    booking: false,
    footer: false,
  });

  // Use refs to ensure callbacks don't cause re-renders
  const sectionsToLoadRef = useRef(sectionsToLoad);
  sectionsToLoadRef.current = sectionsToLoad;

  // Create stable callbacks for each section
  const loadRooms = useCallback(() => {
    if (!sectionsToLoadRef.current.rooms) {
      setSectionsToLoad(prev => ({ ...prev, rooms: true }));
    }
  }, []);

  const loadTestimonials = useCallback(() => {
    if (!sectionsToLoadRef.current.testimonials) {
      setSectionsToLoad(prev => ({ ...prev, testimonials: true }));
    }
  }, []);

  const loadDining = useCallback(() => {
    if (!sectionsToLoadRef.current.dining) {
      setSectionsToLoad(prev => ({ ...prev, dining: true }));
    }
  }, []);

  const loadGarden = useCallback(() => {
    if (!sectionsToLoadRef.current.garden) {
      setSectionsToLoad(prev => ({ ...prev, garden: true }));
    }
  }, []);

  const loadGallery = useCallback(() => {
    if (!sectionsToLoadRef.current.gallery) {
      setSectionsToLoad(prev => ({ ...prev, gallery: true }));
    }
  }, []);

  const loadThingsToDo = useCallback(() => {
    if (!sectionsToLoadRef.current.thingsToDo) {
      setSectionsToLoad(prev => ({ ...prev, thingsToDo: true }));
    }
  }, []);

  const loadAmenities = useCallback(() => {
    if (!sectionsToLoadRef.current.amenities) {
      setSectionsToLoad(prev => ({ ...prev, amenities: true }));
    }
  }, []);

  const loadPolicies = useCallback(() => {
    if (!sectionsToLoadRef.current.policies) {
      setSectionsToLoad(prev => ({ ...prev, policies: true }));
    }
  }, []);

  const loadBooking = useCallback(() => {
    if (!sectionsToLoadRef.current.booking) {
      setSectionsToLoad(prev => ({ ...prev, booking: true }));
    }
  }, []);

  const loadFooter = useCallback(() => {
    if (!sectionsToLoadRef.current.footer) {
      setSectionsToLoad(prev => ({ ...prev, footer: true }));
    }
  }, []);

  // Set up intersection observers for each section
  const roomsRef = useInViewCallback(loadRooms, { threshold: 0.1, rootMargin: '200px' });
  const testimonialsRef = useInViewCallback(loadTestimonials, { threshold: 0.1, rootMargin: '200px' });
  const diningRef = useInViewCallback(loadDining, { threshold: 0.1, rootMargin: '200px' });
  const gardenRef = useInViewCallback(loadGarden, { threshold: 0.1, rootMargin: '200px' });
  const galleryRef = useInViewCallback(loadGallery, { threshold: 0.1, rootMargin: '200px' });
  const thingsToDoRef = useInViewCallback(loadThingsToDo, { threshold: 0.1, rootMargin: '200px' });
  const amenitiesRef = useInViewCallback(loadAmenities, { threshold: 0.1, rootMargin: '200px' });
  const policiesRef = useInViewCallback(loadPolicies, { threshold: 0.1, rootMargin: '200px' });
  const bookingRef = useInViewCallback(loadBooking, { threshold: 0.1, rootMargin: '200px' });
  const footerRef = useInViewCallback(loadFooter, { threshold: 0.1, rootMargin: '200px' });

  return (
    <div className="min-h-screen">
      <PageMeta
        title="Best Homestay in Mukteshwar | Ecoescape Uttarakhand - Book Direct for Best Rates"
        description="Book Ecoescape Mukteshwar - best boutique homestay in Mukteshwar, Uttarakhand with sunrise views, 100+ plant garden, in-house restaurant. Perfect for families, couples & workations."
        canonical="https://ecoescapemukteshwar.com"
        ogTitle="Ecoescape Mukteshwar | Boutique Homestay with Sunrise Views & Garden"
        ogDescription="A Green Paradise in the Mountains. Boutique homestay with 100+ plant varieties, stunning sunrise views, in-house restaurant & terrace dining. Book direct for best rates."
        jsonLd={reviewSchemas}
      />
      <Header />
      <main>
        {/* Hero and Benefits are eagerly loaded - above the fold */}
        <HeroSection />
        <BenefitsSection />

        {/* Other sections load progressively as user scrolls */}
        <div ref={roomsRef}>
          {sectionsToLoad.rooms ? (
            <Suspense fallback={<SectionFallback />}>
              <RoomsSection />
            </Suspense>
          ) : (
            <div className="min-h-[200px]" />
          )}
        </div>

        <div ref={testimonialsRef}>
          {sectionsToLoad.testimonials ? (
            <Suspense fallback={<SectionFallback />}>
              <TestimonialsSection />
            </Suspense>
          ) : (
            <div className="min-h-[200px]" />
          )}
        </div>

        <div ref={diningRef}>
          {sectionsToLoad.dining ? (
            <Suspense fallback={<SectionFallback />}>
              <DiningSection />
            </Suspense>
          ) : (
            <div className="min-h-[200px]" />
          )}
        </div>

        <div ref={gardenRef}>
          {sectionsToLoad.garden ? (
            <Suspense fallback={<SectionFallback />}>
              <GardenSection />
            </Suspense>
          ) : (
            <div className="min-h-[200px]" />
          )}
        </div>

        <div ref={galleryRef}>
          {sectionsToLoad.gallery ? (
            <Suspense fallback={<SectionFallback />}>
              <GallerySection />
            </Suspense>
          ) : (
            <div className="min-h-[200px]" />
          )}
        </div>

        <div ref={thingsToDoRef}>
          {sectionsToLoad.thingsToDo ? (
            <Suspense fallback={<SectionFallback />}>
              <ThingsToDoSection />
            </Suspense>
          ) : (
            <div className="min-h-[200px]" />
          )}
        </div>

        <div ref={amenitiesRef}>
          {sectionsToLoad.amenities ? (
            <Suspense fallback={<SectionFallback />}>
              <AmenitiesSection />
            </Suspense>
          ) : (
            <div className="min-h-[200px]" />
          )}
        </div>

        <div ref={policiesRef}>
          {sectionsToLoad.policies ? (
            <Suspense fallback={<SectionFallback />}>
              <PoliciesSection />
            </Suspense>
          ) : (
            <div className="min-h-[200px]" />
          )}
        </div>

        <div ref={bookingRef}>
          {sectionsToLoad.booking ? (
            <Suspense fallback={<SectionFallback />}>
              <BookingSection />
            </Suspense>
          ) : (
            <div className="min-h-[200px]" />
          )}
        </div>
      </main>

      <div ref={footerRef}>
        {sectionsToLoad.footer ? (
          <Suspense fallback={<SectionFallback />}>
            <Footer />
          </Suspense>
        ) : (
          <div className="min-h-[200px]" />
        )}
      </div>

      <FloatingCTA />
    </div>
  );
};

export default Index;
