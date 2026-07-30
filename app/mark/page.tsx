import BuildingPage from "@/components/buildings/BuildingPage";
import { mark } from "@/data/buildings/mark";

export default function Page() {
  return <BuildingPage building={mark} />;
}