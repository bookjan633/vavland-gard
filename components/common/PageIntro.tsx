type PageIntroProps = {
  title: string;
  lead: string;
  children: React.ReactNode;
};

export default function PageIntro({
  title,
  lead,
  children,
}: PageIntroProps) {
  return (
    <section className="mx-auto max-w-5xl px-8 py-24">

      <h2 className="text-center text-4xl font-light text-stone-800">
        {title}
      </h2>

      <p className="mx-auto mt-12 max-w-4xl text-xl leading-9 text-stone-700">
        {lead}
      </p>

      <div className="mt-8 space-y-8 text-xl leading-9 text-stone-700">
        {children}
      </div>

    </section>
  );
  <section className="mx-auto my-24 max-w-6xl px-8">

  <SectionTitle>
    Historien
  </SectionTitle>

  <div className="grid items-center gap-14 lg:grid-cols-2">

    <div>

      <p className="text-lg leading-8 text-stone-700">
        Vävland Gård har utvecklats under mer än två sekel och bär
        fortfarande spår av de människor som levt och verkat här.
        Byggnader, landskap och miljö berättar tillsammans historien
        om en levande gård där tradition och framtid möts.
      </p>

      <Link
        href="/historien"
        className="mt-10 inline-flex rounded-full bg-[#294434] px-8 py-3 text-white transition hover:scale-105"
      >
        Läs historien →
      </Link>

    </div>

    <div className="overflow-hidden rounded-3xl shadow-xl">

      <Image
        src="/images/hero/hero.jpg"
        alt="Historien"
        width={900}
        height={600}
        className="object-cover transition duration-700 hover:scale-105"
      />

    </div>

  </div>

</section>
}