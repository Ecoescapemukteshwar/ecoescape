import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, MessageCircle, Phone, Mail, Send, CheckCircle, Users, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Formspree endpoint - using project-based endpoint
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/2932831038499454640";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15),
  roomType: z.string().min(1, "Please select a room type"),
  checkIn: z.string().min(1, "Please select check-in date"),
  checkOut: z.string().min(1, "Please select check-out date"),
  guests: z.string().min(1, "Please select number of guests"),
  message: z.string().max(1000).optional(),
});

export function BookingSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
    needYogaMat: false,
    extraBed: false,
    specialOccasion: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      bookingSchema.parse(formData);

      // Prepare form data for Formspree
      const formDataObj = {
        ...formData,
        specialRequests: [
          formData.needYogaMat ? "Yoga mat needed" : "",
          formData.extraBed ? "Extra bed required (Rs. 600/night)" : "",
          formData.specialOccasion ? "Special occasion" : "",
          formData.message,
        ].filter(Boolean).join(" | "),
      };

      // Submit to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(formDataObj),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Inquiry Sent Successfully!",
          description: "We'll respond within 2 hours. Thank you!",
        });
        // Also send to WhatsApp
        sendToWhatsApp(formDataObj);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          roomType: "",
          checkIn: "",
          checkOut: "",
          guests: "2",
          message: "",
          needYogaMat: false,
          extraBed: false,
          specialOccasion: false,
        });
      } else {
        const data = await response.json();
        toast({
          title: "Submission Failed",
          description: data.error || "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again or contact us directly via WhatsApp.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const extraOptions = [];
    if (formData.needYogaMat) extraOptions.push("Yoga mat needed");
    if (formData.extraBed) extraOptions.push("Extra bed required (Rs. 600/night)");
    if (formData.specialOccasion) extraOptions.push("Special occasion");

    const message = encodeURIComponent(
      `Hi! I'm interested in booking at Ecoescape Mukteshwar.

Room Type: ${formData.roomType || "Not selected"}
Check-in: ${formData.checkIn || "Not selected"}
Check-out: ${formData.checkOut || "Not selected"}
Guests: ${formData.guests}
${extraOptions.length > 0 ? `Special Requests: ${extraOptions.join(", ")}` : ""}
${formData.message ? `Message: ${formData.message}` : ""}

Could you help me with availability?`
    );
    window.open(`https://wa.me/919667846787?text=${message}`, "_blank");
  };

  const sendToWhatsApp = (data: typeof formData) => {
    const extraOptions = [];
    if (data.needYogaMat) extraOptions.push("Yoga mat needed");
    if (data.extraBed) extraOptions.push("Extra bed required (Rs. 600/night)");
    if (data.specialOccasion) extraOptions.push("Special occasion");

    const message = encodeURIComponent(
      `🏔️ NEW BOOKING INQUIRY - Ecoescape Mukteshwar

👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
🏠 Room Type: ${data.roomType}
📅 Check-in: ${data.checkIn}
📅 Check-out: ${data.checkOut}
👥 Guests: ${data.guests}
${extraOptions.length > 0 ? `✨ Special Requests: ${extraOptions.join(", ")}` : ""}
${data.message ? `💬 Message: ${data.message}` : ""}

Please confirm availability and rates. Thank you!`
    );
    window.open(`https://wa.me/919667846787?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919667846787";
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-gradient-forest text-primary-foreground">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-12"
          >
            <CheckCircle className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Thank You!
            </h2>
            <p className="text-lg opacity-90 mb-8">
              We've received your inquiry and will respond within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us Now
              </Button>
              <Button variant="heroSecondary" size="lg" onClick={handleCall}>
                <Phone className="h-5 w-5" />
                Call Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gradient-forest text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Ready for Your Mountain Escape?
          </h2>
          <p className="opacity-90 max-w-2xl mx-auto">
            Book your stay at Ecoescape Mukteshwar and experience the perfect blend of
            nature, comfort, and hospitality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-serif text-xl font-semibold mb-6">
                Quick Inquiry Form
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="name" className="text-primary-foreground/90">
                    Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  {errors.name && (
                    <p className="text-accent text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="text-primary-foreground/90">
                    Email *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="text-accent text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="phone" className="text-primary-foreground/90">
                    Phone *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder="+91 96678 46787"
                      required
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-accent text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="guests" className="text-primary-foreground/90">
                    Number of Guests
                  </Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full h-10 pl-10 pr-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="roomType" className="text-primary-foreground/90">
                  Room Type *
                </Label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground"
                  required
                >
                  <option value="">Select a room type</option>
                  <option value="suite-mountain-view">Suite with Mountain View (₹3,500/night)</option>
                  <option value="spacious-apartment">Spacious Apartment (₹5,500/night)</option>
                  <option value="family-room">Family Room (₹4,500/night)</option>
                  <option value="family-room-2">Family Room 2 (₹4,000/night)</option>
                </select>
                {errors.roomType && (
                  <p className="text-accent text-sm mt-1">{errors.roomType}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="checkIn" className="text-primary-foreground/90">
                    Check-in Date *
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                    <Input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                  {errors.checkIn && (
                    <p className="text-accent text-sm mt-1">{errors.checkIn}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="checkOut" className="text-primary-foreground/90">
                    Check-out Date *
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                    <Input
                      id="checkOut"
                      name="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                      min={formData.checkIn || new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                  {errors.checkOut && (
                    <p className="text-accent text-sm mt-1">{errors.checkOut}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="message" className="text-primary-foreground/90">
                  Special Requests (Optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  placeholder="Any special requirements or questions?"
                  rows={3}
                />
              </div>

              {/* Add-on Options */}
              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="needYogaMat"
                    checked={formData.needYogaMat}
                    onCheckedChange={(checked) => handleCheckboxChange("needYogaMat", !!checked)}
                    className="border-primary-foreground/50 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                  />
                  <Label htmlFor="needYogaMat" className="text-primary-foreground/90 cursor-pointer">
                    Need yoga mat for terrace practice?
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="extraBed"
                    checked={formData.extraBed}
                    onCheckedChange={(checked) => handleCheckboxChange("extraBed", !!checked)}
                    className="border-primary-foreground/50 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                  />
                  <div className="flex-1">
                    <Label htmlFor="extraBed" className="text-primary-foreground/90 cursor-pointer">
                      Extra bed required? <span className="text-xs opacity-75">(Rs. 600/night - proper foldable bedding with mattress, linen, blanket & pillow)</span>
                    </Label>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="specialOccasion"
                    checked={formData.specialOccasion}
                    onCheckedChange={(checked) => handleCheckboxChange("specialOccasion", !!checked)}
                    className="border-primary-foreground/50 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                  />
                  <Label htmlFor="specialOccasion" className="text-primary-foreground/90 cursor-pointer">
                    Celebrating a special occasion?
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Inquiry
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-serif text-xl font-semibold mb-4">
                Prefer to Contact Directly?
              </h3>

              <div className="space-y-4">
                <Button
                  variant="whatsapp"
                  size="xl"
                  className="w-full"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us Now
                </Button>

                <Button
                  variant="heroSecondary"
                  size="xl"
                  className="w-full"
                  onClick={handleCall}
                >
                  <Phone className="h-5 w-5" />
                  Call +91 96678 46787
                </Button>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="font-semibold mb-4">Email Us</h4>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:reservations@ecoescapemukteshwar.com"
                  className="flex items-center gap-3 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="break-all">reservations@ecoescapemukteshwar.com</span>
                </a>
                <a
                  href="mailto:ecoescape.mukteshwar@gmail.com"
                  className="flex items-center gap-3 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="break-all">ecoescape.mukteshwar@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Trust Message */}
            <div className="text-center text-sm opacity-80">
              <p className="mb-2">💬 Quick Response Guaranteed</p>
              <p className="mb-2">✅ Secure Booking</p>
              <p>🔒 Your Privacy Protected</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
