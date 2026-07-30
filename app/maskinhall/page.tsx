import BuildingPage from "@/components/buildings/BuildingPage";
import { maskinhall } from "@/data/buildings/maskinhall";

export default function Page() {
  return <BuildingPage building={maskinhall} />;
}