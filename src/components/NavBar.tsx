import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <>
      <div className="hidden sm:flex sm:justify-between sm:py-4 px-8 lg:px-40">
        <div className="flex justify-evenly text-[#505F98]">
          <div className="px-3 lg:px-6">Home</div>
          <div className="px-3 lg:px-6">About</div>
          <div className="px-3 lg:px-6">Contact</div>
        </div>
        <div>
          <h1 className="text-xl text-[#37447E] font-extrabold">Landing</h1>
        </div>
        <div>
          <Button btnLabel="Buy Now" />
        </div>
      </div>
      <div className="flex sm:hidden">hamergerMenu</div>
    </>
  );
};

export default NavBar;
