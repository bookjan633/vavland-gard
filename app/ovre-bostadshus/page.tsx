import BuildingPage from "@/components/buildings/BuildingPage";
import { ovreBostadshus } from "@/data/buildings/ovre-bostadshus";

import { client } from "@/sanity/lib/client";
import { pageQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const cmsPage = await client.fetch(pageQuery, {
    slug: "ovre-bostadshus",
  });

  console.log(cmsPage);

  return (

  <BuildingPage

    building={ovreBostadshus}

    cmsPage={cmsPage}

  />

);
}