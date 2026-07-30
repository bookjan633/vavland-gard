import { Building } from "@/types/building";

export const mark: Building = {
  page: {
    hero: {
      image: "/images/cards/mark.jpg",
      eyebrow: "Vävland Gård",
      title: "MARK",
      subtitle: "Produktiv mark med stora möjligheter.",
      details: "Skogsmark • Åkermark • Natur",
    },

    intro: {
      eyebrow: "Fastigheten",
      title: "Natur och möjligheter",
      intro:
        "Fastigheten omfattar både åkermark, skogsmark och öppna naturytor som tillsammans skapar en attraktiv och varierad miljö.",

      text:
        "Marken lämpar sig för jordbruk, djurhållning, rekreation eller annan verksamhet där närheten till naturen är en tillgång.",
    },

    featureImage: {
      image: "/images/cards/mark.jpg",
      alt: "Mark",
      caption: "Fastigheten erbjuder stora sammanhängande markområden.",
    },
  },

  facts: [
    {
      label: "Markslag",
      value: "Blandad",
      description: "Åker och skog",
    },
    {
      label: "Användning",
      value: "Flexibel",
      description: "Jordbruk och rekreation",
    },
    {
      label: "Miljö",
      value: "Naturnära",
      description: "Lugn omgivning",
    },
    {
      label: "Potential",
      value: "Stor",
      description: "Flera användningsområden",
    },
  ],

  // Endast mappnamnet behövs
  galleryFolder: "mark",

  // Bildtexter i samma ordning som bilderna
  gallery: [
    {
      title: "",
      caption: "Öppna marker.",
      text: "",
    },
    {
      title: "",
      caption: "Skogsområden.",
      text: "",
    },
    {
      title: "",
      caption: "Fastighetens varierade natur.",
      text: "",
    },
  ],
};