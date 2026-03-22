// ── Logros Data ──────────────────────────────────────────

export interface PobrezaCounter {
  target: number;
  suffix: string;
  decimals?: number;
  label: string;
  sub: string;
}

export interface PobrezaPill {
  val: string;
  lbl: string;
}

export interface PobrezaFlowCard {
  tag: string;
  big: string;
  desc: string;
}

export interface PobrezaData {
  badge: string;
  topbarNum: string;
  kicker: string;
  headline: string;
  headlineEm: string;
  counters: PobrezaCounter[];
  narrative: string[];
  flowBefore: PobrezaFlowCard;
  flowAfter: PobrezaFlowCard;
  pills: PobrezaPill[];
  quote: string;
  quoteAttr: string;
}

export const pobrezaData: PobrezaData = {
  badge: "01 — POBREZA",
  topbarNum: "EL LOGRO MÁS IMPORTANTE",
  kicker: "De la peor crisis social desde 2001 al mayor descenso de pobreza en la historia argentina",
  headline: "Más de ",
  headlineEm: "10 millones",
  counters: [
    { target: 57, suffix: "%", label: "Pobreza heredada", sub: "Q1 2024 — la peor desde la crisis de 2001" },
    { target: 27, suffix: "%", label: "Pobreza actual", sub: "Q3 2025 — el nivel más bajo en 7 años" },
    { target: 10, suffix: "M+", label: "Salieron de la pobreza", sub: "En menos de dos años — sin precedente histórico" },
    { target: 5.3, suffix: "M", decimals: 1, label: "Salieron de la indigencia", sub: "Del 20,3 % al 4,6 % — caída de 77 %" },
  ],
  narrative: [
    "En el primer trimestre de 2024, el INDEC reveló la magnitud de la catástrofe heredada: la pobreza alcanzó el **57 %** — la peor cifra desde la crisis terminal de 2001. Estaba camuflada con controles de precios, tarifas congeladas y maquillaje estadístico. Siete de cada diez chicos eran pobres. Casi 20 millones de personas vivían bajo la línea de pobreza, con una indigencia del 20,3 %. El gobierno de Alberto Fernández y Cristina Kirchner dejó una bomba social sin precedentes.",
    "La plata de la ayuda social no llegaba a quienes la necesitaban. Organizaciones como la UTEP y Barrios de Pie operaban como intermediarias del Estado: se quedaban con hasta el 20 % de los recursos, administraban la miseria como un negocio y usaban a los más vulnerables como rehenes para movilizaciones y presión política. Era un sistema diseñado para perpetuar la pobreza, no para combatirla.",
    "La ministra de Capital Humano, Sandra Pettovello, desmanteló el aparato de intermediarios y eliminó las transferencias discrecionales. La plata dejó de pasar por punteros y empezó a llegar **directo al bolsillo** de cada beneficiario. La AUH aumentó un **492,9 %**. Se incorporaron **600.000 chicos** que estaban fuera del sistema. La prestación Alimentar creció 137,5 %. Las becas Primera Infancia subieron más de 500 % y Primeros Mil Días más de 1.100 %. Para el tercer trimestre de 2025, la pobreza cayó al **26,9 %** — el valor más bajo desde 2018 y la mayor reducción de pobreza jamás registrada en la Argentina.",
  ],
  flowBefore: {
    tag: "HERENCIA — peor cifra desde 2001",
    big: "57 %",
    desc: "Casi 20 M de personas bajo la línea de pobreza. Indigencia: 20,3 %. 7 de cada 10 chicos eran pobres. Ayuda social secuestrada por intermediarios.",
  },
  flowAfter: {
    tag: "Q3 2025 — récord histórico de reducción",
    big: "26,9 %",
    desc: "Mínimo en 7 años. 10 M+ salieron de la pobreza, 5,3 M de la indigencia. Transferencias directas. AUH +493 %.",
  },
  pills: [
    { val: "+493%", lbl: "AUH" },
    { val: "600K", lbl: "Chicos incorporados" },
    { val: "+137%", lbl: "Alimentar" },
    { val: "+500%", lbl: "Becas Primera Infancia" },
    { val: "+1.100%", lbl: "Primeros Mil Días" },
  ],
  quote: "«Robar está mal, pero robarle el pan de la boca a los más vulnerables, haciéndolos esclavos para amasar poder, excede a cualquier adjetivo que se pueda encontrar en el diccionario.»",
  quoteAttr: "— Milei, Congreso 2026",
};

export interface BeforeAfter {
  label: string;
  val: string;
  desc: string;
}

export interface Logro {
  num: string;
  badge: string;
  title: string;
  paragraphs: string[];
  before: BeforeAfter;
  after: BeforeAfter;
  callout: string;
  gradient: string;
  imgBefore: string;
  imgAfter: string;
  altBefore: string;
  altAfter: string;
  reverse?: boolean;
}

export const logros: Logro[] = [
  {
    num: "02",
    badge: "02 — ESTABILIZACIÓN",
    title: "Se evitó la hiperinflación: se desactivó la bomba más grande de la historia",
    paragraphs: [
      "En agosto de 2023, Sergio Massa quedó tercero en las PASO y lanzó el «Plan Platita»: inyectó 1,3 % del PBI en bonos, devolución de IVA y beneficios impositivos — todo financiado con emisión pura del Banco Central. En un solo año emitió trece bases monetarias. Para diciembre de 2023, la inflación mayorista viajaba al 17.000 % anualizado. El déficit consolidado llegaba al 15 % del PBI. Las reservas netas eran negativas en USD 13.000 M. La brecha cambiaria superaba el 200 %.",
      "La herencia que recibimos el 10 de diciembre de 2023 combinaba las tres peores crisis de la historia argentina en una sola: el desequilibrio monetario duplicaba al del Rodrigazo de junio de 1975, el Banco Central estaba en peor situación que antes de la hiperinflación de Alfonsín en 1989, y los indicadores sociales superaban en gravedad a los del colapso de 2001. Ningún país del mundo había enfrentado jamás estas tres crisis simultáneamente sin caer en hiperinflación.",
      "El ministro de Economía Luis «Toto» Caputo lo resolvió de forma opuesta a cualquier antecedente histórico: sin expropiaciones, sin Plan Bonex, sin controles de precios, sin confiscar depósitos — todo a libre mercado. En seis meses se eliminó el déficit cuasifiscal del Banco Central. La hiper se evitó. Fue la primera vez en la historia argentina que una crisis de esta magnitud se resolvió sin destruir los ahorros de la clase media.",
    ],
    before: { label: "Herencia dic. 2023 — la peor de la historia", val: "17.000%", desc: "Inflación mayorista anualizada. 13 bases monetarias emitidas en un año. Déficit consolidado 15 % PBI. Reservas negativas USD 13.000 M." },
    after: { label: "Resultado — sin precedente mundial", val: "HIPER EVITADA", desc: "Cuasifiscal eliminado en 6 meses. Sin Bonex, sin confiscación, sin controles — a puro mercado libre." },
    callout: "Se desactivó la mayor bomba inflacionaria de la historia argentina sin tocar un solo depósito ni confiscar un solo peso.",
    gradient: "linear-gradient(135deg, #b71c1c, #d32f2f)",
    imgBefore: "/images/logros/02-antes.png",
    imgAfter: "/images/logros/02-despues.png",
    altBefore: "Pesos argentinos quemándose, hiperinflación",
    altAfter: "Bosques de Palermo, familias disfrutando",
  },
  {
    num: "03",
    badge: "03 — ORDEN",
    title: "No más piquetes: la calle es de todos los argentinos",
    paragraphs: [
      "En 2023, la Argentina registró más de 9.000 piquetes — un promedio de 25 cortes de calle por día. Organizaciones sociales como la UTEP, el Polo Obrero y Barrios de Pie recibían financiamiento estatal y cortaban rutas con total impunidad. Millones de argentinos no podían ir a trabajar, llevar a sus hijos al colegio ni llegar a un hospital. Los piquetes se financiaban con plata de la ayuda social — dinero que debía llegar a los más necesitados terminaba pagando el aparato de presión callejera de dirigentes como Juan Grabois y Eduardo Belliboni.",
      "La ministra de Seguridad Patricia Bullrich implementó el Protocolo Antipiquetes desde el primer día de gobierno. Se eliminaron las transferencias discrecionales a intermediarios. La plata va directo a quien la necesita, sin punteros. Las calles se liberaron por primera vez en más de 20 años. La 9 de Julio, la Panamericana, los accesos a Buenos Aires: todos circulan con normalidad.",
    ],
    before: { label: "2023 — 25 cortes por día", val: "9.000", desc: "Piquetes por año. Financiados con plata de la ayuda social. Impunidad total para los organizadores." },
    after: { label: "2024-2025", val: "0", desc: "Cero cortes. Protocolo Bullrich. Transferencias directas. Las calles son de todos por primera vez en 20 años." },
    callout: "De 25 piquetes por día a cero. Las calles argentinas volvieron a ser de la gente que trabaja, no de los que extorsionan.",
    gradient: "linear-gradient(135deg, #4a148c, #7b1fa2)",
    imgBefore: "/images/logros/03-antes.png",
    imgAfter: "/images/logros/03-despues.png",
    altBefore: "Piqueteros cortando la 9 de Julio",
    altAfter: "Obelisco y 9 de Julio fluyendo de noche",
    reverse: true,
  },
  {
    num: "04",
    badge: "04 — DESINFLACIÓN",
    title: "La inflación se pulverizó: del 17.000 % anualizado a menos de 30 %",
    paragraphs: [
      "En la primera semana de diciembre de 2023, la inflación corría al 1 % diario — un ritmo que destruía el poder adquisitivo en tiempo real. La inflación mayorista de noviembre fue del 54 % mensual, equivalente a 17.000 % anualizado. La minorista marcó 25,5 % en diciembre. Los argentinos cobraban el sueldo y corrían a comprar antes de que los precios volvieran a subir. Los supermercados remarcaban dos y tres veces por semana.",
      "El equipo económico de Toto Caputo logró la desinflación más rápida de la historia argentina sin recurrir a ninguna de las herramientas habituales: sin fijar el tipo de cambio, sin congelar precios, sin tablitas, sin pactos sociales. Solo con disciplina fiscal y monetaria. Para febrero de 2026, la inflación mensual bajó a 2,4 %, y la interanual se ubica en torno al 26 %. Una caída de más de 99 % desde el pico heredado — la mayor desinflación del mundo en curso.",
    ],
    before: { label: "Dic 2023 — al borde de la hiper", val: "17.000%", desc: "Inflación mayorista anualizada. 25,5 % mensual minorista. 1 % diario. Remarcaciones múltiples por semana." },
    after: { label: "Feb 2026", val: "2,4%", desc: "Mensual. Interanual ~26 %. Sin controles de precios, sin tipo de cambio fijo — desinflación récord mundial." },
    callout: "De 1 % de inflación por día a 2,4 % por mes. La mayor desinflación del planeta, lograda sin controles ni congelamientos.",
    gradient: "linear-gradient(135deg, #e65100, #ff8f00)",
    imgBefore: "/images/logros/04-antes.png",
    imgAfter: "/images/logros/04-despues.png",
    altBefore: "Supermercado con límites de compra, escasez",
    altAfter: "Familia comprando con normalidad, góndolas llenas",
  },
  {
    num: "05",
    badge: "05 — FISCAL",
    title: "Déficit cero: primer presupuesto equilibrado en más de un siglo",
    paragraphs: [
      "La Argentina llevaba más de 100 años sin presentar un presupuesto equilibrado y libre de default. El gobierno de Alberto Fernández dejó un déficit fiscal consolidado de 15 puntos del PBI: cinco del Tesoro Nacional y diez escondidos debajo de la alfombra del Banco Central en forma de Leliqs y pases. Había 22 ministerios, 106 secretarías y un aparato burocrático diseñado para alimentar a la política, no para servir al ciudadano.",
      "En el primer mes de gobierno se aplicó el mayor ajuste fiscal de la historia: se bajó de 22 a 7 ministerios, se eliminaron 106 secretarías, se cortaron las transferencias discrecionales y se frenó la emisión monetaria. El resultado: superávit fiscal desde enero de 2024 — sostenido durante más de dos años consecutivos. Se bajaron impuestos por 2,5 puntos del PBI, incluyendo la eliminación del Impuesto PAÍS y la reducción de retenciones. Se aprobó el primer presupuesto equilibrado, libre de default, en 123 años.",
    ],
    before: { label: "Herencia — 100+ años sin equilibrio", val: "–15% PBI", desc: "Déficit consolidado. 22 ministerios, 106 secretarías. Emisión descontrolada. Brecha cambiaria 200 %+." },
    after: { label: "2024-2026", val: "SUPERÁVIT", desc: "Sostenido 24 meses consecutivos. 7 ministerios. Gasto –30 %. Impuestos –2,5 pp PBI. Primer presupuesto equilibrado en 123 años." },
    callout: "Primer superávit fiscal sostenido en 123 años. Primer gobierno de la historia que baja impuestos y gasto al mismo tiempo.",
    gradient: "linear-gradient(135deg, #1a237e, #283593)",
    imgBefore: "/images/logros/05-antes.png",
    imgAfter: "/images/logros/05-despues.png",
    altBefore: "Máquina imprimiendo billetes, emisión descontrolada",
    altAfter: "Plaza de Mayo y Casa Rosada, orden fiscal",
    reverse: true,
  },
  {
    num: "06",
    badge: "06 — CREDIBILIDAD",
    title: "El riesgo país se desplomó: Argentina volvió al mapa financiero mundial",
    paragraphs: [
      "En diciembre de 2023, el riesgo país superaba los 2.000 puntos básicos. La Argentina estaba en default técnico, sin acceso a los mercados internacionales de crédito. Ningún inversor serio consideraba poner un dólar en el país. Los bonos argentinos cotizaban a precio de remate — a niveles de países en guerra.",
      "La credibilidad fiscal y la disciplina monetaria hicieron lo que décadas de promesas no lograron. El riesgo país se desplomó a 652 puntos tras las legislativas de octubre 2025 — una caída de más de 2.500 puntos básicos. Se cerró un acuerdo histórico con el FMI por USD 20.000 M. Las empresas anunciaron inversiones por más de USD 55.000 M. Argentina volvió a ser destino de inversión extranjera directa por primera vez en más de una década.",
    ],
    before: { label: "Dic 2023 — país paria", val: "2.000+ pts", desc: "Sin acceso a mercados. Bonos a precio de default. Ningún inversor miraba a Argentina." },
    after: { label: "Post legislativas oct. 2025", val: "652 pts", desc: "–2.500 pb. Acuerdo FMI USD 20.000 M. Inversiones anunciadas USD 55.000 M. Argentina volvió al mundo." },
    callout: "De país paria financiero a destino de inversión: USD 55.000 M en proyectos anunciados y el riesgo país más bajo en 6 años.",
    gradient: "linear-gradient(135deg, #0d47a1, #1565c0)",
    imgBefore: "/images/logros/06-antes.png",
    imgAfter: "/images/logros/06-despues.png",
    altBefore: "Crisis 2001, auto quemándose frente al Obelisco",
    altAfter: "Grúas de Puerto Madero, Argentina abierta al mundo",
  },
  {
    num: "07",
    badge: "07 — SEGURIDAD",
    title: "Tasa de homicidios más baja en 25 años — y la más baja de toda Sudamérica",
    paragraphs: [
      "Rosario se había convertido en una de las ciudades más violentas de América Latina. En 2022 registró 261 homicidios — más que muchas capitales centroamericanas. Las bandas narco del clan de «Los Monos» y otros grupos operaban con impunidad, extorsionando comercios, controlando barrios enteros y ejecutando a plena luz del día. A nivel nacional, la tasa de homicidios era de 4,4 por cada 100.000 habitantes.",
      "La ministra de Seguridad Patricia Bullrich desplegó fuerzas federales en Rosario y lanzó operativos conjuntos con la Justicia Federal contra las bandas narco. Los homicidios bajaron 17 % a nivel nacional. En Rosario la caída fue del 65 % — la mayor reducción de violencia en la historia de la ciudad. Argentina registró 3,8 homicidios por 100.000 habitantes en 2024: la tasa más baja en 25 años y la más baja de toda Sudamérica, por debajo de Chile y Uruguay por primera vez en la historia.",
    ],
    before: { label: "2022-2023 — Rosario tomada por el narco", val: "4,4", desc: "Homicidios/100K. Rosario: 261 asesinatos. Bandas narco con impunidad total. Fronteras sin control." },
    after: { label: "2024 — récord histórico", val: "3,8", desc: "Tasa más baja en 25 años y la más baja de Sudamérica. Rosario –65 %. Por debajo de Chile y Uruguay por primera vez." },
    callout: "Por primera vez en la historia, Argentina tiene menos homicidios per cápita que Chile y Uruguay. Rosario recuperó sus calles.",
    gradient: "linear-gradient(135deg, #1b5e20, #2e7d32)",
    imgBefore: "/images/logros/07-antes.png",
    imgAfter: "/images/logros/07-despues.png",
    altBefore: "Operativo policial nocturno, inseguridad en Rosario",
    altAfter: "Monumento a la Bandera, Rosario en paz",
    reverse: true,
  },
  {
    num: "08",
    badge: "08 — DESREGULACIÓN",
    title: "14.500 desregulaciones: la motosierra de Sturzenegger liberó la economía",
    paragraphs: [
      "La Argentina tenía más de 67.000 regulaciones vigentes — un laberinto burocrático diseñado para proteger privilegios, no para servir al ciudadano. Detrás de cada regulación había un curro, un intermediario o un monopolio protegido. Aerolíneas Argentinas había costado USD 8.000 M al Estado desde su re-estatización en 2008 bajo Cristina Kirchner. La ley de alquileres de 2020 había destruido el mercado: la oferta cayó 50 % y los precios se dispararon. Abrir un negocio requería hasta 14 trámites y 45 días.",
      "El ministro de Desregulación Federico Sturzenegger eliminó más de 14.500 regulaciones mediante el DNU 70/2023 y la Ley Bases. Aerolíneas Argentinas pasó de pérdida crónica a generar ganancias por USD 100 M en 2025. La derogación de la ley de alquileres triplicó la oferta y bajó los precios un 30 % en términos reales. Se registró récord histórico de pasajeros aéreos. Los cielos abiertos permitieron la entrada de nuevas aerolíneas low-cost. Abrir un negocio pasó de 45 días a 24 horas.",
    ],
    before: { label: "Argentina asfixiada — 67.000 regulaciones", val: "ASFIXIA", desc: "Cada regulación, un privilegio. Aerolíneas: –USD 8.000 M. Ley de alquileres destruyó la oferta. 45 días para abrir un negocio." },
    after: { label: "Argentina desregulada — DNU 70 + Ley Bases", val: "14.500+", desc: "Regulaciones eliminadas. Aerolíneas: +USD 100 M. Alquileres –30 % real, oferta x3. Récord de pasajeros aéreos." },
    callout: "De 67.000 regulaciones a 14.500 menos. Aerolíneas pasó de perder USD 8.000 M a ganar USD 100 M. La motosierra funciona.",
    gradient: "linear-gradient(135deg, #bf360c, #e65100)",
    imgBefore: "/images/logros/08-antes.png",
    imgAfter: "/images/logros/08-despues.png",
    altBefore: "Cola interminable de trámites, burocracia asfixiante",
    altAfter: "Aerolíneas Argentinas despegando, cielos abiertos",
  },
  {
    num: "09",
    badge: "09 — CRECIMIENTO",
    title: "La economía creció 4,4 % y alcanzó el máximo histórico de PBI",
    paragraphs: [
      "En 2023, la economía argentina caía 1,6 %. En 2024 volvió a retroceder 1 %. Dos años consecutivos de contracción, con una industria paralizada por las distorsiones cambiarias, una inversión desplomada y un consumo destruido por la inflación. El aparato productivo estaba frenado: empresas que no invertían, importaciones trabadas por el cepo y una fuga de capitales que vaciaba al país.",
      "En 2025, la economía argentina creció 4,4 % según el INDEC — el mayor crecimiento en más de una década — y el PBI alcanzó un máximo histórico, ubicándose 1,1 % por encima del récord previo de 2022. El consumo privado subió 7,9 %. La inversión bruta fija se disparó 16,4 % — señal inequívoca de que el sector privado volvió a apostar por Argentina. Las exportaciones crecieron 7,6 %. Los sectores que más traccionaron fueron la intermediación financiera (+24,7 %), minas y canteras (+8 %) y hoteles y restaurantes (+7,4 %). No fue un rebote estadístico: fue crecimiento genuino sobre bases sanas, sin emisión, sin déficit y sin cepo.",
    ],
    before: { label: "2023-2024 — dos años de caída", val: "–2,6%", desc: "PBI cayó 1,6 % en 2023 y 1 % en 2024. Inversión desplomada. Consumo destruido por inflación. Industria paralizada." },
    after: { label: "2025 — máximo histórico", val: "+4,4%", desc: "Récord absoluto de PBI. Consumo +7,9 %. Inversión +16,4 %. Exportaciones +7,6 %. Crecimiento genuino sin emisión." },
    callout: "El PBI de Argentina alcanzó un máximo histórico en 2025. La inversión creció 16,4 % — el sector privado volvió a apostar por el país.",
    gradient: "linear-gradient(135deg, #004d40, #00695c)",
    imgBefore: "/images/logros/09-antes.png",
    imgAfter: "/images/logros/09-despues.png",
    altBefore: "Fábricas cerradas, recesión económica",
    altAfter: "Construcción y crecimiento económico en Argentina",
    reverse: true,
  },
  {
    num: "10",
    badge: "10 — CEPO",
    title: "Se levantó el cepo: Argentina volvió a tener un mercado cambiario libre",
    paragraphs: [
      "Desde septiembre de 2019, la Argentina vivía con cepo cambiario — un sistema de controles que impedía a los ciudadanos comprar más de USD 200 por mes, prohibía a las empresas girar dividendos al exterior y generaba una brecha cambiaria que llegó a superar el 200 %. El cepo distorsionaba todos los precios de la economía, ahuyentaba la inversión extranjera y condenaba a los argentinos a vivir con un tipo de cambio artificial. Era una cárcel financiera que convertía al peso en una moneda inconvertible.",
      "El 14 de abril de 2025, el gobierno levantó el cepo cambiario y puso fin a casi seis años de restricciones. Se implementó un régimen de flotación administrada entre bandas de $1.000 y $1.400, con ampliación del 1 % mensual. Se eliminó el límite de USD 200, se suprimió el dólar blend y se permitió la libre distribución de utilidades a accionistas extranjeros. La operación contó con el respaldo de un nuevo acuerdo con el FMI por USD 20.000 millones, de los cuales USD 15.000 millones fueron de libre disponibilidad. Argentina volvió a tener un mercado cambiario libre por primera vez en seis años — sin corrida, sin crisis y sin devaluación abrupta.",
    ],
    before: { label: "2019-2025 — seis años de cepo", val: "USD 200", desc: "Máximo mensual para personas. Brecha cambiaria 200 %+. Prohibición de giro de dividendos. Tipo de cambio artificial." },
    after: { label: "14 de abril de 2025", val: "LIBRE", desc: "Flotación entre bandas. Sin límite de compra. Libre giro de dividendos. Respaldo FMI: USD 20.000 M." },
    callout: "De una cárcel financiera con USD 200 de tope a un mercado cambiario libre. Sin corrida, sin crisis, con respaldo del FMI por USD 20.000 M.",
    gradient: "linear-gradient(135deg, #311b92, #4527a0)",
    imgBefore: "/images/logros/10-antes.png",
    imgAfter: "/images/logros/10-despues.png",
    altBefore: "Colas en casas de cambio, cepo cambiario",
    altAfter: "Mercado financiero libre, pantallas de cotización",
  },
  {
    num: "11",
    badge: "11 — EXPORTACIONES",
    title: "Récord de exportaciones: USD 87.000 millones y superávit comercial histórico",
    paragraphs: [
      "Durante años, la Argentina fue un país que se cerraba al mundo. Las retenciones asfixiaban al campo, el cepo frenaba las importaciones de insumos y las regulaciones ahogaban la competitividad industrial. El resultado era un comercio exterior raquítico, una balanza energética deficitaria y empresas que no podían competir en los mercados globales. Argentina importaba energía en lugar de exportarla — un absurdo para un país con Vaca Muerta y los recursos naturales más abundantes del hemisferio sur.",
      "En 2025, las exportaciones argentinas alcanzaron USD 87.077 millones — el segundo máximo histórico y un récord en volumen físico — con un crecimiento del 9,3 % interanual. El superávit comercial cerró en USD 11.286 millones. La composición exportadora se diversificó: manufacturas agropecuarias USD 30.467 M (35 %), productos industriales USD 23.380 M (26,8 %), productos primarios USD 22.144 M (25,4 %) y combustibles y energía USD 11.086 M (12,7 %). Por primera vez, Argentina se consolidó como exportadora neta de energía. La soja, el petróleo, el oro y la carne lideraron el ingreso de divisas.",
    ],
    before: { label: "Argentina cerrada al mundo", val: "DÉFICIT", desc: "Retenciones asfixiantes. Importadora neta de energía. Cepo frenaba insumos. Comercio exterior raquítico." },
    after: { label: "2025 — récord", val: "USD 87.000 M", desc: "Exportaciones récord en volumen. Superávit USD 11.300 M. Exportadora neta de energía. Diversificación productiva." },
    callout: "USD 87.000 M en exportaciones — récord en volumen físico. Argentina pasó de importar energía a exportarla.",
    gradient: "linear-gradient(135deg, #01579b, #0277bd)",
    imgBefore: "/images/logros/11-antes.png",
    imgAfter: "/images/logros/11-despues.png",
    altBefore: "Puerto vacío, comercio paralizado",
    altAfter: "Puerto de Buenos Aires con contenedores, exportaciones récord",
    reverse: true,
  },
  {
    num: "12",
    badge: "12 — CRÉDITO",
    title: "Volvió el crédito hipotecario: boom inmobiliario después de años de parálisis",
    paragraphs: [
      "El crédito hipotecario había desaparecido de la Argentina. Con una inflación de tres dígitos y tasas de interés impagables, ningún banco otorgaba préstamos para vivienda. Los argentinos que soñaban con la casa propia estaban condenados a alquilar o a juntar dólares durante décadas. El mercado inmobiliario estaba paralizado: las escrituras en la Ciudad de Buenos Aires habían caído a mínimos históricos y los precios se desplomaban.",
      "La estabilización macroeconómica trajo de vuelta lo que parecía imposible: el crédito hipotecario. En 2025 se otorgaron 44.305 préstamos hipotecarios — el cuarto mejor año desde que hay registros en 2004, solo detrás de los picos de 2017, 2018 y 2007. El ratio de hipotecas sobre escrituras superó el 15 %, duplicando el promedio de los últimos cinco años y alcanzando su nivel más alto desde 2018. Los precios de inmuebles en CABA subieron entre 5 % y 11 % interanual en los tres segmentos (pozo, a estrenar y usados). Miles de familias argentinas volvieron a acceder al sueño de la vivienda propia gracias a la estabilidad de precios y la baja de tasas.",
    ],
    before: { label: "Crédito destruido por la inflación", val: "0", desc: "Sin crédito hipotecario. Tasas impagables. Mercado inmobiliario paralizado. El sueño de la casa propia, imposible." },
    after: { label: "2025 — boom hipotecario", val: "44.305", desc: "Hipotecas otorgadas. 4° mejor año desde 2004. Ratio hipotecas/escrituras 15 % (récord desde 2018). Precios +5-11 %." },
    callout: "De cero crédito hipotecario a 44.305 préstamos en un año. Miles de familias argentinas volvieron a acceder a la vivienda propia.",
    gradient: "linear-gradient(135deg, #33691e, #558b2f)",
    imgBefore: "/images/logros/12-antes.png",
    imgAfter: "/images/logros/12-despues.png",
    altBefore: "Cartel de venta sin interesados, mercado inmobiliario paralizado",
    altAfter: "Familia mudándose a su nueva casa, crédito hipotecario",
  },
  {
    num: "13",
    badge: "13 — SALARIOS",
    title: "Los salarios le ganaron a la inflación: recuperación real del poder adquisitivo",
    paragraphs: [
      "La inflación de tres dígitos heredada en diciembre de 2023 había pulverizado los salarios. Los trabajadores cobraban y la plata no alcanzaba: los precios subían más rápido que cualquier paritaria. El poder adquisitivo del salario promedio había caído al nivel más bajo en décadas. Los empleados públicos, los informales y los jubilados eran los más golpeados. El sueldo se licuaba antes de llegar a fin de mes.",
      "La desinflación hizo lo que ninguna paritaria había logrado: devolver poder de compra real. En 2025, los salarios del sector privado registrado crecieron 4,8 % por encima de la inflación — la primera recuperación sostenida en años. Los salarios públicos subieron 3,8 % real. Desde mediados de 2024, el salario real encadena quince meses consecutivos de mejora. La estabilidad de precios rompió el círculo vicioso de inflación-paritaria-remarcación que destruía el bolsillo de los argentinos desde hacía dos décadas.",
    ],
    before: { label: "Dic 2023 — salarios licuados", val: "–25%", desc: "Caída real acumulada. Inflación 200 %+ destruía el poder de compra. Remarcaciones diarias. Sueldos que no alcanzaban." },
    after: { label: "2025 — recuperación real", val: "+4,8%", desc: "Crecimiento real del salario privado. +3,8 % público. 15 meses consecutivos de mejora. Estabilidad de precios." },
    callout: "Por primera vez en años, los salarios le ganan a la inflación. 15 meses consecutivos de recuperación del poder adquisitivo.",
    gradient: "linear-gradient(135deg, #e65100, #f57c00)",
    imgBefore: "/images/logros/13-antes.png",
    imgAfter: "/images/logros/13-despues.png",
    altBefore: "Billete de mil pesos arrugado, salarios licuados",
    altAfter: "Familia en supermercado con carrito lleno, poder adquisitivo",
    reverse: true,
  },
];

export const logrosSectionHeader = {
  sectionTitle: "LOGROS DE GESTIÓN",
  sectionIntro: "El 10 de diciembre de 2023, Argentina estaba en crisis terminal. La inflación corría al 1 % diario, el Banco Central tenía reservas negativas de USD 13.000 M, el déficit consolidado era de 15 % del PBI, y los indicadores sociales eran peores que en 2001 — la peor herencia de la historia. Este es el antes y el después de cada una de las batallas que dimos.",
} as const;
