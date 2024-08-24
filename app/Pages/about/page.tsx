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
          Before the begining to one of my longest & rewarding adventures back
          in 2021 I just finished college with a major in Psychology but wanted
          to make a change. I heard about coding for a while and davled a bit
          when I had complications with my computer or an app. Once I began the
          more I found myself burning to expand my knowledge & thought it would
          be a good place to explore my creativity. Fast forward to today, & I
          have two certifications in Front-end Web Development by Code The
          Dream(also known as CTD) and soon to be a certification in python.
          Moreover, currently have the pleasure to work as an apprentice for SAS
          data and AI solutions. <br className="mb-5" />
          My main focus for now centers on expanding my knowledge in UI/UX
          design & some backend work with Golang as part of the needs for SAS.
          Which I find to be great as I prefer that middle ground where design &
          engineering meet.
          <br className="mb-5" /> In my off time I try to continue this theme
          with even personal projects with the intent expanding my knowledge so
          that it can be transfered to other aspects of my life, namely my
          career. Albeit, also to still maintain the creative outlet & to just
          enjoy the adventure. When im not tied to my computer, I normally to go
          out for hikes, read, exercise, & explore art.
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
