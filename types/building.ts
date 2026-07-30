export type Hero = {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  details?: string;
};

export type Intro = {
  eyebrow?: string;
  title: string;
  intro: string;
  text?: string;
};

export type FeatureImage = {
  image: string;
  alt: string;
  caption?: string;
};

export type Fact = {
  label: string;
  value: string;
  description?: string;
};

// Bildfilen kommer automatiskt från mappen.
export type GalleryItem = {
  title?: string;
  caption?: string;
  text?: string;
};

export type Building = {
  page: {
    hero: Hero;
    intro: Intro;
    featureImage: FeatureImage;
  };

  facts: Fact[];

  galleryFolder: string;

  gallery: GalleryItem[];
};