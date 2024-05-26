"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

import { ChartData, ChartOptions } from "chart.js/auto";

interface DoughnutChartProps {
  data: ChartData<"doughnut">;
  options?: ChartOptions<"doughnut">;
}

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
