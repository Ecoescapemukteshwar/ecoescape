import type {
  RoomType,
  RoomPricing,
  BookingPricing,
  DemandBand,
  SeasonMonth,
} from "@/types/pricing";

// Base prices per room type. Markups apply on top of these for dates that
// fall inside a Season Date range; non-Season dates are billed at base.
const BASE_PRICES: Record<RoomType, number> = {
  suite: 3500,
  apartment: 5500,
  familyRoom: 4500,
  familyRoom2: 4000,
};

// Two-band markup. Band assignment is driven by 5-year monthly-average
// search interest for "Mukteshwar" from Google Trends India (May 2021 –
// Apr 2026, source CSV: time_series_IN_20210503-1319_20260503-1319.csv):
//
//   Jun 85.2 ← only month above 65 → upper band
//   May 61.4, Apr 51.0, Dec 49.2 ← elevated → lower band
//   Jan 43.8, Mar 42.2, Jul 40.0, Nov 35.0, Feb 34.4, Sep 34.4,
//   Aug 33.6, Oct 32.6 ← below threshold → no markup (only the operational
//   Season Date sub-windows in these months get the lower band)
//
// In practice every range in SEASON_CALENDAR is `lower` except the full
// month of June, which is `upper`.
const BAND_MARKUP: Record<DemandBand, number> = {
  upper: 0.30, // +30%
  lower: 0.15, // +15%
};

// Operational Season Date calendar (year-specific).
//
// Source: property's published 2026–27 season schedule. Each range tagged
// with the Google-Trends-derived demand band that applies. Years/months
// not listed have no markup; dates outside listed ranges in listed months
// also have no markup.
//
// Updating: when the property publishes a new year's calendar, append
// SeasonMonth entries here. The pricing engine is purely data-driven —
// no other code change is required.
const SEASON_CALENDAR: SeasonMonth[] = [
  // ─── 2026 ───
  // Feb 2026
  { year: 2026, month: 1, ranges: [{ start: 28, end: 28, band: "lower" }] },
  // Mar 2026
  {
    year: 2026,
    month: 2,
    ranges: [
      { start: 1, end: 4, band: "lower" },
      { start: 26, end: 31, band: "lower" },
    ],
  },
  // Apr 2026
  { year: 2026, month: 3, ranges: [{ start: 3, end: 5, band: "lower" }] },
  // May 2026
  {
    year: 2026,
    month: 4,
    ranges: [
      { start: 1, end: 3, band: "lower" },
      { start: 15, end: 31, band: "lower" },
    ],
  },
  // Jun 2026 — peak (upper band)
  { year: 2026, month: 5, ranges: [{ start: 1, end: 30, band: "upper" }] },
  // Jul 2026 — no Season Dates
  // Aug 2026
  { year: 2026, month: 7, ranges: [{ start: 14, end: 16, band: "lower" }] },
  // Sep 2026 — no Season Dates
  // Oct 2026
  {
    year: 2026,
    month: 9,
    ranges: [
      { start: 2, end: 4, band: "lower" },
      { start: 17, end: 20, band: "lower" },
    ],
  },
  // Nov 2026
  { year: 2026, month: 10, ranges: [{ start: 6, end: 11, band: "lower" }] },
  // Dec 2026
  { year: 2026, month: 11, ranges: [{ start: 24, end: 31, band: "lower" }] },

  // ─── 2027 ───
  // Jan 2027
  {
    year: 2027,
    month: 0,
    ranges: [
      { start: 1, end: 3, band: "lower" },
      { start: 23, end: 26, band: "lower" },
    ],
  },
  // Feb 2027 — no Season Dates
  // Mar 2027
  {
    year: 2027,
    month: 2,
    ranges: [
      { start: 19, end: 22, band: "lower" },
      { start: 26, end: 28, band: "lower" },
    ],
  },
];

/**
 * Resolve the demand band for a specific date. Returns null when the date
 * falls outside any Season Date range.
 */
function getBandForDate(date: Date): DemandBand | null {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const monthEntry = SEASON_CALENDAR.find(
    (s) => s.year === year && s.month === month,
  );
  if (!monthEntry) return null;
  const range = monthEntry.ranges.find((r) => day >= r.start && day <= r.end);
  return range?.band ?? null;
}

/**
 * Markup percentage for a specific date.
 * Returns 0 for non-Season dates, 0.15 for lower-band, 0.30 for upper-band.
 */
export function getMarkupForDate(date: Date): number {
  const band = getBandForDate(date);
  return band ? BAND_MARKUP[band] : 0;
}

/**
 * True if the given date carries any markup.
 * Name preserved for backwards compatibility with existing callers.
 */
export function isPeakSeason(date: Date): boolean {
  return getMarkupForDate(date) > 0;
}

/**
 * Base price for a room type (no markup applied).
 */
export function getBasePrice(roomType: RoomType): number {
  return BASE_PRICES[roomType] || 0;
}

/**
 * Price for a specific date — base × (1 + markup).
 */
export function getPriceForDate(roomType: RoomType, date: Date): number {
  const basePrice = getBasePrice(roomType);
  const markup = getMarkupForDate(date);
  return Math.round(basePrice * (1 + markup));
}

/**
 * Price for today.
 */
export function getCurrentPrice(roomType: RoomType): number {
  return getPriceForDate(roomType, new Date());
}

/**
 * Upper-band ceiling — the highest price a room can hit (June rate).
 * Used by /rooms pages to advertise a "from / up to" range.
 */
export function getPeakSeasonPrice(roomType: RoomType): number {
  const basePrice = getBasePrice(roomType);
  return Math.round(basePrice * (1 + BAND_MARKUP.upper));
}

/**
 * Snapshot of pricing for a room: base, today's price, today's peak status,
 * and the upper-band ceiling for display.
 */
export function getRoomPricing(roomType: RoomType): RoomPricing {
  return {
    basePrice: getBasePrice(roomType),
    currentPrice: getCurrentPrice(roomType),
    isPeakSeason: isPeakSeason(new Date()),
    peakSeasonPrice: getPeakSeasonPrice(roomType),
  };
}

/**
 * Total price for a stay, with per-night breakdown.
 */
export function getBookingPrice(
  roomType: RoomType,
  checkIn: Date,
  checkOut: Date,
): BookingPricing {
  const nights = Math.ceil(
    (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24),
  );

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

  for (let i = 0; i < nights; i++) {
    const nightDate = new Date(checkIn);
    nightDate.setDate(nightDate.getDate() + i);
    const price = getPriceForDate(roomType, nightDate);
    priceBreakdown.push({ date: nightDate, price });
    totalPrice += price;
  }

  const hasPeakSeasonNight = priceBreakdown.some(({ date }) => isPeakSeason(date));
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
 * Format price for display, rounded to the nearest hundred.
 * Example: 4375 → "₹4,400"
 */
export function formatPrice(price: number): string {
  const roundedPrice = Math.round(price / 100) * 100;
  return `₹${roundedPrice.toLocaleString("en-IN")}`;
}

/**
 * Format price exactly (no rounding).
 * Example: 4375 → "₹4,375"
 */
export function formatPriceExact(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

/**
 * Map booking-form room option values back to RoomType.
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
