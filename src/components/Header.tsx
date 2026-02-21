import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Rooms", href: "#rooms" },
  { name: "Dining", href: "#dining" },
  { name: "Garden", href: "#garden" },
  { name: "Gallery", href: "#gallery" },
  { name: "Things to Do", href: "#things-to-do" },
  { name: "Reviews", href: "#reviews" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in booking at Ecoescape Mukteshwar. Could you help me with availability?"
    );
    window.open(`https://wa.me/919667846787?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919667846787";
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-soft"
          : "bg-transparent"
      )}
    >
      {/* Top bar with contact info - only when scrolled */}
      <div
        className={cn(
          "hidden md:block bg-primary text-primary-foreground py-2 transition-all",
          isScrolled ? "opacity-100" : "opacity-0 h-0 py-0 overflow-hidden"
        )}
      >
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919667846787"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              +91 96678 46787
            </a>
            <a
              href="mailto:reservations@ecoescapemukteshwar.com"
              className="hover:text-accent transition-colors"
            >
              reservations@ecoescapemukteshwar.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/80">
              Direct booking = Best price guaranteed
            </span>
            <a
              href="https://www.instagram.com/ecoescape.mukteshwar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
              <span className="text-xs">@ecoescape.mukteshwar</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <img src="/LOGO.png" alt="Logo" width={100} height={100} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "font-medium transition-colors text-sm",
                  isScrolled
                    ? "text-foreground/80 hover:text-primary"
                    : "text-[hsl(40_20%_90%)] hover:text-[hsl(40_30%_98%)]"
                )}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCall}
              className={cn(
                "transition-colors",
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-[hsl(40_30%_98%)] hover:bg-[hsl(40_30%_98%/0.1)]"
              )}
            >
              <Phone className="h-4 w-4 mr-2" />
              +91 96678 46787
            </Button>
            <Button variant="whatsapp" size="sm" onClick={handleWhatsApp}>
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-foreground hover:bg-secondary"
                : "text-[hsl(40_30%_98%)] hover:bg-[hsl(40_30%_98%/0.1)]"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-background rounded-xl mt-4 shadow-card"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left text-foreground hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-border space-y-2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start"
                    onClick={handleCall}
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    +91 96678 46787
                  </Button>
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="w-full"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </Button>
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={() => scrollToSection("#booking")}
                  >
                    Check Availability
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
