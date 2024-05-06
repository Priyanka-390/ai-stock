"use client";
import React, { useState, useEffect } from "react";
import { Uparrow } from "./Icons";
const Backtop = () => {


  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div>
      <button
        className={` animate-bounce-slow border-2 flex justify-center w-[45px] h-[45px] bg-gradient-to-r to-[#00FFE1] from-[#6E5DF6] rounded-full items-center p-2  fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300   hover:shadow-[1px_1px_1px_1px_purple-600] ${
          backToTop ? "" : "hidden"
        }`}
        onClick={() => top()}
      >
        <Uparrow />
      </button>
    </div>
  );
};

export default Backtop;
