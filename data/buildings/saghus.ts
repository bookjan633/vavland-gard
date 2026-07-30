import { Building } from "@/types/building";

export const saghus: Building = {
  page: {
    hero: {
      image: "/images/cards/saghus.jpg",
      eyebrow: "Vävland Gård",
      title: "SÅGHUS",
      subtitle:
        "Ett traditionellt såghus som vittnar om gårdens historia och tidigare verksamhet.",
      details: "Historisk byggnad • Hantverk • Kulturarv",
    },

    intro: {
      eyebrow: "Historisk byggnad",
      title: "En del av gårdens historia",
      intro:
        "Såghuset är en av gårdens mest karaktärsfulla byggnader och speglar en tid då virkeshantering och träbearbetning var en naturlig del av gårdslivet.",

      text:
        "Byggnaden har ett stort kulturhistoriskt värde och kan användas som förråd, verkstad, utställningslokal eller utvecklas vidare för nya ändamål samtidigt som dess ursprungliga karaktär bevaras.",
    },

    featureImage: {
      image: "/images/cards/saghus.jpg",
      alt: "Såghuset",
      caption:
        "Såghuset är en viktig del av Vävland Gårds historia och identitet.",
    },
  },

  facts: [
    {
      label: "Typ",
      value: "Såghus",
      description: "Historisk ekonomibyggnad",
    },
    {
      label: "Användning",
      value: "Flera möjligheter",
      description: "Verkstad • Förråd • Utställning",
    },
    {
      label: "Karaktär",
      value: "Traditionell",
      description: "Bevarad gårdsmiljö",
    },
    {
      label: "Kulturvärde",
      value: "Högt",
      description: "Del av gårdens historia",
    },
  ],

  // Endast mappnamnet behövs
  galleryFolder: "saghus",

  // Bildtexter i samma ordning som bilderna
  gallery: [
    {
      title: "",
      caption: "Såghuset sett från gårdsplanen.",
      text: "",
    },
    {
      title: "",
      caption: "Interiör med bevarade detaljer.",
      text: "",
    },
    {
      title: "",
      caption: "Byggnaden erbjuder många framtida möjligheter.",
      text: "",
    },
  ],
};