import Link from "next/link";
import React from "react";

import coursesData from "../../common/data/courses.json";
import socialsData from "../../common/data/socials.json";
import links from "../../common/data/links.json";
import contactInfo from "../../common/data/contact.json";

import TextFill from "../../common/TextFill";

import logo from "../../../public/assets/logos/logo.png";
import Image from "next/image";

export default function index() {
  return (
    <footer className="relative mt-20 pt-10 pb-[24px] bg-[linear-gradient(#ffff,#fcd5d7)]">
      <div className="flex px-[3%] mb-10">
        <ul className="flex flex-col gap-[36px] flex-[0_0_24vw]">
          {contactInfo.map(({ type, values }, key) => (
            <li key={key} className="w-fit">
              <p className="uppercase text-base text-gray-500 mb-2 pointer-events-none">
                {type}
              </p>
              <div className="flex flex-col gap-3">
                {values.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="line_hover_effect text-2xl"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div className="flex-[0_0_24vw]">
          <p className="uppercase text-base text-gray-500 mb-5 pointer-events-none">
            Courses
          </p>
          <ul className="flex flex-col gap-5 text-xl capitalize">
            {coursesData.map((text, key) => (
              <li key={key}>
                <Link href={""} className="line_hover_effect">
                  {text.course}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-col gap-5 text-xl capitalize">
          {links.map((text, key) => (
            <li key={key}>
              <Link
                href={`/${
                  text.href ? text.href : text.link.split(" ")[0].toLowerCase()
                }`}
                className="line_hover_effect"
              >
                {text.link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex-[0_0_26vw]">
          <p className="uppercase text-base text-gray-500 mb-4 pointer-events-none">
            Socials
          </p>
          <ul className="flex justify-between gap-5 text-2xl font-[500] uppercase">
            {socialsData.map((text, key) => (
              <li key={key}>
                <Link href={text.href} className="line_hover_effect_reverse">
                  {text.type}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-5 px-[10px]">
        <Image src={logo} alt="" className="w-[14vw]" />
        <TextFill title={"KY Academy"} />
      </div>
      <div className="mt-16 px-[3%] flex justify-between items-center">
        <p className="text-lg text-gray-500 pointer-events-none">
          © 2025 KY Academy. All rights reserved.
        </p>
        <p className="text-lg pointer-events-none">
          Made by{" "}
          <Link
            href={"https://armanmanukyan.am/"}
            className="font-bold pointer-events-auto"
          >
            Arman Manukyan
          </Link>
        </p>
      </div>
    </footer>
  );
}
