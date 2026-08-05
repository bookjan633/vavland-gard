import HeroBanner from "@/components/common/HeroBanner";
import IntroSection from "@/components/sections/IntroSection";
import FactsSection from "@/components/sections/FactsSection";
import FeatureImage from "@/components/sections/FeatureImage";
import GallerySection from "@/components/sections/GallerySection";
import type { PortableTextBlock } from "@portabletext/types";

import { Building } from "@/types/building";
import { getGalleryImages } from "@/lib/getGalleryImages";

type CmsPage = {

  title?: string;

  lead?: string;

  heroSubtitle?: string;

  body?: PortableTextBlock[];

  captions?: string[];

};

type BuildingPageProps = {
  building: Building;
  cmsPage?: CmsPage | null;
};

export default async function BuildingPage({
  building,
  cmsPage,
}: BuildingPageProps) {
  // Läs automatiskt alla bilder från byggnadens bildmapp
  const images = getGalleryImages(building.galleryFolder);

  // Koppla ihop bilderna med bildtexterna
  const galleryItems = images.map((image, index) => ({
    image,
    title: building.gallery[index]?.title ?? "",
    caption:
      cmsPage?.captions?.[index] ??
      building.gallery[index]?.caption ??
      "",
    text: building.gallery[index]?.text ?? "",
  }));
  console.log(galleryItems);

  // Använd Sanity om värden finns, annars fallback till TypeScript
  const hero = {
    ...building.page.hero,
    title: cmsPage?.title ?? building.page.hero.title,
    subtitle: cmsPage?.heroSubtitle ?? building.page.hero.subtitle,
  };

  const intro = {
    ...building.page.intro,
    title: cmsPage?.title ?? building.page.intro.title,
    intro: cmsPage?.lead ?? building.page.intro.intro,
  };

  return (
    <main className="min-h-screen bg-[#F7F3EC]">
      <HeroBanner {...hero} />

      <IntroSection {...intro} />

      <FactsSection facts={building.facts} />

      <FeatureImage{...building.page.featureImage}body={cmsPage?.body}
      />

      <GallerySection items={galleryItems} />
    </main>
  );
}