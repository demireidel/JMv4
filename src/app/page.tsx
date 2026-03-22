import { Hero } from "@/components/home/Hero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { PhotoStrip } from "@/components/home/PhotoStrip";
import { SectionPreviews } from "@/components/home/SectionPreviews";
import { stripPhotos1 } from "@/data/photos";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <PhotoStrip photos={stripPhotos1} />
      <SectionPreviews />
    </>
  );
}
