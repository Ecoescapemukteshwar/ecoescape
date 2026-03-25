import { useState, useEffect, useRef } from 'react';
import { getCurrentPrice, formatPrice, getBasePrice, type RoomType } from '@/services/pricing';

interface UseRoomPriceResult {
  price: string;
  isLoading: boolean;
  error: Error | null;
}

/**
 * Custom hook for loading room prices asynchronously.
 *
 * Features:
 * - Initializes with base price to prevent "₹NaN" display
 * - Loads dynamic price on mount
 * - Proper cleanup on unmount to prevent memory leaks
 * - Error handling with fallback to base price
 * - Loading state for UX feedback
 *
 * @param roomType - The type of room to get pricing for
 * @returns Object containing price, loading state, and error
 */
export function useRoomPrice(roomType: RoomType): UseRoomPriceResult {
  const [price, setPrice] = useState<string>(() => {
    // Initialize with base price to prevent NaN display
    return formatPrice(getBasePrice(roomType));
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const isMountedRef = useRef<boolean>(true);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const currentPrice = await getCurrentPrice(roomType);

        // Only update state if component is still mounted
        if (isMountedRef.current) {
          setPrice(formatPrice(currentPrice));
          setError(null);
        }
      } catch (err) {
        // Only update state if component is still mounted
        if (isMountedRef.current) {
          console.error(`Failed to load price for room type ${roomType}:`, err);
          // Fallback to base price on error
          setPrice(formatPrice(getBasePrice(roomType)));
          setError(err instanceof Error ? err : new Error('Failed to load price'));
        }
      } finally {
        // Only update state if component is still mounted
        if (isMountedRef.current) {
          setIsLoading(false);
        }
      }
    };

    fetchPrice();

    // Cleanup function to prevent state updates after unmount
    return () => {
      isMountedRef.current = false;
    };
  }, [roomType]);

  return { price, isLoading, error };
}
