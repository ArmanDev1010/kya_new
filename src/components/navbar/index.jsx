import Image from "next/image";
import Link from "next/link";

import Black_Logo from "../../../public/assets/logos/black_text_logo.png";

export default function index() {
  return (
    <div className="flex items-center justify-between relative z-[10] px-[64px] h-[120px] max-_1080:!px-[5%]">
      <Link href="/">
        <Image
          src={Black_Logo}
          alt="logo"
          className="cursor-pointer !w-[280px] !h-auto"
        />
      </Link>
      <ul className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-14 max-_1440:hidden">
        {["about us", "courses", "Leaderboard"].map((item, index) => (
          <Link href="/" key={index}>
            <li className="capitalize font-[500] text-[19px] cursor-pointer translate-ease duration-300 hover:opacity-70 max-_1600:text-[17px]">
              {item}
            </li>
          </Link>
        ))}
      </ul>
      <div className="">
        <Link
          href={"tel:+37498600834"}
          className="text-[15px] cursor-pointer translate-ease duration-300 hover:opacity-70"
        >
          +374 (098) 60 08 34
        </Link>
        <button className="group font-[500] p-[12px_45px] border-[1px] relative cursor-pointer overflow-hidden ml-[28px] bg-white">
          <p
            className="relative top-0 group-hover:top-[-40px]"
            style={{ transition: "top .4s cubic-bezier(.33,1,.68,1)" }}
          >
            Contact Us
          </p>
          <div
            className="w-full h-full absolute top-[110%] left-0 flex items-center justify-center group-hover:top-0"
            style={{ transition: "top .4s cubic-bezier(.33,1,.68,1)" }}
          >
            <p className="absolute text-white">Contact Us</p>
            <div
              className="bg-primary w-full h-full"
              style={{ transition: "all .4s cubic-bezier(.33,1,.68,1)" }}
            ></div>
          </div>
        </button>
      </div>
    </div>
  );
}
