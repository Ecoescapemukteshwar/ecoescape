import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Maximize, Eye, Calendar, X } from "lucide-react";
import { formatPrice, type RoomType } from "@/services/pricing";
import { motion } from "framer-motion";
import { useState } from "react";

export interface Room {
  id: number;
  name: string;
  roomType: RoomType;
  description: string;
  image: string;
  priceNote: string;
  capacity: string;
  size: string;
  view: string;
  bedConfig: string;
  features: string[];
  price?: string;
}

interface RoomDetailsModalProps {
  room: Room;
  isOpen: boolean;
  onClose: () => void;
  onBook: (roomType: RoomType) => void;
}

export function RoomDetailsModal({ room, isOpen, onClose, onBook }: RoomDetailsModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleBook = () => {
    onBook(room.roomType);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] max-h-[90vh] p-0 gap-0">
        <div className="flex flex-col h-full overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Large Hero Image - Fixed height */}
          <div className="relative w-full h-[300px] md:h-[350px] flex-shrink-0">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
              width={1200}
              height={600}
              onLoad={() => setImageLoaded(true)}
            />
            {/* Price badge */}
            <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg">
              <span className="font-serif text-2xl font-bold text-primary">{room.price}</span>
              <span className="text-sm text-muted-foreground ml-2">{room.priceNote}</span>
            </div>
          </div>

          {/* Content - Scrollable area */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
            {/* Title and Description */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-3">
                {room.name}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-secondary rounded-lg p-4">
                <Users className="h-5 w-5 text-primary mb-2" />
                <p className="text-xs text-muted-foreground">Capacity</p>
                <p className="font-semibold text-foreground">{room.capacity}</p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <Maximize className="h-5 w-5 text-primary mb-2" />
                <p className="text-xs text-muted-foreground">Size</p>
                <p className="font-semibold text-foreground">{room.size}</p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <Eye className="h-5 w-5 text-primary mb-2" />
                <p className="text-xs text-muted-foreground">View</p>
                <p className="font-semibold text-foreground">{room.view}</p>
              </div>
              <div className="bg-secondary rounded-lg p-4">
                <Calendar className="h-5 w-5 text-primary mb-2" />
                <p className="text-xs text-muted-foreground">Bed Config</p>
                <p className="font-semibold text-foreground">{room.bedConfig}</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-semibold text-foreground text-lg mb-4">Room Features</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {room.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button variant="hero" size="xl" className="w-full" onClick={handleBook}>
              Book This Room
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
