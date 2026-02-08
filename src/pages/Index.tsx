import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { RoomsSection } from "@/components/RoomsSection";
import { DiningSection } from "@/components/DiningSection";
import { GardenSection } from "@/components/GardenSection";
import { GallerySection } from "@/components/GallerySection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationSection } from "@/components/LocationSection";
import { PoliciesSection } from "@/components/PoliciesSection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ScarcityBadges } from "@/components/ScarcityBadges";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <RoomsSection />
        <DiningSection />
        <GardenSection />
        <GallerySection />
        <ExperiencesSection />
        <TestimonialsSection />
        <LocationSection />
        <PoliciesSection />
        <BookingSection />
      </main>
      <Footer />
      <FloatingCTA />
      <ScarcityBadges />
    </div>
  );
};

export default Index;
