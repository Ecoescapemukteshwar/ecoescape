import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { useEffect } from "react";

export function Footer() {
  useEffect(() => {
    // Load TripAdvisor widget script
    const taScript = document.createElement("script");
    taScript.id = "ta-rated-js";
    taScript.src = "https://www.jscache.com/wejs?wtype=rated&uniq=150&locationId=26876576&lang=en_IN&display_version=2";
    taScript.async = true;
    taScript.setAttribute("data-loadtrk", "");
    taScript.onload = function () {
      const scriptElement = this as HTMLScriptElement;
      (scriptElement as unknown as { loadtrk: boolean }).loadtrk = true;
    };
    document.body.appendChild(taScript);

    return () => {
      if (document.getElementById("ta-rated-js")) {
        document.body.removeChild(document.getElementById("ta-rated-js")!);
      }
    };
  }, []);

  return (
    <footer id="contact" className="bg-foreground text-background py-10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-semibold text-background">
                Ecoescape
              </span>
              <span className="block text-xs text-background/70 tracking-widest uppercase">
                Mukteshwar
              </span>
            </Link>
            <p className="text-background/70 mb-4 max-w-md">
              Your Green Paradise in the Himalayas. A boutique homestay with 100+ plant varieties, 
              stunning sunrise views, and authentic mountain hospitality.
            </p>
            <p className="text-background/50 text-sm mb-6">
              Mukteshwar Village, Nainital District, Uttarakhand, India
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ecoescape.mukteshwar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Ecoescape-Mukteshwar/61554610562549/"
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
                <a href="#dining" className="text-background/70 hover:text-accent transition-colors">
                  Dining
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/70 hover:text-accent transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#garden" className="text-background/70 hover:text-accent transition-colors">
                  Garden
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
                  href="tel:+919667846787"
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  +91 96678 46787
                </a>
              </li>
              <li>
                <a
                  href="mailto:reservations@ecoescapemukteshwar.com"
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="break-all text-sm">reservations@ecoescapemukteshwar.com</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ecoescape.mukteshwar@gmail.com"
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="break-all text-sm">ecoescape.mukteshwar@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>
                    Mukteshwar Village<br />
                    Nainital District<br />
                    Uttarakhand, India
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© 2024 Ecoescape Mukteshwar. All rights reserved.</p>

          {/* Certificates Section - grouped side-by-side */}
          <div className="flex items-center gap-4">
            {/* TripAdvisor Widget */}
            <div id="TA_rated150" className="TA_rated">
              <ul id="cuH5idEHMuD" className="TA_links BkU1Sb">
                <li id="VLnDrqWO4" className="8bgI2uhKIR">
                  <a
                    target="_blank"
                    href="https://www.tripadvisor.in/Hotel_Review-g1162527-d26876576-Reviews-Ecoescape_Mukteshwar-Mukteshwar_Nainital_District_Uttarakhand.html"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://www.tripadvisor.in/img/cdsi/img2/badges/ollie-11424-2.gif"
                      alt="TripAdvisor"
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Booking.com Certificate - image only, no link */}
            <img
              src="/Award2025.jpeg"
              alt="Booking.com 2025 Award Certificate"
              className="h-20 w-auto object-contain"
            />
          </div>

          <p>Direct booking = Best price guaranteed</p>
        </div>
      </div>
    </footer>
  );
}
