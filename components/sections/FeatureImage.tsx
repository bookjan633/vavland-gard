import Image from "next/image";

type FeatureImageProps = {
  image: string;
  alt: string;
  caption?: string;
};

export default function FeatureImage({
  image,
  alt,
  caption,
}: FeatureImageProps) {
  return (
    <section className="bg-[#F7F3EC] py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={image}
            alt={alt}
            width={1600}
            height={900}
            className="h-[650px] w-full object-cover"
          />
        </div>

        {caption && (
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-lg italic leading-8 text-stone-600">
              {caption}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}