"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Image from "next/image";
import Journey from "@/app/Images/journey.jpg";
import Globe from "@/app/Images/Svg/globe.svg";
import Social from "@/app/Components/Social";
import GlobeIcon from "./Components/GlobeIcon";
import About from "./Pages/About/page";
import Projects from "./Pages/Projects/page";
import Skills from "./Pages/Skills/page";
import Home from "./Pages/Home/page";

export default function MyApp() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll({
        smooth: true,
        multiplier: 0.5,
        class: "scroll-container",
        smartphone: { smooth: true },
      });
    })();
  }, []);

  return (
    <div className="p-5">
      <Navbar></Navbar>
      <GlobeIcon></GlobeIcon>
      <main className="flex flex-col gap-20">
        <Home />
        <About />
        <Projects />
        <Skills />
        <div className="min-h-screen bg-orange-500"></div>
      </main>
    </div>
  );
}
