import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { RoomsSection } from "@/components/RoomsSection";
import { GallerySection } from "@/components/GallerySection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationSection } from "@/components/LocationSection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <RoomsSection />
        <GallerySection />
        <ExperiencesSection />
        <TestimonialsSection />
        <LocationSection />
        <BookingSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
