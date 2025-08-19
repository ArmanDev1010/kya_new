"use client";

import React, { useState } from "react";

import Link from "next/link";

import Planes from "../../common/Planes";
import TextFill from "../../common/TextFill";

export default function index({ course, title, description, planes }) {
  const [mouseMoveCor, setMouseMoveCor] = useState(0);
  return (
    <div
      className="course sticky top-0 h-[80vh] overflow-hidden bg-white flex"
      key={index}
      onMouseMove={(e) => {
        setMouseMoveCor(e);
      }}
    >
      <div className="flex gap-4 w-full h-full py-2 px-4">
        <div className="relative w-1/2 text-black mx-auto rounded-[40px] bg-gray-100 px-[2%] py-10">
          <div className="font-[500] text-[#222] pointer-events-none mb-10">
            <TextFill title={title} />
          </div>
          <Link href={`/courses/${course}`}>
            <p
              className="relative text-xl uppercase font-[600] cursor-pointer w-fit !pointer-events-auto inline-block pl-4 ml-[1px] text-lg cursor-pointer font-[500] hover:pl-[64px]
              max-_1600:text-xl
              before:content-[''] before:block before:absolute before:top-1/2 before:left-0 before:h-[1px] before:w-[8px] before:-translate-y-1/2 before:bg-black
              after:content-[''] after:block after:absolute after:top-1/2 after:left-[calc(100%+9px)] after:h-[1px] after:w-[56px] after:-translate-y-1/2 after:bg-black
              hover:after:w-[8px] hover:before:w-[56px] before:transition-[width_0.5s_ease] before:duration-[0.5s] after:transition-[width_0.5s_ease] after:duration-[0.5s]"
              style={{
                transition:
                  "padding-left .5s ease, right .5s ease, opacity .5s ease",
              }}
            >
              Learn more
            </p>
          </Link>
          <p className="absolute bottom-5 right-10 text-2xl w-[50%] text-right pointer-events-none">
            {description}
          </p>
        </div>
        <div className="w-1/2 h-full rounded-[40px] overflow-hidden">
          <video
            src={`/assets/videos/${course}.mp4`}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Planes
        mouseMoveCor={mouseMoveCor}
        is_courses={true}
        planes_text={planes}
      />
    </div>
  );
}
