import React from "react";
import Diversity from "../../assets/diversity.jpg";
const BeYourself = () => {
  return (
    <div className="block md:flex justify-center md:justify-between gap-6 my-8 py-8 px-6">
      <div className="w-full md:w-1/2">
        <img src={Diversity} alt="Diversity" />
      </div>

      <div className="text-slate-500 text-xl items-center flex justify-center w-full md:w-1/2 mt-6 md:mt-0">
        We foster an inclusive workplace culture, boost social participation,
        and advocate it outside of Netguru. We feel accountable for making our
        workspace culture inclusive, transparent, and socially responsible so
        everyone can realize their full potential while being their own person.
        We strive to make everyone feel a part of our team. Build a career that
        suits your lifestyle, in a company where your voice matters.
      </div>
    </div>
  );
};

export default BeYourself;
