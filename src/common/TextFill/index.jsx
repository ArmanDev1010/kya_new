"use client";

import React, { useEffect, useRef } from "react";

export default function index({ isTitle, title, course }) {
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
    <div ref={containerRef} className="w-full h-full">
      <span
        className="mx-auto whitespace-nowrap text-center pointer-events-none leading-[1]"
        style={
          isTitle
            ? {
                position: "absolute",
                bottom: "0",
                left: "0",
                color: "#fcd5d7",
                fontWeight: "bold",
              }
            : { fontWeight: "500" }
        }
        ref={textRef}
      >
        {title ? title : course}
      </span>
    </div>
  );
}
