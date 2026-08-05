export const dynamic = "force-dynamic";

export const fetchCache = "force-no-store";

import BuildingPage from "@/components/buildings/BuildingPage";

import { ovrigaByggnader } from "@/data/buildings/ovriga-byggnader";

import { client } from "@/sanity/lib/client";

import { pageQuery } from "@/sanity/lib/queries";

export default async function Page() {

  const cmsPage = await client.fetch(pageQuery, {

    slug: "ovriga-byggnader",

  });

  return (

    <BuildingPage

      building={ovrigaByggnader}

      cmsPage={cmsPage}

    />

  );

}