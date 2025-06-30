"use client";

import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "business idea",
    paragraph:
      "Students explore real-world problems and generate creative business solutions rooted in their interests and values. They learn how to identify opportunities and turn ideas into potential ventures. This stage sparks entrepreneurial thinking and confidence.",
    color: "#F36967",
    src: "one",
  },
  {
    title: "first steps",
    paragraph:
      "With guidance, students begin building their idea—developing basic plans, prototypes, or branding. They gain hands-on experience in bringing concepts to life. It’s where ideas start becoming reality.",
    color: "#c3abff",
    src: "2",
  },
  {
    title: "investments",
    paragraph:
      "Students pitch their businesses to a entrepreneurs. They practice public speaking, refine their vision, and receive valuable feedback. Some have the opportunity to walk away with support or investment for their idea.",
    color: "#fed35b",
    src: "3",
  },
];

export default function index() {
  const container = useRef();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");

      ScrollTrigger.create({
        trigger: cards[0],
        start: "top 30%",
        endTrigger: cards[cards.length - 1],
        end: "top 35%",
        pin: ".intro",
        pinSpacing: false,
      });

      cards.forEach((card, key) => {
        const cardInner = card.querySelector(".card-inner");

        ScrollTrigger.create({
          trigger: card,
          start: "top 35%",
          endTrigger: ".outro",
          end: "top 75%",
          pin: true,
          pinSpacing: false,
        });
        gsap.to(cardInner, {
          y: `-${(cards.length - key) * 17}vh`,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 35%",
            endTrigger: ".outro",
            end: "top 75%",
            scrub: true,
          },
        });
      });
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <div className="" ref={container}>
      <div className="intro h-[200px]"></div>
      <div className="cards">
        {cards.map((text, key) => (
          <Card key={key} {...text} />
        ))}
      </div>
      <div className="outro"></div>
    </div>
  );
}

const Card = ({ title, paragraph, color, src }) => {
  return (
    <div className="card relative text-[#1e1e1e] h-[500px] max-_900:h-[300px]">
      <div
        className="card-inner relative will-change-transform w-full h-full p-[2em] flex gap-[4em]"
        style={{ backgroundColor: `${color}` }}
      >
        <div className="flex-[3] pointer-events-none">
          <h3 className="text-[6vw] capitalize font-[600] leading-[1] mb-[0.5em] max-_900:mb-[4rem]">
            {title}
          </h3>
          <p className="text-[1.5vw] max-w-[900px] font-[500] max-_900:hidden">
            {paragraph}
          </p>
        </div>
        <div
          className="flex-[2] overflow-hidden max-_900:hidden bg-gray-100 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/assets/course/cards/business/${src}.jpg)`,
          }}
        ></div>
      </div>
    </div>
  );
};
