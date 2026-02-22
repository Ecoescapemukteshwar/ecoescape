import { siteConfig } from "@/config/site";
import { sanitizeForWhatsApp } from "@/lib/sanitizer";

export interface BookingMessageData {
  name: string;
  email: string;
  phone: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message?: string;
  needYogaMat?: boolean;
  extraBed?: boolean;
  specialOccasion?: boolean;
  pricePerNight?: number;
  totalPrice?: number;
  nights?: number;
  isPeakSeason?: boolean;
}

export function createWhatsAppMessage(data: BookingMessageData): string {
  const extraOptions = [
    data.needYogaMat ? "Yoga mat needed" : "",
    data.extraBed ? "Extra bed required (Rs. 600/night)" : "",
    data.specialOccasion ? "Special occasion" : "",
  ].filter(Boolean);

  // Build pricing information if available
  const priceInfo = data.pricePerNight && data.totalPrice && data.nights
    ? `%0A%0APRICING:%0A- Rate: ₹${data.pricePerNight.toLocaleString("en-IN")}/night${data.isPeakSeason ? " (June Peak Season)" : ""}%0A- Nights: ${data.nights}%0A- Total: ₹${data.totalPrice.toLocaleString("en-IN")}`
    : "";

  // Use %0A for URL encoding newlines in WhatsApp
  const message = `NEW BOOKING INQUIRY - Ecoescape Mukteshwar%0A%0AName: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0ARoom Type: ${data.roomType}%0ACheck-in: ${data.checkIn}%0ACheck-out: ${data.checkOut}%0AGuests: ${data.guests}${
    extraOptions.length > 0
      ? `%0ASpecial Requests: ${extraOptions.join(", ")}`
      : ""
  }${data.message ? `%0AMessage: ${sanitizeForWhatsApp(data.message)}` : ""}${priceInfo}%0A%0APlease confirm availability and rates. Thank you!`;

  return message;
}

export function openWhatsAppWithMessage(message: string): void {
  window.open(`${siteConfig.whatsappUrl}?text=${message}`, "_blank");
}
