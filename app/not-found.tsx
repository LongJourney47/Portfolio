"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import NasaWorldNetwork from "@/app/Images/ErrorImage/nasa-world-network.jpg";

import ErrorRedirect from "./components/ErrorHandling/ErrorRedirect";

const Error404 = ({ error }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen overflow-hidden relative">
      <Image
        alt="Astronaut floating in Space"
        src={NasaWorldNetwork}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        quality={100}
        loading="eager"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-white text-7xl font-bold mb-5 animate-trackingExpandFwdTop">
          404
        </h1>
        <p className="text-white text-lg animate-trackingInContact">
          Page Not Found! Seems you went way too far out. Lets try to get you
          back on track by <ErrorRedirect />
        </p>
      </div>
    </div>
  );
};

export default Error404;
