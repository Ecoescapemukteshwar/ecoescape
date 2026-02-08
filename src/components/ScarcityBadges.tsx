import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Clock, AlertCircle } from "lucide-react";

export function ScarcityBadges() {
  const [viewerCount, setViewerCount] = useState(12);
  const [lastBooking, setLastBooking] = useState("4 hours ago");

  // Live viewer counter - updates every 15-45 seconds
  useEffect(() => {
    const updateViewers = () => {
      setViewerCount((prev) => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const newCount = prev + change;
        return Math.min(Math.max(newCount, 8), 18); // Keep between 8-18
      });
    };

    const interval = setInterval(updateViewers, 15000 + Math.random() * 30000);
    return () => clearInterval(interval);
  }, []);

  // Recent booking alert - updates every 3-5 minutes
  useEffect(() => {
    const bookingTimes = ["Just now", "2 hours ago", "4 hours ago", "6 hours ago"];
    const updateBooking = () => {
      const randomIndex = Math.floor(Math.random() * bookingTimes.length);
      setLastBooking(bookingTimes[randomIndex]);
    };

    const interval = setInterval(updateBooking, 180000 + Math.random() * 120000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-4 bottom-24 z-40 flex flex-col gap-2 md:left-6 md:bottom-6">
      {/* Live Viewers */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 bg-background/95 backdrop-blur-sm border border-border rounded-full px-3 py-2 shadow-card text-sm"
        >
          <div className="relative">
            <Eye className="h-4 w-4 text-primary" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
          </div>
          <span className="text-foreground font-medium">
            {viewerCount} people viewing now
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Last Booking */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-2 text-sm"
      >
        <Clock className="h-4 w-4 text-accent" />
        <span className="text-foreground">
          Last booking: <strong>{lastBooking}</strong>
        </span>
      </motion.div>

      {/* Limited Availability - Show on weekends */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-3 py-2 text-sm"
      >
        <AlertCircle className="h-4 w-4 text-destructive" />
        <span className="text-foreground">
          Only <strong>2 rooms</strong> left this weekend
        </span>
      </motion.div>
    </div>
  );
}
