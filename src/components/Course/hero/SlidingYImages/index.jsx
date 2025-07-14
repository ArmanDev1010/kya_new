import React, { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";

const images = [
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
];

export default function index({ course }) {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <div className="relative smooth_parallax overflow-hidden">
      <div
        ref={gallery}
        className="h-screen relative flex gap-[2vw] p-[2vw] overflow-hidden bg-[#fce6e7]"
      >
        <Column images={[images[0], images[1]]} y={y} course={course} />
        <Column
          images={[images[2], images[3], images[4]]}
          y={y2}
          course={course}
        />
        <Column images={[images[5], images[6]]} y={y3} course={course} />
      </div>
    </div>
  );
}

const Column = ({ images, y, course }) => {
  return (
    <motion.div
      className="column relative h-full w-[33.3%] min-w-[250px] flex flex-col gap-[2vw] max-_550:min-w-[350px]"
      style={{ y }}
    >
      {images.map((text, i) => {
        return (
          <div
            key={i}
            className="min-h-[350px] bg-[#e3e3e3] flex items-center justify-center rounded-[1vw]"
            style={{ backgroundColor: text.color }}
          >
            <div className="relative w-[80%] h-[80%] rounded-[1vw] overflow-hidden">
              <Image
                src={`/assets/course/sliding_images/${course}/${text.src}.jpg`}
                fill={true}
                sizes="100%"
                alt=""
                className="w-full h-full object-cover bg-gray-200"
              />
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};
