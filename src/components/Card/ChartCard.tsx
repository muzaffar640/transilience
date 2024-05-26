import React from "react";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  onMaximize: () => void;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  children,
  onMaximize,
}) => {
  return (
    <div className="relative bg-white py-4 rounded shadow h-[310px]">
      <div className="flex justify-between items-center pb-2 px-4 border-b-2">
        <h2 className="text-lg font-medium text-[#5c5c5c]">{title}</h2>
        <button className=" rounded-full p-1" onClick={onMaximize}>
          ⛶
        </button>
      </div>
      <div className="pt-4 px-4 h-[calc(100%-3rem)] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
