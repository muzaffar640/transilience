"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { ChartData, ChartOptions } from "chart.js/auto";

interface LineChartProps {
  data: ChartData<"line">;
  options?: ChartOptions<"line">;
}

const defaultOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const LineChart: React.FC<LineChartProps> = ({ data, options }) => {
  return (
    <div className="w-full h-full">
      <Line data={data} options={{ ...defaultOptions, ...options }} />
    </div>
  );
};

export default LineChart;
