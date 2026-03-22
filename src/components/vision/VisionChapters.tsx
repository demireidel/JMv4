"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";

interface Photo {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
}

const chapters = [
  { id: "ch1", num: "I", title: "El proyecto de la libertad" },
  { id: "ch2", num: "II", title: "Capitalismo y moralidad" },
  { id: "ch3", num: "III", title: "El Estado es el problema" },
  { id: "ch4", num: "IV", title: "La batalla cultural" },
  { id: "ch5", num: "V", title: "La defensa de Occidente" },
];

function Pullquote({ children, cite }: { children: React.ReactNode; cite: string }) {
  return (
    <blockquote
      className="m-0 my-8"
      style={{
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "var(--text-lg)",
        color: "var(--text-2)",
        borderLeft: "3px solid var(--gold)",
        paddingLeft: "1.25rem",
      }}
    >
      <p className="m-0">{children}</p>
      <footer
        className="mt-2 not-italic"
        style={{
          fontSize: "var(--text-xs)",
          color: "var(--text-3)",
          fontFamily: "var(--font-accent)",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {cite}
      </footer>
    </blockquote>
  );
}

function ChapterPhoto({ photo }: { photo?: Photo }) {
  if (!photo) return null;
  return (
    <figure className="m-0 my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full rounded-xl object-cover"
        style={{
          aspectRatio: "21/9",
          objectPosition: photo.objectPosition || "center",
        }}
        loading="lazy"
      />
      <figcaption
        className="mt-3"
        style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}
      >
        {photo.caption}
      </figcaption>
    </figure>
  );
}

const dataStrip = [
  { num: "1°", label: "PBI per cápita mundial en 1895" },
  { num: "35", label: "Años bastaron para ser top 10 mundial" },
  { num: "100+", label: "Años de decadencia colectivista" },
  { num: "140°", label: "Puesto en libertad económica al que caímos" },
];

const pyramid = [
  { rank: "1°", title: "Ética y moral", desc: "Filosofía griega, derecho romano, rectitud de los estoicos, valores judeocristianos. Cada decisión de gobierno debe pasar primero el test moral: ¿es justa?" },
  { rank: "2°", title: "Eficiencia dinámica", desc: "Cuando el marco institucional es justo, la eficiencia es su consecuencia natural — no su rival." },
  { rank: "3°", title: "Resultado político", desc: "Cuando hay tensión entre ética y resultado político, la política debe descartarse — aún cuando sirva electoralmente." },
];

const pillars = [
  { icon: "⚙", title: "Gestión", desc: "Diseñar e implementar las reformas profundas que el país necesita. Demostrar con hechos que el liberalismo es el camino a la prosperidad." },
  { icon: "⚖", title: "Política", desc: "Construir el poder institucional necesario para impulsar las reformas y blindarlas de la reversión." },
  { icon: "★", title: "Cultura", desc: "La batalla por las almas. Ganar la disputa de las ideas para que los cambios sean permanentes." },
];

const thinkers = [
  { era: "Fundamentos", title: "Filosofía griega", desc: "Desde Sócrates, Platón y Aristóteles: la razón como instrumento de conocimiento, la búsqueda de la verdad y la virtud como fin supremo del hombre libre." },
  { era: "Instituciones", title: "Derecho romano", desc: "De la Ley de las XII Tablas al Corpus Iuris Civilis: el imperio de la ley, la propiedad privada y el contrato como pilares de la convivencia civilizada." },
  { era: "Carácter", title: "Rectitud estoica", desc: "Marco Aurelio, Séneca, Epicteto: el deber, la disciplina interior y la responsabilidad individual." },
  { era: "Valores", title: "Tradición judeocristiana", desc: "La sacralidad de la persona, la libertad de conciencia y la igualdad ante Dios y ante la ley." },
];

const prose = "font-size: var(--text-sm); color: var(--text-2); line-height: 1.8;";

export function VisionChapters({ photos }: { photos: Photo[] }) {
  const [activeChapter, setActiveChapter] = useState("ch1");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveChapter(ch.id);
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
          {/* Sticky sidebar TOC — desktop only */}
          <nav
            className="hidden lg:block shrink-0 sticky self-start"
            style={{ top: "6rem", width: "14rem" }}
            aria-label="Capítulos"
          >
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-xs)",
                color: "var(--text-3)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Capítulos
            </p>
            <ul className="list-none m-0 p-0 space-y-1">
              {chapters.map((ch) => (
                <li key={ch.id}>
                  <a
                    href={`#${ch.id}`}
                    className="block px-3 py-2 rounded-md no-underline transition-colors"
                    style={{
                      fontSize: "var(--text-xs)",
                      color: activeChapter === ch.id ? "var(--gold)" : "var(--text-3)",
                      background: activeChapter === ch.id ? "var(--surface-1)" : "transparent",
                      transitionDuration: "var(--duration-fast)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-accent)" }}>{ch.num}</span>{" "}
                    {ch.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main content */}
          <div className="flex-1 min-w-0" style={{ maxWidth: "52rem" }}>

            {/* Chapter I */}
            <article id="ch1" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>I</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>El proyecto de la libertad</h2>
              </div>
              <div className="space-y-4" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.8 }}>
                <p className="m-0">En 1853, <strong>Juan Bautista Alberdi</strong> escribió las <em>Bases y puntos de partida para la organización política de la República Argentina</em> — el proyecto institucional más ambicioso del hemisferio sur. La Constitución de 1853, de fuerte raigambre liberal, consagró la propiedad privada, la libertad de comercio, la inmigración abierta y un Estado limitado. El resultado fue la transformación económica más veloz que el mundo haya visto.</p>
                <p className="m-0">En apenas 35 años, la Argentina pasó de ser un territorio despoblado y empobrecido a ubicarse entre las diez economías más grandes del planeta. Para 1895, el PBI per cápita argentino superaba al de Francia, Alemania e Italia. Buenos Aires rivalizaba con París y Nueva York. Entre 1860 y 1930 llegaron más de seis millones de inmigrantes — italianos, españoles, alemanes, polacos — atraídos por la promesa de un país donde el mérito y la libertad determinaban el destino de cada persona.</p>
                <p className="m-0">Después vino la catástrofe. A partir de la década del 30, la dirigencia abandonó el modelo que nos había hecho ricos y abrazó las ideas empobrecedoras del colectivismo. Cada gobierno agrandó el Estado, creó nuevas regulaciones, aumentó el gasto público. El resultado: más de cien años de decadencia ininterrumpida. Un país que en 1910 tenía el mismo PBI per cápita que Estados Unidos fue cayendo hasta ubicarse en el puesto 140 del ranking mundial de libertad económica.</p>
                <p className="m-0">Mi proyecto no es administrar esa decadencia. <strong>Es dinamitarla y refundar la Argentina sobre las ideas que la hicieron grande.</strong> Cada decisión de gobierno se mide contra una sola pregunta: <strong>¿esto nos acerca a ser el país más libre del mundo?</strong></p>
              </div>
              <Pullquote cite="Discurso de asunción, diciembre 2023">&laquo;Hoy volvemos a abrazar las ideas de Alberdi, de nuestros padres fundadores, que hicieron que en 35 años pasáramos de ser un país de bárbaros a ser potencia.&raquo;</Pullquote>

              {/* Data strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {dataStrip.map((d) => (
                  <div key={d.num} className="text-center p-4 rounded-lg" style={{ background: "var(--surface-1)" }}>
                    <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xl)", color: "var(--gold)", fontWeight: 700 }}>{d.num}</span>
                    <span className="block mt-1" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)" }}>{d.label}</span>
                  </div>
                ))}
              </div>
              <ChapterPhoto photo={photos[0]} />
            </article>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

            {/* Chapter II */}
            <article id="ch2" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>II</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>Capitalismo y moralidad</h2>
              </div>
              <div className="space-y-4" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.8 }}>
                <p className="m-0"><strong>El capitalismo de libre empresa no solo es el sistema más productivo de la historia de la humanidad — es el único sistema moralmente deseable.</strong> El único basado enteramente en el intercambio voluntario y el principio de no agresión. Desde que se adoptó el capitalismo, el PBI per cápita mundial se multiplicó por 15 en apenas 200 años, y más de 2.000 millones de personas salieron de la pobreza extrema.</p>
                <p className="m-0">Como planteó <strong>Israel Kirzner</strong>, los socialistas ya no niegan que el capitalismo funciona — porque los datos son irrefutables. Lo que hacen es acusarlo de inmoral. Entonces la verdadera batalla de nuestro tiempo no es económica — es moral.</p>
                <p className="m-0">El capitalista exitoso no se apropia de la riqueza ajena — contribuye al bienestar general. <strong>Un empresario exitoso es un héroe, un benefactor social</strong> que solo puede prosperar sirviendo al prójimo con mejores bienes a mejor precio.</p>
              </div>
              <Pullquote cite="Davos, enero 2024">&laquo;El capitalista, el empresario exitoso, es un benefactor social que, lejos de apropiarse de la riqueza ajena, contribuye al bienestar general. No les dejen decir que su ambición es inmoral.&raquo;</Pullquote>
              <div className="space-y-4" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.8 }}>
                <p className="m-0"><strong>&laquo;Maquiavelo ha muerto.&raquo;</strong> <strong>Jesús Huerta de Soto</strong> demostró que la eficiencia dinámica surge única y exclusivamente del respeto a la propiedad privada y la función empresarial. Y como probó <strong>Friedrich Hayek</strong>, el conocimiento está disperso en la sociedad — ningún planificador central puede reemplazar al orden espontáneo del mercado libre.</p>
                <p className="m-0"><strong>Lo justo no puede ser ineficiente ni lo eficiente injusto.</strong> Justicia y eficiencia son dos caras de la misma moneda.</p>
              </div>

              {/* Pyramid */}
              <div className="my-8 space-y-3">
                {pyramid.map((level) => (
                  <div key={level.title} className="flex gap-4 p-4 rounded-lg" style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}>
                    <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xl)", color: "var(--gold)", fontWeight: 700, minWidth: "2rem" }}>{level.rank}</span>
                    <div>
                      <h4 className="m-0 mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-base)", color: "var(--text-1)" }}>{level.title}</h4>
                      <p className="m-0" style={{ fontSize: "var(--text-xs)", color: "var(--text-2)", lineHeight: 1.6 }}>{level.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <ChapterPhoto photo={photos[1]} />
            </article>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

            {/* Chapter III */}
            <article id="ch3" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>III</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>El Estado es el problema</h2>
              </div>
              <div className="space-y-4" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.8 }}>
                <p className="m-0">En 1944, <strong>Friedrich Hayek</strong> lo advirtió en <em>Camino de Servidumbre</em>: cada intervención del Estado genera distorsiones que justifican nuevas intervenciones, en una espiral que no se detiene hasta que la libertad desaparece por completo.</p>
                <p className="m-0">Desde la primera presidencia de Perón en 1946 hasta diciembre de 2023, el gasto público pasó del 15 % del PBI al 42 %. Se crearon más de 600 organismos estatales. La carga impositiva se multiplicó por tres.</p>
                <p className="m-0"><strong>No existen las fallas de mercado.</strong> El mercado es un mecanismo de cooperación social donde se intercambian voluntariamente derechos de propiedad. La intromisión del Estado mete ruido en el sistema de precios. Los cuatro supuestos fallos de mercado — monopolio natural, bienes públicos, externalidades e información asimétrica — son construcciones teóricas que no resisten el análisis empírico. El concepto de monopolio natural es una falacia: en un mercado libre, la amenaza de competencia potencial disciplina al productor más eficiente. Los bienes públicos pueden proveerse por medios privados. Las externalidades se resuelven con derechos de propiedad bien definidos, como demostró Coase. La información asimétrica es la regla, no la excepción — y precisamente por eso el mercado funciona: el sistema de precios procesa más información de la que cualquier planificador podría soñar.</p>
                <p className="m-0">En Argentina, cada «solución» estatal generó problemas mayores que los que pretendía resolver. La regulación del mercado de alquileres destruyó la oferta y disparó los precios. Los subsidios energéticos costaron USD 14.000 millones anuales y desfinanciaron la inversión en infraestructura. Los controles de precios generaron desabastecimiento. El cepo cambiario creó un mercado negro y ahuyentó la inversión extranjera. <strong>Cada intervención es una cuña que distorsiona los precios relativos y destruye información.</strong></p>
                <p className="m-0"><strong>Las funciones del Estado deben limitarse a la defensa del derecho a la vida, a la libertad y a la propiedad.</strong> Nada más. Todo lo demás es coacción disfrazada de política pública. El gasto público no es gratuito: cada peso que gasta el Estado es un peso que se le quita a un ciudadano que lo habría gastado mejor. No es un debate de gestión — es un debate moral.</p>
              </div>
              <Pullquote cite="Davos, enero 2024">&laquo;El Estado no es la solución. El Estado es el problema mismo. No cedan al avance del Estado.&raquo;</Pullquote>
            </article>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

            {/* Chapter IV */}
            <article id="ch4" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>IV</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>La batalla cultural</h2>
              </div>
              <div className="space-y-4" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.8 }}>
                <p className="m-0">La gran gesta para cambiar la Argentina tiene tres frentes de batalla que, si bien son distintos el uno del otro, <strong>son igualmente indispensables.</strong></p>
                <p className="m-0">La década del 90 es la prueba. Carlos Menem implementó reformas económicas profundas — privatizaciones, apertura comercial, convertibilidad — y sin embargo la izquierda logró revertirlas todas en pocos años. El colectivismo no volvió porque las reformas fracasaron; volvió porque la izquierda nunca perdió la hegemonía cultural.</p>
                <p className="m-0"><strong>Antonio Gramsci</strong> escribió desde la cárcel en los años 30 que para implantar el socialismo era necesario primero conquistar la cultura. La izquierda lo hizo al pie de la letra durante 80 años. <strong>La batalla cultural fue ganada por la izquierda básicamente porque nosotros no dimos la batalla.</strong></p>
              </div>
              <Pullquote cite="CPAC Argentina, diciembre 2024">&laquo;Sin el cuidado de las ideas, no importa qué tan buenos seamos gestionando o cuán buenos seamos políticamente, no vamos a llegar a ningún lado.&raquo;</Pullquote>

              {/* Three pillars */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                {pillars.map((p) => (
                  <div key={p.title} className="p-5 rounded-lg text-center" style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}>
                    <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                    <h4 className="m-0 mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-base)", color: "var(--text-1)" }}>{p.title}</h4>
                    <p className="m-0" style={{ fontSize: "var(--text-xs)", color: "var(--text-2)", lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.8 }}>
                <p className="m-0"><strong>Dar la batalla cultural desde el poder no solo es recomendable — es una obligación.</strong> Las ideas no ganan por mérito propio: deben ser promovidas activamente.</p>
                <p className="m-0">Gracias a internet y la creatividad popular, las redes sociales rompieron el monopolio comunicacional de la izquierda. <strong>Una victoria política no es el fin de la lucha por las ideas, sino el comienzo.</strong></p>
              </div>
              <ChapterPhoto photo={photos[2]} />
            </article>

            <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 3rem" }} />

            {/* Chapter V */}
            <article id="ch5" className="mb-16">
              <div className="flex items-baseline gap-4 mb-6">
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-2xl)", color: "var(--gold)" }}>V</span>
                <h2 className="m-0" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-1)" }}>La defensa de Occidente</h2>
              </div>
              <div className="space-y-4" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.8 }}>
                <p className="m-0"><strong>Occidente está en peligro.</strong> Está en peligro porque aquellos que supuestamente deben defender sus valores — los líderes políticos, los académicos, los organismos internacionales — se encuentran cooptados por una visión del mundo que, inexorablemente, conduce al socialismo y a la pobreza.</p>
                <p className="m-0">Y sin embargo, Occidente representa el pico de la civilización humana. Durante 2.500 años, a partir de cuatro fuentes — <strong>la filosofía griega, el derecho romano, la rectitud de los estoicos y los valores judeocristianos</strong> — Occidente construyó el edificio institucional que hizo posible la ciencia, el arte, la medicina, la tecnología y la libertad individual.</p>
                <p className="m-0"><strong>La paz nos volvió débiles. La prosperidad nos hizo complacientes.</strong> Las generaciones que no conocieron el horror del totalitarismo olvidaron por qué la libertad es un bien que debe defenderse con uñas y dientes, todos los días, sin descanso.</p>
              </div>
              <Pullquote cite="Davos, enero 2024">&laquo;Occidente está en peligro, y quienes deberían defenderlo lo están abandonando.&raquo;</Pullquote>
              <div className="space-y-4" style={{ fontSize: "var(--text-sm)", color: "var(--text-2)", lineHeight: 1.8 }}>
                <p className="m-0">La amenaza no viene solo del exterior. Organismos internacionales como la ONU, creados para preservar la paz y la libertad, fueron cooptados por una agenda colectivista que impone objetivos redistributivos, cuotas ideológicas y restricciones a la soberanía nacional bajo el rótulo de «desarrollo sostenible». La Agenda 2030 no es un programa de progreso — es un instrumento de planificación centralizada a escala global. Por eso Argentina votó en contra en la Asamblea General y se retiró del Pacto del Futuro.</p>
                <p className="m-0">A partir del 10 de diciembre de 2023, la República Argentina abandonó la posición de neutralidad histórica y se puso a la vanguardia de la lucha en defensa de la libertad. No por imposición imperial sino por convicción: Argentina fue fundada sobre los mismos principios que hicieron grande a Occidente — la Constitución de 1853 de Alberdi es un documento liberal, no colectivista. Volver a esas raíces es volver a ser lo que fuimos cuando éramos potencia.</p>
                <p className="m-0">La alianza con Estados Unidos, Israel, Italia, el Reino Unido, El Salvador y Chile no es un alineamiento automático — es una coalición de naciones que eligen la libertad sobre el control. El Board of Peace de 19 países, el Shield of the Americas de 17 naciones, los tres tratados de libre comercio firmados en un año: todo apunta en la misma dirección.</p>
                <p className="m-0"><strong>América será el faro de luz que vuelva a encender a todo Occidente</strong>, y con ello pagará su deuda civilizatoria como muestra de gratitud hacia las raíces que la hicieron posible.</p>
              </div>

              <ChapterPhoto photo={photos[3]} />

              {/* Thinkers */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {thinkers.map((t) => (
                  <div key={t.title} className="p-4 rounded-lg" style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}>
                    <span className="block mb-1" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-xs)", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.era}</span>
                    <h4 className="m-0 mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-sm)", color: "var(--text-1)" }}>{t.title}</h4>
                    <p className="m-0" style={{ fontSize: "var(--text-xs)", color: "var(--text-3)", lineHeight: 1.5 }}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Closing declaration */}
            <div className="text-center py-12" style={{ borderTop: "1px solid var(--border)" }}>
              <p
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-2xl)",
                  color: "var(--text-1)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  lineHeight: 1.3,
                }}
              >
                Argentina será<br />
                el país más{" "}
                <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--gold)", textTransform: "none" }}>libre</span>
                <br />del mundo
              </p>
              <p className="mt-4" style={{ fontFamily: "var(--font-accent)", fontSize: "var(--text-sm)", color: "var(--text-3)", letterSpacing: "0.1em" }}>
                Viva la libertad, carajo!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
