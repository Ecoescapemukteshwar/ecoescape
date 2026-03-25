import type { RoomType, RoomPricing, BookingPricing, PricingModifiersConfig, BookingPricingWithDemand } from "@/types/pricing";
export type { RoomType };

// Base prices for each room type (standard season)
const BASE_PRICES: Record<RoomType, number> = {
  suite: 3500,
  apartment: 5500,
  familyRoom: 4500,
  familyRoom2: 4000,
};

// Cached pricing modifiers
let pricingModifiers: PricingModifiersConfig | null = null;
let modifiersLoaded = false;
let loadPromise: Promise<PricingModifiersConfig | null> | null = null;

/**
 * Load pricing modifiers from JSON file
 * Uses caching to avoid repeated fetches
 * Returns null if loading fails (will use base price)
 */
async function loadPricingModifiers(): Promise<PricingModifiersConfig | null> {
  // Return cached result if already loaded
  if (modifiersLoaded && pricingModifiers) {
    return pricingModifiers;
  }

  // Return existing promise if loading is in progress
  if (loadPromise) {
    return loadPromise;
  }

  // Create new load promise
  loadPromise = (async () => {
    try {
      const response = await fetch('/pricing-modifiers.json');

      if (!response.ok) {
        throw new Error(`Failed to load pricing modifiers: ${response.statusText}`);
      }
      const data = await response.json();
      pricingModifiers = data;
      modifiersLoaded = true;
      return data;
    } catch (error) {
      console.error('Failed to load pricing modifiers, using base price:', error);
      // Return null to indicate fallback to base price only
      pricingModifiers = null;
      modifiersLoaded = true;
      return null;
    } finally {
      loadPromise = null; // Clear the promise after completion
    }
  })();

  return loadPromise;
}

/**
 * Check if a given date is a weekend (Saturday or Sunday)
 */
function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6; // 0=Sunday, 6=Saturday
}

/**
 * Get markup percentage for a specific date
 * Returns weighted sum of monthly + weekend + demand
 * NO CLAMPING - weights ensure total stays within ±30%
 */
export async function getMarkupForDate(date: Date): Promise<number> {
  const modifiers = await loadPricingModifiers();

  if (!modifiers) {
    return 0; // Use base price if JSON failed to load
  }

  const month = date.getMonth().toString();
  const monthlyMod = modifiers.monthlyModifiers[month];

  if (!monthlyMod) {
    return 0;
  }

  // Get weekday or weekend markup
  const baseMarkup = isWeekend(date) ? monthlyMod.weekend : monthlyMod.weekday;

  // Calculate weekend premium (extra on weekends)
  const weekendPremium = isWeekend(date) ? (monthlyMod.weekend - monthlyMod.weekday) : 0;

  // Get demand multiplier (no clamping!)
  const demandMult = getDemandMultiplier();
  const demandMarkup = demandMult - 1; // Convert to markup (e.g., 1.06 → 0.06)

  // Apply weights to each layer
  const weightedMonthly = baseMarkup * modifiers.weights.monthly;
  const weightedWeekend = weekendPremium * modifiers.weights.weekend;
  const weightedDemand = demandMarkup * modifiers.weights.demand;

  // Sum weighted contributions
  const totalMarkup = weightedMonthly + weightedWeekend + weightedDemand;

  return totalMarkup;
}

/**
 * Check if a given date has any markup (is in pricing season)
 */
export async function isPeakSeason(date: Date): Promise<boolean> {
  const markup = await getMarkupForDate(date);
  return markup > 0;
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
export async function getPriceForDate(roomType: RoomType, date: Date): Promise<number> {
  const basePrice = getBasePrice(roomType);
  const markup = await getMarkupForDate(date);
  return Math.round(basePrice * (1 + markup));
}

/**
 * Get current pricing based on today's date
 */
export async function getCurrentPrice(roomType: RoomType): Promise<number> {
  return getPriceForDate(roomType, new Date());
}

/**
 * Get complete pricing information for a room type
 */
export async function getRoomPricing(roomType: RoomType): Promise<RoomPricing> {
  const basePrice = getBasePrice(roomType);
  const currentPrice = await getCurrentPrice(roomType);
  // Peak season price is June's 30% markup
  const peakSeasonPrice = Math.round(basePrice * (1 + 0.30));

  const todayIsPeak = await isPeakSeason(new Date());

  return {
    basePrice,
    currentPrice,
    isPeakSeason: todayIsPeak,
    peakSeasonPrice,
  };
}

/**
 * Calculate price for a booking period
 * Returns total price, breakdown, and relevant pricing info
 */
export async function getBookingPrice(
  roomType: RoomType,
  checkIn: Date,
  checkOut: Date
): Promise<BookingPricing> {
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
    const price = await getPriceForDate(roomType, nightDate);
    priceBreakdown.push({ date: nightDate, price });
    totalPrice += price;
  }

  // Check if any night falls in peak season
  const hasPeakSeasonNight = await Promise.all(
    priceBreakdown.map(({ date }) => isPeakSeason(date))
  ).then(results => results.some(Boolean));

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
 * Get peak season price for a room type (maximum markup: 30% for June)
 */
export function getPeakSeasonPrice(roomType: RoomType): number {
  const basePrice = getBasePrice(roomType);
  return Math.round(basePrice * (1 + 0.30));
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

// Cache for demand multiplier
let demandMultiplierCache: number | null = null;
let isLoading = false;

/**
 * Fetch demand multiplier from public directory
 * Returns the multiplier value or 1.0 on error
 */
async function fetchDemandMultiplier(): Promise<number> {
  try {
    const response = await fetch('/demand-multiplier.json');
    if (!response.ok) {
      throw new Error('Failed to load demand multiplier');
    }

    const demandData = await response.json();
    const value = demandData?.value;

    // Validate the value is within expected range
    if (typeof value === 'number' && value >= 0.98 && value <= 1.06) {
      return value;
    }

    console.warn('Invalid demand multiplier value, using fallback 1.0');
    return 1.0;
  } catch (error) {
    console.warn('Could not load demand multiplier, using fallback 1.0:', error);
    return 1.0;
  }
}

/**
 * Get demand multiplier from JSON file
 * Returns cached value or triggers async load
 */
function getDemandMultiplier(): number {
  // Return cached value immediately
  if (demandMultiplierCache !== null) {
    return demandMultiplierCache;
  }

  // Start loading in background if not already loading
  if (!isLoading) {
    isLoading = true;
    fetchDemandMultiplier().then(value => {
      demandMultiplierCache = value;
      isLoading = false;
      // Force re-render by updating window location
      if (typeof window !== 'undefined' && value !== 1.0) {
        // Updated
      }
    });
  }

  // Return 1.0 on first call (will be cached after async load)
  return 1.0;
}

/**
 * Initialize demand multiplier (call this on app startup)
 */
export async function initializeDemandMultiplier() {
  if (demandMultiplierCache === null && !isLoading) {
    isLoading = true;
    demandMultiplierCache = await fetchDemandMultiplier();
    isLoading = false;
    return demandMultiplierCache;
  }
  return demandMultiplierCache ?? 1.0;
}

/**
 * Force reload the demand multiplier
 */
export async function reloadDemandMultiplier() {
  demandMultiplierCache = null;
  isLoading = false;
  demandMultiplierCache = await fetchDemandMultiplier();
  return demandMultiplierCache;
}

/**
 * Get price for a specific date with demand multiplier applied
 * Enhanced version of getPriceForDate() with weighted adjustments
 * NO CLAMPING - weights ensure we stay within ±30% naturally
 */
export async function getPriceForDateWithDemand(roomType: RoomType, date: Date): Promise<number> {
  const basePrice = getBasePrice(roomType);
  const markup = await getMarkupForDate(date);

  // Apply weighted markup directly (no clamping!)
  const price = basePrice * (1 + markup);

  // Round to nearest ₹100
  return Math.round(price / 100) * 100;
}

/**
 * Calculate booking price with demand multiplier
 * Enhanced version with detailed breakdown
 * NO CLAMPING - weights ensure we stay within ±30% naturally
 */
export async function getBookingPriceWithDemand(
  roomType: RoomType,
  checkIn: Date,
  checkOut: Date
): Promise<BookingPricingWithDemand> {
  const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));

  if (nights <= 0) {
    return {
      basePrice: getBasePrice(roomType),
      totalPrice: 0,
      nights: 0,
      isPeakSeason: false,
      demandMultiplier: 1.0,
      priceBreakdown: [],
    };
  }

  const demandMultiplier = getDemandMultiplier();
  const priceBreakdown: Array<{ date: Date; price: number; markup: number; demandMult: number }> = [];
  let totalPrice = 0;

  // Calculate price for each night
  for (let i = 0; i < nights; i++) {
    const nightDate = new Date(checkIn);
    nightDate.setDate(nightDate.getDate() + i);

    const basePrice = getBasePrice(roomType);
    const markup = await getMarkupForDate(nightDate);

    // Apply weighted markup directly (no clamping!)
    let price = basePrice * (1 + markup);
    price = Math.round(price / 100) * 100;

    priceBreakdown.push({ date: nightDate, price, markup, demandMult: demandMultiplier });
    totalPrice += price;
  }

  const hasPeakSeasonNight = priceBreakdown.some(({ markup }) => markup > 0);
  const basePrice = priceBreakdown[0]?.price || getBasePrice(roomType);

  return {
    basePrice,
    totalPrice,
    nights,
    isPeakSeason: hasPeakSeasonNight,
    demandMultiplier,
    priceBreakdown,
  };
}

/**
 * Get current price with demand multiplier applied
 * Convenience wrapper for getPriceForDateWithDemand with today's date
 */
export async function getCurrentPriceWithDemand(roomType: RoomType): Promise<number> {
  return getPriceForDateWithDemand(roomType, new Date());
}
