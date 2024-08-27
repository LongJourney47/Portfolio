"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrollStyles, setScrollStyles] = useState({
    backdropFilter: "blur(0px)",
    backgroundColor: "rgba(255, 255, 255, 0)",
  });
  // sets progression for the background on the navbar to add blur
  const headerRef = useRef<HTMLDivElement>(null);
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

      const compressedProgress = compressScrollProgress(scrollProgress);

      const blurValue = Math.min((compressedProgress / 100) * 4, 4);
      const opacityValue = Math.min((compressedProgress / 100) * 0.1, 0.1);

      setScrollStyles({
        backdropFilter: `blur(${blurValue}px)`,
        backgroundColor: `rgba(255, 255, 255, ${opacityValue})`,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const compressScrollProgress = (progress: number) => {
    const compressionFactor = 0.3;
    return Math.pow(progress / 100, compressionFactor) * 100;
  };
  return (
    <div className="mr-5 mx-auto">
      <header
        ref={headerRef}
        style={scrollStyles}
        className="text-white text-xl z-[100] flex justify-between pb-8 pt-8 fixed top-0 w-[calc(100%-40px)] pr-10"
      >
        <div className="w-1/2 flex ">
          <h1 className=" font-roboto text-[1.1em] mr-8 ">
            William Cook Fernandez
          </h1>
          <h2 className="text-[1.1em]">Frontend Web Developer</h2>
        </div>

        <nav className="flex space-x-2">
          <Link href="#about" className="hover:line-through">
            about
          </Link>
          <Link href="#work" className="hover:line-through">
            work
          </Link>
          <Link href="#projects" passHref className="hover:line-through">
            projects
          </Link>
          <div className="hover:line-through ">contact</div>
        </nav>

        <progress
          id="scrollProgressBar"
          max="100"
          value="0"
          className="absolute w-full h-[2px] bottom-0 appearance-none border-none bg-white bg-opacity-20"
        >
          {/* controls the color of the progress bar */}
          <style jsx>{`
            progress::-webkit-progress-bar {
              background-color: transparent;
            }

            progress::-moz-progress-bar {
              background-color: white;
              opacity: 0.5;
            }
          `}</style>
        </progress>
      </header>
    </div>
  );
};

export default Navbar;
