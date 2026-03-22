"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";

interface SectionPreview {
  title: string;
  desc: string;
  href: string;
  stat?: string;
  statLabel?: string;
}

const sections: SectionPreview[] = [
  {
    title: "Vision",
    desc: "La filosofia y los principios que guian cada decision de gobierno",
    href: "/vision",
    stat: "5",
    statLabel: "capitulos",
  },
  {
    title: "Logros",
    desc: "Resultados concretos con datos antes y despues — la evidencia habla",
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
    desc: "Los proyectos estrategicos que posicionan a la Argentina como potencia",
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
    desc: "Libros, articulos academicos, discursos y entrevistas — el pensamiento completo",
    href: "/archivo",
    stat: "80+",
    statLabel: "obras",
  },
];

export function SectionPreviews() {
  return (
    <section className="bg-dark py-[var(--spacing-section)]">
      <Container>
        <ScrollReveal variant="blur-in">
          <p className="badge-text mb-3 text-center tracking-[0.2em]">
            Explorar
          </p>
          <h2 className="mb-12 text-center font-display text-[length:var(--text-2xl)] text-text-primary">
            La transformacion, seccion por seccion
          </h2>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s, i) => (
            <ScrollReveal key={s.href} variant="scale-in" delay={i * 80}>
              <Link href={s.href} className="group block no-underline">
                <Card accent hover className="p-6">
                  {/* Stat chip */}
                  {s.stat && (
                    <div className="mb-4 flex items-baseline gap-2">
                      <span className="font-accent text-[length:var(--text-xl)] font-bold leading-none text-gold">
                        {s.stat}
                      </span>
                      <span className="stat-label">{s.statLabel}</span>
                    </div>
                  )}

                  <h3 className="m-0 mb-2 font-display text-[length:var(--text-xl)] text-text-primary">
                    {s.title}
                  </h3>
                  <p className="prose-body m-0 leading-normal">
                    {s.desc}
                  </p>

                  {/* Arrow indicator */}
                  <div className="badge-text mt-4 flex items-center gap-1">
                    Explorar
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
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
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
