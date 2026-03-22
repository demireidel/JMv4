import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import {
  futuroHeader,
  siliconValley,
  stargate,
  nuclear,
  vacaMuerta,
  futuroClosing,
} from "@/data/futuro";
import { FuturoSidebar } from "@/components/futuro/FuturoContent";

export const metadata: Metadata = {
  title: "Futuro",
  description:
    "Proyectos estratégicos: Silicon Valley, Stargate AI, energía nuclear y Vaca Muerta.",
};

interface FuturoStat {
  val: string;
  label: string;
}

function StatRow({ stats }: { stats: FuturoStat[] }) {
  return (
    <div className="flex flex-wrap gap-6 mb-8">
      {stats.map((s) => (
        <div key={s.label}>
          <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)", fontWeight: 700, lineHeight: 1 }}>{s.val}</span>
          <span className="block mt-1" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function FeaturePhoto({ photo }: { photo: { src: string; alt: string; objectPosition: string; captionStrong: string; captionSpan: string; aspectRatio: string } }) {
  return (
    <figure className="m-0 mb-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={photo.alt} className="w-full rounded-xl object-cover" style={{ aspectRatio: photo.aspectRatio, objectPosition: photo.objectPosition }} loading="lazy" />
      <figcaption className="mt-3" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}>
        <strong style={{ color: "var(--text-2)" }}>{photo.captionStrong}</strong>{" — "}{photo.captionSpan}
      </figcaption>
    </figure>
  );
}

export default function FuturoPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-12" style={{ background: "var(--dark)" }}>
        <Container>
          <p className="uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-sm)", color: "var(--gold)", letterSpacing: "0.2em" }}>
            {futuroHeader.sectionTitle}
          </p>
          <h1 className="mb-6" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-3xl)", color: "var(--text-1)", textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.1 }}>
            El Futuro de Argentina
          </h1>
          <blockquote className="m-0 mb-6" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--text-lg)", color: "var(--text-2)", maxWidth: "44rem", borderLeft: "3px solid var(--gold)", paddingLeft: "1.25rem" }}>
            {futuroHeader.introQuote}
          </blockquote>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-2)", maxWidth: "44rem" }}>
            {futuroHeader.introText}
          </p>
        </Container>
      </section>

      <FuturoSidebar>
        {/* I — Silicon Valley */}
        <article id="silicon-valley" className="mb-16">
          <div className="flex items-baseline gap-4 mb-2">
            <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>I</span>
            <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>
              {siliconValley.titleLine1} {siliconValley.titleLine2Em}
            </h2>
          </div>
          <p className="mb-6" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--celeste)", textTransform: "uppercase", letterSpacing: "0.15em" }}>{siliconValley.kicker}</p>
          <FeaturePhoto photo={siliconValley.photo} />
          <StatRow stats={siliconValley.stats} />
          <div className="space-y-4">
            {siliconValley.paragraphs.map((p, i) => (
              <p key={i} className="m-0" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.7 }}>{p}</p>
            ))}
          </div>
        </article>

        <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

        {/* II — Stargate */}
        <article id="stargate" className="mb-16">
          <div className="flex items-baseline gap-4 mb-2">
            <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>II</span>
            <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>
              {stargate.titleLine1} {stargate.titleLine2}
            </h2>
          </div>
          <p className="mb-6" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--celeste)", textTransform: "uppercase", letterSpacing: "0.15em" }}>{stargate.kicker}</p>
          <FeaturePhoto photo={stargate.photo} />
          <StatRow stats={stargate.stats} />
          <div className="space-y-4 mb-8">
            {stargate.paragraphs.map((p, i) => (
              <p key={i} className="m-0" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.7 }}>{p}</p>
            ))}
          </div>
          <blockquote className="m-0" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--text-lg)", color: "var(--text-2)", borderLeft: "3px solid var(--gold)", paddingLeft: "1.25rem", maxWidth: "44rem" }}>
            {stargate.quote.text}
            <footer className="mt-2 not-italic" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)", fontFamily: "var(--font-accent)" }}>— {stargate.quote.cite}</footer>
          </blockquote>
        </article>

        <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

        {/* III — Nuclear */}
        <article id="nuclear" className="mb-16">
          <div className="flex items-baseline gap-4 mb-2">
            <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>III</span>
            <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>
              {nuclear.titleLine1} {nuclear.titleLine2}
            </h2>
          </div>
          <p className="mb-6" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--celeste)", textTransform: "uppercase", letterSpacing: "0.15em" }}>{nuclear.kicker}</p>
          <FeaturePhoto photo={nuclear.photo} />
          <StatRow stats={nuclear.stats} />
          <div className="space-y-6 mb-8">
            {nuclear.phases.map((phase, i) => (
              <div key={i} className="rounded-lg p-5" style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}>
                <h4 className="m-0 mb-2" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-sm)", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{phase.label}</h4>
                <p className="m-0" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.7 }}>{phase.text}</p>
              </div>
            ))}
          </div>
          <blockquote className="m-0 mb-8" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--text-lg)", color: "var(--text-2)", borderLeft: "3px solid var(--gold)", paddingLeft: "1.25rem", maxWidth: "44rem" }}>
            {nuclear.quote.text}
            <footer className="mt-2 not-italic" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)", fontFamily: "var(--font-accent)" }}>— {nuclear.quote.cite}</footer>
          </blockquote>
          <p className="m-0" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.7 }}>{nuclear.closingParagraph}</p>
        </article>

        <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

        {/* IV — Vaca Muerta */}
        <article id="vaca-muerta" className="mb-16">
          <div className="flex items-baseline gap-4 mb-2">
            <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>IV</span>
            <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>
              {vacaMuerta.titleLine1} {vacaMuerta.titleLine2Em}
            </h2>
          </div>
          <p className="mb-6" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--celeste)", textTransform: "uppercase", letterSpacing: "0.15em" }}>{vacaMuerta.kicker}</p>
          <FeaturePhoto photo={vacaMuerta.photo} />
          <StatRow stats={vacaMuerta.stats} />
          <div className="space-y-4">
            {vacaMuerta.paragraphs.map((p, i) => (
              <p key={i} className="m-0" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.7 }}>{p}</p>
            ))}
          </div>
        </article>

        {/* Closing */}
        <div className="text-center py-12" style={{ borderTop: "1px solid var(--border)" }}>
          <blockquote className="m-0 mx-auto" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--text-xl)", color: "var(--text-1)", maxWidth: "44rem" }}>
            {futuroClosing.text}
          </blockquote>
          <p className="mt-4" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-sm)", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            — {futuroClosing.attr}
          </p>
        </div>
      </FuturoSidebar>
    </>
  );
}
