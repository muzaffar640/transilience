"use client";
import React, { useState, useEffect } from "react";
import LineChart from "./Chart/LineChart";
import PieChart from "./Chart/PieChart";
import DoughnutChart from "./Chart/DoughnutChart";
import BarChart from "./Chart/BarChart";
import Modal from "./Modal";
import { VulnerabilityData } from "../../types/VulnerabilityData";
import ChartCard from "./Card/ChartCard";
import {
  countAdvisoriesPerMonth,
  createDoughnutData,
  processDoughnutData,
  processPieData,
  createPieData,
  processHorizontalBarData,
  createHorizontalBarData,
  processAttackVectorData,
  createAttackVectorBarData,
  processThreatVectorDataForBarChart,
  createThreatVectorBarData,
} from "@/app/utils/utils";
import { ChartData } from "chart.js";

interface ClientDashboardProps {
  data: VulnerabilityData[];
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({ data }) => {
  const [selectedChart, setSelectedChart] = useState<JSX.Element | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lineData, setLineData] = useState<ChartData<"line">>();
  const [doughnutData, setDoughnutData] = useState<ChartData<"doughnut">>();
  const [pieData, setPieData] = useState<ChartData<"pie">>();
  const [verticalBarData, setVerticalBarData] = useState<ChartData<"bar">>();
  const [horizontalBarData, setHorizontalBarData] =
    useState<ChartData<"bar">>();
  const [threatVectorBarData, setThreatVectorBarData] =
    useState<ChartData<"bar">>();

  useEffect(() => {
    if (data) {
      const monthCounts = countAdvisoriesPerMonth(data);
      const labels = Object.keys(monthCounts);
      const advisoryCounts = Object.values(monthCounts);

      setLineData({
        labels: labels,
        datasets: [
          {
            label: "Number of Advisories",
            data: advisoryCounts,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
          },
        ],
      });

      const { vendorCounts, techCounts } = processDoughnutData(data);
      setDoughnutData(createDoughnutData(vendorCounts, techCounts));

      const techCountsForPie = processPieData(data);
      setPieData(createPieData(techCountsForPie));

      const { severityCounts, tacticCounts } = processHorizontalBarData(data);
      setVerticalBarData(createHorizontalBarData(severityCounts, tacticCounts));

      const attackVectorCounts = processAttackVectorData(data);
      setHorizontalBarData(createAttackVectorBarData(attackVectorCounts));

      const threatVectorCounts = processThreatVectorDataForBarChart(data);
      setThreatVectorBarData(createThreatVectorBarData(threatVectorCounts));
    }
  }, [data]);

  const openModal = (chart: JSX.Element) => {
    setSelectedChart(chart);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedChart(null);
    setIsModalOpen(false);
  };

  if (
    !lineData ||
    !doughnutData ||
    !pieData ||
    !verticalBarData ||
    !horizontalBarData ||
    !threatVectorBarData
  ) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1 className="text-left text-xl md:text-2xl lg:text-2xl font-bold my-4 text-[#924cf4]">
          Your Vendor Advisory Recency, Products, and Severities
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ChartCard
            title="Monthly Advisory Count"
            onMaximize={() => openModal(<LineChart data={lineData} />)}
          >
            <LineChart data={lineData} />
          </ChartCard>
          <ChartCard
            title="Advisory by Vendor and Technology"
            onMaximize={() => openModal(<DoughnutChart data={doughnutData} />)}
          >
            <DoughnutChart data={doughnutData} />
          </ChartCard>
          <ChartCard
            title="Count of Advisories by Technology"
            onMaximize={() => openModal(<PieChart data={pieData} />)}
          >
            <PieChart data={pieData} />
          </ChartCard>
        </div>
      </div>
      <div>
        <h1 className="text-left text-xl md:text-2xl lg:text-2xl font-bold my-4 text-[#924cf4]">
          Your Vendor Advisory Analysis by Mitre Attack Tactics and Threat
          Vectors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ChartCard
            title="Advisory by Severity and Mitre Attack Tactic"
            onMaximize={() =>
              openModal(
                <BarChart data={verticalBarData} options={{ indexAxis: "x" }} />
              )
            }
          >
            <BarChart data={verticalBarData} options={{ indexAxis: "x" }} />
          </ChartCard>
          <ChartCard
            title="Advisory by Attack Vector"
            onMaximize={() =>
              openModal(
                <BarChart
                  data={horizontalBarData}
                  options={{
                    indexAxis: "y",
                    plugins: {
                      legend: { display: false },
                    },
                  }}
                />
              )
            }
          >
            <BarChart
              data={horizontalBarData}
              options={{
                indexAxis: "y",
                plugins: {
                  legend: { display: false },
                },
              }}
            />
          </ChartCard>
          <ChartCard
            title="Advisory by Threat Vector"
            onMaximize={() =>
              openModal(
                <BarChart
                  data={threatVectorBarData}
                  options={{
                    indexAxis: "y",
                    plugins: {
                      legend: { display: false },
                    },
                  }}
                />
              )
            }
          >
            <BarChart
              data={threatVectorBarData}
              options={{
                indexAxis: "y",
                plugins: {
                  legend: { display: false },
                },
              }}
            />
          </ChartCard>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedChart}
      </Modal>
    </>
  );
};

export default ClientDashboard;
