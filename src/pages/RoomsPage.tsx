import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { RoomsSection } from "@/components/RoomsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FloatingCTA } from "@/components/FloatingCTA";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";

const BookingSection = lazy(() => import("@/components/BookingSection").then(m => ({ default: m.BookingSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SectionFallback = () => <div className="min-h-[200px]" />;

const RoomsPage = () => {
  const location = useLocation();
  const [selectedRoom, setSelectedRoom] = useState<string | undefined>(undefined);
  const bookingSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if a room was preselected from navigation state
    if (location.state?.selectedRoom) {
      setSelectedRoom(location.state.selectedRoom);
      // Scroll to booking form after a short delay to ensure the section is rendered
      setTimeout(() => {
        bookingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location.state]);

  const handleBookRoom = (roomType: string) => {
    setSelectedRoom(roomType);
    // Scroll to booking form
    bookingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Find Your Perfect Mountain Retreat
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
                Choose Your Room
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore our four unique accommodation options designed for families, groups, and couples.
                Each room offers privacy, comfort, and stunning Himalayan views.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Flexible dates</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>Best price guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Room Cards */}
        <RoomsSection mode="modal" preselectedRoom={selectedRoom} onBookRoom={handleBookRoom} />

        {/* Booking Form */}
        <div ref={bookingSectionRef} id="booking">
          <Suspense fallback={<SectionFallback />}>
            <BookingSection preselectedRoom={selectedRoom} />
          </Suspense>
        </div>

        {/* Testimonials */}
        <Suspense fallback={<SectionFallback />}>
          <TestimonialsSection />
        </Suspense>
      </main>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <FloatingCTA />
    </div>
  );
};

export default RoomsPage;
