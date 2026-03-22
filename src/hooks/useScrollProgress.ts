"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Returns a 0..1 progress value representing how far an element
 * has scrolled off the top of the viewport.
 *
 * 0 = element's top is at or below viewport top (fully visible from top)
 * 1 = element has completely scrolled off the top of the viewport
 *
 * Uses scroll event with RAF throttle for 60fps performance.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let rafId = 0;
    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      // 0 when element top is at viewport top, 1 when element has scrolled fully off-screen
      const raw = Math.max(0, -rect.top) / rect.height;
      setProgress(Math.max(0, Math.min(1, raw)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // initial
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [ref]);

  return progress;
}
