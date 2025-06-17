"use client";

import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <div
      className="relative h-screen px-[3%] my-[30px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/assets/leaderboard/leaderboard.png)` }}
    >
      <div className="w-full flex justify-between">
        <h2
          className="font-[600] leading-[1.2] text-[#d9d9d9] mix-blend-difference pointer-events-none
        _1600:text-[9vw] _1280:text-[8.5vw]"
        >
          Leaderboard
        </h2>
        <div className="relative z-[1] flex flex-col mt-[3rem]">
          <div
            className="font-[500] self-end leading-[1.4] tracking-[-0.02em] pointer-events-none 
          _1600:text-[1.3vw] _1600:leading-[1.5] _1280:text-[1.35vw] _1280:leading-[1.5]"
          >
            <p className="w-[32vw]">
              Track your child’s academic journey! Our leaderboard displays
              standout students in each class, reflecting their hard work,
              progress, and success. Check where your student ranks and cheer on
              their achievements!
            </p>
          </div>
          <Link
            href={"/"}
            className="group mt-[1.5rem] font-[600] border-[1px] border-black rounded-full relative cursor-pointer overflow-hidden
            _1600:max-w-[320px] _1600:text-[1.1vw] _1600:py-4 _1280:max-w-[270px] _1280:text-[1.2vw] _1280:py-[14px]"
          >
            <p
              className="relative text-center top-0 group-hover:top-[-40px]"
              style={{ transition: "top .4s cubic-bezier(.33,1,.68,1)" }}
            >
              View Points
            </p>
            <div
              className="w-full h-full absolute top-[110%] left-0 flex items-center justify-center group-hover:top-0"
              style={{ transition: "top .4s cubic-bezier(.33,1,.68,1)" }}
            >
              <p className="absolute text-white">View Points</p>
              <div
                className="bg-primary w-[60%] h-full rounded-[50%] group-hover:w-full group-hover:rounded-[100px]"
                style={{ transition: "all .4s cubic-bezier(.33,1,.68,1)" }}
              ></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
