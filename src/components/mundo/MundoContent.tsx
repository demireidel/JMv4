"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import type { Leader, TimelineEvent, MegaStat, TradeAgreement, CooperationItem } from "@/data/mundo";
import { financialSupport, cooperationGrid, cooperacionHeader } from "@/data/mundo";

const sections = [
  { id: "estadisticas", num: "I", title: "Estadísticas clave" },
  { id: "aliados", num: "II", title: "Aliados estratégicos" },
  { id: "cronologia", num: "III", title: "Cronología diplomática" },
  { id: "acuerdos", num: "IV", title: "Acuerdos comerciales" },
  { id: "cooperacion", num: "V", title: "Cooperación" },
];

export function MundoContent({
  leaders,
  timeline,
  megaStats,
  tradeAgreements,
}: {
  leaders: Leader[];
  timeline: TimelineEvent[];
  megaStats: MegaStat[];
  tradeAgreements: TradeAgreement[];
}) {
  const [activeSection, setActiveSection] = useState("estadisticas");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
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
            aria-label="Secciones"
          >
            <p className="mb-4" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Secciones
            </p>
            <ul className="list-none m-0 p-0 space-y-1">
              {sections.map((s) => (
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

            {/* I — Stats */}
            <article id="estadisticas" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>I</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>Estadísticas clave</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {megaStats.map((stat) => (
                  <div key={stat.label} className="p-5 rounded-xl" style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}>
                    <p className="m-0" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)", fontWeight: 700, lineHeight: 1 }}>{stat.value}</p>
                    <p className="m-0 mt-2" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--text-1)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</p>
                    <p className="m-0 mt-1" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}>{stat.detail}</p>
                  </div>
                ))}
              </div>
            </article>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

            {/* II — Leaders */}
            <article id="aliados" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>II</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>Aliados y socios estratégicos</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {leaders.map((l) => (
                  <div key={l.name} className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}>
                    <span style={{ fontSize: "1.5rem" }}>{l.flag}</span>
                    <div>
                      <p className="m-0" style={{ fontSize: "var(--text-sm)", color: "var(--text-1)", fontWeight: 600 }}>{l.name}</p>
                      <p className="m-0" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}>{l.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

            {/* III — Timeline */}
            <article id="cronologia" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>III</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>Cronología diplomática</h2>
              </div>
              <div className="space-y-4">
                {timeline.map((event, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg" style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}>
                    <div className="shrink-0" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.05em", minWidth: "5rem", paddingTop: "2px" }}>
                      {event.date}
                    </div>
                    <div>
                      <h4 className="m-0 mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-sm)", color: "var(--text-1)" }}>{event.title}</h4>
                      <p className="m-0" style={{ fontSize: "var(--text-xs)", color: "var(--text-2)", lineHeight: 1.6 }}>{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

            {/* IV — Trade Agreements */}
            <article id="acuerdos" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>IV</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>Acuerdos comerciales</h2>
              </div>
              <div className="space-y-6">
                {tradeAgreements.map((ta) => (
                  <div key={ta.title} className="rounded-xl overflow-hidden" style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}>
                    <div className="p-6">
                      <span className="block mb-2" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{ta.tag}</span>
                      <h3 className="m-0 mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", color: "var(--text-1)" }}>{ta.title}</h3>
                      <p className="m-0 mb-4" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.7 }}>{ta.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {ta.keyFacts.map((f, i) => (
                          <span key={i} className="px-3 py-1 rounded-full" style={{ fontSize: "var(--text-xs)", background: "var(--surface-2)", color: f.color === "gold" ? "var(--gold)" : f.color === "blue" ? "var(--celeste)" : "var(--success)", border: "1px solid var(--border)" }}>
                            {f.text}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Financial support */}
                <div className="rounded-xl overflow-hidden" style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}>
                  <div className="p-6">
                    <span className="block mb-2" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{financialSupport.tag}</span>
                    <h3 className="m-0 mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", color: "var(--text-1)" }}>{financialSupport.title}</h3>
                    <p className="m-0 mb-4" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.7 }}>{financialSupport.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {financialSupport.keyFacts.map((f, i) => (
                        <span key={i} className="px-3 py-1 rounded-full" style={{ fontSize: "var(--text-xs)", background: "var(--surface-2)", color: f.color === "gold" ? "var(--gold)" : f.color === "blue" ? "var(--celeste)" : "var(--success)", border: "1px solid var(--border)" }}>
                          {f.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

            {/* V — Cooperation */}
            <article id="cooperacion">
              <div className="flex items-baseline gap-4 mb-2">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>V</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>Cooperación y financiamiento</h2>
              </div>
              <p className="mb-6" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.7 }}>{cooperacionHeader.sectionIntro}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {cooperationGrid.map((item) => (
                  <div key={item.title} className="p-5 rounded-xl" style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                      <h4 className="m-0" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-sm)", color: "var(--text-1)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.title}</h4>
                    </div>
                    <p className="m-0" style={{ fontSize: "var(--text-xs)", color: "var(--text-2)", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </article>

          </div>
        </div>
      </Container>
    </section>
  );
}
