import BuildingPage from "@/components/buildings/BuildingPage";
import { ovrigaByggnader } from "@/data/buildings/ovriga-byggnader";

export default function Page() {
  return <BuildingPage building={ovrigaByggnader} />;
}