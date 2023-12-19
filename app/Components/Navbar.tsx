'use client'
import React, { useState } from "react";


const Navbar = () => {

  // const [isExpanded, setExpanded] = useState(false);
  // const [isPulsating, setPulsating] = useState(false);

  // const toggleExpansion = () => {
  //   setExpanded(!isExpanded);
  //   setPulsating(false);
  // };

  // const iconExpansion = () => {
  //   setPulsating(true);
  // };
  return (
    <>
      <header className="text-black-500 flex justify-between backdrop-blur-sm z-10 pb-5 pt-5 bg-white bg-opacity-10 ">
            <div className="w-1/2 flex pl-5">
              <h1 className="pr-5 font-roboto text-[1.1em]">
                William Cook Fernandez
              </h1>
              <h2 className="text-[1.1em]">Frontend Web Developer</h2>
            </div>

            <nav className="flex space-x-2 pr-5">
              <a className="hover:line-through">about</a>
              <a className="hover:line-through">work</a>
              <a className="hover:line-through">projects</a>
              {/* <div className="hover:line-through" onClick={iconExpansion}>
                contact
              </div> */}
            </nav>
          </header>
          <div className=" border-t mr-5 ml-5 border-solid border-opacity-50 border-taupe-300"></div>
    </>
  );
};

export default Navbar;
