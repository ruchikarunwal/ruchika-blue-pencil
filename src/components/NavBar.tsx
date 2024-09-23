import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import burgerBar from "../assets/burger-bar.png";

const NavBar = () => {
  return (
    <>
      <div className="hidden sm:flex sm:justify-between sm:py-4 px-8 lg:px-40">
        <div className="flex justify-evenly text-[#505F98]">
          <div className="px-3 lg:px-6">
            <Link to="/">Home</Link>
          </div>
          <div className="px-3 lg:px-6">About</div>
          <div className="px-3 lg:px-6">Contact</div>
        </div>
        <div>
          <h1 className="text-xl text-[#37447E] font-extrabold">Landing</h1>
        </div>
        <div>
          <Button btnLabel="Buy Now" onClick={() => {}} />
        </div>
      </div>
      <div className="flex flex-row px-6 pt-4 md:hidden justify-between items-center">
        <h1 className="text-xl text-[#37447E] font-extrabold pl-2">Landing</h1>
        <img src={burgerBar} className="w-6 h-6 float-right object-contain" />
      </div>
      {/* <div className="flex sm:hidden bg-white h-screen">
        <h1 className="text-xl text-[#37447E] font-extrabold">Landing</h1>
        <div className="border-1 border-[#111b47]" />
        <div className="flex flex-col justify-evenly text-[#505F98] px-4">
          <div className="px-3 lg:px-6">
            <Link to="/">Home</Link>
          </div>
          <div className="px-3 lg:px-6">About</div>
          <div className="px-3 lg:px-6">Contact</div>
          <div>
            <Button btnLabel="Buy Now" onClick={() => {}} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default NavBar;
