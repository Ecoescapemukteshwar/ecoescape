import { lazy, Suspense, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { PhotoTour, getAvailableSuitesSync, toUrlFriendly } from "@/components/PhotoTour";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SectionFallback = () => <div className="min-h-[200px]" />;

const GalleryPage = () => {
  const { suite } = useParams<{ suite: string }>();
  const navigate = useNavigate();

  // Redirect to first suite if no suite specified
  useEffect(() => {
    if (!suite) {
      // Get available suites and redirect to the first one
      const suites = getAvailableSuitesSync();
      if (suites.length > 0) {
        navigate(`/gallery/${toUrlFriendly(suites[0])}`, { replace: true });
      }
    }
  }, [suite, navigate]);

  // Show loading while redirecting
  if (!suite) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#222222] mx-auto mb-4"></div>
          <p className="text-[#222222]">Loading gallery...</p>
        </div>
      </div>
    );
  }

  const suiteLabel = suite
    ? suite.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "Gallery";

  return (
    <div className="min-h-screen">
      <PageMeta
        title={`${suiteLabel} Photo Tour | Ecoescape Mukteshwar`}
        description={`Take a photo tour of the ${suiteLabel} at Ecoescape Mukteshwar — interiors, mountain views, garden, and amenities of our boutique homestay in Uttarakhand.`}
        canonical={`/gallery/${suite}`}
      />
      <Header />
      <main>
        <PhotoTour suiteName={suite} />
      </main>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <FloatingCTA />
    </div>
  );
};

export default GalleryPage;
