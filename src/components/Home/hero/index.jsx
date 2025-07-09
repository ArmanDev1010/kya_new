"use client";

import { useState } from "react";

import SlidingImages from "./SlidingImages";
import TextFill from "../../common/TextFill";
import Planes from "../../common/Planes";

export default function index() {
  const [mouseMoveCor, setMouseMoveCor] = useState(0);

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        setMouseMoveCor(e);
      }}
    >
      <div className="relative w-full h-[35vh] bg-white mb-[2.2rem] px-[1%]">
        <div className="w-full h-full flex items-end">
          <h1 className="capitalize pointer-events-none font-[500] w-full">
            <TextFill title={"Unlocking Young Minds"} />
          </h1>
        </div>
      </div>
      <Planes mouseMoveCor={mouseMoveCor} />
      <SlidingImages />
    </div>
  );
}
