"use client";
import React, { useEffect, useState } from "react";
import { VulnerabilityData } from "../../types/VulnerabilityData";
import ClientDashboard from "../components/ClientDashboard";
import Loader from "../components/Loader/Loader";

const HomePage: React.FC = () => {
  const [data, setData] = useState<VulnerabilityData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
        const res = await fetch(`${apiUrl}/api/vendorsData`);

        if (!res.ok) {
          throw new Error(
            `HTTP error! Status: ${res.status} ${res.statusText}`
          );
        }

        const data: VulnerabilityData[] = await res.json();
        setData(data);
      } catch (error: any) {
        console.error("Failed to fetch data", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Failed to load data: {error}</div>;
  }

  if (!data) {
    return <div>Failed to load data</div>;
  }

  return (
    <div className="px-6 md:px-10 lg:px-14">
      <ClientDashboard data={data} />
    </div>
  );
};

export default HomePage;
