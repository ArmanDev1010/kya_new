import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import { IoStarSharp } from "react-icons/io5";
import { useMemo } from "react";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Testimonials({ testimonials }) {
  const starIcons = useMemo(
    () => [...Array(5)].map((_, key) => <IoStarSharp key={key} />),
    []
  );
  return (
    <div className="w-full mt-auto">
      <Swiper
        loop={true}
        spaceBetween={0}
        slidesPerView={1.5}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={3800}
        modules={[Autoplay]}
        className="w-full my-5"
      >
        {testimonials.map((testimonial, key) => (
          <SwiperSlide key={key}>
            <div className="p-6 w-[95%] h-[220px] text-left bg-white rounded-[20px] border-[1px] border-gray-200 flex flex-col justify-between pointer-events-none">
              <div className="">
                <div className="flex space-x-2 text-yellow-500 text-xl mb-4">
                  {starIcons}
                </div>
                <p
                  className={`${inter.className} text-gray-700 mt-2 line-clamp-4 overflow-hidden text-ellipsis text-base`}
                >
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center mt-4">
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
