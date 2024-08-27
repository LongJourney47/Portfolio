import React from "react";

import CSSSvg from "../../Images/Svg/css-3-logo.svg";
import JSSvg from "../../Images/Svg/javascript-logo.svg";
import HTMLSvg from "../../Images/Svg/html-5-logo.svg";
import ReactSvg from "../../Images/Svg/react-logo.svg";
import FirebaseSvg from "../../Images/Svg/firebase-logo.svg";
import PythonSvg from "../../Images/Svg/python-logo.svg";
import NextPng from "../../Images/Next.js.png";
import GitSvg from "../../Images/Svg/git-logo.svg";
import TSSvg from "../../Images/Svg/typescript.svg";
import TailwindSvg from "../../Images/Svg/tailwind.svg";
import MaterialUISvg from "../../Images/Svg/material-ui.svg";
import GolangSvg from "../../Images/Svg/golang.svg";
import NodejsSvg from "../../Images/Svg/nodejs.svg";
import MondoDBSvg from "../../Images/Svg/mongodb.svg";
import FigmaSvg from "../../Images/Svg/figma.svg";

import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-cBrown text-white flex">
      <div className="text-white-500 center mb-5 mr-5 max-w-[40%] text-[1.5em] font-roboto mt-[5%] ml-[40px]">
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

      <aside className="mt-[1%] mr-[5%] ml-[5%] mb-[5%] text-white-500 w-full font-roboto border border-solid border-black">
        <p className="flex justify-center text-[3em] mb-[3%]">
          Techinical Expertise
        </p>
        <div className=" flex flex-wrap justify-between text-white-500 p-5 h-full text-[1.5em] font-roboto  w-full">
          <div className="flex justify-center items-center glossy-bg rounded h-30 w-15 transition-transform duration-200 ease-in-out hover:scale-110 mr-5 ml-5">
            <Image
              className="z-10"
              alt="css logo"
              width="90"
              height="90"
              src={CSSSvg}
            ></Image>
          </div>

          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110 mr-5 ml-5 ">
            <Image
              className="z-10"
              alt="html logo"
              width="110"
              height="110"
              src={HTMLSvg}
            ></Image>
          </div>
          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110   mr-5 ml-5">
            <Image
              className="z-10"
              alt="javascript logo"
              width="90"
              height="90"
              src={JSSvg}
            ></Image>
          </div>
          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110 mr-5 ml-5 ">
            <Image
              className="z-10"
              alt="typescript logo"
              width="100"
              height="100"
              src={TSSvg}
            ></Image>
          </div>
          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110 mr-5 ml-5 ">
            <Image
              className="z-10"
              alt="react.js logo"
              width="100"
              height="100"
              src={ReactSvg}
            ></Image>
          </div>
          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110 mr-5 ml-5 ">
            <Image
              className="z-10"
              alt="next.js logo"
              width="200"
              height="200"
              src={NextPng}
            ></Image>
          </div>
          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110 mr-5 ml-5 ">
            <Image
              className="z-10"
              alt="node.js logo"
              width="90"
              height="90"
              src={NodejsSvg}
            ></Image>
          </div>
          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110 mr-5 ml-5 ">
            <Image
              className="z-10"
              alt="go/golang logo"
              width="200"
              height="200"
              src={GolangSvg}
            ></Image>
          </div>
          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110 mr-5 ml-5 ">
            <Image
              className="z-10"
              alt="tailwind logo"
              width="100"
              height="100"
              src={TailwindSvg}
            ></Image>
          </div>
          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110 mr-5 ml-5 ">
            <Image
              className="z-10"
              alt="firebase logo"
              width="90"
              height="90"
              src={FirebaseSvg}
            ></Image>
          </div>
          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110  mr-5 ml-5">
            <Image
              className="z-10"
              alt="material-ui logo"
              width="100"
              height="100"
              src={MaterialUISvg}
            ></Image>
          </div>
          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110  mr-5 ml-5">
            <Image
              className="z-10"
              alt="python logo"
              width="100"
              height="100"
              src={PythonSvg}
            ></Image>
          </div>
          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110 mr-5 ml-5 ">
            <Image
              className="z-10"
              alt="css logo"
              width="100"
              height="100"
              src={GitSvg}
            ></Image>
          </div>
          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110  mr-5 ml-5">
            <Image
              className="z-10"
              alt="mongodb logo"
              width="170"
              height="170"
              src={MondoDBSvg}
            ></Image>
          </div>
          <div className="flex justify-center items-center rounded h-30 w-15 glossy-bg transition-transform duration-200 ease-in-out hover:scale-110 mr-5 ml-5">
            <Image
              className="z-10"
              alt="figma logo"
              width="90"
              height="90"
              src={FigmaSvg}
            ></Image>
          </div>
        </div>
      </aside>
    </section>
    // {/* </Layout> */}
  );
};

export default About;
