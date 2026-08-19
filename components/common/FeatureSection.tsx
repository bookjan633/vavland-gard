import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";

type FeatureSectionProps = {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  href: string;
  buttonText: string;
  imageRight?: boolean;
};

export default function FeatureSection({
  title,
  text,
  image,
  imageAlt,
  href,
  buttonText,
  imageRight = true,
}: FeatureSectionProps) {
  return (
    <section className="mx-auto my-24 max-w-6xl px-8">

      <SectionTitle>{title}</SectionTitle>

      <div className="grid items-center gap-14 lg:grid-cols-2">

        {/* Bild vänster */}
        {!imageRight && (
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={image}
              alt={imageAlt}
              width={900}
              height={600}
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        )}

        {/* Text */}
        <div>
          <p className="text-lg leading-8 text-stone-700">
            {text}
          </p>

          {buttonText && (
  <Link
    href={href}
    className="rounded-full bg-[#294434] px-8 py-3 text-white transition hover:scale-105"
  >
    {buttonText}
  </Link>
)}
        </div>

        {/* Bild höger */}
        {imageRight && (
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={image}
              alt={imageAlt}
              width={900}
              height={600}
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        )}

      </div>

    </section>
  );
}