export type RoomType = 'suite' | 'apartment' | 'familyRoom' | 'familyRoom2';

export interface MonthlyModifier {
  weekday: number;
  weekend: number;
}

export interface PricingModifiersConfig {
  monthlyModifiers: Record<string, MonthlyModifier>;
  weights: {
    monthly: number;
    weekend: number;
    demand: number;
  };
  metadata?: {
    description: string;
    lastUpdated: string;
    note?: string;
  };
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
