import { lazy, Suspense, useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { useLocation } from "react-router-dom";
import { type RoomType } from "@/services/pricing";

const RoomsSection = lazy(() => import("@/components/RoomsSection").then(m => ({ default: m.RoomsSection })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const GallerySection = lazy(() => import("@/components/GallerySection").then(m => ({ default: m.GallerySection })));
const BookingSection = lazy(() => import("@/components/BookingSection").then(m => ({ default: m.BookingSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SectionFallback = () => <div className="min-h-[200px]" />;

const HomePage = () => {
  const location = useLocation();
  const [selectedRoom, setSelectedRoom] = useState<RoomType | undefined>(undefined);

  // Handle hash scrolling for deep links
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  const handleBookRoom = (roomType: RoomType) => {
    setSelectedRoom(roomType);
  };
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Ecoescape Mukteshwar | Boutique Homestay with Sunrise Views & Garden"
        description="Boutique homestay in Mukteshwar village with 100+ plant garden, sunrise views, in-house Kumaoni restaurant, and terrace dining. Direct booking, secure 24/7. The best place to stay in Mukteshwar, Uttarakhand."
        canonical="/"
      />
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <Suspense fallback={<SectionFallback />}>
          <RoomsSection mode="teaser" onBookRoom={handleBookRoom} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GallerySection />
        </Suspense>
        <div id="booking">
          <Suspense fallback={<SectionFallback />}>
            <BookingSection preselectedRoom={selectedRoom} />
          </Suspense>
        </div>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <FloatingCTA />
    </div>
  );
};

export default HomePage;
