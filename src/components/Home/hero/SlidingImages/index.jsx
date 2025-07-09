"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import Slider from "./Slider";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "1",
  },
  {
    color: "#d6d7dc",
    src: "2",
  },
  {
    color: "#e3e3e3",
    src: "3",
  },
  {
    color: "#21242b",
    src: "4",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "5",
  },
  {
    color: "#e5e0e1",
    src: "6",
  },
  {
    color: "#d7d4cf",
    src: "7",
  },
  {
    color: "#e1dad6",
    src: "8",
  },
];

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      className="w-full flex flex-col gap-[2vw] relative bg-white z-[1]"
    >
      <motion.div
        style={{ x: x1 }}
        className="flex relative z-[7] gap-[2vw] w-[120vw] left-[-10vw]"
      >
        {slider1.map((project, index) => (
          <Slider project={project} key={index} />
        ))}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="flex relative z-[7] gap-[2vw] w-[120vw] left-[2vw]"
      >
        {slider2.map((project, index) => (
          <Slider project={project} key={index} />
        ))}
      </motion.div>
      <motion.div
        style={{ height }}
        className="absolute bottom-0 left-0 w-full pointer-events-none z-[5]"
      >
        <div className="h-[1700%] w-[120%] left-[-10%] rounded-[0_0_50%_50%] bg-white absolute z-[5] shadow-[0px_60px_50px_rgba(244,244,244.7)]"></div>
      </motion.div>
    </div>
  );
}
