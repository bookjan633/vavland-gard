import BuildingPage from "@/components/buildings/BuildingPage";
import { nedreBostadshus } from "@/data/buildings/nedre-bostadshus";

export default function Page() {
  return <BuildingPage building={nedreBostadshus} />;
}