import React, { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";

const images = ["1", "2", "3", "4", "5", "6", "7"];

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
        <Column images={["1", "2"]} y={y} course={course} />
        <Column images={["3", "4", "5"]} y={y2} course={course} />
        <Column images={["6", "7"]} y={y3} course={course} />
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
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className="min-h-[350px] h-full w-full relative rounded-[1vw] overflow-hidden"
          >
            <Image
              src={`/assets/course/sliding_images/${course}/${src}.JPG`}
              fill={true}
              alt=""
              className="w-full h-full object-cover bg-gray-200"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
