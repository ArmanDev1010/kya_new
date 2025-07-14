"use client";

import React, { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { ScrollTrigger } from "gsap/all";

export default function Answer({
  index,
  title,
  content,
  activeIndex,
  setActiveIndex,
}) {
  const contentRef = useRef(null);

  const isActive = activeIndex === index;

  useEffect(() => {
    contentRef.current.style.maxHeight = isActive
      ? `${contentRef.current.scrollHeight}px`
      : "0px";

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);

    return () => clearTimeout(timeout);
  }, [isActive]);

  const toggle = () => {
    setActiveIndex(isActive ? null : index);
  };

  const answer_style =
    "max-h-0 overflow-hidden transition-all duration-[0.5s] ease";

  return (
    <li className="group border-b-[1px] last:border-b-0">
      <div
        className="flex justify-between cursor-pointer py-7"
        onClick={toggle}
      >
        <div className="flex-[0.8] flex capitalize pointer-events-none">
          <span className="text-lg text-gray-400">0{index + 1}.</span>
          <div className="relative overflow-hidden ml-10 text-2xl text-gray-700">
            <div className="group-hover:translate-y-[-110%] transition duration-300">
              {title}
            </div>
            <div className="translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
              {title}
            </div>
          </div>
        </div>
        <IoIosArrowDown
          className={`text-2xl transition-[transform_0.6s_ease] ${
            isActive ? `-rotate-90` : `rotate-0`
          }`}
        />
      </div>
      <div
        className={isActive ? `${answer_style} answer-divider` : answer_style}
        ref={contentRef}
      >
        <ul className="flex flex-col gap-4 pt-[2.5rem] pb-7 text-gray-500 grid grid-cols-2 pointer-events-none">
          {content?.map((text, key) => (
            <li key={key}>
              <span>L{text}.</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
