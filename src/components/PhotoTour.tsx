import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Flattened photo with section info
interface PhotoWithSection {
  photo: Photo;
  sectionId: string;
  sectionTitle: string;
  globalIndex: number;
}

interface Photo {
  id: string;
  src: string;
  alt: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  photos: Photo[];
}

const sections: Section[] = [
  {
    id: "deluxe-suite",
    title: "Deluxe Suite",
    description: "Experience luxury in our beautifully appointed suite with stunning Himalayan views",
    photos: Array.from({ length: 4 }, (_, i) => ({
      id: `deluxe-${i}`,
      src: `/PhotoTour/Deluxe Suite/img${i + 1}.webp`,
      alt: `Deluxe Suite photo ${i + 1}`,
    })),
  },
  {
    id: "two-bedroom",
    title: "Two Bedroom Apartment",
    description: "Spacious apartment perfect for families, with separate living and dining areas",
    photos: Array.from({ length: 7 }, (_, i) => ({
      id: `two-bed-${i}`,
      src: `/PhotoTour/Two Bedroom Apartment/img${i + 1}.webp`,
      alt: `Two Bedroom Apartment photo ${i + 1}`,
    })),
  },
  {
    id: "terrace",
    title: "Terrace",
    description: "Sun-drenched terrace with panoramic 180° views of the Himalayan range",
    photos: Array.from({ length: 3 }, (_, i) => ({
      id: `terrace-${i}`,
      src: `/PhotoTour/Terrace/img${i + 1}.webp`,
      alt: `Terrace photo ${i + 1}`,
    })),
  },
  {
    id: "activities",
    title: "Activities",
    description: "From nature walks to bonfire evenings, there's always something to do",
    photos: Array.from({ length: 5 }, (_, i) => ({
      id: `activities-${i}`,
      src: `/PhotoTour/Activities/img${i + 1}.webp`,
      alt: `Activities photo ${i + 1}`,
    })),
  },
  {
    id: "experiences",
    title: "Experiences",
    description: "Authentic Kumaoni experiences that will make your stay memorable",
    photos: Array.from({ length: 7 }, (_, i) => ({
      id: `experiences-${i}`,
      src: `/PhotoTour/Experiences/img${i + 1}.webp`,
      alt: `Experiences photo ${i + 1}`,
    })),
  },
  {
    id: "garden",
    title: "Our Garden",
    description: "Wander through our botanical paradise with 100+ varieties of plants and flowers",
    photos: Array.from({ length: 10 }, (_, i) => ({
      id: `garden-${i}`,
      src: `/PhotoTour/Our Garden/img${i + 1}.webp`,
      alt: `Garden photo ${i + 1}`,
    })),
  },
];

export function PhotoTour() {
  // Create flattened array of all photos with section info
  const allPhotos: PhotoWithSection[] = sections.flatMap((section) =>
    section.photos.map((photo, index) => ({
      photo,
      sectionId: section.id,
      sectionTitle: section.title,
      globalIndex: index,
    }))
  );

  // Desktop: Global lightbox state (all photos)
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Mobile carousel state
  const [mobileCarouselOpen, setMobileCarouselOpen] = useState(false);
  const [mobileSectionIndex, setMobileSectionIndex] = useState(0);
  const [mobilePhotoIndex, setMobilePhotoIndex] = useState(0);

  const mobileCurrentSection = sections[mobileSectionIndex];
  const mobileCurrentPhoto = mobileCurrentSection?.photos[mobilePhotoIndex];
  const currentLightboxPhoto = allPhotos[lightboxIndex];

  // Desktop lightbox handlers
  const openLightboxAtIndex = useCallback((globalIndex: number) => {
    setLightboxIndex(globalIndex);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % allPhotos.length);
  }, [allPhotos.length]);

  const goToPrevious = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
  }, [allPhotos.length]);

  const goToPhoto = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  // Scroll to section handler
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNext();
          break;
        case "Escape":
          e.preventDefault();
          closeLightbox();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, goToPrevious, goToNext, closeLightbox]);

  // Mobile carousel handlers
  const openMobileCarousel = useCallback((sectionIndex: number) => {
    setMobileSectionIndex(sectionIndex);
    setMobilePhotoIndex(0);
    setMobileCarouselOpen(true);
  }, []);

  const mobileGoToNext = useCallback(() => {
    setMobilePhotoIndex((prev) => (prev + 1) % mobileCurrentSection.photos.length);
  }, [mobileCurrentSection?.photos.length]);

  const mobileGoToPrevious = useCallback(() => {
    setMobilePhotoIndex((prev) => (prev - 1 + mobileCurrentSection.photos.length) % mobileCurrentSection.photos.length);
  }, [mobileCurrentSection?.photos.length]);

  // Touch handlers for swipe gestures
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const swipeThreshold = 50; // Minimum swipe distance in pixels
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swiped left - go to next
        mobileGoToNext();
      } else {
        // Swiped right - go to previous
        mobileGoToPrevious();
      }
    }
  }, [mobileGoToNext, mobileGoToPrevious]);

  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
            Photo Tour
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through Ecoescape Mukteshwar
          </p>
        </motion.div>

        {/* ==================== MOBILE VERSION ==================== */}
        <div className="md:hidden">
          {/* 2-Column Grid of Cards */}
          <div className="grid grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="cursor-pointer"
                onClick={() => openMobileCarousel(index)}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300">
                  {/* Square Cover Photo */}
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={section.photos[0].src}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-3">
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {section.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {section.photos.length} {section.photos.length === 1 ? 'photo' : 'photos'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==================== DESKTOP VERSION ==================== */}
        <div className="hidden md:block">
          {/* Sticky Navigation Tabs */}
          <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm py-4 mb-8 border-b">
            <div className="flex flex-wrap justify-center gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  {/* Image Thumbnail */}
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                    <img
                      src={section.photos[0].src}
                      alt={section.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {/* Section Name */}
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">
                    {section.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* All Sections - Stacked */}
          {sections.map((section, sectionIndex) => {
            // Calculate global starting index for this section
            let globalStartIndex = 0;
            for (let i = 0; i < sectionIndex; i++) {
              globalStartIndex += sections[i].photos.length;
            }

            return (
              <motion.div
                key={section.id}
                id={`section-${section.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="mb-20 scroll-mt-24"
              >
                {/* Section Layout: Left Title, Right Images */}
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Left Side: Title & Description */}
                  <div className="col-span-4 sticky top-24">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.description}
                      </p>
                      <div className="mt-4 text-sm text-muted-foreground">
                        {section.photos.length} {section.photos.length === 1 ? 'photo' : 'photos'}
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Side: Photo Grid */}
                  <div className="col-span-8">
                    {/* Photo Grid - Masonry Style */}
                    <div className="grid grid-cols-3 gap-3">
                      {section.photos.map((photo, photoIndex) => (
                        <motion.div
                          key={photo.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: photoIndex * 0.05 }}
                          className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                            photoIndex === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                          }`}
                          onClick={() => openLightboxAtIndex(globalStartIndex + photoIndex)}
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ZoomIn className="h-10 w-10 text-white" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ==================== DESKTOP LIGHTBOX ==================== */}
      <AnimatePresence>
        {lightboxOpen && currentLightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button - TOP LEFT */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 left-6 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-4"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-4"
              aria-label="Next photo"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            {/* Main Image */}
            <motion.img
              key={currentLightboxPhoto.photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={currentLightboxPhoto.photo.src}
              alt={currentLightboxPhoto.photo.alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Section Name - BOTTOM LEFT */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-serif font-semibold">{currentLightboxPhoto.sectionTitle}</h3>
            </div>

            {/* Counter */}
            <div className="absolute bottom-6 right-6 text-white text-sm">
              {lightboxIndex + 1} / {allPhotos.length}
            </div>

            {/* Keyboard Hint */}
            <div className="absolute top-6 right-6 text-white/60 text-sm">
              Use ← → to navigate
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================== MOBILE CAROUSEL DIALOG ==================== */}
      <Dialog open={mobileCarouselOpen} onOpenChange={setMobileCarouselOpen}>
        <DialogContent className="max-w-md w-full h-[80vh] p-0 gap-0">
          {mobileCurrentSection && (
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-serif font-semibold text-lg">{mobileCurrentSection.title}</h3>
                <button
                  onClick={() => setMobileCarouselOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Image Container */}
              <div
                className="flex-1 relative bg-black flex items-center justify-center overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={mobilePhotoIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    src={mobileCurrentPhoto?.src}
                    alt={mobileCurrentPhoto?.alt}
                    className="max-w-full max-h-full object-contain"
                    draggable={false}
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {mobileCurrentSection.photos.length > 1 && (
                  <>
                    <button
                      onClick={mobileGoToPrevious}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={mobileGoToNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {mobilePhotoIndex + 1} / {mobileCurrentSection.photos.length}
                </div>

                {/* Swipe Hint */}
                {mobileCurrentSection.photos.length > 1 && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <motion.div
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 0 }}
                      transition={{ delay: 2, duration: 1 }}
                      className="flex items-center gap-4 text-white/60 text-sm"
                    >
                      <ChevronLeft className="h-8 w-8" />
                      <span>Swipe to navigate</span>
                      <ChevronRight className="h-8 w-8" />
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              <div className="p-3 border-t bg-background">
                <div className="flex gap-2 overflow-x-auto">
                  {mobileCurrentSection.photos.map((photo, index) => (
                    <button
                      key={photo.id}
                      onClick={() => setMobilePhotoIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        mobilePhotoIndex === index
                          ? "border-primary scale-105"
                          : "border-border"
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
