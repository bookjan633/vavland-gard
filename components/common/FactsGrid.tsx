type Fact = {
  value: string;
  label: string;
};

type FactsGridProps = {
  facts: Fact[];
};

export default function FactsGrid({
  facts,
}: FactsGridProps) {
  return (
    <section className="mx-auto my-24 max-w-6xl px-8">

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {facts.map((fact) => (
          <div
            key={fact.label}
            className="rounded-3xl border border-stone-200 bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-4xl font-light text-[#294434]">
              {fact.value}
            </div>

            <div className="mt-4 text-sm uppercase tracking-[0.18em] text-stone-500">
              {fact.label}
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}