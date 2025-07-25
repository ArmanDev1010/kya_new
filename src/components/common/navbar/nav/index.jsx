import React from "react";
import { motion } from "framer-motion";
import { menuSlide } from "./animation";
import Curve from "./Curve";
import Link from "next/link";

import links from "../../../../common/data/links.json";
import contactInfo from "../../../../common/data/contact.json";

import RoundedBtn from "../RoundedButton";

export default function index({ setIsActive, isActive }) {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-[rgb(41,41,41)] fixed right-0 top-0 text-white z-[999] min-w-[30%] max-_1600:min-w-[35%]"
    >
      <div className="box-border h-full p-[100px] flex flex-col">
        <ul className="flex flex-col gap-3 mt-[70px] max-_1600:mt-[40px]">
          {links.map((item, index) => (
            <Link
              href={`/${
                item.href ? item.href : item.link.split(" ")[0].toLowerCase()
              }`}
              key={index}
              className="w-fit"
            >
              <li className="line_hover_effect first-letter:capitalize before:!bg-white font-[500] text-[45px] cursor-pointer
              max-_1600:text-[2.5vw]">
                {item.link}
              </li>
            </Link>
          ))}
        </ul>
        <div className="absolute bottom-4 left-0 px-6 w-full flex justify-between text-lg max-_1600:text-base">
          <ul className="flex flex-col gap-2">
            {contactInfo.map(
              ({ type, values }) =>
                type == "phone" &&
                values.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      key={idx}
                      href={item.href}
                      className="line_hover_effect before:!bg-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))
            )}
          </ul>
          <ul className="flex flex-col gap-2 text-right">
            {contactInfo.map(
              ({ type, values }) =>
                type !== "phone" &&
                values.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      key={idx}
                      href={item.href}
                      className="line_hover_effect before:!bg-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))
            )}
          </ul>
        </div>
        <RoundedBtn
          menu={true}
          setIsActive={setIsActive}
          isActive={isActive}
          style={{
            position: "absolute",
            top: "30px",
            right: "30px",
          }}
        />
      </div>
      <Curve />
    </motion.div>
  );
}
