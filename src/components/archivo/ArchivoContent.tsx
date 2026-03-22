"use client";

import Image from "next/image";
import type {
  Etapa,
  Paper,
  Discurso,
  Entrevista,
  Influencia,
} from "@/data/archivo";
import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";
import { LibrosSection } from "./LibrosSection";
import { DiscursosSection } from "./DiscursosSection";
import { EntrevistasSection } from "./EntrevistasSection";
import { PapersSection } from "./PapersSection";

const sections = [
  { id: "libros", num: "I", title: "Libros" },
  { id: "discursos", num: "II", title: "Discursos" },
  { id: "entrevistas", num: "III", title: "Entrevistas" },
  { id: "papers", num: "IV", title: "Papers" },
  { id: "influencias", num: "V", title: "Influencias" },
  { id: "reconocimientos", num: "VI", title: "Reconocimientos" },
];

export function ArchivoContent({
  etapas,
  papers,
  discursos,
  entrevistas,
  influencias,
  reconocimientos,
}: {
  etapas: Etapa[];
  papers: Paper[];
  discursos: Discurso[];
  entrevistas: Entrevista[];
  influencias: Influencia[];
  reconocimientos: string[];
}) {
  return (
    <SidebarLayout label="Secciones del archivo" items={sections} variant="navy">
      <LibrosSection etapas={etapas} />
      <Divider className="mb-12" />

      <DiscursosSection discursos={discursos} />
      <Divider className="mb-12" />

      <EntrevistasSection entrevistas={entrevistas} />
      <Divider className="mb-12" />

      <PapersSection papers={papers} />
      <Divider className="mb-12" />

      {/* V — Influencias */}
      <article id="influencias" className="mb-16">
        <ChapterHeader numeral="V" title="Influencias intelectuales" />
        <div className="grid gap-4 md:grid-cols-2">
          {influencias.map((inf) => (
            <Card key={inf.school} className="p-5">
              <h4 className="badge-text m-0 mb-2 !text-gold">{inf.school}</h4>
              <p className="m-0 text-[length:var(--text-sm)] font-semibold text-text-primary">
                {inf.names}
              </p>
              {inf.keyWork && (
                <p className="m-0 mt-1 text-[length:var(--text-xs)] leading-[1.6] text-text-secondary">
                  {inf.keyWork}
                </p>
              )}
            </Card>
          ))}
        </div>
      </article>

      <Divider className="mb-12" />

      {/* VI — Reconocimientos */}
      <article id="reconocimientos">
        <ChapterHeader numeral="VI" title="Reconocimientos" />
        <ul className="m-0 list-none space-y-2 p-0">
          {reconocimientos.map((r, i) => (
            <li
              key={i}
              className="flex items-start gap-3 border-b border-border py-2"
            >
              <span className="mt-0.5 text-gold">&#9670;</span>
              <span className="text-[length:var(--text-sm)] text-text-secondary">
                {r}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </SidebarLayout>
  );
}
