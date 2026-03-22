import type { Entrevista } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";

export function EntrevistasSection({ entrevistas }: { entrevistas: Entrevista[] }) {
  return (
    <article id="entrevistas" className="mb-16">
      <ChapterHeader numeral="III" title="Entrevistas" />
      <div className="space-y-4">
        {entrevistas.map((e, i) => (
          <Card key={i} accent={e.highlight} className="p-5">
            <div className="mb-2 flex items-center gap-3">
              <span className="font-accent text-[length:var(--text-xs)] tracking-[0.05em] text-gold">
                {e.date}
              </span>
              {e.duration && (
                <span className="text-[length:var(--text-xs)] text-text-tertiary">
                  {e.duration}
                </span>
              )}
            </div>
            <h4 className="m-0 mb-1 font-display text-[length:var(--text-base)] text-text-primary">
              {e.outlet}
            </h4>
            {e.journalist && (
              <p className="m-0 mb-2 text-[length:var(--text-xs)] text-text-tertiary">
                Con {e.journalist}
              </p>
            )}
            <p className="m-0 text-[length:var(--text-xs)] leading-[1.6] text-text-secondary">
              {e.desc}
            </p>
            {e.impact && (
              <p className="m-0 mt-2 inline-block rounded-md bg-[oklch(0.80_0.17_85/0.1)] px-3 py-1.5 text-[length:var(--text-xs)] text-gold">
                {e.impact}
              </p>
            )}
          </Card>
        ))}
      </div>
    </article>
  );
}
