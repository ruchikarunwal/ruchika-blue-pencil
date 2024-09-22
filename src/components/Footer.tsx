import React from "react";
import Button from "./Button";
import facebook from "../assets/facebook.jpg";
import linkedin from "../assets/linkedin.jpg";
import twitter from "../assets/twitter.jpg";
import youtube from "../assets/youtube.jpg";
import instagram from "../assets/instagram.jpg";

const Footer = () => {
  return (
    <div className="bg-[#E7ECFF] py-10 px-8 lg:px-40">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <p className="text-[#939EA4]">@2023 Ruchika Runwal</p>
        <p className="text-2xl font-bold text-[#37447E]">Landing</p>
        <Button btnLabel="Purchase Now" />
      </div>
      <div className="border border-[#CDD1D4] mt-8 mb-4" />
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex justify-evenly text-[#939EA4]">
          <div className="px-3 lg:px-6">Home</div>
          <div className="px-3 lg:px-6">About</div>
          <div className="px-3 lg:px-6">Contact</div>
        </div>
        <div className="flex justify-evenly text-[#505F98]">
          <img src={facebook} className="px-3 lg:px-6" />
          <img src={linkedin} className="px-3 lg:px-6" />
          <img src={twitter} className="px-3 lg:px-6" />
          <img src={youtube} className="px-3 lg:px-6" />
          <img src={instagram} className="px-3 lg:px-6" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
