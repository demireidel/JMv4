"use client";

import Image from "next/image";
import type {
  SiliconValleyData,
  StargateData,
  NuclearData,
  VacaMuertaData,
  ClosingData,
  FuturoStat,
  FuturoPhotoCard,
} from "@/data/futuro";
import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { Pullquote } from "@/components/ui/Pullquote";
import { Divider } from "@/components/ui/Divider";

const sidebarItems = [
  { id: "silicon-valley", num: "I", title: "Silicon Valley" },
  { id: "stargate", num: "II", title: "Stargate Argentina" },
  { id: "nuclear", num: "III", title: "Energía Nuclear" },
  { id: "vaca-muerta", num: "IV", title: "Vaca Muerta" },
];

function StatRow({ stats }: { stats: FuturoStat[] }) {
  return (
    <div className="mb-8 flex flex-wrap gap-6">
      {stats.map((s) => (
        <div key={s.label}>
          <span className="stat-number">{s.val}</span>
          <span className="stat-label mt-1 block">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function FeaturePhoto({ photo }: { photo: FuturoPhotoCard }) {
  return (
    <figure className="m-0 mb-8">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={832}
        height={468}
        className="aspect-video w-full rounded-xl object-cover"
        style={{ objectPosition: photo.objectPosition }}
        loading="lazy"
      />
      <figcaption className="mt-3 text-[length:var(--text-xs)] text-text-tertiary">
        <strong className="text-text-secondary">{photo.captionStrong}</strong>
        {" — "}
        {photo.captionSpan}
      </figcaption>
    </figure>
  );
}

function Kicker({ text }: { text: string }) {
  return (
    <p className="mb-6 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.15em] text-celeste">
      {text}
    </p>
  );
}

function ParagraphBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p key={i} className="prose-body m-0">{p}</p>
      ))}
    </div>
  );
}

interface FuturoContentProps {
  siliconValley: SiliconValleyData;
  stargate: StargateData;
  nuclear: NuclearData;
  vacaMuerta: VacaMuertaData;
  closing: ClosingData;
}

export function FuturoContent({
  siliconValley,
  stargate,
  nuclear,
  vacaMuerta,
  closing,
}: FuturoContentProps) {
  return (
    <SidebarLayout label="Proyectos" items={sidebarItems} variant="navy">
      {/* I — Silicon Valley */}
      <article id="silicon-valley" className="mb-16">
        <ChapterHeader
          numeral="I"
          title={`${siliconValley.titleLine1} ${siliconValley.titleLine2Em}`}
        />
        <Kicker text={siliconValley.kicker} />
        <FeaturePhoto photo={siliconValley.photo} />
        <StatRow stats={siliconValley.stats} />
        <ParagraphBlock paragraphs={siliconValley.paragraphs} />
      </article>

      <Divider className="mb-12" />

      {/* II — Stargate */}
      <article id="stargate" className="mb-16">
        <ChapterHeader
          numeral="II"
          title={`${stargate.titleLine1} ${stargate.titleLine2}`}
        />
        <Kicker text={stargate.kicker} />
        <FeaturePhoto photo={stargate.photo} />
        <StatRow stats={stargate.stats} />
        <div className="mb-8">
          <ParagraphBlock paragraphs={stargate.paragraphs} />
        </div>
        <Pullquote cite={`— ${stargate.quote.cite}`}>
          {stargate.quote.text}
        </Pullquote>
      </article>

      <Divider className="mb-12" />

      {/* III — Nuclear */}
      <article id="nuclear" className="mb-16">
        <ChapterHeader
          numeral="III"
          title={`${nuclear.titleLine1} ${nuclear.titleLine2}`}
        />
        <Kicker text={nuclear.kicker} />
        <FeaturePhoto photo={nuclear.photo} />
        <StatRow stats={nuclear.stats} />
        <div className="mb-8 space-y-6">
          {nuclear.phases.map((phase, i) => (
            <Card key={i} className="p-5">
              <h4 className="badge-text m-0 mb-2 !text-gold">{phase.label}</h4>
              <p className="prose-body m-0">{phase.text}</p>
            </Card>
          ))}
        </div>
        <Pullquote cite={`— ${nuclear.quote.cite}`}>
          {nuclear.quote.text}
        </Pullquote>
        <p className="prose-body m-0">{nuclear.closingParagraph}</p>
      </article>

      <Divider className="mb-12" />

      {/* IV — Vaca Muerta */}
      <article id="vaca-muerta" className="mb-16">
        <ChapterHeader
          numeral="IV"
          title={`${vacaMuerta.titleLine1} ${vacaMuerta.titleLine2Em}`}
        />
        <Kicker text={vacaMuerta.kicker} />
        <FeaturePhoto photo={vacaMuerta.photo} />
        <StatRow stats={vacaMuerta.stats} />
        <ParagraphBlock paragraphs={vacaMuerta.paragraphs} />
      </article>

      {/* Closing */}
      <div className="border-t border-border py-12 text-center">
        <blockquote className="m-0 mx-auto max-w-[44rem] font-display text-[length:var(--text-xl)] italic text-text-primary">
          {closing.text}
        </blockquote>
        <p className="badge-text mt-4">— {closing.attr}</p>
      </div>
    </SidebarLayout>
  );
}
