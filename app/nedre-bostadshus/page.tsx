export const dynamic = "force-dynamic";

export const fetchCache = "force-no-store";

import BuildingPage from "@/components/buildings/BuildingPage";

import { nedreBostadshus } from "@/data/buildings/nedre-bostadshus";

import { client } from "@/sanity/lib/client";

import { pageQuery } from "@/sanity/lib/queries";

export default async function Page() {

  const cmsPage = await client.fetch(pageQuery, {

    slug: "nedre-bostadshus",

  });

  return (

    <BuildingPage

      building={nedreBostadshus}

      cmsPage={cmsPage}

    />

  );

}