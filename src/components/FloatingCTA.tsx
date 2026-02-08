import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919667846787";

export function FloatingCTA() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in booking at Ecoescape Mukteshwar. Could you help me with availability?"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button - Always visible */}
      <Button
        variant="whatsapp"
        size="iconXl"
        onClick={handleWhatsApp}
        className="rounded-full shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
