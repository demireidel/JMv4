"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface SectionPreview {
  title: string;
  desc: string;
  href: string;
  stat?: string;
  statLabel?: string;
}

const sections: SectionPreview[] = [
  {
    title: "Visión",
    desc: "La filosofía y los principios que guían cada decisión de gobierno",
    href: "/vision",
    stat: "5",
    statLabel: "capítulos",
  },
  {
    title: "Logros",
    desc: "Resultados concretos con datos antes y después — la evidencia habla",
    href: "/logros",
    stat: "8",
    statLabel: "logros clave",
  },
  {
    title: "Reformas",
    desc: "Las transformaciones estructurales que cambiaron las reglas del juego",
    href: "/reformas",
    stat: "12",
    statLabel: "reformas",
  },
  {
    title: "Futuro",
    desc: "Los proyectos estratégicos que posicionan a la Argentina como potencia",
    href: "/futuro",
    stat: "4",
    statLabel: "proyectos",
  },
  {
    title: "Mundo",
    desc: "Acuerdos comerciales, alianzas y el regreso de Argentina al escenario global",
    href: "/mundo",
    stat: "3",
    statLabel: "TLCs firmados",
  },
  {
    title: "Archivo",
    desc: "Libros, artículos académicos, discursos y entrevistas — el pensamiento completo",
    href: "/archivo",
    stat: "80+",
    statLabel: "obras",
  },
];

export function SectionPreviews() {
  return (
    <section
      style={{ paddingBlock: "var(--section-py)", background: "var(--dark)" }}
    >
      <Container>
        <p
          className="text-center mb-3 uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "var(--text-sm)",
            color: "var(--gold)",
            letterSpacing: "0.2em",
          }}
        >
          Explorar
        </p>
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            color: "var(--text-1)",
          }}
        >
          La transformación, sección por sección
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((s, i) => (
            <ScrollReveal key={s.href} delay={i * 80}>
            <Link
              href={s.href}
              className="group block rounded-xl p-6 no-underline card-hover"
              style={{
                background: "var(--surface-1)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--gold)",
              }}
            >
              {/* Stat chip */}
              {s.stat && (
                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "var(--text-xl)",
                      color: "var(--gold)",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {s.stat}
                  </span>
                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--text-3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {s.statLabel}
                  </span>
                </div>
              )}

              <h3
                className="m-0 mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-xl)",
                  color: "var(--text-1)",
                }}
              >
                {s.title}
              </h3>
              <p
                className="m-0"
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-2)",
                  lineHeight: 1.5,
                }}
              >
                {s.desc}
              </p>

              {/* Arrow indicator */}
              <div
                className="mt-4 flex items-center gap-1 transition-transform"
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontFamily: "var(--font-accent)",
                }}
              >
                Explorar
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform"
                  style={{ transitionDuration: "var(--duration-fast)" }}
                >
                  <path
                    d="M6 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
