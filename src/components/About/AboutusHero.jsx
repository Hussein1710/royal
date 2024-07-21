import React from "react";
import backImg from "../../assets/meeting.jpg";
const AboutusHero = () => {
  const divStyle = {
    backgroundImage: `url(${backImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  };
  return (
    <div>
      <div style={divStyle}>
        <div className="flex flex-col m-2 md:text-5xl text-left items-start justify-center gap-4 font-bold font-sans w-full md:w-1/2">
          <p className="text-black text-left text-4xl font-bold">
            Work with one of the fastest-growing{" "}
            <span className="text-green-600">
              digital consultancies in the world
            </span>
          </p>
          <span className="text-black mt-10 text-left text-lg font-serif">
            We design and develop web and mobile applications for our clients
            worldwide, focusing on outstanding user experience.
          </span>

          <button className="text-white text-sm px-6 py-2 bg-green-600 rounded-md shadow hover:bg-transparent">
            Let us work together
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutusHero;
