import BuildingPage from "@/components/buildings/BuildingPage";
import { ovreBostadshus } from "@/data/buildings/ovre-bostadshus";

export default function Page() {
  return <BuildingPage building={ovreBostadshus} />;
}