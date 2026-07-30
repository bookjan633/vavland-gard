import BuildingPage from "@/components/buildings/BuildingPage";
import { bilgarage } from "@/data/buildings/bilgarage";

export default function Page() {
  return <BuildingPage building={bilgarage} />;
}