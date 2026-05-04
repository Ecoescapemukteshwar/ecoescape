import { type ReactNode, useEffect, useRef, useState } from "react";

interface DeferredMountProps {
  children: ReactNode;
  // Min height kept while the real component isn't mounted, so the
  // browser's layout engine doesn't have to recompute when the section
  // swaps in. Tune per-section to roughly match real height.
  minHeight?: string;
  // Distance from viewport to start mounting. "200% 0px" mounts when
  // user is roughly two viewports away — far enough that the chunk has
  // time to download before the user reaches the section.
  rootMargin?: string;
  // Hard fallback in case IntersectionObserver isn't supported (old
  // browsers, headless crawlers without IO). Mounts after this many ms.
  fallbackTimeoutMs?: number;
  // Anchor id for in-page deep links (e.g. `#booking`). Applied to the
  // wrapper so hash scrolling still hits the right scroll position even
  // before the heavy component mounts.
  id?: string;
}

// Mounts `children` only after the wrapper is near the viewport. Used
// to keep below-fold sections out of the main JS execution path on
// initial page load — improves TBT and LCP without losing the content.
export function DeferredMount({
  children,
  minHeight = "200px",
  rootMargin = "200% 0px",
  fallbackTimeoutMs = 4000,
  id,
}: DeferredMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (shouldMount) return;
    const el = ref.current;
    if (!el) return;

    // No IO support — mount after a short timeout so the section still
    // becomes interactive for old browsers + crawlers.
    if (typeof IntersectionObserver === "undefined") {
      const t = setTimeout(() => setShouldMount(true), fallbackTimeoutMs);
      return () => clearTimeout(t);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldMount(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin },
    );
    io.observe(el);

    // Belt-and-suspenders: if a deep-link or hash navigation happens to
    // a section that hasn't intersected yet (e.g. /#booking on cold
    // load), mount it anyway after the fallback so the anchor scroll
    // resolves to real content.
    const t = setTimeout(() => setShouldMount(true), fallbackTimeoutMs);

    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [shouldMount, rootMargin, fallbackTimeoutMs]);

  return (
    <div ref={ref} id={id} style={shouldMount ? undefined : { minHeight }}>
      {shouldMount ? children : null}
    </div>
  );
}
