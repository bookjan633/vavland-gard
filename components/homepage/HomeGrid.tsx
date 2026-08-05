import Image from "next/image";
import Link from "next/link";
import SideCard from "./SideCard";
import { homepage, cards } from "../../data/homepage";

type HomePageData = {

  title?: string;

  lead?: string;

};

export default function HomeGrid({

  homePage,

}: {

  homePage?: HomePageData;

}) {
  const leftCards = cards.slice(0, 4);
  const rightCards = cards.slice(4, 8);

  return (
    <main className="min-h-screen bg-[#F7F3EC]">
      <section className="mx-auto max-w-[1700px] px-6 pt-8 pb-10">

        {/* Header */}
        <header className="mt-[80px] mb-10 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-stone-500">
            {homepage.tagline}
          </p>

          <h1 className="text-6xl font-semibold tracking-[0.08em] text-[#2F2F2F] md:text-7xl">
            {homePage?.title ?? homepage.title}
          </h1>

          <h2 className="mt-8 text-2xl font-light text-stone-700 md:text-3xl">
            {homepage.subtitle}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-600">
            {homePage?.lead ?? homepage.intro}
          </p>
        </header>

        {/* Tre kolumner */}
        <div className="home-layout">

          {/* Vänster kort */}
          <div className="space-y-6">
            {leftCards.map((card) => (
              <SideCard
                key={card.id}
                title={card.title}
                image={card.image}
                href={card.href}
              />
            ))}
          </div>

          {/* Hero */}
          <div className="mt-28 overflow-hidden rounded-3xl border border-white/50 bg-white shadow-xl">

            <Link
  href="/vavland-gard"
  className="group block overflow-hidden cursor-pointer"
>
  <div className="relative aspect-[16/10]">

    <Image
      src="/images/hero/hero.jpg"
      alt="Vävland Gård"
      fill
      priority
      className="
        object-cover
        transition-transform
        duration-700
        ease-out
        group-hover:scale-[1.04]
      "
    />

    {/* Mörk toning */}
    <div
      className="
        absolute
        inset-0
        bg-black/0
        transition-all
        duration-500
        group-hover:bg-black/25
      "
    />

    {/* Hover-text */}
    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        opacity-0
        transition-all
        duration-500
        group-hover:opacity-100
      "
    >
      <div className="text-center text-white">
        <h3 className="text-4xl font-light tracking-[0.15em]">
          VÄVLAND GÅRD
        </h3>

        <p className="mt-4 text-lg tracking-[0.2em] uppercase">
          Läs mer →
        </p>
      </div>
    </div>

  </div>
</Link>

            <div className="px-8 py-6">

              <blockquote className="text-center text-xl italic leading-relaxed text-stone-700 md:text-2xl">
                "{homepage.quote}"
              </blockquote>

              <div className="mt-10 flex justify-center">
                <Link
                  href="/kontakt"
                  className="rounded-full bg-[#294434] px-10 py-3 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-[#1f3327] hover:scale-105"
                >
                  {homepage.button}
                </Link>
              </div>

            </div>

          </div>

          {/* Höger kort */}
          <div className="space-y-8">
            {rightCards.map((card) => (
              <SideCard
                key={card.id}
                title={card.title}
                image={card.image}
                href={card.href}
              />
            ))}
          </div>

        </div>

      </section>
    </main>
  );
}