import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { leaders, timeline, megaStats, tradeAgreements } from "@/data/mundo";
import { mundoHeroImage } from "@/data/photos";

export const metadata: Metadata = {
  title: "Internacional",
  description:
    "Argentina en el mundo: acuerdos comerciales, relaciones bilaterales y posicionamiento global.",
};

export default function MundoPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-12 overflow-hidden"
        style={{ background: "var(--dark)" }}
      >
        <Container>
          <p
            className="uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-sm)",
              color: "var(--gold)",
              letterSpacing: "0.2em",
            }}
          >
            Argentina en el mundo
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-3xl)",
              color: "var(--text-1)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            De país paria a{" "}
            <span style={{ color: "var(--gold)" }}>líder global</span>
          </h1>
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--text-2)",
              maxWidth: "44rem",
              lineHeight: 1.7,
            }}
          >
            En dos años, Argentina pasó de estar aislada del mundo a firmar los
            acuerdos comerciales más ambiciosos de su historia, atraer USD 55.000M
            en inversiones y construir alianzas con las principales potencias.
          </p>
        </Container>
      </section>

      {/* Mega stats */}
      <section style={{ background: "var(--navy)", paddingBlock: "var(--section-py)" }}>
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {megaStats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-xl"
                style={{
                  background: "var(--surface-1)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="m-0"
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "var(--text-2xl)",
                    color: "var(--gold)",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="m-0 mt-2"
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "var(--text-xs)",
                    color: "var(--text-1)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </p>
                <p
                  className="m-0 mt-1"
                  style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}
                >
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leaders */}
      <section style={{ background: "var(--dark)", paddingBlock: "var(--section-py)" }}>
        <Container>
          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-xl)",
              color: "var(--text-1)",
            }}
          >
            Aliados y socios estratégicos
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {leaders.map((l) => (
              <div
                key={l.name}
                className="flex items-center gap-3 px-4 py-3 rounded-lg"
                style={{
                  background: "var(--surface-1)",
                  border: "1px solid var(--border)",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{l.flag}</span>
                <div>
                  <p
                    className="m-0"
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-1)",
                      fontWeight: 600,
                    }}
                  >
                    {l.name}
                  </p>
                  <p
                    className="m-0"
                    style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}
                  >
                    {l.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section style={{ background: "var(--navy)", paddingBlock: "var(--section-py)" }}>
        <Container>
          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-xl)",
              color: "var(--text-1)",
            }}
          >
            Cronología diplomática
          </h2>
          <div className="space-y-4" style={{ maxWidth: "52rem" }}>
            {timeline.map((event, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-lg"
                style={{
                  background: "var(--surface-1)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="shrink-0"
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "var(--text-xs)",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    minWidth: "5rem",
                    paddingTop: "2px",
                  }}
                >
                  {event.date}
                </div>
                <div>
                  <h4
                    className="m-0 mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-sm)",
                      color: "var(--text-1)",
                    }}
                  >
                    {event.title}
                  </h4>
                  <p
                    className="m-0"
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--text-2)",
                      lineHeight: 1.6,
                    }}
                  >
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trade agreements */}
      <section style={{ background: "var(--dark)", paddingBlock: "var(--section-py)" }}>
        <Container>
          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-xl)",
              color: "var(--text-1)",
            }}
          >
            Acuerdos comerciales
          </h2>
          <div className="space-y-6">
            {tradeAgreements.map((ta) => (
              <div
                key={ta.title}
                className="rounded-xl overflow-hidden"
                style={{
                  background: "var(--surface-1)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="p-6">
                  <span
                    className="block mb-2"
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "var(--text-xs)",
                      color: "var(--gold)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {ta.tag}
                  </span>
                  <h3
                    className="m-0 mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-lg)",
                      color: "var(--text-1)",
                    }}
                  >
                    {ta.title}
                  </h3>
                  <p
                    className="m-0 mb-4"
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-2)",
                      lineHeight: 1.6,
                    }}
                  >
                    {ta.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ta.keyFacts.map((f, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full"
                        style={{
                          fontSize: "var(--text-xs)",
                          background: "var(--surface-2)",
                          color:
                            f.color === "gold"
                              ? "var(--gold)"
                              : f.color === "blue"
                                ? "var(--celeste)"
                                : "var(--success)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {f.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
