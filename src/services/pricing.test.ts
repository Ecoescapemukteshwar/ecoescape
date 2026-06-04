import { describe, it, expect } from "vitest";
import {
  getBasePrice,
  formatPrice,
  formatPriceExact,
  mapRoomTypeToPricingType,
  getMarkupForDate,
  isPeakSeason,
  getPriceForDate,
  getRoomPricing,
  getBookingPrice,
} from "./pricing";
import type { RoomType } from "@/types/pricing";

// The pricing engine is driven by SEASON_CALENDAR in pricing.ts: each date
// either falls in an "upper" band range (+30%), a "lower" band range (+15%),
// or no range at all (+0%). The dates below are picked from the published
// 2026 calendar. Always use the (year, monthIndex, day) constructor so that
// getMonth()/getDate() are timezone-stable — string dates parse as UTC and
// can shift a day in local time.
const UPPER = new Date(2026, 5, 15); // Jun 15 — the whole of June is upper band
const UPPER_FIRST = new Date(2026, 5, 1); // Jun 1
const UPPER_LAST = new Date(2026, 5, 30); // Jun 30
const LOWER_MAY = new Date(2026, 4, 20); // May 20 — inside May 15–31 lower range
const LOWER_AUG = new Date(2026, 7, 15); // Aug 15 — inside Aug 14–16 lower range
const LOWER_DEC = new Date(2026, 11, 25); // Dec 25 — inside Dec 24–31 lower range
const NONE_JULY = new Date(2026, 6, 15); // Jul 15 — July has no season ranges
const NONE_SEP = new Date(2026, 8, 15); // Sep 15 — September has no season ranges
const NONE_MAY_EARLY = new Date(2026, 4, 10); // May 10 — outside May's ranges
const NONE_FEB = new Date(2026, 1, 15); // Feb 15 — only Feb 28 is a season date

const upper = (base: number) => Math.round(base * 1.3);
const lower = (base: number) => Math.round(base * 1.15);

describe("Pricing Service", () => {
  describe("getBasePrice", () => {
    it("returns the base price for each room type", () => {
      expect(getBasePrice("suite")).toBe(3500);
      expect(getBasePrice("apartment")).toBe(5500);
      expect(getBasePrice("familyRoom")).toBe(4500);
      expect(getBasePrice("familyRoom2")).toBe(4000);
    });

    it("returns 0 for an invalid room type", () => {
      expect(getBasePrice("invalid" as RoomType)).toBe(0);
    });
  });

  describe("formatPrice", () => {
    it("rounds to the nearest hundred", () => {
      expect(formatPrice(4375)).toBe("₹4,400");
      expect(formatPrice(4349)).toBe("₹4,300");
      expect(formatPrice(4350)).toBe("₹4,400");
    });

    it("formats exact hundreds", () => {
      expect(formatPrice(3500)).toBe("₹3,500");
      expect(formatPrice(5500)).toBe("₹5,500");
    });

    it("uses Indian locale grouping for large numbers", () => {
      expect(formatPrice(100000)).toBe("₹1,00,000");
    });

    it("handles zero and small numbers", () => {
      expect(formatPrice(0)).toBe("₹0");
      expect(formatPrice(100)).toBe("₹100");
    });
  });

  describe("formatPriceExact", () => {
    it("formats without rounding", () => {
      expect(formatPriceExact(4375)).toBe("₹4,375");
      expect(formatPriceExact(100000)).toBe("₹1,00,000");
      expect(formatPriceExact(0)).toBe("₹0");
    });
  });

  describe("mapRoomTypeToPricingType", () => {
    it("maps booking-form values to room types", () => {
      expect(mapRoomTypeToPricingType("suite-mountain-view")).toBe("suite");
      expect(mapRoomTypeToPricingType("spacious-apartment")).toBe("apartment");
      expect(mapRoomTypeToPricingType("family-room")).toBe("familyRoom");
      expect(mapRoomTypeToPricingType("family-room-2")).toBe("familyRoom2");
    });

    it("returns null for invalid or non-form values", () => {
      expect(mapRoomTypeToPricingType("invalid")).toBeNull();
      expect(mapRoomTypeToPricingType("")).toBeNull();
      expect(mapRoomTypeToPricingType("suite")).toBeNull(); // room type, not a form value
    });
  });

  describe("getMarkupForDate", () => {
    it("returns 0.30 for upper-band dates (June)", () => {
      expect(getMarkupForDate(UPPER)).toBe(0.3);
      expect(getMarkupForDate(UPPER_FIRST)).toBe(0.3);
      expect(getMarkupForDate(UPPER_LAST)).toBe(0.3);
    });

    it("returns 0.15 for lower-band season dates", () => {
      expect(getMarkupForDate(LOWER_MAY)).toBe(0.15);
      expect(getMarkupForDate(LOWER_AUG)).toBe(0.15);
      expect(getMarkupForDate(LOWER_DEC)).toBe(0.15);
    });

    it("returns 0 for dates outside any season range", () => {
      expect(getMarkupForDate(NONE_JULY)).toBe(0);
      expect(getMarkupForDate(NONE_SEP)).toBe(0);
      expect(getMarkupForDate(NONE_MAY_EARLY)).toBe(0);
      expect(getMarkupForDate(NONE_FEB)).toBe(0);
    });

    it("returns 0 for years with no published calendar", () => {
      expect(getMarkupForDate(new Date(2030, 5, 15))).toBe(0);
    });
  });

  describe("isPeakSeason", () => {
    it("is true for any date carrying a markup", () => {
      expect(isPeakSeason(UPPER)).toBe(true);
      expect(isPeakSeason(LOWER_MAY)).toBe(true);
    });

    it("is false for dates with no markup", () => {
      expect(isPeakSeason(NONE_JULY)).toBe(false);
      expect(isPeakSeason(NONE_FEB)).toBe(false);
    });
  });

  describe("getPriceForDate", () => {
    it("applies the upper-band markup", () => {
      expect(getPriceForDate("suite", UPPER)).toBe(upper(3500)); // 4550
      expect(getPriceForDate("apartment", UPPER)).toBe(upper(5500)); // 7150
    });

    it("applies the lower-band markup", () => {
      expect(getPriceForDate("suite", LOWER_MAY)).toBe(lower(3500)); // 4025
    });

    it("charges base price outside any season range", () => {
      expect(getPriceForDate("suite", NONE_JULY)).toBe(3500);
    });

    it("returns 0 for an invalid room type", () => {
      expect(getPriceForDate("invalid" as RoomType, UPPER)).toBe(0);
    });
  });

  describe("getRoomPricing", () => {
    it("returns a complete pricing snapshot", () => {
      const pricing = getRoomPricing("suite");
      expect(pricing.basePrice).toBe(3500);
      expect(pricing.peakSeasonPrice).toBe(upper(3500)); // upper-band ceiling
      expect(typeof pricing.currentPrice).toBe("number");
      expect(pricing.currentPrice).toBeGreaterThan(0);
      expect(typeof pricing.isPeakSeason).toBe("boolean");
    });

    it("returns zeros for an invalid room type", () => {
      const pricing = getRoomPricing("invalid" as RoomType);
      expect(pricing.basePrice).toBe(0);
      expect(pricing.peakSeasonPrice).toBe(0);
    });
  });

  describe("getBookingPrice", () => {
    it("prices a single upper-band night", () => {
      const pricing = getBookingPrice("suite", new Date(2026, 5, 15), new Date(2026, 5, 16));
      expect(pricing.nights).toBe(1);
      expect(pricing.totalPrice).toBe(upper(3500));
      expect(pricing.isPeakSeason).toBe(true);
      expect(pricing.priceBreakdown).toHaveLength(1);
      expect(pricing.priceBreakdown[0].price).toBe(upper(3500));
    });

    it("prices a multi-night upper-band stay", () => {
      const pricing = getBookingPrice("suite", new Date(2026, 5, 15), new Date(2026, 5, 18));
      expect(pricing.nights).toBe(3);
      expect(pricing.totalPrice).toBe(upper(3500) * 3);
      expect(pricing.priceBreakdown).toHaveLength(3);
      pricing.priceBreakdown.forEach((night) => expect(night.price).toBe(upper(3500)));
    });

    it("charges base price for an out-of-season stay", () => {
      const pricing = getBookingPrice("suite", new Date(2026, 6, 10), new Date(2026, 6, 13));
      expect(pricing.nights).toBe(3);
      expect(pricing.totalPrice).toBe(3500 * 3);
      expect(pricing.isPeakSeason).toBe(false);
    });

    it("prices nights individually across a band boundary", () => {
      // May 31 (lower band) → checkout Jun 2 ⇒ nights = May 31 + Jun 1.
      const pricing = getBookingPrice("suite", new Date(2026, 4, 31), new Date(2026, 5, 2));
      expect(pricing.nights).toBe(2);
      expect(pricing.priceBreakdown[0].price).toBe(lower(3500)); // May 31
      expect(pricing.priceBreakdown[1].price).toBe(upper(3500)); // Jun 1
      expect(pricing.totalPrice).toBe(lower(3500) + upper(3500));
      expect(pricing.isPeakSeason).toBe(true); // at least one peak night
    });

    it("treats same-day and reversed ranges as zero nights", () => {
      const sameDay = getBookingPrice("suite", new Date(2026, 5, 15), new Date(2026, 5, 15));
      expect(sameDay.nights).toBe(0);
      expect(sameDay.totalPrice).toBe(0);
      expect(sameDay.isPeakSeason).toBe(false);

      const reversed = getBookingPrice("suite", new Date(2026, 5, 15), new Date(2026, 5, 10));
      expect(reversed.nights).toBe(0);
      expect(reversed.priceBreakdown).toHaveLength(0);
    });

    it("returns zero-priced nights for an invalid room type", () => {
      const pricing = getBookingPrice("invalid" as RoomType, new Date(2026, 5, 15), new Date(2026, 5, 18));
      expect(pricing.nights).toBe(3);
      expect(pricing.totalPrice).toBe(0);
      pricing.priceBreakdown.forEach((night) => expect(night.price).toBe(0));
    });

    it("prices all room types at the upper band", () => {
      const checkIn = new Date(2026, 5, 15);
      const checkOut = new Date(2026, 5, 18);
      expect(getBookingPrice("apartment", checkIn, checkOut).totalPrice).toBe(upper(5500) * 3);
      expect(getBookingPrice("familyRoom", checkIn, checkOut).totalPrice).toBe(upper(4500) * 3);
      expect(getBookingPrice("familyRoom2", checkIn, checkOut).totalPrice).toBe(upper(4000) * 3);
    });
  });
});
