export type RoomType = 'suite' | 'apartment' | 'familyRoom' | 'familyRoom2';

// Two-band demand model. Band assignment per Season Date range comes
// from Google Trends search interest for "Mukteshwar" (India, 2021–2026).
// See SEASON_CALENDAR in src/services/pricing.ts.
export type DemandBand = 'upper' | 'lower';

export interface SeasonRange {
  start: number; // inclusive day-of-month
  end: number;   // inclusive day-of-month
  band: DemandBand;
}

export interface SeasonMonth {
  year: number;
  month: number; // 0-indexed (0 = January, 11 = December)
  ranges: SeasonRange[];
}

// Legacy types — kept so existing imports compile during the in-flight
// async-pricing migration (test mocks still reference these). Not used
// by the current synchronous pricing engine.
export interface DateRange {
  start: number;
  end: number;
}

export interface MonthlyPeakConfig {
  month: number;
  dateRanges: DateRange[];
  weekdayMarkup: number;
  weekendMarkup: number;
}

export interface PeakSeasonConfig {
  year: number;
  month: number;
  dateRanges: DateRange[];
  weekdayMarkup: number;
  weekendMarkup: number;
}

export interface PricingModifiersConfig {
  monthlyModifiers: Record<string, number>;
  metadata?: Record<string, unknown>;
}

export interface RoomPricing {
  basePrice: number;
  currentPrice: number;
  isPeakSeason: boolean;
  peakSeasonPrice: number;
}

export interface BookingPricing {
  basePrice: number;
  totalPrice: number;
  nights: number;
  isPeakSeason: boolean;
  priceBreakdown: Array<{
    date: Date;
    price: number;
  }>;
}
