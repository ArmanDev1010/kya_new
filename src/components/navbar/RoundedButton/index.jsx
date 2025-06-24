import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function index({
  setIsActive,
  isActive,
  backgroundColor = "#F36967",
  ...attributes
}) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <div
      className="relative w-[50px] h-[50px] bg-[#1C1D20] rounded-full flex items-center justify-center cursor-pointer"
      style={{ overflow: "hidden" }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      onClick={() => setIsActive(!isActive)}
      {...attributes}
    >
      <div
        className={`w-full relative z-[1] 
                    after:content-[''] after:top-[-5px] after:block after:h-[1px] after:w-[40%] after:m-auto after:bg-white after:relative after:transition-[transform_0.3s]
                    before:content-[''] before:top-[5px] before:block before:h-[1px] before:w-[40%] before:m-auto before:bg-white before:relative before:transition-[transform_0.3s] 
                    ${
                      isActive
                        ? "after:!top-[-2px] after:rotate-45 before:!top-[0px] before:-rotate-45"
                        : ""
                    }`}
      ></div>
      <div
        ref={circle}
        style={{ backgroundColor }}
        className="w-full h-[150%] absolute rounded-[50%] top-[100%]"
      ></div>
    </div>
  );
}
