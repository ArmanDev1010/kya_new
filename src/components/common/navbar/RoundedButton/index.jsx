import React from "react";

export default function index({ menu, setIsActive, isActive, ...attributes }) {
  return (
    <div
      className="relative group w-auto h-[60px] px-1 text-black rounded-full flex items-center justify-between cursor-pointer"
      onClick={() => setIsActive(!isActive)}
      {...attributes}
    >
      <div className="mx-[1.5vw]" style={menu && { display: "none" }}>
        <div className="relative z-10 text-black overflow-hidden text-lg">
          <div className="group-hover:-translate-y-full transition duration-300">
            Menu
          </div>
          <div className="translate-y-full group-hover:translate-y-0 transition duration-300 absolute inset-0">
            Menu
          </div>
        </div>
      </div>
      <div
        className={`relative bg-transparent rounded-[50%] z-[1] ${
          menu ? "w-[80px] h-[80px]" : "w-[50px] h-[50px]"
        }
                    after:content-[''] after:top-1/2 after:translate-y-[calc(-50%-5px)] after:block after:h-[1px] after:w-[40%] after:m-auto after:bg-white after:relative after:transition-[transform_0.3s]
                    before:content-[''] before:top-1/2 before:translate-y-[calc(-50%+5px)] before:block before:h-[1px] before:w-[40%] before:m-auto before:bg-white before:relative before:transition-[transform_0.3s] 
                    ${
                      isActive
                        ? "after:!translate-y-[calc(-50%-2px)] after:rotate-45 before:!translate-y-[calc(-50%+0px)] before:-rotate-45"
                        : ""
                    }`}
        style={{ backgroundColor: `${!menu && "#1C1D20"}` }}
      ></div>
    </div>
  );
}
