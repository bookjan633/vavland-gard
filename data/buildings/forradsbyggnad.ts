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
      label: "Byggnadstyp",
      value: "Förråd",
      description: "Ekonomibyggnad",
    },
    {
      label: "Yta",
      value: "182 m²",
      description: "Rymliga ytor",
    },
    {
      label: "Portar",
      value: "Fyra skjutdörrar",
      description: "Varav två sektioner med genomfart",
    },
    {
      label: "Uppvärmning",
      value: "Ej uppvärmt",
      description: "",
    },
    {
      label: "Användning",
      value: "Flexibel",
      description: "Förråd • Maskiner • Vedbod",
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