"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import Black_Logo from "../../../public/assets/logos/black_text_logo.png";
import Rounded from "./RoundedButton";
import Nav from "./nav";
import links from "../../common/data/links.json";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isActive, setIsActive] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        // Scrolling down
        setShowHeader(false);
        setIsActive(false);
      } else if (currentY < lastScrollY) {
        // Scrolling up
        setShowHeader(true);
        setIsActive(false);
      } else if (currentY <= 50) {
        // Back to top
        setShowHeader(true);
      }

      setScrollY(currentY);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Large vs Small styling
  const isLarge = scrollY <= 50;

  return (
    <>
      <AnimatePresence mode="wait">
        {showHeader && (
          <motion.div
            key={isLarge ? "large" : "small"}
            initial={{ y: -120 }}
            animate={{ y: 0 }}
            exit={{ y: -120 }}
            transition={{ duration: 0.4, ease: "linear" }}
            className={`fixed top-0 left-0 w-full z-[99] bg-white ${
              !isLarge ? "border-b border-gray-200" : ""
            }`}
          >
            <div
              className={`flex items-center justify-between px-[64px] max-_1080:!px-[5%] transition-all duration-300 ${
                isLarge ? "h-[120px]" : "h-[65px]"
              }`}
            >
              <Link href="/">
                <Image
                  src={Black_Logo}
                  alt="logo"
                  className={`cursor-pointer !h-auto transition-all duration-300 ${
                    isLarge ? "!w-[280px]" : "!w-[200px]"
                  }`}
                />
              </Link>

              <ul
                className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center max-_1440:hidden ${
                  isLarge ? "gap-14" : "gap-10"
                }`}
              >
                {links.map(
                  (item, index) =>
                    item.main_header && (
                      <Link
                        href={`/${item.link.split(" ")[0].toLowerCase()}`}
                        key={index}
                      >
                        <li
                          className={`line_hover_effect first-letter:capitalize font-[500] cursor-pointer ${
                            isLarge
                              ? "text-[19px] max-_1600:text-[17px]"
                              : "text-[17px]"
                          }`}
                        >
                          {item.link}
                        </li>
                      </Link>
                    )
                )}
              </ul>

              <div
                className={`flex items-center gap-[28px] ${
                  isLarge ? "gap-[28px]" : "gap-[20px]"
                }`}
              >
                <Link
                  href={"tel:+37498600834"}
                  className={`cursor-pointer hover:opacity-70 transition duration-300 ${
                    isLarge ? "text-[15px]" : "text-[14px]"
                  }`}
                >
                  +374 (098) 60 08 34
                </Link>

                <Link href="/contact">
                  <button className="group relative font-[400] py-[12px] px-[60px] border bg-white overflow-hidden">
                    <div className="relative z-10 text-black overflow-hidden">
                      <div className="group-hover:-translate-y-full transition duration-300">
                        Contact us
                      </div>
                      <div className="text-white translate-y-full group-hover:translate-y-0 transition duration-300 absolute inset-0">
                        Contact us
                      </div>
                    </div>
                    <span className="absolute inset-0 translate-y-full bg-primary transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:translate-y-0"></span>
                  </button>
                </Link>
              </div>

              <Rounded
                onClick={() => setIsActive(!isActive)}
                className="_1280:hidden relative w-[50px] h-[50px] bg-[#1C1D20] rounded-full flex items-center justify-center cursor-pointer"
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
              </Rounded>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isActive && <Nav isActive={isActive} setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
}
