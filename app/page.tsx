"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Image from "next/image";
import Journey from "@/app/Images/journey.jpg";
import Globe from "@/app/Images/Svg/globe.svg";
import Social from "@/app/Components/Social";
import About from "./Pages/About/page";
import Projects from "./Pages/Projects/page";
import Skills from "./Pages/Skills/page";
import Home from "./Pages/Home/page";
// import Layout from "./Pages/Layout";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  // const [isExpanded, setExpanded] = useState(false);
  // const [isPulsating, setPulsating] = useState(false);

  // const toggleExpansion = () => {
  //   setExpanded(!isExpanded);
  //   setPulsating(false);
  // };

  // const iconExpansion = () => {
  //   setPulsating(true);
  // };

  // ...
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
  // ...

  return (
    <div>
      <Navbar></Navbar>
      <main className="flex flex-col gap-20">
        {/* <Component {...pageProps} /> */}
        <Home />

        <About />
        <Projects />
        <Skills />
        <div className="min-h-screen bg-orange-500"></div>
      </main>
    </div>
  );
}
