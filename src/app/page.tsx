
import DashboardClient from "./DashboardClient";
import { getDataRPS } from "@/lib/rps-service";

export const revalidate = 3600;

export default async function Home() {
  const data = await getDataRPS();

  return <DashboardClient initialData={data} />;
}
