"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Journey from "@/app/Images/journey.jpg";
import Globe from "@/app/Images/Svg/globe.svg";
import Social from "@/app/Components/Social";
import About from "./Pages/About/page";
import Projects from "./Pages/Projects/page";
import Skills from "./Pages/Skills/page";
import Home from "./Pages/Home/page";


export default function Page() {
  const [isExpanded, setExpanded] = useState(false);
  const [isPulsating, setPulsating] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
    setPulsating(false);
  };

  const iconExpansion = () => {
    setPulsating(true);
  };



// useEffect(()=> {
//   (
//     async ()=> {
//       const LocomotiveScroll = (await import('locomotive-scroll')).default
//       const locomotiveScroll = new LocomotiveScroll()
//     }
//   )()
// },[])

  return (
    < ><main className="flex flex-col gap-20">
      <Home></Home>
    <About></About>
  <Projects></Projects>
  <Skills></Skills>
  <div className="min-h-screen bg-orange-500"></div>
  </main>
     
    </>
  );
}




