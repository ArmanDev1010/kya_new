import React, { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";

export default function index({ mouseMoveCor, is_course, planes_text }) {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const plane4 = useRef(null);
  const plane5 = useRef(null);

  const hero_planes = [
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
  ];

  const baseCoursePlanes = [
    { plane: plane1, top: "12", right: "13", bg: "#FED501" },
    { plane: plane2, top: "2", right: "20", bg: "#1FBDAF" },
    { plane: plane3, top: "3", right: "60", bg: "#F36967" },
    { plane: plane4, top: "14", right: "85", bg: "#CBBEDC" },
    { plane: plane5, top: "13", right: "45", bg: "#E97EFF" },
  ];

  const course_planes =
    is_course &&
    baseCoursePlanes.map((planes, i) => ({
      ...planes,
      text: planes_text[i],
    }));

  const planes = is_course ? course_planes : hero_planes;

  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.003;

  useEffect(() => {
    const { movementX, movementY } = mouseMoveCor;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  }, [mouseMoveCor]);

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    if (plane1.current)
      gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    if (plane2.current)
      gsap.set(plane2.current, {
        x: `+=${xForce * 0.5}`,
        y: `+=${yForce * 0.5}`,
      });
    if (plane3.current)
      gsap.set(plane3.current, {
        x: `+=${xForce * 0.25}`,
        y: `+=${yForce * 0.25}`,
      });
    if (plane4.current)
      gsap.set(plane4.current, {
        x: `+=${xForce * 0.7}`,
        y: `+=${yForce * 0.7}`,
      });
    if (plane5.current)
      gsap.set(plane5.current, {
        x: `+=${xForce * 0.9}`,
        y: `+=${yForce * 0.9}`,
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
    <ul className="">
      {planes.map(({ plane, text, top, right, bg }, key) => (
        <li
          key={key}
          ref={plane}
          className={`absolute z-[1] p-1 pointer-events-none ${
            is_course ? "text-xl max-_1600:text-lg" : "text-lg"
          }`}
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
  );
}
