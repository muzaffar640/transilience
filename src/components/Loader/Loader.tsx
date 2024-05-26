import React from "react";
import { DotWave } from "@uiball/loaders";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <DotWave size={40} speed={1.5} color="black" />
    </div>
  );
};

export default Loader;
