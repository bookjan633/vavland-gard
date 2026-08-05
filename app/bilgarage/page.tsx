export const dynamic = "force-dynamic";

export const fetchCache = "force-no-store";

import BuildingPage from "@/components/buildings/BuildingPage";

import { bilgarage } from "@/data/buildings/bilgarage";

import { client } from "@/sanity/lib/client";

import { pageQuery } from "@/sanity/lib/queries";

export default async function Page() {

  const cmsPage = await client.fetch(pageQuery, {

    slug: "bilgarage",

  });

  return (

    <BuildingPage

      building={bilgarage}

      cmsPage={cmsPage}

    />

  );

}