import Link from "next/link";

import HeroBanner from "@/components/common/HeroBanner";
import PageIntro from "@/components/common/PageIntro";
import FeatureSection from "@/components/common/FeatureSection";

export default function VavlandGardPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EC]">

      <HeroBanner
  image="/images/hero/hero2.jpg"
  title="VÄVLAND GÅRD"
  subtitle="Två sekel av historia"
  eyebrow="Sedan början av 1800-talet"
  saleBadge
/>

      <PageIntro
        title="Två sekel av historia"
        lead="Vävland Gård har vuxit fram under mer än 200 år och har sedan dess förvaltats av samma släkt genom generationer."
      >
        <p>
          Den långsiktiga omsorgen märks än idag i de välbevarade byggnaderna, det gedigna hantverket och den sammanhållna gårdsmiljön. Här möts historia och nutid på ett sätt som skapar en genuin känsla och ett kulturarv som fortfarande lever vidare.
        </p>

        <blockquote className="border-l-4 border-[#B18A46] pl-8 text-3xl italic text-stone-700">
          "En plats där historien möter framtiden."
        </blockquote>
      </PageIntro>

      <FeatureSection
        title="Boenden"
        text="Vävland Gård erbjuder fem boenden fördelade på två bostadshus och två fristående lägenheter, vilket skapar ovanligt stor flexibilitet för familjeliv, generationsboende, gäster eller uthyrning. Husen präglas av gedigna materialval och ett omsorgsfullt hantverk, där virke från den egna skogen har sågats och förädlats i gårdens eget såghus och snickeri. Resultatet är trivsamma hem med en varm och genuin karaktär."
        image="/images/gallery/boenden.jpg"
        imageAlt="Historien om Vävland Gård"
        href="/historien"
        buttonText=""
        imageRight
      />

      <FeatureSection
        title="Ekonomibyggnader"
        text="De många ekonomibyggnaderna är en av Vävland Gårds stora tillgångar. Maskinhall, garagebyggnad, såghus, förråd, historiska härbren och övriga byggnader erbjuder tillsammans en ovanligt komplett anläggning med stora möjligheter för företagande, skogsbruk, entreprenad, hantverk, förvaring eller annan verksamhet. Här finns både funktion, kvalitet och utrymme att utveckla nya idéer."
        image="/images/gallery/Ekonomibyggnader.jpg"
        imageAlt="Bostadshuset"
        href="/bostadshuset"
        buttonText=""
        imageRight={false}
      />

      <FeatureSection
        title="Mark & omgivningar"
        text="Fastigheten omfattar skogsmark, öppna gräsytor och en rofylld gårdsmiljö där naturen alltid finns nära. Samtidigt nås Timrå centrum, Sundsvall, Midlanda Airport, E4, tågstation, skolor och service inom bekvämt avstånd. Kombinationen av avskildhet och tillgänglighet gör Vävland Gård till en plats där det är enkelt att förena livskvalitet med arbete och vardag."
        image="/images/cards/mark.jpg"
        imageAlt="Ekonomibyggnader"
        href="/ekonomibyggnader"
        buttonText=""
        imageRight
      />

      <FeatureSection
        title="En gård – många möjligheter"
        text="Vävland Gård erbjuder en ovanlig kombination av historia, boende, verksamhet och utvecklingsmöjligheter. Med fem boenden, omfattande ekonomibyggnader och en väl sammanhållen gårdsmiljö finns utmärkta 
förutsättningar för generationsboende, uthyrning, företagande, skogsbruk, entreprenad eller annan verksamhet. Samtidigt är detta en plats för den som söker lugn, närhet till naturen och friheten att forma gården efter egna visioner."
        image="/images/hero/hero2.jpg"
        imageAlt="Livet på gården"
        href="/livet-pa-garden"
        buttonText=""
      imageRight={false}
      />
      <FeatureSection
        title="Livet på Vävland Gård"
        text="Livet på Vävland Gård handlar om mer än byggnader och mark. Här finns utrymme att leva i ett lugnare tempo, skapa, utveckla och förverkliga idéer i en miljö där natur, historia och framtid samspelar. Efter mer än två sekel av omsorg och utveckling väntar nu ett nytt kapitel – en möjlighet för nästa ägare att ta vid och låta gårdens historia fortsätta.
"
        image="/images/ovre-bostadshus/ovre19.jpg"
        imageAlt="Livet på gården"
        href="/livet-pa-garden"
        buttonText=""
        imageRight
      />

      <section className="mx-auto max-w-6xl px-8 pb-24">
        <div className="rounded-3xl bg-white p-12 shadow-lg">

          <h3 className="text-center text-3xl font-light">
            Utforska gården
          </h3>

          <p className="mt-6 text-center text-lg text-stone-600">
            Fördjupa dig i gårdens historia, byggnader, marker och
            möjligheter genom att besöka respektive avsnitt.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/"
              className="rounded-full bg-[#294434] px-10 py-4 text-white transition hover:scale-105"
            >
              Tillbaka till startsidan
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}