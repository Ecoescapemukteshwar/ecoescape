import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-semibold text-background">
                EcoEscape
              </span>
              <span className="block text-xs text-background/70 tracking-widest uppercase">
                Mukteshwar
              </span>
            </Link>
            <p className="text-background/70 mb-6 max-w-md">
              A peaceful family-friendly retreat in the heart of Mukteshwar. 
              Wake up to magical Himalayan sunrises and experience true mountain hospitality.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#rooms" className="text-background/70 hover:text-accent transition-colors">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/70 hover:text-accent transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="text-background/70 hover:text-accent transition-colors">
                  How to Reach
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-background/70 hover:text-accent transition-colors">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="#booking" className="text-background/70 hover:text-accent transition-colors">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:stay@ecoescape.in"
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  stay@ecoescape.in
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>
                    Near Mukteshwar Temple<br />
                    Mukteshwar, Nainital<br />
                    Uttarakhand 263138
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© 2024 EcoEscape Mukteshwar. All rights reserved.</p>
          <p>Direct booking = Best price guaranteed</p>
        </div>
      </div>
    </footer>
  );
}
