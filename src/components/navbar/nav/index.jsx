import React from "react";
import { motion } from "framer-motion";
import { menuSlide } from "./animation";
import Curve from "./Curve";
import Link from "next/link";

import links from "../../../common/data/links.json";
import contactInfo from "../../../common/data/contact.json";

import Rounded from "../RoundedButton";

export default function index({ setIsActive, isActive }) {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-[rgb(41,41,41)] fixed right-0 top-0 text-white z-[999] min-w-[30%]"
    >
      <div className="box-border h-full p-[100px] flex flex-col">
        <ul className="flex flex-col gap-3 mt-[70px]">
          {links.map((item, index) => (
            <Link
              href={`/${
                item.href ? item.href : item.link.split(" ")[0].toLowerCase()
              }`}
              key={index}
              className="w-fit"
            >
              <li className="line_hover_effect first-letter:capitalize before:!bg-white font-[500] text-[45px] cursor-pointer">
                {item.link}
              </li>
            </Link>
          ))}
        </ul>
        <div className="absolute bottom-4 left-0 px-6 w-full flex justify-between">
          <ul className="flex flex-col gap-2">
            {contactInfo.map(
              ({ type, values }) =>
                type == "phone" &&
                values.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      key={idx}
                      href={item.href}
                      className="line_hover_effect before:!bg-white text-lg"
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
                      className="line_hover_effect before:!bg-white text-lg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))
            )}
          </ul>
        </div>
        <Rounded
          setIsActive={setIsActive}
          isActive={isActive}
          style={{
            overflow: "hidden",
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "80px",
            height: "80px",
            background: "transparent",
          }}
        />
      </div>
      <Curve />
    </motion.div>
  );
}
