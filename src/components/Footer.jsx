import React from "react";
import Facebook from "../assets/Facebook.png"
import Linkedin from "../assets/Linked.png"
import Twitter from "../assets/Twitter.jpg"

const Footer = () => {
  return (
    <div className="mt-8 p-3">
         <div className="bg-white text-2xl text-green-700 mb-5 font-bold">
          <h1>HORIZON</h1>
        </div>
      <div className="container mx-auto font-semibold">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* First Row */}
          <div className="">
            <p>Join Our Community</p>
            <p>For developers</p>
            <p>Ecosystem</p>
            <p>Contact us</p>
          </div>
          {/* Second Row */}
            <div className="">
              <p>About Us</p>
              <p>partner with us</p>
              <p>Media</p>
              <p>Services</p>
          </div>
          {/* third Row */}
          <div className="">
              <p>Industries</p>
              <p>Global</p>
              <p>Resources</p>
              <p>Policy</p>
          </div>

          {/* Fourth Row */}
          <div className="">
            <p>Insight</p>
            <p>Community</p>
            <p>NPS</p>
            <p>Explore</p>
          </div>
        </div>
      </div>
      <div className="flex items-center w-14">
        <img src={Facebook} alt="facebook-icon" />
        <img src={Linkedin} alt="linkedin-icon" />
        <img src={Twitter} alt="twitter-icon" />
      </div>
    </div>
  );
};

export default Footer;