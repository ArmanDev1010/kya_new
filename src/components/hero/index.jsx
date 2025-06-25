"use client";

import { useRef } from "react";
import gsap from "gsap";

import SlidingImages from "./SlidingImages";
import TextFill from "../../common/TextFill";

export default function index() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const plane4 = useRef(null);

  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.003;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });
    gsap.set(plane4.current, {
      x: `+=${xForce * 0.7}`,
      y: `+=${yForce * 0.7}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };
  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
    >
      <div className="relative w-full h-[35vh] bg-white mb-[2.2rem] px-[1%]">
        <div className="w-full h-full flex items-end">
          <h1 className="capitalize pointer-events-none font-[400] w-full">
            <TextFill title={"Unlocking Young Minds"} />
          </h1>
        </div>
        <ul className="">
          {[
            {
              plane: plane1,
              text: "It's never too early",
              top: "4",
              right: "13",
              bg: "#F36967",
            },
            {
              plane: plane2,
              text: "New skills New experience",
              top: "2",
              right: "20",
              bg: "#1FBDAF",
            },
            {
              plane: plane3,
              text: "Non-formal education",
              top: "3",
              right: "50",
              bg: "#FED501",
            },
            {
              plane: plane4,
              text: "7-17 year olds",
              top: "5",
              right: "65",
              bg: "#CBBEDC",
            },
          ].map(({ plane, text, top, right, bg }, key) => (
            <li
              key={key}
              ref={plane}
              className={`absolute z-[1] p-1 text-[0.9vw]`}
              style={{
                backgroundColor: `${bg}`,
                right: `${right}vw`,
                top: `${top}vw`,
              }}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
      <SlidingImages />
    </div>
  );
}
