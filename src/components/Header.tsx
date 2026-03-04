import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Instagram, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useThrottle } from "@/hooks/useThrottle";
import { trackWhatsAppClick, trackPhoneClick, trackEmailClick } from "@/lib/analytics";
import { getSuiteNavItems } from "@/components/PhotoTour";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experiences", href: "/experiences" },
];

// Dynamically load gallery suites
const gallerySuites = getSuiteNavItems();
console.log('[Header] Gallery suites loaded:', gallerySuites);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const location = useLocation();

  const handleScroll = useThrottle(() => {
    setIsScrolled(window.scrollY > 50);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    // For external routes, use navigate
    if (href.startsWith("/")) {
      window.location.href = href;
    } else {
      // For anchor links (if any remain)
      const element = document.querySelector<HTMLElement>(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const handleWhatsApp = useCallback(() => {
    trackWhatsAppClick('header');
    const message = encodeURIComponent(
      "Hi! I'm interested in booking at Ecoescape Mukteshwar. Could you help me with availability?"
    );
    window.open(`${siteConfig.whatsappUrl}?text=${message}`, "_blank");
  }, []);

  const handleCall = useCallback(() => {
    trackPhoneClick('header');
    window.location.href = `tel:${siteConfig.phone}`;
  }, []);

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
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
              onClick={() => trackPhoneClick('header-top-bar')}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email.reservations}`}
              className="hover:text-accent transition-colors"
              onClick={() => trackEmailClick(siteConfig.email.reservations)}
            >
              {siteConfig.email.reservations}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/80">
              Direct booking = Best price guaranteed
            </span>
            <a
              href={siteConfig.social.instagram}
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
              <img src={isScrolled ? "/LOGO2.webp" : "/LOGO.webp"} alt="Ecoescape Mukteshwar Logo" width={175} height={136} className="w-[100px] h-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "font-medium transition-colors text-sm",
                  isActiveLink(link.href)
                    ? "text-primary font-semibold"
                    : isScrolled
                      ? "text-foreground/80 hover:text-primary"
                      : "text-[hsl(40_20%_90%)] hover:text-[hsl(40_30%_98%)]"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Gallery Dropdown */}
            <div className="relative group">
              <button
                className={cn(
                  "font-medium transition-colors text-sm flex items-center gap-1",
                  location.pathname.startsWith("/gallery")
                    ? "text-primary font-semibold"
                    : isScrolled
                      ? "text-foreground/80 hover:text-primary"
                      : "text-[hsl(40_20%_90%)] hover:text-[hsl(40_30%_98%)]"
                )}
                onClick={() => setGalleryDropdownOpen(!galleryDropdownOpen)}
                onMouseEnter={() => setGalleryDropdownOpen(true)}
                onMouseLeave={() => setGalleryDropdownOpen(false)}
              >
                Gallery
                <ChevronDown className="h-4 w-4 transition-transform" />
              </button>

              <AnimatePresence>
                {galleryDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
                    onMouseEnter={() => setGalleryDropdownOpen(true)}
                    onMouseLeave={() => setGalleryDropdownOpen(false)}
                  >
                    {gallerySuites.map((suite) => (
                      <Link
                        key={suite.href}
                        to={suite.href}
                        onClick={() => setGalleryDropdownOpen(false)}
                        className={cn(
                          "block px-4 py-3 text-sm transition-colors",
                          location.pathname === suite.href
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-foreground/80 hover:bg-secondary hover:text-primary"
                        )}
                      >
                        {suite.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
              {siteConfig.phoneDisplay}
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
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
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
              id="mobile-menu"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block w-full text-left font-medium py-3 px-4 rounded-lg transition-colors",
                      isActiveLink(link.href)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-secondary"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Gallery submenu for mobile */}
                <div>
                  <button
                    onClick={() => setGalleryDropdownOpen(!galleryDropdownOpen)}
                    className={cn(
                      "w-full flex items-center justify-between font-medium py-3 px-4 rounded-lg transition-colors",
                      location.pathname.startsWith("/gallery")
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-secondary"
                    )}
                  >
                    <span>Gallery</span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform",
                      galleryDropdownOpen ? "rotate-180" : ""
                    )} />
                  </button>

                  <AnimatePresence>
                    {galleryDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        {gallerySuites.map((suite) => (
                          <Link
                            key={suite.href}
                            to={suite.href}
                            onClick={() => {
                              setIsOpen(false);
                              setGalleryDropdownOpen(false);
                            }}
                            className={cn(
                              "block w-full text-left py-2.5 px-4 pl-8 rounded-lg transition-colors text-sm",
                              location.pathname === suite.href
                                ? "text-primary bg-primary/10 font-medium"
                                : "text-foreground/70 hover:text-primary hover:bg-secondary"
                            )}
                          >
                            {suite.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start"
                    onClick={handleCall}
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    {siteConfig.phoneDisplay}
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
                    onClick={() => {
                      setIsOpen(false);
                      const bookingElement = document.getElementById("booking");
                      if (bookingElement) {
                        bookingElement.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
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
