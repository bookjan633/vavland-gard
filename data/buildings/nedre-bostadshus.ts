import { Building } from "@/types/building";

export const nedreBostadshus: Building = {
  page: {
    hero: {
      image: "/images/cards/nedre-bostadshus.jpg",
      eyebrow: "Vävland Gård",
      title: "NEDRE BOSTADSHUS",
      subtitle:
        "Ett charmigt bostadshus med närhet till gårdens hjärta.",
      details: "1800-talet • ca 160 m² • 6 rum",
    },

    intro: {
      eyebrow: "Bostadshuset",
      title: "Ett hus med möjligheter",
      intro:
        "Det nedre bostadshuset erbjuder ett trivsamt boende med närhet till gårdens övriga byggnader och den omgivande naturen.",

      text:
        "Huset lämpar sig både som permanentbostad och som generationsboende eller gästhus. Den lugna miljön och den klassiska gårdskaraktären skapar en inbjudande atmosfär.",
    },

    featureImage: {
      image: "/images/cards/nedre-bostadshus.jpg",
      alt: "Nedre bostadshuset",
      caption:
        "Det nedre bostadshuset ligger vackert placerat med närhet till gårdens öppna ytor och övriga byggnader. Renoveringar: Fasad ommålat 2025, Hall till övre våningen 2025, Badrum övre våningen totalrenoverat 2023, Nytt balkonggolv samt balkongräcke 2026.",
    },
  },

  facts: [
    {
      label: "Byggnadstyp",
      value: "2-plansvilla",
      description: "timmerstomme med delvis källare och pannrum",
    },
    {
      label: "Boyta",
      value: "ca 325 m²",
      description: "Praktisk planlösning",
    },
    {
      label: "Rum",
      value: "9",
      description: "Flera användningsmöjligheter",
    },
    {
      label: "Uppvärmning",
      value: "Jordvärme",
      description: "samt Vedpanna och ackumulatortankar",
    },
    {
      label: "Vatten & Avlopp",
      value: "Kommunalt",
      description: "",
    },
  ],

  // Endast mappnamnet behövs
  galleryFolder: "nedre-bostadshus",

  // Bildtexter i samma ordning som bilderna
  gallery: [
    {
      title: "",
      caption: "Nedre bostadshuset sett från gårdsplanen.",
      text: "",
    },
    {
      title: "",
      caption: "Den omgivande miljön ger huset en harmonisk inramning.",
      text: "",
    },
    {
      title: "",
      caption: "En byggnad med många möjligheter.",
      text: "",
    },
  ],
};