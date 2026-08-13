export default function MainShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        {/* Vänster */}
        <div className="space-y-6">
          <div className="rounded-xl bg-white shadow p-6 h-40">
            <h3 className="font-semibold text-xl">Bostäder</h3>
          </div>

          <div className="rounded-xl bg-white shadow p-6 h-40">
            <h3 className="font-semibold text-xl">Maskinhall</h3>
          </div>
        </div>

        {/* Mitten */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/hero/hero2.jpg"
            alt="Vävland Gård"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Höger */}
        <div className="space-y-6">
          <div className="rounded-xl bg-white shadow p-6 h-40">
            <h3 className="font-semibold text-xl">Historia</h3>
          </div>

          <div className="rounded-xl bg-white shadow p-6 h-40">
            <h3 className="font-semibold text-xl">Mark & Skog</h3>
          </div>
        </div>

      </div>
    </section>
  );
}