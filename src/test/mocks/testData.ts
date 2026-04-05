import type { RoomType } from '@/types/pricing';

/**
 * Test fixtures for room types
 */
export const testRoomTypes: RoomType[] = ['suite', 'apartment', 'familyRoom', 'familyRoom2'];

/**
 * Test date fixtures covering various scenarios
 */
export const testDates = {
  // Peak season (June - 30% markup)
  june15: new Date('2026-06-15'),
  june1: new Date('2026-06-01'),
  june30: new Date('2026-06-30'),

  // High season (May, December - 20% markup)
  may15: new Date('2026-05-15'),
  dec15: new Date('2026-12-15'),
  dec31: new Date('2026-12-31'),

  // Standard season (January, April, July, November - 10% markup)
  jan15: new Date('2026-01-15'),
  apr15: new Date('2026-04-15'),
  jul15: new Date('2026-07-15'),
  nov15: new Date('2026-11-15'),

  // Off-season (February, March, August, September, October - -10% discount)
  feb15: new Date('2026-02-15'),
  mar15: new Date('2026-03-15'),
  aug15: new Date('2026-08-15'),
  sep15: new Date('2026-09-15'),
  oct15: new Date('2026-10-15'),

  // Leap year
  feb28: new Date('2028-02-28'),
  feb29: new Date('2028-02-29'),
  mar1: new Date('2028-03-01'),

  // Month boundaries
  jan1: new Date('2027-01-01'),
  dec31ToJan1: {
    checkIn: new Date('2026-12-31'),
    checkOut: new Date('2027-01-01'),
  },

  // Mixed season booking
  may31ToJun2: {
    checkIn: new Date('2026-05-31'), // High season (20%)
    checkOut: new Date('2026-06-02'), // Peak season (30%)
  },

  // Invalid date ranges
  sameDay: {
    checkIn: new Date('2026-06-15'),
    checkOut: new Date('2026-06-15'),
  },
  checkoutBeforeCheckin: {
    checkIn: new Date('2026-06-15'),
    checkOut: new Date('2026-06-10'),
  },

  // Multi-night bookings
  threeNights: {
    checkIn: new Date('2026-06-15'),
    checkOut: new Date('2026-06-18'),
  },
  oneWeek: {
    checkIn: new Date('2026-06-15'),
    checkOut: new Date('2026-06-22'),
  },
} as const;

/**
 * Expected prices for each room type based on seasonal tiers
 * All values are pre-calculated based on base price × (1 + markup)
 */
export const expectedPrices = {
  suite: {
    base: 3500,
    peak: Math.round(3500 * 1.30),      // 4550 (June)
    high: Math.round(3500 * 1.20),      // 4200 (May, December)
    standard: Math.round(3500 * 1.10),  // 3850 (Jan, Apr, Jul, Nov)
    offSeason: Math.round(3500 * 0.90), // 3150 (Feb, Mar, Aug, Sep, Oct)
  },
  apartment: {
    base: 5500,
    peak: Math.round(5500 * 1.30),      // 7150
    high: Math.round(5500 * 1.20),      // 6600
    standard: Math.round(5500 * 1.10),  // 6050
    offSeason: Math.round(5500 * 0.90), // 4950
  },
  familyRoom: {
    base: 4500,
    peak: Math.round(4500 * 1.30),      // 5850
    high: Math.round(4500 * 1.20),      // 5400
    standard: Math.round(4500 * 1.10),  // 4950
    offSeason: Math.round(4500 * 0.90), // 4050
  },
  familyRoom2: {
    base: 4000,
    peak: Math.round(4000 * 1.30),      // 5200
    high: Math.round(4000 * 1.20),      // 4800
    standard: Math.round(4000 * 1.10),  // 4400
    offSeason: Math.round(4000 * 0.90), // 3600
  },
} as const;

/**
 * Expected monthly modifiers for each month
 */
export const expectedMonthlyModifiers = {
  january: 0.10,    // 0
  february: -0.10,  // 1
  march: -0.10,     // 2
  april: 0.10,      // 3
  may: 0.20,        // 4
  june: 0.30,       // 5
  july: 0.10,       // 6
  august: -0.10,    // 7
  september: -0.10, // 8
  october: -0.10,   // 9
  november: 0.10,   // 10
  december: 0.20,   // 11
} as const;

/**
 * Form option value mappings
 */
export const formRoomOptions = {
  'suite-mountain-view': 'suite',
  'spacious-apartment': 'apartment',
  'family-room': 'familyRoom',
  'family-room-2': 'familyRoom2',
} as const;

/**
 * Invalid form values for testing error handling
 */
export const invalidFormValues = [
  '',
  'invalid-room',
  'suite',
  'apartment',
  'random-string',
  null,
  undefined,
] as const;

/**
 * Expected booking pricing for various scenarios
 */
export const expectedBookingPricing = {
  // Single night in peak season (June)
  suiteOneNightPeak: {
    basePrice: expectedPrices.suite.peak,
    totalPrice: expectedPrices.suite.peak,
    nights: 1,
    isPeakSeason: true,
  },

  // Three nights in peak season
  suiteThreeNightsPeak: {
    basePrice: expectedPrices.suite.peak,
    totalPrice: expectedPrices.suite.peak * 3,
    nights: 3,
    isPeakSeason: true,
  },

  // Mixed season (May 31 - June 2: 1 night high, 2 nights peak)
  suiteMixedSeason: {
    totalPrice: expectedPrices.suite.high + (expectedPrices.suite.peak * 2),
    nights: 3,
    isPeakSeason: true,
  },

  // Invalid range
  invalidRange: {
    basePrice: expectedPrices.suite.base,
    totalPrice: 0,
    nights: 0,
    isPeakSeason: false,
  },
} as const;

/**
 * Helper function to get expected price for room type and season
 */
export function getExpectedPrice(
  roomType: RoomType,
  season: keyof typeof expectedPrices.suite
): number {
  return expectedPrices[roomType][season];
}

/**
 * Helper function to get expected modifier for a month
 */
export function getExpectedModifier(month: number): number {
  const modifierMap: Record<number, number> = {
    0: 0.10,   // January
    1: -0.10,  // February
    2: -0.10,  // March
    3: 0.10,   // April
    4: 0.20,   // May
    5: 0.30,   // June
    6: 0.10,   // July
    7: -0.10,  // August
    8: -0.10,  // September
    9: -0.10,  // October
    10: 0.10,  // November
    11: 0.20,  // December
  };
  return modifierMap[month] ?? 0;
}

/**
 * Test data for formatting functions
 */
export const formatPriceTestCases = [
  { input: 0, expected: '₹0' },
  { input: 100, expected: '₹100' },
  { input: 3500, expected: '₹3,500' },
  { input: 4349, expected: '₹4,300' }, // Rounds down
  { input: 4350, expected: '₹4,400' }, // Rounds up
  { input: 4375, expected: '₹4,400' }, // Rounds to nearest hundred
  { input: 100000, expected: '₹1,00,000' }, // Indian locale
] as const;

/**
 * Test data for exact price formatting
 */
export const formatPriceExactTestCases = [
  { input: 0, expected: '₹0' },
  { input: 100, expected: '₹100' },
  { input: 3500, expected: '₹3,500' },
  { input: 4375, expected: '₹4,375' }, // No rounding
  { input: 100000, expected: '₹1,00,000' },
] as const;
