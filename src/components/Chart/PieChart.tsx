"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

import { ChartData, ChartOptions } from "chart.js/auto";

interface PieChartProps {
  data: ChartData<"pie">;
  options?: ChartOptions<"pie">;
}

const defaultOptions: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

const PieChart: React.FC<PieChartProps> = ({ data, options }) => {
  return (
    <div className="w-full h-full">
      <Pie data={data} options={{ ...defaultOptions, ...options }} />
    </div>
  );
};

export default PieChart;
