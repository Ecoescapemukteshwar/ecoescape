import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Eye, Maximize, Coffee, Droplets, Wifi, BedDouble } from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";

const rooms = [
  {
    id: 1,
    name: "Deluxe Mountain View Room",
    description: "Cozy east-facing room with panoramic Himalayan views and sunrise views. Perfect for couples seeking a peaceful retreat.",
    image: roomDeluxe,
    price: "₹3,500",
    priceNote: "per night",
    capacity: "2 Guests",
    size: "280 sq ft",
    view: "Sunrise View",
    bedConfig: "King Bed",
    features: [
      "East-facing with sunrise views",
      "Private bathroom with 24/7 hot water",
      "Electric kettle with tea/coffee",
      "Complimentary bottled water (1L/night)",
      "High-speed WiFi",
      "Room service available",
    ],
  },
  {
    id: 2,
    name: "Family Suite",
    description: "Spacious suite with connected rooms, ideal for families. Enjoy stunning sunrise views from the large windows and private balcony.",
    image: roomFamily,
    price: "₹5,500",
    priceNote: "per night",
    capacity: "4 Guests",
    size: "450 sq ft",
    view: "Mountain View",
    bedConfig: "2 Queen Beds",
    features: [
      "Spacious living area",
      "Private bathroom with 24/7 hot water",
      "Electric kettle with tea/coffee",
      "Complimentary bottled water (1L/night)",
      "High-speed WiFi",
      "Room service available",
    ],
  },
];

const allRoomAmenities = [
  { icon: Coffee, text: "Electric kettle with complimentary tea & coffee" },
  { icon: Droplets, text: "1L bottled water daily" },
  { icon: Wifi, text: "High-speed WiFi" },
  { icon: BedDouble, text: "Room service available" },
];

export function RoomsSection() {
  const scrollToBooking = () => {
    const booking = document.getElementById("booking");
    if (booking) {
      booking.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Your Cozy Mountain Retreat
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comfortable accommodations designed for relaxation, 
            each offering stunning views and warm hospitality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="font-serif font-semibold text-primary">{room.price}</span>
                  <span className="text-xs text-muted-foreground ml-1">{room.priceNote}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {room.description}
                </p>

                {/* Quick Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    {room.capacity}
                  </span>
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Maximize className="h-4 w-4 text-primary" />
                    {room.size}
                  </span>
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Eye className="h-4 w-4 text-primary" />
                    {room.view}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {room.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={scrollToBooking}
                >
                  Book This Room
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Rooms Include */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-secondary rounded-2xl p-6 md:p-8"
        >
          <h4 className="font-semibold text-foreground text-center mb-6">
            All Rooms Include
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allRoomAmenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <amenity.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-foreground">{amenity.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
