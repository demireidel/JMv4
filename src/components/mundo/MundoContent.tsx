"use client";

import Image from "next/image";
import type { Leader, TimelineEvent, MegaStat, TradeAgreement, ForumAppearance } from "@/data/mundo";
import { financialSupport, cooperationGrid, cooperacionHeader, forumAppearances, forosHeader } from "@/data/mundo";
import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";

const sections = [
  { id: "estadisticas", num: "I", title: "Estadísticas clave" },
  { id: "foros", num: "II", title: "Foros internacionales" },
  { id: "aliados", num: "III", title: "Aliados estratégicos" },
  { id: "cronologia", num: "IV", title: "Cronología diplomática" },
  { id: "acuerdos", num: "V", title: "Acuerdos comerciales" },
  { id: "cooperacion", num: "VI", title: "Cooperación" },
];

function factColor(color: "gold" | "blue" | "green") {
  if (color === "gold") return "text-gold";
  if (color === "blue") return "text-celeste";
  return "text-success";
}

function AgreementCard({ ta }: { ta: Pick<TradeAgreement, "tag" | "title" | "description" | "keyFacts"> }) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <span className="badge-text mb-2 block">{ta.tag}</span>
        <h3 className="chapter-title m-0 mb-3">{ta.title}</h3>
        <p className="prose-body m-0 mb-4">{ta.description}</p>
        <div className="flex flex-wrap gap-2">
          {ta.keyFacts.map((f, i) => (
            <span
              key={i}
              className={`rounded-full border border-border bg-surface-2 px-3 py-1 text-[length:var(--text-xs)] ${factColor(f.color)}`}
            >
              {f.text}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

function ForumCard({ forum }: { forum: ForumAppearance }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={forum.image}
          alt={forum.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        {forum.highlight && (
          <span className="absolute top-3 right-3 rounded-full bg-[oklch(0.80_0.17_85/0.9)] px-2.5 py-0.5 text-[length:var(--text-xs)] font-bold text-white">
            DESTACADO
          </span>
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.10 0.01 270 / 0.8) 0%, transparent 50%)",
          }}
        />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="font-accent text-[length:var(--text-xs)] uppercase tracking-[0.1em] text-[oklch(0.80_0.17_85)]">
            {forum.date}
          </span>
          <span className="ml-2 text-[length:var(--text-xs)] text-white/50">
            {forum.location}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h4 className="m-0 mb-2 font-display text-[length:var(--text-sm)] text-text-primary">
          {forum.title}
        </h4>
        <p className="m-0 text-[length:var(--text-xs)] leading-[1.6] text-text-secondary">
          {forum.desc}
        </p>
      </div>
    </Card>
  );
}

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
  return (
    <SidebarLayout label="Secciones" items={sections} variant="navy">
      {/* I — Stats */}
      <article id="estadisticas" className="mb-16">
        <ChapterHeader numeral="I" title="Estadísticas clave" />
        <div className="grid grid-cols-2 gap-4">
          {megaStats.map((stat) => (
            <Card key={stat.label} className="p-5">
              <p className="stat-number m-0">{stat.value}</p>
              <p className="m-0 mt-2 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.05em] text-text-primary">
                {stat.label}
              </p>
              <p className="m-0 mt-1 text-[length:var(--text-xs)] text-text-tertiary">
                {stat.detail}
              </p>
            </Card>
          ))}
        </div>
      </article>

      <Divider className="mb-12" />

      {/* II — Forums */}
      <article id="foros" className="mb-16">
        <ChapterHeader
          numeral="II"
          title="Foros internacionales"
          subtitle={forosHeader.sectionIntro}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {forumAppearances.map((forum) => (
            <ForumCard key={forum.title} forum={forum} />
          ))}
        </div>
      </article>

      <Divider className="mb-12" />

      {/* III — Leaders */}
      <article id="aliados" className="mb-16">
        <ChapterHeader numeral="III" title="Aliados y socios estratégicos" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {leaders.map((l) => (
            <Card key={l.name} className="flex items-center gap-3 px-4 py-3">
              <span className="text-2xl">{l.flag}</span>
              <div>
                <p className="m-0 text-[length:var(--text-sm)] font-semibold text-text-primary">
                  {l.name}
                </p>
                <p className="m-0 text-[length:var(--text-xs)] text-text-tertiary">
                  {l.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </article>

      <Divider className="mb-12" />

      {/* IV — Timeline */}
      <article id="cronologia" className="mb-16">
        <ChapterHeader numeral="IV" title="Cronología diplomática" />
        <div className="space-y-4">
          {timeline.map((event, i) => (
            <Card key={i} className="flex gap-4 p-4">
              <div className="shrink-0 min-w-[5rem] pt-0.5 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.05em] text-gold">
                {event.date}
              </div>
              <div>
                <h4 className="m-0 mb-1 font-display text-[length:var(--text-sm)] text-text-primary">
                  {event.title}
                </h4>
                <p className="m-0 text-[length:var(--text-xs)] leading-[1.6] text-text-secondary">
                  {event.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </article>

      <Divider className="mb-12" />

      {/* V — Trade Agreements */}
      <article id="acuerdos" className="mb-16">
        <ChapterHeader numeral="V" title="Acuerdos comerciales" />
        <div className="space-y-6">
          {tradeAgreements.map((ta) => (
            <AgreementCard key={ta.title} ta={ta} />
          ))}
          <AgreementCard ta={financialSupport} />
        </div>
      </article>

      <Divider className="mb-12" />

      {/* VI — Cooperation */}
      <article id="cooperacion">
        <ChapterHeader
          numeral="VI"
          title="Cooperación y financiamiento"
          subtitle={cooperacionHeader.sectionIntro}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {cooperationGrid.map((item) => (
            <Card key={item.title} className="p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <h4 className="m-0 font-accent text-[length:var(--text-sm)] uppercase tracking-[0.05em] text-text-primary">
                  {item.title}
                </h4>
              </div>
              <p className="m-0 text-[length:var(--text-xs)] leading-[1.6] text-text-secondary">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </article>
    </SidebarLayout>
  );
}
