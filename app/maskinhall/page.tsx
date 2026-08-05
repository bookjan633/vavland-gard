import BuildingPage from "@/components/buildings/BuildingPage";

import { maskinhall } from "@/data/buildings/maskinhall";

import { client } from "@/sanity/lib/client";

import { pageQuery } from "@/sanity/lib/queries";

export default async function Page() {

  const cmsPage = await client.fetch(pageQuery, {

    slug: "maskinhall",

  });

  return (

    <BuildingPage

      building={maskinhall}

      cmsPage={cmsPage}

    />

  );

}