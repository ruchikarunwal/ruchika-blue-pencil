import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import burgerBar from "../assets/burger-bar.png";

const NavBar = () => {
  // state use to open and close full screen div as nav bar for mobile screen
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle mobile nav bar div on click of hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hidden sm:flex sm:justify-between sm:items-center sm:py-4 px-8 lg:px-40">
        <div className="flex justify-evenly text-[#505F98] font-medium">
          <div className="px-3 lg:px-6">
            <Link to="/">Home</Link>
          </div>
          <div className="px-3 lg:px-6">
            <Link to="/">About</Link>
          </div>
          <div className="px-3 lg:px-6">
            <Link to="/">Contact</Link>
          </div>
        </div>
        <div>
          <h1 className="text-xl text-[#37447E] font-extrabold">Landing</h1>
        </div>
        <div>
          <Button btnLabel="Buy Now" onClick={() => {}} />
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="flex flex-row px-6 pt-4 sm:hidden justify-between items-center">
        <h1 className="text-xl text-[#37447E] font-extrabold pl-2">Landing</h1>
        <img
          src={burgerBar}
          className="w-6 h-6 float-right object-contain"
          onClick={toggleMenu}
        />
      </div>

      {/* on hamburger click section */}
      <div
        className={`${
          isOpen ? "flex flex-col fixed" : "hidden"
        }  w-screen h-screen sm:hidden bg-white z-50 pt-6`}
      >
        <div className="flex flex-row justify-between items-center px-4 mb-10">
          <h1 className="text-xl text-[#37447E] font-extrabold px-2">
            Landing
          </h1>
          <img
            src={burgerBar}
            className="w-6 h-6 float-right object-contain"
            onClick={toggleMenu}
          />
        </div>
        <div className="border-1 border-[#111b47]" />
        <div className="flex flex-col gap-4 text-[#505F98] px-4">
          <div className="px-3 lg:px-6">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </div>
          <div className="px-3 lg:px-6">
            <Link to="/" onClick={toggleMenu}>
              About
            </Link>
          </div>
          <div className="px-3 lg:px-6">
            <Link to="/" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
          <div className="px-3 lg:px-6">
            <Link to="/feature/80" onClick={toggleMenu}>
              Feature 80
            </Link>
          </div>
          <div className="mt-6">
            <Button btnLabel="Buy Now" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
