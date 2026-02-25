import { lazy, Suspense, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { FloatingCTA } from "@/components/FloatingCTA";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sunrise,
  Flower2,
  UtensilsCrossed,
  Wifi,
  Car,
  Shield,
  Coffee,
  TreePine,
  Sparkles,
  Video,
  Clock,
  FileText,
  Mountain,
  Home,
  MapPin,
} from "lucide-react";
import { DiningSection } from "@/components/DiningSection";
import { GardenSection } from "@/components/GardenSection";
import { ThingsToDoSection } from "@/components/ThingsToDoSection";
import { PoliciesSection } from "@/components/PoliciesSection";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SectionFallback = () => <div className="min-h-[200px]" />;

const AboutPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | undefined>(undefined);
  const location = useLocation();

  // Handle hash scrolling for deep links
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
                Our Story
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Nestled in the heart of Mukteshwar, Ecoescape is more than just a homestay—it's a labor of love.
                What started as a family retreat has blossomed into a boutique eco-homestay where guests can experience
                the authentic beauty of the Kumaon Himalayas.
              </p>
              <div className="flex flex-wrap justify-center gap-8 pt-8">
                <div>
                  <div className="text-3xl font-serif font-semibold text-primary">4.9 ★</div>
                  <div className="text-sm text-muted-foreground">Guest rating</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-semibold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Plant varieties</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-semibold text-primary">East-facing</div>
                  <div className="text-sm text-muted-foreground">Sunrise views</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Highlights */}
        <section className="py-20 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                What Makes Ecoescape Special
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every detail has been thoughtfully designed to offer you the perfect mountain getaway
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Sunrise,
                  title: "Sunrise Views",
                  description: "East-facing location means you wake up to golden Himalayan sunrises every morning",
                },
                {
                  icon: Flower2,
                  title: "Botanical Garden",
                  description: "Over 100 plant varieties create a green paradise that refreshes your senses",
                },
                {
                  icon: UtensilsCrossed,
                  title: "Home-Cooked Meals",
                  description: "Fresh, authentic Kumaoni cuisine prepared with love in our in-house kitchen",
                },
                {
                  icon: Home,
                  title: "Private Units",
                  description: "Each accommodation has its own entrance, ensuring privacy and comfort",
                },
                {
                  icon: Car,
                  title: "Easy Access",
                  description: "Good road connectivity—your car takes you right to our doorstep",
                },
                {
                  icon: Shield,
                  title: "Safe & Secure",
                  description: "24/7 CCTV, fenced property, and on-site caretaker for your peace of mind",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary rounded-xl p-6 hover:shadow-card transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Collapsible Detail Sections */}
        <section className="py-20 bg-secondary">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                Discover More
              </h2>
              <p className="text-muted-foreground">
                Dive deeper into what makes Ecoescape special
              </p>
            </motion.div>

            <Accordion
              type="single"
              collapsible
              value={expandedSection}
              onValueChange={setExpandedSection}
              className="space-y-4"
            >
              <AccordionItem value="garden" className="bg-background rounded-xl px-6 border-none">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Flower2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground text-left">
                      The Garden Experience
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0 pl-14">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Our botanical garden is the heart of Ecoescape. With over 100 varieties of plants,
                      including roses currently in bloom, it's a sanctuary where you can reconnect with nature.
                      Take a leisurely morning walk, practice yoga on the terrace, or simply sit and breathe
                      in the fresh mountain air.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 pt-2">
                      {[
                        "Morning garden walks",
                        "Meditation spots",
                        "Terrace yoga mats available",
                        "Bird watching opportunities",
                        "Seasonal flowers (roses in bloom!)",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dining" className="bg-background rounded-xl px-6 border-none">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <UtensilsCrossed className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground text-left">
                      Culinary Experience
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0 pl-14">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Food at Ecoescape is a celebration of Kumaoni cuisine. Our in-house a la carte restaurant
                      serves freshly prepared, home-cooked meals made to order. Dine on our terrace under the stars
                      with panoramic mountain views, or enjoy room service with a smile.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 pt-2">
                      {[
                        "Authentic Kumaoni cuisine",
                        "Home-cooked meals to order",
                        "Terrace dining with mountain views",
                        "Room service available",
                        "Dietary accommodations on request",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="attractions" className="bg-background rounded-xl px-6 border-none">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground text-left">
                      Local Attractions & Activities
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0 pl-14">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Ecoescape is perfectly located to explore Mukteshwar's attractions. From the famous
                      Mukteshwar Temple to scenic viewpoints and nature trails, there's something for everyone.
                      The full snow-capped Himalayan range viewpoint is just a 50-60m walk from the property.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 pt-2">
                      {[
                        "Mukteshwar Temple (nearby)",
                        "Himalayan viewpoint (50-60m walk)",
                        "Nature walks & trails",
                        "Sunrise point visits",
                        "Local village experiences",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="policies" className="bg-background rounded-xl px-6 border-none">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground text-left">
                      Policies & House Rules
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0 pl-14">
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Check-in & Check-out</h4>
                        <p className="text-sm text-muted-foreground">Check-in: 12:00 PM to 10:00 PM</p>
                        <p className="text-sm text-muted-foreground">Check-out: 10:00 AM</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Cancellation Policy</h4>
                        <p className="text-sm text-muted-foreground">Free cancellation up to 5 days before check-in</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">House Rules</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Valid government ID required at check-in</li>
                        <li>• No smoking inside rooms</li>
                        <li>• Children of all ages welcome</li>
                        <li>• Pets not allowed</li>
                        <li>• Quiet hours: 11:00 PM to 5:00 AM</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 text-center"
            >
              <Button
                variant="hero"
                size="xl"
                onClick={() => window.location.href = "/#booking"}
              >
                Book Your Stay
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <FloatingCTA />
    </div>
  );
};

export default AboutPage;
