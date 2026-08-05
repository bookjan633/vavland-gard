export const dynamic = "force-dynamic";

export const fetchCache = "force-no-store";

import BuildingPage from "@/components/buildings/BuildingPage";

import { forradsbyggnad } from "@/data/buildings/forradsbyggnad";

import { client } from "@/sanity/lib/client";

import { pageQuery } from "@/sanity/lib/queries";

export default async function Page() {

  const cmsPage = await client.fetch(pageQuery, {

    slug: "forradsbyggnad",

  });

  return (

    <BuildingPage

      building={forradsbyggnad}

      cmsPage={cmsPage}

    />

  );

}