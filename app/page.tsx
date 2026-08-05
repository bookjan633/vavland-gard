import HomeGrid from "@/components/homepage/HomeGrid";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const homePage = await client.fetch(homePageQuery);

  return <HomeGrid homePage={homePage} />;
}