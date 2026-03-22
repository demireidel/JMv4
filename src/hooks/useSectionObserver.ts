"use client";

import { useState, useEffect } from "react";

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Returns the id of the active section.
 */
export function useSectionObserver(
  ids: string[],
  rootMargin = "-30% 0px -60% 0px"
): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids, rootMargin]);

  return active;
}
