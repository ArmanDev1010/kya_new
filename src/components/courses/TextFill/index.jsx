"use client";

import React, { useEffect, useRef } from "react";

export default function index({ containerRef, coursetitle, course }) {
  const textRef = useRef(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  const course_title =
    "absolute bottom-0 left-0 text-[#fcd5d7] mx-auto whitespace-nowrap text-center font-bold leading-[1] pointer-events-none";
  const course_name =
    "mx-auto whitespace-nowrap text-center font-semibold leading-[1.2] pointer-events-none";

  return (
    <span
      className={`${coursetitle ? course_title : course_name}`}
      ref={textRef}
    >
      {coursetitle ? "Our Courses" : course}
    </span>
  );
}
