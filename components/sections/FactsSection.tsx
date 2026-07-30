type Fact = {
  label: string;
  value: string;
  description?: string;
};

type FactsSectionProps = {
  facts: Fact[];
};

export default function FactsSection({
  facts,
}: FactsSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="rounded-3xl border border-stone-200 bg-[#F7F3EC] p-10 text-center shadow-sm"
            >
              <p className="text-sm uppercase tracking-[0.30em] text-stone-500">
                {fact.label}
              </p>

              <h3 className="mt-4 text-4xl font-light text-[#294434]">
                {fact.value}
              </h3>

              {fact.description && (
                <p className="mt-3 text-stone-600">
                  {fact.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}