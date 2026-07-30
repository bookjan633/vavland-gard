import BuildingPage from "@/components/buildings/BuildingPage";
import { forradsbyggnad } from "@/data/buildings/forradsbyggnad";

export default function Page() {
  return <BuildingPage building={forradsbyggnad} />;
}