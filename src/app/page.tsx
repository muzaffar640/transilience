import React from "react";
import { VulnerabilityData } from "../../types/VulnerabilityData";
import ClientDashboard from "../components/ClientDashboard";

export default async function HomePage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || ""}/api/vendorsData`
  );
  const data: VulnerabilityData[] = await res.json();

  return (
    <div className="px-6 md:px-10 lg:px-14">
      <ClientDashboard data={data} />
    </div>
  );
}
