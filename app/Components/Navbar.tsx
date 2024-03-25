"use client";
import React, { useState, useEffect } from "react";

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
  // window.addEventListener("scroll", function () {
  //   // Calculate the scroll progress
  //   let scrollProgress =
  //     ((document.documentElement.scrollTop || document.body.scrollTop) /
  //       (document.documentElement.scrollHeight -
  //         document.documentElement.clientHeight)) *
  //     100;

  //   // Update the value of the progress bar
  //   document.getElementById("scrollProgressBar").value = scrollProgress;
  // });
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress =
        ((document.documentElement.scrollTop || document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100;
      const progressBar = document.getElementById("scrollProgressBar");
      if (progressBar) {
        progressBar.setAttribute("value", scrollProgress.toString());
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className="text-white flex justify-between backdrop-blur-sm z-10 pb-5 pt-5 bg-white bg-opacity-10 fixed w-full ">
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

        {/* <div className="relative top-16"></div> */}

        {/* <progress
          // id="scrollProgressBar"
          max="100"
          value="0"
          className=" absolute w-full h-50 appearance-none left-0 border-none bottom--1 bg-transparent"
        ></progress> */}
      </header>
      {/* <div className=" border-t mr-5 ml-5 border-solid border-opacity-50 border-taupe-300"></div> */}
      {/* <div className="relative top-16"></div> */}
      <progress
        id="scrollProgressBar"
        max="100"
        value="0"
        className=" fixed top-16 z-10 w-full h-[1px] appearance-none left-0 border-none bottom--1 bg-transparent text-white"
      >
        {" "}
        <style jsx>{`
          progress::-webkit-progress-bar {
            background-color: transparent;
          }
          progress::-webkit-progress-value {
            background-color: white;
          }
          progress::-moz-progress-bar {
            background-color: white;
          }
        `}</style>
      </progress>
    </>
  );
};

export default Navbar;
