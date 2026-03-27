import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const optionsRef = useRef(options);

  // Keep the ref in sync with the latest options
  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, optionsRef.current || { threshold: 0.1, rootMargin: "50px" });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []); // Empty deps - only run once on mount

  return { ref, isInView };
}
