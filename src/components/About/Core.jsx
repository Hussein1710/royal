import React from "react";

const Core = () => {
  return (
    <div className="block md:flex justify-center md:justify-between gap-6 my-8 py-8 px-6">
      <div className="text-5xl font-serif font-bold w-full md:w-1/2">
        Horizon's <span className="text-green-700">Core values</span>
      </div>
      <div className="text-slate-500 text-xl w-full md:w-1/2 mt-6 md:mt-0">
        Our values shape the way we work with our clients, delivering
        outstanding user experience supported by cutting-edge technologies. They
        epitomise what we want to achieve, and they might change in the future,
        as we aim higher and higher. We think of those values as important to
        our culture and individual sense of accomplishment.
      </div>
    </div>
  );
};

export default Core;
