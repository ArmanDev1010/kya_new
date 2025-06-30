"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  anahit_communication,
  arman_trainer,
  armans_trainer,
  garegin_director,
  lilit_founder,
  lilit_smm,
  mane_mood,
  samvel_trainer,
  susanna_trainer,
} from "../../../../public/assets";

export default function TeamSection() {
  const allMembers = [
    { name: "Lilit Vatoyan", role: "Founder", image: lilit_founder },
    {
      name: "Garegin Xachatryan",
      role: "oparetions director",
      image: garegin_director,
    },
    { name: "Arman Minasyan", role: "business trainer", image: arman_trainer },
    { name: "Samvel Jabaxyan", role: "law trainer", image: samvel_trainer },
    {
      name: "Susanna Mkhitaryan",
      role: "marketing trainer",
      image: susanna_trainer,
    },
    {
      name: "Arman Sargsyan",
      role: "psychologist / trainer",
      image: armans_trainer,
    },
    { name: "Lilit Hovsepyan", role: "smm specialist", image: lilit_smm },
    {
      name: "Anahit Alaverdyan",
      role: "communication specialist",
      image: anahit_communication,
    },
    { name: "Mane Sargsyan", role: "mood maker", image: mane_mood },
  ];

  const columnsPerRow = 3;

  return (
    <div className="relative px-[3%] mb-20">
      <h2 className="text-right text-[6vw] font-[500] pointer-events-none pr-[10vw] mb-[50px]">
        Our Team
      </h2>

      <div className="space-y-[5vw]">
        {Array.from({
          length: Math.ceil(allMembers.length / columnsPerRow),
        }).map((_, rowIndex) => {
          const rowMembers = allMembers.slice(
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
                    <p className="capitalize text-[1.1vw] text-ellipsis whitespace-nowrap overflow-hidden my-[2.5vw] pointer-events-none
                    max-_1600:text-[1.2vw]">
                      <span>{member.name}</span> • <span>{member.role}</span>
                    </p>
                    <div className="relative aspect-[420/420] w-full bg-gray-50">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="relative z-[1] w-full h-full object-cover"
                      />
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
