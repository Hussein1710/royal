import React from 'react'
import backImg from "../assets/Arabs.png";
const Hero = () => {
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
          <p className='text-white text-left text-4xl font-bold'>Welcome To Dubai Royal Council <span className='text-green-600 text-center'>We Appreciate you here</span></p>
          <span className="text-slate-200 text-left text-2xl font-bold">
نحن نحب دبي
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero