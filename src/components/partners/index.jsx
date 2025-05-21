"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  bp,
  brandon,
  central,
  coke,
  digitain,
  mindcenter,
  stamina,
  ucom,
  viva,
  park,
} from "../../../public/assets";

const partners = [
  { src: bp },
  { src: brandon },
  { src: central },
  { src: coke },
  { src: digitain },
  { src: mindcenter },
  { src: stamina },
  { src: ucom },
  { src: viva },
  { src: park },
];

export default function index() {
  return (
    <div className="relative z-[-1] w-full h-[65vh] bg-[linear-gradient(#fce6e7,#ffff)]">
      <div className="grid grid-cols-2 px-[3%] pt-[36px] pb-[65px]">
        <h2 className="text-[4.5vw] font-[500]">Our Partners</h2>
        <div className="text-[1.3vw] leading-[1.2] tracking-[-0.04em] mt-[1rem]">
          <p className="w-[29vw]">
            Yes, we like to speak, but our work speaks for itself even louder.
            Dive into our portfolio and see how we turn ideas into impact,
            creativity into results, and vision into awards.
          </p>
        </div>
      </div>
      <Swiper
        loop={true}
        freeMode={true}
        spaceBetween={0}
        slidesPerView={5}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={1500}
        modules={[Autoplay]}
        className="swiper_partner relative w-full h-full py-[30px] pointer-events-none"
      >
        {partners.map((text, key) => (
          <SwiperSlide key={key}>
            <Image src={text.src} alt={key} className="partner_img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
