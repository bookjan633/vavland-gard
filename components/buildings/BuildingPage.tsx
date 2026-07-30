import HeroBanner from "@/components/common/HeroBanner";
import IntroSection from "@/components/sections/IntroSection";
import FactsSection from "@/components/sections/FactsSection";
import FeatureImage from "@/components/sections/FeatureImage";
import GallerySection from "@/components/sections/GallerySection";

import { Building } from "@/types/building";
import { getGalleryImages } from "@/lib/getGalleryImages";

type BuildingPageProps = {
  building: Building;
};

export default async function BuildingPage({
  building,
}: BuildingPageProps) {
  // Läs automatiskt alla bilder från byggnadens bildmapp
  const images = getGalleryImages(building.galleryFolder);

  // Koppla ihop bilderna med bildtexterna
 const galleryItems = images.map((image, index) => ({
  image,
  title: building.gallery[index]?.title ?? "",
  caption: building.gallery[index]?.caption ?? "",
  text: building.gallery[index]?.text ?? "",
}));

  return (
    <main className="min-h-screen bg-[#F7F3EC]">
      <HeroBanner {...building.page.hero} />

      <IntroSection {...building.page.intro} />

      <FactsSection facts={building.facts} />

      <FeatureImage {...building.page.featureImage} />

      <GallerySection items={galleryItems} />
    </main>
  );
}