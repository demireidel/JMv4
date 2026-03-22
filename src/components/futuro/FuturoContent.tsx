"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";

const sidebarItems = [
  { id: "silicon-valley", num: "I", title: "Silicon Valley" },
  { id: "stargate", num: "II", title: "Stargate Argentina" },
  { id: "nuclear", num: "III", title: "Energía Nuclear" },
  { id: "vaca-muerta", num: "IV", title: "Vaca Muerta" },
];

export function FuturoSidebar({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState(sidebarItems[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sidebarItems.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(s.id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section style={{ background: "var(--navy)", paddingBlock: "var(--section-py)" }}>
      <Container wide>
        <div className="flex gap-12">
          {/* Sticky sidebar */}
          <nav
            className="hidden lg:block shrink-0 sticky self-start"
            style={{ top: "6rem", width: "14rem" }}
            aria-label="Proyectos"
          >
            <p className="mb-4" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Proyectos
            </p>
            <ul className="list-none m-0 p-0 space-y-1">
              {sidebarItems.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block px-3 py-2 rounded-md no-underline transition-colors"
                    style={{
                      fontSize: "var(--text-xs)",
                      color: activeSection === s.id ? "var(--gold)" : "var(--text-3)",
                      background: activeSection === s.id ? "var(--surface-1)" : "transparent",
                      transitionDuration: "var(--duration-fast)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-accent)" }}>{s.num}</span> {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main content */}
          <div className="flex-1 min-w-0" style={{ maxWidth: "52rem" }}>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
