import Image from "next/image";

type HeroBannerProps = {
  image: string;
  title: string;
  subtitle: string;
  eyebrow?: string;
  details?: string;
  saleBadge?: boolean;
};

export default function HeroBanner({
  image,
  title,
  subtitle,
  eyebrow,
  details,
  saleBadge,
}: HeroBannerProps) {

  return (
    <section className="relative h-[72vh] min-h-[520px] max-h-[820px] overflow-hidden">

      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Mörk toning */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Extra toning nedtill */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Text */}
      <div className="absolute inset-0 flex items-end">

        <div className="mx-auto w-full max-w-7xl px-10 pb-20 text-white">

          {eyebrow && (
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-stone-200">
              {eyebrow}
            </p>
          )}
          {saleBadge && (
  <div className="mb-6">
    <span className="border-y border-white/50 py-2 text-sm font-medium uppercase tracking-[0.45em] text-white">
      Till salu
    </span>
  </div>
)}

          <h1 className="text-5xl font-light tracking-[0.14em] md:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl font-light leading-9 text-stone-100">
            {subtitle}
          </p>

          {details && (
            <>
              <div className="mt-8 h-px w-52 bg-white/40" />

              <p className="mt-6 text-base uppercase tracking-[0.22em] text-stone-200">
                {details}
              </p>
            </>
          )}

        </div>

      </div>

    </section>
  );
}