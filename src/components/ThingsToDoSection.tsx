import { Sunrise, Camera, Utensils, TreePine, Car, Plane, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const onPropertyExperiences = [
  {
    icon: Sunrise,
    title: "Sunrise Viewing",
    description: "Wake early and witness nature's masterpiece from our east-facing rooms or terrace",
  },
  {
    icon: TreePine,
    title: "Garden Walks",
    description: "Explore 100+ plant varieties, currently featuring blooming roses",
  },
  {
    icon: Utensils,
    title: "Culinary Experience",
    description: "Try authentic Kumaoni dishes at our restaurant",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capture stunning Himalayan vistas from our terrace",
  },
];

const nearbyAttractions = [
  {
    icon: "🛕",
    title: "Mukteshwar Dham Temple",
    distance: "~7 km",
    description: "Ancient Shiva temple with panoramic views",
  },
  {
    icon: "⛰️",
    title: "Chauli Ki Jali",
    distance: "~2 km",
    description: "Rock climbing & stunning valley views",
  },
  {
    icon: "🍎",
    title: "Fruit Orchards",
    distance: "~5 km",
    description: "Apple & peach orchards to explore",
  },
  {
    icon: "🏞️",
    title: "Nainital",
    distance: "~50 km",
    description: "Famous hill station with Naini Lake",
  },
  {
    icon: "🌊",
    title: "Bhimtal Lake",
    distance: "~30 km",
    description: "Scenic lake with island aquarium",
  },
];

export function ThingsToDoSection() {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: "50px" });

  return (
    <section id="things-to-do" ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container">
        <div
          className={cn(
            "text-center mb-12 opacity-0",
            isInView && "animate-fade-in-up opacity-100"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Things to Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From peaceful mornings on the terrace to exploring nearby attractions
          </p>
        </div>

        <Tabs defaultValue="on-property" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="on-property">On the Property</TabsTrigger>
            <TabsTrigger value="nearby">Nearby</TabsTrigger>
          </TabsList>

          {/* On Property Tab */}
          <TabsContent value="on-property" className="mt-0">
            <div
              className={cn(
                "opacity-0",
                isInView && "animate-fade-in-up opacity-100"
              )}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {onPropertyExperiences.map((exp) => (
                  <div
                    key={exp.title}
                    className="group bg-secondary rounded-xl p-5 hover:bg-secondary/80 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <exp.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Workcation Note */}
              <div
                className={cn(
                  "bg-accent/10 border border-accent/20 rounded-xl p-6 text-center opacity-0",
                  isInView && "animate-fade-in-up opacity-100"
                )}
                style={isInView ? { animationDelay: "0.2s" } : {}}
              >
                <p className="text-foreground">
                  📶 <strong>Need to work remotely?</strong> Our high-speed WiFi and peaceful terrace
                  make for an inspiring workspace - perfect for short workcations!
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Nearby Tab */}
          <TabsContent value="nearby" className="mt-0">
            <div
              className={cn(
                "opacity-0",
                isInView && "animate-fade-in-up opacity-100"
              )}
            >
              {/* Map */}
              <div
                id="location"
                className="rounded-2xl overflow-hidden shadow-card h-80 lg:h-96 mb-8"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27656.736897024344!2d79.62!3d29.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0b7f0b94a0a0b%3A0x0!2sMukteshwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "320px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ecoescape Mukteshwar Location"
                />
              </div>

              {/* Nearby Attractions Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {nearbyAttractions.map((attraction) => (
                  <div
                    key={attraction.title}
                    className="bg-card rounded-xl p-4 shadow-soft hover:shadow-card transition-shadow text-center"
                  >
                    <div className="text-2xl mb-2">{attraction.icon}</div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {attraction.title}
                    </h4>
                    <div className="text-xs text-primary font-medium mb-1">
                      {attraction.distance}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {attraction.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* How to Reach */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div
                  className={cn(
                    "bg-secondary rounded-xl p-5 text-center opacity-0",
                    isInView && "animate-fade-in-up opacity-100"
                  )}
                  style={isInView ? { animationDelay: "0.1s" } : {}}
                >
                  <Car className="h-6 w-6 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground text-sm mb-1">From Delhi</h4>
                  <p className="text-xs text-muted-foreground">
                    ~320 km · 7-8 hours
                  </p>
                </div>

                <div
                  className={cn(
                    "bg-secondary rounded-xl p-5 text-center opacity-0",
                    isInView && "animate-fade-in-up opacity-100"
                  )}
                  style={isInView ? { animationDelay: "0.2s" } : {}}
                >
                  <Plane className="h-6 w-6 text-highlight mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground text-sm mb-1">Nearest Airport</h4>
                  <p className="text-xs text-muted-foreground">
                    Pantnagar · ~100 km
                  </p>
                </div>

                <div
                  className={cn(
                    "bg-secondary rounded-xl p-5 text-center opacity-0",
                    isInView && "animate-fade-in-up opacity-100"
                  )}
                  style={isInView ? { animationDelay: "0.3s" } : {}}
                >
                  <Train className="h-6 w-6 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground text-sm mb-1">Nearest Railway</h4>
                  <p className="text-xs text-muted-foreground">
                    Kathgodam · ~70 km
                  </p>
                </div>
              </div>

              {/* Pickup Note */}
              <div
                className={cn(
                  "bg-accent/10 border border-accent/20 rounded-xl p-4 text-center mt-6 opacity-0",
                  isInView && "animate-fade-in-up opacity-100"
                )}
                style={isInView ? { animationDelay: "0.4s" } : {}}
              >
                <p className="text-foreground text-sm">
                  🚗 <strong>Pickup available</strong> from Kathgodam station or Pantnagar airport.
                  <Button variant="link" className="p-0 h-auto ml-2" onClick={() => window.open("https://wa.me/919667846787", "_blank")}>
                    Contact us to arrange
                  </Button>
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
