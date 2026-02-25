import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { FloatingCTA } from "@/components/FloatingCTA";
import { motion } from "framer-motion";
import { GallerySection } from "@/components/GallerySection";
import { Button } from "@/components/ui/button";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const SectionFallback = () => <div className="min-h-[200px]" />;

const GalleryPage = () => {
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
                Photo Gallery
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Take a visual journey through Ecoescape — from our sunrise views and blooming gardens to authentic Kumaoni cuisine.
              </p>
            </motion.div>
          </div>
        </section>

        <Suspense fallback={<SectionFallback />}><GallerySection /></Suspense>

        <section className="py-20 bg-background">
          <div className="container text-center">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">
              Inspired? Book Your Stay
            </h2>
            <Button variant="hero" size="xl" onClick={() => window.location.href = "/rooms"}>
              Check Availability
            </Button>
          </div>
        </section>
      </main>

      <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
      <FloatingCTA />
    </div>
  );
};

export default GalleryPage;
