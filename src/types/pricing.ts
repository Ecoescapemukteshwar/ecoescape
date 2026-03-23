export type RoomType = 'suite' | 'apartment' | 'familyRoom' | 'familyRoom2';

export interface PricingModifiersConfig {
  monthlyModifiers: Record<string, number>; // Month index (0-11) -> modifier (-0.10 to 0.30)
  metadata?: {
    description: string;
    lastUpdated: string;
    tiers: {
      peak: { months: string[]; modifier: number; reason: string };
      high: { months: string[]; modifier: number; reason: string };
      standard: { months: string[]; modifier: number; reason: string };
      offSeason: { months: string[]; modifier: number; reason: string };
    };
  };
}

export interface DateRange {
  start: number;
  end: number;
}

export interface MonthlyPeakConfig {
  month: number; // 0-indexed (0=January, 11=December)
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
