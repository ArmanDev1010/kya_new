import Link from "next/link";
import Testimonials from "./Testimonials";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function index({ course, testimonials }) {
  return (
    <div className="relative bg-white text-black text-center pt-[40px] h-full _1600:w-[800px] _1280:w-[600px]">
      {/* <div className="w-full min-h-full flex flex-col">
        <div className="relative">
          <h1
            className={`${inter.className} font-semibold mb-8 pointer-events-none text-6xl max-_700:text-[8vw] max-_700:mb-5 max-_550:text-[9vw]`}
          >
            {course}
          </h1>
          <div className="w-full flex gap-4 px-[25px]">
            <Link href="./" className="w-full">
              <button
                className={`group ${inter.className} w-full py-[20px] bg-[#f4f4f4] rounded-[100px] relative cursor-pointer overflow-hidden uppercase`}
              >
                <p
                  className="relative top-0 group-hover:top-[-40px]"
                  style={{ transition: "top .4s cubic-bezier(.33,1,.68,1)" }}
                >
                  Sign up
                </p>
                <div
                  className="absolute top-[110%] left-0 w-full h-full flex items-center justify-center group-hover:top-0"
                  style={{ transition: "top .4s cubic-bezier(.33,1,.68,1)" }}
                >
                  <p className="absolute text-white">Sign up</p>
                  <div
                    className="bg-primary w-[60%] h-full rounded-[50%] group-hover:w-full group-hover:rounded-[100px]"
                    style={{ transition: "all .4s cubic-bezier(.33,1,.68,1)" }}
                  ></div>
                </div>
              </button>
            </Link>
            <Link href="./" className="w-full">
              <button
                className={`group ${inter.className} w-full py-[20px] flex items-center justify-center gap-[15px] bg-transparent border rounded-[100px] relative cursor-pointer overflow-hidden uppercase`}
              >
                <div
                  className="w-[8px] h-[8px] rounded-[50%] bg-black transition-all duration-[0.4s] ease-out 
                group-hover:scale-[50] group-hover:bg-thirdly"
                ></div>
                <p className="m-0 z-[2] group-hover:translate-x-[-10px] transition-all duration-[0.4s] ease-out">
                  Learn more
                </p>
              </button>
            </Link>
          </div>
        </div>
        <Testimonials testimonials={testimonials} />
      </div> */}
    </div>
  );
}
