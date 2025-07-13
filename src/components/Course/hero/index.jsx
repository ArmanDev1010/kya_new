"use client";

import React, { useState } from "react";

import TextFill from "../../common/TextFill";
import Planes from "../../common/Planes";

import SlidingYImages from "./SlidingYImages";

export default function index({ course, title, description }) {
  const [mouseMoveCor, setMouseMoveCor] = useState(0);

  return (
    <div
      className="relative pt-[1em]"
      onMouseMove={(e) => {
        setMouseMoveCor(e);
      }}
    >
      <div className="relative px-[1%] mb-10">
        <h1 className="font-[500] max-_1600:font-[400]">
          <TextFill title={title} />
        </h1>
        <Planes mouseMoveCor={mouseMoveCor} course={course} is_course={true} />
      </div>
      <div className="flex justify-center text-center mb-12">
        <div className="max-w-[850px]">
          <p className="text-[1.8vw] pointer-events-none mb-[40px] max-_1600:mb-8">
            {description}
          </p>
          <button className="group capitalize relative bg-primary inline-block px-36 py-5 overflow-hidden max-_1600:py-4 max-_1600:px-32">
            <div className="relative overflow-hidden text-white font-semibold z-10 _1600:text-[26px] _1280:text-xl">
              <div className="group-hover:translate-y-[-110%] transition duration-300">
                Sign up to a Free Class
              </div>
              <div className="text-black translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
                Sign up
              </div>
            </div>
            <span className="absolute translate-y-full inset-0 bg-thirdly transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:-translate-y-0"></span>
          </button>
        </div>
      </div>
      <SlidingYImages course={course} />
    </div>
  );
}
