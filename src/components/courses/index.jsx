"use client";

import { useEffect } from "react";

import Section from "./Section";
import TextFill from "../../common/TextFill";

import { scrollAnimations } from "./utils/smoothScroll";

import coursesData from "../data/courses.json";

export default function Index() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      scrollAnimations();
    }
  }, []);

  return (
    <div className="courses">
      <div className="relative w-full h-[40vh] bg-[linear-gradient(to_bottom,_#ffffff_0%,_#ffffff_60%,_#FDDDDF_100%)]">
        <TextFill title={"Our Courses"} isTitle={true} />
      </div>
      <div className="">
        {coursesData.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </div>
  );
}
