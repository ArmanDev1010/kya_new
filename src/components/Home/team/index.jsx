"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import team from "../../../common/data/team.json";

export default function TeamSection() {
  const columnsPerRow = 3;

  return (
    <div className="relative px-[3%] mb-20">
      <h2 className="text-right text-[6vw] font-[500] pointer-events-none pr-[10vw] mb-[50px]">
        Our Team
      </h2>

      <div className="space-y-[5vw]">
        {Array.from({
          length: Math.ceil(team.length / columnsPerRow),
        }).map((_, rowIndex) => {
          const rowMembers = team.slice(
            rowIndex * columnsPerRow,
            (rowIndex + 1) * columnsPerRow
          );

          const rowRef = useRef(null);
          const { scrollYProgress } = useScroll({
            target: rowRef,
            offset: ["start end", "end start"],
          });

          return (
            <ul
              key={rowIndex}
              ref={rowRef}
              className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[3vw] max-w-[calc(100vw_-_(2*2.2222222222vw))] mx-auto"
            >
              {rowMembers.map((member, columnIndex) => {
                let scrollOffset = 0;
                let scrollOffsetEnd = 0;

                if (columnIndex === 1) {
                  scrollOffset = 95;
                  scrollOffsetEnd = -30;
                } else if (columnIndex === 2) {
                  scrollOffset = 190;
                  scrollOffsetEnd = -60;
                }

                const y = useTransform(
                  scrollYProgress,
                  [0, 0.5],
                  [scrollOffset, scrollOffsetEnd]
                );

                return (
                  <motion.li
                    key={columnIndex}
                    className="group relative border-t-[1px] border-t-black cursor-pointer"
                    style={{ y }}
                  >
                    <p
                      className="capitalize text-[1.1vw] text-ellipsis whitespace-nowrap overflow-hidden my-[2.5vw] pointer-events-none
                    max-_1600:text-[1.2vw]"
                    >
                      <span>{member.name}</span> • <span>{member.role}</span>
                    </p>
                    <div className="relative aspect-[420/420] w-full bg-gray-50">
                      <div
                        className="relative z-[1] w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(/assets/home/team/${member.image}.png)`,
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-[linear-gradient(#f9fafb,#fce6e7)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
