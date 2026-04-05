import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Maps a hash section ID to the list of section keys that must be loaded
 * for it to exist in the DOM (all sections before and including the target).
 * Matches the order in Index.tsx: rooms, testimonials, dining, garden, gallery, thingsToDo, amenities, policies, booking, footer
 */
const hashToSectionKeys: Record<string, string[]> = {
  "rooms": ["rooms"],
  "reviews": ["rooms", "testimonials"],
  "dining": ["rooms", "testimonials", "dining"],
  "garden": ["rooms", "testimonials", "dining", "garden"],
  "gallery": ["rooms", "testimonials", "dining", "garden", "gallery"],
  "things-to-do": ["rooms", "testimonials", "dining", "garden", "gallery", "thingsToDo"],
  "location": ["rooms", "testimonials", "dining", "garden", "gallery", "thingsToDo"],
  "amenities": ["rooms", "testimonials", "dining", "garden", "gallery", "thingsToDo", "amenities"],
  "booking": ["rooms", "testimonials", "dining", "garden", "gallery", "thingsToDo", "amenities", "policies", "booking"],
  "contact": ["rooms", "testimonials", "dining", "garden", "gallery", "thingsToDo", "amenities", "policies", "booking", "footer"],
};

/**
 * Hook to handle scrolling to a section when a hash is present in the URL.
 *
 * @param onRequestSections - Callback to force-load lazy sections.
 *   Receives an array of section keys that need to be loaded for the target to exist.
 *   Called from Index.tsx to eagerly render sections that would otherwise be lazy-loaded.
 */
export function useHashScroll(onRequestSections?: (sectionKeys: string[]) => void) {
  const { hash, pathname } = useLocation();
  const onRequestSectionsRef = useRef(onRequestSections);

  // Keep the ref in sync with the latest callback
  useEffect(() => {
    onRequestSectionsRef.current = onRequestSections;
  }, [onRequestSections]);

  useEffect(() => {
    if (!hash || typeof document === "undefined") return;

    const id = hash.replace("#", "");

    // Request all sections up to and including the target to be loaded
    const sectionKeys = hashToSectionKeys[id];
    if (sectionKeys && onRequestSectionsRef.current) {
      onRequestSectionsRef.current(sectionKeys);
    }

    // Poll for the element to appear (sections are lazy-loaded)
    let pollInterval: ReturnType<typeof setInterval> | null = null;

    const timer = setTimeout(() => {
      let attempts = 0;
      const maxAttempts = 25; // 5 seconds max wait

      pollInterval = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          clearInterval(pollInterval!);
          element.scrollIntoView({ behavior: "smooth" });
        } else if (++attempts >= maxAttempts) {
          clearInterval(pollInterval!);
        }
      }, 200);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (pollInterval) clearInterval(pollInterval);
    };
  }, [hash, pathname]);
}
