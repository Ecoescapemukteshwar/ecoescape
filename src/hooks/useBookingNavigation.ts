import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

/**
 * Custom hook for consistent booking navigation across the app
 * Maintains SPA behavior while navigating to booking section
 *
 * @example
 * const { navigateToBooking } = useBookingNavigation();
 * <Button onClick={navigateToBooking}>Book Now</Button>
 *
 * @remarks
 * This hook maintains SPA behavior by using React Router's navigate
 * instead of window.location.href, which causes full page reloads.
 */
export function useBookingNavigation() {
  const navigate = useNavigate();

  const navigateToBooking = useCallback(() => {
    // Navigate to home with booking hash
    navigate("/#booking", { replace: true });

    // Smooth scroll after a small delay to allow navigation
    setTimeout(() => {
      const element = document.getElementById("booking");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [navigate]);

  return { navigateToBooking };
}
