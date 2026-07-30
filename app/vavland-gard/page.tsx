import Link from "next/link";

import HeroBanner from "@/components/common/HeroBanner";
import PageIntro from "@/components/common/PageIntro";
import FeatureSection from "@/components/common/FeatureSection";

export default function VavlandGardPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EC]">

      <HeroBanner
        image="/images/hero/hero.jpg"
        title="VÄVLAND GÅRD"
        subtitle="Två sekel av historia"
        eyebrow="Sedan början av 1800-talet"
      />

      <PageIntro
        title="Två sekel av historia"
        lead="Vävland Gård är en plats där historien fortfarande lever. Omgiven av öppna landskap, skogar och ett rikt kulturlandskap erbjuder gården en ovanlig kombination av tidlös charm och framtida möjligheter."
      >
        <p>
          Här finns flera bostadshus, stora ekonomibyggnader,
          generösa markområden och en miljö som under generationer
          utvecklats med omsorg. Fastigheten lämpar sig lika väl som
          privat bostad, generationsboende eller för den som vill
          utveckla verksamhet på landsbygden.
        </p>

        <blockquote className="border-l-4 border-[#B18A46] pl-8 text-3xl italic text-stone-700">
          "En plats där historien möter framtiden."
        </blockquote>
      </PageIntro>

      <FeatureSection
        title="Historien"
        text="Vävland Gård har utvecklats under mer än två sekel och bär fortfarande spår av de människor som levt och verkat här. Byggnader, landskap och miljö berättar tillsammans historien om en levande gård där tradition och framtid möts."
        image="/images/hero/hero.jpg"
        imageAlt="Historien om Vävland Gård"
        href="/historien"
        buttonText="Läs historien"
        imageRight
      />

      <FeatureSection
        title="Bostadshuset"
        text="Gårdens bostadshus erbjuder generösa sällskapsytor, klassiska detaljer och en varm atmosfär. Här möts traditionell byggnadskultur och moderna möjligheter för ett bekvämt boende."
        image="/images/hero/hero.jpg"
        imageAlt="Bostadshuset"
        href="/bostadshuset"
        buttonText="Utforska bostadshuset"
        imageRight={false}
      />

      <FeatureSection
        title="Ekonomibyggnader"
        text="Fastigheten omfattar flera stora ekonomibyggnader med stor utvecklingspotential. Byggnaderna lämpar sig för såväl traditionell användning som nya verksamheter."
        image="/images/hero/hero.jpg"
        imageAlt="Ekonomibyggnader"
        href="/ekonomibyggnader"
        buttonText="Utforska byggnaderna"
        imageRight
      />

      <FeatureSection
        title="Mark & Skog"
        text="De generösa markområdena erbjuder ett varierat landskap med öppna ytor, skog och natur. Här finns möjligheter för både rekreation och framtida utveckling."
        image="/images/hero/hero.jpg"
        imageAlt="Mark och skog"
        href="/mark-skog"
        buttonText="Utforska markerna"
        imageRight={false}
      />

      <FeatureSection
        title="Livet på gården"
        text="Vävland Gård erbjuder en livsstil där lugn, natur och historia samspelar. Här finns plats för familjeliv, företagande eller ett liv närmare naturen."
        image="/images/hero/hero.jpg"
        imageAlt="Livet på gården"
        href="/livet-pa-garden"
        buttonText="Upptäck livet på gården"
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