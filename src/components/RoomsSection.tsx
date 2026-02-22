import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee, Droplets, Wifi, BedDouble, Shield, Car } from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.webp";
import roomFamily from "@/assets/room-family.webp";
import mountainView from "@/assets/suite/IMG_4065.webp";
import spacious from "@/assets/suite/img123.webp";
import { trackBookingSubmit } from "@/lib/analytics";
import { getCurrentPrice, formatPrice, type RoomType } from "@/services/pricing";
import { RoomDetailsModal, type Room } from "@/components/RoomDetailsModal";

// Room data without prices (prices added dynamically)
const roomData = [
  {
    id: 1,
    name: "Suite with Mountain View",
    roomType: "suite" as RoomType,
    description: "1 Bedroom Suite with Attached Washroom, Outside Sitting, Terrace and Garden Access. Stepless access - ideal for elderly guests.",
    image: mountainView,
    priceNote: "per night",
    capacity: "2 Guests",
    size: "280 sq ft",
    view: "Sunrise View",
    bedConfig: "King Bed",
    features: [
      "Stepless access - elderly friendly",
      "East-facing sunrise views",
      "Private bathroom with 24/7 hot water",
      "Outside sitting area",
      "Electric kettle with tea/coffee",
      "High-speed WiFi",
    ],
  },
  {
    id: 2,
    name: "Spacious Apartment",
    roomType: "apartment" as RoomType,
    description: "2 Bedrooms with Attached Washrooms, Living Area, Dining Area, Baywindow Sitting, Verandah outside room sitting, Terrace and Garden Access.",
    image: spacious,
    priceNote: "per night",
    capacity: "4 Guests",
    size: "550 sq ft",
    view: "Mountain View",
    bedConfig: "2 Queen Beds",
    features: [
      "2 bedrooms with attached washrooms",
      "Living area with baywindow sitting",
      "Dining area included",
      "Verandah outside room",
      "Terrace & garden access",
      "Electric kettle with tea/coffee",
    ],
  },
  {
    id: 3,
    name: "Family Room",
    roomType: "familyRoom" as RoomType,
    description: "2 Bedrooms (large and small), 1 washroom, dining area, private balcony, terrace and garden access. Perfect for families.",
    image: roomFamily,
    priceNote: "per night",
    capacity: "4 Guests",
    size: "450 sq ft",
    view: "Mountain View",
    bedConfig: "2 Bedrooms",
    features: [
      "2 bedrooms (large + small)",
      "1 shared bathroom",
      "Private balcony",
      "Dining area included",
      "Terrace & garden access",
      "Electric kettle with tea/coffee",
    ],
  },
  {
    id: 4,
    name: "Family Room 2",
    roomType: "familyRoom2" as RoomType,
    description: "1 Bedroom Quadruple with 2 king size double sharing beds, 1 washroom, private balcony, dining area, terrace and garden access.",
    image: roomDeluxe,
    priceNote: "per night",
    capacity: "4 Guests",
    size: "380 sq ft",
    view: "Sunrise View",
    bedConfig: "2 King Beds",
    features: [
      "2 king size double sharing beds",
      "Private balcony",
      "Dining area included",
      "Terrace & garden access",
      "Electric kettle with tea/coffee",
      "High-speed WiFi",
    ],
  },
];

const allRoomAmenities = [
  { icon: Shield, text: "Private entrance for each unit" },
  { icon: Coffee, text: "Complimentary tea bags & coffee sachets" },
  { icon: Droplets, text: "1L bottled water daily" },
  { icon: Wifi, text: "High-speed WiFi (5G)" },
  { icon: Car, text: "Car reaches property" },
  { icon: BedDouble, text: "Room service available" },
];

const propertyHighlights = [
  "Each unit has private entrance",
  "Complimentary Tea Bags & Coffee Sachets with Kettle",
  "Larger group stays are optimal for this property",
  "Parking: Car reaches property, even Force Travellers can reach",
  "Sunrise View property - Himalayan Range Peaks visible",
  "Full snow capped Himalayan range view point 50-60m walk",
];

export type RoomsSectionMode = "teaser" | "modal";

interface RoomsSectionProps {
  mode?: RoomsSectionMode;
  preselectedRoom?: RoomType;
  onBookRoom?: (roomType: RoomType) => void;
}

export function RoomsSection({ mode = "modal", preselectedRoom, onBookRoom }: RoomsSectionProps) {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Generate rooms array with dynamic pricing
  const rooms = useMemo(() => {
    return roomData.map((room) => ({
      ...room,
      price: formatPrice(getCurrentPrice(room.roomType)),
    }));
  }, []);

  const scrollToBooking = (roomType?: RoomType) => {
    if (roomType) {
      trackBookingSubmit({ roomType: roomType.toString(), guests: 'unknown' });
    }
    if (mode === "teaser") {
      // On home page, navigate to rooms page
      navigate("/rooms", { state: { selectedRoom: roomType } });
    } else {
      // On rooms page, scroll to booking form
      const booking = document.getElementById("booking");
      if (booking) {
        booking.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleBookFromModal = (roomType: RoomType) => {
    scrollToBooking(roomType);
    if (onBookRoom) {
      onBookRoom(roomType);
    }
  };

  const openModal = (room: Room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Your Mountain Home Away From Home
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Four unique accommodation options designed for families, groups, and couples.
            Each unit offers privacy, comfort, and stunning Himalayan views.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={600}
                  height={288}
                />
                {mode === "modal" ? (
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="font-serif font-semibold text-primary">{room.price}</span>
                    <span className="text-xs text-muted-foreground ml-1">{room.priceNote}</span>
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="font-serif font-semibold text-primary">From {room.price}</span>
                    <span className="text-xs text-muted-foreground ml-1">{room.priceNote}</span>
                  </div>
                )}
              </div>

              {/* Content - Simplified */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  {room.name}
                </h3>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => openModal(room)}
                >
                  View Details
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
          className="bg-secondary rounded-2xl p-6 md:p-8 mb-8"
        >
          <h4 className="font-semibold text-foreground text-center mb-6">
            All Rooms Include
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

        {/* Property Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/20"
        >
          <h4 className="font-semibold text-foreground text-center mb-6">
            Perfect for Groups & Families
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {propertyHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span className="text-sm text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <RoomDetailsModal
          room={selectedRoom}
          isOpen={isModalOpen}
          onClose={closeModal}
          onBook={handleBookFromModal}
        />
      )}
    </section>
  );
}

// Export room data for use in other components
export { roomData };
