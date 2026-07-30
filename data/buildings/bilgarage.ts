import { Building } from "@/types/building";

export const bilgarage: Building = {
  page: {
    hero: {
      image: "/images/cards/bilgarage.jpg",
      eyebrow: "Vävland Gård",
      title: "BILGARAGE",
      subtitle:
        "Ett rymligt garage med plats för fordon, maskiner och förvaring.",
      details: "Garage • Förråd • Flexibel användning",
    },

    intro: {
      eyebrow: "Ekonomibyggnad",
      title: "Praktiskt och mångsidigt",
      intro:
        "Bilgaraget erbjuder gott om utrymme för både personbilar, mindre maskiner och förvaring. Byggnaden är lättillgänglig från gårdsplanen och kompletterar gårdens övriga ekonomibyggnader.",

      text:
        "Utöver garagefunktion lämpar sig byggnaden även som verkstad, hobbylokal eller lager. Den flexibla utformningen gör att den enkelt kan anpassas efter framtida behov.",
    },

    featureImage: {
      image: "/images/cards/bilgarage.jpg",
      alt: "Bilgarage",
      caption:
        "Bilgaraget erbjuder praktiska ytor för både fordon och annan utrustning.",
    },
  },

  facts: [
    {
      label: "Typ",
      value: "Garage",
      description: "Ekonomibyggnad",
    },
    {
      label: "Kapacitet",
      value: "Flera fordon",
      description: "Rymliga ytor",
    },
    {
      label: "Användning",
      value: "Flexibel",
      description: "Garage • Verkstad • Förråd",
    },
    {
      label: "Läge",
      value: "Gårdsplan",
      description: "Lättillgängligt",
    },
  ],

  // Endast mappnamnet behövs
  galleryFolder: "bilgarage",

  // Bildtexter i samma ordning som bilderna
  gallery: [
    {
      title: "",
      caption: "Bilgaraget sett från gårdsplanen.",
      text: "",
    },
    {
      title: "",
      caption: "Invändiga ytor med plats för både fordon och utrustning.",
      text: "",
    },
    {
      title: "",
      caption: "Byggnaden erbjuder flera möjliga användningsområden.",
      text: "",
    },
  ],
};