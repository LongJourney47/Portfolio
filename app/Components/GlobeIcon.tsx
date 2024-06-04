import React, { useState } from "react";
import Image from "next/image";
import Globe from "@/app/Images/Svg/globe.svg";
import Social from "@/app/Components/Social";

export default function GlobeIcon() {
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
    <>
      {/* specific to the globe icon position */}
      <div className="w-12 h-12 z-10 fixed right-0 bottom-0  cursor-pointer mb-5 mr-5">
        <div>
          <div
            className={`w-12 h-12 relative  mr-5 ${
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
          <aside className="fixed right-0 bottom-[20%] mr-6 w-10 bg-white bg-opacity-10 backdrop-blur-sm p-2 transition-all transform translate-y-full rounded-md h-40">
            <Social />
          </aside>
        )}
      </div>
    </>
  );
}
