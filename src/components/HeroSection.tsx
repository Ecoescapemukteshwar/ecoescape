import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Star } from "lucide-react";
import heroImage from "@/assets/hero-sunrise.jpg";

export function HeroSection() {
  const scrollToBooking = () => {
    const booking = document.getElementById("booking");
    if (booking) {
      booking.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in booking a stay at EcoEscape Mukteshwar. Could you please share availability?"
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sunrise view from EcoEscape Mukteshwar terrace overlooking Himalayan mountains"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              4.9 · 150+ Happy Guests
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[hsl(40_30%_98%)] leading-tight mb-6"
          >
            Sunrise View Homestay
            <br />
            <span className="text-accent">in Mukteshwar</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-[hsl(40_20%_90%)] mb-8 max-w-xl"
          >
            Peaceful family-friendly retreat with terrace, garden & panoramic 
            mountain views. Wake up to magical Himalayan sunrises.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToBooking}
              className="group"
            >
              <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Check Availability
            </Button>
            <Button
              variant="whatsapp"
              size="xl"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-[hsl(40_20%_90%/0.2)]"
          >
            <div>
              <div className="text-2xl font-serif font-semibold text-[hsl(40_30%_98%)]">7,200 ft</div>
              <div className="text-sm text-[hsl(40_20%_85%)]">Altitude</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-semibold text-[hsl(40_30%_98%)]">360°</div>
              <div className="text-sm text-[hsl(40_20%_85%)]">Mountain Views</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-semibold text-[hsl(40_30%_98%)]">15 min</div>
              <div className="text-sm text-[hsl(40_20%_85%)]">From Mukteshwar Temple</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[hsl(40_30%_98%/0.5)] rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-[hsl(40_30%_98%)] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
