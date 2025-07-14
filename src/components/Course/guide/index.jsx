"use client";

import { useState } from "react";
import Answer from "./answer";

export default function index({ guide }) {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="relative px-[3%] my-[2em]">
      <h2 className="text-[4vw] tracking-[-0.035em] leading-[1.02] indent-[24vw] mb-[7vw] pointer-events-none">
        When education has no limits, children start thinking like creators, not
        just learners. If you want your child to build the future — not just
        wait for it.
      </h2>
      <p className="relative text-[2.7vw] uppercase pointer-events-none pb-2 w-full before:content-[''] before:absolute before:bg-[#e5e7eb] before:w-full before:h-[0.5px] before:bottom-0 before:left-0">
        Course Guide
      </p>
      <div className="relative grid grid-cols-[repeat(8,1fr)]">
        <ul className="[grid-column:4_/_span_5]">
          {guide?.map((text, key) => (
            <Answer
              key={key}
              index={key}
              title={text.title}
              content={text.content}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
