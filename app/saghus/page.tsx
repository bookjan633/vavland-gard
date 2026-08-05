import BuildingPage from "@/components/buildings/BuildingPage";

import { saghus } from "@/data/buildings/saghus";

import { client } from "@/sanity/lib/client";

import { pageQuery } from "@/sanity/lib/queries";

export default async function Page() {

  const cmsPage = await client.fetch(pageQuery, {

    slug: "saghus",

  });

  return (

    <BuildingPage

      building={saghus}

      cmsPage={cmsPage}

    />

  );

}