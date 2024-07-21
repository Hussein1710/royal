import React from "react";
import backImg from "../assets/woman.jpg";
const Project = () => {
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
        <div className="flex flex-col p-5 m-2 md:text-5xl text-left items-start justify-center gap-4 font-bold font-sans w-full md:w-1/2">
          <p className="text-white text-left text-4xl font-bold">
            Start your project with us or take existing one{" "}
            <span className="text-green-600">to the next level</span>
          </p>
          <span className="text-slate-50 mt-10 text-left text-2xl font-bold">
            Horizon Tech Innovations is one of the fastest growing innovation consultancies in
            the world recognized by many
          </span>

          <button className="text-white text-sm px-6 py-2 bg-green-600 rounded-md shadow hover:bg-transparent">
            Become a Horizon partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
