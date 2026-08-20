import Image from "next/image";
import Link from "next/link";

type SideCardProps = {
  title: string;
  image: string;
  href: string;
};

export default function SideCard({
  title,
  image,
  href,
}: SideCardProps) {
  return (
    <Link
      href={href}
      className="
group
relative
block
overflow-hidden
rounded-2xl
shadow-md
transition-all
duration-500
hover:-translate-y-1
hover:shadow-2xl
active:translate-y-[1px]
"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Mörk toning */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Titel */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-xl font-semibold tracking-wide text-white">
            {title}
          </h3>
          <p
  className="
    mt-2
    text-sm
    font-medium
    tracking-[0.2em]
    text-white
    transition-transform
    duration-300
    group-hover:translate-x-1
  "
>
  Läs mer →
</p>
        </div>
      </div>
    </Link>
  );
}