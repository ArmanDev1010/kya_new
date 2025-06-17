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
import Link from "next/link";

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
    <div className="partners relative z-[0] w-full h-[65vh] bg-[linear-gradient(#fce6e7,#ffff)] mt-[60px]">
      <div className="grid grid-cols-2 px-[3%] pt-[50px] pb-[65px] pointer-events-none">
        <h2 className="text-[4.5vw] font-[500]">Our Partners</h2>
        <div className="">
          <div className="text-[1.3vw] leading-[1.2] tracking-[-0.04em] mt-[1rem] mb-[1.5rem]">
            <p className="w-[29vw]">
              Yes, we like to speak, but our work speaks for itself even louder.
              Dive into our portfolio and see how we turn ideas into impact,
              creativity into results, and vision into awards.
            </p>
          </div>
          <Link href={""} className="w-fit cursor-pointer">
            <p
              className="relative text-[1rem] uppercase font-[600] cursor-pointer w-fit !pointer-events-auto inline-block pl-4 ml-[1px] text-lg cursor-pointer font-[500] hover:pl-[64px]
              max-_1280:text-base max-_550:text-[15px] max-_360:text-[14px]
              before:content-[''] before:block before:absolute before:top-1/2 before:left-0 before:h-[1px] before:w-[8px] before:-translate-y-1/2 before:bg-black
              after:content-[''] after:block after:absolute after:top-1/2 after:left-[calc(100%+9px)] after:h-[1px] after:w-[56px] after:-translate-y-1/2 after:bg-black
              hover:after:w-[8px] hover:before:w-[56px] before:transition-[width_0.5s_ease] before:duration-[0.5s] after:transition-[width_0.5s_ease] after:duration-[0.5s]"
              style={{
                transition:
                  "padding-left .5s ease, right .5s ease, opacity .5s ease",
              }}
            >
              Become Our Partner
            </p>
          </Link>
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
        className="swiper_partner relative w-full h-full py-[30px]"
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
