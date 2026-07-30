import BuildingPage from "@/components/buildings/BuildingPage";
import { saghus } from "@/data/buildings/saghus";

export default function Page() {
  return <BuildingPage building={saghus} />;
}