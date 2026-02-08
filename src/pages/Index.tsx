import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { RoomsSection } from "@/components/RoomsSection";
import { DiningSection } from "@/components/DiningSection";
import { GardenSection } from "@/components/GardenSection";
import { GallerySection } from "@/components/GallerySection";
import { ThingsToDoSection } from "@/components/ThingsToDoSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PoliciesSection } from "@/components/PoliciesSection";
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
        <TestimonialsSection />
        <DiningSection />
        <GardenSection />
        <GallerySection />
        <ThingsToDoSection />
        <AmenitiesSection />
        <PoliciesSection />
        <BookingSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
