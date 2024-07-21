import React from 'react'
import backImg from "../assets/developer.jpg";
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
          <p className='text-white text-left text-4xl font-bold'>Achieve your business goals with a leading <span className='text-green-600'>software development agency</span></p>
          <span className="text-slate-200 mt-10 text-left text-2xl font-bold">
          Grow your business, save time, and create beautiful custom software that delivers outstanding results
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero