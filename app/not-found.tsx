"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import NasaAstro from "@/app/Images/ErrorImage/nasa-astro.jpg";
import ErrorRedirect from "./components/ErrorHandling/ErrorRedirect";
// import styles from "./components/ErrorHandling/Styled404.module.css";

const Error404 = ({ error }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen overflow-hidden relative">
      <Image
        alt="Astronaut floating in Space"
        src={NasaAstro}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        quality={100}
      />
      <div className="relative z-10 text-center">
        <h1 className="text-white text-5xl mb-5">404</h1>
        <p className="text-white text-lg">
          Page Not Found! Seems you went way too far out. Let's try to get you
          back on track by{' '}
          <ErrorRedirect />
        </p>
      </div>
    </div>
  );
};

export default Error404;
