import React from "react";

import TextFill from "../../../common/TextFill";

export default function Index({ video, course }) {
  return (
    <div className="course sticky top-0 h-screen overflow-hidden bg-white flex">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          src={`/assets/videos/${video}.mp4`}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute z-[2] top-[5%] left-1/2 -translate-x-1/2 w-[80%] mx-auto text-white">
        <TextFill course={course} />
        <div className="flex justify-center items-center gap-[30px] mt-10">
          <button className="group relative inline-block _1600:px-28 _1600:py-5 _1280:px-20 _1280:py-4 border-2 border-white overflow-hidden">
            <div className="relative overflow-hidden text-white font-semibold z-10 _1600:text-[26px] _1280:text-xl">
              <div className="group-hover:translate-y-[-110%] transition duration-300">
                Learn more
              </div>
              <div className="text-white translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
                Learn more
              </div>
            </div>
            <span className="absolute translate-y-full inset-0 bg-primary transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:-translate-y-0"></span>
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 bg-black/50 w-full h-full z-[1]"></div>
    </div>
  );
}
