import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { TreePine, Flower2, Sunrise, Heart, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHashScroll } from "@/hooks/useHashScroll";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const AboutUs = () => {
  useHashScroll();
  const { ref: introRef, isInView: introInView } = useInView({ threshold: 0.1 });
  const { ref: valuesRef, isInView: valuesInView } = useInView({ threshold: 0.1 });
  const { ref: philosophyRef, isInView: philosophyInView } = useInView({ threshold: 0.1 });
  const { ref: locationRef, isInView: locationInView } = useInView({ threshold: 0.1 });

  const scrollToBooking = () => {
    const booking = document.getElementById("booking");
    if (booking) {
      booking.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="About Us | Ecoescape Mukteshwar - Boutique Nature Retreat Homestay"
        description="Learn about Ecoescape Mukteshwar, the best nature retreat homestay in Uttarakhand. Discover our story of sustainability, our 100+ plant garden, and our commitment to authentic mountain hospitality."
        keywords="About Ecoescape Mukteshwar, Nature Retreat Homestay Mukteshwar, Sustainable Homestay Mukteshwar, Eco-friendly Homestay Uttarakhand, Orchard Homestay Mukteshwar, Himalayan View Homestay"
      />
      <Header />
      
      <main>
        {/* Simple Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-40">
          <div className="absolute inset-0">
            <img
              src="/images/hero-sunrise.webp"
              alt="Beautiful Himalayan sunrise view from Ecoescape Mukteshwar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 container text-center">
            <h1 
              className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 animate-fade-in-up"
              style={{ animationDuration: "0.6s" }}
            >
              Our Story
            </h1>
            <p 
              className="text-xl text-white/90 max-w-2xl mx-auto font-medium animate-fade-in-up"
              style={{ animationDelay: "0.2s", animationDuration: "0.6s" }}
            >
              A Green Paradise in the Kumaon Himalayas
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section ref={introRef} className="py-20 bg-background overflow-hidden">
          <div className="container max-w-4xl">
            <div 
              className={cn(
                "prose prose-lg dark:prose-invert mx-auto text-center opacity-0",
                introInView && "animate-fade-in-up opacity-100"
              )}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
                Welcome to Ecoescape Mukteshwar
              </h2>
              <p className="text-muted-foreground leading-relaxed transition-colors duration-300">
                Ecoescape began with a simple vision: to create a <strong>Nature Retreat Homestay in Mukteshwar</strong> that offers more than just a place to sleep. We wanted to build a sanctuary where guests can wake up to stunning <strong>Himalayan views</strong>, breathe the crisp mountain air, and reconnect with nature in its purest form.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-6">
                Located in the heart of Mukteshwar, Uttarakhand, our <strong>sustainable homestay</strong> is a labor of love. Every corner of Ecoescape reflects our commitment to preserving the beauty of the Kumaon region while providing modern comforts for families, couples, and those on a <strong>workation</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values / Features */}
        <section ref={valuesRef} className="py-20 bg-secondary/30 overflow-hidden">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div 
                className={cn(
                  "p-8 bg-background rounded-2xl shadow-soft opacity-0",
                  valuesInView && "animate-fade-in-up opacity-100"
                )}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sunrise className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Pristine Views</h3>
                <p className="text-muted-foreground text-sm">
                  Experience the magic of the mountains with our <strong>Himalayan View Homestay</strong>. Our east-facing property ensures you never miss a sunrise.
                </p>
              </div>

              <div 
                className={cn(
                  "p-8 bg-background rounded-2xl shadow-soft opacity-0",
                  valuesInView && "animate-fade-in-up opacity-100"
                )}
                style={valuesInView ? { animationDelay: "0.1s" } : {}}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Flower2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Green Paradise</h3>
                <p className="text-muted-foreground text-sm">
                  Known as a premier <strong>Orchard Homestay in Mukteshwar</strong>, we house over 100+ varieties of plants and seasonal fruits in our lush garden.
                </p>
              </div>

              <div 
                className={cn(
                  "p-8 bg-background rounded-2xl shadow-soft opacity-0",
                  valuesInView && "animate-fade-in-up opacity-100"
                )}
                style={valuesInView ? { animationDelay: "0.2s" } : {}}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Authentic Hospitality</h3>
                <p className="text-muted-foreground text-sm">
                  At our <strong>Eco-friendly Homestay</strong>, we treat every guest like family, serving fresh, home-cooked Kumaoni meals and personal attention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section ref={philosophyRef} className="py-24 bg-background overflow-hidden">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div
                  className={cn(
                    "opacity-0",
                    philosophyInView && "animate-fade-in-left opacity-100"
                  )}
                >
                  <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Philosophy</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-4 mb-6">
                    Sustainability Meets Comfort
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We believe that travel should be responsible. Our <strong>Eco-friendly Homestay in Uttarakhand</strong> practices water conservation, waste management, and supports the local community of Mukteshwar.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <span className="font-semibold block">Locally Sourced</span>
                        <span className="text-sm text-muted-foreground">Most of our ingredients come from nearby farms and our own orchard.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <TreePine className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <span className="font-semibold block">Nature First</span>
                        <span className="text-sm text-muted-foreground">We've preserved the natural landscape, keeping 100+ native plant species.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <span className="font-semibold block">Prime Location</span>
                        <span className="text-sm text-muted-foreground">Minutes away from <strong>Chauli Ki Jali</strong> and <strong>Mukteshwar Temple</strong>.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 relative">
                <div
                  className={cn(
                    "rounded-3xl overflow-hidden shadow-card opacity-0",
                    philosophyInView && "animate-fade-in-right opacity-100"
                  )}
                >
                  <img 
                    src="/images/hero-sunrise.webp" 
                    alt="Ecoescape garden and views" 
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" ref={locationRef} className="py-20 bg-secondary/30 overflow-hidden">
          <div className="container max-w-6xl">
            <div
              className={cn(
                "text-center mb-12 opacity-0",
                locationInView && "animate-fade-in-up opacity-100"
              )}
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Find Us</span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-4 mb-4">
                How to Reach Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Located in the serene hills of Mukteshwar, easily accessible from major cities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Map */}
              <div
                className={cn(
                  "rounded-2xl overflow-hidden shadow-card h-[400px] opacity-0",
                  locationInView && "animate-fade-in-left opacity-100"
                )}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27656.736897024344!2d79.62!3d29.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0b7f0b94a0a0b%3A0x0!2sMukteshwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ecoescape Mukteshwar Location"
                />
              </div>

              {/* Address & Directions */}
              <div
                className={cn(
                  "space-y-6 opacity-0",
                  locationInView && "animate-fade-in-right opacity-100"
                )}
              >
                {/* Address Card */}
                <div className="bg-background rounded-2xl p-8 shadow-soft">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">Our Address</h3>
                      <address className="text-muted-foreground not-italic leading-relaxed">
                        Ecoescape Mukteshwar<br />
                        Mukteshwar Village<br />
                        Nainital District, Uttarakhand<br />
                        India
                      </address>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <a
                      href="tel:+919667846787"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Call Us</div>
                        <div className="font-semibold">+91 96678 46787</div>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/919667846787"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">WhatsApp</div>
                        <div className="font-semibold">Chat with us</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Transport Cards */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-background rounded-xl p-5 text-center shadow-soft">
                    <div className="text-2xl mb-2">🚗</div>
                    <h4 className="font-semibold text-sm mb-1">From Delhi</h4>
                    <p className="text-xs text-muted-foreground">
                      ~320 km · 7-8 hours
                    </p>
                  </div>

                  <div className="bg-background rounded-xl p-5 text-center shadow-soft">
                    <div className="text-2xl mb-2">✈️</div>
                    <h4 className="font-semibold text-sm mb-1">Nearest Airport</h4>
                    <p className="text-xs text-muted-foreground">
                      Pantnagar · ~100 km
                    </p>
                  </div>

                  <div className="bg-background rounded-xl p-5 text-center shadow-soft">
                    <div className="text-2xl mb-2">🚂</div>
                    <h4 className="font-semibold text-sm mb-1">Nearest Railway</h4>
                    <p className="text-xs text-muted-foreground">
                      Kathgodam · ~70 km
                    </p>
                  </div>
                </div>

                {/* Pickup Note */}
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 text-center">
                  <p className="text-foreground text-sm">
                    🚗 <strong>Pickup available</strong> from Kathgodam station or Pantnagar airport.
                    <Button
                      variant="link"
                      className="p-0 h-auto ml-2"
                      onClick={() => window.open("https://wa.me/919667846787", "_blank")}
                    >
                      Contact us to arrange
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container max-w-2xl px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Ready for your Eco-Escape?
            </h2>
            <p className="text-primary-foreground/80 mb-10 text-lg">
              Come experience the best <strong>Nature Retreat Homestay in Mukteshwar</strong>. 
              Whether it's a family trip or a solo <strong>workation</strong>, we have the perfect space for you.
            </p>
            <Button 
              size="xl" 
              variant="hero" 
              onClick={scrollToBooking}
              className="bg-white text-primary hover:bg-white/90"
            >
              Book Your Stay Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default AboutUs;
