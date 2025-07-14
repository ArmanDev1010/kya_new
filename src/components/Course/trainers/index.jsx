import React from "react";

import team from "../../../common/data/team.json";

export default function index({ course }) {
  const trainers = team
    .filter((member) => member.trainer === course)
    .sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      if (a.order !== undefined) return -1;

      if (b.order !== undefined) return 1;

      return 0;
    });

  return (
    <div className="relative px-[3%] mb-20">
      <div className="grid grid-cols-[repeat(8,1fr)] gap-7 w-full border-t-[1px] pt-10">
        <div className="[grid-column:1_/_span_3] pointer-events-none">
          <p className="text-[5vw] font-[500] leading-[1] mb-6">
            {trainers.length <= 1 ? "Our Trainer" : "Trainers"}
          </p>
          <p className="text-[1.3vw]">
            Our work is conceptually rooted, strategically driven, and executed
            by creative minds who understand the bigger picture.
          </p>
        </div>
        <ul className="[grid-column:4_/_span_5] grid grid-cols-2 gap-x-[1vw] gap-y-[3vw]">
          {trainers.map(({ name, image }, key) => (
            <li key={key} className="group relative cursor-pointer">
              <div className="relative aspect-[420/420] w-full bg-gray-50">
                <div
                  className="relative z-[1] w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(/assets/home/team/${image}.png)`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-[linear-gradient(#f9fafb,#fce6e7)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="capitalize text-[1.3vw] text-ellipsis whitespace-nowrap overflow-hidden mt-[1vw] pointer-events-none">
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
