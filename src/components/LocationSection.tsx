import { motion } from "framer-motion";
import { MapPin, Clock, Car, Plane, Train, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationSection() {
  return (
    <section id="location" className="py-20 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Easy to Reach, Hard to Leave
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Located in Mukteshwar Village with good road connectivity for a hassle-free journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-card h-80 lg:h-full"
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
          </motion.div>

          {/* Directions */}
          <div className="space-y-6">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-xl p-6 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Ecoescape Mukteshwar<br />
                    Mukteshwar Village<br />
                    Nainital District, Uttarakhand<br />
                    India
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto mt-2 text-primary"
                    onClick={() => window.open("https://maps.google.com/?q=Mukteshwar,Uttarakhand", "_blank")}
                  >
                    Get Directions <ExternalLink className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Good Connectivity Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-center gap-3"
            >
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm">
                <strong>Good road connectivity</strong> ensures a smooth, hassle-free journey to our property
              </span>
            </motion.div>

            {/* How to Reach Cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background rounded-xl p-5 shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Car className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">From Delhi (by road)</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>~320 km · 7-8 hours via NH9</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-background rounded-xl p-5 shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-highlight/20 rounded-lg flex items-center justify-center">
                    <Plane className="h-5 w-5 text-highlight" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">Nearest Airport</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Pantnagar Airport · ~100 km · 3 hours</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-background rounded-xl p-5 shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Train className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">Nearest Railway Station</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Kathgodam · ~70 km · 2 hours</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Nearby Distances */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-background rounded-xl p-5 shadow-soft"
              >
                <h4 className="font-semibold text-foreground mb-3">Nearby Towns</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nainital</span>
                    <span className="text-foreground">~50 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bhimtal</span>
                    <span className="text-foreground">~30 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Haldwani</span>
                    <span className="text-foreground">~70 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mukteshwar Dham</span>
                    <span className="text-foreground">~7 km</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Pickup Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-accent/10 border border-accent/20 rounded-xl p-4 text-center"
            >
              <p className="text-foreground text-sm">
                🚗 <strong>Pickup available</strong> from Kathgodam station or Pantnagar airport.<br />
                Contact us to arrange transportation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
