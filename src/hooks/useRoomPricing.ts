import { useState, useEffect, useRef } from 'react';
import { getCurrentPrice, formatPrice, getBasePrice, type RoomType } from '@/services/pricing';

interface UseRoomPricingResult {
  prices: Record<RoomType, string>;
  isLoading: boolean;
  error: Error | null;
}

/**
 * Custom hook for loading multiple room prices asynchronously.
 *
 * Features:
 * - Accepts single room type or array of room types
 * - Initializes with base prices to prevent "₹NaN" display
 * - Loads dynamic prices concurrently on mount
 * - Proper cleanup on unmount to prevent memory leaks
 * - Error handling with fallback to base prices
 * - Loading state for UX feedback
 *
 * @param roomTypes - Single room type or array of room types
 * @returns Object containing prices object, loading state, and error
 *
 * @example
 * // Single room
 * const { prices, isLoading } = useRoomPricing('suite');
 * console.log(prices.suite); // "₹3,500"
 *
 * @example
 * // Multiple rooms
 * const { prices, isLoading } = useRoomPricing(['suite', 'apartment']);
 * console.log(prices.suite); // "₹3,500"
 * console.log(prices.apartment); // "₹5,500"
 */
export function useRoomPricing(roomTypes: RoomType | RoomType[]): UseRoomPricingResult {
  // Normalize to array
  const roomTypesArray = Array.isArray(roomTypes) ? roomTypes : [roomTypes];

  // Initialize with base prices to prevent NaN display
  const [prices, setPrices] = useState<Record<RoomType, string>>(() => {
    const initialPrices: Record<RoomType, string> = {} as Record<RoomType, string>;
    roomTypesArray.forEach(roomType => {
      initialPrices[roomType] = formatPrice(getBasePrice(roomType));
    });
    return initialPrices;
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const isMountedRef = useRef<boolean>(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Load all prices concurrently
        const pricePromises = roomTypesArray.map(async (roomType) => {
          const currentPrice = await getCurrentPrice(roomType);
          return { roomType, price: formatPrice(currentPrice) };
        });

        const results = await Promise.all(pricePromises);

        // Only update state if component is still mounted
        if (isMountedRef.current) {
          const newPrices: Record<RoomType, string> = {} as Record<RoomType, string>;
          results.forEach(({ roomType, price }) => {
            newPrices[roomType] = price;
          });
          setPrices(newPrices);
          setError(null);
        }
      } catch (err) {
        // Only update state if component is still mounted
        if (isMountedRef.current) {
          console.error('Failed to load room prices:', err);
          // Fallback to base prices on error
          const fallbackPrices: Record<RoomType, string> = {} as Record<RoomType, string>;
          roomTypesArray.forEach(roomType => {
            fallbackPrices[roomType] = formatPrice(getBasePrice(roomType));
          });
          setPrices(fallbackPrices);
          setError(err instanceof Error ? err : new Error('Failed to load prices'));
        }
      } finally {
        // Only update state if component is still mounted
        if (isMountedRef.current) {
          setIsLoading(false);
        }
      }
    };

    fetchPrices();

    // Cleanup function to prevent state updates after unmount
    return () => {
      isMountedRef.current = false;
    };
  }, [roomTypesArray]); // Depend on the array of room types

  return { prices, isLoading, error };
}
