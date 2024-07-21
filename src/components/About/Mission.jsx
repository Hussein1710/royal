import React from "react";

const Mission = () => {
  return (
    <div className="bg-gray-300 py-10 flex flex-col mt-8 font-serif">
      <h1 className="text-5xl font-sans font-bold m-2 p-2">VISION</h1>
      <div className="block md:flex justify-between px-12 gap-20 md:gap-10 mt-4">
      <div className="flex flex-col bg-white pb-48 p-2 gap-2 rounded-md">
        <h1 className="font-bold text-3xl">50+</h1>
        <p className="text-sm text-slate-500">Years on the market</p>
      </div>

      <div className="flex flex-col bg-white pb-48 p-2 gap-2 rounded-md mt-4">
        <h1 className="font-bold text-3xl">400+</h1>
        <p className="text-sm text-slate-500">People on board</p>
      </div>

      <div className="flex flex-col bg-white pb-48 p-2 gap-2 rounded-md mt-4">
        <h1 className="font-bold text-3xl">2500+</h1>
        <p className="text-sm text-slate-500">Projects to be delivered</p>
      </div>

      <div className="flex flex-col bg-white pb-48 p-2 gap-2 rounded-md mt-4">
        <h1 className="font-bold text-3xl">75</h1>
        <p className="text-sm text-slate-500">Projected NPS score</p>
      </div>
      </div>
    
    </div>
  );
};

export default Mission;
