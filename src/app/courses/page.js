"use client";

import React, { useEffect } from "react";

import { scrollAnimations } from "../../components/Home/courses/utils/smoothScroll";

import coursesData from "../../common/data/courses.json";

import Card from "../../components/Courses/card";

export default function Courses() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      scrollAnimations();
    }
  }, []);

  return (
    <div className="courses">
      {coursesData.map(({ course, title, description, planes }, key) => (
        <Card
          course={course}
          title={title}
          description={description}
          planes={planes}
          key={key}
        />
      ))}
    </div>
  );
}
