import type { Discurso } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";

export function DiscursosSection({ discursos }: { discursos: Discurso[] }) {
  return (
    <article id="discursos" className="mb-16">
      <ChapterHeader numeral="II" title="Discursos" />
      <div className="space-y-4">
        {discursos.map((d, i) => (
          <Card key={i} accent={d.keynote} className="p-5">
            <div className="mb-2 flex items-center gap-3">
              <span className="font-accent text-[length:var(--text-xs)] tracking-[0.05em] text-gold">
                {d.date}
              </span>
              {d.keynote && (
                <span className="rounded-full bg-[oklch(0.80_0.17_85/0.15)] px-2 py-0.5 text-[length:var(--text-xs)] text-gold">
                  Keynote
                </span>
              )}
            </div>
            <h4 className="m-0 mb-1 font-display text-[length:var(--text-base)] text-text-primary">
              {d.title}
            </h4>
            <p className="m-0 mb-2 text-[length:var(--text-xs)] text-text-tertiary">
              {d.location}
            </p>
            <p className="m-0 text-[length:var(--text-xs)] leading-[1.6] text-text-secondary">
              {d.desc}
            </p>
            {d.frase && (
              <p className="pullquote m-0 mt-3 text-[length:var(--text-sm)]">
                &laquo;{d.frase}&raquo;
              </p>
            )}
          </Card>
        ))}
      </div>
    </article>
  );
}
