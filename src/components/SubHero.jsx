import React from "react";

const SubHero = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex flex-col pt-10 p-6 py-8 md:text-5xl text-left text-wrap items-start gap-6 font-bold font-sans w-full md:w-1/2">
        <p className="text-left text-lg text-slate-700 font-bold bg-white p-4 rounded">
          We are a premier{" "}
          <span className="text-green-600">software development agency</span>{" "}
          offering custom software solutions, expert consultancy, and
          comprehensive training programs. We are dedicated to driving
          innovation and success for your business through cutting-edge
          technology and strategic guidance.
        </p>
        <span className="text-slate-700 text-left text-lg font-bold bg-white p-4 rounded">
          To be a leading force in the software development industry, known for
          our creativity, reliability, and dedication to transforming complex
          challenges into simple, elegant solutions.
        </span>
      </div>
    </div>
  );
};

export default SubHero;
