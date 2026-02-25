import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { PhotoTour } from "@/components/PhotoTour";
import { FloatingCTA } from "@/components/FloatingCTA";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SectionFallback = () => <div className="min-h-[200px]" />;

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PhotoTour />
      </main>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <FloatingCTA />
    </div>
  );
};

export default GalleryPage;
