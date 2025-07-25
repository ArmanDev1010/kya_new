"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import Black_Logo from "../../../../public/assets/logos/black_text_logo.png";
import Logo from "../../../../public/assets/logos/logo.png";

import RoundedBtn from "./RoundedButton";
import Nav from "./nav";

import links from "../../../common/data/links.json";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 150) {
        setScrollDirection("down");
        setIsActive(false);
      } else if (currentY < lastScrollY) {
        setScrollDirection("up");
        setIsActive(false);
      }

      setScrollY(currentY);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`relative w-full z-[50] transition-opacity duration-300 ${
          scrollY <= 150 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-[3%] h-[110px] max-_1080:!px-[3%]">
          <Link href="/">
            <Image
              src={Black_Logo}
              alt="logo"
              className="cursor-pointer !w-[280px] !h-auto max-_1600:!w-[250px]"
            />
          </Link>
          <ul className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-14 max-_1440:hidden">
            {links.map(
              (item, index) =>
                item.main_header && (
                  <Link
                    href={`/${item.link.split(" ")[0].toLowerCase()}`}
                    key={index}
                  >
                    <li className="line_hover_effect first-letter:capitalize font-[500] text-[19px] cursor-pointer max-_1600:text-[18px]">
                      {item.link}
                    </li>
                  </Link>
                )
            )}
          </ul>
          <div className="flex items-center gap-[28px]">
            <Link
              href={"tel:+37498600834"}
              className="text-[15px] cursor-pointer hover:opacity-70 transition duration-300"
            >
              +374 (098) 60 08 34
            </Link>
            <Link
              href={"/contact"}
              className="group p-[12px_60px] font-[500] border-[1px] border-black/70 rounded-full relative cursor-pointer overflow-hidden"
            >
              <p
                className="relative text-center top-0 group-hover:top-[-40px]"
                style={{ transition: "top .4s cubic-bezier(.33,1,.68,1)" }}
              >
                Contact us
              </p>
              <div
                className="w-full h-full absolute top-[110%] left-0 flex items-center justify-center group-hover:top-0"
                style={{ transition: "top .4s cubic-bezier(.33,1,.68,1)" }}
              >
                <p className="absolute text-white">Contact us</p>
                <div
                  className="bg-primary w-[60%] h-full rounded-[50%] group-hover:w-full group-hover:rounded-[100px]"
                  style={{ transition: "all .4s cubic-bezier(.33,1,.68,1)" }}
                ></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {scrollDirection === "up" && scrollY > 150 && (
          <motion.div
            key="fixed-header"
            initial={{ y: -120 }}
            animate={{ y: 0 }}
            exit={{ y: -120 }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="fixed top-0 left-0 w-full z-[99]"
          >
            <div className="flex items-center justify-between px-[64px] h-[120px] max-_1080:!px-[5%]">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="logo"
                  className="cursor-pointer !w-[90px] !h-auto"
                />
              </Link>
              <RoundedBtn
                setIsActive={setIsActive}
                isActive={isActive}
                style={{
                  backgroundColor: "#f4efe7",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isActive ? (
          <Nav setIsActive={setIsActive} isActive={isActive} />
        ) : null}
      </AnimatePresence>
    </>
  );
}
