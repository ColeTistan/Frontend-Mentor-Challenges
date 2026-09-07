import React from "react";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  return <div className="flex justify-between py-8 px-5 md:py-5 md:px-16 border-b-2 border-slate-300">
    <p className="text-xl font-extrabold">Where in the world?</p>
    <button className="flex items-center hover:bg-light"><IoMoonOutline />Dark Mode</button>
  </div>;
};

export default Navbar;
