import { Building } from "@/types/building";

export const forradsbyggnad: Building = {
  page: {
    hero: {
      image: "/images/cards/forradsbyggnad.jpg",
      eyebrow: "Vävland Gård",
      title: "FÖRRÅDSBYGGNAD",
      subtitle: "Praktisk byggnad med goda förvaringsmöjligheter.",
      details: "Förråd • Lager • Ekonomibyggnad",
    },

    intro: {
      eyebrow: "Ekonomibyggnad",
      title: "Praktiska förvaringsytor",
      intro:
        "Förrådsbyggnaden erbjuder gott om plats för förvaring av maskiner, redskap, material och annan utrustning som hör gårdens verksamhet till.",

      text:
        "Byggnaden kan även användas som lager eller kombinerad arbets- och förvaringslokal beroende på framtida behov.",
    },

    featureImage: {
      image: "/images/cards/forradsbyggnad.jpg",
      alt: "Förrådsbyggnad",
      caption: "Flexibla förvaringsutrymmen i anslutning till gårdscentrum.",
    },
  },

  facts: [
    {
      label: "Typ",
      value: "Förråd",
      description: "Ekonomibyggnad",
    },
    {
      label: "Användning",
      value: "Lager",
      description: "Förvaring",
    },
    {
      label: "Placering",
      value: "Gårdscentrum",
      description: "Lättillgänglig",
    },
    {
      label: "Flexibilitet",
      value: "Hög",
      description: "Många användningsområden",
    },
  ],

  // Endast mappnamnet behövs
  galleryFolder: "forradsbyggnad",

  // Bildtexter i samma ordning som bilderna
  gallery: [
    {
      title: "",
      caption: "Exteriör.",
      text: "",
    },
    {
      title: "",
      caption: "Invändiga förvaringsytor.",
      text: "",
    },
    {
      title: "",
      caption: "Flexibla användningsmöjligheter.",
      text: "",
    },
  ],
};