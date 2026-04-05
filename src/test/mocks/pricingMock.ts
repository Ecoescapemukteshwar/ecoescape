import { vi } from 'vitest';
import type { PricingModifiersConfig } from '@/types/pricing';

/**
 * Mock pricing modifiers configuration matching the actual pricing-modifiers.json structure
 */
export const mockPricingModifiers: PricingModifiersConfig = {
  monthlyModifiers: {
    "0": 0.10,   // January - Standard
    "1": -0.10,  // February - Off-season
    "2": -0.10,  // March - Off-season
    "3": 0.10,   // April - Standard
    "4": 0.20,   // May - High
    "5": 0.30,   // June - Peak
    "6": 0.10,   // July - Standard
    "7": -0.10,  // August - Off-season
    "8": -0.10,  // September - Off-season
    "9": -0.10,  // October - Off-season
    "10": 0.10,  // November - Standard
    "11": 0.20   // December - High
  },
  metadata: {
    description: "Monthly pricing modifiers for Ecoescape Mukteshwar",
    lastUpdated: "2026-03-23",
    tiers: {
      peak: {
        months: ["June"],
        modifier: 0.30,
        reason: "Highest demand every year"
      },
      high: {
        months: ["May", "December"],
        modifier: 0.20,
        reason: "Pre-peak surge + holiday travel"
      },
      standard: {
        months: ["January", "April", "July", "November"],
        modifier: 0.10,
        reason: "Moderate demand"
      },
      offSeason: {
        months: ["February", "March", "August", "September", "October"],
        modifier: -0.10,
        reason: "Lowest demand, incentivize occupancy"
      }
    }
  }
};

/**
 * Mock base prices for each room type
 */
export const mockBasePrices = {
  suite: 3500,
  apartment: 5500,
  familyRoom: 4500,
  familyRoom2: 4000,
} as const;

/**
 * Mock the global fetch API for pricing-modifiers.json
 * @param success - Whether the fetch should succeed
 * @param data - Optional custom data to return (defaults to mockPricingModifiers)
 */
export function mockPricingFetch(success = true, data: PricingModifiersConfig = mockPricingModifiers) {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: success,
      status: success ? 200 : 404,
      statusText: success ? 'OK' : 'Not Found',
      json: () => Promise.resolve(data),
    } as Response)
  );
}

/**
 * Mock fetch to return a network error
 */
export function mockPricingFetchError() {
  global.fetch = vi.fn(() =>
    Promise.reject(new Error('Network error'))
  );
}

/**
 * Mock fetch to return an HTTP error (e.g., 404, 500)
 */
export function mockPricingFetchHttpError(status: number, statusText: string) {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: false,
      status,
      statusText,
      json: () => Promise.reject(new Error(`HTTP ${status}: ${statusText}`)),
    } as Response)
  );
}

/**
 * Reset the pricing service module cache
 * This is necessary because the pricing service uses module-scoped variables
 * for caching (pricingModifiers, modifiersLoaded, loadPromise)
 */
export async function resetPricingCache() {
  // Clear all mocks
  vi.clearAllMocks();

  // Reset modules to clear module-scoped variables
  vi.resetModules();

  // Re-import the module to get a fresh state
  // Note: This requires dynamic import in the actual test
}

/**
 * Setup function to be called in beforeEach of pricing tests
 * Handles fetch mocking and cache reset
 */
export function setupPricingTests() {
  // Reset mocks and modules before each test
  beforeEach(() => {
    vi.clearAllMocks();
    mockPricingFetch(true);
  });

  // Cleanup after each test
  afterEach(() => {
    vi.clearAllMocks();
  });
}

/**
 * Calculate expected price based on base price and markup
 * @param basePrice - The base price for the room type
 * @param markup - The markup multiplier (e.g., 0.30 for 30%)
 * @returns The expected price rounded
 */
export function calculateExpectedPrice(basePrice: number, markup: number): number {
  return Math.round(basePrice * (1 + markup));
}

/**
 * Get expected price for a specific room type and month
 * @param roomType - The room type
 * @param month - The month (0-11)
 * @returns The expected price
 */
export function getExpectedPriceForMonth(roomType: keyof typeof mockBasePrices, month: number): number {
  const basePrice = mockBasePrices[roomType];
  const markup = mockPricingModifiers.monthlyModifiers[month.toString()] || 0;
  return calculateExpectedPrice(basePrice, markup);
}
