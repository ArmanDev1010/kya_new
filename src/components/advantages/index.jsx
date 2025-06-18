"use client";

import React, { useEffect } from "react";
import { scrollAnimations } from "./utils/smoothScroll";

const advatages = [
  {
    title: "Investments",
    paragraph:
      "We along with our partners, invest in the most promising business projects created by our students. It’s our way of turning great ideas into real-world ventures and fueling their path to success.",
  },
  {
    title: "Scholarship",
    paragraph:
      "Our top-performing students have the chance to earn scholarships, recognizing their dedication, growth, and outstanding achievements.",
  },
  {
    title: "Visits",
    paragraph:
      "Our students get the opportunity to visit top companies, explore how leading businesses operate, and connect with industry professionals. It’s an inspiring way to learn beyond the classroom.",
  },
  {
    title: "Meetings",
    paragraph:
      "Take part in exclusive meetings with successful entrepreneurs and top industry leaders, gaining firsthand insights, advice, and motivation from those who’ve built it big",
  },
];

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      scrollAnimations();
    }
  }, []);

  return (
    <div className="sticky-section relative h-[100vh] overflow-hidden">
      <div className="slider relative w-full h-full overflow-hidden">
        <div className="slides flex w-[400vw] h-full will-change-transform">
          {advatages.map((text, key) => (
            <div className="slide w-[100vw] h-full relative" key={key}>
              <div className="absolute w-full h-full overflow-hidden">
                <div
                  className="slide_img absolute w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(/assets/advantages/${text.title.toLowerCase()}.jpg)`,
                  }}
                ></div>
              </div>
              <div className="title relative z-10 text-white pt-[60px] px-[80px] pointer-events-none">
                <h2 className="font-[700] text-[6vw] uppercase">
                  {text.title}
                </h2>
                <div
                  className="font-[400] tracking-[-0.02em] pointer-events-none 
          _1600:text-[1.3vw] _1600:leading-[1.5]"
                >
                  <p className="w-[40vw]">{text.paragraph}</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full border-[28px] border-white"></div>
    </div>
  );
}
