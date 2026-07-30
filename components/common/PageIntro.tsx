type PageIntroProps = {

  title: string;

  lead: string;

  children: React.ReactNode;

};

export default function PageIntro({

  title,

  lead,

  children,

}: PageIntroProps) {

  return (

    <section className="mx-auto max-w-5xl px-8 py-24">

      <h2 className="text-center text-4xl font-light text-stone-800">

        {title}

      </h2>

      <p className="mx-auto mt-12 max-w-4xl text-xl leading-9 text-stone-700">

        {lead}

      </p>

      <div className="mt-8 space-y-8 text-xl leading-9 text-stone-700">

        {children}

      </div>

    </section>

  );

}