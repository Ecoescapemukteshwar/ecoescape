/**
 * Blog Components Index
 *
 * Central export file for all blog post components.
 * This enables dynamic loading of blog posts based on slug.
 */

import { lazy } from 'react';

// Lazy load all blog components
export const blogComponents = {
  'slow-travel-mukteshwar': lazy(() => import('./SlowTravelGuide')),
  'offbeat-village-walking-trails': lazy(() => import('./VillageWalkingTrails')),
  'summer-escape-guide-2026': lazy(() => import('./SummerEscapeGuide')),
  'farm-to-table-mukteshwar-dining': lazy(() => import('./FarmToTableDining')),
  'mukteshwar-in-winter': lazy(() => import('./WinterExperienceGuide')),
  'mukteshwar-vs-nainital': lazy(() => import('./MukteshwarVsNainital')),
  'best-time-to-visit-mukteshwar-guide': lazy(() => import('./BestTimeToVisit')),
  'things-to-do-in-mukteshwar-beyond-temple': lazy(() => import('./BeyondTheTempleActivities')),
  'best-homestays-in-mukteshwar-with-himalayan-views': lazy(() => import('./BestHomestaysGuide')),
  'pet-friendly-stays-in-mukteshwar': lazy(() => import('./PetFriendlyStays')),
  'sustainable-stays-in-mukteshwar-guide': lazy(() => import('./SustainableStaysGuide')),
  'budget-friendly-homestays-mukteshwar-solo-travel': lazy(() => import('./BudgetHomestaysGuide')),
  'kainchi-dham-to-mukteshwar-distance': lazy(() => import('./KainchiDhamToMukteshwar')),
  'mukteshwar-to-nainital-day-trip': lazy(() => import('./MukteshwarToNainitalDayTrip')),
  'best-resorts-in-mukteshwar': lazy(() => import('./BestResortsInMukteshwar')),
  'spiritual-kumaon-guide': lazy(() => import('./SpiritualKumaonGuide')),
  'bhalu-gaad-waterfall-trek': lazy(() => import('./BhaluGaadWaterfallTrek')),
  'mukteshwar-backpacker-guide': lazy(() => import('./BackpackerMukteshwarGuide')),
  'mukteshwar-mahadev-temple-history': lazy(() => import('./MukteshwarMahadevHistory')),
  'delhi-to-mukteshwar-road-trip': lazy(() => import('./DelhiToMukteshwarRoadTrip')),
  'offbeat-places-in-mukteshwar': lazy(() => import('./MukteshwarOffbeatPlaces')),
  'spring-in-mukteshwar-guide': lazy(() => import('./MukteshwarSpringGuide')),
  'monsoon-in-mukteshwar-guide': lazy(() => import('./MonsoonGuide')),
  'best-photography-spots-in-mukteshwar': lazy(() => import('./PhotographySpotsGuide')),
  'local-festivals-and-culture-guide': lazy(() => import('./LocalFestivalsGuide')),
  'mukteshwar-ultimate-packing-list': lazy(() => import('./PackingListGuide')),
  'workcation-guide': lazy(() => import('./WorkcationGuide')),
  'romantic-getaway-guide': lazy(() => import('./RomanticGetawayGuide')),
  'solo-travel-guide': lazy(() => import('./SoloTravelGuide')),
  'family-vacation-guide': lazy(() => import('./FamilyVacationGuide')),
  'how-to-reach-mukteshwar-guide': lazy(() => import('./HowToReachGuide')),
  'best-cafes-and-restaurants-in-mukteshwar': lazy(() => import('./CafesAndRestaurantsGuide')),
  'mukteshwar-snowfall-guide': lazy(() => import('./SnowfallGuide')),
  'mukteshwar-weekend-itinerary': lazy(() => import('./WeekendItinerary')),
  'mukteshwar-trekking-guide': lazy(() => import('./TrekkingGuide')),
  'fruit-orchards-of-mukteshwar-guide': lazy(() => import('./FruitOrchardsGuide')),
  'stargazing-in-mukteshwar': lazy(() => import('./StargazingGuide')),
  'birdwatching-in-mukteshwar-guide': lazy(() => import('./BirdwatchingGuide')),
  'kumaoni-food-guide': lazy(() => import('./KumaoniFoodGuide')),
  'things-to-do-in-mukteshwar': lazy(() => import('./ThingsToDoInMukteshwar')),
  'mukteshwar-mahadev-temple-guide': lazy(() => import('./MukteshwarTempleGuide')),
  'mukteshwar-weather-guide': lazy(() => import('./MukteshwarWeatherGuide')),
};

// Type for blog component keys
export type BlogSlug = keyof typeof blogComponents;

/**
 * Get a blog component by slug
 * @param slug - The blog post slug
 * @returns The lazy-loaded blog component or null if not found
 */
export function getBlogComponent(slug: string) {
  return blogComponents[slug as BlogSlug] || null;
}

/**
 * Check if a blog post exists
 * @param slug - The blog post slug
 * @returns True if the blog post exists
 */
export function blogExists(slug: string): slug is BlogSlug {
  return slug in blogComponents;
}
