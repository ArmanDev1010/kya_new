"use client";

import React, { useEffect, useRef } from "react";

export default function index() {
  const containerRef = useRef(null);
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

  return (
    <div
      className="relative w-full h-[60vh] bg-[linear-gradient(#ffff,#FDDDDF)]"
      ref={containerRef}
    >
      <span
        className="absolute bottom-0 left-0 text-[#fcd5d7] mx-auto whitespace-nowrap text-center font-bold leading-[1] pointer-events-none"
        ref={textRef}
      >
        Our Courses
      </span>
    </div>
  );
}
