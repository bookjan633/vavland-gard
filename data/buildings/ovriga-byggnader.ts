import { Building } from "@/types/building";

export const ovrigaByggnader: Building = {
  page: {
    hero: {
      image: "/images/cards/ovriga-byggnader.jpg",
      eyebrow: "Vävland Gård",
      title: "ÖVRIGA BYGGNADER",
      subtitle: "Kompletterande byggnader som bidrar till gårdens helhet.",
      details: "Komplement • Gårdsmiljö • Möjligheter",
    },

    intro: {
      eyebrow: "Fastigheten",
      title: "En komplett gårdsmiljö",
      intro:
        "Utöver bostadshusen och de större ekonomibyggnaderna finns flera kompletterande byggnader som tillsammans skapar en funktionell och levande gård.",

      text:
        "Dessa byggnader erbjuder ytterligare förvaringsmöjligheter och praktiska funktioner samtidigt som de förstärker gårdens historiska karaktär och charm.",
    },

    featureImage: {
      image: "/images/cards/ovriga-byggnader.jpg",
      alt: "Övriga byggnader",
      caption:
        "Kompletterande byggnader som bidrar till gårdens karaktär och användbarhet.",
    },
  },

  facts: [
    {
      label: "Kategori",
      value: "Komplement",
      description: "Flera mindre byggnader",
    },
    {
      label: "Användning",
      value: "Varierad",
      description: "Förvaring och praktiska funktioner",
    },
    {
      label: "Miljö",
      value: "Historisk gård",
      description: "Väl sammanhållen helhet",
    },
    {
      label: "Potential",
      value: "Stor",
      description: "Kan anpassas efter behov",
    },
  ],

  // Endast mappnamnet behövs
  galleryFolder: "ovriga-byggnader",

  // Bildtexter i samma ordning som bilderna
  gallery: [
    {
      title: "",
      caption: "En av gårdens kompletterande byggnader.",
      text: "",
    },
    {
      title: "",
      caption: "Detaljer som förstärker gårdens karaktär.",
      text: "",
    },
    {
      title: "",
      caption: "Funktionella byggnader med många användningsområden.",
      text: "",
    },
  ],
};