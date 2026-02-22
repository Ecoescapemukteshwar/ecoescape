import type { RoomType, RoomPricing, BookingPricing } from "@/types/pricing";

// Base prices for each room type (standard season)
const BASE_PRICES: Record<RoomType, number> = {
  suite: 3500,
  apartment: 5500,
  familyRoom: 4500,
  familyRoom2: 4000,
};

// Month-based markup percentages (0-indexed: 0=Jan, 3=Apr, 4=May, 5=Jun, 6=Jul, 7=Aug)
// Gradual bell-curve pricing around summer peak season
const MONTHLY_MARKUPS: Record<number, number> = {
  3: 0.10,  // April: 10% markup (early shoulder season)
  4: 0.20,  // May: 20% markup (pre-peak)
  5: 0.35,  // June: 35% markup (peak season - summer holidays)
  6: 0.20,  // July: 20% markup (post-peak but still busy)
  7: 0.10,  // August: 10% markup (late shoulder season)
};

/**
 * Get markup percentage for a specific date
 * Returns 0 for months without markup (base price)
 */
export function getMarkupForDate(date: Date): number {
  const month = date.getMonth();
  return MONTHLY_MARKUPS[month] || 0;
}

/**
 * Check if a given date has any markup (is in pricing season)
 */
export function isPeakSeason(date: Date): boolean {
  return getMarkupForDate(date) > 0;
}

/**
 * Get the base price for a room type (standard season)
 */
export function getBasePrice(roomType: RoomType): number {
  return BASE_PRICES[roomType] || 0;
}

/**
 * Get price for a specific date
 * Returns price with markup if applicable, otherwise base price
 */
export function getPriceForDate(roomType: RoomType, date: Date): number {
  const basePrice = getBasePrice(roomType);
  const markup = getMarkupForDate(date);
  return Math.round(basePrice * (1 + markup));
}

/**
 * Get current pricing based on today's date
 */
export function getCurrentPrice(roomType: RoomType): number {
  return getPriceForDate(roomType, new Date());
}

/**
 * Get complete pricing information for a room type
 */
export function getRoomPricing(roomType: RoomType): RoomPricing {
  const basePrice = getBasePrice(roomType);
  const currentPrice = getCurrentPrice(roomType);
  const currentMarkup = getMarkupForDate(new Date());
  // Peak season price is now June's 35% markup
  const peakSeasonPrice = Math.round(basePrice * (1 + 0.35));

  return {
    basePrice,
    currentPrice,
    isPeakSeason: isPeakSeason(new Date()),
    peakSeasonPrice,
  };
}

/**
 * Calculate price for a booking period
 * Returns total price, breakdown, and relevant pricing info
 */
export function getBookingPrice(
  roomType: RoomType,
  checkIn: Date,
  checkOut: Date
): BookingPricing {
  const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));

  if (nights <= 0) {
    return {
      basePrice: getBasePrice(roomType),
      totalPrice: 0,
      nights: 0,
      isPeakSeason: false,
      priceBreakdown: [],
    };
  }

  const priceBreakdown: Array<{ date: Date; price: number }> = [];
  let totalPrice = 0;

  // Calculate price for each night
  for (let i = 0; i < nights; i++) {
    const nightDate = new Date(checkIn);
    nightDate.setDate(nightDate.getDate() + i);
    const price = getPriceForDate(roomType, nightDate);
    priceBreakdown.push({ date: nightDate, price });
    totalPrice += price;
  }

  // Check if any night falls in peak season
  const hasPeakSeasonNight = priceBreakdown.some(({ date }) => isPeakSeason(date));

  // Use the first night's price as the display price
  const basePrice = priceBreakdown[0]?.price || getBasePrice(roomType);

  return {
    basePrice,
    totalPrice,
    nights,
    isPeakSeason: hasPeakSeasonNight,
    priceBreakdown,
  };
}

/**
 * Format price for display
 * Rounds to nearest hundred for cleaner display
 * Example: 4375 → "₹4,400"
 */
export function formatPrice(price: number): string {
  const roundedPrice = Math.round(price / 100) * 100;
  return `₹${roundedPrice.toLocaleString("en-IN")}`;
}

/**
 * Format price exactly (no rounding)
 * Example: 4375 → "₹4,375"
 */
export function formatPriceExact(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

/**
 * Get peak season price for a room type (June - 35% markup)
 */
export function getPeakSeasonPrice(roomType: RoomType): number {
  const basePrice = getBasePrice(roomType);
  return Math.round(basePrice * (1 + 0.35));
}

/**
 * Map room option values from booking form to RoomType
 */
export function mapRoomTypeToPricingType(roomOptionValue: string): RoomType | null {
  const roomTypeMap: Record<string, RoomType> = {
    "suite-mountain-view": "suite",
    "spacious-apartment": "apartment",
    "family-room": "familyRoom",
    "family-room-2": "familyRoom2",
  };
  return roomTypeMap[roomOptionValue] || null;
}
