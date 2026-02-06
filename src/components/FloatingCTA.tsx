import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number
const PHONE_NUMBER = "+91 98765 43210"; // Replace with actual number

export function FloatingCTA() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in booking a stay at EcoEscape Mukteshwar. Could you please share availability and rates?"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER.replace(/\s/g, "")}`;
  };

  const handleBookNow = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Button
        variant="whatsapp"
        size="iconXl"
        onClick={handleWhatsApp}
        className="rounded-full"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Call Button - Only on mobile */}
      <Button
        variant="heroSecondary"
        size="iconXl"
        onClick={handleCall}
        className="rounded-full md:hidden"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </Button>

      {/* Book Now - Floating CTA on mobile */}
      <Button
        variant="floating"
        size="xl"
        onClick={handleBookNow}
        className="md:hidden"
      >
        <Calendar className="h-5 w-5" />
        Book Now
      </Button>
    </div>
  );
}
