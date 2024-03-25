import React, { useState } from "react";
// import Layout from "../Layout";

const About: React.FC = () => {
  const handleCardFlip = () => {
    console.log("Flip is triggered!!");
  };

  return (
    // <Layout>
    <section className="min-h-screen bg-cBrown text-white flex">
      <div className="text-white-500 center mb-5 mr-5 max-w-[40%] text-[1.5em] font-roboto mt-[10%] ml-[40px]">
        <p className="mb-5">
          The name is William albeit people normally call me Will. Back in 2021
          I was in the middle of wanting to make a change both in career
          prospects and goals. Which eventually led me to reignite an old
          passion for programming that continues into today. From solo studies,
          to bootcamp, to apprenticeship the eagerness to build new projects
          continues.
        </p>
        <p className="mb-5">
          The primary focus now is to continue improving my Frontend Dev skills
          as there is always something new to learn and ways I can improve.
          While I am not doing that I take time to understand more of the
          backend. That can enable me to have a more rounded perspective and
          experience with development.
        </p>

        <p>
          When I am not coding I like to study history, exercise, hike, explore,
          read, and try my hand in art of various forms.
        </p>
      </div>

      <aside className="mt-[15%] text-white-500 w-full mb-5 mr-5 text-[1.5em] font-roboto border border-solid border-black">
        <div className="text-white-500 flex h-full  mb-5 mr-5  text-[1.5em] font-roboto border border-solid border-white w-full">
          <div
            onClick={handleCardFlip}
            className="rounded h-[45%] w-[18%] bg-blue-500 absolute right-[37%] border-solid border-black"
          >
            1
          </div>
          <div className=" rounded h-[45%] w-[18%] bg-orange-500 absolute right-[25%] border-solid border-black">
            2
          </div>
          <div className="rounded h-[45%] w-[18%] bg-green-500  absolute right-[13%] border-solid border-black">
            3
          </div>
          <div
            onClick={handleCardFlip}
            className=" rounded h-[45%] w-[18%] bg-yellow-500  absolute right-[1%] border-solid border-black"
          >
            4
          </div>
        </div>
      </aside>
    </section>
    // {/* </Layout> */}
  );
};

export default About;
