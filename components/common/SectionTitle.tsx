type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({
  children,
}: SectionTitleProps) {
  return (
    <div className="my-20 text-center">

      <div className="mx-auto mb-8 h-px w-24 bg-[#B18A46]" />

      <h2 className="text-4xl font-light tracking-[0.08em] text-stone-800">
        {children}
      </h2>

      <div className="mx-auto mt-8 h-px w-24 bg-[#B18A46]" />

    </div>
  );
}