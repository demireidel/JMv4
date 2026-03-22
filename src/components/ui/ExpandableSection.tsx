"use client";

import { useState } from "react";

interface ExpandableSectionProps {
  label?: string;
  labelExpanded?: string;
  children: React.ReactNode;
  id?: string;
}

export function ExpandableSection({
  label = "Ver mas",
  labelExpanded = "Ver menos",
  children,
  id,
}: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const contentId = id ?? "expandable";

  return (
    <div>
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={contentId}
        className="flex w-full cursor-pointer items-center justify-between border-t border-border bg-transparent px-5 py-3 text-left font-accent text-[length:var(--text-xs)] uppercase tracking-wider text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-gold"
      >
        {expanded ? labelExpanded : label}
        <svg
          className={`h-4 w-4 transition-transform duration-[var(--duration-fast)] ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={contentId}
        className="overflow-hidden transition-[max-height] duration-[var(--duration-normal)] ease-[var(--ease-standard)]"
        style={{ maxHeight: expanded ? "80rem" : "0" }}
      >
        <div className="px-5 py-4">{children}</div>
      </div>
    </div>
  );
}
