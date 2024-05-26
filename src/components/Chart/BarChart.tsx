"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { ChartData, ChartOptions } from "chart.js/auto";

interface BarChartProps {
  data: ChartData<"bar">;
  options?: ChartOptions<"bar">;
}

const defaultOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
  return (
    <div className="w-full h-full">
      <Bar data={data} options={{ ...defaultOptions, ...options }} />
    </div>
  );
};

export default BarChart;
