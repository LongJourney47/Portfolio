"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
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
          <Link href="/About/page" className=" hover:bg-sky-700 !important">
            about
          </Link>
          <Link href="/Work/page" className="hover:line-through">
            work
          </Link>
          <Link href="#projects" passHref className="hover:line-through">
            projects
          </Link>
          <div className="hover:line-through">contact</div>
        </nav>
      </header>
      <progress
        id="scrollProgressBar"
        max="100"
        value="0"
        className="ml-5 fixed top-16 z-10 w-[94.5%] h-[2px] appearance-none border-none bg-white bg-opacity-20"
      >
        {" "}
        <style jsx>{`
          progress::-webkit-progress-bar {
            background-color: transparent;
          }
          progress::-webkit-progress-value {
            background-color: white;
            opacity: 0.5;
          }
          progress::-moz-progress-bar {
            background-color: white;
            opacity: 0.5;
          }
        `}</style>
      </progress>
    </>
  );
};

export default Navbar;
