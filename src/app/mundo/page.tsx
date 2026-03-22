import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { leaders, timeline, megaStats, tradeAgreements } from "@/data/mundo";
import { MundoContent } from "@/components/mundo/MundoContent";
import { mundoHeroImage } from "@/data/photos";

export const metadata: Metadata = {
  title: "Internacional",
  description:
    "Argentina en el mundo: acuerdos comerciales, relaciones bilaterales y posicionamiento global.",
};

export default function MundoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Argentina en el mundo"
        title="De país paria a"
        titleEmphasis="líder global"
        subtitle="En dos años, Argentina pasó de estar aislada del mundo a firmar los acuerdos comerciales más ambiciosos de su historia, atraer USD 55.000M en inversiones y construir alianzas con las principales potencias."
        backgroundImage={mundoHeroImage.src}
        backgroundAlt={mundoHeroImage.alt}
      />

      <MundoContent
        leaders={leaders}
        timeline={timeline}
        megaStats={megaStats}
        tradeAgreements={tradeAgreements}
      />
    </>
  );
}
