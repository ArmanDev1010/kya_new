"use client";

import Link from "next/link";
import React, { useRef } from "react";

export default function index() {
  const containerRef = useRef(null);
  return (
    <div
      className="relative h-screen px-[3%] my-[30px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/assets/leaderboard/leaderboard.png)` }}
    >
      <div className="w-full flex justify-between">
        <h2 className="text-[9vw] font-[600] leading-[1.2] text-[#d9d9d9] mix-blend-difference pointer-events-none">
          Leaderboard
        </h2>
        <div className="relative z-[999999999999999999999] flex flex-col mt-[3rem]">
          <div className="font-[500] self-end text-[1.3vw] leading-[1.4] tracking-[-0.02em] pointer-events-none">
            <p className="w-[32vw]">
              Track your child’s academic journey! Our leaderboard displays
              standout students in each class, reflecting their hard work,
              progress, and success. Check where your student ranks and cheer on
              their achievements!
            </p>
          </div>
          <Link
            href={"/"}
            className="group mt-[1.5rem] max-w-[300px] border-[1px] rounded-full border-black cursor-pointer px-[58px] py-4 outline-none transition duration-200 hover:bg-secondary"
          >
            <div className="relative overflow-hidden text-center text-[1.1vw] font-[600]">
              <div className="group-hover:translate-y-[-110%] transition duration-300">
                View Points
              </div>
              <div className="text-white translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
                View Points
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
