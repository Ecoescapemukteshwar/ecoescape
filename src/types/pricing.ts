export type RoomType = 'suite' | 'apartment' | 'familyRoom' | 'familyRoom2';

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
