import React from "react";
import Facebook from "../assets/Facebook.png"
import Linkedin from "../assets/Linked.png"
import Twitter from "../assets/Twitter.jpg"

const Footer = () => {
  return (
    <div className="mt-8 p-3">
         <div className="text-2xl text-green-700 mb-5 font-bold">
          <h1>ROYAL COUNCIL UAE</h1>
        </div>
      <div className="flex items-center w-14">
        <img src={Facebook} alt="facebook-icon" />
        {/* <img src={Linkedin} alt="linkedin-icon" /> */}
        <img src={Twitter} alt="twitter-icon" />
      </div>
    </div>
  );
};

export default Footer;