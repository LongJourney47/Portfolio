import React from "react";

import Image from "next/image";
import Journey from "@/app/Images/journey.jpg";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <Image
        alt="A map with a journal, pencil, camera, photos, rope, glasses, and magnifying glass laid out"
        src={Journey}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        quality={100}
        loading="eager"
      ></Image>

      <section className="text-white z-10 w-full h-full">
        <div>
          <div className="absolute left-0 bottom-[24%] mb-5 ml-5 max-w-3xl max-h-52 text-7xl font-serif font-bold">
            An architect of <br /> the web
          </div>

          <p className="absolute bottom-[15%] right-0 mb-5 mr-5 max-w-[28%] max-h-[50%] text-[2em] leading-normal font-roboto">
            Current frontend web developer with a curious mind and a love for
            adventure. Exploring different methods and technologies to build
            interesting yet functional web applications.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
