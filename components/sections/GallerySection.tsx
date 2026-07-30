import Image from "next/image";

type GalleryItem = {
  image: string;
  title?: string;
  caption?: string;
  text?: string;
};

type GallerySectionProps = {

  items: GalleryItem[];

};

export default function GallerySection({
  items,
}: GallerySectionProps) {

  return (
    <section className="bg-[#F7F3EC] py-24">
      <div className="mx-auto max-w-7xl space-y-24 px-8">
        {items.map((item, index) => (
          <figure key={index}>
            <Image
              src={item.image}
              alt={item.caption || item.title || ""}
              width={1800}
              height={1200}
              className="w-full rounded-3xl object-cover shadow-2xl"
            />

            {item.title && (
              <h2 className="mt-8 text-center text-3xl font-light text-[#2F2F2F]">
                {item.title}
              </h2>
            )}

            {item.caption && (
              <figcaption className="mx-auto mt-6 max-w-4xl text-center text-lg italic leading-8 text-stone-600">
                {item.caption}
              </figcaption>
            )}

            {item.text && (
              <div className="mx-auto mt-8 max-w-4xl whitespace-pre-line text-lg leading-8 text-stone-700">
                {item.text}
              </div>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}