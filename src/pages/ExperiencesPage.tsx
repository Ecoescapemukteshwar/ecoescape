import { lazy, Suspense, useEffect } from "react";
import { Header } from "@/components/Header";
import { FloatingCTA } from "@/components/FloatingCTA";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const DiningSection = lazy(() => import("@/components/DiningSection").then(m => ({ default: m.DiningSection })));
const GardenSection = lazy(() => import("@/components/GardenSection").then(m => ({ default: m.GardenSection })));
const ThingsToDoSection = lazy(() => import("@/components/ThingsToDoSection").then(m => ({ default: m.ThingsToDoSection })));
const AmenitiesSection = lazy(() => import("@/components/AmenitiesSection").then(m => ({ default: m.AmenitiesSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SectionFallback = () => <div className="min-h-[200px]" />;

const ExperiencesPage = () => {
  const location = useLocation();

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
                Experiences at Ecoescape
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                From authentic Kumaoni dining to peaceful garden walks, discover the experiences that make your stay unforgettable.
              </p>
            </motion.div>
          </div>
        </section>

        <Suspense fallback={<SectionFallback />}><DiningSection /></Suspense>
        <Suspense fallback={<SectionFallback />}><GardenSection /></Suspense>
        <Suspense fallback={<SectionFallback />}><ThingsToDoSection /></Suspense>
        <Suspense fallback={<SectionFallback />}><AmenitiesSection /></Suspense>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container text-center">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">
              Ready to Experience Ecoescape?
            </h2>
            <Button
              variant="hero"
              size="xl"
              onClick={() => {
                window.location.href = "/#booking";
              }}
            >
              Book Your Stay
            </Button>
          </div>
        </section>
      </main>

      <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
      <FloatingCTA />
    </div>
  );
};

export default ExperiencesPage;
