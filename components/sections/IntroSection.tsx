type IntroSectionProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  text?: string;
};

export default function IntroSection({
  eyebrow,
  title,
  intro,
  text,
}: IntroSectionProps) {
  return (
    <section className="bg-[#F7F3EC] py-24">
      <div className="mx-auto max-w-4xl px-8 text-center">
        {eyebrow && (
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            {eyebrow}
          </p>
        )}

        <h2 className="mt-6 text-5xl font-light text-[#2F2F2F]">
          {title}
        </h2>

        <div className="mx-auto mt-8 h-px w-24 bg-[#b49b63]" />

        <p className="mt-10 text-xl leading-9 text-stone-700">
          {intro}
        </p>

        {text && (
          <p className="mt-8 text-lg leading-8 text-stone-600 whitespace-pre-line">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}