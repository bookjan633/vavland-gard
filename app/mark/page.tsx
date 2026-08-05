export const dynamic = "force-dynamic";

export const fetchCache = "force-no-store";

import BuildingPage from "@/components/buildings/BuildingPage";

import { mark } from "@/data/buildings/mark";

import { client } from "@/sanity/lib/client";

import { pageQuery } from "@/sanity/lib/queries";

export default async function Page() {

  const cmsPage = await client.fetch(pageQuery, {

    slug: "mark",

  });

  return (

    <BuildingPage

      building={mark}

      cmsPage={cmsPage}

    />

  );

}