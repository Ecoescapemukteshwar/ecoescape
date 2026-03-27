import { useEffect, useRef } from "react";

interface UseInViewCallbackOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Calls callback when the ref element enters the viewport.
 * Re-triggers every time the element re-enters view.
 */
export function useInViewCallback(
  callback: () => void,
  options: UseInViewCallbackOptions = {}
) {
  const ref = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, rootMargin = '0px' } = options;

  // Store latest callback in a ref so the observer never needs re-creating
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callbackRef.current();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
