"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Journey from "@/app/Images/journey.jpg";
import Globe from "@/app/Images/Svg/globe.svg";
import Social from "@/app/Components/Social";

export default function Home() {
  const [isExpanded, setExpanded] = useState(false);
  const [isPulsating, setPulsating] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
    setPulsating(false);
  };

  const iconExpansion = () => {
    setPulsating(true);
  };

  return (
    <div className="min-h-screen ">
      <Image
        alt="wood desk with laptop and other tech items laid out"
        src={Journey}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        quality={100}
        loading="eager"
      ></Image>

      <section className="absolute text-white z-10 w-full h-full">
        <div>
          {/* <header className="text-black-500 flex justify-between backdrop-blur-sm  pb-5 pt-5 bg-white bg-opacity-10 ">
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
              <div className="hover:line-through" onClick={iconExpansion}>
                contact
              </div>
            </nav>
          </header> */}
          {/* <div className=" border-t mr-5 ml-5 border-solid border-opacity-50 border-taupe-300"></div> */}

          <div className="absolute left-0 bottom-[24%] mb-5 ml-5 max-w-3xl max-h-52 text-7xl font-serif font-bold">
            An architect of <br /> the web
          </div>

          <p className="absolute bottom-[15%] right-0 mb-5 mr-5 max-w-[28%] max-h-[50%] text-[2em] leading-normal font-roboto">
            Current frontend web developer with a curious mind and a love for
            adventure. Exploring different methods and technologies to build
            interesting yet functional web applications.
          </p>

          <div className="w-12 h-12">
            <div className="absolute right-0 bottom-0 w-12 h-12 cursor-pointer mb-5 mr-5">
              <div
                className={`w-12 h-12 relative mb-5 mr-5 ${
                  isPulsating ? "animate-pulse" : ""
                }`}
              >
                <Image
                  alt="network globe icon"
                  src={Globe}
                  className="w-12 h-12"
                  onClick={toggleExpansion}
                />
              </div>
            </div>
            {isExpanded && (
              <aside className=" absolute  right-0 bottom-[24%] mb-5 mr-6 w-10 bg-white bg-opacity-10 backdrop-blur-sm p-2 transition-all transform translate-y-full br-5 rounded-md ...">
                <Social />
              </aside>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
