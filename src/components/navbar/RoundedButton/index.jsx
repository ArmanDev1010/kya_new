import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function index({ menu, setIsActive, isActive, ...attributes }) {
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
      className="relative w-auto h-[60px] px-1 text-black rounded-full flex items-center justify-between cursor-pointer"
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      onClick={() => setIsActive(!isActive)}
      {...attributes}
    >
      <div className="mx-[1.5vw]" style={menu && { display: "none" }}>
        Menu
      </div>
      <div
        className="relative overflow-hidden rounded-[50%]"
        style={{ backgroundColor: `${!menu && "#1C1D20"}` }}
      >
        <div
          className={`relative bg-transparent z-[1] ${
            menu ? "w-[80px] h-[80px]" : "w-[50px] h-[50px]"
          }
                    after:content-[''] after:top-1/2 after:translate-y-[calc(-50%-5px)] after:block after:h-[1px] after:w-[40%] after:m-auto after:bg-white after:relative after:transition-[transform_0.3s]
                    before:content-[''] before:top-1/2 before:translate-y-[calc(-50%+5px)] before:block before:h-[1px] before:w-[40%] before:m-auto before:bg-white before:relative before:transition-[transform_0.3s] 
                    ${
                      isActive
                        ? "after:!translate-y-[calc(-50%-2px)] after:rotate-45 before:!translate-y-[calc(-50%+0px)] before:-rotate-45"
                        : ""
                    }`}
        ></div>
        <div
          ref={circle}
          style={{ backgroundColor: `${!menu && "#F36967"}` }}
          className="w-full h-[150%] absolute rounded-[50%] top-[100%] left-1/2 -translate-x-1/2"
        ></div>
      </div>
    </div>
  );
}
