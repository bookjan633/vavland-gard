import { Building } from "@/types/building";

export const page = {
  hero: {
    image: "/images/cards/ovre-bostadshus.jpg",
    eyebrow: "Vävland Gård",
    title: "Bostadshus Övre Gården",
    subtitle:
      "Välkommen till Vävlandsgårds Övre mangårdsbyggnad – ett hem där gedigen historia möter modern komfort. Här har en total invändig renovering skapat ett ljust och funktionellt boende med generösa sällskapsytor, samtidigt som husets själ och karaktär har bevarats.",
    details: "1800-talet • ca 287 m² • 7 rum • 4-5 sovrum",
  },

  intro: {
    eyebrow: "Huvudbyggnaden",
    title: "Ett hem med historia",
    intro:
      "Den vackra mangårdsbyggnaden på Övre Gården erbjuder ett rymligt och modernt boende där gårdens historiska charm möter dagens moderna komfort. Invändigt har huset genomgått en totalrenovering, vilket skapat ett hem med hög modern standard samtidigt som den ursprungliga karaktären har bevarats. Allt trä i huset såsom golv, tak, golvlister, taklister, träpanel, fönsterfoder etc. – är sågat och hyvlat på gården av egen skog.",

    text:
      "",
  },

  featureImage: {
    image: "/images/cards/ovre-bostadshus.jpg",
    alt: "Övre bostadshuset",
    caption:
      "Husets huvudentré nås via en stor och inbjudande glasveranda som leder in till en rymlig hall med generös takhöjd och klinkergolv. Entréplanet rymmer ett ljust vardagsrum med anslutande matrum, ett modernt kök, ett sovrum, badrum med dusch samt en praktisk groventré med tvättstuga. Hela entréplanet har vattenburen golvvärme som ger en behaglig komfort. Från den högt belägna huvudbyggnaden öppnar sig vyer över gårdens marker och det omgivande landskapet – en plats där årstidernas skiftningar blir en naturlig del av vardagen.",
  },
};

export const facts = [
  {
    label: "Byggnadstyp",
    value: "2-plansvilla",
    description: "timmerstomme, med delvis källare och pannrum",
  },
  {
    label: "Boyta",
    value: "ca 287 m²",
    description: "Generösa sällskapsytor",
  },
  {
    label: "Rum",
    value: "8",
    description: "Flexibel planlösning",
  },
  {
    label: "Uppvärmning",
    value: "Bergvärme",
    description: "borrad energibrunn",
  },
  {
    label: "Vatten / Avlopp",
    value: "Borrad brunn",
    description: "bergvatten",
  },
  {
    label: "Avlopp",
    value: "Kommunalt avlopp",
    description: "bergvatten",
  },
  {
    label: "Tomt",
    value: "Trädgårdstomt med uteplats",
    description: "",
  },
  {
    label: "Renoveringar",
    value: "Totalrenoverat 20XX",
    description: "",
  },
];

export const gallery = [
  {
    title: "",
    caption: "Övre bostadshuset sett från infarten.",
    text: "",
  },
  {
    title: "",
    caption: "Entrésidan med utsikt över gårdens öppna marker.",
    text: "",
  },
  {
    title: "",
    caption: "Den klassiska fasaden med bevarade detaljer.",
    text: "",
  },
];

export const ovreBostadshus: Building = {
  page,
  facts,

  // Endast mappnamnet behövs
  galleryFolder: "ovre-bostadshus",

  // Bildtexterna
  gallery,
};