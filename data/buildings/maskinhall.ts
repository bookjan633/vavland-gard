import { Building } from "@/types/building";

export const maskinhall: Building = {
  page: {
    hero: {
      image: "/images/cards/maskinhall.jpg",
      eyebrow: "Vävland Gård",
      title: "MASKINHALL",
      subtitle:
        "En rymlig byggnad med stora möjligheter för maskiner, förvaring och verksamhet.",
      details: "Stor maskinhall med förråd på övervåningen • fem portar",
    },

    intro: {
      eyebrow: "Ekonomibyggnad",
      title: "Plats för både maskiner och framtidsidéer",
      intro:
        "Maskinhallen är en av gårdens viktigaste ekonomibyggnader och erbjuder generösa ytor för maskiner, redskap och annan utrustning.",

      text:
        "Den öppna planlösningen gör byggnaden flexibel för många olika användningsområden, från traditionell lantbruksverksamhet till hobby, verkstad eller lager.",
    },

    featureImage: {
      image: "/images/cards/maskinhall.jpg",
      alt: "Maskinhall",
      caption:
        "Den stora maskinhallen erbjuder god tillgänglighet och stora öppna ytor för maskiner, utrustning och förvaring.",
    },
  },

  facts: [
    {
      label: "Byggnadstyp",
      value: "Maskinhall med förråd",
      description: "Ekonomibyggnad med förråd på övre plan",
    },
    {
      label: "Yta",
      value: "304 m²",
      description: "Enkel in- och utfart",
    },
    {
      label: "Portar",
      value: "5",
      description: "Bredd: 3.5 meter Höjd: 3.7 meter",
    },
    {
      label: "Uppvärmning",
      value: "Borrad bergvärme",
      description: "Golvvärme",
    },
    {
      label: "Vatten/Avlopp",
      value: "Kommunalt",
      description: "",
    },
    {
      label: "Användning",
      value: "Flexibel",
      description: "Maskiner • Lager • Verkstad",
    },
  ],

  // Endast mappnamnet behövs
  galleryFolder: "maskinhall",

  // Bildtexter i samma ordning som bilderna
  gallery: [
    {
      title: "",
      caption: "Maskinhallen sedd från gårdsplanen.",
      text: "",
    },
    {
      title: "",
      caption: "Invändiga ytor med god plats för maskiner och utrustning.",
      text: "",
    },
    {
      title: "",
      caption: "Den öppna konstruktionen ger många användningsmöjligheter.",
      text: "",
    },
  ],
};