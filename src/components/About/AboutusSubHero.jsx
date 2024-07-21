import React from "react";

const AboutusSubHero = () => {
  return (
    <div className="flex flex-col mt-6 md:mt-14 p-8 md:p-16 text-left text-wrap items-start gap-6 font-serif">
      <p className="text-3xl">
        Building software for{" "}
        <span className="bg-gradient-to-r from-green-300 via-green-500 rounded-lg">
          world changers
        </span>
      </p>

      <div className="w-full md:w-[800px] text-xl">
        <p>
          Horizon Tech Innovations, a digital acceleration consultancy launched
          in 2023, specializes in developing innovative digital products that
          transform how people and businesses operate. We offer a comprehensive
          range of tools, resources, and expertise to help companies of all
          sizes create beautiful and effective digital solutions quickly and
          according to their unique requirements.
        </p>
      </div>
   
    </div>
  );
};

export default AboutusSubHero;
